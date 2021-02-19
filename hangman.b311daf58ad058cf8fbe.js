(self["webpackChunkhangman_game"] = self["webpackChunkhangman_game"] || []).push([["hangman"],{

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ ((module) => {

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
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./src/hangman.js":
/*!************************!*\
  !*** ./src/hangman.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hangman)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Hangman = /*#__PURE__*/function () {
  function Hangman(word, remainingGuesses) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Hangman);

    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
    console.log(this.word.join(''));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Hangman, [{
    key: "calculateStatus",
    value: function calculateStatus() {
      var _this = this;

      var finished = this.word.every(function (letter) {
        return _this.guessedLetters.includes(letter) || letter === ' ';
      });

      if (this.remainingGuesses === 0) {
        this.status = 'failed';
      } else if (finished) {
        this.status = 'finished';
      } else {
        this.status = 'playing';
      }
    }
  }, {
    key: "statusMessage",
    get: function get() {
      if (this.status === 'playing') {
        return "Guesses left: ".concat(this.remainingGuesses);
      } else if (this.status === 'failed') {
        return "Nice try! the word was ".concat(this.word.join(''));
      } else if (this.status === 'finished') {
        return "Great work! You guessed the word";
      }
    }
  }, {
    key: "puzzle",
    get: function get() {
      var _this2 = this;

      var puzzle = '';
      this.word.forEach(function (letter) {
        return _this2.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*';
      });
      return puzzle;
    }
  }, {
    key: "makeGuess",
    value: function makeGuess(guess) {
      guess = guess.toLowerCase();
      var isUnique = !this.guessedLetters.includes(guess);
      var isBadGuess = !this.word.includes(guess);

      if (this.status !== 'playing') {
        return;
      }

      if (isUnique) {
        this.guessedLetters.push(guess);
      }

      if (isUnique && isBadGuess) {
        this.remainingGuesses--;
      }

      this.calculateStatus();
    }
  }]);

  return Hangman;
}();



/***/ })

},
0,[["./src/hangman.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYW5nbWFuLWdhbWUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9oYW5nbWFuLWdhbWUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9oYW5nbWFuLWdhbWUvLi9zcmMvaGFuZ21hbi5qcyJdLCJuYW1lcyI6WyJIYW5nbWFuIiwid29yZCIsInJlbWFpbmluZ0d1ZXNzZXMiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwiZ3Vlc3NlZExldHRlcnMiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiam9pbiIsImZpbmlzaGVkIiwiZXZlcnkiLCJsZXR0ZXIiLCJpbmNsdWRlcyIsInB1enpsZSIsImZvckVhY2giLCJndWVzcyIsImlzVW5pcXVlIiwiaXNCYWRHdWVzcyIsInB1c2giLCJjYWxjdWxhdGVTdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDaEJNQSxPO0FBQ0YsbUJBQVlDLElBQVosRUFBa0JDLGdCQUFsQixFQUFvQztBQUFBOztBQUNoQyxTQUFLRCxJQUFMLEdBQVlBLElBQUksQ0FBQ0UsV0FBTCxHQUFtQkMsS0FBbkIsQ0FBeUIsRUFBekIsQ0FBWjtBQUNBLFNBQUtGLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLRyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLFNBQWQ7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS1AsSUFBTCxDQUFVUSxJQUFWLENBQWUsRUFBZixDQUFaO0FBQ0g7Ozs7V0FFRCwyQkFBa0I7QUFBQTs7QUFDZCxVQUFNQyxRQUFRLEdBQUcsS0FBS1QsSUFBTCxDQUFVVSxLQUFWLENBQWdCLFVBQUFDLE1BQU07QUFBQSxlQUFJLEtBQUksQ0FBQ1AsY0FBTCxDQUFvQlEsUUFBcEIsQ0FBNkJELE1BQTdCLEtBQXdDQSxNQUFNLEtBQUssR0FBdkQ7QUFBQSxPQUF0QixDQUFqQjs7QUFFQSxVQUFHLEtBQUtWLGdCQUFMLEtBQTBCLENBQTdCLEVBQWdDO0FBQzVCLGFBQUtJLE1BQUwsR0FBYyxRQUFkO0FBQ0gsT0FGRCxNQUdLLElBQUlJLFFBQUosRUFBYztBQUNmLGFBQUtKLE1BQUwsR0FBYyxVQUFkO0FBQ0gsT0FGSSxNQUdBO0FBQ0QsYUFBS0EsTUFBTCxHQUFjLFNBQWQ7QUFDSDtBQUNKOzs7U0FFRCxlQUFvQjtBQUNoQixVQUFJLEtBQUtBLE1BQUwsS0FBZ0IsU0FBcEIsRUFBK0I7QUFDM0IsdUNBQXdCLEtBQUtKLGdCQUE3QjtBQUNILE9BRkQsTUFHSyxJQUFJLEtBQUtJLE1BQUwsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDL0IsZ0RBQWlDLEtBQUtMLElBQUwsQ0FBVVEsSUFBVixDQUFlLEVBQWYsQ0FBakM7QUFDSCxPQUZJLE1BR0EsSUFBSSxLQUFLSCxNQUFMLEtBQWdCLFVBQXBCLEVBQStCO0FBQ2hDO0FBQ0g7QUFDSjs7O1NBRUQsZUFBYTtBQUFBOztBQUNULFVBQUlRLE1BQU0sR0FBRyxFQUFiO0FBQ0EsV0FBS2IsSUFBTCxDQUFVYyxPQUFWLENBQWtCLFVBQUFILE1BQU07QUFBQSxlQUFJLE1BQUksQ0FBQ1AsY0FBTCxDQUFvQlEsUUFBcEIsQ0FBNkJELE1BQTdCLEtBQXdDQSxNQUFNLEtBQUssR0FBbkQsR0FBeURFLE1BQU0sSUFBSUYsTUFBbkUsR0FBNEVFLE1BQU0sSUFBSSxHQUExRjtBQUFBLE9BQXhCO0FBQ0EsYUFBT0EsTUFBUDtBQUNIOzs7V0FFRCxtQkFBVUUsS0FBVixFQUFpQjtBQUNiQSxXQUFLLEdBQUdBLEtBQUssQ0FBQ2IsV0FBTixFQUFSO0FBQ0EsVUFBTWMsUUFBUSxHQUFHLENBQUMsS0FBS1osY0FBTCxDQUFvQlEsUUFBcEIsQ0FBNkJHLEtBQTdCLENBQWxCO0FBQ0EsVUFBTUUsVUFBVSxHQUFHLENBQUMsS0FBS2pCLElBQUwsQ0FBVVksUUFBVixDQUFtQkcsS0FBbkIsQ0FBcEI7O0FBRUEsVUFBSSxLQUFLVixNQUFMLEtBQWdCLFNBQXBCLEVBQStCO0FBQzNCO0FBQ0g7O0FBRUQsVUFBSVcsUUFBSixFQUFjO0FBQ1YsYUFBS1osY0FBTCxDQUFvQmMsSUFBcEIsQ0FBeUJILEtBQXpCO0FBQ0g7O0FBRUQsVUFBSUMsUUFBUSxJQUFJQyxVQUFoQixFQUE0QjtBQUN4QixhQUFLaEIsZ0JBQUw7QUFDSDs7QUFFRCxXQUFLa0IsZUFBTDtBQUNIIiwiZmlsZSI6ImhhbmdtYW4uYjMxMWRhZjU4YWQwNThjZjhmYmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImNsYXNzIEhhbmdtYW4ge1xuICAgIGNvbnN0cnVjdG9yKHdvcmQsIHJlbWFpbmluZ0d1ZXNzZXMpIHtcbiAgICAgICAgdGhpcy53b3JkID0gd29yZC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcnKTtcbiAgICAgICAgdGhpcy5yZW1haW5pbmdHdWVzc2VzID0gcmVtYWluaW5nR3Vlc3NlcztcbiAgICAgICAgdGhpcy5ndWVzc2VkTGV0dGVycyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXR1cyA9ICdwbGF5aW5nJztcbiAgICAgICAgY29uc29sZS5sb2codGhpcy53b3JkLmpvaW4oJycpKVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZVN0YXR1cygpIHtcbiAgICAgICAgY29uc3QgZmluaXNoZWQgPSB0aGlzLndvcmQuZXZlcnkobGV0dGVyID0+IHRoaXMuZ3Vlc3NlZExldHRlcnMuaW5jbHVkZXMobGV0dGVyKSB8fCBsZXR0ZXIgPT09ICcgJyk7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLnJlbWFpbmluZ0d1ZXNzZXMgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJ2ZhaWxlZCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmluaXNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJ2ZpbmlzaGVkJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJ3BsYXlpbmcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHN0YXR1c01lc3NhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gJ3BsYXlpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gYEd1ZXNzZXMgbGVmdDogJHt0aGlzLnJlbWFpbmluZ0d1ZXNzZXN9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBgTmljZSB0cnkhIHRoZSB3b3JkIHdhcyAke3RoaXMud29yZC5qb2luKCcnKX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdHVzID09PSAnZmluaXNoZWQnKXtcbiAgICAgICAgICAgIHJldHVybiBgR3JlYXQgd29yayEgWW91IGd1ZXNzZWQgdGhlIHdvcmRgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHB1enpsZSgpIHtcbiAgICAgICAgbGV0IHB1enpsZSA9ICcnO1xuICAgICAgICB0aGlzLndvcmQuZm9yRWFjaChsZXR0ZXIgPT4gdGhpcy5ndWVzc2VkTGV0dGVycy5pbmNsdWRlcyhsZXR0ZXIpIHx8IGxldHRlciA9PT0gJyAnID8gcHV6emxlICs9IGxldHRlciA6IHB1enpsZSArPSAnKicpO1xuICAgICAgICByZXR1cm4gcHV6emxlO1xuICAgIH1cblxuICAgIG1ha2VHdWVzcyhndWVzcykge1xuICAgICAgICBndWVzcyA9IGd1ZXNzLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGlzVW5pcXVlID0gIXRoaXMuZ3Vlc3NlZExldHRlcnMuaW5jbHVkZXMoZ3Vlc3MpO1xuICAgICAgICBjb25zdCBpc0JhZEd1ZXNzID0gIXRoaXMud29yZC5pbmNsdWRlcyhndWVzcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzICE9PSAncGxheWluZycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1VuaXF1ZSkge1xuICAgICAgICAgICAgdGhpcy5ndWVzc2VkTGV0dGVycy5wdXNoKGd1ZXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1VuaXF1ZSAmJiBpc0JhZEd1ZXNzKSB7XG4gICAgICAgICAgICB0aGlzLnJlbWFpbmluZ0d1ZXNzZXMtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlU3RhdHVzKCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBIYW5nbWFuIGFzICBkZWZhdWx0fSBcblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=