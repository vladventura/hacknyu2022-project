from db_handler import DBHandler
from math import radians, sin, cos, acos

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
    