# Mzansi School

The central hub for Mzansi School: free, CAPS-aligned learning for every South African learner, plus practical real-world and vocational skills.

The site explains the mission and gives an overview of every subject we offer now or plan to offer: CAPS core subjects, electives and our own **Mzansi Skills** modules. It also links straight into the subject apps that are already live.

## Live subject apps

| Subject | App |
| --- | --- |
| English | https://mzansi-english.vercel.app/ |
| Mathematics | https://mzansi-math.vercel.app/ |
| Physical Sciences | https://mzansi-physics.vercel.app/ |
| Life Sciences (Gr 11–12) | https://mzansi-life-science-klar.vercel.app/ |
| Accounting | https://mzansi-accounting.vercel.app/ |
| Geography | https://geog-companion.vercel.app/ |
| Information Technology | https://it-helper-ten.vercel.app/ |

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check and build to dist/
```

Built with Vite + React + TypeScript. To deploy on Vercel, import the repo. Vercel detects Vite automatically.

## Adding or launching a subject

All subjects live in [`src/data/subjects.ts`](src/data/subjects.ts). When a new subject app goes live, set its `status` to `'live'` and add its `url`. It then shows up as a clickable card in **Live now** and in the catalogue, and is added to the hero stats and the footer.
