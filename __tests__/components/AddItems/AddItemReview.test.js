import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import AddItemReview from '../../../components/AddItems/AddItemReview';

const itemFormData = {
  name: 'Test Item',
  type: 'Type A',
  unit: 'Unit A',
  image: 'test-image-url',
  total_quantityopen: 10,
  total_quantityunopened: 5,
  min_quantityopen: 1,
  min_quantityunopened: 2,
};

describe('AddItemReview', () => {
  it('renders the component with correct item data', () => {
    const { getByText, getByAltText } = render(
      <AddItemReview itemFormData={itemFormData} />,
    );

    expect(getByText('Confirm New Item:')).toBeInTheDocument();
    expect(getByAltText('new-item')).toHaveAttribute('src', 'test-image-url');
    expect(getByText('Name:')).toBeInTheDocument();
    expect(getByText('Test Item')).toBeInTheDocument();
    expect(getByText('Type:')).toBeInTheDocument();
    expect(getByText('Type A')).toBeInTheDocument();
    expect(getByText('Unit:')).toBeInTheDocument();
    expect(getByText('Unit A')).toBeInTheDocument();
    expect(getByText('Total Quantity (Open):')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
    expect(getByText('Total Quantity (Unopened):')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('Min Quantity (Unopened):')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
  });

  it('renders the component with required props', () => {
    const { getByText } = render(<AddItemReview itemFormData={itemFormData} />);

    expect(getByText('Confirm New Item:')).toBeInTheDocument();
    expect(getByText('Name:')).toBeInTheDocument();
    expect(getByText('Type:')).toBeInTheDocument();
    expect(getByText('Unit:')).toBeInTheDocument();
    expect(getByText('Total Quantity (Open):')).toBeInTheDocument();
    expect(getByText('Total Quantity (Unopened):')).toBeInTheDocument();
    expect(getByText('Min Quantity (Unopened):')).toBeInTheDocument();
  });
});
