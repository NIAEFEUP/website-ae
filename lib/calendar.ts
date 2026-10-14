/**
 * Extracts a Google Calendar ID from a calendar ID, email, embed URL, iCal URL, or iframe string.
 */
export function extractGoogleCalendarId(input?: string | null): string | undefined {
  if (!input) return undefined;
  let trimmed = input.trim();
  if (!trimmed) return undefined;

  // If user pasted an iframe tag, extract the src URL first
  if (trimmed.startsWith("<iframe") && trimmed.includes("src=")) {
    const srcMatch = trimmed.match(/src=["']([^"']+)["']/i);
    if (srcMatch && srcMatch[1]) {
      trimmed = srcMatch[1].trim();
    }
  }

  // If it is a full URL
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    try {
      const url = new URL(trimmed);

      // Check for 'src' query param (typical in Google Calendar embed links)
      const srcParam = url.searchParams.get("src");
      if (srcParam) {
        return decodeURIComponent(srcParam);
      }

      // Check for 'cid' query param
      const cidParam = url.searchParams.get("cid");
      if (cidParam) {
        try {
          const decoded = atob(cidParam);
          if (decoded && (decoded.includes("@") || decoded.includes("calendar.google.com"))) {
            return decoded;
          }
        } catch {
          // not base64 encoded
        }
        return decodeURIComponent(cidParam);
      }

      // Check for iCal URL format: /calendar/ical/<calendarId>/public/basic.ics
      const icalMatch = url.pathname.match(/\/calendar\/ical\/([^/]+)/i);
      if (icalMatch && icalMatch[1]) {
        return decodeURIComponent(icalMatch[1]);
      }
    } catch {
      // In case URL parsing fails, continue to fallback
    }
  }

  return trimmed;
}

/**
 * Returns a Google Calendar embed URL suitable for an iframe.
 */
export function getGoogleCalendarEmbedUrl(input?: string | null): string | undefined {
  if (!input) return undefined;
  let trimmed = input.trim();
  if (!trimmed) return undefined;

  // If user pasted an iframe tag
  if (trimmed.startsWith("<iframe") && trimmed.includes("src=")) {
    const srcMatch = trimmed.match(/src=["']([^"']+)["']/i);
    if (srcMatch && srcMatch[1]) {
      return srcMatch[1].trim();
    }
  }

  // If it's already an embed URL
  if (trimmed.includes("calendar.google.com/calendar/embed")) {
    return trimmed;
  }

  // If it's a calendar ID or email, construct the embed URL
  const calendarId = extractGoogleCalendarId(trimmed);
  if (calendarId) {
    return `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&ctz=Europe%2FLisbon`;
  }

  return undefined;
}
