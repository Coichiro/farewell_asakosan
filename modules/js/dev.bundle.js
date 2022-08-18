/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



function init() {
  var TextScramble = /*#__PURE__*/function () {
    function TextScramble(el) {
      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TextScramble);

      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.update = this.update.bind(this);
    }

    (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TextScramble, [{
      key: "setText",
      value: function setText(newText) {
        var _this = this;

        var oldText = this.el.innerText;
        var length = Math.max(oldText.length, newText.length);
        var promise = new Promise(function (resolve) {
          return _this.resolve = resolve;
        });
        this.queue = [];

        for (var i = 0; i < length; i++) {
          var from = oldText[i] || '';
          var to = newText[i] || '';
          var start = Math.floor(Math.random() * 40);
          var end = start + Math.floor(Math.random() * 40);
          this.queue.push({
            from: from,
            to: to,
            start: start,
            end: end
          });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }
    }, {
      key: "update",
      value: function update() {
        var output = '';
        var complete = 0;

        for (var i = 0, n = this.queue.length; i < n; i++) {
          var _this$queue$i = this.queue[i],
              from = _this$queue$i.from,
              to = _this$queue$i.to,
              start = _this$queue$i.start,
              end = _this$queue$i.end,
              _char = _this$queue$i["char"];

          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!_char || Math.random() < 0.28) {
              _char = this.randomChar();
              this.queue[i]["char"] = _char;
            }

            output += "<span class=\"dud\">".concat(_char, "</span>");
          } else {
            output += from;
          }
        }

        this.el.innerHTML = output;

        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }
    }, {
      key: "randomChar",
      value: function randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }]);

    return TextScramble;
  }();

  var phrases = ['初めに、', 'お勤めおつかれさまでした。', 'また、', '会社にも、', '自分にも', '良い刺激を与えて頂けたこと', '感謝しています。', 'デザイン業務だけでなく、', '新規事業の', '立ち上げから拡大まで、', 'かなり大変な業務を', '精度高く', 'マネジメントしている姿は、', '自分の目標でした。', '(今でもそうですけど)。', '個人的には、', 'コーディングを', '一緒にやれたらなーと', '思っていましたが、', '仕事のつまり具合が', 'ヤバそうだったので、', '声をかけれなかったことに', '悔いが残っています。', '今後、', 'ご家庭で、', 'お仕事をされるそうですが、', 'お体にお気をつけて', 'お過ごしください。', '今まで本当に', 'ありがとうございました。', '-- ループします --'];
  var el = document.querySelector('.text');
  var fx = new TextScramble(el);
  var counter = 0;

  var next = function next() {
    fx.setText(phrases[counter]).then(function () {
      setTimeout(next, 800);
    });
    counter = (counter + 1) % phrases.length;
  };

  next();
}

document.addEventListener('DOMContentLoaded', init);

/***/ }),

/***/ "./sass/style.sass":
/*!*************************!*\
  !*** ./sass/style.sass ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/sass/style.sass */ "./sass/style.sass");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/app */ "./js/app.js");
/*
  Styles 
/*---------------------------------------*/

