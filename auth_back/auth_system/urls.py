from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib import admin

urlpatterns = [
    # Admin site
    path('admin/', admin.site.urls),

    # Your authentication paths
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    path('notes/', include('notes.urls')),
]

# This re_path will match anything that isn't preceded by /admin
urlpatterns += [
    re_path(r'^(?!admin/).*$', TemplateView.as_view(template_name='index.html')),
]
