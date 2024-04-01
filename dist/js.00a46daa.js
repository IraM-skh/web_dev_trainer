// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/modules/categoryList/categoryHtmlEl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryAll = void 0;
var categoryAll = exports.categoryAll = document.querySelector(".category_all");
},{}],"js/modules/testData/categoryData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userResults = exports.subject = exports.question = exports.outputVariant = exports.correctAnsvers = exports.category = exports.args = void 0;
var category = exports.category = JSON.stringify([{
  id: 1,
  categoryName: "Числа",
  outputIds: [1, 2, 3, 7, 8],
  subjectsName: ["Number()", "toFixed", "Number.parseInt", "Number.isNaN"
  // "Math.PI",
  // "Math.ciel",
  // "Math.random",
  // "toFixed",
  ]
}, {
  id: 2,
  categoryName: "Массив",
  outputIds: [1, 2, 3, 7, 8, 11, 12, 13, 14, 15, 16],
  subjectsName: ["length(arr)", "push", "unshift", "pop"
  // "shift",
  // "splice",
  // "reverse",
  // "sort",
  // "fill",
  ]
}, {
  id: 3,
  categoryName: "Объект",
  outputIds: [1, 2, 3, 4, 7, 8],
  subjectsName: ["assign", "keys", "values", "entries"]
}, {
  id: 4,
  categoryName: "Cтрока",
  outputIds: [1, 2, 3, 7, 8, 14],
  subjectsName: ["length(str)", "concat", "toLowerCase", "toUpperCase"
  // "indexOf",
  // "lastIndexOf",
  // "charAt",
  // "substring",
  ]
}]);
var subject = exports.subject = JSON.stringify([{
  subjectName: "Number()",
  description: ["Кол-во символов", "ложное описаниdsе 1", "ложное описание 2"]
}, {
  subjectName: "toFixed",
  description: ["Кол-во символов", "ложное оdsписание 1", "ложное описание 2"]
}, {
  subjectName: "Number.parseInt",
  description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"]
}, {
  subjectName: "Number.isNaN",
  description: ["Кол-во символов", "лоdsaжное описание 1", "ложное описание 2"]
}, {
  subjectName: "length(arr)",
  description: ["Кол-во символов", "ложнaaaaaaое описание 1", "ложное описание 2"]
}, {
  subjectName: "push",
  description: ["Кол-во симвddddddолов", "ложное описание 1", "ложное описание 2"]
}, {
  subjectName: "unshift",
  description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"]
}, {
  subjectName: "pop",
  description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"]
}, {
  subjectName: "assign",
  description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"]
}, {
  subjectName: "keys",
  description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"]
}, {
  subjectName: "values",
  description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"]
}, {
  subjectName: "entries",
  description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"]
}, {
  subjectName: "length(str)",
  description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"]
}, {
  subjectName: "concat",
  description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"]
}, {
  subjectName: "toLowerCase",
  description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"]
}, {
  subjectName: "toUpperCase",
  description: ["Кол-во символов", "ложное описание 1", "ложное описание 2"]
}]);
var question = exports.question = JSON.stringify([{
  question: "Выберите правильное определение:",
  ansversType: "radio",
  questionName: "description"
}, {
  question: "Какие аргументы можно передавать?",
  ansversType: "checkbox",
  questionName: "args"
}, {
  question: "Меняются ли исходные данные?",
  ansversType: "radio",
  questionName: "chengeData"
}, {
  question: "Что возвращается",
  ansversType: "radio",
  questionName: "outputVariant"
}]);
var outputVariant = exports.outputVariant = JSON.stringify([{
  id: 1,
  type: "Число"
}, {
  id: 2,
  type: "строка"
}, {
  id: 3,
  type: "массив"
}, {
  id: 4,
  type: "объект"
}, {
  id: 5,
  type: "promice"
}, {
  id: 6,
  type: "функция"
}, {
  id: 7,
  type: "true/false"
}, {
  id: 8,
  type: "undefiend"
}, {
  id: 9,
  type: "NodeList"
}, {
  id: 10,
  type: "елемент HTML"
}, {
  id: 11,
  type: "длина масиива"
}, {
  id: 12,
  type: "удаленное заничение"
}, {
  id: 13,
  type: "вырезанные эелементы"
}, {
  id: 14,
  type: "индекс"
}, {
  id: 15,
  type: "эелмент массива"
}, {
  id: 16,
  type: "результирующее значание"
}]);
var args = exports.args = JSON.stringify(["num", "str", "arg for cb", "cb", "el", "ind", "arr", "msec", "no"]);
var correctAnsvers = exports.correctAnsvers = {
  args: ["num", "no"],
  description: "Кол-во символов",
  chengeData: "Нет",
  outputVariant: "Число"
};
var userResults = exports.userResults = {
  solved: ["Number()", "push", "pop", "keys"],
  failed: ["toFixed", "values"]
};
},{}],"js/modules/ajax/parseFromJOSN.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryList = void 0;
var _categoryData = require("../testData/categoryData");
var categoryList = exports.categoryList = JSON.parse(_categoryData.category);
},{"../testData/categoryData":"js/modules/testData/categoryData.js"}],"js/modules/categoryList/setCategory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _categoryHtmlEl = require("./categoryHtmlEl");
var _parseFromJOSN = require("../ajax/parseFromJOSN");
function generateCategory(categoryName) {
  return "<li class=\"category\">".concat(categoryName, "</li>");
}
function setCategory() {
  _parseFromJOSN.categoryList.forEach(function (category) {
    _categoryHtmlEl.categoryAll.insertAdjacentHTML("afterend", generateCategory(category.categoryName));
  });
}
var _default = exports.default = setCategory;
},{"./categoryHtmlEl":"js/modules/categoryList/categoryHtmlEl.js","../ajax/parseFromJOSN":"js/modules/ajax/parseFromJOSN.js"}],"js/modules/filter/filterHtmlElements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterSortElement = exports.filterContainer = exports.filterBtn = void 0;
var filterBtn = exports.filterBtn = document.querySelector(".filter_btn svg");
var filterContainer = exports.filterContainer = document.querySelector(".filter_container");
var filterSortElement = exports.filterSortElement = document.querySelector(".filter_sort");
},{}],"js/modules/filter/filterApplying.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterApplying = filterApplying;
exports.sortedBy = exports.filters = void 0;
var _filterHtmlElements = require("./filterHtmlElements");
var _subject = require("../subjectsList/subject");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var filters = exports.filters = ["solved", "failed", "unstarted"];
var sortedBy = exports.sortedBy = "alphabet";
function filterApplying(form) {
  var checkedCheckboxes = _toConsumableArray(form.querySelectorAll(".filter_checkbox")).filter(function (checkboxElement) {
    return checkboxElement.checked;
  }).map(function (checkboxElement) {
    return checkboxElement.value;
  });
  var sortedBy = _filterHtmlElements.filterSortElement.value;
  setFilters(checkedCheckboxes);
  setSortedBy(sortedBy);
  (0, _subject.setSubjectOnFilter)(sortedBy);
}
function setFilters(newFilters) {
  filters.splice(0, filters.length);
  filters.push.apply(filters, _toConsumableArray(newFilters));
}
function setSortedBy(newSortedBy) {
  exports.sortedBy = sortedBy = newSortedBy;
}
},{"./filterHtmlElements":"js/modules/filter/filterHtmlElements.js","../subjectsList/subject":"js/modules/subjectsList/subject.js"}],"js/modules/subjectsList/subjectHtmlEl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subjectUl = void 0;
var subjectUl = exports.subjectUl = document.querySelector(".subject_container").querySelector("ul");
},{}],"js/modules/subjectsList/subject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAllSubject = setAllSubject;
exports.setSbjectOnCategory = setSbjectOnCategory;
exports.setSubjectOnFilter = setSubjectOnFilter;
var _parseFromJOSN = require("../ajax/parseFromJOSN");
var _categoryData = require("../testData/categoryData");
var _filterApplying = require("../filter/filterApplying");
var _subjectHtmlEl = require("./subjectHtmlEl");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function generateSubject(subjectName, result) {
  return "<li class=\"subject ".concat(result, "\">").concat(subjectName, "</li>");
}
function setAllSubject() {
  clearSubjectList();
  _parseFromJOSN.categoryList.forEach(function (category) {
    category.subjectsName.forEach(function (subject) {
      _subjectHtmlEl.subjectUl.insertAdjacentHTML("beforeend", generateSubject(subject, subjectResult(subject)));
    });
  });
  setSubjectOnFilter();
}
function setSbjectOnCategory(categoryName) {
  clearSubjectList();
  _parseFromJOSN.categoryList.find(function (category) {
    return category.categoryName === categoryName;
  }).subjectsName.forEach(function (subject) {
    _subjectHtmlEl.subjectUl.insertAdjacentHTML("beforeend", generateSubject(subject, subjectResult(subject)));
  });
  setSubjectOnFilter();
}
function clearSubjectList() {
  document.querySelectorAll(".subject").forEach(function (subjectEl) {
    subjectEl.remove();
  });
}
function subjectResult(subjectName) {
  if (_categoryData.userResults.solved.includes(subjectName)) {
    return "solved";
  }
  if (_categoryData.userResults.failed.includes(subjectName)) {
    return "failed";
  }
  return "unstarted";
}
function setSubjectOnFilter() {
  var subjects = _toConsumableArray(document.querySelectorAll(".subject"));
  var starterFilters = ["solved", "failed", "unstarted"];
  starterFilters.forEach(function (filter) {
    return filterSubjects(filter, subjects, _filterApplying.filters);
  });
  sortSubjects(subjects, _filterApplying.sortedBy);
}
function sortSubjects(list, sortedBy) {
  if (sortedBy === "alphabet") {
    list.sort(function (a, b) {
      return sortByAlphabet(a, b);
    });
  }
  if (sortedBy === "unstarted") {
    list.sort(function (a, b) {
      return sortByClasses(a, b, "unstarted", "failed", "solved");
    });
  }
  if (sortedBy === "failed") {
    list.sort(function (a, b) {
      return sortByClasses(a, b, "failed", "unstarted", "solved");
    });
  }
  list.forEach(function (element) {
    return element.remove();
  });
  _subjectHtmlEl.subjectUl.append.apply(_subjectHtmlEl.subjectUl, _toConsumableArray(list));
}
function sortByAlphabet(a, b) {
  if (a.textContent.toLowerCase() < b.textContent.toLowerCase()) {
    return -1;
  }
  if (a.textContent.toLowerCase() > b.textContent.toLowerCase()) {
    return 1;
  }
  return 0;
}
function sortByClasses(a, b, t1Class, t2Class, t3Class) {
  if (a.classList.contains(t1Class) && b.classList.contains(t1Class)) {
    return sortByAlphabet(a, b);
  }
  if (a.classList.contains(t1Class) && b.classList.contains(t3Class) || a.classList.contains(t1Class) && b.classList.contains(t2Class)) {
    return -1;
  }
  if (a.classList.contains(t2Class) && b.classList.contains(t3Class)) {
    return -1;
  }
  if (a.classList.contains(t2Class) && b.classList.contains(t2Class)) {
    return sortByAlphabet(a, b);
  }
  if (a.classList.contains(t3Class) && b.classList.contains(t2Class)) {
    return 1;
  }
  if (a.classList.contains(t3Class) && b.classList.contains(t3Class)) {
    return sortByAlphabet(a, b);
  }
  return 0;
}
function filterSubjects(filterCriterion, subjects, filtersValues) {
  if (!filtersValues.includes(filterCriterion)) {
    subjects.forEach(function (subject) {
      if (subject.classList.contains(filterCriterion)) {
        subject.classList.add("hidden");
      }
    });
  }
  if (filtersValues.includes(filterCriterion)) {
    subjects.forEach(function (subject) {
      if (subject.classList.contains(filterCriterion)) {
        subject.classList.remove("hidden");
      }
    });
  }
}
},{"../ajax/parseFromJOSN":"js/modules/ajax/parseFromJOSN.js","../testData/categoryData":"js/modules/testData/categoryData.js","../filter/filterApplying":"js/modules/filter/filterApplying.js","./subjectHtmlEl":"js/modules/subjectsList/subjectHtmlEl.js"}],"js/modules/trainerSection/trainerSectionHTML.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trainerMessageContainer = exports.trainerContainer = exports.taskForm = exports.subjectContainer = exports.chooseTrainerMessage = void 0;
var trainerContainer = exports.trainerContainer = document.querySelector(".trainer_container");
var trainerMessageContainer = exports.trainerMessageContainer = document.querySelector(".trainer_message");
var taskForm = exports.taskForm = document.querySelector(".task_form");
var chooseTrainerMessage = exports.chooseTrainerMessage = document.querySelector(".choose_trainer_message");
var subjectContainer = exports.subjectContainer = document.querySelector(".subject_container");
},{}],"js/modules/trainerSection/showTasks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "chooseTrainerMessage", {
  enumerable: true,
  get: function () {
    return _trainerSectionHTML.chooseTrainerMessage;
  }
});
exports.showTasks = showTasks;
Object.defineProperty(exports, "taskForm", {
  enumerable: true,
  get: function () {
    return _trainerSectionHTML.taskForm;
  }
});
var _trainerSectionHTML = require("./trainerSectionHTML");
function showTasks() {
  _trainerSectionHTML.chooseTrainerMessage.classList.add("hidden");
  _trainerSectionHTML.taskForm.classList.remove("hidden");
}
},{"./trainerSectionHTML":"js/modules/trainerSection/trainerSectionHTML.js"}],"js/modules/trainerSection/cleanTrainerMessage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _trainerSectionHTML = require("./trainerSectionHTML");
function cleanTrainerMessage() {
  _trainerSectionHTML.trainerMessageContainer.textContent = "";
  _trainerSectionHTML.trainerMessageContainer.classList.remove("error_message");
  _trainerSectionHTML.trainerMessageContainer.classList.add("hidden");
}
var _default = exports.default = cleanTrainerMessage;
},{"./trainerSectionHTML":"js/modules/trainerSection/trainerSectionHTML.js"}],"js/modules/trainerSection/trainerQA.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _categoryData = require("../testData/categoryData");
var _parseFromJOSN = require("../ajax/parseFromJOSN");
var _cleanTrainerMessage = _interopRequireDefault(require("./cleanTrainerMessage"));
var _trainerSectionHTML = require("./trainerSectionHTML");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var questionList = JSON.parse(_categoryData.question);
var subjectList = JSON.parse(_categoryData.subject);
var argsList = JSON.parse(_categoryData.args);
var outputVariantList = JSON.parse(_categoryData.outputVariant);
var chengeData = ["Да", "Нет"];
function setQestion(descriptionStr) {
  return "<h2>".concat(descriptionStr, "</h2>");
}
function setAnswer(value, inputType, questionName, idQestion, idAnswer) {
  return "<input\n              name=\"".concat(questionName, "\" \n              type=\"").concat(inputType, "\"\n              value=\"").concat(value, "\"\n              id=\"").concat(idQestion).concat(idAnswer, "\" /><label for=\"").concat(idQestion).concat(idAnswer, "\">").concat(value, "</label>");
}
function exerciseContainer(question) {
  return "<div class = \"exercise_container\" id =\"".concat(question, "\"></div>");
}
var sendAnswersBtn = "<div class = \"btns_qa_container\"><button class=\"send_answers_btn submit_btn\" type=\"submit\">\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C</button></div>";
function getDescription(targetedSubject) {
  return subjectList.find(function (subject) {
    return subject.subjectName === targetedSubject.textContent;
  }).description;
}
function getOutputVariant(targetedSubject) {
  return _parseFromJOSN.categoryList.find(function (category) {
    return category.subjectsName.includes(targetedSubject.textContent);
  }).outputIds.map(function (id) {
    return outputVariantList.find(function (outputVariant) {
      return outputVariant.id === id;
    }).type;
  });
}
function cleanFormsField() {
  _trainerSectionHTML.taskForm.innerHTML = "";
}
function setAllQA(targetedSubject) {
  cleanFormsField();
  (0, _cleanTrainerMessage.default)();
  var allAnswers = [{
    type: "description",
    values: getDescription(targetedSubject)
  }, {
    type: "args",
    values: argsList
  }, {
    type: "chengeData",
    values: chengeData
  }, {
    type: "outputVariant",
    values: getOutputVariant(targetedSubject)
  }];
  questionList.forEach(function (question, questionIndex) {
    _trainerSectionHTML.taskForm.insertAdjacentHTML("beforeend", exerciseContainer("EC" + questionIndex));
    var exeContainerElement = document.querySelector("#EC".concat(questionIndex));
    exeContainerElement.insertAdjacentHTML("beforeend", setQestion(question.question));
    allAnswers.find(function (answer) {
      return answer.type === question.questionName;
    }).values.forEach(function (value, answerIndex) {
      exeContainerElement.insertAdjacentHTML("beforeend", setAnswer(value, question.ansversType, question.questionName, questionIndex, answerIndex));
    });
  });
  _trainerSectionHTML.taskForm.insertAdjacentHTML("beforeend", sendAnswersBtn);
  _trainerSectionHTML.trainerContainer.scrollBy({
    left: 0,
    top: -_trainerSectionHTML.trainerContainer.offsetHeight,
    behavior: "smooth"
  });
}
var _default = exports.default = setAllQA;
},{"../testData/categoryData":"js/modules/testData/categoryData.js","../ajax/parseFromJOSN":"js/modules/ajax/parseFromJOSN.js","./cleanTrainerMessage":"js/modules/trainerSection/cleanTrainerMessage.js","./trainerSectionHTML":"js/modules/trainerSection/trainerSectionHTML.js"}],"js/modules/subjectsList/rewriteSubjectResult.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activeSubject = void 0;
exports.getActiveSubject = getActiveSubject;
exports.rewriteSubjectResult = rewriteSubjectResult;
var activeSubject = exports.activeSubject = null;
function rewriteSubjectResult(newResult) {
  activeSubject.classList.remove("solved");
  activeSubject.classList.remove("failed");
  activeSubject.classList.add(newResult);
}
function getActiveSubject(subject) {
  exports.activeSubject = activeSubject = subject;
}
},{}],"js/modules/subjectsList/setSelectsdSubjectOnChangeCategory.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _rewriteSubjectResult = require("./rewriteSubjectResult");
var _trainerSectionHTML = require("../trainerSection/trainerSectionHTML");
var _cleanTrainerMessage = _interopRequireDefault(require("../trainerSection/cleanTrainerMessage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function setSelectsdSubjectOnChangeCategory() {
  var subjects = _toConsumableArray(document.querySelectorAll(".subject"));
  var subjectsValues = subjects.map(function (subjectElement) {
    return subjectElement.textContent;
  });
  if (!_rewriteSubjectResult.activeSubject) {
    return;
  }
  if (subjectsValues.includes(_rewriteSubjectResult.activeSubject.textContent)) {
    var activeSubjectNow = subjects.filter(function (subjectElement) {
      return subjectElement.textContent === _rewriteSubjectResult.activeSubject.textContent;
    });
    activeSubjectNow[0].classList.add("subject_selected");
    (0, _rewriteSubjectResult.getActiveSubject)(activeSubjectNow[0]);
  } else {
    (0, _cleanTrainerMessage.default)();
    _trainerSectionHTML.chooseTrainerMessage.classList.remove("hidden");
    _trainerSectionHTML.taskForm.classList.add("hidden");
  }
}
var _default = exports.default = setSelectsdSubjectOnChangeCategory;
},{"./rewriteSubjectResult":"js/modules/subjectsList/rewriteSubjectResult.js","../trainerSection/trainerSectionHTML":"js/modules/trainerSection/trainerSectionHTML.js","../trainerSection/cleanTrainerMessage":"js/modules/trainerSection/cleanTrainerMessage.js"}],"js/modules/subjectsList/toggleChosenVariantStyle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEventListenerOnTrainerList = addEventListenerOnTrainerList;
exports.trainerListContainer = void 0;
var _showTasks = require("../trainerSection/showTasks");
var _trainerQA = _interopRequireDefault(require("../trainerSection/trainerQA"));
var _subject = require("./subject");
var _rewriteSubjectResult = require("./rewriteSubjectResult");
var _setSelectsdSubjectOnChangeCategory = _interopRequireDefault(require("./setSelectsdSubjectOnChangeCategory"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var trainerListContainer = exports.trainerListContainer = document.querySelector(".trainer_list_container");
function addEventListenerOnTrainerList() {
  var category = _toConsumableArray(document.querySelectorAll(".category"));
  trainerListContainer.addEventListener("click", function (event) {
    if (category.includes(event.target)) {
      toggleActiveClassInList(category, "category_selected", event.target);
      event.target.classList.contains("category_all") ? (0, _subject.setAllSubject)() : (0, _subject.setSbjectOnCategory)(event.target.textContent);
      (0, _setSelectsdSubjectOnChangeCategory.default)();
      return;
    }
    if (event.target.classList.contains("subject")) {
      var subject = _toConsumableArray(document.querySelectorAll(".subject"));
      (0, _rewriteSubjectResult.getActiveSubject)(event.target);
      toggleActiveClassInList(subject, "subject_selected", event.target);
      (0, _showTasks.showTasks)();
      (0, _trainerQA.default)(event.target);
      return;
    }
  });
}
function toggleActiveClassInList(list, activeClassStr, target) {
  list.forEach(function (li) {
    li.classList.remove(activeClassStr);
  });
  target.classList.add(activeClassStr);
}
},{"../trainerSection/showTasks":"js/modules/trainerSection/showTasks.js","../trainerSection/trainerQA":"js/modules/trainerSection/trainerQA.js","./subject":"js/modules/subjectsList/subject.js","./rewriteSubjectResult":"js/modules/subjectsList/rewriteSubjectResult.js","./setSelectsdSubjectOnChangeCategory":"js/modules/subjectsList/setSelectsdSubjectOnChangeCategory.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/modules/reset.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scss/modules/header.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scss/modules/trainerSection.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\assets\\bg\\background63.png":[["background63.8223dde7.png","assets/bg/background63.png"],"assets/bg/background63.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scss/modules/categoryAndSubjctList.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scss/modules/filter.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\..\\assets\\bg\\background63.png":[["background63.8223dde7.png","assets/bg/background63.png"],"assets/bg/background63.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scss/modules/loginAndProfile.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./modules/reset.scss":"scss/modules/reset.scss","./modules/header.scss":"scss/modules/header.scss","./modules/trainerSection.scss":"scss/modules/trainerSection.scss","./modules/categoryAndSubjctList.scss":"scss/modules/categoryAndSubjctList.scss","./modules/filter.scss":"scss/modules/filter.scss","./modules/loginAndProfile.scss":"scss/modules/loginAndProfile.scss","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/modules/login/loginHtmlEl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showPopupLoginBtn = exports.repeatPassword = exports.rememberLogin = exports.registrationBtn = exports.passwordInput = exports.overlayModal = exports.needToRegistrationBtn = exports.loginModalWindow = exports.loginInput = exports.loginErrorMessage = exports.loginBtn = void 0;
exports.toggleDispay = toggleDispay;
var showPopupLoginBtn = exports.showPopupLoginBtn = document.querySelector(".show_popup_login_btn"); //не нужна???

var overlayModal = exports.overlayModal = document.querySelector(".overlay_modal");
var loginModalWindow = exports.loginModalWindow = document.querySelector(".login_modal_window");
var needToRegistrationBtn = exports.needToRegistrationBtn = document.querySelector(".need_to_registration_btn");
var registrationBtn = exports.registrationBtn = document.querySelector(".registration_btn");
var loginErrorMessage = exports.loginErrorMessage = document.querySelector(".login_error_message");
var loginBtn = exports.loginBtn = document.querySelector(".login_btn");
var repeatPassword = exports.repeatPassword = document.querySelector(".repeat_password");
var loginInput = exports.loginInput = document.querySelector(".login_input");
var passwordInput = exports.passwordInput = document.querySelector(".password_input");
var rememberLogin = exports.rememberLogin = document.querySelector("#remember_login");
function toggleDispay(element) {
  element.classList.toggle("hidden");
}
},{}],"js/modules/profile.js/ProfileHTMLEl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userUnstarted = exports.userSolved = exports.userLogin = exports.userFailed = exports.statisticCategoryList = exports.showPopupProfileBtn = exports.profileModalWindow = void 0;
var showPopupProfileBtn = exports.showPopupProfileBtn = document.querySelector(".show_popup_profile_btn");
var profileModalWindow = exports.profileModalWindow = document.querySelector(".profile_modal_window");
var statisticCategoryList = exports.statisticCategoryList = document.querySelector(".statistic_category_list");
var userSolved = exports.userSolved = document.querySelector(".user_solved");
var userFailed = exports.userFailed = document.querySelector(".user_failed");
var userUnstarted = exports.userUnstarted = document.querySelector(".user_unstarted");
var userLogin = exports.userLogin = document.querySelector(".user_login");
},{}],"js/modules/profile.js/setCategoryInProfile.js.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ProfileHTMLEl = require("./ProfileHTMLEl");
var _parseFromJOSN = require("../ajax/parseFromJOSN");
function setCategoryInProfile() {
  _ProfileHTMLEl.statisticCategoryList.insertAdjacentHTML("beforeend", addOptionToStatisticCategorys("Все"));
  _parseFromJOSN.categoryList.forEach(function (category) {
    _ProfileHTMLEl.statisticCategoryList.insertAdjacentHTML("beforeend", addOptionToStatisticCategorys(category.categoryName));
  });
}
function addOptionToStatisticCategorys(value) {
  return "<option value=\"".concat(value, "\">").concat(value, "</option>");
}
var _default = exports.default = setCategoryInProfile;
},{"./ProfileHTMLEl":"js/modules/profile.js/ProfileHTMLEl.js","../ajax/parseFromJOSN":"js/modules/ajax/parseFromJOSN.js"}],"js/modules/profile.js/countProfileResults.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ProfileHTMLEl = require("./ProfileHTMLEl");
var _categoryData = require("../testData/categoryData");
var _parseFromJOSN = require("../ajax/parseFromJOSN");
function countProfileResults() {
  var countedUserSolved = 0;
  var countedUserFailed = 0;
  var countedUserUnstarted = 0;
  if (_ProfileHTMLEl.statisticCategoryList.value === "Все") {
    countedUserSolved = _categoryData.userResults.solved.length;
    countedUserFailed = _categoryData.userResults.failed.length;
    countedUserUnstarted = _parseFromJOSN.categoryList.reduce(function (acc, category) {
      return acc + category.subjectsName.length;
    }, 0) - countedUserSolved - countedUserFailed;
  } else {
    var subjects = _parseFromJOSN.categoryList.find(function (category) {
      return category.categoryName.includes(_ProfileHTMLEl.statisticCategoryList.value);
    }).subjectsName;
    _categoryData.userResults.solved.forEach(function (subjectSolved) {
      if (subjects.includes(subjectSolved)) {
        countedUserSolved += 1;
      }
    });
    _categoryData.userResults.failed.forEach(function (subjectFailed) {
      if (subjects.includes(subjectFailed)) {
        countedUserFailed += 1;
      }
    });
    countedUserUnstarted = subjects.length - countedUserSolved - countedUserFailed;
  }
  _ProfileHTMLEl.userSolved.textContent = countedUserSolved;
  _ProfileHTMLEl.userFailed.textContent = countedUserFailed;
  _ProfileHTMLEl.userUnstarted.textContent = countedUserUnstarted;
}
var _default = exports.default = countProfileResults;
},{"./ProfileHTMLEl":"js/modules/profile.js/ProfileHTMLEl.js","../testData/categoryData":"js/modules/testData/categoryData.js","../ajax/parseFromJOSN":"js/modules/ajax/parseFromJOSN.js"}],"js/modules/popups/changeOpenPopup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeOpenPopup = changeOpenPopup;
exports.openPopup = void 0;
var _loginHtmlEl = require("../login/loginHtmlEl");
var _ProfileHTMLEl = require("../profile.js/ProfileHTMLEl");
var _setCategoryInProfile = _interopRequireDefault(require("../profile.js/setCategoryInProfile.js"));
var _countProfileResults = _interopRequireDefault(require("../profile.js/countProfileResults.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var openPopup = exports.openPopup = null;
function changeOpenPopup(popupClassOrNull) {
  if (popupClassOrNull === null) {
    exports.openPopup = openPopup = popupClassOrNull;
  }
  if (popupClassOrNull === "login_modal_window") {
    exports.openPopup = openPopup = _loginHtmlEl.loginModalWindow;
  }
  if (popupClassOrNull === "profile_modal_window") {
    exports.openPopup = openPopup = _ProfileHTMLEl.profileModalWindow;
    (0, _setCategoryInProfile.default)();
    (0, _countProfileResults.default)();
  }
}
},{"../login/loginHtmlEl":"js/modules/login/loginHtmlEl.js","../profile.js/ProfileHTMLEl":"js/modules/profile.js/ProfileHTMLEl.js","../profile.js/setCategoryInProfile.js":"js/modules/profile.js/setCategoryInProfile.js.js","../profile.js/countProfileResults.js":"js/modules/profile.js/countProfileResults.js"}],"js/modules/popups/togglePopupDisplay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _loginHtmlEl = require("../login/loginHtmlEl");
var _changeOpenPopup = require("./changeOpenPopup");
function togglePopupDisplay() {
  (0, _loginHtmlEl.toggleDispay)(_loginHtmlEl.overlayModal);
  (0, _loginHtmlEl.toggleDispay)(_changeOpenPopup.openPopup);
}
var _default = exports.default = togglePopupDisplay;
},{"../login/loginHtmlEl":"js/modules/login/loginHtmlEl.js","./changeOpenPopup":"js/modules/popups/changeOpenPopup.js"}],"js/modules/nav/changeNavBtnStyle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _togglePopupDisplay = _interopRequireDefault(require("../popups/togglePopupDisplay"));
var _changeOpenPopup = require("../popups/changeOpenPopup");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function changeNavBtnStyle() {
  var navBtns = _toConsumableArray(document.querySelectorAll(".nav_btn"));
  var nav = document.querySelector("nav");
  nav.addEventListener("click", function (event) {
    if (event.target.classList.contains("show_popup_login_btn") || event.target.classList.contains("profile_icon_login")) {
      (0, _changeOpenPopup.changeOpenPopup)("login_modal_window");
      (0, _togglePopupDisplay.default)();
      return;
    }
    if (event.target.classList.contains("show_popup_profile_btn") || event.target.classList.contains("profile_icon_logined")) {
      (0, _changeOpenPopup.changeOpenPopup)("profile_modal_window");
      (0, _togglePopupDisplay.default)();
      return;
    }
    if (navBtns.includes(event.target)) {
      navBtns.forEach(function (btn) {
        return btn.classList.remove("selected_section_btn");
      });
      event.target.classList.add("selected_section_btn");
    }
  });
}
var _default = exports.default = changeNavBtnStyle;
},{"../popups/togglePopupDisplay":"js/modules/popups/togglePopupDisplay.js","../popups/changeOpenPopup":"js/modules/popups/changeOpenPopup.js"}],"js/modules/filter/toggleFilter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _filterHtmlElements = require("./filterHtmlElements");
function toggleFilter() {
  _filterHtmlElements.filterContainer.classList.toggle("show_filter_container");
}
_filterHtmlElements.filterBtn.addEventListener("click", function (event) {
  toggleFilter();
});
var _default = exports.default = toggleFilter;
},{"./filterHtmlElements":"js/modules/filter/filterHtmlElements.js"}],"js/modules/trainerSection/setTrainerMessage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _trainerSectionHTML = require("./trainerSectionHTML");
function setTrainerMessage(message) {
  var isError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  _trainerSectionHTML.trainerMessageContainer.textContent = message;
  if (isError) {
    _trainerSectionHTML.trainerMessageContainer.classList.add("error_message");
  }
  _trainerSectionHTML.trainerMessageContainer.classList.remove("hidden");
}
var _default = exports.default = setTrainerMessage;
},{"./trainerSectionHTML":"js/modules/trainerSection/trainerSectionHTML.js"}],"js/modules/trainerSection/formEstimation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _categoryData = require("../testData/categoryData");
function formEstimation(checkedInputsArray) {
  var inputCheckboxes = checkedInputsArray.filter(function (input) {
    return input.type === "checkbox";
  });
  var resultingArray = checkedInputsArray.map(function (input) {
    if (input.type === "checkbox") {
      return _categoryData.correctAnsvers[input.name].length === inputCheckboxes.length ? _categoryData.correctAnsvers[input.name].includes(input.value) : false;
    }
    return _categoryData.correctAnsvers[input.name] === input.value;
  });
  console.log(resultingArray.every(function (value) {
    return value;
  }));
  return resultingArray.every(function (value) {
    return value;
  });
}
var _default = exports.default = formEstimation;
},{"../testData/categoryData":"js/modules/testData/categoryData.js"}],"js/modules/trainerSection/addNextBtn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var nextBtn = "<button class=\"next_btn\" type=\"button\">\u0414\u0430\u043B\u0435\u0435</button>";
function addNextBtn(form) {
  var existingNextBtn = form.querySelector(".next_btn");
  if (existingNextBtn) {
    return;
  }
  form.querySelector(".send_answers_btn").insertAdjacentHTML("afterend", nextBtn);
}
var _default = exports.default = addNextBtn;
},{}],"js/modules/trainerSection/sendForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _formEstimation = _interopRequireDefault(require("./formEstimation"));
var _rewriteSubjectResult = require("../subjectsList/rewriteSubjectResult");
var _addNextBtn = _interopRequireDefault(require("./addNextBtn"));
var _trainerSectionHTML = require("./trainerSectionHTML");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function sendForm(inputsForEstimation, showMessage) {
  if ((0, _formEstimation.default)(inputsForEstimation)) {
    showMessage("Все правильно, молодец!");
    (0, _rewriteSubjectResult.rewriteSubjectResult)("solved");
    if (_rewriteSubjectResult.activeSubject.nextElementSibling) {
      (0, _addNextBtn.default)(_trainerSectionHTML.taskForm);
    }
    return;
  }
  showMessage("Неправильно! Можете попробовать снова.", true);
  (0, _rewriteSubjectResult.rewriteSubjectResult)("failed");
}
var _default = exports.default = sendForm;
},{"./formEstimation":"js/modules/trainerSection/formEstimation.js","../subjectsList/rewriteSubjectResult":"js/modules/subjectsList/rewriteSubjectResult.js","./addNextBtn":"js/modules/trainerSection/addNextBtn.js","./trainerSectionHTML":"js/modules/trainerSection/trainerSectionHTML.js"}],"js/modules/trainerSection/formValidator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _setTrainerMessage = _interopRequireDefault(require("./setTrainerMessage"));
var _cleanTrainerMessage = _interopRequireDefault(require("./cleanTrainerMessage"));
var _sendForm = _interopRequireDefault(require("./sendForm"));
var _trainerSectionHTML = require("./trainerSectionHTML");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function formValidator(form) {
  (0, _cleanTrainerMessage.default)();
  var inputs = _toConsumableArray(form.querySelectorAll("input"));
  var category = new Set(inputs.map(function (input) {
    return input.name;
  }));
  var checkedInputs = inputs.filter(function (input) {
    return input.checked;
  });
  var checkedCategory = new Set(checkedInputs.map(function (input) {
    return input.name;
  }));
  if (!isEqualSet(category, checkedCategory)) {
    (0, _setTrainerMessage.default)("Заполните все поля", true);
    return;
  }
  (0, _sendForm.default)(checkedInputs, _setTrainerMessage.default);
  _trainerSectionHTML.trainerContainer.scrollBy({
    left: 0,
    top: _trainerSectionHTML.trainerContainer.offsetHeight,
    behavior: "smooth"
  });
}
function isEqualSet(set1, set2) {
  console.log();
  if (set1.size != set2.size) {
    return false;
  }
  set1.forEach(function (element) {
    if (!set2.has(element)) {
      return false;
    }
  });
  return true;
}
var _default = exports.default = formValidator;
},{"./setTrainerMessage":"js/modules/trainerSection/setTrainerMessage.js","./cleanTrainerMessage":"js/modules/trainerSection/cleanTrainerMessage.js","./sendForm":"js/modules/trainerSection/sendForm.js","./trainerSectionHTML":"js/modules/trainerSection/trainerSectionHTML.js"}],"js/modules/trainerSection/changeSubjectOnNextBtn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _rewriteSubjectResult = require("../subjectsList/rewriteSubjectResult");
var _showTasks = require("./showTasks");
var _trainerQA = _interopRequireDefault(require("./trainerQA"));
var _trainerSectionHTML = require("./trainerSectionHTML");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function changeSubjectOnNextBtn() {
  _rewriteSubjectResult.activeSubject.classList.remove("subject_selected");
  _rewriteSubjectResult.activeSubject.nextElementSibling.classList.add("subject_selected");
  _trainerSectionHTML.subjectContainer.scrollBy({
    left: 0,
    top: _rewriteSubjectResult.activeSubject.offsetHeight,
    behavior: "smooth"
  });
  (0, _showTasks.showTasks)();
  (0, _trainerQA.default)(_rewriteSubjectResult.activeSubject.nextElementSibling);
  (0, _rewriteSubjectResult.getActiveSubject)(_rewriteSubjectResult.activeSubject.nextElementSibling);
}
var _default = exports.default = changeSubjectOnNextBtn;
},{"../subjectsList/rewriteSubjectResult":"js/modules/subjectsList/rewriteSubjectResult.js","./showTasks":"js/modules/trainerSection/showTasks.js","./trainerQA":"js/modules/trainerSection/trainerQA.js","./trainerSectionHTML":"js/modules/trainerSection/trainerSectionHTML.js"}],"js/modules/filter/checkFilterData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _filterHtmlElements = require("./filterHtmlElements");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var options = _toConsumableArray(_filterHtmlElements.filterSortElement.querySelectorAll("option"));
function checkFilterData(chengeInput) {
  if (chengeInput.classList.contains("filter_checkbox")) {
    var optionForHide = options.filter(function (optionElement) {
      return optionElement.value === chengeInput.value;
    })[0];
    if (optionForHide) {
      optionForHide.classList.toggle("hidden");
    }
    if (!chengeInput.checked) {
      if (_filterHtmlElements.filterSortElement.value === chengeInput.value) {
        _filterHtmlElements.filterSortElement.value = "alphabet";
      }
    }
  }
}
var _default = exports.default = checkFilterData;
},{"./filterHtmlElements":"js/modules/filter/filterHtmlElements.js"}],"js/modules/login/resetErrorStylesLogin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _loginHtmlEl = require("./loginHtmlEl");
function resetErrorStylesLogin() {
  _loginHtmlEl.loginErrorMessage.textContent = "";
  _loginHtmlEl.loginErrorMessage.classList.remove("hidden");
  [_loginHtmlEl.loginInput, _loginHtmlEl.passwordInput, _loginHtmlEl.repeatPassword].forEach(function (input) {
    input.classList.remove("failed_validate");
  });
}
var _default = exports.default = resetErrorStylesLogin;
},{"./loginHtmlEl":"js/modules/login/loginHtmlEl.js"}],"js/modules/login/toggleRegistrationFields.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _loginHtmlEl = require("./loginHtmlEl");
var _resetErrorStylesLogin = _interopRequireDefault(require("./resetErrorStylesLogin"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var needToRegistration = true;
function toggleRegistrationFields() {
  (0, _loginHtmlEl.toggleDispay)(_loginHtmlEl.repeatPassword);
  (0, _loginHtmlEl.toggleDispay)(_loginHtmlEl.loginBtn);
  (0, _loginHtmlEl.toggleDispay)(_loginHtmlEl.registrationBtn);
  toggleMessage();
  (0, _resetErrorStylesLogin.default)();
}
function toggleMessage() {
  !needToRegistration ? _loginHtmlEl.needToRegistrationBtn.textContent = "У меня нет аккаунта" : _loginHtmlEl.needToRegistrationBtn.textContent = "У меня есть аккаунт";
  needToRegistration = !needToRegistration;
}
var _default = exports.default = toggleRegistrationFields;
},{"./loginHtmlEl":"js/modules/login/loginHtmlEl.js","./resetErrorStylesLogin":"js/modules/login/resetErrorStylesLogin.js"}],"js/modules/login/login.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ProfileHTMLEl = require("../profile.js/ProfileHTMLEl");
function login(login) {
  _ProfileHTMLEl.userLogin.textContent = login;
}
var _default = exports.default = login;
},{"../profile.js/ProfileHTMLEl":"js/modules/profile.js/ProfileHTMLEl.js"}],"js/modules/login/saveLoginInStorage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _loginHtmlEl = require("./loginHtmlEl");
function saveLoginInStorage(loginName) {
  if (_loginHtmlEl.rememberLogin.checked) {
    localStorage.setItem("login", loginName);
  }
}
var _default = exports.default = saveLoginInStorage;
},{"./loginHtmlEl":"js/modules/login/loginHtmlEl.js"}],"js/modules/login/toggleLoginBtnDisplay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _loginHtmlEl = require("./loginHtmlEl");
var _ProfileHTMLEl = require("../profile.js/ProfileHTMLEl");
function toggleLoginBtnDisplay() {
  _loginHtmlEl.showPopupLoginBtn.classList.toggle("hidden");
  _ProfileHTMLEl.showPopupProfileBtn.classList.toggle("hidden");
}
var _default = exports.default = toggleLoginBtnDisplay;
},{"./loginHtmlEl":"js/modules/login/loginHtmlEl.js","../profile.js/ProfileHTMLEl":"js/modules/profile.js/ProfileHTMLEl.js"}],"js/modules/login/loginFormValidate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _loginHtmlEl = require("./loginHtmlEl");
var _login = _interopRequireDefault(require("./login"));
var _resetErrorStylesLogin = _interopRequireDefault(require("./resetErrorStylesLogin"));
var _saveLoginInStorage = _interopRequireDefault(require("./saveLoginInStorage"));
var _toggleLoginBtnDisplay = _interopRequireDefault(require("./toggleLoginBtnDisplay"));
var _togglePopupDisplay = _interopRequireDefault(require("../popups/togglePopupDisplay"));
var _changeOpenPopup = require("../popups/changeOpenPopup");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function loginFormValidate(targetBtnClass) {
  var loginValidateResult = true;
  (0, _resetErrorStylesLogin.default)();
  if (!_loginHtmlEl.loginInput.value.trim() || !_loginHtmlEl.passwordInput.value.trim() || targetBtnClass === "registration_btn" && !_loginHtmlEl.repeatPassword.value.trim()) {
    [_loginHtmlEl.loginInput, _loginHtmlEl.passwordInput, _loginHtmlEl.repeatPassword].forEach(function (input) {
      if (!input.value.trim()) {
        input.classList.add("failed_validate");
      }
    });
    _loginHtmlEl.loginErrorMessage.textContent = "Заполните все поля.";
    loginValidateResult = false;
    return;
  }
  if (!checkSymbol(_loginHtmlEl.loginInput.value.trim())) {
    _loginHtmlEl.loginErrorMessage.textContent += " Логин должен состять только из букв и/или цифр";
    _loginHtmlEl.loginInput.classList.add("failed_validate");
    loginValidateResult = false;
  }
  if (!checkSymbolLimit(4, 15, _loginHtmlEl.loginInput.value.trim())) {
    _loginHtmlEl.loginErrorMessage.textContent += " Логин должен состоять из 4-15 символов.";
    _loginHtmlEl.loginInput.classList.add("failed_validate");
    loginValidateResult = false;
  }
  if (!checkSymbolLimit(6, 30, _loginHtmlEl.passwordInput.value.trim())) {
    _loginHtmlEl.loginErrorMessage.textContent += " Пароль должен состоять из 6-30 символов";
    _loginHtmlEl.passwordInput.classList.add("failed_validate");
    loginValidateResult = false;
  }
  if (targetBtnClass === "registration_btn") {
    if (!checkPasswordEquival(_loginHtmlEl.passwordInput.value.trim(), _loginHtmlEl.repeatPassword.value.trim())) {
      _loginHtmlEl.loginErrorMessage.textContent += " Пароли не совпадают";
      _loginHtmlEl.repeatPassword.classList.add("failed_validate");
      loginValidateResult = false;
    }
  }
  if (loginValidateResult) {
    //отправка данных на php. Проверка логина и пароля. Если логина нет при выходе- ошибка такого логина не зарегестрированно. Если лоигн есть, но не совпадает пароль - неправильный пароль. Если при регистрации такой логин уже есть- ошибка "такой логин уже зарегистрирован, придумайте другой"
    console.log("данные приняты");
    _loginHtmlEl.loginErrorMessage.classList.add("hidden");
    (0, _login.default)(_loginHtmlEl.loginInput.value.trim());
    (0, _saveLoginInStorage.default)(_loginHtmlEl.loginInput.value.trim());
    (0, _toggleLoginBtnDisplay.default)();
    (0, _togglePopupDisplay.default)();
    (0, _changeOpenPopup.changeOpenPopup)(null);
  }
}
function checkSymbolLimit(minInclusive, maxInclusive, string) {
  if (string.length < minInclusive || string.length > maxInclusive) {
    return false;
  }
  return true;
}
function checkSymbol(string) {
  var regEx = /^[a-z0-9а-яё]+$/i;
  if (regEx.test(string)) {
    return true;
  }
  return false;
}
function checkPasswordEquival(pass1, pass2) {
  if (pass1 === pass2) {
    return true;
  }
  return false;
}
var _default = exports.default = loginFormValidate;
},{"./loginHtmlEl":"js/modules/login/loginHtmlEl.js","./login":"js/modules/login/login.js","./resetErrorStylesLogin":"js/modules/login/resetErrorStylesLogin.js","./saveLoginInStorage":"js/modules/login/saveLoginInStorage.js","./toggleLoginBtnDisplay":"js/modules/login/toggleLoginBtnDisplay.js","../popups/togglePopupDisplay":"js/modules/popups/togglePopupDisplay.js","../popups/changeOpenPopup":"js/modules/popups/changeOpenPopup.js"}],"js/modules/profile.js/exitProfile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _togglePopupDisplay = _interopRequireDefault(require("../popups/togglePopupDisplay"));
var _toggleLoginBtnDisplay = _interopRequireDefault(require("../login/toggleLoginBtnDisplay"));
var _changeOpenPopup = require("../popups/changeOpenPopup");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function exitProfile() {
  localStorage.clear();
  (0, _toggleLoginBtnDisplay.default)();
  (0, _togglePopupDisplay.default)();
  (0, _changeOpenPopup.changeOpenPopup)(null);
}
var _default = exports.default = exitProfile;
},{"../popups/togglePopupDisplay":"js/modules/popups/togglePopupDisplay.js","../login/toggleLoginBtnDisplay":"js/modules/login/toggleLoginBtnDisplay.js","../popups/changeOpenPopup":"js/modules/popups/changeOpenPopup.js"}],"js/modules/profile.js/setLoginAtLocalStorage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toggleLoginBtnDisplay = _interopRequireDefault(require("../login/toggleLoginBtnDisplay"));
var _ProfileHTMLEl = require("./ProfileHTMLEl");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function setLoginAtLocalStorage() {
  if (localStorage.getItem("login")) {
    (0, _toggleLoginBtnDisplay.default)();
    _ProfileHTMLEl.userLogin.textContent = localStorage.getItem("login");
  } else {
    console.log("нет");
  }
}
var _default = exports.default = setLoginAtLocalStorage;
},{"../login/toggleLoginBtnDisplay":"js/modules/login/toggleLoginBtnDisplay.js","./ProfileHTMLEl":"js/modules/profile.js/ProfileHTMLEl.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _setCategory = _interopRequireDefault(require("./modules/categoryList/setCategory.js"));
var _subject = require("./modules/subjectsList/subject.js");
var _toggleChosenVariantStyle = require("./modules/subjectsList/toggleChosenVariantStyle.js");
require("../scss/main.scss");
var _changeNavBtnStyle = _interopRequireDefault(require("./modules/nav/changeNavBtnStyle"));
var _toggleFilter = _interopRequireDefault(require("../js/modules/filter/toggleFilter.js"));
var _formValidator = _interopRequireDefault(require("./modules/trainerSection/formValidator.js"));
var _trainerSectionHTML = require("./modules/trainerSection/trainerSectionHTML.js");
var _changeSubjectOnNextBtn = _interopRequireDefault(require("./modules/trainerSection/changeSubjectOnNextBtn.js"));
var _filterHtmlElements = require("./modules/filter/filterHtmlElements.js");
var _checkFilterData = _interopRequireDefault(require("./modules/filter/checkFilterData.js"));
var _filterApplying = require("./modules/filter/filterApplying.js");
var _loginHtmlEl = require("./modules/login/loginHtmlEl.js");
var _toggleRegistrationFields = _interopRequireDefault(require("./modules/login/toggleRegistrationFields.js"));
var _loginFormValidate = _interopRequireDefault(require("./modules/login/loginFormValidate.js"));
var _togglePopupDisplay = _interopRequireDefault(require("./modules/popups/togglePopupDisplay.js"));
var _changeOpenPopup = require("./modules/popups/changeOpenPopup.js");
var _ProfileHTMLEl = require("./modules/profile.js/ProfileHTMLEl.js");
var _countProfileResults = _interopRequireDefault(require("./modules/profile.js/countProfileResults.js"));
var _exitProfile = _interopRequireDefault(require("./modules/profile.js/exitProfile.js"));
var _setLoginAtLocalStorage = _interopRequireDefault(require("./modules/profile.js/setLoginAtLocalStorage.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _setCategory.default)();
(0, _subject.setAllSubject)();
(0, _changeNavBtnStyle.default)();
(0, _toggleChosenVariantStyle.addEventListenerOnTrainerList)();
(0, _setLoginAtLocalStorage.default)();
document.addEventListener("submit", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("filter_container")) {
    (0, _filterApplying.filterApplying)(event.target);
    (0, _toggleFilter.default)();
  }
  if (event.target.classList.contains("task_form")) {
    (0, _formValidator.default)(event.target);
  }
});
_trainerSectionHTML.taskForm.addEventListener("click", function (event) {
  if (event.target.classList.contains("next_btn")) {
    (0, _changeSubjectOnNextBtn.default)();
  }
});
_filterHtmlElements.filterContainer.addEventListener("change", function (event) {
  (0, _checkFilterData.default)(event.target);
});
_loginHtmlEl.overlayModal.addEventListener("click", function (event) {
  if (!event.target.classList.contains("overlay_modal")) {
    if (event.target.classList.contains("need_to_registration_btn")) {
      (0, _toggleRegistrationFields.default)();
    }
    if (event.target.classList.contains("login_btn")) {
      (0, _loginFormValidate.default)("login_btn");
    }
    if (event.target.classList.contains("registration_btn")) {
      (0, _loginFormValidate.default)("registration_btn");
    }
    return;
  }
  (0, _togglePopupDisplay.default)();
  (0, _changeOpenPopup.changeOpenPopup)(null);
});
_ProfileHTMLEl.statisticCategoryList.addEventListener("change", function () {
  (0, _countProfileResults.default)();
});
_ProfileHTMLEl.profileModalWindow.addEventListener("click", function (event) {
  if (event.target.classList.contains("exit_profile_btn")) {
    (0, _exitProfile.default)();
  }
});
},{"./modules/categoryList/setCategory.js":"js/modules/categoryList/setCategory.js","./modules/subjectsList/subject.js":"js/modules/subjectsList/subject.js","./modules/subjectsList/toggleChosenVariantStyle.js":"js/modules/subjectsList/toggleChosenVariantStyle.js","../scss/main.scss":"scss/main.scss","./modules/nav/changeNavBtnStyle":"js/modules/nav/changeNavBtnStyle.js","../js/modules/filter/toggleFilter.js":"js/modules/filter/toggleFilter.js","./modules/trainerSection/formValidator.js":"js/modules/trainerSection/formValidator.js","./modules/trainerSection/trainerSectionHTML.js":"js/modules/trainerSection/trainerSectionHTML.js","./modules/trainerSection/changeSubjectOnNextBtn.js":"js/modules/trainerSection/changeSubjectOnNextBtn.js","./modules/filter/filterHtmlElements.js":"js/modules/filter/filterHtmlElements.js","./modules/filter/checkFilterData.js":"js/modules/filter/checkFilterData.js","./modules/filter/filterApplying.js":"js/modules/filter/filterApplying.js","./modules/login/loginHtmlEl.js":"js/modules/login/loginHtmlEl.js","./modules/login/toggleRegistrationFields.js":"js/modules/login/toggleRegistrationFields.js","./modules/login/loginFormValidate.js":"js/modules/login/loginFormValidate.js","./modules/popups/togglePopupDisplay.js":"js/modules/popups/togglePopupDisplay.js","./modules/popups/changeOpenPopup.js":"js/modules/popups/changeOpenPopup.js","./modules/profile.js/ProfileHTMLEl.js":"js/modules/profile.js/ProfileHTMLEl.js","./modules/profile.js/countProfileResults.js":"js/modules/profile.js/countProfileResults.js","./modules/profile.js/exitProfile.js":"js/modules/profile.js/exitProfile.js","./modules/profile.js/setLoginAtLocalStorage.js":"js/modules/profile.js/setLoginAtLocalStorage.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52060" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map