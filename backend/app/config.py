import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'chave-secreta'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///mercado.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY') or 'jwt-chave-secreta'