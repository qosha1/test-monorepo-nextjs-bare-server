export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Bare Node Server Repro</h1>
      <p>
        package.json scripts.start is <code>node server.js</code>, but no
        server.js exists. Our container must fall through to <code>next start</code>{" "}
        (or the standalone server) instead of trying npm start.
      </p>
      <p>
        <a href="/dashboard">Dashboard</a>
      </p>
    </main>
  );
}
