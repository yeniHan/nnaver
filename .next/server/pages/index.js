"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/@constants/APIS.ts":
/*!**********************************!*\
  !*** ./pages/@constants/APIS.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const GET_RECENT_SEARCHED_WORDS = 'api/request_searched_words';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  GET_RECENT_SEARCHED_WORDS
});

/***/ }),

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

/***/ "./pages/@styles/Colors.ts":
/*!*********************************!*\
  !*** ./pages/@styles/Colors.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const blacks = {
  black0: "#404040"
};
const grays = {
  gray0: "#e4e8eb",
  gray1: "#e4e7e8",
  gray2: "#f1f4f6"
};
const greens = {
  naverGreen: "#19ce60"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_objectSpread(_objectSpread(_objectSpread({}, blacks), grays), greens));

/***/ }),

/***/ "./pages/Main/@styles/index.ts":
/*!*************************************!*\
  !*** ./pages/Main/@styles/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commonIconCSS": () => (/* binding */ commonIconCSS),
/* harmony export */   "commonIconCSS2": () => (/* binding */ commonIconCSS2)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const commonIconCSS = styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
  background-image: url(https://s.pstatic.net/static/www/img/uit/2021/sp_main_57f073.png);
  background-size: 444px 439px;
`;
const commonIconCSS2 = styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
  background-image: url(https://ssl.pstatic.net/sstatic/search/pc/img/sp_autocomplete_4d068feb.png);
  background-size: 290px 274px;
`;
const weatherIconCSS = styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
  background-image: url(https://s.pstatic.net/static/www/img/uit/2021/sp_weather_time_5f2bbb.png);
  background-size: 215px 185px;
`;

/***/ }),

/***/ "./pages/Main/Header/SearchInput/RecentSearchedWords.tsx":
/*!***************************************************************!*\
  !*** ./pages/Main/Header/SearchInput/RecentSearchedWords.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@styles/Colors */ "./pages/@styles/Colors.ts");
/* harmony import */ var _front_apis_apis_deleteRecentSearchedWords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../front-apis/apis/deleteRecentSearchedWords */ "./pages/front-apis/apis/deleteRecentSearchedWords.ts");
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@styles/index */ "./pages/Main/@styles/index.ts");
/* harmony import */ var _front_apis_apis_getRecentSearchedWords__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../front-apis/apis/getRecentSearchedWords */ "./pages/front-apis/apis/getRecentSearchedWords.ts");

var _jsxFileName = "C:\\Users\\Yena Han\\Documents\\nnaver\\pages\\Main\\Header\\SearchInput\\RecentSearchedWords.tsx";






const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  border: 1px solid ${_styles_Colors__WEBPACK_IMPORTED_MODULE_3__.default.gray1};
  border-top: 0;
  border-radius: 0 0 6px 6px;
  
  > div {
    padding: 7px 8px;
  }
  
  > li {
    padding: 5px 8px;
  }
`;
const Title = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  font-size: 14px;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
`;
const Item = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().li)`
  display: flex;
  align-items: center;
`;
const SearchIcWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  background-color: ${_styles_Colors__WEBPACK_IMPORTED_MODULE_3__.default.gray1};
  width: 18px;
  height: 18px;
  border: 1px solid rgba(0,0,0,.04);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchIc = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().span)`
  ${_styles_index__WEBPACK_IMPORTED_MODULE_5__.commonIconCSS2};
  width: 12px;
  height: 12px;
  background-position: -76px -260px;
`;
const TextWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;
const SearchedWords = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().span)`
  font-size: 14px;
  margin-left: 8px;
`;
const Date = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().span)`
  font-size: 13px;
`;
const DeleteIc = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`
  ${_styles_index__WEBPACK_IMPORTED_MODULE_5__.commonIconCSS2};
  width: 11px;
  height: 11px;
  background-position: -90px -260px;
  margin: 4px 0 4px 11px;
`;
const BottomLine = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  border-top: 1px solid #f1f4f6;
  border-radius: 0 0 6px 6px;
  font-size: 13px;
  background-color: ${_styles_Colors__WEBPACK_IMPORTED_MODULE_3__.default.gray2};
  display: flex;
  justify-content: space-between;
`;

const RecentSearchedWords = ({
  folded
}) => {
  const {
    0: recentSearchedWords,
    1: setRecentSearchedWords
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);

  const getRecentSearchedWords = () => {
    (0,_front_apis_apis_getRecentSearchedWords__WEBPACK_IMPORTED_MODULE_6__.default)().then(data => {
      setRecentSearchedWords(data);
    });
  };

  const deleteItem = (id, all = false) => {
    (0,_front_apis_apis_deleteRecentSearchedWords__WEBPACK_IMPORTED_MODULE_4__.default)({
      all,
      id
    }).then(() => getRecentSearchedWords());
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!folded) {
      getRecentSearchedWords();
    }
  }, [folded]);
  if (folded) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\uCD5C\uADFC \uAC80\uC0C9\uC5B4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "\uC804\uCCB4 \uC0AD\uC81C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 28
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, undefined), recentSearchedWords === null || recentSearchedWords === void 0 ? void 0 : recentSearchedWords.map(({
      id,
      words,
      date
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchIcWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchIc, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextWrapper, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchedWords, {
          children: words
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Date, {
            children: date
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DeleteIc, {
            onClick: () => deleteItem(id)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }, undefined)]
    }, id, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BottomLine, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        children: "\uB3C4\uC6C0\uB9D0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        children: "\uC790\uB3D9\uC800\uC7A5 \uB044\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecentSearchedWords);

/***/ }),

/***/ "./pages/Main/Header/SearchInput/index.tsx":
/*!*************************************************!*\
  !*** ./pages/Main/Header/SearchInput/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@styles/Colors */ "./pages/@styles/Colors.ts");
/* harmony import */ var _RecentSearchedWords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RecentSearchedWords */ "./pages/Main/Header/SearchInput/RecentSearchedWords.tsx");
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@styles/index */ "./pages/Main/@styles/index.ts");

var _jsxFileName = "C:\\Users\\Yena Han\\Documents\\nnaver\\pages\\Main\\Header\\SearchInput\\index.tsx";





const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: flex;
  border: 2px solid ${_styles_Colors__WEBPACK_IMPORTED_MODULE_3__.default.naverGreen};
  border-radius: 2px;
  position: relative;
  height: 50px;
`;
const Input = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().input)`
  width: 474px;
  padding: 13px 15px;
`;
const DropdownArrow = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button(({
  folded
}) => styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
  ${_styles_index__WEBPACK_IMPORTED_MODULE_5__.commonIconCSS};
  width: 10px;
  height: 5px;
  background-position: ${folded ? '-96px -296px' : '-108px -296px'};
  margin: 22px 9px;
`);
const SearchICWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  width: 56px;
  background-color: ${_styles_Colors__WEBPACK_IMPORTED_MODULE_3__.default.naverGreen};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchIC = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`
  ${_styles_index__WEBPACK_IMPORTED_MODULE_5__.commonIconCSS};
  width: 22px;
  height: 22px;
  background-position: -420px -208px;
`;

const SearchInput = () => {
  const {
    0: folded,
    1: setFolded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  const onClickDropdownArrow = async () => {
    setFolded(prev => !prev);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DropdownArrow, {
        folded: folded,
        onClick: onClickDropdownArrow
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchICWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchIC, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RecentSearchedWords__WEBPACK_IMPORTED_MODULE_4__.default, {
      folded: folded
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchInput);

/***/ }),

/***/ "./pages/Main/Header/TopLine.tsx":
/*!***************************************!*\
  !*** ./pages/Main/Header/TopLine.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../@styles/index */ "./pages/Main/@styles/index.ts");
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@styles/Colors */ "./pages/@styles/Colors.ts");

var _jsxFileName = "C:\\Users\\Yena Han\\Documents\\nnaver\\pages\\Main\\Header\\TopLine.tsx";




const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 35px;
  align-items: center;
`;
const MakeStartPage = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  font-size: 11px;
  color: ${_styles_Colors__WEBPACK_IMPORTED_MODULE_4__.default.black0};
  display: inherit;
  align-items: inherit;
`;
const OtherServices = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  border-left-color: ${_styles_Colors__WEBPACK_IMPORTED_MODULE_4__.default.gray0};
  margin-left: 3px;
`;
const JuniorNaver = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`
  ${_styles_index__WEBPACK_IMPORTED_MODULE_3__.commonIconCSS};
  width: 60px;
  height: 10px;
  background-position: -285px -267px;
  margin-right: 10px;
`;
const HappyBean = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`
  ${_styles_index__WEBPACK_IMPORTED_MODULE_3__.commonIconCSS};
  width: 34px;
  height: 11px;
  background-position: -220px -144px;
`;
const RightArrowBtn = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`
  ${_styles_index__WEBPACK_IMPORTED_MODULE_3__.commonIconCSS};
  display: inline-block;
  width: 26px;
  height: 26px;
  background-position: -373px -352px;
  background-repeat: no-repeat;
  vertical-align: top;
  margin-left: 3px;
