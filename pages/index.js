import React from "react";

export async function getServerSideProps() {
  // This runs on the server at request time (SSR)
  const res = await fetch("http://localhost:4000/api/message");
  const data = await res.json();

  return {
    props: {
      message: data.message,
      time: data.time,
    },
  };
}

export default function Home({ message, time }) {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      <h1>Next.js SSR with Separate Backend</h1>
      <p>This page is rendered on the server using <code>getServerSideProps</code>.</p>
      <p><strong>Message from backend:</strong> {message}</p>
      <p><strong>Time from backend:</strong> {time}</p>
      <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#666" }}>
        Frontend (Next.js) is running on <code>localhost:3000</code> and backend (Express) on <code>localhost:4000</code>.
      </p>
    </main>
  );
}
