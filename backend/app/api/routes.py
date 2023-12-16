from flask import Blueprint, current_app
#from flask_mysqldb import MySQL
from main import mysql

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/test')
def test_route():
    return "API is working!"

@api_blueprint.route('/')
def home():
    return 'Welcome to my Flask app!'

@api_blueprint.route('/test_db')
def test_db():
    #mysql = MySQL(current_app)
    #cursor = mysql.connection.cursor()
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM user")
    data = cursor.fetchall()
    cursor.close()
    return str(data)
