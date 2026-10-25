# Belief, Knowledge & Life

A bilingual English/Urdu learning diary, served as static HTML with a small reader-theme script. The main reading surface is a plain diary index, with related threads, reading notes and About pages.

- `/` and `/ur/`: diary index.
- `/diary/<entry>/` and the matching Urdu route: diary entries.
- `/threads/`: related questions and entries.
- `/reading/`: reading notes and source links.
- `/about/`: the author's account of this diary.

Earlier article URLs remain usable and lead readers into the related diary material. Existing private feedback forms retain their original article keys; comments remain private. Existing email subscription wording, opt-in fields and backend endpoint are retained. Theme preference is stored locally in the reader's browser.

The site runs on GitHub Pages from `main` at the repository root. Preserve `.nojekyll` and the `CNAME` containing `bkljournal.org`. For local preview, run `python -m http.server 8000` from this directory.

This public repository contains only released text and site assets. Private source records, manuscript provenance, transcripts, QA, account data and recovery archives belong outside every public branch, including hidden or unlinked files. Prior public versions remain recoverable through Git history. A saved future thought does not automatically authorise publication.
