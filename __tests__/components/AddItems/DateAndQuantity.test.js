import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';

import DateAndQuantity from '../../../components/AddItems/DateAndQuantity';

const expiryFormData = {
  expiry: [
    {
      date: '2023-06-28',
      total_quantityopen: 10,
      total_quantityunopened: 5,
    },
    {
      date: '2025-06-28',
      total_quantityopen: 15,
      total_quantityunopened: 40,
    },
  ],
  min_quantityopen: 0,
  min_quantityunopened: 0,
};

const setExpiryFormData = jest.fn();
const expiryFormError = {
  name: false,
  type: false,
  unit: false,
  image: false,
  expiry: [
    { date: false, total_quantityopen: false, total_quantityunopened: false },
  ],
  min_quantityopen: false,
  min_quantityunopened: false,
};
const setExpiryFormError = jest.fn();
const index = 0;

describe('DateAndQuantity', () => {
  beforeEach(() => {
    render(
      <DateAndQuantity
        expiryFormData={expiryFormData}
        setExpiryFormData={setExpiryFormData}
        expiryFormError={expiryFormError}
        setExpiryFormError={setExpiryFormError}
        index={index}
      />,
    );
  });

  it('should render the component', () => {
    expect(screen.getByLabelText('Expiry Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Total Quantity (Open)')).toBeInTheDocument();
    expect(
      screen.getByLabelText('Total Quantity (Unopened)'),
    ).toBeInTheDocument();
    expect(screen.getByText('Remove')).toBeInTheDocument();
  });

  it('should set form data when the date picker value changes', () => {
    const datePicker = screen.getByLabelText('Expiry Date');
    fireEvent.change(datePicker, { target: { value: '2023-06-29' } });
    expect(setExpiryFormData).toBeCalledTimes(1);
    expect(setExpiryFormError).toBeCalledTimes(1);
  });

  it('should set form data when the input value changes', () => {
    const openQuantityInput = screen.getByLabelText('Total Quantity (Open)');
    fireEvent.change(openQuantityInput, { target: { value: '45' } });
    expect(setExpiryFormData).toHaveBeenCalled();

    const UnopenedQuantityInput = screen.getByLabelText(
      'Total Quantity (Unopened)',
    );
    fireEvent.change(UnopenedQuantityInput, { target: { value: '65' } });
    expect(setExpiryFormData).toHaveBeenCalled();
  });

  it('should set form data when the "Remove" button is clicked', () => {
    expect(screen.getByText('Remove')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Remove'));
    expect(setExpiryFormData).toHaveBeenCalled();
  });
});
