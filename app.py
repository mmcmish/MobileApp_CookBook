from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
import mysql.connector
app = Flask(__name__)
from flask_marshmallow import Marshmallow

@app.route("/", methods = ["GET"])
def get_articles():
    return jsonify({"Hello": "world"})

# connect = mysql.connector.connect(user = 'ryeon',
#                                   password = 'Password',
#                                   host = 'localhost', 
#                                   database = 'data'
#                                   )

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql:ryeon:Password@localhost/data'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

ma = Marshmallow(app)



class Login(db.Model):
    ID = db.Column(db.Integer, db.AUTO_Increment,  primary_key = True)
    Name = db.Column(db.String(30))
    Email = db.Column(db.Varchar(70))
    UserName = db.Column(db.Varchar(30))
    Password = db.Column(db.Varchar(70))

    def __init__(self, Name, Email, UserName, Password):
        self.Name = Name
        self.Email = Email
        self.UserName = UserName
        self.Password = Password

class Home(db.Model):
    ID = db.Column (db.Integer, db.Auto_Increment, primary_key = True)
    FoodName = db.Column( db.String(40))
    Image = db.Column(db.BLOB)
    Ingredients = db.Column(db.Varchar(80))
    Favorites = db.Column(db.String(40))

    def __init__(self, FoodName, Image, Ingredients, Favorites):
        self.FoodName = FoodName
        self.Image = Image 
        self.Ingredients = Ingredients
        self.Favorites = Favorites

class List(db.Model):
    ID = db.Column(db.Integer, db.Auto_increment, primary_key=True)
    FoodName = db.Column(db.String(40))
    Image = db.Column(db.BLOB)


    def __init__(self, FoodName, Image):
        self.FoodName = FoodName
        self.Image = Image



# class LoginSchema(ma.Schema):
#     class Meta:




if __name__ == "__main__":
    app.run()