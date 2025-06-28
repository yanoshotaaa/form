# フォームアプリケーション

モダンなReact + TypeScript + Tailwind CSSを使用した美しいフォームアプリケーションです。

## 機能

- 📝 レスポンシブなコンタクトフォーム
- ✅ リアルタイムバリデーション（Zod + React Hook Form）
- 🎨 美しいUI/UX（Tailwind CSS）
- 📱 モバイルフレンドリー
- 🔍 送信内容のプレビュー機能
- 🚀 高速な開発環境（Vite）

## 技術スタック

- **フロントエンド**: React 18 + TypeScript
- **スタイリング**: Tailwind CSS
- **フォーム管理**: React Hook Form + Zod
- **ビルドツール**: Vite
- **開発言語**: TypeScript

## セットアップ

### 前提条件

- Node.js 16.0以上
- npm または yarn

### インストール

1. 依存関係をインストール:
```bash
npm install
```

2. 開発サーバーを起動:
```bash
npm run dev
```

3. ブラウザで http://localhost:3000 を開く

### その他のコマンド

```bash
# プロダクションビルド
npm run build

# ビルドのプレビュー
npm run preview

# リンター実行
npm run lint
```

## プロジェクト構造

```
form/
├── src/
│   ├── components/
│   │   ├── ContactForm.tsx    # メインフォームコンポーネント
│   │   └── FormPreview.tsx    # 送信内容プレビュー
│   ├── types/
│   │   └── form.ts           # 型定義
│   ├── App.tsx               # メインアプリケーション
│   ├── main.tsx              # エントリーポイント
│   └── index.css             # グローバルスタイル
├── public/                   # 静的ファイル
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## フォーム項目

- **基本情報**: 姓、名、会社名
- **連絡先**: メールアドレス、電話番号
- **お問い合わせ**: 件名、メッセージ
- **設定**: 希望連絡方法、ニュースレター配信

## バリデーション

以下のバリデーションが実装されています：

- 必須項目のチェック
- メールアドレスの形式チェック
- メッセージの最小文字数チェック（10文字以上）

## カスタマイズ

### スタイルの変更

`src/index.css` でTailwind CSSのカスタムクラスを定義しています。

### フォーム項目の追加

1. `src/types/form.ts` で型定義を追加
2. `src/components/ContactForm.tsx` でフォーム項目を追加
3. `src/components/FormPreview.tsx` でプレビュー表示を追加

## ライセンス

MIT License 