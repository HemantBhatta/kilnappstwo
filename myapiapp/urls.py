from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users',views.UserViewSet)

urlpatterns = [
    path('workers/<int:pk>', views.workers_detail),
    path('workers/', views.workers_list),
    path('kiln/<int:pk>', views.kiln_detail),
    path('kiln/', views.kiln_list),   
    path('index/',views.index),
    path('',include(router.urls)),
   
]
