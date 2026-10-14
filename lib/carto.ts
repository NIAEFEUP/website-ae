/**
 * Utilities for CARTO basemaps integration.
 *
 * CARTO Basemaps URLs:
 * - Raster: https://basemaps.cartocdn.com/rastertiles/{style}/{z}/{x}/{y}.png?key=YOUR_KEY
 * - Vector: https://basemaps.cartocdn.com/gl/{style}/style.json?key=YOUR_KEY
 */

export const CARTO_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

interface CartoTileOptions {
  style?: string;
  apiKey?: string;
}

/**
 * Returns the CARTO raster tile URL with optional API key and retina support.
 *
 * Available styles: 'voyager', 'light_all', 'light_nolabels', 'dark_all', 'dark_nolabels'.
 *
 * @param options.style - The tile style name (default: 'voyager')
 * @param options.apiKey - Optional API key (falls back to NEXT_PUBLIC_CARTO_API_KEY or CARTO_API_KEY)
 */
export function getCartoRasterTileUrl(options?: CartoTileOptions): string {
  const apiKey =
    options?.apiKey ||
    process.env.CARTO_API_KEY ||
    process.env.NEXT_PUBLIC_CARTO_API_KEY;

  const style =
    options?.style ||
    process.env.NEXT_PUBLIC_CARTO_STYLE ||
    "voyager";

  const baseUrl = `https://basemaps.cartocdn.com/rastertiles/${style}/{z}/{x}/{y}{r}.png`;
  return apiKey ? `${baseUrl}?key=${encodeURIComponent(apiKey)}` : baseUrl;
}

/**
 * Returns the CARTO vector GL style URL with optional API key.
 *
 * @param style - The vector style name (default: 'voyager-gl-style')
 * @param apiKey - Optional API key (falls back to CARTO_API_KEY or NEXT_PUBLIC_CARTO_API_KEY)
 */
export function getCartoVectorStyleUrl(
  style: string = "voyager-gl-style",
  apiKey?: string
): string {
  const key =
    apiKey ||
    process.env.CARTO_API_KEY ||
    process.env.NEXT_PUBLIC_CARTO_API_KEY;

  const baseUrl = `https://basemaps.cartocdn.com/gl/${style}/style.json`;
  return key ? `${baseUrl}?key=${encodeURIComponent(key)}` : baseUrl;
}