`;

const TopLine = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MakeStartPage, {
      children: ['네이버를 시작페이지로', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RightArrowBtn, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OtherServices, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(JuniorNaver, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HappyBean, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopLine);

/***/ }),

/***/ "./pages/Main/Header/index.tsx":
/*!*************************************!*\
  !*** ./pages/Main/Header/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchInput */ "./pages/Main/Header/SearchInput/index.tsx");
/* harmony import */ var _TopLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopLine */ "./pages/Main/Header/TopLine.tsx");
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@styles/index */ "./pages/Main/@styles/index.ts");

var _jsxFileName = "C:\\Users\\Yena Han\\Documents\\nnaver\\pages\\Main\\Header\\index.tsx";





const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  padding: 0 30px;
`;
const Logo = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().a)`
  ${_styles_index__WEBPACK_IMPORTED_MODULE_5__.commonIconCSS};
  width: 222px;
  height: 52px;
  background-position: 0 -158px;
  display: block;
  margin-right: 18px;
`;
const SearchInputArea = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: flex;
`;

const Header = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TopLine__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchInputArea, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {
        href: "https://www.naver.com/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchInput__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./pages/Main/TopMenuBar/RealTimeWeatherInfoSlider/@constants.ts":
/*!***********************************************************************!*\
  !*** ./pages/Main/TopMenuBar/RealTimeWeatherInfoSlider/@constants.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dustStatusText": () => (/* binding */ dustStatusText),
/* harmony export */   "weatherText": () => (/* binding */ weatherText)
/* harmony export */ });
const dustStatusText = {
  1: '아주 나쁨',
  2: '나쁨',
  3: '좋음',
  4: '아주 좋음'
};
const weatherText = {
  1: "맑음",
  2: "흐림",
  3: "비옴",
  4: "눈옴"
};

/***/ }),

/***/ "./pages/Main/TopMenuBar/RealTimeWeatherInfoSlider/DustInfo.tsx":
/*!**********************************************************************!*\
  !*** ./pages/Main/TopMenuBar/RealTimeWeatherInfoSlider/DustInfo.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@styles */ "./pages/Main/@styles/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@constants */ "./pages/Main/TopMenuBar/RealTimeWeatherInfoSlider/@constants.ts");


var _jsxFileName = "C:\\Users\\Yena Han\\Documents\\nnaver\\pages\\Main\\TopMenuBar\\RealTimeWeatherInfoSlider\\DustInfo.tsx";




const DustStatusIC = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  ${_styles__WEBPACK_IMPORTED_MODULE_2__.commonIconCSS};
  display: inline-block;
  width: 18px;
  height: 18px;
  background-position: -327px -306px;
  margin-right: 6px;
  align-items: inherit;
`;
const Factor = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().span)`
  display: inherit;
  align-items: inherit;
`;
const Name = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().span)`
  font-size: 12px;
  margin-right: 7px;
`;
const Devider = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().span)`
  background-color: gray;
  width: 1px;
  height: 11px;
  margin: 0 6px 0 7px;
`;
const Status = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().span)`
  font-size: 13px;
  font-weight: bold;
`;
const Location = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().span)`
  font-size: 12px;
  color: gray;
  margin-left: 7px;
  
  :hover {
    text-decoration: underline;
  }
`;

