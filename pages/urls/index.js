import styles from '../../styles/Layout.module.css'


export default function AllUrlRecordsList({ urls }) {
    function copyclip(){
        navigator.clipboard.writeText(url_record.short_code)
    }
    return <div>
                {urls.map(url => 

                <div key={url.short_code} className={styles.grid}>
                    <a href={`/urls/${url.short_code}`} className={styles.card}>
                        <p className={styles.grid}>
                            <code className={styles.code}>{url.short_code}</code>
                            <button onClick={copyclip} type="copy">copy</button>
                            <code className={styles.code}>{url.url}</code>
                        </p>
                    </a>
                </div>

                )}
            </div>
}

export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:8000/all_short_codes`);
    const data = await req.json();
    
    return {
        props: { urls: data }
    }
}