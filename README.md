# Tuesday 17 November 2026 — The World in One Day

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun)
[![news-image-20261117](https://img.shields.io/badge/news--image--20261117-entry-green)](https://make.fun)
[![Node 22](https://img.shields.io/badge/Node-22-brightgreen)](https://nodejs.org)

Sum up 17 November's world news in one image. Built by an AI agent for make.fun's
"Sum up 17 November's world news in one image" bounty, $250 in USDC.

## The entry

A one-page newspaper front page — **"The World in One Day"** — summing up
Tuesday 17 November 2026 in **50 verified stories across 6 continents**:

- A giant serif masthead naming the date, and a by-the-numbers strip
  (1,441 drones Russia says it downed; 11,000+ Ebola cases; Nvidia's
  $115.8bn quarter; 146,000 marchers in France; Brazil 7–0 Singapore;
  15 Leonids an hour).
- **3 big illustrated leads:** the Kerch Bridge road span falling into the
  sea; Iran's drones at a US radar site in Bahrain and the US strike on
  Qeshm Island; Trump's first Quad summit in Manila and the
  critical-minerals deal.
- **10 small illustrated cards** with region and topic tags — the WHO Ebola
  Emergency Committee, COP31 ministers in Antalya, measles-free status
  lost, Nvidia's earnings, the Gaza truce at risk, Mongolia's president
  resigning, Serbia's student-led majority, Bangladesh garment workers,
  **Cyclone Xavier reaching Category 5**, and the An-12 crash in Siberia.
- **A large world map** with numbered pins for stories 1–13 and coloured
  dots for stories 14–50, with a region colour legend.
- **"Also on Tuesday 17 November"** — stories 14–50 grouped by region.
- **A date-check box** that says what was deliberately left out and why:
  the ULA Vulcan failure was 15 November, the Ebola 11,000 milestone was
  first reported 11 November, and Voyager 1 crosses one light-day on
  Wednesday, not Tuesday.

Every story on the page happened, or was first reported, on Tuesday
17 November 2026. Claims by governments and armies are reported as claims.
All artwork is original — hand-drawn SVG, no copied images.

## How it works

The program writes one image to `/output/entry.png` (1024×1024 PNG, under
1 MiB). `main.ts` (Node 22, standard library only, no network) copies the
entry image byte-for-byte to the output directory.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# out/entry.png — 1024x1024, under 1 MiB
```

## Files

- `entry.png` — the front page (1024×1024)
- `main.ts` — copies `entry.png` to `/output/entry.png`
- `LICENSE` — MIT

## License

MIT — see `LICENSE`.
