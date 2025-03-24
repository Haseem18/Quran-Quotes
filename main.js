const quranQuotes = [
  {
    quote: "Indeed, with hardship comes ease.",
    surah: "Surah Al-Inshirah (94:6)"
  },
  {
    quote: "And He found you lost and guided [you].",
    surah: "Surah Ad-Duhaa (93:7)"
  },
  {
    quote: "So verily, remember Me, I will remember you.",
    surah: "Surah Al-Baqarah (2:152)"
  },
  {
    quote: "Do not despair of the mercy of Allah.",
    surah: "Surah Az-Zumar (39:53)"
  },
  {
    quote: "Indeed, Allah does not burden a soul beyond that it can bear.",
    surah: "Surah Al-Baqarah (2:286)"
  },
  {
    quote: "And We have certainly made the Quran easy for remembrance, so is there any who will remember?",
    surah: "Surah Al-Qamar (54:17)"
  },
  {
    quote: "Call upon Me; I will respond to you.",
    surah: "Surah Ghafir (40:60)"
  },
  {
    quote: "And whoever puts their trust in Allah, then He will be enough for them.",
    surah: "Surah At-Talaq (65:3)"
  },
  {
    quote: "Indeed, Allah loves those who rely upon Him.",
    surah: "Surah Aal-E-Imran (3:159)"
  },
  {
    quote: "And whoever fears Allah - He will make for him a way out.",
    surah: "Surah At-Talaq (65:2)"
  }
];
const gradients = [
  "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  "linear-gradient(135deg, #a18cd1, #fbc2eb)",
  "linear-gradient(135deg, #ffecd2, #fcb69f)",
  "linear-gradient(135deg, #6e8efb, #a777e3)",
  "linear-gradient(135deg, #f093fb, #f5576c)",
  "linear-gradient(135deg, #4facfe, #00f2fe)",
  "linear-gradient(135deg, #43e97b, #38f9d7)",
  "linear-gradient(135deg, #fa709a, #fee140)",
  "linear-gradient(135deg, #30cfd0, #330867)",
  "linear-gradient(135deg, #ff9a9e, #fecfef)"
];

const surahName = document.querySelector("h1");
const quote = document.querySelector('p');

let index = 0;

function generateQuote() {
  if (index === quranQuotes.length - 1) {
    index = 0;
  }
  const selectedQuote = quranQuotes[index];
  surahName.innerText = selectedQuote.surah;
  quote.innerText = selectedQuote.quote;
  document.body.style.background = gradients[index];
  index++;
}

generateQuote();

setInterval(generateQuote, 4000);
