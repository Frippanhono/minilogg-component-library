# MiniLogg Component Library

> Ett återanvändbart komponentbibliotek/designsystem för MiniLogg – en pedagogisk webbapplikation. Byggt med React, Vite, Storybook och moderna frontend-principer.

## Innehåll

- [Om projektet](#om-projektet)
- [Struktur](#struktur)
- [Kom igång](#kom-igång)
- [Storybook](#storybook)
- [Testning](#testning)
- [Komponenter](#komponenter)
- [Bidra & feedback](#bidra--feedback)

## Om projektet

MiniLogg Component Library är ett monorepo med återanvändbara UI-komponenter för lärplattformen MiniLogg och liknande pedagogiska applikationer. Fokus ligger på tillgänglighet, skalbarhet, tydlig dokumentation och konsekvent design.

## Struktur

```
minilogg-component-library/
├── apps/
│   └── storybook/         # Dokumentation & visuell testning
├── packages/              # Alla UI-komponenter (varje mapp = ett npm-paket)
│   ├── badges/
│   ├── button/
│   ├── ...
├── package.json           # Workspace-root
├── README.md              # Den här filen
└── LICENSE
```

## Kom igång

1. **Kloning & installation**

   ```sh
   git clone <repo-url>
   cd minilogg-component-library
   npm install
   ```

2. **Starta Storybook**

   ```sh
   npm run storybook
   ```

   Alternativt direkt i Storybook-appen:

   ```sh
   cd apps/storybook
   npm run storybook
   ```

3. **Kör tester**
   ```sh
   npm test
   ```

## Storybook

Storybook visar alla komponenter med kodexempel och interaktiva kontroller.

- Starta lokalt: `npm run storybook`
- [Se komponenter i Storybook](./apps/storybook)

## Monorepo-korning

Root-scripts i `package.json` vidarebefordrar till workspace `storybook`.

- `npm run dev` kor `dev` i `apps/storybook`
- `npm run storybook` kor Storybook i `apps/storybook`
- `npm run build-storybook` bygger statisk Storybook i `apps/storybook`

Det betyder att du kan kora de vanligaste kommandona direkt fran repo-root.

### Publik Storybook-lank (GitHub Pages)

Projektet har en GitHub Actions-workflow som bygger och publicerar Storybook till GitHub Pages vid push till `main`.

1. Pusha senaste andringar till `main`.
2. I GitHub: ga till `Settings -> Pages` och satt `Source` till `GitHub Actions`.
3. Nar workflowen `Deploy Storybook to GitHub Pages` ar klar far du en publik URL.

Standardformat pa URL:

`https://<ditt-github-anvandarnamn>.github.io/minilogg-component-library/`

Den URL:en ar den du ska anvanda i rapporten.

## Testning

Alla komponenter testas med Vitest och Testing Library. Kör `npm test` för att köra alla tester.

## Felsokning

Om `npm run dev` eller `npm run storybook` misslyckas:

1. Kontrollera att installationen ar gjord i repo-root: `npm install`
2. Kontrollera Node- och npm-version enligt teamets overenskommelse
3. Testa workspace-kommandot explicit: `npm run storybook --workspace=storybook`
4. Om fel kvarstar, rensa `node_modules` och installera om


## Komponenter

Varje komponent finns som ett eget npm-paket i `packages/` och har egen README, stories och tester.

**Nyhet: Hero navigation i Storybook**

Storybook har nu en hero navigation högst upp på sidan som samlar och länkar till alla komponenter för snabb översikt och navigering. Detta är en del av Storybook-upplevelsen och inte en återanvändbar komponent i biblioteket.

Exempel på komponenter:

- badges
- button
- cards
- child-card
- department-overview-card
- dropdowns
- inputs
- meal-status-selector
- message-card
- modals
- navbar
- tabs
- teacher-card
- toasts
- weekly-schedule

Se respektive mapp för detaljerad dokumentation och props.

## Bidra & feedback

Välkommen att bidra! Skapa gärna en issue för buggar, förbättringsförslag eller feedback. Se även respektive komponent-README för länkar till feedback och buggrapportering.

---

© 2026 MiniLogg. Alla rättigheter förbehållna.
