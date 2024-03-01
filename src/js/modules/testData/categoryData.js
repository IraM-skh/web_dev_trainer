const category = JSON.stringify([
  {
    id: 1,
    categoryName: "Числа",
    output_ids: [1, 2, 3, 7, 8],
    subjetsName: [
      "Number()",
      "toFixedt",
      "Number.parseInt",
      "Number.isNaN",
      // "Math.PI",
      // "Math.ciel",
      // "Math.random",
      // "toFixed",
    ],
  },
  {
    id: 2,
    categoryName: "Массив",
    output_ids: [1, 2, 3, 7, 8, 11, 12, 13, 14, 15, 16],
    subjetsName: [
      "length(arr)",
      "push",
      "unshift",
      "pop",
      // "shift",
      // "splice",
      // "reverse",
      // "sort",
      // "fill",
    ],
  },
  {
    id: 3,
    categoryName: "Объект",
    output_ids: [1, 2, 3, 4, 7, 8],
    subjetsName: ["assign", "keys", "values", "entries"],
  },

  {
    id: 4,
    categoryName: "Cтрока",
    output_ids: [1, 2, 3, 7, 8, 14],
    subjetsName: [
      "length(str)",
      "concat",
      "toLowerCase",
      "toUpperCase",
      // "indexOf",
      // "lastIndexOf",
      // "charAt",
      // "substring",
    ],
  },
]);

const subject = JSON.stringify([
  {
    subjectName: "Number()",
    description: [
      "Кол-во символов",
      "ложное описаниdsе 1",
      "ложное описание 2",
    ],
  },
  {
    subjectName: "toFixed",
    description: [
      "Кол-во символов",
      "ложное оdsписание 1",
      "ложное описание 2",
    ],
  },
  {
    subjectName: "Number.parseInt",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
  },
  {
    subjectName: "Number.isNaN",
    description: [
      "Кол-во символов",
      "лоdsaжное описание 1",
      "ложное описание 2",
    ],
  },
  {
    subjectName: "length(arr)",
    description: [
      "Кол-во символов",
      "ложнaaaaaaое описание 1",
      "ложное описание 2",
    ],
  },
  {
    subjectName: "push",
    description: [
      "Кол-во симвddddddолов",
      "ложное описание 1",
      "ложное описание 2",
    ],
  },
  {
    subjectName: "unshift",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
  },
  {
    subjectName: "pop",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
  },
  {
    subjectName: "assign",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
  },
  {
    subjectName: "keys",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
  },
  {
    subjectName: "values",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
  },
  {
    subjectName: "entries",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
  },
  {
    subjectName: "length(str)",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
  },
  {
    subjectName: "concat",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
  },
  {
    subjectName: "toLowerCase",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
  },
  {
    subjectName: "toUpperCase",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
  },
]);

const question = JSON.stringify([
  { question: "Выберите правильное определение:", ansvers_type: "radio" },
  { question: "Какие аргументы можно передавать?", ansvers_type: "checkbox" },
  { question: "Меняются ли исходные данные?", ansvers_type: "radio" },
  { question: "Что возвращается", ansvers_type: "radio" },
]);

const outputVariant = JSON.stringify([
  { id: 1, type: "число" },
  { id: 2, type: "строка" },
  { id: 3, type: "массив" },
  { id: 4, type: "объект" },
  { id: 5, type: "promice" },
  { id: 6, type: "функция" },
  { id: 7, type: "true/false" },
  { id: 8, type: "undefiend" },
  { id: 9, type: "NodeList" },
  { id: 10, type: "елемент HTML" },
  { id: 11, type: "длина масиива" },
  { id: 12, type: "удаленное заничение" },
  { id: 13, type: "вырезанные эелементы" },
  { id: 14, type: "индекс" },
  { id: 15, type: "эелмент массива" },
  { id: 16, type: "результирующее значание" },
]);

const ags = JSON.stringify([
  "num",
  "str",
  "arg for cb",
  "cb",
  "el",
  "ind",
  "arr",
  "msec",
  "no",
]);

export { ags, outputVariant, question, subject, category };
