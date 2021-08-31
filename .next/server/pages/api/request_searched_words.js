"use strict";
(() => {
var exports = {};
exports.id = "pages/api/request_searched_words";
exports.ids = ["pages/api/request_searched_words"];
exports.modules = {

/***/ "./pages/@constants/METHODS.ts":
/*!*************************************!*\
  !*** ./pages/@constants/METHODS.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const GET = 'GET';
const POST = 'POST';
const PATCH = 'PATCH';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  GET,
  POST,
  PATCH,
  UPDATE,
  DELETE
});

/***/ }),

/***/ "./pages/api/dummyDataModels/RecentSearchedWords.ts":
/*!**********************************************************!*\
  !*** ./pages/api/dummyDataModels/RecentSearchedWords.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RecentSearchedWords {
  constructor() {
    _defineProperty(this, "data", [{
      id: '1',
      date: '8.14',
      words: '북극곰'
    }, {
      id: '2',
      date: '8.14',
      words: '코로나 19'
    }, {
      id: '3',
      date: '8.15',
      words: 'MSG 워너비'
    }, {
      id: '4',
      date: '8.15',
      words: '주식'
    }]);
  }

  delete(id, all = false) {
    var _this$data;

    if (all) this.data = [];
    this.data = (_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data.filter(v => (v === null || v === void 0 ? void 0 : v.id) !== id);
  }

  get() {
    return this.data;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecentSearchedWords);

/***/ }),

/***/ "./pages/api/request_searched_words.ts":
/*!*********************************************!*\
  !*** ./pages/api/request_searched_words.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _dummyDataModels_RecentSearchedWords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dummyDataModels/RecentSearchedWords */ "./pages/api/dummyDataModels/RecentSearchedWords.ts");
/* harmony import */ var _constants_METHODS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@constants/METHODS */ "./pages/@constants/METHODS.ts");


