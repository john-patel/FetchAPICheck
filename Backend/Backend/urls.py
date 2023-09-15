from django.contrib import admin
from django.urls import path
from APP import views as vw

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', vw.SendData)
]
