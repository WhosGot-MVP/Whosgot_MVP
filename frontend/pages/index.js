export default function Home() {
  return (
    <main style={{padding: 24, maxWidth: 800, margin: '0 auto'}}>
      <h1>WhosGot</h1>
      <h2>Because asking is human</h2>
      <p>Ask the world. Someone will answer.</p>

      <section>
        <h3>Today’s Highlights</h3>
        <ul>
          <li>📸 Looking for Phil & Eddie’s Diner photo (Heartwarming)</li>
          <li>💡 Need advice on moving to Berlin (Advice)</li>
        </ul>
      </section>

      <section>
        <a href="/requests">View All Requests</a> &nbsp;|&nbsp; <a href="/create">Post a Request</a>
      </section>
    </main>
  );
}
