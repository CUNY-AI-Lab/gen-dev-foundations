# SLIDES.md — Foundations: Coding with Generative AI
## CAIL Spotlight Workshop #1

Companion to `index.html`. Keep this file in sync whenever slide titles or text content change.

---

## Slide 1 — Title

**Label:** CAIL Spotlight Workshop #1
**Title:** Foundations: Coding with Generative AI
**Date:** Spring 2026
**Stage:** Infinite wheel artifact (`src/chainwheel.html`)

---

## Slide 2 — Agenda

**Label:** Workshop
**Title:** Agenda

**Stage (agenda table):**

Part 1 — Coding & Development Basics:
- Icebreaker (10m)
- Inference as Coding Scaffold
- Problematics of Agentic Coding
- Setting up an IDE
- The Command Line
- Initializing a Git Repo

Part 2 — Installation & Setup:
- Installing Gemini CLI
- Login Setup
- Exit Ticket
- Next Steps

---

## Slide 3 — Section Break: Part 1

**Tag:** Part 1
**Title:** Coding & Development Basics

---

## Slide 4 — Icebreaker

**Label:** Icebreaker · 10 min
**Title:** Where does coding live in your imagination?
**Subtitle:** Pick one. Talk to a neighbor.

**Stage (ib-pair):**
- **A** — What would you create first if coding felt as natural as writing?
- **B** — What's one thing you wish you could make your computer do for your research that it doesn't do right now?

---

## Slide 5 — Demo

**Label:** Demo
**Title:** Vibe Coding in Action

**Stage (stageCenter):**
- **Big:** Live walkthrough: building something from scratch with an AI coding agent
- **Hint:** Watch how a conversation with Gemini CLI turns a plain-language idea into working code — step by step, inside VS Code.

---

## Slide 6 — Inference as Coding Scaffold

**Label:** Concept
**Title:** Inference as Coding Scaffold
**Stage:** _(content pending)_

---

## Slide 7 — Problematics of Agentic Coding

**Label:** Concept
**Title:** Problematics of Agentic Coding
**Stage:** _(content pending)_

---

## Slide 8 — Setting up an Interactive Development Environment

**Label:** Setup
**Title:** Setting up an Interactive Development Environment

**Stage steps:**
1. Download + install VS Code
2. Sign in with your GitHub profile
3. Add the GitHub extension; start tracking your project
4. Open the integrated terminal — this is where CLI + Git live

---

## Slide 9 — What is VS Code?

**Label:** Concept
**Title:** What is VS Code?

**Stage (stageCenter):**
- **Big:** A free code editor that works like a smart writing desk for programmers
- **Hint:** It highlights your code, catches errors, and connects to tools like Git and AI assistants — all in one window.
- **Why VS Code?**
  - Free, open-source, and runs on Mac, Windows, and Linux
  - Built-in terminal, Git support, and thousands of extensions
  - Where AI coding agents (like Gemini CLI) do their work

---

## Slide 10 — What is the Command Line?

**Label:** Concept
**Title:** What is the Command Line?

**Stage (stageCenter):**
- **Big:** A text-based interface for controlling your computer
- **Hint:** Instead of clicking buttons and icons, you type commands.
- **Why use it?**
  - More powerful and precise control
  - Essential for development work
  - How AI coding agents interact with your system

---

## Slide 11 — Opening Your Terminal

**Label:** Setup
**Title:** Opening Your Terminal

**Stage (stageCompare):**
- **macOS — Terminal:** 1. Press Cmd + Space → 2. Type "Terminal" → 3. Press Return
- **Windows — PowerShell:** 1. Press the Windows key → 2. Type "PowerShell" → 3. Press Enter

---

## Slide 12 — Command Line Basics

**Label:** Tool
**Title:** Command Line Basics

**Stage (terminal):**
```
# make a new folder
mkdir my-project

# move into it
cd my-project

# go up one level
cd ..

# create a file
touch index.html

# move file into folder
mv index.html my-project

# move into it
cd my-project

# list files
ls
```

---

## Slide 13 — What is Git? What is GitHub?

**Label:** Concept
**Title:** What is Git? What is GitHub?

**Stage (stageCompare):**
- **Local — Git:** A version control system that runs on your computer. Tracks every change to your files so you can go back in time, undo mistakes, and work in parallel.
- **Cloud — GitHub:** A website that stores your Git repositories online. Share code, collaborate with others, and host websites — all from your browser.

---

## Slide 14 — Initializing a Git Repo

**Label:** Tool
**Title:** Initializing a Git Repo

**Stage (terminal, fragments):**
```
# initialize a repo
git init

# stage your changes
git add .

# save a snapshot
git commit -m "first commit"

# push to GitHub
git push origin main

# view history
git log --oneline

# check what changed
git status
```

---

