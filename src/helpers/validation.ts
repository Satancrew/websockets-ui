export const validation = (username: string, password: string) => {
  const trimmedUsername = username.trim();
  const trimmedPassword = password.trim();

  return !!(trimmedUsername.length > 4 && trimmedPassword.length > 4);
}