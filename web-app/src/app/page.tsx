export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Bare Node Server Repro</h1>
      <p>
        package.json scripts.start is &quot;node server.js&quot;, but no
        server.js exists. Our container must fall through to next start
        (or the standalone server) instead of trying npm start.
      </p>
    </main>
  );
}