## Slide 15 — Logging into GitHub

**Label:** Setup
**Title:** Logging into GitHub

**Stage (step-grid, fragments):**
1. Install the GitHub CLI: `brew install gh` (macOS) / `winget install GitHub.cli` (Windows)
2. Start login from your terminal: `gh auth login`
3. Choose **GitHub.com** → **HTTPS** → **Login with a web browser**
4. Copy the one-time code, press Enter, and approve in the browser window that opens
5. Back in your terminal you'll see: **✓ Logged in as your-username**

---

## Slide 16 — Committing Changes and Pushing to GitHub

**Label:** Setup
**Title:** Committing Changes and Pushing to GitHub

**Stage (step-grid, fragments):**
1. Create a README file: `touch README.md`
2. Stage and commit your files: `git add . && git commit -m "first commit"`
3. Create a GitHub repo and push: `gh repo create my-project --public --source=. --push`
4. Visit **github.com/your-username/my-project** to see it live

---

## Slide 17 — Section Break: Part 2

**Tag:** Part 2
**Title:** Installation & Setup
**Subtitle:** Getting Gemini CLI running on your machine
**Accent:** `#2ea043` (green)

---

## Slide 18 — Installing Gemini CLI

**Label:** Setup
**Title:** Installing Gemini CLI

**Stage (stageCompare):**
- **Windows — PowerShell:** 1. Install Node.js LTS from nodejs.org → 2. Reopen PowerShell → 3. `npm install -g @google/gemini-cli`
- **macOS — Terminal:** 1. Install Homebrew from brew.sh → 2. Add Homebrew to PATH → 3. `brew install gemini-cli`

---

## Slide 19 — Login Setup

**Label:** Setup
**Title:** Login Setup

**Stage (step-grid, fragments):**
1. Run `gemini` in your terminal to start authentication
2. Choose "Login with Google" and follow the browser prompt
3. Free tier: 60 requests/min · 1,000 requests/day
4. Having technical issues? Just ask!

---

## Slide 20 — Troubleshooting

**Label:** Check-in
**Title:** Troubleshooting

**Stage (stageCenter):**
- **Big:** Having trouble installing or logging in?
- **Hint:** VS Code, GitHub CLI, Git, Gemini CLI — if anything didn't work, now's the time to fix it together.
- Raise your hand — we'll come to you
- Help a neighbor if you're all set
- No issue too small to ask about

---

## Slide 21 — Exit Ticket

**Label:** Exit Ticket
**Title:** What's Your Next Move?
**Stage:** _(reflection prompts · to fill)_

---

## Slide 22 — Next Steps

**Label:** Next Steps
**Title:** Next Steps
**Stage:** _(to fill)_

---

## Slide 23 — Resources

**Label:** Resources
**Title:** Links & References

**Stage (link list):**
- [ailab.gc.cuny.edu](https://ailab.gc.cuny.edu) — CUNY AI Lab — home page, announcements, and model notes
- [ailab.gc.cuny.edu/resources](https://ailab.gc.cuny.edu/resources) — CAIL Resources — guides, readings, and workshop materials
- [chat.ailab.gc.cuny.edu](https://chat.ailab.gc.cuny.edu) — CAIL Sandbox (Open WebUI) — GLM 5, Kimi K2.5, and more
- [tools.ailab.gc.cuny.edu](https://tools.ailab.gc.cuny.edu) — CAIL Tools — additional lab utilities and experiments
- [newmedialab.cuny.edu](https://newmedialab.cuny.edu) — CUNY New Media Lab — workshop series host
- [aitoolkit.gc.commons.edu](https://aitoolkit.gc.commons.edu) — GC AI Toolkit — curated tools and resources for the Graduate Center community
- [github.com/cuny-ai-lab](https://github.com/cuny-ai-lab) — CUNY AI Lab on GitHub — open source repos, workshop decks, datasets
- [cuny-ai-lab.github.io/Vibe-Coding-Workshop](https://cuny-ai-lab.github.io/Vibe-Coding-Workshop/) — Vibe Coding Workshop deck — companion CAIL workshop
- [code.visualstudio.com/docs](https://code.visualstudio.com/docs) — VS Code documentation — setup, extensions, integrated terminal
- [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) — Gemini CLI — open-source AI coding agent that runs in your terminal
- [developers.googleblog.com/gemini-cli-vs-code…](https://developers.googleblog.com/gemini-cli-vs-code-native-diffing-context-aware-workflows/) — Gemini CLI + VS Code — native diffing and context-aware workflows
- [docs.github.com](https://docs.github.com) — GitHub documentation — repos, Pages, pull requests, Actions

---

_Last synced: 2026-03-01 (sync from gen-dev-foundations; removed Slide 8 — Social Coding + GitHub; exit ticket updated). Update both this file and `index.html` together._
