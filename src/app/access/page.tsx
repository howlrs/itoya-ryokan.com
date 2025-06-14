import styles from "../page.module.css";

export default function Access() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>アクセス</h1>
                <div>
                    <h2>電車でお越しの場合</h2>
                    <p>JR奥羽本線「赤湯駅」より車で約10分</p>

                    <h2>お車でお越しの場合</h2>
                    <p>東北中央自動車道「南陽高畠IC」より約15分</p>
                    <p>山形自動車道「山形蔵王IC」より約30分</p>

                    <h2>バスでお越しの場合</h2>
                    <p>赤湯駅前より南陽市営バス「宮内線」にて「熊野大社前」下車徒歩3分</p>

                    <h2>住所</h2>
                    <p>{process.env.NEXT_PUBLIC_ADDRESS || "山形県南陽市宮内"}</p>

                    <h2>お問い合わせ</h2>
                    <p>TEL: {process.env.NEXT_PUBLIC_PHONE || "0238-47-2133"}</p>
                </div>
            </main>
        </div>
    );
}
