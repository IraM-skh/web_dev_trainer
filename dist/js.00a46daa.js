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
exports.subject = exports.question = exports.outputVariant = exports.correctAnsvers = exports.category = exports.args = void 0;
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
var userResults = {
  1: 3124
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
},{"../testData/categoryData":"js/modules/testData/categoryData.js"}],"js/modules/htmlElements/subject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAllSubject = setAllSubject;
exports.setSbjectOnCategory = setSbjectOnCategory;
var _category = require("./category");
var subjectUl = document.querySelector(".subject_container").querySelector("ul");
function generateSubject(subjectName) {
  return "<li class=\"subject\">".concat(subjectName, "</li>");
}
function setAllSubject() {
  clearSubjectList();
  _category.categoryList.forEach(function (category) {
    category.subjectsName.forEach(function (subject) {
      subjectUl.insertAdjacentHTML("beforeend", generateSubject(subject));
    });
  });
}
function setSbjectOnCategory(categoryName) {
  clearSubjectList();
  _category.categoryList.find(function (category) {
    return category.categoryName === categoryName;
  }).subjectsName.forEach(function (subject) {
    subjectUl.insertAdjacentHTML("beforeend", generateSubject(subject));
  });
}
function clearSubjectList() {
  document.querySelectorAll(".subject").forEach(function (subjectEl) {
    subjectEl.remove();
  });
}
},{"./category":"js/modules/htmlElements/category.js"}],"js/modules/trainerSection/showTasks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var chooseTrainerMessage = document.querySelector(".choose_trainer_message");
var taskForm = document.querySelector(".task_form");
function showTasks() {
  chooseTrainerMessage.classList.add("hidden");
  taskForm.classList.remove("hidden");
}
var _default = exports.default = showTasks;
},{}],"js/modules/htmlElements/trainerQA.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _categoryData = require("../testData/categoryData");
var _category = require("./category");
var questionList = JSON.parse(_categoryData.question);
var subjectList = JSON.parse(_categoryData.subject);
var argsList = JSON.parse(_categoryData.args);
var outputVariantList = JSON.parse(_categoryData.outputVariant);
var chengeData = ["Да", "Нет"];
var taskForm = document.querySelector(".task_form");
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
var sendAnswersBtn = "<button class=\"send_answers_btn submit_bnt\" type=\"submit\">\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C</button>";
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
var _default = exports.default = setAllQA;
},{"../testData/categoryData":"js/modules/testData/categoryData.js","./category":"js/modules/htmlElements/category.js"}],"js/modules/subjectsList/toggleChosenVariantStyle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEventListenerOnTrainerList = addEventListenerOnTrainerList;
exports.trainerListContainer = void 0;
var _showTasks = _interopRequireDefault(require("../trainerSection/showTasks"));
var _trainerQA = _interopRequireDefault(require("../htmlElements/trainerQA"));
var _subject = require("../htmlElements/subject");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var trainerListContainer = exports.trainerListContainer = document.querySelector(".trainer_list_container");
var categoryContainer = document.querySelector(".category_container");
var subjectContainer = document.querySelector(".subject_container");
function addEventListenerOnTrainerList() {
  var category = _toConsumableArray(document.querySelectorAll(".category"));
  trainerListContainer.addEventListener("click", function (event) {
    if (category.includes(event.target)) {
      toggleActiveClassInList(category, "category_selected", event.target);
      event.target.classList.contains("category_all") ? (0, _subject.setAllSubject)() : (0, _subject.setSbjectOnCategory)(event.target.textContent);
      return;
    }
    if (event.target.classList.contains("subject")) {
      var subject = _toConsumableArray(document.querySelectorAll(".subject"));
      toggleActiveClassInList(subject, "subject_selected", event.target);
      (0, _showTasks.default)();
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
},{"../trainerSection/showTasks":"js/modules/trainerSection/showTasks.js","../htmlElements/trainerQA":"js/modules/htmlElements/trainerQA.js","../htmlElements/subject":"js/modules/htmlElements/subject.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./modules/reset.scss":"scss/modules/reset.scss","./modules/header.scss":"scss/modules/header.scss","./modules/trainerSection.scss":"scss/modules/trainerSection.scss","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/modules/nav/changeNavBtnStyle.js":[function(require,module,exports) {
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
},{}],"js/modules/filter/toggleFilter.js":[function(require,module,exports) {
"use strict";

var _toggleChosenVariantStyle = require("../subjectsList/toggleChosenVariantStyle");
var filterBtn = document.querySelector(".filter_btn svg");
var filterContainer = document.querySelector(".filter_container");
filterBtn.addEventListener("click", function (event) {
  filterContainer.classList.toggle("hidden");
  _toggleChosenVariantStyle.trainerListContainer.classList.toggle("hidden");
});
},{"../subjectsList/toggleChosenVariantStyle":"js/modules/subjectsList/toggleChosenVariantStyle.js"}],"js/modules/htmlElements/setTrainerMessage.js":[function(require,module,exports) {
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
},{"./setTrainerMessage":"js/modules/htmlElements/setTrainerMessage.js"}],"js/modules/trainerSection/formEstimation.js":[function(require,module,exports) {
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
},{"../testData/categoryData":"js/modules/testData/categoryData.js"}],"js/modules/trainerSection/sendForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _formEstimation = _interopRequireDefault(require("./formEstimation"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function sendForm(inputsForEstimation, showMessage) {
  if ((0, _formEstimation.default)(inputsForEstimation)) {
    showMessage("Все правильно, молодец!");
    return;
  }
  showMessage("Неправильно! Можете попробовать снова.", true);
}
var _default = exports.default = sendForm;
},{"./formEstimation":"js/modules/trainerSection/formEstimation.js"}],"js/modules/trainerSection/formValidator.js":[function(require,module,exports) {
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
},{"../htmlElements/setTrainerMessage":"js/modules/htmlElements/setTrainerMessage.js","../htmlElements/cleanTrainerMessage":"js/modules/htmlElements/cleanTrainerMessage.js","./formEstimation":"js/modules/trainerSection/formEstimation.js","./sendForm":"js/modules/trainerSection/sendForm.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _category = require("./modules/htmlElements/category.js");
var _subject = require("./modules/htmlElements/subject.js");
var _toggleChosenVariantStyle = require("./modules/subjectsList/toggleChosenVariantStyle.js");
require("../scss/main.scss");
var _changeNavBtnStyle = _interopRequireDefault(require("./modules/nav/changeNavBtnStyle"));
require("../js/modules/filter/toggleFilter.js");
var _formValidator = _interopRequireDefault(require("./modules/trainerSection/formValidator.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _category.setCategory)();
(0, _subject.setAllSubject)();
(0, _changeNavBtnStyle.default)();
(0, _toggleChosenVariantStyle.addEventListenerOnTrainerList)();
var mainContainer = document.querySelector(".main_container");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("filter_container")) {
    console.log("фильтр");
  }
  if (event.target.classList.contains("task_form")) {
    (0, _formValidator.default)(event.target);
  }
});
},{"./modules/htmlElements/category.js":"js/modules/htmlElements/category.js","./modules/htmlElements/subject.js":"js/modules/htmlElements/subject.js","./modules/subjectsList/toggleChosenVariantStyle.js":"js/modules/subjectsList/toggleChosenVariantStyle.js","../scss/main.scss":"scss/main.scss","./modules/nav/changeNavBtnStyle":"js/modules/nav/changeNavBtnStyle.js","../js/modules/filter/toggleFilter.js":"js/modules/filter/toggleFilter.js","./modules/trainerSection/formValidator.js":"js/modules/trainerSection/formValidator.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53539" + '/');
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