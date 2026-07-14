# GitGud Challenge — Problem Statements

Each team picks (or is assigned) **one** problem statement below. All four are
scoped to be roughly the same difficulty — a self-contained component, no
external APIs, no new dependencies required. Follow the Git workflow in the
`README.md` for every task.

Every task lives in its own file, so teams can work in parallel without
stepping on each other's code:

| # | Component | File |
|---|-----------|------|
| 1 | Agenda Timeline | `src/components/Agenda.tsx` |
| 2 | Facilitator Grid | `src/components/Team.tsx` |
| 3 | FAQ Accordion | `src/components/FAQ.tsx` |
| 4 | Sign-Up Form | `src/components/Contact.tsx` |

---

## Problem Statement 1 — Agenda Timeline (`Agenda.tsx`)

Build a **vertical timeline** showing the workshop's schedule.

**Requirements:**
- Display at least 5 agenda items, each with a time slot, a title, and a
  short description (e.g. `09:00 · Welcome & Introduction`).
- Use Tailwind to lay them out as a connected vertical timeline (a line with
  a dot/marker next to each item works well).
- The current/next item on the schedule should be visually highlighted
  differently from the rest (e.g. a filled dot vs. an outline, or an accent
  color).
- Must be fully responsive down to mobile width.

**Stretch goal:** clicking an item expands it to show more detail.

---

## Problem Statement 2 — Facilitator Grid (`Team.tsx`)

Build a **grid of team/facilitator cards**.

**Requirements:**
- Display at least 4 cards, each with a name, role, and short bio.
- Each card should include an avatar placeholder (an initials circle is
  fine — no image upload needed).
- Cards should have a hover effect (e.g. lift/shadow/border color change).
- Grid should reflow responsively (e.g. 1 column on mobile, 2 on tablet, 4
  on desktop).

**Stretch goal:** add social/GitHub icon links to each card.

---

## Problem Statement 3 — FAQ Accordion (`FAQ.tsx`)

Build an **expand/collapse accordion** for frequently asked questions.

**Requirements:**
- Display at least 5 question/answer pairs.
- Only the question is visible by default; clicking it reveals the answer.
- Clicking an open question collapses it again.
- Use React state (`useState`) to track which item(s) are open — no external
  libraries needed.
- Include a visual indicator of open/closed state (e.g. a rotating chevron
  icon or a +/− symbol).

**Stretch goal:** allow only one item open at a time (accordion behavior)
as an option, vs. allowing multiple open simultaneously.

---

## Problem Statement 4 — Sign-Up Form (`Contact.tsx`)

Build a **working sign-up form** with client-side validation.

**Requirements:**
- Fields: name, email, and team name (all required).
- Use `useState` to manage form values and validation errors.
- Show an inline error message if a field is left empty or the email is
  invalid on submit.
- On successful submit, show a success message in place of the form (no
  backend/API call needed — just simulate it in state).
- Submit button should be disabled while the form is invalid or submitting.

**Stretch goal:** add a "team size" dropdown and a live character counter
for an optional "notes" textarea.

---

## Scoring Rubric

| Criteria | Points |
|---|---|
| Follows the Git workflow correctly (branch → commit → PR → merge) | 25 |
| Meets all core requirements | 40 |
| Code quality (typed props, sensible component structure) | 15 |
| Responsive design | 10 |
| Stretch goal attempted | 10 |

Good luck, and remember: commit early, commit often, and write clear commit
messages. 🚀
