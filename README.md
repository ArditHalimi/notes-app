# notes-app

EC2 
BackEnd
- http://3.85.205.73:8080/admin/
  
  superuser: ardit ardit123
  
FrontEnd
- http://d20giumqjnes9g.cloudfront.net/login *note use http instead of https

user adam Tastjera123

## Available Scripts 
- BackEnd /app

  Available endpoint:
   - admin/
   - api/accounts/  #For user registration and login
     - ../register/
     - ../login
   - api/notes/     #List all notes
     - api/notes/{id} # Detail List
- FrontEnd /frontend

  Available pages
    - /login    # login form
    - /register # register form
    - /         # list all notes
    - /note/:id # detail note by id

### BackEnd
In the directory /app, you can run the following:

### `pip install -r requirements.txt`
Run Django server
### `python manage.py runserver`
Open [http://localhost:8000](http://localhost:8000) to view in the browser

### BackEnd
In the directory /frontend, you can run the following:

### `npm start`

It runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