const DustInfo = ({
  dust,
  location
}) => {
  const {
    fine,
    ultraFine
  } = dust;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Factor, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Name, {
        children: "\uBBF8\uC138"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DustStatusIC, {
        status: fine
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Status, {
        children: _constants__WEBPACK_IMPORTED_MODULE_4__.dustStatusText[fine]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Devider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Factor, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Name, {
        children: "\uCD08\uBBF8\uC138"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DustStatusIC, {
        status: ultraFine
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Status, {
        children: _constants__WEBPACK_IMPORTED_MODULE_4__.dustStatusText[ultraFine]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Location, {
      children: location
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DustInfo);

/***/ }),

/***/ "./pages/Main/TopMenuBar/RealTimeWeatherInfoSlider/WeatherInfo.tsx":
/*!*************************************************************************!*\
  !*** ./pages/Main/TopMenuBar/RealTimeWeatherInfoSlider/WeatherInfo.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@styles */ "./pages/Main/@styles/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@constants */ "./pages/Main/TopMenuBar/RealTimeWeatherInfoSlider/@constants.ts");


var _jsxFileName = "C:\\Users\\Yena Han\\Documents\\nnaver\\pages\\Main\\TopMenuBar\\RealTimeWeatherInfoSlider\\WeatherInfo.tsx";




const WeatherIc = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  ${_styles__WEBPACK_IMPORTED_MODULE_2__.weatherIconCSS};
  width: 29px;
  height: 29px;
  background-position: -93px 0;
  display: inline-block;
`;
const Average = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().span)`
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 5px;
`;
const Min = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().span)`
  font-size: 12px;
  color: red;
`;
const Slash = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().span)`
  color: gray;
  margin: 0 2px;
`;
const Max = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().span)`
  font-size: 12px;
  color: blue;
`;
const Location = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().span)`
  font-size: 12px;
  color: gray;
  margin-left: 7px;

  :hover {
    text-decoration: underline;
  }
`;

const WeatherInfo = ({
  weather,
  temperature,
  location
}) => {
  const {
    average,
    min,
    max
  } = temperature;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WeatherIc, {
      weather: weather
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Average, {
      children: [average, "\u2103 ", _constants__WEBPACK_IMPORTED_MODULE_4__.weatherText[weather]]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Min, {
      children: [min, ' ', "\u2103"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Slash, {
      children: "/"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Max, {
      children: [max, ' ', "\u2103"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Location, {
      children: location
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherInfo);

/***/ }),

/***/ "./pages/Main/TopMenuBar/RealTimeWeatherInfoSlider/index.tsx":
/*!*******************************************************************!*\
  !*** ./pages/Main/TopMenuBar/RealTimeWeatherInfoSlider/index.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var infinite_react_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! infinite-react-carousel */ "infinite-react-carousel");
/* harmony import */ var infinite_react_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(infinite_react_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_dummyData_realTimeWeatherInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/dummyData/realTimeWeatherInfo */ "./pages/api/dummyData/realTimeWeatherInfo.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DustInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DustInfo */ "./pages/Main/TopMenuBar/RealTimeWeatherInfoSlider/DustInfo.tsx");
/* harmony import */ var _WeatherInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WeatherInfo */ "./pages/Main/TopMenuBar/RealTimeWeatherInfoSlider/WeatherInfo.tsx");

var _jsxFileName = "C:\\Users\\Yena Han\\Documents\\nnaver\\pages\\Main\\TopMenuBar\\RealTimeWeatherInfoSlider\\index.tsx";






const StyledSlider = styled_components__WEBPACK_IMPORTED_MODULE_4___default()((infinite_react_carousel__WEBPACK_IMPORTED_MODULE_2___default()))`
  width: 260px !important;
  height: 100%;
`;
const Slide = (styled_components__WEBPACK_IMPORTED_MODULE_4___default().div)`
  width: 240px;
  height: 52px;
  display: flex !important;
  align-items: center;
`;

const RealTimeWeatherInfoSlider = () => {
  const {
    dust,
    weather,
    temperature,
    location
  } = _api_dummyData_realTimeWeatherInfo__WEBPACK_IMPORTED_MODULE_3__.default;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSlider, {
    autoplay: true,
    arrows: false,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Slide, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DustInfo__WEBPACK_IMPORTED_MODULE_5__.default, {
        dust: dust,
        location: location
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Slide, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WeatherInfo__WEBPACK_IMPORTED_MODULE_6__.default, {
        weather: weather,
        temperature: temperature,
        location: location
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RealTimeWeatherInfoSlider);

/***/ }),

/***/ "./pages/Main/TopMenuBar/TopMenuBarIcons.ts":
/*!**************************************************!*\
  !*** ./pages/Main/TopMenuBar/TopMenuBarIcons.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@styles/index */ "./pages/Main/@styles/index.ts");


const MailIc = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  ${_styles_index__WEBPACK_IMPORTED_MODULE_1__.commonIconCSS};
  width: 21px;
  height: 21px;
  background-position: -420px -279px;
  display: inline-block;
  margin-right: 9px;
`;
const ShoppingLiveIc = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  ${_styles_index__WEBPACK_IMPORTED_MODULE_1__.commonIconCSS};
  width: 54px;
  height: 20px;
  background-position: -202px -306px;
  display: inline-block;
`;
const PlayIc = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  ${_styles_index__WEBPACK_IMPORTED_MODULE_1__.commonIconCSS};
  width: 12px;
  height: 14px;
  background-position: -256px -212px;
  display: inline-block;
  margin-right: 4px;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ['1']: MailIc,
  ['6']: ShoppingLiveIc,
  ['7']: PlayIc
});

/***/ }),

/***/ "./pages/Main/TopMenuBar/index.tsx":
/*!*****************************************!*\
  !*** ./pages/Main/TopMenuBar/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_dummyData_topBarMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/dummyData/topBarMenu */ "./pages/api/dummyData/topBarMenu.ts");
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@styles/index */ "./pages/Main/@styles/index.ts");
/* harmony import */ var _TopMenuBarIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TopMenuBarIcons */ "./pages/Main/TopMenuBar/TopMenuBarIcons.ts");
/* harmony import */ var _styles_Colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@styles/Colors */ "./pages/@styles/Colors.ts");
/* harmony import */ var _RealTimeWeatherInfoSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RealTimeWeatherInfoSlider */ "./pages/Main/TopMenuBar/RealTimeWeatherInfoSlider/index.tsx");

var _jsxFileName = "C:\\Users\\Yena Han\\Documents\\nnaver\\pages\\Main\\TopMenuBar\\index.tsx";







const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul)`
  padding: 0 30px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%);
`;
const MenuWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: flex;
  align-items: inherit;

  > li {
    height: 30px;
    display: inherit;
    margin-right: 10px;
    align-items: center;

    &:last-child {
      margin-right: 0;
    }
  }
`;
const PrimaryMenuItem = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().li)`
  color: ${_styles_Colors__WEBPACK_IMPORTED_MODULE_6__.default.naverGreen};
  display: flex;
`;
const SeeMoreBtn = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button(({
  folded
}) => styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
  margin-left: 17px;
  font-size: 13px;
  color: #202020;
  align-items: inherit;
  display: inherit;
  color: ${folded ? 'unset' : _styles_Colors__WEBPACK_IMPORTED_MODULE_6__.default.naverGreen};
  
  span:hover {
    text-decoration: underline;
    ${!folded && `text-decoration-color: ${_styles_Colors__WEBPACK_IMPORTED_MODULE_6__.default.naverGreen}`};
  }
`);
const ArrowBtn = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button(({
  folded
}) => styled_components__WEBPACK_IMPORTED_MODULE_2__.css`
  ${_styles_index__WEBPACK_IMPORTED_MODULE_4__.commonIconCSS};
  width: 11px;
  height: 7px;
  background-position: ${folded ? '-83px -296px' : '-70px -296px'};
  margin-left: 7px;
`);

const TopMenuBar = () => {
  const {
    primary,
    nonPrimary
  } = _api_dummyData_topBarMenu__WEBPACK_IMPORTED_MODULE_3__.default;
  const {
    0: folded,
    1: setFolded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  const onClickSeeMoreBtn = () => {
    setFolded(prev => !prev);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuWrapper, {
      children: [primary === null || primary === void 0 ? void 0 : primary.map(v => {
        const Ic = _TopMenuBarIcons__WEBPACK_IMPORTED_MODULE_5__.default[v === null || v === void 0 ? void 0 : v.id];
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PrimaryMenuItem, {
          children: [(v === null || v === void 0 ? void 0 : v.hasIcon) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Ic, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 30
          }, undefined), (v === null || v === void 0 ? void 0 : v.text) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: v === null || v === void 0 ? void 0 : v.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 27
          }, undefined)]
        }, v === null || v === void 0 ? void 0 : v.id, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, undefined);
      }), nonPrimary === null || nonPrimary === void 0 ? void 0 : nonPrimary.map(v => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: v === null || v === void 0 ? void 0 : v.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }, undefined)
      }, v === null || v === void 0 ? void 0 : v.id, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SeeMoreBtn, {
        onClick: onClickSeeMoreBtn,
        folded: folded,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: folded ? '더보기' : '접기'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowBtn, {
          folded: folded
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RealTimeWeatherInfoSlider__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopMenuBar);

/***/ }),

/***/ "./pages/api/dummyDataModels/accessToken.ts":
/*!**************************************************!*\
  !*** ./pages/api/dummyDataModels/accessToken.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const accessToken = 'a9ace025c90c0da2161075da6ddd3492a2fca776';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accessToken);

/***/ }),

/***/ "./pages/api/dummyData/realTimeWeatherInfo.ts":
/*!****************************************************!*\
  !*** ./pages/api/dummyData/realTimeWeatherInfo.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const realTimeWeatherInfo = {
  dust: {
    fine: 2,
    ultraFine: 2
  },
  weather: 3,
  temperature: {
    average: '23.9',
    min: '21.0',
    max: '25.3'
  },
  location: '역삼동'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (realTimeWeatherInfo);

/***/ }),

/***/ "./pages/api/dummyData/topBarMenu.ts":
/*!*******************************************!*\
  !*** ./pages/api/dummyData/topBarMenu.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const topBarMenu = {
  primary: [{
    id: '1',
    text: '메일',
    hasIcon: true
  }, {
    id: '2',
    text: '까페',
    hasIcon: false
  }, {
    id: '3',
    text: '블로그',
    hasIcon: false
  }, {
    id: '4',
    text: '지식iN',
    hasIcon: false
  }, {
    id: '5',
    text: '쇼핑',
    hasIcon: false
  }, {
    id: '6',
    hasIcon: true
  }, {
    id: '7',
    text: 'Pay',
    hasIcon: false
  }, {
    id: '7',
    text: 'TV',
    hasIcon: true
  }],
  nonPrimary: [{
    id: '1',
    text: '사전'
  }, {
    id: '2',
    text: '뉴스'
  }, {
    id: '3',
    text: '증권'
  }, {
    id: '4',
    text: '부동산'
  }, {
    id: '5',
    text: '지도'
  }, {
    id: '6',
    text: 'VIBE'
  }, {
    id: '7',
    text: '책'
  }, {
    id: '8',
    text: '웹툰'
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topBarMenu);

/***/ }),

/***/ "./pages/front-apis/apis/deleteRecentSearchedWords.ts":
/*!************************************************************!*\
  !*** ./pages/front-apis/apis/deleteRecentSearchedWords.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utills_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utills/request */ "./pages/front-apis/utills/request.ts");
/* harmony import */ var _constants_APIS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@constants/APIS */ "./pages/@constants/APIS.ts");
/* harmony import */ var _constants_METHODS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@constants/METHODS */ "./pages/@constants/METHODS.ts");




const deleteRecentSearchedWords = async ({
  all,
  id
}) => {
  const data = await (0,_utills_request__WEBPACK_IMPORTED_MODULE_0__.default)({
    url: _constants_APIS__WEBPACK_IMPORTED_MODULE_1__.default.GET_RECENT_SEARCHED_WORDS,
    method: _constants_METHODS__WEBPACK_IMPORTED_MODULE_2__.default.DELETE,
    data: {
      all,
      id
    },
    isAuth: true
  });
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteRecentSearchedWords);

/***/ }),

/***/ "./pages/front-apis/apis/getRecentSearchedWords.ts":
/*!*********************************************************!*\
  !*** ./pages/front-apis/apis/getRecentSearchedWords.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utills_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utills/request */ "./pages/front-apis/utills/request.ts");
/* harmony import */ var _constants_APIS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@constants/APIS */ "./pages/@constants/APIS.ts");
/* harmony import */ var _constants_METHODS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@constants/METHODS */ "./pages/@constants/METHODS.ts");




const getRecentSearchedWords = async () => {
  const data = await (0,_utills_request__WEBPACK_IMPORTED_MODULE_0__.default)({
    url: _constants_APIS__WEBPACK_IMPORTED_MODULE_1__.default.GET_RECENT_SEARCHED_WORDS,
    method: _constants_METHODS__WEBPACK_IMPORTED_MODULE_2__.default.GET,
    isAuth: true
  });
  return data;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRecentSearchedWords);

/***/ }),

/***/ "./pages/front-apis/utills/request.ts":
/*!********************************************!*\
  !*** ./pages/front-apis/utills/request.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_dummyDataModels_accessToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/dummyDataModels/accessToken */ "./pages/api/dummyDataModels/accessToken.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const request = async ({
  url,
  method,
  config = {},
  data,
  isAuth
}) => {
  if (!(config !== null && config !== void 0 && config.headers)) config.headers = {};

  if (isAuth) {
    config.headers.Authorization = `Bearer ${_api_dummyDataModels_accessToken__WEBPACK_IMPORTED_MODULE_1__.default}`;
  }

  const castedMethod = method;
  const resData = await axios__WEBPACK_IMPORTED_MODULE_0___default()(url, _objectSpread({
    data: _objectSpread({}, data),
    method: castedMethod
  }, config)).then(res => {
    console.log('res.data:', data);
    return res.data;
  }).catch(e => {
    throw e;
  });
  return resData;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Main_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main/Header */ "./pages/Main/Header/index.tsx");
/* harmony import */ var _Main_TopMenuBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main/TopMenuBar */ "./pages/Main/TopMenuBar/index.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Yena Han\\Documents\\nnaver\\pages\\index.js";



const Item = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  width: 50px;
  height: 30px;
  border: 1px solid red;
`;
const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
    display: flex;
  justify-content: center;
`;
function Main() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Main_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Main_TopMenuBar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "infinite-react-carousel":
/*!******************************************!*\
  !*** external "infinite-react-carousel" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("infinite-react-carousel");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF0QjtBQVdBLFNBQU9MLE9BQVA7QUFDRCxDQS9CRDs7QUFpQ0EsaUVBQWVYLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBRUEsTUFBTTVGLElBQUksR0FBR1AsOERBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtBQU1BLE1BQU1JLE9BQU8sR0FBR0osOERBQVc7QUFDM0I7QUFDQTtBQUNBLENBSEE7QUFLZSxTQUFTb0gsSUFBVCxHQUFpQjtBQUM5QixzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOzs7Ozs7Ozs7O0FDdEJEOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ubmF2ZXIvLi9wYWdlcy9AY29uc3RhbnRzL0FQSVMudHMiLCJ3ZWJwYWNrOi8vbm5hdmVyLy4vcGFnZXMvQGNvbnN0YW50cy9NRVRIT0RTLnRzIiwid2VicGFjazovL25uYXZlci8uL3BhZ2VzL0BzdHlsZXMvQ29sb3JzLnRzIiwid2VicGFjazovL25uYXZlci8uL3BhZ2VzL01haW4vQHN0eWxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9ubmF2ZXIvLi9wYWdlcy9NYWluL0hlYWRlci9TZWFyY2hJbnB1dC9SZWNlbnRTZWFyY2hlZFdvcmRzLnRzeCIsIndlYnBhY2s6Ly9ubmF2ZXIvLi9wYWdlcy9NYWluL0hlYWRlci9TZWFyY2hJbnB1dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbm5hdmVyLy4vcGFnZXMvTWFpbi9IZWFkZXIvVG9wTGluZS50c3giLCJ3ZWJwYWNrOi8vbm5hdmVyLy4vcGFnZXMvTWFpbi9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL25uYXZlci8uL3BhZ2VzL01haW4vVG9wTWVudUJhci9SZWFsVGltZVdlYXRoZXJJbmZvU2xpZGVyL0Bjb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vbm5hdmVyLy4vcGFnZXMvTWFpbi9Ub3BNZW51QmFyL1JlYWxUaW1lV2VhdGhlckluZm9TbGlkZXIvRHVzdEluZm8udHN4Iiwid2VicGFjazovL25uYXZlci8uL3BhZ2VzL01haW4vVG9wTWVudUJhci9SZWFsVGltZVdlYXRoZXJJbmZvU2xpZGVyL1dlYXRoZXJJbmZvLnRzeCIsIndlYnBhY2s6Ly9ubmF2ZXIvLi9wYWdlcy9NYWluL1RvcE1lbnVCYXIvUmVhbFRpbWVXZWF0aGVySW5mb1NsaWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbm5hdmVyLy4vcGFnZXMvTWFpbi9Ub3BNZW51QmFyL1RvcE1lbnVCYXJJY29ucy50cyIsIndlYnBhY2s6Ly9ubmF2ZXIvLi9wYWdlcy9NYWluL1RvcE1lbnVCYXIvaW5kZXgudHN4Iiwid2VicGFjazovL25uYXZlci8uL3BhZ2VzL2FwaS9kdW1teURhdGFNb2RlbHMvYWNjZXNzVG9rZW4udHMiLCJ3ZWJwYWNrOi8vbm5hdmVyLy4vcGFnZXMvYXBpL2R1bW15RGF0YS9yZWFsVGltZVdlYXRoZXJJbmZvLnRzIiwid2VicGFjazovL25uYXZlci8uL3BhZ2VzL2FwaS9kdW1teURhdGEvdG9wQmFyTWVudS50cyIsIndlYnBhY2s6Ly9ubmF2ZXIvLi9wYWdlcy9mcm9udC1hcGlzL2FwaXMvZGVsZXRlUmVjZW50U2VhcmNoZWRXb3Jkcy50cyIsIndlYnBhY2s6Ly9ubmF2ZXIvLi9wYWdlcy9mcm9udC1hcGlzL2FwaXMvZ2V0UmVjZW50U2VhcmNoZWRXb3Jkcy50cyIsIndlYnBhY2s6Ly9ubmF2ZXIvLi9wYWdlcy9mcm9udC1hcGlzL3V0aWxscy9yZXF1ZXN0LnRzIiwid2VicGFjazovL25uYXZlci8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL25uYXZlci9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbm5hdmVyL2V4dGVybmFsIFwiaW5maW5pdGUtcmVhY3QtY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly9ubmF2ZXIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25uYXZlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL25uYXZlci9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR0VUX1JFQ0VOVF9TRUFSQ0hFRF9XT1JEUyA9ICdhcGkvcmVxdWVzdF9zZWFyY2hlZF93b3Jkcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIEdFVF9SRUNFTlRfU0VBUkNIRURfV09SRFMsXHJcbn07XHJcbiIsImNvbnN0IEdFVCA9ICdHRVQnO1xyXG5cclxuY29uc3QgUE9TVCA9ICdQT1NUJztcclxuXHJcbmNvbnN0IFBBVENIID0gJ1BBVENIJztcclxuXHJcbmNvbnN0IFVQREFURSA9ICdVUERBVEUnO1xyXG5cclxuY29uc3QgREVMRVRFID0gJ0RFTEVURSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgR0VULFxyXG4gIFBPU1QsXHJcbiAgUEFUQ0gsXHJcbiAgVVBEQVRFLFxyXG4gIERFTEVURSxcclxufTtcclxuIiwiY29uc3QgYmxhY2tzID0ge1xyXG4gIGJsYWNrMDogXCIjNDA0MDQwXCJcclxufTtcclxuXHJcbmNvbnN0IGdyYXlzID0ge1xyXG4gIGdyYXkwOiBcIiNlNGU4ZWJcIixcclxuICBncmF5MTogXCIjZTRlN2U4XCIsXHJcbiAgZ3JheTI6IFwiI2YxZjRmNlwiLFxyXG59O1xyXG5cclxuY29uc3QgZ3JlZW5zID0ge1xyXG4gIG5hdmVyR3JlZW46IFwiIzE5Y2U2MFwiLFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAuLi5ibGFja3MsXHJcbiAgLi4uZ3JheXMsXHJcbiAgLi4uZ3JlZW5zLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29tbW9uSWNvbkNTUyA9IGNzc2BcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zLnBzdGF0aWMubmV0L3N0YXRpYy93d3cvaW1nL3VpdC8yMDIxL3NwX21haW5fNTdmMDczLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA0NDRweCA0MzlweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tb25JY29uQ1NTMiA9IGNzc2BcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zc2wucHN0YXRpYy5uZXQvc3N0YXRpYy9zZWFyY2gvcGMvaW1nL3NwX2F1dG9jb21wbGV0ZV80ZDA2OGZlYi5wbmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjkwcHggMjc0cHg7XHJcbmA7XHJcblxyXG5jb25zdCB3ZWF0aGVySWNvbkNTUyA9IGNzc2BcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zLnBzdGF0aWMubmV0L3N0YXRpYy93d3cvaW1nL3VpdC8yMDIxL3NwX3dlYXRoZXJfdGltZV81ZjJiYmIucG5nKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIxNXB4IDE4NXB4O1xyXG5gO1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uLy4uL0BzdHlsZXMvQ29sb3JzJztcclxuaW1wb3J0IGRlbGV0ZVJlY2VudFNlYXJjaGVkV29yZHMgZnJvbSAnLi4vLi4vLi4vZnJvbnQtYXBpcy9hcGlzL2RlbGV0ZVJlY2VudFNlYXJjaGVkV29yZHMnO1xyXG5pbXBvcnQgeyBjb21tb25JY29uQ1NTMiB9IGZyb20gJy4uLy4uL0BzdHlsZXMvaW5kZXgnO1xyXG5pbXBvcnQgZ2V0UmVjZW50U2VhcmNoZWRXb3Jkc0FwaSBmcm9tIFwiLi4vLi4vLi4vZnJvbnQtYXBpcy9hcGlzL2dldFJlY2VudFNlYXJjaGVkV29yZHNcIjtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLmdyYXkxfTtcclxuICBib3JkZXItdG9wOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xyXG4gIFxyXG4gID4gZGl2IHtcclxuICAgIHBhZGRpbmc6IDdweCA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gID4gbGkge1xyXG4gICAgcGFkZGluZzogNXB4IDhweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDhweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gO1xyXG5cclxuY29uc3QgSXRlbSA9IHN0eWxlZC5saWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2hJY1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdyYXkxfTtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMDQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2hJYyA9IHN0eWxlZC5zcGFuYFxyXG4gICR7Y29tbW9uSWNvbkNTUzJ9O1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzZweCAtMjYwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoZWRXb3JkcyA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRGF0ZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuYDtcclxuXHJcbmNvbnN0IERlbGV0ZUljID0gc3R5bGVkLmJ1dHRvbmBcclxuICAke2NvbW1vbkljb25DU1MyfTtcclxuICB3aWR0aDogMTFweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTkwcHggLTI2MHB4O1xyXG4gIG1hcmdpbjogNHB4IDAgNHB4IDExcHg7XHJcbmA7XHJcblxyXG5jb25zdCBCb3R0b21MaW5lID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjRmNjtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ3JheTJ9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gO1xyXG5cclxuXHJcblxyXG5jb25zdCBSZWNlbnRTZWFyY2hlZFdvcmRzID0gKHsgZm9sZGVkIH06IHsgZm9sZGVkOiBib29sZWFuIH0pID0+IHtcclxuICBjb25zdCBbcmVjZW50U2VhcmNoZWRXb3Jkcywgc2V0UmVjZW50U2VhcmNoZWRXb3JkcyBdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBnZXRSZWNlbnRTZWFyY2hlZFdvcmRzID0gKCkgPT4ge1xyXG4gICAgZ2V0UmVjZW50U2VhcmNoZWRXb3Jkc0FwaSgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgc2V0UmVjZW50U2VhcmNoZWRXb3JkcyhkYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaWQ/OiBzdHJpbmcsIGFsbCA9IGZhbHNlKSA9PiB7XHJcbiAgICBkZWxldGVSZWNlbnRTZWFyY2hlZFdvcmRzKHtcclxuICAgICAgYWxsLFxyXG4gICAgICBpZCxcclxuICAgIH0pLnRoZW4oKCkgPT4gZ2V0UmVjZW50U2VhcmNoZWRXb3JkcygpKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFmb2xkZWQpIHtcclxuICAgICAgZ2V0UmVjZW50U2VhcmNoZWRXb3JkcygpO1xyXG4gICAgfVxyXG4gIH0sIFtmb2xkZWRdKTtcclxuXHJcbiAgaWYgKGZvbGRlZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPFRpdGxlPlxyXG4gICAgICAgIDxzcGFuPuy1nOq3vCDqsoDsg4nslrQ8L3NwYW4+PHNwYW4+7KCE7LK0IOyCreygnDwvc3Bhbj5cclxuICAgICAgPC9UaXRsZT5cclxuICAgICAge3JlY2VudFNlYXJjaGVkV29yZHM/Lm1hcCgoeyBpZCwgd29yZHMsIGRhdGUgfSkgPT4gKFxyXG4gICAgICAgIDxJdGVtIGtleT17aWR9PlxyXG4gICAgICAgICAgPFNlYXJjaEljV3JhcHBlcj5cclxuICAgICAgICAgICAgPFNlYXJjaEljIC8+XHJcbiAgICAgICAgICA8L1NlYXJjaEljV3JhcHBlcj5cclxuICAgICAgICAgIDxUZXh0V3JhcHBlcj5cclxuICAgICAgICAgICAgPFNlYXJjaGVkV29yZHM+e3dvcmRzfTwvU2VhcmNoZWRXb3Jkcz5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPERhdGU+e2RhdGV9PC9EYXRlPlxyXG4gICAgICAgICAgICAgIDxEZWxldGVJYyBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKGlkKX0vPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L1RleHRXcmFwcGVyPlxyXG4gICAgICAgIDwvSXRlbT5cclxuICAgICAgKSl9XHJcbiAgICAgIDxCb3R0b21MaW5lPlxyXG4gICAgICAgIDxidXR0b24+64+E7JuA66eQPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbj7snpDrj5nsoIDsnqUg64GE6riwPC9idXR0b24+XHJcbiAgICAgIDwvQm90dG9tTGluZT5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY2VudFNlYXJjaGVkV29yZHM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vLi4vQHN0eWxlcy9Db2xvcnMnO1xyXG5pbXBvcnQgUmVjZW50U2VhcmNoZWRXb3JkcyBmcm9tICcuL1JlY2VudFNlYXJjaGVkV29yZHMnO1xyXG5pbXBvcnQgeyBjb21tb25JY29uQ1NTIH0gZnJvbSAnLi4vLi4vQHN0eWxlcy9pbmRleCc7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICR7Y29sb3JzLm5hdmVyR3JlZW59O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgd2lkdGg6IDQ3NHB4O1xyXG4gIHBhZGRpbmc6IDEzcHggMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IERyb3Bkb3duQXJyb3cgPSBzdHlsZWQuYnV0dG9uKCh7IGZvbGRlZCB9KSA9PiBjc3NgXHJcbiAgJHtjb21tb25JY29uQ1NTfTtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkeyBmb2xkZWQgPyAnLTk2cHggLTI5NnB4JzogJy0xMDhweCAtMjk2cHgnfTtcclxuICBtYXJnaW46IDIycHggOXB4O1xyXG5gKTtcclxuXHJcbmNvbnN0IFNlYXJjaElDV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDU2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMubmF2ZXJHcmVlbn07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoSUMgPSBzdHlsZWQuYnV0dG9uYFxyXG4gICR7Y29tbW9uSWNvbkNTU307XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00MjBweCAtMjA4cHg7XHJcbmA7XHJcblxyXG5cclxuY29uc3QgU2VhcmNoSW5wdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ZvbGRlZCwgc2V0Rm9sZGVkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrRHJvcGRvd25BcnJvdyA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldEZvbGRlZCgocHJldikgPT4gIXByZXYpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8V3JhcHBlcj5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8RHJvcGRvd25BcnJvdyBmb2xkZWQ9e2ZvbGRlZH0gb25DbGljaz17b25DbGlja0Ryb3Bkb3duQXJyb3d9IC8+XHJcbiAgICAgICAgPFNlYXJjaElDV3JhcHBlcj5cclxuICAgICAgICAgIDxTZWFyY2hJQyAvPlxyXG4gICAgICAgIDwvU2VhcmNoSUNXcmFwcGVyPlxyXG4gICAgICA8L1dyYXBwZXI+XHJcbiAgICAgIDxSZWNlbnRTZWFyY2hlZFdvcmRzIGZvbGRlZD17Zm9sZGVkfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaElucHV0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgY29tbW9uSWNvbkNTUyB9IGZyb20gJy4uL0BzdHlsZXMvaW5kZXgnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL0BzdHlsZXMvQ29sb3JzJztcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IE1ha2VTdGFydFBhZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBjb2xvcjogJHtjb2xvcnMuYmxhY2swfTtcclxuICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIGFsaWduLWl0ZW1zOiBpbmhlcml0O1xyXG5gO1xyXG5cclxuY29uc3QgT3RoZXJTZXJ2aWNlcyA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICR7Y29sb3JzLmdyYXkwfTtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG5gO1xyXG5jb25zdCBKdW5pb3JOYXZlciA9IHN0eWxlZC5idXR0b25gXHJcbiAgJHtjb21tb25JY29uQ1NTfTtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI4NXB4IC0yNjdweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBIYXBweUJlYW4gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICR7Y29tbW9uSWNvbkNTU307XHJcbiAgd2lkdGg6IDM0cHg7XHJcbiAgaGVpZ2h0OiAxMXB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjBweCAtMTQ0cHg7XHJcbmA7XHJcblxyXG5jb25zdCBSaWdodEFycm93QnRuID0gc3R5bGVkLmJ1dHRvbmBcclxuICAke2NvbW1vbkljb25DU1N9O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjZweDtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTM3M3B4IC0zNTJweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxuYDtcclxuXHJcblxyXG5jb25zdCBUb3BMaW5lID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPE1ha2VTdGFydFBhZ2U+XHJcbiAgICAgICAgeyfrhKTsnbTrsoTrpbwg7Iuc7J6R7Y6Y7J207KeA66GcJ31cclxuICAgICAgICA8UmlnaHRBcnJvd0J0biAvPlxyXG4gICAgICA8L01ha2VTdGFydFBhZ2U+XHJcbiAgICAgIDxPdGhlclNlcnZpY2VzPlxyXG4gICAgICAgIDxKdW5pb3JOYXZlciAvPlxyXG4gICAgICAgIDxIYXBweUJlYW4gLz5cclxuICAgICAgPC9PdGhlclNlcnZpY2VzPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BMaW5lO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEluZGV4IGZyb20gJy4vU2VhcmNoSW5wdXQnO1xyXG5pbXBvcnQgVG9wTGluZSBmcm9tICcuL1RvcExpbmUnO1xyXG5pbXBvcnQgeyBjb21tb25JY29uQ1NTIH0gZnJvbSAnLi4vQHN0eWxlcy9pbmRleCc7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMb2dvID0gc3R5bGVkLmFgXHJcbiAgJHtjb21tb25JY29uQ1NTfTtcclxuICB3aWR0aDogMjIycHg7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE1OHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMThweDtcclxuYDtcclxuXHJcbmNvbnN0IFNlYXJjaElucHV0QXJlYSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxUb3BMaW5lIC8+XHJcbiAgICAgIDxTZWFyY2hJbnB1dEFyZWE+XHJcbiAgICAgICAgPExvZ28gaHJlZj1cImh0dHBzOi8vd3d3Lm5hdmVyLmNvbS9cIiAvPlxyXG4gICAgICAgIDxJbmRleCAvPlxyXG4gICAgICA8L1NlYXJjaElucHV0QXJlYT5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJcclxuZXhwb3J0IGNvbnN0IGR1c3RTdGF0dXNUZXh0ID0ge1xyXG4gIDE6ICfslYTso7wg64KY7IGoJyxcclxuICAyOiAn64KY7IGoJyxcclxuICAzOiAn7KKL7J2MJyxcclxuICA0OiAn7JWE7KO8IOyii+ydjCcsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2VhdGhlclRleHQgPSB7XHJcbiAgMTogXCLrp5HsnYxcIixcclxuICAyOiBcIu2dkOumvFwiLFxyXG4gIDM6IFwi67mE7Ji0XCIsXHJcbiAgNDogXCLriIjsmLRcIixcclxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2NvbW1vbkljb25DU1N9IGZyb20gXCIuLi8uLi9Ac3R5bGVzXCI7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4uLy4uLy4uL0BzdHlsZXMvQ29sb3JzXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBkdXN0U3RhdHVzVGV4dCB9IGZyb20gJy4vQGNvbnN0YW50cyc7XHJcblxyXG5jb25zdCBEdXN0U3RhdHVzSUMgPSBzdHlsZWQuZGl2YFxyXG4gICR7Y29tbW9uSWNvbkNTU307XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxOHB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzI3cHggLTMwNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIGFsaWduLWl0ZW1zOiBpbmhlcml0O1xyXG5gO1xyXG5cclxuY29uc3QgRmFjdG9yID0gc3R5bGVkLnNwYW5gXHJcbiAgZGlzcGxheTogaW5oZXJpdDtcclxuICBhbGlnbi1pdGVtczogaW5oZXJpdDtcclxuYDtcclxuXHJcbmNvbnN0IE5hbWUgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbmA7XHJcblxyXG5jb25zdCBEZXZpZGVyID0gc3R5bGVkLnNwYW5gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICB3aWR0aDogMXB4O1xyXG4gIGhlaWdodDogMTFweDtcclxuICBtYXJnaW46IDAgNnB4IDAgN3B4O1xyXG5gO1xyXG5cclxuY29uc3QgU3RhdHVzID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gO1xyXG5cclxuY29uc3QgTG9jYXRpb24gPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICBcclxuICA6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRHVzdEluZm8gPSAoeyBkdXN0LCBsb2NhdGlvbiB9IDpcclxuICAgICAgICAgICAgICAgICAgICAgIHsgZHVzdDogeyBmaW5lOiBudW1iZXI7IHVsdHJhRmluZTogbnVtYmVyOyB9OyBsb2NhdGlvbjogc3RyaW5nOyB9KSA9PiB7XHJcbiAgY29uc3QgeyBmaW5lLCB1bHRyYUZpbmUgfSA9IGR1c3Q7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RmFjdG9yPlxyXG4gICAgICAgIDxOYW1lPuuvuOyEuDwvTmFtZT5cclxuICAgICAgICA8RHVzdFN0YXR1c0lDIHN0YXR1cz17ZmluZX0vPlxyXG4gICAgICAgIDxTdGF0dXM+e2R1c3RTdGF0dXNUZXh0W2ZpbmVdfTwvU3RhdHVzPlxyXG4gICAgICA8L0ZhY3Rvcj5cclxuICAgICAgPERldmlkZXIgLz5cclxuICAgICAgPEZhY3Rvcj5cclxuICAgICAgICA8TmFtZT7stIjrr7jshLg8L05hbWU+XHJcbiAgICAgICAgPER1c3RTdGF0dXNJQyBzdGF0dXM9e3VsdHJhRmluZX0vPlxyXG4gICAgICAgIDxTdGF0dXM+e2R1c3RTdGF0dXNUZXh0W3VsdHJhRmluZV19PC9TdGF0dXM+XHJcbiAgICAgIDwvRmFjdG9yPlxyXG4gICAgICA8TG9jYXRpb24+e2xvY2F0aW9ufTwvTG9jYXRpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHVzdEluZm87XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdlYXRoZXJJY29uQ1NTIH0gZnJvbSBcIi4uLy4uL0BzdHlsZXNcIjtcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi4vLi4vLi4vQHN0eWxlcy9Db2xvcnNcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHdlYXRoZXJUZXh0IH0gZnJvbSAnLi9AY29uc3RhbnRzJztcclxuXHJcblxyXG5jb25zdCBXZWF0aGVySWMgPSBzdHlsZWQuZGl2YFxyXG4gICR7d2VhdGhlckljb25DU1N9O1xyXG4gIHdpZHRoOiAyOXB4O1xyXG4gIGhlaWdodDogMjlweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTNweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuYDtcclxuXHJcbmNvbnN0IEF2ZXJhZ2UgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBNaW4gPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHJlZDtcclxuYDtcclxuXHJcbmNvbnN0IFNsYXNoID0gc3R5bGVkLnNwYW5gXHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgbWFyZ2luOiAwIDJweDtcclxuYDtcclxuXHJcbmNvbnN0IE1heCA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogYmx1ZTtcclxuYDtcclxuXHJcbmNvbnN0IExvY2F0aW9uID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBXZWF0aGVySW5mbyA9ICh7IHdlYXRoZXIsIHRlbXBlcmF0dXJlLCBsb2NhdGlvbiB9IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHsgd2VhdGhlcjogbnVtYmVyOyB0ZW1wZXJhdHVyZTogeyBhdmVyYWdlOiBzdHJpbmc7IG1pbjogc3RyaW5nOyBtYXg6IHN0cmluZzt9OyBsb2NhdGlvbjogc3RyaW5nOyB9KSA9PiB7XHJcbiAgY29uc3QgeyBhdmVyYWdlLCBtaW4sIG1heCB9ID0gdGVtcGVyYXR1cmU7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxXZWF0aGVySWMgd2VhdGhlcj17d2VhdGhlcn0gLz5cclxuICAgICAgPEF2ZXJhZ2U+e2F2ZXJhZ2V9JiM4NDUxOyB7d2VhdGhlclRleHRbd2VhdGhlcl19PC9BdmVyYWdlPlxyXG4gICAgICA8TWluPnttaW59eycgJ30mIzg0NTE7PC9NaW4+XHJcbiAgICAgIDxTbGFzaD4vPC9TbGFzaD5cclxuICAgICAgPE1heD57bWF4fXsnICd9JiM4NDUxOzwvTWF4PlxyXG4gICAgICA8TG9jYXRpb24+e2xvY2F0aW9ufTwvTG9jYXRpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlckluZm87XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnaW5maW5pdGUtcmVhY3QtY2Fyb3VzZWwnO1xyXG5pbXBvcnQgcmVhbFRpbWVXZWF0aGVySW5mbyBmcm9tICcuLi8uLi8uLi9hcGkvZHVtbXlEYXRhL3JlYWxUaW1lV2VhdGhlckluZm8nO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi8uLi9Ac3R5bGVzL0NvbG9ycyc7XHJcbmltcG9ydCBEdXN0SW5mbyBmcm9tICcuL0R1c3RJbmZvJztcclxuaW1wb3J0IFdlYXRoZXJJbmZvIGZyb20gJy4vV2VhdGhlckluZm8nO1xyXG5cclxuXHJcbmNvbnN0IFN0eWxlZFNsaWRlciA9IHN0eWxlZChTbGlkZXIpYFxyXG4gIHdpZHRoOiAyNjBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IFNsaWRlID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMjQwcHg7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IFJlYWxUaW1lV2VhdGhlckluZm9TbGlkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkdXN0LCB3ZWF0aGVyLCB0ZW1wZXJhdHVyZSwgbG9jYXRpb259ID0gcmVhbFRpbWVXZWF0aGVySW5mbztcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFNsaWRlclxyXG4gICAgICBhdXRvcGxheT17dHJ1ZX1cclxuICAgICAgYXJyb3dzPXtmYWxzZX1cclxuICAgID5cclxuICAgICAgPFNsaWRlPlxyXG4gICAgICAgIDxEdXN0SW5mbyBkdXN0PXtkdXN0fSBsb2NhdGlvbj17bG9jYXRpb259Lz5cclxuICAgICAgPC9TbGlkZT5cclxuICAgICAgPFNsaWRlPlxyXG4gICAgICAgIDxXZWF0aGVySW5mbyB3ZWF0aGVyPXt3ZWF0aGVyfSB0ZW1wZXJhdHVyZT17dGVtcGVyYXR1cmV9IGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cclxuICAgICAgPC9TbGlkZT5cclxuICAgIDwvU3R5bGVkU2xpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFsVGltZVdlYXRoZXJJbmZvU2xpZGVyOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBjb21tb25JY29uQ1NTIH0gZnJvbSAnLi4vQHN0eWxlcy9pbmRleCc7XHJcblxyXG5jb25zdCBNYWlsSWMgPSBzdHlsZWQuZGl2YFxyXG4gICR7Y29tbW9uSWNvbkNTU307XHJcbiAgd2lkdGg6IDIxcHg7XHJcbiAgaGVpZ2h0OiAyMXB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00MjBweCAtMjc5cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogOXB4O1xyXG5gO1xyXG5cclxuY29uc3QgU2hvcHBpbmdMaXZlSWMgPSBzdHlsZWQuZGl2YFxyXG4gICR7Y29tbW9uSWNvbkNTU307XHJcbiAgd2lkdGg6IDU0cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDJweCAtMzA2cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5gO1xyXG5cclxuY29uc3QgUGxheUljID0gc3R5bGVkLmRpdmBcclxuICAke2NvbW1vbkljb25DU1N9O1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTRweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjU2cHggLTIxMnB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBbJzEnXTogTWFpbEljLFxyXG4gIFsnNiddOiBTaG9wcGluZ0xpdmVJYyxcclxuICBbJzcnXTogUGxheUljLFxyXG59OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB0b3BCYXJNZW51IGZyb20gJy4uLy4uL2FwaS9kdW1teURhdGEvdG9wQmFyTWVudSc7XHJcbmltcG9ydCB7IGNvbW1vbkljb25DU1MgfSBmcm9tICcuLi9Ac3R5bGVzL2luZGV4JztcclxuaW1wb3J0IFRvcE1lbnVCYXJJY29ucyBmcm9tICcuL1RvcE1lbnVCYXJJY29ucyc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vQHN0eWxlcy9Db2xvcnMnO1xyXG5pbXBvcnQgUmVhbFRpbWVXZWF0aGVySW5mb1NsaWRlciBmcm9tICcuL1JlYWxUaW1lV2VhdGhlckluZm9TbGlkZXInO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC51bGBcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiKDAgMCAwIC8gMTIlKTtcclxuYDtcclxuXHJcbmNvbnN0IE1lbnVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBpbmhlcml0O1xyXG5cclxuICA+IGxpIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IFByaW1hcnlNZW51SXRlbSA9IHN0eWxlZC5saWBcclxuICBjb2xvcjogJHtjb2xvcnMubmF2ZXJHcmVlbn07XHJcbiAgZGlzcGxheTogZmxleDtcclxuYDtcclxuXHJcbmNvbnN0IFNlZU1vcmVCdG4gPSBzdHlsZWQuYnV0dG9uKCh7IGZvbGRlZCB9KSA9PiBjc3NgXHJcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjMjAyMDIwO1xyXG4gIGFsaWduLWl0ZW1zOiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgY29sb3I6ICR7Zm9sZGVkID8gJ3Vuc2V0JyA6IGNvbG9ycy5uYXZlckdyZWVufTtcclxuICBcclxuICBzcGFuOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgJHshZm9sZGVkICYmIGB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICR7Y29sb3JzLm5hdmVyR3JlZW59YH07XHJcbiAgfVxyXG5gKTtcclxuXHJcbmNvbnN0IEFycm93QnRuID0gc3R5bGVkLmJ1dHRvbigoeyBmb2xkZWQgfSkgPT4gY3NzYFxyXG4gICR7Y29tbW9uSWNvbkNTU307XHJcbiAgd2lkdGg6IDExcHg7XHJcbiAgaGVpZ2h0OiA3cHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHtmb2xkZWQgPyAnLTgzcHggLTI5NnB4JyA6ICctNzBweCAtMjk2cHgnfTtcclxuICBtYXJnaW4tbGVmdDogN3B4O1xyXG5gKTtcclxuXHJcbmNvbnN0IFRvcE1lbnVCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBwcmltYXJ5LCBub25QcmltYXJ5IH0gPSB0b3BCYXJNZW51O1xyXG4gIGNvbnN0IFtmb2xkZWQsIHNldEZvbGRlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1NlZU1vcmVCdG4gPSAoKSA9PiB7XHJcbiAgICBzZXRGb2xkZWQoKHByZXYpID0+ICFwcmV2KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxNZW51V3JhcHBlcj5cclxuICAgICAgICB7cHJpbWFyeT8ubWFwKCh2KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBJYyA9IFRvcE1lbnVCYXJJY29uc1t2Py5pZF07XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UHJpbWFyeU1lbnVJdGVtIGtleT17dj8uaWR9PlxyXG4gICAgICAgICAgICAgIHt2Py5oYXNJY29uICYmIDxJYyAvPn1cclxuICAgICAgICAgICAgICB7dj8udGV4dCAmJiA8c3Bhbj57dj8udGV4dH08L3NwYW4+fVxyXG4gICAgICAgICAgICA8L1ByaW1hcnlNZW51SXRlbT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbm9uUHJpbWFyeT8ubWFwKCh2KSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e3Y/LmlkfT5cclxuICAgICAgICAgICAgICA8c3Bhbj57dj8udGV4dH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8U2VlTW9yZUJ0biBvbkNsaWNrPXtvbkNsaWNrU2VlTW9yZUJ0bn0gZm9sZGVkPXtmb2xkZWR9PlxyXG4gICAgICAgICAgPHNwYW4+e2ZvbGRlZCA/ICfrjZTrs7TquLAnIDogJ+ygkeq4sCd9PC9zcGFuPlxyXG4gICAgICAgICAgPEFycm93QnRuIGZvbGRlZD17Zm9sZGVkfSAvPlxyXG4gICAgICAgIDwvU2VlTW9yZUJ0bj5cclxuICAgICAgPC9NZW51V3JhcHBlcj5cclxuICAgICAgPFJlYWxUaW1lV2VhdGhlckluZm9TbGlkZXIgLz5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wTWVudUJhcjtcclxuIiwiY29uc3QgYWNjZXNzVG9rZW4gPSAnYTlhY2UwMjVjOTBjMGRhMjE2MTA3NWRhNmRkZDM0OTJhMmZjYTc3Nic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhY2Nlc3NUb2tlbjtcclxuIiwiXHJcbmNvbnN0IHJlYWxUaW1lV2VhdGhlckluZm8gPSB7XHJcbiAgZHVzdDoge1xyXG4gICAgZmluZTogMixcclxuICAgIHVsdHJhRmluZToyLFxyXG4gIH0sXHJcbiAgd2VhdGhlcjogMyxcclxuICB0ZW1wZXJhdHVyZToge1xyXG4gICAgYXZlcmFnZTogJzIzLjknLFxyXG4gICAgbWluOiAnMjEuMCcsXHJcbiAgICBtYXg6ICcyNS4zJyxcclxuICB9LFxyXG4gIGxvY2F0aW9uOiAn7Jet7IK864+ZJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlYWxUaW1lV2VhdGhlckluZm87XHJcbiIsImNvbnN0IHRvcEJhck1lbnUgPSB7XHJcbiAgcHJpbWFyeTogW1xyXG4gICAge1xyXG4gICAgICBpZDogJzEnLFxyXG4gICAgICB0ZXh0OiAn66mU7J28JyxcclxuICAgICAgaGFzSWNvbjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnMicsXHJcbiAgICAgIHRleHQ6ICfquYztjpgnLFxyXG4gICAgICBoYXNJY29uOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnMycsXHJcbiAgICAgIHRleHQ6ICfruJTroZzqt7gnLFxyXG4gICAgICBoYXNJY29uOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnNCcsXHJcbiAgICAgIHRleHQ6ICfsp4Dsi51pTicsXHJcbiAgICAgIGhhc0ljb246IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICc1JyxcclxuICAgICAgdGV4dDogJ+yHvO2VkScsXHJcbiAgICAgIGhhc0ljb246IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICc2JyxcclxuICAgICAgaGFzSWNvbjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnNycsXHJcbiAgICAgIHRleHQ6ICdQYXknLFxyXG4gICAgICBoYXNJY29uOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnNycsXHJcbiAgICAgIHRleHQ6ICdUVicsXHJcbiAgICAgIGhhc0ljb246IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgbm9uUHJpbWFyeSA6IFtcclxuICAgIHtcclxuICAgICAgaWQ6ICcxJyxcclxuICAgICAgdGV4dDogJ+yCrOyghCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJzInLFxyXG4gICAgICB0ZXh0OiAn64m07IqkJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnMycsXHJcbiAgICAgIHRleHQ6ICfspp3qtownLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICc0JyxcclxuICAgICAgdGV4dDogJ+u2gOuPmeyCsCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJzUnLFxyXG4gICAgICB0ZXh0OiAn7KeA64+EJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnNicsXHJcbiAgICAgIHRleHQ6ICdWSUJFJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnNycsXHJcbiAgICAgIHRleHQ6ICfssYUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICc4JyxcclxuICAgICAgdGV4dDogJ+ybue2IsCcsXHJcbiAgICB9LFxyXG4gIF1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvcEJhck1lbnU7IiwiaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbGxzL3JlcXVlc3QnO1xyXG5pbXBvcnQgQVBJUyBmcm9tICcuLi8uLi9AY29uc3RhbnRzL0FQSVMnO1xyXG5pbXBvcnQgTUVUSE9EUyBmcm9tICcuLi8uLi9AY29uc3RhbnRzL01FVEhPRFMnO1xyXG5cclxuY29uc3QgZGVsZXRlUmVjZW50U2VhcmNoZWRXb3JkcyA9IGFzeW5jICh7IGFsbCwgaWQgfTogeyBhbGw/OiBib29sZWFuOyBpZD86IHN0cmluZyB9KSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBBUElTLkdFVF9SRUNFTlRfU0VBUkNIRURfV09SRFMsXHJcbiAgICBtZXRob2Q6IE1FVEhPRFMuREVMRVRFLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBhbGwsXHJcbiAgICAgIGlkLFxyXG4gICAgfSxcclxuICAgIGlzQXV0aDogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWxldGVSZWNlbnRTZWFyY2hlZFdvcmRzO1xyXG4iLCJpbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlsbHMvcmVxdWVzdCc7XHJcbmltcG9ydCBBUElTIGZyb20gJy4uLy4uL0Bjb25zdGFudHMvQVBJUyc7XHJcbmltcG9ydCBNRVRIT0RTIGZyb20gJy4uLy4uL0Bjb25zdGFudHMvTUVUSE9EUyc7XHJcblxyXG5jb25zdCBnZXRSZWNlbnRTZWFyY2hlZFdvcmRzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0KHtcclxuICAgIHVybDogQVBJUy5HRVRfUkVDRU5UX1NFQVJDSEVEX1dPUkRTLFxyXG4gICAgbWV0aG9kOiBNRVRIT0RTLkdFVCxcclxuICAgIGlzQXV0aDogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRSZWNlbnRTZWFyY2hlZFdvcmRzO1xyXG4iLCJpbXBvcnQgYXhpb3MsIHtcclxuICBBeGlvc1Byb21pc2UsXHJcbiAgTWV0aG9kLFxyXG4gIEF4aW9zUmVxdWVzdENvbmZpZyxcclxufSBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBhY2Nlc3NUb2tlbiBmcm9tICcuLi8uLi9hcGkvZHVtbXlEYXRhTW9kZWxzL2FjY2Vzc1Rva2VuJztcclxuXHJcbmNvbnN0IHJlcXVlc3QgPSBhc3luYyAoe1xyXG4gIHVybCxcclxuICBtZXRob2QsXHJcbiAgY29uZmlnID0ge30sXHJcbiAgZGF0YSxcclxuICBpc0F1dGgsXHJcbn1cclxuOntcclxuICAgIHVybDogc3RyaW5nOyBtZXRob2Q6IHN0cmluZzsgY29uZmlnPzogQXhpb3NSZXF1ZXN0Q29uZmlnOyBkYXRhPyA6IHt9OyBpc0F1dGg6IGJvb2xlYW47XHJcbn0pID0+IHtcclxuXHJcbiAgaWYoIWNvbmZpZz8uaGVhZGVycykgY29uZmlnLmhlYWRlcnMgPSB7fTtcclxuXHJcbiAgaWYgKGlzQXV0aCkge1xyXG4gICAgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2FzdGVkTWV0aG9kOiBNZXRob2QgPSBtZXRob2QgYXMgTWV0aG9kO1xyXG5cclxuICBjb25zdCByZXNEYXRhID0gYXdhaXQgYXhpb3ModXJsLHtcclxuICAgIGRhdGE6IHsgLi4uZGF0YSB9LFxyXG4gICAgbWV0aG9kOiBjYXN0ZWRNZXRob2QsXHJcbiAgICAuLi5jb25maWcsXHJcbiAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncmVzLmRhdGE6JywgZGF0YSk7XHJcbiAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgfSkuY2F0Y2goKGUpID0+IHtcclxuICAgIHRocm93IGU7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZXNEYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcclxuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL01haW4vSGVhZGVyJztcbmltcG9ydCBUb3BNZW51QmFyIGZyb20gJy4vTWFpbi9Ub3BNZW51QmFyJztcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG5gO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4gKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8VG9wTWVudUJhciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW5maW5pdGUtcmVhY3QtY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJuYW1lcyI6WyJHRVRfUkVDRU5UX1NFQVJDSEVEX1dPUkRTIiwiR0VUIiwiUE9TVCIsIlBBVENIIiwiVVBEQVRFIiwiREVMRVRFIiwiYmxhY2tzIiwiYmxhY2swIiwiZ3JheXMiLCJncmF5MCIsImdyYXkxIiwiZ3JheTIiLCJncmVlbnMiLCJuYXZlckdyZWVuIiwiY3NzIiwiY29tbW9uSWNvbkNTUyIsImNvbW1vbkljb25DU1MyIiwid2VhdGhlckljb25DU1MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiY29sb3JzIiwiZGVsZXRlUmVjZW50U2VhcmNoZWRXb3JkcyIsImdldFJlY2VudFNlYXJjaGVkV29yZHNBcGkiLCJXcmFwcGVyIiwiZGl2IiwiVGl0bGUiLCJJdGVtIiwibGkiLCJTZWFyY2hJY1dyYXBwZXIiLCJTZWFyY2hJYyIsInNwYW4iLCJUZXh0V3JhcHBlciIsIlNlYXJjaGVkV29yZHMiLCJEYXRlIiwiRGVsZXRlSWMiLCJidXR0b24iLCJCb3R0b21MaW5lIiwiUmVjZW50U2VhcmNoZWRXb3JkcyIsImZvbGRlZCIsInJlY2VudFNlYXJjaGVkV29yZHMiLCJzZXRSZWNlbnRTZWFyY2hlZFdvcmRzIiwiZ2V0UmVjZW50U2VhcmNoZWRXb3JkcyIsInRoZW4iLCJkYXRhIiwiZGVsZXRlSXRlbSIsImlkIiwiYWxsIiwibWFwIiwid29yZHMiLCJkYXRlIiwiSW5wdXQiLCJpbnB1dCIsIkRyb3Bkb3duQXJyb3ciLCJTZWFyY2hJQ1dyYXBwZXIiLCJTZWFyY2hJQyIsIlNlYXJjaElucHV0Iiwic2V0Rm9sZGVkIiwib25DbGlja0Ryb3Bkb3duQXJyb3ciLCJwcmV2IiwiTWFrZVN0YXJ0UGFnZSIsIk90aGVyU2VydmljZXMiLCJKdW5pb3JOYXZlciIsIkhhcHB5QmVhbiIsIlJpZ2h0QXJyb3dCdG4iLCJUb3BMaW5lIiwiSW5kZXgiLCJMb2dvIiwiYSIsIlNlYXJjaElucHV0QXJlYSIsIkhlYWRlciIsImR1c3RTdGF0dXNUZXh0Iiwid2VhdGhlclRleHQiLCJEdXN0U3RhdHVzSUMiLCJGYWN0b3IiLCJOYW1lIiwiRGV2aWRlciIsIlN0YXR1cyIsIkxvY2F0aW9uIiwiRHVzdEluZm8iLCJkdXN0IiwibG9jYXRpb24iLCJmaW5lIiwidWx0cmFGaW5lIiwiV2VhdGhlckljIiwiQXZlcmFnZSIsIk1pbiIsIlNsYXNoIiwiTWF4IiwiV2VhdGhlckluZm8iLCJ3ZWF0aGVyIiwidGVtcGVyYXR1cmUiLCJhdmVyYWdlIiwibWluIiwibWF4IiwiU2xpZGVyIiwicmVhbFRpbWVXZWF0aGVySW5mbyIsIlN0eWxlZFNsaWRlciIsIlNsaWRlIiwiUmVhbFRpbWVXZWF0aGVySW5mb1NsaWRlciIsIk1haWxJYyIsIlNob3BwaW5nTGl2ZUljIiwiUGxheUljIiwidG9wQmFyTWVudSIsIlRvcE1lbnVCYXJJY29ucyIsInVsIiwiTWVudVdyYXBwZXIiLCJQcmltYXJ5TWVudUl0ZW0iLCJTZWVNb3JlQnRuIiwiQXJyb3dCdG4iLCJUb3BNZW51QmFyIiwicHJpbWFyeSIsIm5vblByaW1hcnkiLCJvbkNsaWNrU2VlTW9yZUJ0biIsInYiLCJJYyIsImhhc0ljb24iLCJ0ZXh0IiwiYWNjZXNzVG9rZW4iLCJyZXF1ZXN0IiwiQVBJUyIsIk1FVEhPRFMiLCJ1cmwiLCJtZXRob2QiLCJpc0F1dGgiLCJheGlvcyIsImNvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY2FzdGVkTWV0aG9kIiwicmVzRGF0YSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImUiLCJNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==