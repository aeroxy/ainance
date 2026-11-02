<p align="center"><img src="https://aeroxy.github.io/ainance/assets/logo.svg" width="72" alt="Ainance logo"></p>

# Ainance

A daily market briefing written by an AI analyst that grades its own calls.

**Read today's:** https://aeroxy.github.io/ainance/ · **Every briefing:** https://aeroxy.github.io/ainance/archive/ · **Each morning on Telegram:** https://t.me/ainance_daily

Every day at 05:00 Singapore time, just after the US close, finance-bro reads about 200 headlines from the last 24 hours, checks prices across markets, and publishes a briefing:

- **Markets**: indices, rates, FX, commodities, crypto and US sectors, with each one's last move.
- **Today's calls**: ten bullish and ten bearish, each scored 1x to 9x for conviction, with a thesis, the risk to it, and its sources.
- **What happened**: a plain-English recap of the last 24 hours across stocks, crypto and commodities, every story linked to its sources.
- **Watch next**: data releases, earnings and deadlines coming up.
- **Scorecard**: how the earlier calls did.

## How calls are graded

A call is about one asset's next trading session (the next 24 hours for crypto), and that is exactly how it is graded the next morning.

- A hit is a move in the called direction, from the price shown with the call to the price once the asset has traded again. A weekend call on a stock waits for Monday's session.
- Each graded call sits next to its market (the S&P 500 or the local index for stocks, bitcoin for crypto), so a call that rode the market reads differently from one that beat it.
- A futures call whose front-month contract rolls over is voided rather than graded, since the jump between contracts isn't a move. A call that doesn't trade again within a week expires.
- Hit rates by direction and by score band (1x–3x, 4x–6x, 7x–9x) go back to the analyst every morning, so its scores get calibrated against what actually happened.

## How it learns

After grading, finance-bro writes down why each call worked or didn't, then revises a notebook of lessons: rules that have held up, mistakes to avoid, how its scores are calibrated, and what the market is like right now. It rereads the notebook before making the next day's calls. The notebook stays behind the scenes; the scorecard is public.

## Before it publishes

finance-bro renders the page, screenshots it at desktop and phone width, and reviews it: numbers against the market board, weekdays against a calendar, and the summary against the calls. It can rewrite the words, never the calls or the scores.

## This repository

The `main` branch is the published site, served by GitHub Pages. finance-bro commits to it through the aero-oops-wtf GitHub App, which is why commits are authored by `aero-oops-wtf[bot]`. Each publish is one commit, so the history is the publishing record.

| Path | What it is |
|---|---|
| `index.html` | The latest briefing |
| `archive/YYYY-MM-DD.html` | Every briefing, by its Singapore date |
| `archive/index.html` | The list of briefings, newest first |
| `assets/` | The stylesheet, two small web components (`<fb-score>`, `<fb-change>`), the logo and icons |

The pages are generated, so a hand edit to one of these files is overwritten the next time it is published. The code that writes them is finance-bro.

## Where the data comes from

Headlines from Google News search, and prices from CNBC's quote service and Binance's market data. finance-bro reads headlines, not full articles, so it treats them as leads rather than facts.

## The logo

A donut chart: bull over bear, a hairline apart. The hole in the middle is a coincidence.

## Not investment advice

Ainance is an experiment in AI analysis that keeps score in public. Its calls are short-horizon research written by a model; they are not advice to buy, sell or hold anything. The pages use Google Analytics.
