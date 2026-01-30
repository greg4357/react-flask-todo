# React + Flask TODO App（DB対応版）

## 概要
React と Flask を用いた TODO 管理アプリです。  
フロントエンドとバックエンドを分離し、REST API を介して通信します。  

今回のバージョンでは、**SQLite データベースにタスクを永続化**するように改修しています。  
これにより、ページを再読み込みしてもタスク状態が保持されます。

---

## 使用技術

### フロントエンド
- React
- Vite
- JavaScript (ES6)
- Axios

### バックエンド
- Python
- Flask
- Flask-CORS
- Flask-SQLAlchemy

### データベース
- SQLite

---

## 機能一覧
- TODO 一覧取得（GET）
- TODO 追加（POST）
- TODO 削除（DELETE）
- TODO 完了 / 未完了の切替（PATCH）
- データは SQLite データベースに保存され、永続化されます

---

## ディレクトリ構成

```text
react-flask-todo/
├── backend/
│   ├── app.py              # Flaskアプリ本体（API）
│   ├── requirements.txt    # Python依存関係
│   └── venv/               # 仮想環境（※Git管理外）
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx         # TODOアプリのメインコンポーネント
│   │   └── main.jsx        # エントリーポイント
│   ├── public/
│   ├── package.json        # npm依存関係
│   └── node_modules/       # 依存パッケージ（※Git管理外）
│
├── .gitignore
└── README.md
```



---

## API仕様（簡易）

### TODO一覧取得
- **GET** `/api/todos`
- 返却例:
```json
[
  {
    "id": 1,
    "title": "sample todo",
    "completed": false
  },
  {
    "id": 2,
    "title": "another todo",
    "completed": true
  }
]
```


### TODO追加
- **POST** `/api/todos`
- リクエスト例:
```json
{
  "title": "sample todo"
}
```
- 返却例:
```json
{
  "id": 3,
  "title": "新しいタスク",
  "completed": false
}
```

### TODO完了/未完了切替
- **PATCH** `/api/todos/<id>`
- リクエスト例:
```json
{
  "completed": true
}
```

### TODO削除
- **DELETE** `/api/todos/<id>`
- 返却例:空 (HTTPステータス 204)

---

## 起動方法

### バックエンド（Flask）

```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windowsの場合: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

### フロントエンド（React）

```bash
cd frontend
npm install
npm run dev
```

---

## 本アプリの目的

本アプリは、React と Flask を用いた  
**フロントエンド / バックエンド分離構成**を理解することを目的として作成しました。

小規模なアプリではありますが、以下の点を重視しています。

- REST API を介したフロントエンドとバックエンドの通信設計
- React 側での状態管理と API 呼び出しの基本
- Flask によるシンプルな API 実装
- SQLite データベースを用いた永続化
- Git / GitHub を用いた基本的な開発フローの習得

## 今後の改善予定
- TODO 編集機能の追加
- ユーザー認証・ログイン機能の追加
- PostgreSQL など他 DB への対応

