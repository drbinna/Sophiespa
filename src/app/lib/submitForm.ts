/**
 * Submit a form payload to the Google Apps Script webhook.
 *
 * Uses Content-Type: text/plain so the request qualifies as a CORS "simple
 * request" — this avoids the preflight OPTIONS that Apps Script doesn't
 * handle. Apps Script still parses the JSON body via `e.postData.contents`.
 *
 * Endpoint is configured via VITE_FORMS_ENDPOINT env var (set in .env.local
 * locally, and in Vercel project settings for production).
 */
export async function submitForm(payload: Record<string, unknown>): Promise<void> {
  const endpoint = import.meta.env.VITE_FORMS_ENDPOINT as string | undefined;

  if (!endpoint) {
    throw new Error(
      "VITE_FORMS_ENDPOINT is not configured. See SETUP.md for Apps Script setup."
    );
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
    redirect: "follow",
  });

  if (!res.ok) {
    throw new Error(`Submission failed (${res.status})`);
  }

  // Apps Script returns a tiny JSON body; we only inspect `ok`.
  const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
  if (data.ok === false) {
    throw new Error(data.error ?? "Submission rejected by server.");
  }
}
