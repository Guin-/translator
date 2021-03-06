from django.conf.urls import url, include
from rest_framework import routers
from .views import TranslationViewSet

router = routers.DefaultRouter()
router.register(r'translation', TranslationViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
