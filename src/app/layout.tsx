import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./page.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "いとや旅館";
const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "山形県南陽市 熊野大社の麓宮内 老舗旅館のオフィシャルウェブサイト";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav>
          <ul className={styles.navList}>
            <li><Link href="/about">旅館について</Link></li>
            <li><Link href="/content">施設・サービス</Link></li>
            <li><Link href="/plan">客室</Link></li>
            <li><Link href="https://itokura.com/">お食事(糸蔵サービス情報へ)</Link></li>
            <li><Link href="/access">アクセス</Link></li>
            <li><Link href="/sns">ギャラリー</Link></li>
            <li><Link href="/reservation">ご予約</Link></li>
            <li><Link href="/contact">お問い合わせ</Link></li>
          </ul>
        </nav>
        {children}
        <footer style={{
          marginTop: 'auto',
          padding: '2rem',
          textAlign: 'center',
          borderTop: '1px solid #eaeaea',
          backgroundColor: '#f9f9f9'
        }}>
          <p>&copy; 2024 {process.env.NEXT_PUBLIC_SITE_NAME || "いとや旅館/糸蔵"}. All rights reserved.</p>
          <p>{process.env.NEXT_PUBLIC_ADDRESS || "山形県南陽市宮内"} | TEL: {process.env.NEXT_PUBLIC_PHONE || "0238-47-2133"}</p>
        </footer>
      </body>
    </html >
  );
}
