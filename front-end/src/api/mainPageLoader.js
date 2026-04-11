import { redirect } from 'react-router-dom';
import { PATH_TO_ENDPOINT_MAPPING, BACK_END_URL } from '../constants/api';

export async function mainPageLoader({ params }) {
  const genderPath = params.gender || 'kobieta';
  const gender = PATH_TO_ENDPOINT_MAPPING[genderPath];

  if (!gender) return redirect('/kobieta');

  const res = await fetch(`${BACK_END_URL}/products/${gender}/bestsellers`);

  if (!res.ok) {
    throw new Error(`Failed to load bestsellers (${res.status})`);
  }

  const contentType = res.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error(
      `Expected JSON from API, got "${contentType || 'unknown'}" instead.`,
    );
  }
  const bestsellers = await res.json();

  const heroImageUrl = `/hero/${genderPath}.jpg`;
  return { bestsellers, heroImageUrl };
}