/*
  JS Modules
/*---------------------------------------*/


}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUosQ0FBaUJDLEVBQWpCLENBQVg7RUFFQSxJQUFJb0MsT0FBTyxHQUFHLENBQWQ7O0VBQ0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtJQUNqQkYsRUFBRSxDQUFDRyxPQUFILENBQVdOLE9BQU8sQ0FBQ0ksT0FBRCxDQUFsQixFQUE2QkcsSUFBN0IsQ0FBa0MsWUFBTTtNQUN0Q0MsVUFBVSxDQUFDSCxJQUFELEVBQU8sR0FBUCxDQUFWO0lBQ0QsQ0FGRDtJQUdBRCxPQUFPLEdBQUcsQ0FBQ0EsT0FBTyxHQUFHLENBQVgsSUFBZ0JKLE9BQU8sQ0FBQ3pCLE1BQWxDO0VBQ0QsQ0FMRDs7RUFPQThCLElBQUk7QUFDSDs7QUFDREosUUFBUSxDQUFDUSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMzQyxJQUE5Qzs7Ozs7Ozs7Ozs7QUN2R0E7Ozs7Ozs7Ozs7Ozs7OztBQ0FlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7O1VDakJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEEsOENBQThDOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2tfZm9yX3N0YXRpYy8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2Zvcl9zdGF0aWMvLi9zYXNzL3N0eWxlLnNhc3M/YzZiOSIsIndlYnBhY2s6Ly93ZWJwYWNrX2Zvcl9zdGF0aWMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vd2VicGFja19mb3Jfc3RhdGljLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZm9yX3N0YXRpYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrX2Zvcl9zdGF0aWMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2tfZm9yX3N0YXRpYy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2tfZm9yX3N0YXRpYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2tfZm9yX3N0YXRpYy8uL2VudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGluaXQgKCkge1xuXG5jbGFzcyBUZXh0U2NyYW1ibGUge1xuICBjb25zdHJ1Y3RvcihlbCkge1xuICAgIHRoaXMuZWwgPSBlbFxuICAgIHRoaXMuY2hhcnMgPSAnITw+LV9cXFxcL1tde33igJQ9KypePyNfX19fX19fXydcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcylcbiAgfVxuICBzZXRUZXh0KG5ld1RleHQpIHtcbiAgICBjb25zdCBvbGRUZXh0ID0gdGhpcy5lbC5pbm5lclRleHRcbiAgICBjb25zdCBsZW5ndGggPSBNYXRoLm1heChvbGRUZXh0Lmxlbmd0aCwgbmV3VGV4dC5sZW5ndGgpXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB0aGlzLnJlc29sdmUgPSByZXNvbHZlKVxuICAgIHRoaXMucXVldWUgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGZyb20gPSBvbGRUZXh0W2ldIHx8ICcnXG4gICAgICBjb25zdCB0byA9IG5ld1RleHRbaV0gfHwgJydcbiAgICAgIGNvbnN0IHN0YXJ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNDApXG4gICAgICBjb25zdCBlbmQgPSBzdGFydCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQwKVxuICAgICAgdGhpcy5xdWV1ZS5wdXNoKHsgZnJvbSwgdG8sIHN0YXJ0LCBlbmQgfSlcbiAgICB9XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZVJlcXVlc3QpXG4gICAgdGhpcy5mcmFtZSA9IDBcbiAgICB0aGlzLnVwZGF0ZSgpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuICB1cGRhdGUoKSB7XG4gICAgbGV0IG91dHB1dCA9ICcnXG4gICAgbGV0IGNvbXBsZXRlID0gMFxuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdGhpcy5xdWV1ZS5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIGxldCB7IGZyb20sIHRvLCBzdGFydCwgZW5kLCBjaGFyIH0gPSB0aGlzLnF1ZXVlW2ldXG4gICAgICBpZiAodGhpcy5mcmFtZSA+PSBlbmQpIHtcbiAgICAgICAgY29tcGxldGUrK1xuICAgICAgICBvdXRwdXQgKz0gdG9cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5mcmFtZSA+PSBzdGFydCkge1xuICAgICAgICBpZiAoIWNoYXIgfHwgTWF0aC5yYW5kb20oKSA8IDAuMjgpIHtcbiAgICAgICAgICBjaGFyID0gdGhpcy5yYW5kb21DaGFyKClcbiAgICAgICAgICB0aGlzLnF1ZXVlW2ldLmNoYXIgPSBjaGFyXG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0ICs9IGA8c3BhbiBjbGFzcz1cImR1ZFwiPiR7Y2hhcn08L3NwYW4+YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ICs9IGZyb21cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSBvdXRwdXRcbiAgICBpZiAoY29tcGxldGUgPT09IHRoaXMucXVldWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlc29sdmUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZyYW1lUmVxdWVzdCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSlcbiAgICAgIHRoaXMuZnJhbWUrK1xuICAgIH1cbiAgfVxuICByYW5kb21DaGFyKCkge1xuICAgIHJldHVybiB0aGlzLmNoYXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY2hhcnMubGVuZ3RoKV1cbiAgfVxufVxuXG5jb25zdCBwaHJhc2VzID0gW1xuICAn5Yid44KB44Gr44CBJyxcbiAgJ+OBiuWLpOOCgeOBiuOBpOOBi+OCjOOBleOBvuOBp+OBl+OBn+OAgicsXG4gICfjgb7jgZ/jgIEnLFxuICAn5Lya56S+44Gr44KC44CBJyxcbiAgJ+iHquWIhuOBq+OCgicsXG4gICfoia/jgYTliLrmv4DjgpLkuI7jgYjjgabpoILjgZHjgZ/jgZPjgagnLFxuICAn5oSf6Kyd44GX44Gm44GE44G+44GZ44CCJyxcbiAgJ+ODh+OCtuOCpOODs+alreWLmeOBoOOBkeOBp+OBquOBj+OAgScsXG4gICfmlrDopo/kuovmpa3jga4nLFxuICAn56uL44Gh5LiK44GS44GL44KJ5ouh5aSn44G+44Gn44CBJyxcbiAgJ+OBi+OBquOCiuWkp+WkieOBqualreWLmeOCkicsXG4gICfnsr7luqbpq5jjgY8nLFxuICAn44Oe44ON44K444Oh44Oz44OI44GX44Gm44GE44KL5ae/44Gv44CBJyxcbiAgJ+iHquWIhuOBruebruaomeOBp+OBl+OBn+OAgicsXG4gICco5LuK44Gn44KC44Gd44GG44Gn44GZ44GR44GpKeOAgicsXG4gICflgIvkurrnmoTjgavjga/jgIEnLFxuICAn44Kz44O844OH44Kj44Oz44Kw44KSJyxcbiAgJ+S4gOe3kuOBq+OChOOCjOOBn+OCieOBquODvOOBqCcsXG4gICfmgJ3jgaPjgabjgYTjgb7jgZfjgZ/jgYzjgIEnLFxuICAn5LuV5LqL44Gu44Gk44G+44KK5YW35ZCI44GMJyxcbiAgJ+ODpOODkOOBneOBhuOBoOOBo+OBn+OBruOBp+OAgScsXG4gICflo7DjgpLjgYvjgZHjgozjgarjgYvjgaPjgZ/jgZPjgajjgasnLFxuICAn5oKU44GE44GM5q6L44Gj44Gm44GE44G+44GZ44CCJyxcbiAgJ+S7iuW+jOOAgScsXG4gICfjgZTlrrbluq3jgafjgIEnLFxuICAn44GK5LuV5LqL44KS44GV44KM44KL44Gd44GG44Gn44GZ44GM44CBJyxcbiAgJ+OBiuS9k+OBq+OBiuawl+OCkuOBpOOBkeOBpicsXG4gICfjgYrpgY7jgZTjgZfjgY/jgaDjgZXjgYTjgIInLFxuICAn5LuK44G+44Gn5pys5b2T44GrJyxcbiAgJ+OBguOCiuOBjOOBqOOBhuOBlOOBluOBhOOBvuOBl+OBn+OAgicsXG4gICctLSDjg6vjg7zjg5fjgZfjgb7jgZkgLS0nXG5dXG5cbmNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQnKVxuY29uc3QgZnggPSBuZXcgVGV4dFNjcmFtYmxlKGVsKVxuXG5sZXQgY291bnRlciA9IDBcbmNvbnN0IG5leHQgPSAoKSA9PiB7XG4gIGZ4LnNldFRleHQocGhyYXNlc1tjb3VudGVyXSkudGhlbigoKSA9PiB7XG4gICAgc2V0VGltZW91dChuZXh0LCA4MDApXG4gIH0pXG4gIGNvdW50ZXIgPSAoY291bnRlciArIDEpICUgcGhyYXNlcy5sZW5ndGhcbn1cblxubmV4dCgpXG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdClcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcbiAgU3R5bGVzIFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaW1wb3J0IFwiQC9zYXNzL3N0eWxlLnNhc3NcIlxuXG4vKlxuICBKUyBNb2R1bGVzXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQgXCJAL2pzL2FwcFwiXG4iXSwibmFtZXMiOlsiaW5pdCIsIlRleHRTY3JhbWJsZSIsImVsIiwiY2hhcnMiLCJ1cGRhdGUiLCJiaW5kIiwibmV3VGV4dCIsIm9sZFRleHQiLCJpbm5lclRleHQiLCJsZW5ndGgiLCJNYXRoIiwibWF4IiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicXVldWUiLCJpIiwiZnJvbSIsInRvIiwic3RhcnQiLCJmbG9vciIsInJhbmRvbSIsImVuZCIsInB1c2giLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImZyYW1lUmVxdWVzdCIsImZyYW1lIiwib3V0cHV0IiwiY29tcGxldGUiLCJuIiwiY2hhciIsInJhbmRvbUNoYXIiLCJpbm5lckhUTUwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwaHJhc2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZngiLCJjb3VudGVyIiwibmV4dCIsInNldFRleHQiLCJ0aGVuIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9