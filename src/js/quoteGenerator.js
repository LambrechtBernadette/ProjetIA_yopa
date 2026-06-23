const quotes = [
  "Forte la patience est, si attendre tu sais.",
  "Clair devient ton esprit, lorsque tu respires.",
  "Agir tu dois, mais avec calme.",
  "Puissante est la concentration, quand présent tu es.",
  "Le calme, ton allié devient, si le cultives tu.",
  "Petits pas mènent loin, si constants ils sont.",
  "L'énergie en toi se trouve, si tu la cherches.",
  "Lâcher prise tu dois, pour avancer.",
  "Chaque instant compte, si attentif tu es.",
  "Moins penser, plus ressentir tu dois."
];

export function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}