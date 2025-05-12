
const API_BASE = 'http://localhost:8080/api/auth';

export async function login(username, password) {
  const response = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    credentials: 'include',  //il browser invia i cookies, cosi il serve conosce this session of the user
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({ username, password })
  });
  if (!response.ok) throw new Error('Login failed');
  return true;
}

export async function logout() {
  await fetch(`${API_BASE}/logout`, {
    method: 'POST',
    credentials: 'include'
  });
}

export async function getCurrentUser() {
  const response = await fetch(`${API_BASE}/me`, {
    method: 'GET',
    credentials: 'include'
  });

  if (!response.ok) return null;
  return await response.json();
}