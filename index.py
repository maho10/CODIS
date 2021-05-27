from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo
import pymongo

connection_url = 'mongodb+srv://dbMajix:Lindis1011@codis.wnqzh.mongodb.net/CODIS?retryWrites=true&w=majority'
app = Flask(__name__)
client = pymongo.MongoClient(connection_url)
app.config['MONGO_URI'] = connection_url
# Database
db = client.get_database('Codisdb')
# Collection
dna = db.dna
mongo = PyMongo(app)

CORS(app)

if __name__ == '__main__':
    app.run(debug=True, threaded=True)
