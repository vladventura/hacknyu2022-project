import sqlite3

class DBHandler:
    db = None
    cursor = None

    def __init__(self) -> None:
        self.db = sqlite3.connect('disposal.db')
        self.cursor = self.db.cursor()

    def get_cursor(self):
        return self.cursor
    
    def get_disposals(self):
        self.cursor.execute('''SELECT * FROM disposals''')
        return self.cursor.fetchall()
    
    def close(self):
        self.cursor.close()
        self.db.close()

