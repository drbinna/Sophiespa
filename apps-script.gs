/**
 * Sophie Spa — Forms webhook
 *
 * Receives JSON POSTs from the website (booking modal + contact form),
 * appends rows to the appropriate sheet tab, and emails a notification.
 *
 * Setup:
 *   1. Bound to a Google Sheet with tabs "Bookings" and "Contact"
 *      (see SETUP.md for the column headers).
 *   2. Edit NOTIFY_EMAILS below.
 *   3. Deploy → New deployment → Web app →
 *      "Execute as: Me", "Who has access: Anyone".
 */

// ————————————————————————————————————————————
// Config — edit these
// ————————————————————————————————————————————
const NOTIFY_EMAILS = [
  "you@example.com",
  "sophie@example.com",
];
const BOOKINGS_TAB = "Bookings";
const CONTACT_TAB = "Contact";

// ————————————————————————————————————————————
// Entry point
// ————————————————————————————————————————————
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ ok: false, error: "No payload" });
    }

    const data = JSON.parse(e.postData.contents);

    if (data.type === "booking") {
      return handleBooking(data);
    }
    if (data.type === "contact") {
      return handleContact(data);
    }
    return jsonResponse({ ok: false, error: "Unknown type: " + data.type });
  } catch (err) {
    // Always return 200 with an error object so the browser can read the response.
    return jsonResponse({ ok: false, error: String(err && err.message ? err.message : err) });
  }
}

// GET is handy for a manual health check: visit the URL in a browser.
function doGet() {
  return jsonResponse({ ok: true, service: "sophie-spa-forms" });
}

// ————————————————————————————————————————————
// Handlers
// ————————————————————————————————————————————
function handleBooking(d) {
  const sheet = getSheet(BOOKINGS_TAB);

  const gift = d.bookingForSomeoneElse && d.recipientName
    ? d.recipientName
    : "";

  sheet.appendRow([
    new Date(),          // Timestamp (server-side)
    "New",               // Status — Sophie updates this in the sheet
    d.name || "",
    d.phone || "",
    d.email || "",
    d.service || "",
    d.duration || "",
    d.price || "",
    d.preferredDate || "",
    d.timeWindowLabel || d.timeWindow || "",
    gift,
    d.notes || "",
  ]);

  notify(
    "New booking: " + (d.service || "(no service)"),
    [
      "Name: " + (d.name || ""),
      "Phone: " + (d.phone || ""),
      "Email: " + (d.email || "(none)"),
      "Service: " + (d.service || ""),
      "Duration / Price: " + (d.duration || "") + " · " + (d.price || ""),
      "Preferred date: " + (d.preferredDate || ""),
      "Time window: " + (d.timeWindowLabel || d.timeWindow || ""),
      gift ? "Gift for: " + gift : "",
      d.notes ? "Notes: " + d.notes : "",
    ].filter(Boolean).join("\n")
  );

  return jsonResponse({ ok: true });
}

function handleContact(d) {
  const sheet = getSheet(CONTACT_TAB);

  sheet.appendRow([
    new Date(),
    false,               // Handled — tick this when replied
    d.name || "",
    d.email || "",
    d.phone || "",
    d.message || "",
  ]);

  notify(
    "New contact message from " + (d.name || "(no name)"),
    [
      "Name: " + (d.name || ""),
      "Email: " + (d.email || ""),
      "Phone: " + (d.phone || "(none)"),
      "",
      d.message || "",
    ].join("\n")
  );

  return jsonResponse({ ok: true });
}

// ————————————————————————————————————————————
// Utilities
// ————————————————————————————————————————————
function getSheet(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(name);
  if (!sheet) {
    throw new Error("Sheet tab not found: " + name);
  }
  return sheet;
}

function notify(subject, body) {
  const recipients = (NOTIFY_EMAILS || []).filter(Boolean).join(",");
  if (!recipients) return;
  try {
    MailApp.sendEmail({
      to: recipients,
      subject: "[Sophie Spa] " + subject,
      body: body,
    });
  } catch (err) {
    // Don't fail the whole request if email fails — the row is already saved.
    console.error("Notification email failed:", err);
  }
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
