from flask import Flask, request, render_template, jsonify
import re
import pandas as pd
from flask_cors import CORS
import traceback

app = Flask(__name__)
CORS(app)

dataset = pd.read_csv('Property_with_Feature_Engineering.csv')

def searchByCity(city):
    city_data = dataset[dataset['city'].str.lower() == city.lower()]
    if len(city_data) > 0:
        return city_data.to_dict('records')
    else:
        return []

@app.route('/')
def index():
    return render_template('index.html')

from flask import Flask, request, render_template, jsonify
import re
import pandas as pd
from flask_cors import CORS
import traceback

app = Flask(__name__)
CORS(app)

dataset = pd.read_csv('Property_with_Feature_Engineering.csv')

def searchByCity(city):
    city_data = dataset[dataset['city'].str.lower() == city.lower()]
    if len(city_data) > 0:
        return city_data.to_dict('records')
    else:
        return []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search_by_city', methods=['GET'])
def search_by_city():
    try:
        city = request.args.get('city')
        result = searchByCity(city)

        # Convert NaN values to None
        result = [{k: v if pd.notnull(v) else None for k, v in item.items()} for item in result]

        return jsonify(result)
    except Exception as e:
        traceback.print_exc()  # Print the traceback of the exception
        return jsonify({'error': str(e)}), 500


# Rest of the code...

if __name__ == '__main__':
    app.run(host='192.168.18.46')
