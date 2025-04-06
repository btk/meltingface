import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [input, setInput] = useState("");
  const [palette, setPalette] = useState([]);
  const [emojis, setEmojis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState("");
  const [font, setFont] = useState("");
  const [fontLink, setFontLink] = useState("");
  const [fontPage, setFontPage] = useState("");

  const handleGenerate = async () => {
    setLoading(true);
    setPalette([]);
    setEmojis([]);
    setQuote("");
    setFont("");
    setFontLink("");
    setFontPage("");

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    });

    const data = await res.json();
    setPalette(data.palette);
    setEmojis(data.emojis);
    setQuote(data.quote);
    setFont(data.font);
    setFontLink(data.fontLink);
    setFontPage(data.fontPage);
    setLoading(false);
  };

  const clearResults = () => {
    setLoading(false);
    setPalette([]);
    setEmojis([]);
    setQuote("");
    setFont("");
    setFontLink("");
    setFontPage("");
  };

  return (
    <main>
      <Head>
        {fontLink && (
          <link
            rel="stylesheet"
            href={fontLink.match(/href="([^"]+)"/)?.[1] || ""}
          />
        )}
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <title>Meltingface - Get Unstuck with AI</title>
      </Head>

      {palette.length !== 0 && (
        <>
          <img
            src="/logo_melting.png"
            alt="meltingface Logo"
            style={{ width: "180px", marginBottom: "1rem" }}
          />
        </>
      )}
      {palette.length === 0 && (
        <>
          <img
            src="/logo_melting.png"
            alt="meltingface Logo"
            style={{ width: "280px", marginBottom: "1rem" }}
          />
          <p style={{ fontSize: "1.1rem", maxWidth: "400px" }}>
            AI-powered color / emoji / font discovery tool to help you get
            unstuck!
          </p>
          <input
            placeholder="Enter a phrase..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleGenerate} disabled={loading}>
            {loading ? "Generating..." : "Generate"}
          </button>
        </>
      )}

      {palette.length > 0 && (
        <>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "1rem",
              fontFamily: font || "Fredoka",
            }}
          >
            {input}
          </h2>

          <div className="color-container">
            {palette.map((color, i) => (
              <div
                key={i}
                className="color-box"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>

          {emojis.length > 0 && (
            <div>
              <div className="emoji-container">{emojis.join(" ")}</div>
            </div>
          )}

          {quote && (
            <div
              className="quote-block"
              style={{ fontFamily: font || "Fredoka" }}
            >
              {quote}
            </div>
          )}

          {fontPage && (
            <div className="font-link">
              Font used:{" "}
              <a href={fontPage} target="_blank" rel="noopener noreferrer">
                {font}
              </a>{" "}
              ↗️
            </div>
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "2rem",
              flexWrap: "wrap",
            }}
          >
            <button onClick={handleGenerate}>Regenerate</button>
            <button onClick={clearResults} className="secondary-button">
              Try Another Input
            </button>
          </div>
        </>
      )}
    </main>
  );
}
