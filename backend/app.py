from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

todos = []
current_id = 1

@app.route("/api/todos", methods=["GET"])
def get_todos():
    return jsonify(todos)

@app.route("/api/todos", methods=["POST"])
def add_todo():
    global current_id
    data = request.json
    todo = {
        "id": current_id,
        "title": data["title"]
    }
    todos.append(todo)
    current_id += 1
    return jsonify(todo), 201

@app.route("/api/todos/<int:todo_id>", methods=["DELETE"])
def delete_todo(todo_id):
    global todos
    todos = [t for t in todos if t["id"] != todo_id]
    return "", 204

if __name__ == "__main__":
    app.run(debug=True)
