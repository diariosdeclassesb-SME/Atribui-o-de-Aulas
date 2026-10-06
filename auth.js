async function requireLogin() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    window.location.href = 'login.html';
    return null;
  }
  return session;
}

async function logout() {
  await supabase.auth.signOut();
  window.location.href = 'login.html';
}

async function isAdmin() {
  const { data, error } = await supabase
    .from('admins')
    .select('user_id')
    .limit(1);
  return !error && data && data.length > 0;
}