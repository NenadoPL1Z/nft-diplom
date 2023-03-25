export const validateEmail = (email: string) => {
  const regExp = /^\S+@\S+\.\S+$/;
  return regExp.test(email);
};
