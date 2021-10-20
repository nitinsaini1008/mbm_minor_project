from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import json
import pickle
import numpy
from .utils import get_price_from_model

# API to get list of locations, availability status and area type
class getListCities(APIView):
	def get(self,request,*args,**kwargs):
		ans=['nitin','saini']
		with open("columns.json",'r') as f:
			locations = json.load(f)
		return Response(locations)

# POST API to perdict the price of the home based on given parameters 
class predictPrice(APIView):
	def post(self,request,*args,**kwargs):
		area= request.data.get('area')
		bath=request.data.get('bathroom')
		bhk=request.data.get('bhk')
		location=request.data.get('location')
		availibility=request.data.get('availability')
		area_type=request.data.get('type')
		print(area,bath,bhk,location,availibility,area_type)
		# ans=get_price_from_model(area=1056.0,bhk=2,bath=2,availibility='Ready To Move',area_type='Built-up  Area',location=' Devarachikkanahalli')
		ans=get_price_from_model(
				area=float(area),
				bhk=int(bhk),
				bath=int(bath),
				availibility=str(availibility),
				area_type=str(area_type),
				location=str(location)
			)
		ans = round(float(ans),2)
		return Response({'price':"Rs. "+str(ans) + " Lakh"})

# for rendering the home page 
def home(request):
	return render(request,'home.html')


