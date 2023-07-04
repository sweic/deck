# myapp/api_urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("items", views.api_items, name="api_items"),
    path("user", views.api_user, name="api_user"),
    path("add_item_post", views.add_item_post, name="add_item_post"),
    path("add_expiry_post", views.add_expiry_post, name="add_expiry_post"),
]
