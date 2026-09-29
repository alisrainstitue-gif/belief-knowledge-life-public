# Belief, Knowledge & Life

A bilingual public learning journal. The site is static HTML, CSS and a small optional script, with no build step or external dependencies.

## Pages

- `index.html` — English homepage.
- `ur/index.html` — Urdu homepage with right-to-left layout. The Urdu article is not included until its wording is approved.
- `journal/where-do-i-begin/index.html` — the approved 100-word English opening reflection.
- `assets/site.css` — shared responsive styling, reduced-motion and print styles.
- `assets/site.js` — optional copy-link and print controls.
- `404.html` — missing-page screen.

## Publish

In this repository's **Settings → Pages**, select **Deploy from a branch → main → /(root)** and save. `.nojekyll` allows the site to be served without Jekyll processing.

For a local preview, run `python -m http.server 8000` in this folder and open `http://localhost:8000`.

## Editorial and privacy boundaries

Only approved public text belongs in this repository, including its history. Do not add private notes, unapproved drafts, identifiable personal accounts, account credentials or material from a private workspace. Keep the article wording unchanged unless a new version is explicitly approved. The first Urdu article is intentionally absent, not hidden in the page or in JavaScript.

No personal byline, biography, contact details, profile links, analytics, advertising, external fonts, cookies or visitor forms are included in the website files. Repository ownership, commit metadata and hosting-provider logs are separate from the displayed website; the site does not promise anonymous hosting.

Use the existing typography and responsive layout for new entries. Add a separately addressable page for each approved translation and update the relevant homepage. Relative paths allow the normal pages to work under a project-site URL; the 404 page uses the project folder explicitly and should be updated if that folder changes.
