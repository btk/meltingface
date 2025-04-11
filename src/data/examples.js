// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const examples = [
  {
    input: "Tropical Sunset",
    palette: ["#FF6B6B", "#FFE66D", "#FF9F1C", "#FF4D6D", "#FFB347"],
    emojis: ["🌅", "🌴", "🌊", "🌺", "🌞"],
    quote: "The sun sets in a blaze of colors, painting the sky with the promise of tomorrow.",
    font: "Pacifico",
    fontPage: "https://fonts.google.com/specimen/Pacifico"
  },
  {
    input: "Cyberpunk Night",
    palette: ["#00F5FF", "#FF00FF", "#00FF00", "#0000FF", "#FF0000"],
    emojis: ["🌃", "💻", "🎮", "🤖", "🔮"],
    quote: "Neon lights reflect off rain-slicked streets, where the future meets the past.",
    font: "Orbitron",
    fontPage: "https://fonts.google.com/specimen/Orbitron"
  },
  {
    input: "Forest Retreat",
    palette: ["#2E7D32", "#81C784", "#A5D6A7", "#4CAF50", "#1B5E20"],
    emojis: ["🌲", "🍄", "🦌", "🌿", "🦉"],
    quote: "In the heart of the forest, time stands still and nature speaks in whispers.",
    font: "Montserrat",
    fontPage: "https://fonts.google.com/specimen/Montserrat"
  },
  {
    input: "Ocean Depths",
    palette: ["#006064", "#00BCD4", "#4DD0E1", "#80DEEA", "#B2EBF2"],
    emojis: ["🌊", "🐋", "🐠", "🐙", "🐚"],
    quote: "Beneath the waves, a world of mystery and wonder awaits discovery.",
    font: "Quicksand",
    fontPage: "https://fonts.google.com/specimen/Quicksand"
  },
  {
    input: "Desert Mirage",
    palette: ["#FF9800", "#FFA726", "#FFB74D", "#FFCC80", "#FFE0B2"],
    emojis: ["🏜️", "🌵", "🐪", "☀️", "🏺"],
    quote: "The desert's vast expanse holds secrets whispered by the shifting sands.",
    font: "Caveat",
    fontPage: "https://fonts.google.com/specimen/Caveat"
  },
  {
    input: "Northern Lights",
    palette: ["#4A148C", "#7B1FA2", "#9C27B0", "#BA68C8", "#E1BEE7"],
    emojis: ["🌌", "❄️", "🌠", "🏔️", "✨"],
    quote: "Dancing colors paint the night sky in an ethereal display of nature's magic.",
    font: "Playfair Display",
    fontPage: "https://fonts.google.com/specimen/Playfair+Display"
  },
  {
    input: "Urban Jungle",
    palette: ["#424242", "#616161", "#757575", "#9E9E9E", "#BDBDBD"],
    emojis: ["🏙️", "🚇", "🌆", "🏢", "🌃"],
    quote: "Concrete canyons rise to meet the sky, a testament to human ambition.",
    font: "Raleway",
    fontPage: "https://fonts.google.com/specimen/Raleway"
  },
  {
    input: "Spring Garden",
    palette: ["#E91E63", "#F06292", "#F8BBD0", "#FF80AB", "#FF4081"],
    emojis: ["🌸", "🌷", "🦋", "🐝", "🌱"],
    quote: "New life blooms with every petal, painting the world in vibrant hues.",
    font: "Dancing Script",
    fontPage: "https://fonts.google.com/specimen/Dancing+Script"
  },
  {
    input: "Alien Tea Party",
    palette: ["#9C27B0", "#FFEB3B", "#4CAF50", "#FF5722", "#2196F3"],
    emojis: ["👽", "☕", "🛸", "🎪", "🎭"],
    quote: "The extraterrestrials serve cosmic tea in cups that defy gravity and reason.",
    font: "Press Start 2P",
    fontPage: "https://fonts.google.com/specimen/Press+Start+2P"
  },
  {
    input: "Underwater Circus",
    palette: ["#00BCD4", "#FFC107", "#FF5722", "#9C27B0", "#4CAF50"],
    emojis: ["🎪", "🐠", "🤹", "🎭", "🌊"],
    quote: "Mermaids juggle jellyfish while clownfish perform acrobatics in the coral ring.",
    font: "Bungee",
    fontPage: "https://fonts.google.com/specimen/Bungee"
  },
  {
    input: "Robot Poetry Slam",
    palette: ["#607D8B", "#FFC107", "#9E9E9E", "#FF5722", "#2196F3"],
    emojis: ["🤖", "📝", "🎤", "⚡", "💫"],
    quote: "Binary verses flow through circuits, creating poetry that sparks and hums.",
    font: "VT323",
    fontPage: "https://fonts.google.com/specimen/VT323"
  },
  {
    input: "Time-Traveling Diner",
    palette: ["#FF5722", "#FFC107", "#795548", "#9E9E9E", "#607D8B"],
    emojis: ["⏰", "🍔", "🚀", "🕰️", "🍳"],
    quote: "The milkshakes are from the future, but the jukebox plays songs from the past.",
    font: "Permanent Marker",
    fontPage: "https://fonts.google.com/specimen/Permanent+Marker"
  },
  {
    input: "Cloud City Library",
    palette: ["#E1F5FE", "#B3E5FC", "#81D4FA", "#4FC3F7", "#29B6F6"],
    emojis: ["📚", "☁️", "🏛️", "📖", "✨"],
    quote: "Books float on air currents, their pages turning in the gentle breeze of knowledge.",
    font: "Special Elite",
    fontPage: "https://fonts.google.com/specimen/Special+Elite"
  },
  {
    input: "Quantum Garden",
    palette: ["#7E57C2", "#26A69A", "#FFA726", "#42A5F5", "#EC407A"],
    emojis: ["⚛️", "🌱", "🌀", "🌺", "🔮"],
    quote: "Flowers exist in multiple states, blooming in all possible colors simultaneously.",
    font: "Share Tech Mono",
    fontPage: "https://fonts.google.com/specimen/Share+Tech+Mono"
  },
  {
    input: "Dream Catcher's Workshop",
    palette: ["#5D4037", "#8D6E63", "#BCAAA4", "#D7CCC8", "#EFEBE9"],
    emojis: ["🕸️", "✨", "🌙", "🦋", "💭"],
    quote: "Dreams are woven into delicate webs, catching starlight and moonbeams.",
    font: "Cinzel Decorative",
    fontPage: "https://fonts.google.com/specimen/Cinzel+Decorative"
  },
  {
    input: "Steampunk Laboratory",
    palette: ["#8B4513", "#D2B48C", "#DEB887", "#CD853F", "#D2691E"],
    emojis: ["⚙️", "🔧", "🕰️", "🔬", "💨"],
    quote: "Gears turn and steam hisses in this temple of Victorian innovation.",
    font: "Cinzel",
    fontPage: "https://fonts.google.com/specimen/Cinzel"
  },
  {
    input: "Crystal Cavern",
    palette: ["#E6E6FA", "#D8BFD8", "#DDA0DD", "#EE82EE", "#DA70D6"],
    emojis: ["💎", "✨", "🕳️", "🔮", "🌌"],
    quote: "Light refracts through prismatic walls, painting the cave in spectral hues.",
    font: "Cormorant Garamond",
    fontPage: "https://fonts.google.com/specimen/Cormorant+Garamond"
  },
  {
    input: "Floating Market",
    palette: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"],
    emojis: ["🛶", "🍍", "🌺", "🛍️", "🌊"],
    quote: "Boats drift between stalls, their colorful wares reflected in the water below.",
    font: "Pacifico",
    fontPage: "https://fonts.google.com/specimen/Pacifico"
  },
  {
    input: "Lunar Colony",
    palette: ["#1A1A2E", "#16213E", "#0F3460", "#533483", "#E94560"],
    emojis: ["🌕", "🏗️", "🚀", "👨‍🚀", "🌌"],
    quote: "Humanity's first steps on the moon have grown into a thriving lunar city.",
    font: "Rajdhani",
    fontPage: "https://fonts.google.com/specimen/Rajdhani"
  },
  {
    input: "Enchanted Bakery",
    palette: ["#FFF5E6", "#FFE6CC", "#FFD6B3", "#FFC699", "#FFB680"],
    emojis: ["🍪", "✨", "🧁", "🍞", "🪄"],
    quote: "The scent of magic and fresh bread fills the air, where pastries float on their own.",
    font: "Dancing Script",
    fontPage: "https://fonts.google.com/specimen/Dancing+Script"
  }
];

// Export both original and shuffled versions
export const getShuffledExamples = () => shuffleArray(examples); 