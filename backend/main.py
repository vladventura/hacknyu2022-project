from flask import Flask, request

app = Flask(__name__)

@app.route("/disposals", methods=["GET"])
def Avery_St():
    # Make the lat and lon required
    lat = request.args.get('lat')
    lon = request.args.get('lon')
    dis = request.args.get('dis') if request.args.get('dis') != None else 0.5
    if lat == None or lon == None:
        return {'error': "Please use floats for lat and lon"}, 400
    return {"data": [
        {
            'lat': 32.213,
            'lon': -14.3213,
            'dis_from_origin': 0.012
        }
    ]}, 200

app.run()