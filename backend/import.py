import sqlite3
import json

conn = sqlite3.connect('disposal.db')

with open('data.json') as f:
    conn.execute('''
    CREATE TABLE IF NOT EXISTS disposals
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    type TEXT NOT NULL);
    ''')
    data = json.load(f)
    for disposal in data:
        conn.execute('''INSERT INTO disposals(latitude, longitude, type) VALUES(?, ?, ?)''', [disposal['lat'], disposal['lon'], disposal['type']])

conn.commit()
conn.close()