from fastapi import FastAPI
from scripts.test_db import test_connection

app = FastAPI()

@app.get("/")
def root():
    ok, result = test_connection()
    if ok:
        return {
            "message": "FindN’Dine API is running",
            "connected_collections": result
        }
    else:
        return {
            "message": "Database connection failed",
            "error": result
        }
