from flask import Flask, render_template,request, redirect, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
import os 
from flask_mysqldb import MySQL
import MySQLdb.cursors
from flask_marshmallow import Marshmallow
import re




app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'CookBook'


mysql = MySQL(app)


#Creating a coonnection 
with app.app_context():
    cursor = mysql.connection.cursor()


cursor.execute("CREATE TABLE REGISTER(ID INT AUTO_INCREMENT PRIMARY_KEY, Name STRING(80) NOT NULL, Username VARCHAR(255) NOT NULL , Email VARCHAR(255) NOT NULL, Password VARCHAR(90) NOT NULL)")
cursor.execute("CREATE TABLE HOME(ID INT, AUTO_INCREMENT PRIMARY_KEY, FoodName STRING(150) NOT NULL, Image BLOB NOT NULL, Ingredients STRING(255) NOT NULL )")
cursor.execute("CREATE TABLE LIST(ID INT AUTO_INCREMENT PRIMARY_KEY , FoodName STRING(150) NOT NULL , Image BLOB NOT NULL )")

@app.route("/form")
def form():
    return render_template("form.html")

@app.route("/register", methods = ["POST"])
def register():
    
    if request.method == "POST" and "name" in request.form and "password" in request.form and "email" in request.form:
        name = request.form["name"]
        Username = request.form["username"]
        Email = request.form["email"]
        Password = request.form["password"]
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT * FROM REGISTER WHERE email = %s", (Email))
        account = cursor.fetchone()

        if account: 
            message = "Account already exists"
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', Email):
            message = "Invalid email address"
        elif not Username or not Password or not Email:
            message = "please fill out the form"
        else:
            cursor.execute("INSERT INTO REGISTER VALUES( %s, %s, %s, %s)",(name, Username, Email, Password))
            mysql.connection.commit()
            message = "successfully registered"
    elif request.method == 'POST':
        message = "please fill out the form"
        cursor.close()
        return f"Done"
    
  

        
@app.route("/login", methods = ["GET", "POST"])
def login():
    if request.method == "GET" and "username" in request.form and "password" in request.form:
        Username = request.form["username"]
        Password = request.form["Password"]
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM REGISTER WHERE Username = %s AND password = %s', (Username, Password))
        user = cursor.fetchone()
        if user: 
            session[]


    



# class register(db.Model):
#     ID = db.Column(db.Integer, primary_key = True)
#     Name = db.Column(db.String(30), nullable=False)
#     Email = db.Column(db.VARCHAR(70), nullable=False)
#     UserName = db.Column(db.VARCHAR(30), nullable=False)
#     Password = db.Column(db.VARCHAR(70), nullable=False)

#     def __init__(self, Name, Email, UserName, Password):
#         self.Name = Name
#         self.Email = Email
#         self.UserName = UserName
#         self.Password = Password

# class Home(db.Model):
#     ID = db.Column (db.Integer, primary_key = True)
#     FoodName = db.Column( db.String(40), nullable=False )
#     Image = db.Column(db.BLOB, nullable=False)
#     Ingredients = db.Column(db.VARCHAR(80), nullable=False)
#     Favorites = db.Column(db.String(40), nullable=False)

#     def __init__(self, FoodName, Image, Ingredients, Favorites):
#         self.FoodName = FoodName
#         self.Image = Image 
#         self.Ingredients = Ingredients
#         self.Favorites = Favorites

# class List(db.Model):
#     ID = db.Column(db.Integer,primary_key=True)
#     FoodName = db.Column(db.String(40), nullable=False)
#     Image = db.Column(db.BLOB, nullable=False)


#     def __init__(self, FoodName, Image):
#         self.FoodName = FoodName
#         self.Image = Image



if __name__ == "__main__":
    app.run(host ='localhost', port=8080)