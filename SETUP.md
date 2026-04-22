# Sophie Spa — Setup & Deploy

A static React site with two forms (booking + contact) that post to a **Google Sheet** via a Google Apps Script webhook. No backend, no database to manage — the sheet itself is the source of truth.

**Stack**
- React 18 + Vite + React Router + Tailwind v4 (design unchanged)
- Google Sheets + Apps Script Web App (free forever, no accounts beyond your Google one)
- Vercel for hosting

---

## 1. Create the Google Sheet + Apps Script

### 1a. Make the sheet

1. Create a new Google Sheet at https://sheets.new. Name it something like **"Sophie Spa — Bookings & Messages"**.
2. Rename the default tab to `Bookings`.
3. Add a second tab called `Contact`.
4. In the `Bookings` tab, row 1, paste these headers:
   ```
   Timestamp	Status	Name	Phone	Email	Service	Duration	Price	Preferred Date	Time Window	Gift (Recipient)	Notes
   ```
5. In the `Contact` tab, row 1, paste:
   ```
   Timestamp	Handled	Name	Email	Phone	Message
   ```
6. Share the sheet with Sophie (Editor access). You'll both use this as the shared inbox.

### 1b. Add the Apps Script

1. In the sheet: **Extensions → Apps Script**.
2. Delete the default code. Paste the contents of `apps-script.gs` (in this repo's root).
3. At the top of the script, edit `NOTIFY_EMAILS` to the email addresses you want notified when a booking or message comes in (yours + Sophie's).
4. Click **Save** (💾).

### 1c. Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Gear icon next to "Select type" → **Web app**.
3. Configure:
   - **Description**: `sophie-spa-forms-v1` (or whatever)
   - **Execute as**: `Me (your-email@gmail.com)`
   - **Who has access**: **Anyone** ← this is required for the website to reach it
4. Click **Deploy**. It will ask you to authorize — approve the permissions (the script needs access to this one sheet and to send email).
5. Copy the **Web app URL** it gives you. Looks like `https://script.google.com/macros/s/AKfy.../exec`.

### 1d. Test it

From a terminal:
```bash
curl -L -X POST "YOUR_WEB_APP_URL" \
  -H "Content-Type: text/plain" \
  -d '{"type":"contact","name":"Test","email":"test@example.com","phone":"","message":"Hello","submittedAt":"2026-04-22T00:00:00Z"}'
```

Expect: `{"ok":true}`. Check your sheet — there should be a new row in the `Contact` tab. You should also get an email notification.

---

## 2. Run the site locally

```bash
npm install
```

Create a file called `.env.local` in the project root:

```
VITE_FORMS_ENDPOINT=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Then:

```bash
npm run dev
```

Open `http://localhost:5173`. Submit the contact form and a booking — each should land in the appropriate sheet tab within a second.

---

## 3. Deploy to Vercel

1. Push the project to a Git repo.
2. In Vercel → **Add New Project** → import the repo. It auto-detects Vite. `vercel.json` handles SPA rewrites.
3. Under **Settings → Environment Variables**, add:
   - `VITE_FORMS_ENDPOINT` = your Apps Script web app URL
4. Deploy.

---

## Updating the script later

**If you change the `.gs` script** — you must create a **new deployment** (or click Deploy → Manage deployments → edit → new version). Apps Script doesn't auto-redeploy. The **URL changes** unless you use "Manage deployments → edit existing deployment" and bump the version there — in which case the URL stays the same. Prefer editing the existing deployment so you don't have to update `VITE_FORMS_ENDPOINT` every time.

**If you add more sheets/columns** — update both `apps-script.gs` and the column headers in the sheet to match.

---

## What's where

- `src/app/components/BookingModal.tsx` — 3-step booking flow (service → date/time → contact). Opens via `window.dispatchEvent(new CustomEvent("sophie:open-booking"))`.
- `src/app/components/Contact.tsx` — contact form on the homepage.
- `src/app/lib/submitForm.ts` — shared helper that POSTs JSON to `VITE_FORMS_ENDPOINT` as `text/plain` (avoids CORS preflight).
- `apps-script.gs` — the server-side script you paste into Apps Script.
- `vercel.json` — SPA rewrite config.
- Testimonials are **hardcoded** in `src/app/components/Testimonials.tsx`. To add one, edit the array and redeploy (Vercel auto-deploys on push).

---

## ⚠️ Missing assets

The original Figma export was missing 14 PNG files (9 product posters used on the Treatments page, 5 in unused components). `src/assets/` contains 1x1 transparent placeholders with matching filenames so the build works. Drop real PNGs into `src/assets/` with the same filenames to replace them — no code changes needed.

Filenames are visible in:
- `src/app/components/Treatments.tsx` (lines 2–10)
- `src/app/components/CtaBanner.tsx` and `src/imports/*` (unused — these slots will never be seen by visitors)
