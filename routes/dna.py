from __main__ import app, dna
from .errors import not_found, bad_request, internal_server_error

from flask import request, jsonify, Response
from bson import json_util
from bson.objectid import ObjectId
import json
import datetime

Dna = dna


@app.route('/dna', methods=['POST'])
def createDna():
    name = request.json['name'].strip()
    dpi = request.json['dpi'].strip()
    dna = request.json['dna'].strip()

    if name and dpi and dna:
        id = Dna.insert(
            {'name': name, 'dpi': dpi, 'dna': dna}
        )

        response = {'message': 'El perfil de ADN fue agregado de manera exitosa'}
        return response
    else:
        return bad_request()
