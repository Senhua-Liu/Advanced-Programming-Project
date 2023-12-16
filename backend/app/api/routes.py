from flask import Blueprint, current_app
#from flask_mysqldb import MySQL
from main import mysql

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/test')
def test_route():
    return "API is working!"

@api_blueprint.route('/home')
def home():
    return 'Welcome to my Flask app!'

@api_blueprint.route('/db_connection')
def db_connection():
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("select * from internship_system.user;")
        result = cursor.fetchall()
        cursor.close()
        return str(result)
    except Exception as e:
        return f"Database error: {str(e)}"
