const category = JSON.stringify([
  {
    id: 1,
    categoryName: "Числа",
    outputIds: [1, 2, 3, 7, 8],
    idArgs: [2, 13, 15, 18],
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
    idArgs: [2, 13, 15, 18],
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
    idArgs: [2, 13, 15, 18],
    subjectsName: ["assign", "keys", "values", "entries"],
  },

  {
    id: 4,
    categoryName: "Cтрока",
    outputIds: [1, 2, 3, 7, 8, 14],
    idArgs: [2, 13, 15, 18],
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
    idArgs: [2],
  },
  {
    subjectName: "toFixed",
    description: [
      "Кол-во символов",
      "ложное оdsписание 1",
      "ложное описание 2",
    ],
    idArgs: [1, 2],
  },
  {
    subjectName: "Number.parseInt",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
    idArgs: [1, 2],
  },
  {
    subjectName: "Number.isNaN",
    description: [
      "Кол-во символов",
      "лоdsaжное описание 1",
      "ложное описание 2",
    ],
    idArgs: [1, 2],
  },
  {
    subjectName: "length(arr)",
    description: [
      "Кол-во символов",
      "ложнaaaaaaое описание 1",
      "ложное описание 2",
    ],
    idArgs: [1, 2],
  },
  {
    subjectName: "push",
    description: [
      "Кол-во симвddddddолов",
      "ложное описание 1",
      "ложное описание 2",
    ],
    idArgs: [1, 2],
  },
  {
    subjectName: "unshift",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
    idArgs: [1, 3],
  },
  {
    subjectName: "pop",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
    idArgs: [1, 2],
  },
  {
    subjectName: "assign",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
    idArgs: [1, 2],
  },
  {
    subjectName: "keys",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
    idArgs: [1, 2],
  },
  {
    subjectName: "values",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
    idArgs: [1, 2],
  },
  {
    subjectName: "entries",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
    idArgs: [1, 2],
  },
  {
    subjectName: "length(str)",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
    idArgs: [1, 2],
  },
  {
    subjectName: "concat",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
    idArgs: [1, 2],
  },
  {
    subjectName: "toLowerCase",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
    idArgs: [1, 2],
  },
  {
    subjectName: "toUpperCase",
    description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"],
    idArgs: [1, 2],
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
    questionName: "changeData",
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
  { id: 1, arg: "acc" },
  { id: 2, arg: "any" },
  { id: 3, arg: "arg for cb" },
  { id: 4, arg: "arr" },
  { id: 5, arg: "bool" },
  { id: 6, arg: "cb" },
  { id: 7, arg: "el" },
  { id: 8, arg: "error" },
  { id: 9, arg: "HTML el" },
  { id: 10, arg: "ind" },
  { id: 11, arg: "method" },
  { id: 12, arg: "msec" },
  { id: 13, arg: "no" },
  { id: 14, arg: "null" },
  { id: 15, arg: "num" },
  { id: 16, arg: "obj" },
  { id: 17, arg: "regExp" },
  { id: 18, arg: "str" },
  { id: 19, arg: "url" },
]);

const correctAnsvers = {
  args: ["num", "no"],
  description: "Кол-во символов",
  changeData: "Нет",
  outputVariant: "Число",
};

const userResults = {
  solved: ["Number()", "push", "pop", "keys"],
  failed: ["toFixed", "values"],
};

export {
  args,
  outputVariant,
  question,
  subject,
  category,
  correctAnsvers,
  userResults,
};
