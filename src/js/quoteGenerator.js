const quotes = [
  // Citations originales
  "Forte la patience est, si attendre tu sais.",
  "Clair devient ton esprit, lorsque tu respires.",
  "Agir tu dois, mais avec calme.",
  "Puissante est la concentration, quand présent tu es.",
  "Le calme, ton allié devient, si le cultives tu.",
  "Petits pas mènent loin, si constants ils sont.",
  "L'énergie en toi se trouve, si tu la cherches.",
  "Lâcher prise tu dois, pour avancer.",
  "Chaque instant compte, si attentif tu es.",
  "Moins penser, plus ressentir tu dois.",
  // Nouvelles citations
  "Silencieux est l'univers, mais plein de réponses il est.",
  "Recharge-toi tu dois, avant de repartir.",
  "Dans le souffle, la clarté se cache.",
  "Profond est le repos, si mérité il est.",
  "Ralentir n'est pas reculer, avancer autrement c'est.",
  "Ton esprit, un cosmos est — explorer-le tu peux.",
  "Présent dans ce moment, nulle part ailleurs tu n'es.",
  "Légère devient la charge, si partagée elle est.",
  "La force ne crie pas — silencieuse, elle agit.",
  "Un battement de cœur. Puis un autre. Là tu es.",
  "Infini est l'instant, si pleinement vécu il est.",
  "Ce que tu cherches, en toi déjà se trouve.",
  "Douter c'est penser — penser, c'est vivre.",
  "La gravité te tient, mais l'esprit s'échappe.",
  "Entre deux pensées, le calme existe.",
  "Observer avant d'agir — la sagesse commence là.",
  "Ton prochain pas, suffisant il est pour l'instant.",
  "Comme les étoiles, constant tu peux être.",
  "Rien ne presse, si dans le présent tu vis.",
  "Connecté à toi-même, invincible tu deviens.",
  // Citations supplémentaires
  "Patience n'est pas attente — présence active, elle est.",
  "Un jardin, ton esprit est — ce que tu sèmes, tu récoltes.",
  "La tempête passe, mais l'arbre enraciné reste.",
  "Simple est le chemin, compliqué nous le rendons.",
  "Écouter avant de parler — sage, cela te rend.",
  "Ton souffle, une ancre est, quand le monde s'agite.",
  "Petite la graine est, grand l'arbre deviendra.",
  "Ce n'est pas la destination qui compte, mais le pas présent.",
  "Vide ton esprit, et l'espace, la clarté remplira.",
  "Fort n'est pas celui qui ne tombe jamais, mais celui qui se relève.",
  "Dans le silence, ta propre voix tu entends enfin.",
  "Aujourd'hui suffit — demain, de lui-même il s'occupera.",
  "La lumière, même faible, l'obscurité elle dissipe.",
  "Accueillir ce qui est, plus sage que résister c'est.",
  "Ton cœur, une boussole est — fais-lui confiance.",
  "Rien n'est permanent, pas même la difficulté présente.",
  "Un sourire partagé, deux cœurs il allège.",
  "Grandir dans le doute, plus précieux que stagner dans la certitude c'est.",
  "La patience du rocher, imiter tu peux face à la rivière.",
  "Simplement respirer — déjà, un acte de courage c'est."
];

let lastIndex = -1;

export function getRandomQuote() {
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === lastIndex);
  lastIndex = index;
  return quotes[index];
}