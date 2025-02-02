import os
import json
from flask import Flask, app, jsonify, redirect, request
from flask_cors import CORS, cross_origin
from spotipy import Spotify
import spotipy.util as util
from spotipy.oauth2 import SpotifyClientCredentials
import urllib



app = Flask(__name__)
#allow for port accessibility
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# redirect_uri = 'http://localhost:5000/callback'
# auth_url = 'https://accounts.spotify.com/authorize'
# token_url = 'https://accounts.spotify.com/api/token'
# api_base_url = 'https://api.spotify.com/v1'


#import spotify api key
with open(os.path.dirname(__file__) + '/key.json') as api_config_file:
    config = json.load(api_config_file)

spotify_client_id = config['spotify_client_id']
spotify_client_secret = config['spotify_client_secret']


sp_oauth = SpotifyClientCredentials(
    client_id=spotify_client_id,
    client_secret=spotify_client_secret
)
sp = Spotify(client_credentials_manager=sp_oauth)

@app.route("/")
def root():
    return get_tracks_sentiment('drake')
    # return "<a href='/login'> Login to Spotify</a>"




#returns artist id 
@app.route('/get-artist-id', methods=['GET', 'POST'])
def get_artist_id(artist_query):
    results = sp.search(q={artist_query}, type="artist", limit=1)
    if results['artists']['items']:
        # Return the first artist's id
        return results['artists']['items'][0]['id']
    else:
        return jsonify({"error": "Artist not found"}), 404
    

@app.route('/get-album-ids', methods=['GET', 'POST'])
def get_albums(artist_id):
    albums = sp.artist_albums(get_artist_id(artist_id), country=None, offset=0)
    album_ids = []

    for album in albums['items']:
        album_ids.append(album['id'])

    return album_ids

@app.route('/get-track-ids', methods=['GET', 'POST'])
def get_track_ids(artist_id):
    album_ids = get_albums(artist_id)
    track_ids = []

    for album_id in album_ids:
        tracks = sp.album_tracks(album_id)
        for track in tracks['items']:
            track_ids.append(track['id'])
    print(len(track_ids))
    return track_ids

# curate list of songs based on user query for a specified artist

# not working: need oath to be setup... currently getting a 401 error
@app.route('/get-tracks-sentiment', methods=['GET', 'POST'])
def get_tracks_sentiment(artist_id):
    track_ids = get_track_ids(artist_id)
    sentiment_scores = [{}]
    print(track_ids[0])

    for track in track_ids:
        try:
            audio_features = sp.audio_features(track)
            if audio_features:
                sentiment_scores.append({'id': track, 'valence': audio_features[0]['valence'], 'energy': audio_features[0]['energy']})
        except Exception as e:
            print(f'Error with track {track}: {str(e)}')

    return jsonify(sentiment_scores)

# def manhattan_distance(point, target):
#     return abs(point.x - target[0]) + abs(point.y - target[1])

# sorted_points = sorted(points, key=lambda p: manhattan_distance(p, target_value))




if __name__ == '__main__':
    # app.run(debug=True)
    app.run(host="0.0.0.0", port=5000, debug=True)