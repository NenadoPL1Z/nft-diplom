export const validateEmail = (email: string) => {
  const regExp = /^\S+@\S+\.\S+$/;
  return regExp.test(email);
};

export const getRusData = (date: string) =>
  new Date(date).toLocaleString("ru-RU", { dateStyle: "long" });
