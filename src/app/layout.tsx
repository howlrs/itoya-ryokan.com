import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, Menu } from 'antd';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 環境変数から情報を取得
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "いとや旅館";
const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "山形県南陽市 熊野大社の麓宮内 老舗旅館のオフィシャルウェブサイト";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";
const SITE_PHONE = process.env.NEXT_PUBLIC_PHONE || "";
const SITE_EMAIL = process.env.NEXT_PUBLIC_EMAIL || "";
const SITE_ADDRESS = process.env.NEXT_PUBLIC_ADDRESS || "";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
  },
};

const menuItems = [
  { key: 'about', label: <Link href="/about">旅館について</Link> },
  { key: 'content', label: <Link href="/content">施設・サービス</Link> },
  { key: 'plan', label: <Link href="/plan">客室</Link> },
  { key: 'meal', label: <a href="https://itokura.com/" target="_blank" rel="noopener noreferrer">お食事</a> },
  { key: 'access', label: <Link href="/access">アクセス</Link> },
  { key: 'sns', label: <Link href="/sns">ギャラリー</Link> },
  { key: 'reservation', label: <Link href="/reservation">ご予約</Link> },
  { key: 'contact', label: <Link href="/contact">お問い合わせ</Link> },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#1890ff',
                borderRadius: 6,
                fontFamily: 'inherit',
              },
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap'
            }}>
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                <h3 style={{ margin: 0 }}>{SITE_NAME}</h3>
              </Link>
              <Menu
                mode="horizontal"
                items={menuItems}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  border: 'none',
                  fontSize: 'clamp(12px, 2vw, 14px)'
                }}
              />
            </div>
            {children}
            <div style={{ marginTop: 32, textAlign: 'center' }}>
              <p style={{ color: '#888', marginBottom: 4 }}>
                &copy; 2025 {SITE_NAME}. All rights reserved.
              </p>
              <p style={{ margin: 0 }}>
                {SITE_ADDRESS} | TEL: {SITE_PHONE}
              </p>
              {SITE_EMAIL && (
                <p style={{ margin: 0 }}>
                  <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
                </p>
              )}
            </div>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
