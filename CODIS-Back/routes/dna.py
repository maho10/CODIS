from __main__ import app, DNA
from .errors import not_found, bad_request, internal_server_error

from flask import request, jsonify, Response
from modules.comparing import compareDna, dnaToNum
from operator import itemgetter
from bson import json_util
from bson.objectid import ObjectId
import json
import datetime


@app.route('/dna', methods=['POST'])
def createDna():
    name = request.json['name'].strip()
    dpi = request.json['dpi'].strip()
    dnaa = dnaToNum(request.json['dna'].strip())

    if name and dpi and dnaa:
        DNA.insert_one(
            {'name': name, 'dpi': dpi, 'dna': str(dnaa)}
        )

        response = {'message': 'Ok'}
        return response
    else:
        return {'message': 'Error'}


@app.route('/dna/<sample>', methods=['GET'])
def getDna(sample):
    info = DNA.find()
    data = [{'name': inf['name'], 'dpi': inf['dpi'], 'dna': inf['dna'], 'percentage': compareDna(inf['dna'], sample)}
            for inf in info]

    retData = sorted(1, key=itemgetter('percentage'), reverse=True)

    return {'data': jsonify(retData)}
