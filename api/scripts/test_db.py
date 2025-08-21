import os
from pymongo import MongoClient
from dotenv import load_dotenv

# Load env vars
load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
MONGO_DB = os.getenv("MONGO_DB")

# Global client/DB
client = MongoClient(MONGO_URI)
db = client[MONGO_DB]

def test_connection():
    try:
        collections = db.list_collection_names()
        return True, collections
    except Exception as e:
        return False, str(e)
