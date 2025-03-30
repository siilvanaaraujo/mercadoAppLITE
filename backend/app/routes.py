from flask import Blueprint, request, jsonify
from .models import db, Product, User  # Assumindo que você tem um modelo User

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return jsonify({"message": "Bem-vindo ao APP MERCADO!"})

@main.route('/products', methods=['GET'])
def get_products():
    # Retorna todos os produtos
    products = Product.query.all()
    products_list = [{"id": p.id, "name": p.name, "price": p.price} for p in products]
    return jsonify(products_list)

@main.route('/products', methods=['POST'])
def add_product():
    # Recebe os dados do produto no corpo da requisição
    data = request.get_json()
    name = data.get('name')
    price = data.get('price')

    if not name or not price:
        return jsonify({"error": "Nome e preço são obrigatórios"}), 400

    # Cria um novo produto
    new_product = Product(name=name, price=price)
    db.session.add(new_product)
    db.session.commit()

    return jsonify({"message": "Produto cadastrado com sucesso!"}), 201

@main.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if User.query.filter_by(username=username).first():
        return jsonify(message="Usuário já existe"), 400

    new_user = User(username=username, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify(message="Usuário registrado com sucesso"), 201

@main.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()
    if user and user.password == password:
        return jsonify(message="Login bem-sucedido"), 200
    else:
        return jsonify(message="Nome de usuário ou senha incorretos"), 401