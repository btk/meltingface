import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { input } = req.body;

  try {
    const prompt = `For the phrase "${input}", generate:

1. A 5-color palette in HEX format (like #AABBCC).
2. Five emojis that represent or relate to the phrase.
3. A short quote that fits the theme of the phrase (no more than 1–2 sentences).
4. A font name from Google Fonts that matches the theme/mood of the phrase.
5. The exact Google Fonts import <link> tag for that font (for example: <link href="..." rel="stylesheet">)

Respond in this format:
Palette: [#hex1, #hex2, #hex3, #hex4, #hex5]
Emojis: [emoji1, emoji2, emoji3, emoji4, emoji5]
Quote: "Your short quote here"
Font: Font Name
FontLink: <link href="..." rel="stylesheet">
FontPage: https://fonts.google.com/specimen/YourFontName`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    const output = completion.choices[0].message.content;

    const paletteMatch = output.match(/Palette:\s*\[(.*?)\]/);
    const emojisMatch = output.match(/Emojis:\s*\[(.*?)\]/);

    const palette = paletteMatch?.[1]
      .split(",")
      .map((c) => c.trim().replace(/['"]+/g, ""));

    const emojis = emojisMatch?.[1]
      .split(",")
      .map((e) => e.trim().replace(/['"]+/g, ""));
      
    const quoteMatch = output.match(/Quote:\s*"(.*?)"/s);

    const quote = quoteMatch?.[1] || "";
    
    const fontMatch = output.match(/Font:\s*(.+)/);
    const fontLinkMatch = output.match(/FontLink:\s*<link.*?>/);

    const font = fontMatch?.[1]?.trim() || "";
    const fontLink = fontLinkMatch?.[0]?.trim() || "";

    const fontPageMatch = output.match(/FontPage:\s*(https:\/\/fonts\.google\.com\/specimen\/[^\s]+)/);

    const fontPage = fontPageMatch?.[1]?.trim() || "";

    res.status(200).json({ palette, emojis, quote, font, fontLink, fontPage });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
