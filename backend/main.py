from flask import Flask, request
from flask_cors import CORS
from helpers import get_all_nearby

app = Flask(__name__)
CORS(app)

@app.route("/disposals", methods=["GET"])
def Avery_St():
    lat = request.args.get('lat')
    lon = request.args.get('lon')
    dis = request.args.get('dis') if request.args.get('dis') != None else 0.5
    if lat == None or lon == None:
        return {'error': "Please use floats for lat and lon"}, 400
    points = get_all_nearby(lat, lon, dis)
    return {"data": points}, 200

app.run()
