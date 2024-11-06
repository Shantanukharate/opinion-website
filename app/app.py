from flask import Flask, render_template, request
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit_opinion', methods=['POST'])
def submit_opinion():
    opinion = request.form.get('opinion')
    if opinion:
        return render_template('index.html', message="Your opinion has been received!")
    else:
        return render_template('index.html', message="Please write something.")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
