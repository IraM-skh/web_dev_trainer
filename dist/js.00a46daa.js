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
})({"js/modules/testData/categoryData.js":[function(require,module,exports) {
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
},{}],"js/modules/htmlElements/category.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryList = void 0;
exports.setCategory = setCategory;
var _categoryData = require("../testData/categoryData");
var categoryList = exports.categoryList = JSON.parse(_categoryData.category);
var categoryAll = document.querySelector(".category_all");
function generateCategory(categoryName) {
  return "<li class=\"category\">".concat(categoryName, "</li>");
}
function setCategory() {
  categoryList.forEach(function (category) {
    categoryAll.insertAdjacentHTML("afterend", generateCategory(category.categoryName));
  });
}
},{"../testData/categoryData":"js/modules/testData/categoryData.js"}],"js/modules/filter/filterHtmlElements.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterSortElement = exports.filterContainer = exports.filterBtn = void 0;
var filterBtn = exports.filterBtn = document.querySelector(".filter_btn svg");
var filterContainer = exports.filterContainer = document.querySelector(".filter_container");
var filterSortElement = exports.filterSortElement = document.querySelector(".filter_sort");
},{}],"js/modules/trainerSection/showTasks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chooseTrainerMessage = void 0;
exports.showTasks = showTasks;
exports.taskForm = void 0;
var chooseTrainerMessage = exports.chooseTrainerMessage = document.querySelector(".choose_trainer_message");
var taskForm = exports.taskForm = document.querySelector(".task_form");
function showTasks() {
  chooseTrainerMessage.classList.add("hidden");
  taskForm.classList.remove("hidden");
}
},{}],"js/modules/htmlElements/setTrainerMessage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTrainerMessage = setTrainerMessage;
exports.trainerMessageContainer = void 0;
var trainerMessageContainer = exports.trainerMessageContainer = document.querySelector(".trainer_message");
function setTrainerMessage(message) {
  var isError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  trainerMessageContainer.textContent = message;
  if (isError) {
    trainerMessageContainer.classList.add("error_message");
  }
  trainerMessageContainer.classList.remove("hidden");
}
},{}],"js/modules/htmlElements/cleanTrainerMessage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _setTrainerMessage = require("./setTrainerMessage");
function cleanTrainerMessage() {
  _setTrainerMessage.trainerMessageContainer.textContent = "";
  _setTrainerMessage.trainerMessageContainer.classList.remove("error_message");
  _setTrainerMessage.trainerMessageContainer.classList.add("hidden");
}
var _default = exports.default = cleanTrainerMessage;
},{"./setTrainerMessage":"js/modules/htmlElements/setTrainerMessage.js"}],"js/modules/htmlElements/trainerQA.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAllQA = setAllQA;
exports.taskForm = void 0;
var _categoryData = require("../testData/categoryData");
var _category = require("./category");
var _cleanTrainerMessage = _interopRequireDefault(require("./cleanTrainerMessage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var questionList = JSON.parse(_categoryData.question);
var subjectList = JSON.parse(_categoryData.subject);
var argsList = JSON.parse(_categoryData.args);
var outputVariantList = JSON.parse(_categoryData.outputVariant);
var chengeData = ["Да", "Нет"];
var taskForm = exports.taskForm = document.querySelector(".task_form");
//question.question и question.ansversType question.questionName;
//subject.description и subject.subjectName
//args просто массив с аргументами
//outputVariant.id outputVariant.type
//categoryList.output_ids categoryList.subjectsName

function setQestion(descriptionStr) {
  return "<h2>".concat(descriptionStr, "</h2>"); // questionList.question
}
function setAnswer(value, inputType, questionName, idQestion, idAnswer) {
  //value- subjectList.description/args/chengeData/outputVariantList.type
  //inputType - questionList.ansversType
  //questionName - questionList.questionName
  return "<input\n              name=\"".concat(questionName, "\" \n              type=\"").concat(inputType, "\"\n              value=\"").concat(value, "\"\n              id=\"").concat(idQestion).concat(idAnswer, "\" /><label for=\"").concat(idQestion).concat(idAnswer, "\">").concat(value, "</label>");
}
var sendAnswersBtn = "<div class = \"btns_qa_container\"><button class=\"send_answers_btn submit_btn\" type=\"submit\">\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C</button></div>";
function getDescription(targetedSubject) {
  return subjectList.find(function (subject) {
    return subject.subjectName === targetedSubject.textContent;
  }).description;
}
function getOutputVariant(targetedSubject) {
  return _category.categoryList.find(function (category) {
    return category.subjectsName.includes(targetedSubject.textContent);
  }).outputIds.map(function (id) {
    return outputVariantList.find(function (outputVariant) {
      return outputVariant.id === id;
    }).type;
  });
}
function cleanFormsField() {
  taskForm.innerHTML = "";
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
    taskForm.insertAdjacentHTML("beforeend", setQestion(question.question));
    allAnswers.find(function (answer) {
      return answer.type === question.questionName;
    }).values.forEach(function (value, answerIndex) {
      taskForm.insertAdjacentHTML("beforeend", setAnswer(value, question.ansversType, question.questionName, questionIndex, answerIndex));
    });
  });
  taskForm.insertAdjacentHTML("beforeend", sendAnswersBtn);
}
},{"../testData/categoryData":"js/modules/testData/categoryData.js","./category":"js/modules/htmlElements/category.js","./cleanTrainerMessage":"js/modules/htmlElements/cleanTrainerMessage.js"}],"js/modules/htmlElements/rewriteSubjectResult.js":[function(require,module,exports) {
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
var _rewriteSubjectResult = require("../htmlElements/rewriteSubjectResult");
var _showTasks = require("../trainerSection/showTasks");
var _cleanTrainerMessage = _interopRequireDefault(require("../htmlElements/cleanTrainerMessage"));
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
    _showTasks.chooseTrainerMessage.classList.remove("hidden");
    _showTasks.taskForm.classList.add("hidden");
  }
}
var _default = exports.default = setSelectsdSubjectOnChangeCategory;
},{"../htmlElements/rewriteSubjectResult":"js/modules/htmlElements/rewriteSubjectResult.js","../trainerSection/showTasks":"js/modules/trainerSection/showTasks.js","../htmlElements/cleanTrainerMessage":"js/modules/htmlElements/cleanTrainerMessage.js"}],"js/modules/subjectsList/toggleChosenVariantStyle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEventListenerOnTrainerList = addEventListenerOnTrainerList;
exports.trainerListContainer = void 0;
var _showTasks = require("../trainerSection/showTasks");
var _trainerQA = require("../htmlElements/trainerQA");
var _subject = require("../htmlElements/subject");
var _rewriteSubjectResult = require("../htmlElements/rewriteSubjectResult");
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
      (0, _trainerQA.setAllQA)(event.target);
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
},{"../trainerSection/showTasks":"js/modules/trainerSection/showTasks.js","../htmlElements/trainerQA":"js/modules/htmlElements/trainerQA.js","../htmlElements/subject":"js/modules/htmlElements/subject.js","../htmlElements/rewriteSubjectResult":"js/modules/htmlElements/rewriteSubjectResult.js","./setSelectsdSubjectOnChangeCategory":"js/modules/subjectsList/setSelectsdSubjectOnChangeCategory.js"}],"js/modules/filter/toggleFilter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toggleChosenVariantStyle = require("../subjectsList/toggleChosenVariantStyle");
var _filterHtmlElements = require("./filterHtmlElements");
function toggleFilter() {
  _filterHtmlElements.filterContainer.classList.toggle("show_filter_container");
}
_filterHtmlElements.filterBtn.addEventListener("click", function (event) {
  toggleFilter();
});
var _default = exports.default = toggleFilter;
},{"../subjectsList/toggleChosenVariantStyle":"js/modules/subjectsList/toggleChosenVariantStyle.js","./filterHtmlElements":"js/modules/filter/filterHtmlElements.js"}],"js/modules/filter/filterApplying.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterApplying = filterApplying;
exports.sortedBy = exports.filters = void 0;
var _filterHtmlElements = require("./filterHtmlElements");
var _toggleFilter = _interopRequireDefault(require("./toggleFilter"));
var _subject = require("../htmlElements/subject");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
  //toggleFilter();
}
function setFilters(newFilters) {
  filters.splice(0, filters.length);
  filters.push.apply(filters, _toConsumableArray(newFilters));
}
function setSortedBy(newSortedBy) {
  exports.sortedBy = sortedBy = newSortedBy;
}
},{"./filterHtmlElements":"js/modules/filter/filterHtmlElements.js","./toggleFilter":"js/modules/filter/toggleFilter.js","../htmlElements/subject":"js/modules/htmlElements/subject.js"}],"js/modules/htmlElements/subject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAllSubject = setAllSubject;
exports.setSbjectOnCategory = setSbjectOnCategory;
exports.setSubjectOnFilter = setSubjectOnFilter;
var _category = require("./category");
var _categoryData = require("../testData/categoryData");
var _filterApplying = require("../filter/filterApplying");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var subjectUl = document.querySelector(".subject_container").querySelector("ul");
function generateSubject(subjectName, result) {
  return "<li class=\"subject ".concat(result, "\">").concat(subjectName, "</li>");
}
function setAllSubject() {
  clearSubjectList();
  _category.categoryList.forEach(function (category) {
    category.subjectsName.forEach(function (subject) {
      subjectUl.insertAdjacentHTML("beforeend", generateSubject(subject, subjectResult(subject)));
    });
  });
  setSubjectOnFilter();
}
function setSbjectOnCategory(categoryName) {
  clearSubjectList();
  _category.categoryList.find(function (category) {
    return category.categoryName === categoryName;
  }).subjectsName.forEach(function (subject) {
    subjectUl.insertAdjacentHTML("beforeend", generateSubject(subject, subjectResult(subject)));
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
  subjectUl.append.apply(subjectUl, _toConsumableArray(list));
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
},{"./category":"js/modules/htmlElements/category.js","../testData/categoryData":"js/modules/testData/categoryData.js","../filter/filterApplying":"js/modules/filter/filterApplying.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scss/modules/categoryAndSubjctList.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scss/modules/filter.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./modules/reset.scss":"scss/modules/reset.scss","./modules/header.scss":"scss/modules/header.scss","./modules/trainerSection.scss":"scss/modules/trainerSection.scss","./modules/categoryAndSubjctList.scss":"scss/modules/categoryAndSubjctList.scss","./modules/filter.scss":"scss/modules/filter.scss","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/modules/nav/changeNavBtnStyle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
    if (navBtns.includes(event.target)) {
      navBtns.forEach(function (btn) {
        return btn.classList.remove("selected_section_btn");
      });
      event.target.classList.add("selected_section_btn");
    }
    return;
  });
}
var _default = exports.default = changeNavBtnStyle;
},{}],"js/modules/trainerSection/formEstimation.js":[function(require,module,exports) {
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
},{"../testData/categoryData":"js/modules/testData/categoryData.js"}],"js/modules/htmlElements/addNextBtn.js":[function(require,module,exports) {
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
var _rewriteSubjectResult = require("../htmlElements/rewriteSubjectResult");
var _addNextBtn = _interopRequireDefault(require("../htmlElements/addNextBtn"));
var _trainerQA = require("../htmlElements/trainerQA");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function sendForm(inputsForEstimation, showMessage) {
  if ((0, _formEstimation.default)(inputsForEstimation)) {
    showMessage("Все правильно, молодец!");
    (0, _rewriteSubjectResult.rewriteSubjectResult)("solved");
    if (_rewriteSubjectResult.activeSubject.nextElementSibling) {
      (0, _addNextBtn.default)(_trainerQA.taskForm);
    }
    return;
  }
  showMessage("Неправильно! Можете попробовать снова.", true);
  (0, _rewriteSubjectResult.rewriteSubjectResult)("failed");
}
var _default = exports.default = sendForm;
},{"./formEstimation":"js/modules/trainerSection/formEstimation.js","../htmlElements/rewriteSubjectResult":"js/modules/htmlElements/rewriteSubjectResult.js","../htmlElements/addNextBtn":"js/modules/htmlElements/addNextBtn.js","../htmlElements/trainerQA":"js/modules/htmlElements/trainerQA.js"}],"js/modules/trainerSection/formValidator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _setTrainerMessage = require("../htmlElements/setTrainerMessage");
var _cleanTrainerMessage = _interopRequireDefault(require("../htmlElements/cleanTrainerMessage"));
var _formEstimation = _interopRequireDefault(require("./formEstimation"));
var _sendForm = _interopRequireDefault(require("./sendForm"));
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
    (0, _setTrainerMessage.setTrainerMessage)("Заполните все поля", true);
    return;
  }
  console.log("результат принят! Молодец!");
  (0, _sendForm.default)(checkedInputs, _setTrainerMessage.setTrainerMessage);
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
},{"../htmlElements/setTrainerMessage":"js/modules/htmlElements/setTrainerMessage.js","../htmlElements/cleanTrainerMessage":"js/modules/htmlElements/cleanTrainerMessage.js","./formEstimation":"js/modules/trainerSection/formEstimation.js","./sendForm":"js/modules/trainerSection/sendForm.js"}],"js/modules/trainerSection/changeSubjectOnNextBtn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _rewriteSubjectResult = require("../htmlElements/rewriteSubjectResult");
var _showTasks = require("./showTasks");
var _trainerQA = require("../htmlElements/trainerQA");
function changeSubjectOnNextBtn() {
  _rewriteSubjectResult.activeSubject.classList.remove("subject_selected");
  _rewriteSubjectResult.activeSubject.nextElementSibling.classList.add("subject_selected");
  (0, _showTasks.showTasks)();
  (0, _trainerQA.setAllQA)(_rewriteSubjectResult.activeSubject.nextElementSibling);
  (0, _rewriteSubjectResult.getActiveSubject)(_rewriteSubjectResult.activeSubject.nextElementSibling);
}
var _default = exports.default = changeSubjectOnNextBtn;
},{"../htmlElements/rewriteSubjectResult":"js/modules/htmlElements/rewriteSubjectResult.js","./showTasks":"js/modules/trainerSection/showTasks.js","../htmlElements/trainerQA":"js/modules/htmlElements/trainerQA.js"}],"js/modules/filter/checkFilterData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var filterSortElement = document.querySelector(".filter_sort");
var options = _toConsumableArray(filterSortElement.querySelectorAll("option"));
function checkFilterData(chengeInput) {
  if (chengeInput.classList.contains("filter_checkbox")) {
    var optionForHide = options.filter(function (optionElement) {
      return optionElement.value === chengeInput.value;
    })[0];
    if (optionForHide) {
      optionForHide.classList.toggle("hidden");
    }
    if (!chengeInput.checked) {
      if (filterSortElement.value === chengeInput.value) {
        filterSortElement.value = "alphabet";
      }
    }
  }
}
var _default = exports.default = checkFilterData;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _category = require("./modules/htmlElements/category.js");
var _subject = require("./modules/htmlElements/subject.js");
var _toggleChosenVariantStyle = require("./modules/subjectsList/toggleChosenVariantStyle.js");
require("../scss/main.scss");
var _changeNavBtnStyle = _interopRequireDefault(require("./modules/nav/changeNavBtnStyle"));
var _toggleFilter = _interopRequireDefault(require("../js/modules/filter/toggleFilter.js"));
var _formValidator = _interopRequireDefault(require("./modules/trainerSection/formValidator.js"));
var _trainerQA = require("./modules/htmlElements/trainerQA.js");
var _changeSubjectOnNextBtn = _interopRequireDefault(require("./modules/trainerSection/changeSubjectOnNextBtn.js"));
var _filterHtmlElements = require("./modules/filter/filterHtmlElements.js");
var _checkFilterData = _interopRequireDefault(require("./modules/filter/checkFilterData.js"));
var _filterApplying = require("./modules/filter/filterApplying.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _category.setCategory)();
(0, _subject.setAllSubject)();
(0, _changeNavBtnStyle.default)();
(0, _toggleChosenVariantStyle.addEventListenerOnTrainerList)();
var mainContainer = document.querySelector(".main_container");
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
_trainerQA.taskForm.addEventListener("click", function (event) {
  if (event.target.classList.contains("next_btn")) {
    (0, _changeSubjectOnNextBtn.default)();
  }
});
_filterHtmlElements.filterContainer.addEventListener("change", function (event) {
  (0, _checkFilterData.default)(event.target);
});
},{"./modules/htmlElements/category.js":"js/modules/htmlElements/category.js","./modules/htmlElements/subject.js":"js/modules/htmlElements/subject.js","./modules/subjectsList/toggleChosenVariantStyle.js":"js/modules/subjectsList/toggleChosenVariantStyle.js","../scss/main.scss":"scss/main.scss","./modules/nav/changeNavBtnStyle":"js/modules/nav/changeNavBtnStyle.js","../js/modules/filter/toggleFilter.js":"js/modules/filter/toggleFilter.js","./modules/trainerSection/formValidator.js":"js/modules/trainerSection/formValidator.js","./modules/htmlElements/trainerQA.js":"js/modules/htmlElements/trainerQA.js","./modules/trainerSection/changeSubjectOnNextBtn.js":"js/modules/trainerSection/changeSubjectOnNextBtn.js","./modules/filter/filterHtmlElements.js":"js/modules/filter/filterHtmlElements.js","./modules/filter/checkFilterData.js":"js/modules/filter/checkFilterData.js","./modules/filter/filterApplying.js":"js/modules/filter/filterApplying.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54874" + '/');
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