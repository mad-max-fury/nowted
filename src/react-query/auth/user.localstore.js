const USER_LOCAL_STORAGE_KEY = "TODO_LIST-USER";

export function saveUser(user) {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
}

export function getUser() {
  const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  return user ? JSON.parse(user) : undefined;
}

export function removeUser() {
  localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
}
