# Storybook App

Denna app innehaller Storybook-miljon for komponentbiblioteket i detta monorepo.

## Syfte

- Visa och dokumentera alla komponenter i packages
- Ge interaktiva exempel for props och tillstand
- Fungera som visuell QA-yta under utveckling

## Kom igang

Fran repo-root:

```sh
npm install
npm run storybook
```

Fran apps/storybook:

```sh
npm install
npm run storybook
```

Storybook startar pa port 6006.

## Scripts

- npm run dev: startar Vite-app for lokal testyta
- npm run build: bygger Vite-appen
- npm run preview: forhandsgranskar byggd Vite-app
- npm run lint: kor ESLint i denna app
- npm run storybook: startar Storybook i utvecklingslage
- npm run build-storybook: bygger statisk Storybook

## Monorepo och beroenden

Appen konsumerar lokala workspace-paket via package-namn som @minilogg/buttons, @minilogg/badges och liknande.

Om ett paket saknas i Storybook:

1. Kontrollera att paketet finns under packages.
2. Kontrollera att paketet exporterar komponenten via sin index-fil.
3. Kontrollera att paketet finns som dependency i apps/storybook/package.json.

## Felsokning

Vanliga fel vid start:

- Workspace/beroenden inte installerade: kor npm install i repo-root.
- Fel katalog: kontrollera att du kor kommandon i repo-root eller apps/storybook.
- Portkrock pa 6006: stoppa annan process eller starta om terminalsessionen.
- Byggda artefakter i konflikt: testa att radera node_modules och installera om.

## Relaterade filer

- Root-README: ../../README.md
- Storybook-konfiguration: .storybook (om tillganglig i projektet)
