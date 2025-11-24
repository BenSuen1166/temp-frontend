import React from "react";

export async function getStaticProps() {
  // ISR fetches data at build time and revalidates on the interval below
  const res = await fetch(
    "https://backendapi1125-cjfjbrdbe4exaaec.eastasia-01.azurewebsites.net/api/message"
  );
  const data = await res.json();

  return {
    props: {
      message: data.message,
      time: data.time,
    },
    revalidate: 60, // regenerate the page at most once per minute
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
      <p>This page is rendered using ISR via <code>getStaticProps</code>.</p>
      <p><strong>Message from backend:</strong> {message}</p>
      <p><strong>Time from backend:</strong> {time}</p>
      <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#666" }}>
        Frontend (Next.js) is running on <code>localhost:3000</code> and backend (Express) on <code>localhost:4000</code>.
      </p>
    </main>
  );
}
