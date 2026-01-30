from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

# SQLite DB 設定
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///todo.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# Todo テーブル定義
class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    completed = db.Column(db.Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "completed": self.completed
        }

# 接続確認用
@app.route("/api/hello")
def hello():
    return "Hello from Flask"

# Todo一覧取得
@app.route("/api/todos", methods=["GET"])
def get_todos():
    todos = Todo.query.all()
    return jsonify([todo.to_dict() for todo in todos])

# Todo追加
@app.route("/api/todos", methods=["POST"])
def add_todo():
    data = request.get_json()
    title = data.get("title", "").strip()

    if not title:
        return jsonify({"error": "title is required"}), 400

    todo = Todo(title=title)
    db.session.add(todo)
    db.session.commit()
    return jsonify(todo.to_dict()), 201

# Todo完了切替
@app.route("/api/todos/<int:todo_id>", methods=["PATCH"])
def toggle_todo(todo_id):
    todo = Todo.query.get_or_404(todo_id)
    data = request.get_json()
    todo.completed = data.get("completed", todo.completed)
    db.session.commit()
    return jsonify(todo.to_dict())

# Todo削除
@app.route("/api/todos/<int:todo_id>", methods=["DELETE"])
def delete_todo(todo_id):
    todo = Todo.query.get_or_404(todo_id)
    db.session.delete(todo)
    db.session.commit()
    return "", 204

if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # テーブル作成
    app.run(debug=True)
