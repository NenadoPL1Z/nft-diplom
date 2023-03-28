export const validateEmail = (email: string) => {
  const regExp = /^\S+@\S+\.\S+$/;
  return regExp.test(email);
};

export const getRusData = (date: string) =>
  new Date(date).toLocaleString("ru-RU", { dateStyle: "long" });

export const getQuery = (queryString: string) => {
  const queryObj: { [key: string]: string } = {};

  queryString
    .split("?")[1]
    ?.split("&")
    .forEach((item) => {
      const [key, value] = item.split("=");
      queryObj[key] = value;
    });

  return queryObj;
};
