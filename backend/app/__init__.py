from flask import Flask
from .models import db
from .config import Config
from flask_jwt_extended import JWTManager
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Inicializa o banco de dados
    db.init_app(app)

    # Inicializa o JWT
    JWTManager(app)

    # Permite requisições CORS
    CORS(app, resources={r"/*": {"origins": "*"}})  # Permite todas as origens

    # Registra os blueprints
    from .routes import main
    from .auth import auth
    app.register_blueprint(main)
    app.register_blueprint(auth, url_prefix='/auth')

    return app