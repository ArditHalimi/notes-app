from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/accounts/', include('rest_registration.api.urls')),
    path('api/notes/', include('notes.urls')),
]
