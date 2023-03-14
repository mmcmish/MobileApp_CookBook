import firebase_admin
from firebase_admin import db
from firebase_admin import credentials
from firebase_admin import firestore

app = firebase_admin.initialize_app()
db = firestore.client()

cred = credentials.Certificate('path/to/serviceAccount.json')
app = firebase_admin.initialize_app(cred)
db = firestore.client()