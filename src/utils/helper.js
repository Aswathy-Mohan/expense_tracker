export const SetLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
export const GetLocalStorage = key => {
  return localStorage.getItem(key);
};
