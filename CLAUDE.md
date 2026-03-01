# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A single-page HTML slide deck for **CAIL Spotlight Workshop #1: Foundations — Coding with Generative AI**, hosted via GitHub Pages at `cuny-ai-lab.github.io/gen-dev-foundations`. The upstream source is `milwrite/quimbot/docs/cail-workshop-1/`.

## Repository Layout

- `index.html` — the entire slide deck (HTML + CSS + JS in one file, no build step)
- `SLIDES.md` — plain-text companion documenting every slide's label, title, and stage content
- `src/chainwheel.html` — self-contained canvas animation embedded via iframe on the title slide

## Sync Rules

- **SLIDES.md must always match index.html.** When slide titles, content, or ordering change in `index.html`, update `SLIDES.md` to reflect the same changes. The reverse also applies.
- The upstream copy lives at `milwrite/quimbot/docs/cail-workshop-1/`. When syncing from upstream, the only path adjustment needed is the title-slide iframe: upstream uses `../gallery/chainwheel.html`, this repo uses `src/chainwheel.html`.

## Slide Architecture

Each slide is a `<section class="slide">` with a `data-slide` attribute. Layout is two panels:
- `.content` — left panel with label, title, subtitle
- `.stage` — right panel with visual content (terminal, cards, links, iframe, or placeholder `.ph`)

Slide types with special CSS:
- `data-slide="title"` — stacked layout (content on top, stage fills below)
- `.slide-break` — full-bleed section dividers (Part 1 / Part 2)
- `.slide-icebreaker` — custom two-question layout using `.ib-pair` / `.ib-q`

Navigation is vanilla JS at the bottom of the file: arrow keys, swipe, hash-based URLs (`#1` through `#16`).

## Design Tokens

```css
--part:   #b89060   /* warm bronze — labels, accents, step numbers */
--accent: #79c0ff   /* code-blue — links, focus rings */
--bg:     #0b0e14   /* dark navy background */
```

Part 2 section break overrides `--part` to `#2ea043` (green) via inline style.

## Agenda Links

Agenda items are `<a>` elements with `href="#N"` pointing to slide numbers. If slides are reordered, update these href values.

## Slide Design Workflow

When making significant visual changes to a slide or adding a new slide, always invoke the `frontend-design` skill. This ensures design quality, consistent aesthetics, and intentional layout decisions across the deck.

## Commit Style

Short, lowercase messages, no sign-off.
