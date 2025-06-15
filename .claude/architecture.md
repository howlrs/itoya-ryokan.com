# いとや旅館ウェブサイト アーキテクチャ設計書

## システム構成

### 技術スタック
```
Frontend: Next.js 15.3.3 (App Router)
UI Library: Ant Design 5.26.0
Language: TypeScript
Styling: CSS-in-JS (Ant Design)
Deployment: Vercel (想定)
```

### ディレクトリ構造
```
src/
├── app/
│   ├── layout.tsx           # 共通レイアウト
│   ├── page.tsx             # トップページ
│   ├── globals.css          # グローバルスタイル
│   ├── about/
│   │   └── page.tsx         # 旅館について
│   ├── access/
│   │   └── page.tsx         # アクセス
│   ├── contact/
│   │   └── page.tsx         # お問い合わせ
│   ├── content/
│   │   └── page.tsx         # 施設・サービス
│   ├── plan/
│   │   └── page.tsx         # 客室
│   ├── reservation/
│   │   └── page.tsx         # ご予約
│   └── sns/
│       └── page.tsx         # ギャラリー
```

## コンポーネント設計

### レイアウトコンポーネント
- **RootLayout** (`layout.tsx`): 全ページ共通レイアウト
  - AntdRegistry: SSR対応
  - ConfigProvider: テーマ設定
  - Header: ナビゲーション
  - Footer: 連絡先情報

### ページコンポーネント
各ページは独立したコンポーネントとして実装：
- レスポンシブデザイン（Row/Col グリッドシステム）
- Ant Design コンポーネントを活用
- 統一されたデザインシステム

## データフロー

### 静的データ
- 旅館基本情報: CLAUDE.md から参照
- 連絡先: 環境変数対応可能
- メニューアイテム: layout.tsx に定義

### 動的データ（将来実装）
- 予約状況: 外部API連携
- ギャラリー画像: Instagram API
- お問い合わせフォーム: バックエンドAPI

## デザインシステム

### カラーパレット
- Primary: #1890ff (ブルー)
- Success: #52c41a (グリーン)
- Warning: #fa8c16 (オレンジ)
- Error: #ff4d4f (レッド)

### タイポグラフィ
- フォントファミリー: Geist (Next.js デフォルト)
- 見出し: Title コンポーネント (level 1-4)
- 本文: Paragraph, Text コンポーネント

### レスポンシブブレークポイント
- xs: < 576px (モバイル)
- sm: 576px - 768px (小型タブレット)
- md: 768px - 992px (タブレット)
- lg: 992px - 1200px (デスクトップ)
- xl: > 1200px (大型デスクトップ)

## SEO・アクセシビリティ

### 実装済み
- メタデータ設定 (layout.tsx)
- セマンティックHTML
- Ant Design アクセシビリティ対応

### 今後実装予定
- 構造化データ（JSON-LD）
- 画像alt属性の最適化
- ページタイトルの個別設定

## パフォーマンス最適化

### 実装済み
- Next.js App Router（自動コード分割）
- Ant Design Tree Shaking
- TypeScript による型安全性

### 今後実装予定
- 画像最適化（next/image）
- 動的インポート
- キャッシュ戦略

## セキュリティ

### 現在の対策
- Next.js セキュリティヘッダー
- TypeScript による型安全性
- Ant Design フォームバリデーション

### 今後の対策
- CSP (Content Security Policy)
- フォーム送信時のサニタイゼーション
- レート制限