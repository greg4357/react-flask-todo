# React + Flask TODO App

## 概要
React と Flask を用いたシンプルな TODO 管理アプリです。  
フロントエンドとバックエンドを分離し、REST API を介して通信する最小構成のアプリとして作成しました。

学習目的として、機能追加よりも以下を重視しています。

- API 設計の基礎理解  
- フロントエンド / バックエンドの責務分離  
- Git を用いた基本的な開発フローの習得  

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
- flask-cors

---

## 機能一覧
- TODO 一覧取得（GET）
- TODO 追加（POST）
- TODO 削除（DELETE）

※ データはインメモリで管理しています（DB 未使用）

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
- **GET** `/todos`

### TODO追加
- **POST** `/todos`
- リクエスト例:
```json
{
  "title": "sample todo"
}
```

### TODO削除

- **DELETE** `/todos/<id>`

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
- Git / GitHub を用いた基本的な開発フローの習得

※ データはインメモリで管理しており、  
永続化（データベース連携）は今後の拡張課題としています。

## 今後の改善予定

- データベース（SQLite / PostgreSQL）との連携
- TODO 編集機能の追加
- FastAPI への置き換え
