import { IQuestionsItemModel } from "@/lib/models/IQuestionsItemModel";

// 1 - Как пользоваться
// 2 - Какие есть ограничения
// 3 - Корректность работы
// 4 - Философия проекта
// 5 - Контакты автора
// 6 - Стек технологий

export const FAQData: IQuestionsItemModel[] = [
  { title: "Как пользоваться", Children: () => null },
  { title: "Какие есть ограничения", Children: () => null },
  { title: "Корректность работы", Children: () => null },
  { title: "Философия проекта", Children: () => null },
  { title: "Стек технологий", Children: () => null },
  { title: "Контакты автора 🥺", Children: () => null },
];
