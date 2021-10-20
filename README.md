MBM Minor Project

House Price Prediction Website

Team:-
	Alok Bharat Tiwari - 19UCSE4001 [CSE-6th sem]
	Mahak Jain - 19UCSE4030 [CSE-6th sem]
	Nitin Saini -19UCSE4010 [CSE-6th sem]

Project Description:- 

What are the things that a potential home buyer considers before purchasing a house? The location, the size of the property, vicinity to offices, schools, parks, restaurants, hospitals etc? What about the most important factor — the price?

Buying a house, especially in a city like Bengaluru, is a tricky choice. While the major factors are usually the same for all metros, there are others to be considered for the Silicon Valley of India. With its help millennial crowd, vibrant culture, great climate and a slew of job opportunities, it is difficult to ascertain the price of a house in Bengaluru.

Also people are losing trust with property dealers who are there mostly to fill up their pockets.

So our website - "House Price predictor" predicts the estimated price of the house for city of Bengaluru with an accuracy of 86%.

In order to predict the price user have to answer
some question like:-
	
	1. Area in Sqft.
	2. BHK i.e. no of bedrooms
	3. No of bathrooms
	4. Location 
	5. Availability 
	6. Area type

Dataset-

The dataset for the project was gathered from Kaggle.
Link: https://www.kaggle.com/amitabhajoy/bengaluru-house-price-data
 
Project Installation :- 

git clone https://github.com/nitinsaini1008/mbm_minor_project/

make sure python3 is installed in your system

cd mbm_minor_project
pip3 install -r requirenment.txt
python3 manage.py runserver 0.0.0.0:8000

Now just open http://localhost:8000/ in your local browser

Technologies used:-

Machine Learning 
	Python (libraries like numpy, pandas, sklearn, seaborne,matplotlib,etc)
	Implemented xgboost regressor model
Backend development
	Python-Django
	Django Rest Framework (DRF)
Front-End development
	HTML
	CSS
	Javascript
