from django.contrib import admin
from .models import Note


@admin.register(Note)
class RequestDemoAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Note._meta.get_fields()]
