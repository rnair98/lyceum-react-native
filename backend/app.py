from flask import Flask, jsonify, request
from classcentral_scrape import get_courses

app = Flask(__name__)

@app.route('/query', methods = ['GET'])

def get_courses_from_classcentral():
    search_query = request.args.get('search_query')
    courses = get_courses(search_query)
    return jsonify(courses)

if __name__ == '__main__':
    app.run(debug=True)