const dtO = new _dummyDataModels_RecentSearchedWords__WEBPACK_IMPORTED_MODULE_0__.default();
function handler(req, res) {
  if (req.method === _constants_METHODS__WEBPACK_IMPORTED_MODULE_1__.default.DELETE) {
    const {
      id,
      all
    } = req === null || req === void 0 ? void 0 : req.body;
    dtO.delete(id, all);
  }

  res.status(200).json(dtO.get());
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/request_searched_words.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3JlcXVlc3Rfc2VhcmNoZWRfd29yZHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxHQUFHLEdBQUcsS0FBWjtBQUVBLE1BQU1DLElBQUksR0FBRyxNQUFiO0FBRUEsTUFBTUMsS0FBSyxHQUFHLE9BQWQ7QUFFQSxNQUFNQyxNQUFNLEdBQUcsUUFBZjtBQUVBLE1BQU1DLE1BQU0sR0FBRyxRQUFmO0FBRUEsaUVBQWU7QUFDYkosRUFBQUEsR0FEYTtBQUViQyxFQUFBQSxJQUZhO0FBR2JDLEVBQUFBLEtBSGE7QUFJYkMsRUFBQUEsTUFKYTtBQUtiQyxFQUFBQTtBQUxhLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQSxNQUFNQyxtQkFBTixDQUEwQjtBQUFBO0FBQUEsa0NBQ1QsQ0FDYjtBQUNFQyxNQUFBQSxFQUFFLEVBQUUsR0FETjtBQUVFQyxNQUFBQSxJQUFJLEVBQUUsTUFGUjtBQUdFQyxNQUFBQSxLQUFLLEVBQUM7QUFIUixLQURhLEVBTWI7QUFDRUYsTUFBQUEsRUFBRSxFQUFFLEdBRE47QUFFRUMsTUFBQUEsSUFBSSxFQUFFLE1BRlI7QUFHRUMsTUFBQUEsS0FBSyxFQUFFO0FBSFQsS0FOYSxFQVdiO0FBQ0VGLE1BQUFBLEVBQUUsRUFBRSxHQUROO0FBRUVDLE1BQUFBLElBQUksRUFBRSxNQUZSO0FBR0VDLE1BQUFBLEtBQUssRUFBRTtBQUhULEtBWGEsRUFnQmI7QUFDRUYsTUFBQUEsRUFBRSxFQUFFLEdBRE47QUFFRUMsTUFBQUEsSUFBSSxFQUFFLE1BRlI7QUFHRUMsTUFBQUEsS0FBSyxFQUFFO0FBSFQsS0FoQmEsQ0FEUztBQUFBOztBQXdCeEJDLEVBQUFBLE1BQU0sQ0FBRUgsRUFBRixFQUFNSSxHQUFHLEdBQUcsS0FBWixFQUFtQjtBQUFBOztBQUN2QixRQUFHQSxHQUFILEVBQVEsS0FBS0MsSUFBTCxHQUFZLEVBQVo7QUFDUixTQUFLQSxJQUFMLGlCQUFZLEtBQUtBLElBQWpCLCtDQUFZLFdBQVdDLE1BQVgsQ0FBbUJDLENBQUQsSUFBTyxDQUFBQSxDQUFDLFNBQUQsSUFBQUEsQ0FBQyxXQUFELFlBQUFBLENBQUMsQ0FBRVAsRUFBSCxNQUFVQSxFQUFuQyxDQUFaO0FBQ0Q7O0FBRURRLEVBQUFBLEdBQUcsR0FBSTtBQUNMLFdBQU8sS0FBS0gsSUFBWjtBQUNEOztBQS9CdUI7O0FBa0MxQixpRUFBZU4sbUJBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUVBLE1BQU1ZLEdBQUcsR0FBRyxJQUFJRix5RUFBSixFQUFaO0FBRWUsU0FBU0csT0FBVCxDQUFrQkMsR0FBbEIsRUFBdUJDLEdBQXZCLEVBQTRCO0FBQ3pDLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixLQUFlTCw4REFBbEIsRUFBa0M7QUFDaEMsVUFBTTtBQUFFVixNQUFBQSxFQUFGO0FBQU1JLE1BQUFBO0FBQU4sUUFBY1MsR0FBZCxhQUFjQSxHQUFkLHVCQUFjQSxHQUFHLENBQUVHLElBQXpCO0FBRUFMLElBQUFBLEdBQUcsQ0FBQ1IsTUFBSixDQUFXSCxFQUFYLEVBQWVJLEdBQWY7QUFDRDs7QUFFRFUsRUFBQUEsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJQLEdBQUcsQ0FBQ0gsR0FBSixFQUFyQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm5hdmVyLy4vcGFnZXMvQGNvbnN0YW50cy9NRVRIT0RTLnRzIiwid2VicGFjazovL25uYXZlci8uL3BhZ2VzL2FwaS9kdW1teURhdGFNb2RlbHMvUmVjZW50U2VhcmNoZWRXb3Jkcy50cyIsIndlYnBhY2s6Ly9ubmF2ZXIvLi9wYWdlcy9hcGkvcmVxdWVzdF9zZWFyY2hlZF93b3Jkcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHRVQgPSAnR0VUJztcclxuXHJcbmNvbnN0IFBPU1QgPSAnUE9TVCc7XHJcblxyXG5jb25zdCBQQVRDSCA9ICdQQVRDSCc7XHJcblxyXG5jb25zdCBVUERBVEUgPSAnVVBEQVRFJztcclxuXHJcbmNvbnN0IERFTEVURSA9ICdERUxFVEUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIEdFVCxcclxuICBQT1NULFxyXG4gIFBBVENILFxyXG4gIFVQREFURSxcclxuICBERUxFVEUsXHJcbn07XHJcbiIsInR5cGUgRGF0YSA9IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGRhdGU6IHN0cmluZztcclxuICB3b3Jkczogc3RyaW5nO1xyXG59XHJcblxyXG5jbGFzcyBSZWNlbnRTZWFyY2hlZFdvcmRzIHtcclxuICBkYXRhOiBEYXRhW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnMScsXHJcbiAgICAgIGRhdGU6ICc4LjE0JyxcclxuICAgICAgd29yZHM6J+u2geq3ueqzsCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJzInLFxyXG4gICAgICBkYXRlOiAnOC4xNCcsXHJcbiAgICAgIHdvcmRzOiAn7L2U66Gc64KYIDE5JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnMycsXHJcbiAgICAgIGRhdGU6ICc4LjE1JyxcclxuICAgICAgd29yZHM6ICdNU0cg7JuM64SI67mEJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnNCcsXHJcbiAgICAgIGRhdGU6ICc4LjE1JyxcclxuICAgICAgd29yZHM6ICfso7zsi50nLFxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGRlbGV0ZSAoaWQsIGFsbCA9IGZhbHNlKSB7XHJcbiAgICBpZihhbGwpIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhPy5maWx0ZXIoKHYpID0+IHY/LmlkICE9PSBpZCk7XHJcbiAgfTtcclxuXHJcbiAgZ2V0ICgpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNlbnRTZWFyY2hlZFdvcmRzO1xyXG4iLCJpbXBvcnQgUmVjZW50U2VhcmNoZWRXb3Jkc01vZGVsIGZyb20gJy4vZHVtbXlEYXRhTW9kZWxzL1JlY2VudFNlYXJjaGVkV29yZHMnO1xuaW1wb3J0IE1FVEhPRFMgZnJvbSAnLi4vQGNvbnN0YW50cy9NRVRIT0RTJztcblxuY29uc3QgZHRPID0gbmV3IFJlY2VudFNlYXJjaGVkV29yZHNNb2RlbCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyIChyZXEsIHJlcykge1xuICBpZihyZXEubWV0aG9kID09PSBNRVRIT0RTLkRFTEVURSkge1xuICAgIGNvbnN0IHsgaWQsIGFsbCB9ID0gcmVxPy5ib2R5O1xuXG4gICAgZHRPLmRlbGV0ZShpZCwgYWxsKTtcbiAgfVxuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGR0Ty5nZXQoKSk7XG59XG4iXSwibmFtZXMiOlsiR0VUIiwiUE9TVCIsIlBBVENIIiwiVVBEQVRFIiwiREVMRVRFIiwiUmVjZW50U2VhcmNoZWRXb3JkcyIsImlkIiwiZGF0ZSIsIndvcmRzIiwiZGVsZXRlIiwiYWxsIiwiZGF0YSIsImZpbHRlciIsInYiLCJnZXQiLCJSZWNlbnRTZWFyY2hlZFdvcmRzTW9kZWwiLCJNRVRIT0RTIiwiZHRPIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImJvZHkiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==