from flask import Flask, request
from flask_cors import CORS
from math import radians, sin, cos, acos
import sqlite3

from db_handler import DBHandler

app = Flask(__name__)
CORS(app)


def calculate_distance(lat1, lon1, lat2, lon2):
    l1 = radians(float(lat1))
    n1 = radians(float(lon1))
    l2 = radians(float(lat2))
    n2 = radians(float(lon2))
    lat_sin = sin(l1) * sin(l2)
    lat_dlon_cos = cos(l1) * cos(l2) * cos(n1 - n2)
    distance = 6371.01 * acos(lat_sin + lat_dlon_cos)
    return distance * 0.621371

def get_all_nearby(lat, lon, dis):
    db = DBHandler()
    all_disposals = db.get_disposals()
    nearby_points = []
    for disposal in all_disposals:
        (id, d_lat, d_lon, d_type) = disposal
        distance = calculate_distance(lat, lon, d_lat, d_lon)
        if float(dis) >= distance:
            nearby_points.append({
                "id": id,
                "lat": d_lat,
                "lon": d_lon,
                "dis_from_origin": distance,
                "type": d_type
            })
    db.close()
    return nearby_points

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
