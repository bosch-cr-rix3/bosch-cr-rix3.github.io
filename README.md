# Bosch Research | CR/RIX3-AP

## Development

Run `npm install`, then start Vite with `npm run dev`. The VS Code task **Vite: dev** starts the local app. Use **Vite: build** to type-check and create the production bundle in `dist/`.

## GitHub Pages

The site is configured for the root domain `https://bosch-cr-rix3.github.io/`. In the repository's **Settings > Pages > Build and deployment**, set **Source** to **GitHub Actions**.

The **Deploy to GitHub Pages** workflow installs dependencies, builds the app, and publishes `dist/` on every push to `main`. It can also be started manually from the repository's **Actions** tab.