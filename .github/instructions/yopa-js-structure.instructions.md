---
name: "Yopa JS Structure"
description: "Appliquer la structure pedagogique a tout travail sur src/js/**. Contexte, Analyse, Options, Validation obligatoires."
applyTo: "src/js/**"
---

# Structure Pedagogique Yopa pour JavaScript

Lorsque tu travailles sur des fichiers JavaScript dans `src/js/`, applique **obligatoirement** cette structure:

## 1. Contexte
Resumer brievement:
- Le fichier ou la fonction en question.
- Son role dans Yopa.
- L'etat actuel (exemple: counter.js gere l'etat global du compteur).

## 2. Analyse
Expliquer:
- Ce qui est propose, modifie ou debugging.
- Pourquoi c'est pertinent pour Yopa (minimaliste, rapide, simple).
- Tout lien avec d'autres fichiers ou composants.

## 3. Options
Toujours proposer **2 a 3 options** avec avantages et inconvenients:
- Approche A: bref, avantage, inconvenient
- Approche B: bref, avantage, inconvenient
- Approche C (si pertinent): bref, avantage, inconvenient

## 4. Validation
Poser explicitement: "Quelle option choisis-tu ?"
Attendre la validation avant d'implementer.

## 5. Implementation (apres validation)
Fournir:
- Le code complet et commente
- Une explication du changement
- Proposition de verification finale ou amelioration suivante

## Notes Importantes
- Ne jamais modifier un fichier src/js sans validation explicite.
- Code simple, lisible, sans complexite inutile.
- Respecter la modularite existante (separation counter.js / quoteGenerator.js / main.js).
- Proposer des ameliorations UX/UI si pertinent.
- Ne jamais executer de commande Git; proposer des messages de commit seulement.

## Exemple de Reponse Attendue
```
## Contexte
quoteGenerator.js genere les citations alea et les formate. Actuellement...

## Analyse
Pour [amelioration], [raison].

## Options
1. Approche A: [description], Avantage: [+], Inconvenient: [-]
2. Approche B: [description], Avantage: [+], Inconvenient: [-]

## Validation
Quelle option choisis-tu ?
```
