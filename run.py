import sys
import os

# Adiciona o diretório 'backend' ao caminho do Python
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'backend'))

from app import create_app

app = create_app()

if __name__ == '__main__':
    os.environ['FLASK_APP'] = 'run.py'
    app.run(debug=True)