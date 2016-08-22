Translator
===========

Translator is a Django Rest Framework and Angular app.
It takes in some text, detects its language, and translates it to English using the python langdetect library and the Google Translate API. 

Setup your local dev environment
--------------------------------
1. Clone down the repository
  
  `git clone https://github.com/Guin-/translator.git`
2. Create a virtual environment for the project

3. Install all of the python dependencies
    

  `pip install -r requirements.txt`
4. Go to the frontend directory and install frontend dependencies
    

    `cd translator/frontend/`    
    `npm install`
5. Set up your database in `settings.py` then run database migrations


    `python manage.py migrate`
    
6. Create a `superuser`
    
    `python manage.py createsuperuser`

7. Run `manage.py` from project root to start backend server at `localhost:8000`
    
    `python manage.py runserver`

8. Run `npm start` from `frontend` directory. 
  
  This bundles client side code and runs the `webpack-dev-server` at `localhost:8080`
   
    `cd translator/frontend`    
    `npm start`
