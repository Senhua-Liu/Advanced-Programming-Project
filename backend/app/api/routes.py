from flask import Blueprint
from main import mysql

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/test_route')
def test_route():
    return "API is working!"

@api_blueprint.route('/home')
def home():
    return 'Welcome to my Flask app!'

@api_blueprint.route('/get/users')
def get_users():
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("select * from internship_system.user;")
        result = cursor.fetchall()
        cursor.close()
        return str(result)
    except Exception as e:
        return f"Database error: {str(e)}"
    
@api_blueprint.route('/post/users')
def post_users():
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("insert into internship_system.user (name, email, password, type) values ('student2', 'student2@efrei.net', 'student2', 'student');")
        cursor.execute("insert into internship_system.user (name, email, password, type) values ('student3', 'student3@efrei.net', 'student3', 'student');")
        cursor.execute("insert into internship_system.user (name, email, password, type) values ('student4', 'student4@efrei.net', 'student4', 'student');")
        cursor.execute("insert into internship_system.user (name, email, password, type) values ('student5', 'student5@efrei.net', 'student5', 'student');")
        cursor.execute("insert into internship_system.user (name, email, password, type) values ('student6', 'student6@efrei.net', 'student6', 'student');")
        cursor.execute("insert into internship_system.user (name, email, password, type) values ('student7', 'student7@efrei.net', 'student7', 'student');")
        cursor.execute("insert into internship_system.user (name, email, password, type) values ('student8', 'student8@efrei.net', 'student8', 'student');")
        cursor.execute("insert into internship_system.user (name, email, password, type) values ('student9', 'student9@efrei.net', 'student9', 'student');")
        cursor.execute("insert into internship_system.user (name, email, password, type) values ('student10', 'student10@efrei.net', 'student10', 'student');")
        mysql.connection.commit()
        cursor.execute("select * from internship_system.user;")
        result = cursor.fetchall()
        cursor.close()
        return str(result)
    except Exception as e:
        return f"Database error: {str(e)}"

@api_blueprint.route('/get/admin')
def get_admin():
    try:
        cursor = mysql.connection.cursor()
        #cursor.execute("INSERT INTO internship_system.admin (userID, systemManager) VALUES (1, 'SystemManager');")
        #cursor.execute("INSERT INTO internship_system.student (userID, promotion) VALUES (2, 2024);")
        cursor.execute("select * from internship_system.user where type = 'admin' ;")
        result = cursor.fetchall()
        cursor.close()
        return str(result)
    except Exception as e:
        return f"Database error: {str(e)}"
