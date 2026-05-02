export function getImageUrl(url) {
  if (!url) return '';
  if (url.startsWith('http')) return url;

  return `${import.meta.env.VITE_BACK_END_URL}${url}`;
}
