import os
from fastapi import FastAPI
import json

app = FastAPI()

#import spotify api key
with open(os.path.dirname(__file__) + '/key.json') as api_config_file:
    config = json.load(api_config_file)
api_key = config['spotify_api_key']

print(str(api_key))

@app.get("/")
async def root():
    return {"message": "Hello World"}

