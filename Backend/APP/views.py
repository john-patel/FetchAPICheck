from django.shortcuts import render
from django.shortcuts import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt  # Use this if you want to disable CSRF protection for this view
import json
from .models import getData

@csrf_exempt  # Use this decorator if you want to disable CSRF protection for this view
def SendData(request):
    if request.method == 'GET':
        # Handle the GET request
        my_model_objects = getData.objects.all()
        data = {'data' : list(my_model_objects.values())} 
        return JsonResponse(data)

    elif request.method == 'POST':
        print("I am working")
        data = json.loads(request.body.decode('utf-8'))
        print(data)
        message = {'Data' : 'Data send succesfully..!'}
        saveData = getData(userName=data['Name'])
        saveData.save()
        return JsonResponse(message)
    else : 
        return JsonResponse(message)