export const createUniqueId = () => {
  const randomString = Math.random().toString(36).substring(2, 15);
  return randomString;
};
