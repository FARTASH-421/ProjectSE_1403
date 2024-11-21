from django.shortcuts import render
from .models import Room
rooms = [{'id':1, 'name':'room1'},{'id':2, 'name':'room1'},{'id':3, 'name':'room3'}]

def home(request):
    rooms = Room.objects.all()
    return render(request, 'base/home.html',{'rooms':rooms})

def room(request,pk):
    room = Room.objects.get(id=pk)
    context = {'room':room}
    return render(request, 'base/room.html',context)
