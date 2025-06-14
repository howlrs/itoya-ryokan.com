import styles from "../page.module.css";

export default function Reservation() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <section>
                    <h1>予約について</h1>
                    <div>
                        <h2>外部予約サイト</h2>
                        <p>楽天・Yahooなどトラベル系の予約システムへのリンク</p>
                    </div>
                    <div>
                        <h2>内部予約システムについて</h2>
                        <p>内部での予約システムを組むこともできるが決済・キャンセルや予約状況の同期など工数がかかる</p>
                    </div>
                </section>
            </main>
            <footer className={styles.footer}>

            </footer>
        </div>
    );
}
