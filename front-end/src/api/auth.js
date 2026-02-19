import { BACK_END_URL } from '../constants/api';

export function getAuthHeaders() {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function login({ email, password }) {
  const res = await fetch(`${BACK_END_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.message || 'Login failed');
  }

  return data;
}

export async function register({ email, password }) {
  const res = await fetch(`${BACK_END_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || 'Register failed');
  }

  return data;
}

export async function meRequest() {
  const res = await fetch(`${BACK_END_URL}/auth/me`, {
    headers: {
      ...getAuthHeaders(),
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || 'Unauthorized');
  }

  return data;
}
