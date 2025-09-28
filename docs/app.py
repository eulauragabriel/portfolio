from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/sobre-mim')
def sobre_mim():
    return render_template('sobre.html')

@app.route('/projetos')
def projetos():
    return render_template('projetos.html')

@app.route('/tecnologias')
def tecnologias():
    return render_template('tecnologias.html')

if __name__ == '__main__':
    app.run(debug=True)