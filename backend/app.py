from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Move this AFTER app is created

@app.route('/')
def home():
    return jsonify({"message": "NutriCheckAI API is running!"})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
