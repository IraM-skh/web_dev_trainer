const category = JSON.stringify([
  {
    id: 1,
    categoryName: "Числа",
    outputIds: [1, 2, 3, 7, 8],
    subjectsName: [
      "Number()",
      "toFixed",
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
    outputIds: [1, 2, 3, 7, 8, 11, 12, 13, 14, 15, 16],
    subjectsName: [
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
    outputIds: [1, 2, 3, 4, 7, 8],
    subjectsName: ["assign", "keys", "values", "entries"],
  },

  {
    id: 4,
    categoryName: "Cтрока",
    outputIds: [1, 2, 3, 7, 8, 14],
    subjectsName: [
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
  {
    question: "Выберите правильное определение:",
    ansversType: "radio",
    questionName: "description",
  },
  {
    question: "Какие аргументы можно передавать?",
    ansversType: "checkbox",
    questionName: "args",
  },
  {
    question: "Меняются ли исходные данные?",
    ansversType: "radio",
    questionName: "chengeData",
  },
  {
    question: "Что возвращается",
    ansversType: "radio",
    questionName: "outputVariant",
  },
]);

const outputVariant = JSON.stringify([
  { id: 1, type: "Число" },
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

const args = JSON.stringify([
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

const correctAnsvers = {
  args: ["num", "no"],
  description: "Кол-во символов",
  chengeData: "Нет",
  outputVariant: "Число",
};

const userResults = {
  1: 3124,
};
export { args, outputVariant, question, subject, category, correctAnsvers };
