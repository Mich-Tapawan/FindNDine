from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "FindN’Dine API is running 🚀"}