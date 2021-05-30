from flask import Flask, jsonify, request
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient("mongodb+srv://dbMajix:GDrWjMvFgZ59nzyL@codis.wnqzh.mongodb.net/Codisdb?retryWrites=true&w=majority")
# Database
db = client.get_database('Codisdb')
# Collection
DNA = db.dna

from routes import dna

if __name__ == '__main__':
    app.run(debug=True, threaded=True)
