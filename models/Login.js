from flask import Flask, render_template,request, jsonify
from flask_mysqldb import MySQL
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'CookBook'

mysql = MySQL(app)


#Creating a coonnection 
cursor = mysql.connection.cursor()


cursor.execute(''' CREATE TABLE LOGIN(ID, Name, UserName, Password, Email)''')


export default Login