---
name: "Yopa Tailwind Structure"
description: "Appliquer la structure pedagogique a tout travail sur src/styles/**. Contexte, Analyse, Options, Validation obligatoires pour modifications CSS/Tailwind."
applyTo: "src/styles/**"
---

# Structure Pedagogique Yopa pour Tailwind

Lorsque tu travailles sur des fichiers CSS/Tailwind dans `src/styles/`, applique **obligatoirement** cette structure:

## 1. Contexte
Resumer brievement:
- Le fichier ou la classe CSS/Tailwind en question.
- Son role dans Yopa (couleurs, typographie, layout, etc.).
- L'etat actuel et l'objectif du changement.

## 2. Analyse
Expliquer:
- Ce qui est propose, modifie ou debugge.
- Pourquoi c'est pertinent pour Yopa (minimalisme, accessibilite, coherence).
- Lien avec la palette Tailwind, constraints et univers science-fiction.

## 3. Options
Toujours proposer **2 a 3 options** avec avantages et inconvenients:
- Approche A: bref, avantage, inconvenient
- Approche B: bref, avantage, inconvenient
- Approche C (si pertinent): bref, avantage, inconvenient

Exemple: classe utilitaire vs composant @apply vs CSS personnalise.

## 4. Validation
Poser explicitement: "Quelle option choisis-tu ?"
Attendre la validation avant d'implementer.

## 5. Implementation (apres validation)
Fournir:
- Le code CSS/Tailwind complet et commente
- Une explication du changement et de son impact
- Verification (exemple: verifier contraste WCAG sur dark mode)
- Proposition d'amelioration suivante

## Notes Importantes
- Ne jamais modifier un fichier src/styles/ sans validation explicite.
- Respecter palette Tailwind et configuration existante (tailwind.config.js).
- Verifier accessibilite: contraste WCAG AA minimum, tailles lisibles.
- Favoriser utilitaires Tailwind plutot que CSS custom quand possible.
- Tester sur mobile et dark mode si applicable.
- Proposer des ameliorations UX/UI si pertinent.

## Exemple de Reponse Attendue
```
## Contexte
main.css gere la typographie et les couleurs de base de Yopa. Actuellement...

## Analyse
Pour [amelioration visuelle], [raison]. Cela impacte [coherence/accessibilite/perf].

## Options
1. Approche A: [utiliser classe Tailwind], Avantage: [+], Inconvenient: [-]
2. Approche B: [utiliser @apply personnalisee], Avantage: [+], Inconvenient: [-]

## Validation
Quelle option choisis-tu ?
```

## Ressources
- Tailwind docs: https://tailwindcss.com/docs
- Configuration actuelle: tailwind.config.js (root workspace)
- WCAG 2.1 AA: https://www.w3.org/WAI/WCAG21/quickref/
