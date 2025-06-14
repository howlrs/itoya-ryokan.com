# いとや旅館オフィシャルウェブサイト

山形県南陽市 熊野大社の麓宮内にある老舗旅館「いとや旅館」のオフィシャルウェブサイトです。

## 概要

- 旅館の基本情報とサービス案内
- お客様からのお問い合わせ対応
- 外部予約サイトとの連携
- 系列店「糸蔵」との情報連携

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: CSS Modules
- **フォント**: Geist Sans, Geist Mono
- **デプロイ**: Vercel (予定)

## ページ構成

```
/                    # トップページ（ナビゲーション）
├── /about          # 旅館について
├── /content        # 施設・サービス
├── /plan           # 客室案内
├── /access         # アクセス情報
├── /sns            # ギャラリー・SNS
├── /reservation    # ご予約
└── /contact        # お問い合わせ
```

## 外部連携

- **糸蔵サービス**: https://itokura.com/ (お食事情報)
- **予約システム**: 外部予約サイトとの連携予定

## 環境変数

`.env.local`ファイルに以下の環境変数を設定:

```bash
NEXT_PUBLIC_SITE_NAME=いとや旅館/糸蔵
NEXT_PUBLIC_SITE_DESCRIPTION=山形県南陽市 熊野大社の麓宮内 老舗旅館
NEXT_PUBLIC_SITE_URL=https://itoya-ryokan.com
NEXT_PUBLIC_PHONE=0238-47-2133
NEXT_PUBLIC_EMAIL=info@itoya-ryokan.com
NEXT_PUBLIC_ADDRESS=山形県南陽市宮内
```

## セットアップ

1. 依存関係のインストール:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. 開発サーバーの起動:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. ブラウザで [http://localhost:3000](http://localhost:3000) を開く

## デプロイ

Vercelでのデプロイを推奨します:

```bash
npm run build
```

## 開発状況

- [x] 基本レイアウト構築
- [x] 環境変数設定
- [x] ページルーティング
- [x] 共通フッター実装
- [ ] 各ページのコンテンツ実装
- [ ] レスポンシブデザイン対応
- [ ] 予約システム連携
- [ ] SEO最適化

## ライセンス

© 2025 いとや旅館/糸蔵. All rights reserved.
