import { useState, useEffect } from "react";
import Head from "next/head";
import ExampleCard from "@/components/ExampleCard";
import LoadingOverlay from "@/components/LoadingOverlay";
import { examples, getShuffledExamples } from "@/data/examples";

// Get unique fonts from examples
const uniqueFonts = [...new Set(examples.map(example => example.font))];

export default function Home() {
  const [input, setInput] = useState("");
  const [palette, setPalette] = useState([]);
  const [emojis, setEmojis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState("");
  const [font, setFont] = useState("");
  const [fontLink, setFontLink] = useState("");
  const [fontPage, setFontPage] = useState("");
  const [shuffledExamples, setShuffledExamples] = useState([]);
  const [generatedData, setGeneratedData] = useState(null);
  const [showExamples, setShowExamples] = useState(true);
  const [error, setError] = useState(null);
  const [exampleClicked, setExampleClicked] = useState(false);

  useEffect(() => {
    setShuffledExamples(getShuffledExamples());
  }, []);

  useEffect(() => {
    if (exampleClicked && input.trim()) {
      handleGenerate();
      setExampleClicked(false);
    }
  }, [input, exampleClicked]);

  const handleGenerate = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: input.trim() }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate content");
      }

      const data = await response.json();
      console.log("Generated data:", data);

      if (!data.palette || !data.emojis || !data.quote || !data.font) {
        throw new Error("Invalid response format from API");
      }

      setGeneratedData(data);
      setPalette(data.palette);
      setEmojis(data.emojis);
      setQuote(data.quote);
      setFont(data.font);
      setFontLink(data.fontLink);
      setFontPage(data.fontPage);
      setShowExamples(false);
    } catch (err) {
      console.error("Error generating content:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
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

  const handleExampleClick = (exampleInput) => {
    setInput(exampleInput);
    setExampleClicked(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {loading && <LoadingOverlay />}
      <Head>
        {fontLink && (
          <link
            rel="stylesheet"
            href={fontLink.match(/href="([^"]+)"/)?.[1] || ""}
          />
        )}
        {/* Add all example fonts */}
        {examples.map(example => (
          <link
            key={example.font}
            href={`https://fonts.googleapis.com/css2?family=${example.font.replace(/\s+/g, '+')}:wght@400;600&display=swap`}
            rel="stylesheet"
          />
        ))}
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
        <div className="landing-content">
          <img
            src="/logo_melting.png"
            alt="meltingface Logo"
            style={{ width: "280px", marginBottom: "1rem" }}
          />
          <h1 style={{ color: "#333" }}>Get Unstuck with AI</h1>
          <p className="subtitle">
            AI-powered concept visualizer, color / emoji / font discovery tool to help you get
            unstuck!
          </p>
          <div className="input-container">
            <input
              placeholder="Enter a phrase..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleGenerate();
                }
              }}
            />
            <button onClick={handleGenerate} disabled={loading}>
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
          
          <div className="examples-section">
            <h2>Try these examples:</h2>
            <div className="examples-grid">
              {shuffledExamples.map((example, index) => (
                <ExampleCard
                  key={index}
                  example={example}
                  onClick={() => handleExampleClick(example.input)}
                />
              ))}
            </div>
          </div>
        </div>
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

          <div className="button-container">
            <button onClick={handleGenerate}>Regenerate</button>
            <button onClick={clearResults} className="secondary-button">
              Try Another Input
            </button>
          </div>
        </>
      )}
      <footer className="footer">
        <p>All Vibe-coded with AI.</p>
      </footer>
    </main>
  );
}
