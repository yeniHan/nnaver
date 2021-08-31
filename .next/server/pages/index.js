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
  background-repeat: no-repeat;
`;
const commonIconCSS2 = styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
  display: inline-block;
  overflow: hidden;
  color: transparent;
  white-space: nowrap;
  vertical-align: top;
  background: url(https://ssl.pstatic.net/sstatic/search/pc/img/sp_autocomplete_4d068feb.png) 0 0 no-repeat;
  background-size: 290px 274px;
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
        onClick: onClickDropdownArrow,
        folded: folded
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
  all = false,
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

var _jsxFileName = "C:\\Users\\Yena Han\\Documents\\nnaver\\pages\\index.js";

function Main() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Main_Header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QURGO0FBS0Q7Ozs7Ozs7Ozs7QUNSRDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25uYXZlci8uL3BhZ2VzL0Bjb25zdGFudHMvQVBJUy50cyIsIndlYnBhY2s6Ly9ubmF2ZXIvLi9wYWdlcy9AY29uc3RhbnRzL01FVEhPRFMudHMiLCJ3ZWJwYWNrOi8vbm5hdmVyLy4vcGFnZXMvQHN0eWxlcy9Db2xvcnMudHMiLCJ3ZWJwYWNrOi8vbm5hdmVyLy4vcGFnZXMvTWFpbi9Ac3R5bGVzL2luZGV4LnRzIiwid2VicGFjazovL25uYXZlci8uL3BhZ2VzL01haW4vSGVhZGVyL1NlYXJjaElucHV0L1JlY2VudFNlYXJjaGVkV29yZHMudHN4Iiwid2VicGFjazovL25uYXZlci8uL3BhZ2VzL01haW4vSGVhZGVyL1NlYXJjaElucHV0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9ubmF2ZXIvLi9wYWdlcy9NYWluL0hlYWRlci9Ub3BMaW5lLnRzeCIsIndlYnBhY2s6Ly9ubmF2ZXIvLi9wYWdlcy9NYWluL0hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbm5hdmVyLy4vcGFnZXMvYXBpL2R1bW15RGF0YU1vZGVscy9hY2Nlc3NUb2tlbi50cyIsIndlYnBhY2s6Ly9ubmF2ZXIvLi9wYWdlcy9mcm9udC1hcGlzL2FwaXMvZGVsZXRlUmVjZW50U2VhcmNoZWRXb3Jkcy50cyIsIndlYnBhY2s6Ly9ubmF2ZXIvLi9wYWdlcy9mcm9udC1hcGlzL2FwaXMvZ2V0UmVjZW50U2VhcmNoZWRXb3Jkcy50cyIsIndlYnBhY2s6Ly9ubmF2ZXIvLi9wYWdlcy9mcm9udC1hcGlzL3V0aWxscy9yZXF1ZXN0LnRzIiwid2VicGFjazovL25uYXZlci8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL25uYXZlci9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbm5hdmVyL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9ubmF2ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9ubmF2ZXIvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdFVF9SRUNFTlRfU0VBUkNIRURfV09SRFMgPSAnYXBpL3JlcXVlc3Rfc2VhcmNoZWRfd29yZHMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBHRVRfUkVDRU5UX1NFQVJDSEVEX1dPUkRTLFxyXG59O1xyXG4iLCJjb25zdCBHRVQgPSAnR0VUJztcclxuXHJcbmNvbnN0IFBPU1QgPSAnUE9TVCc7XHJcblxyXG5jb25zdCBQQVRDSCA9ICdQQVRDSCc7XHJcblxyXG5jb25zdCBVUERBVEUgPSAnVVBEQVRFJztcclxuXHJcbmNvbnN0IERFTEVURSA9ICdERUxFVEUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIEdFVCxcclxuICBQT1NULFxyXG4gIFBBVENILFxyXG4gIFVQREFURSxcclxuICBERUxFVEUsXHJcbn07XHJcbiIsImNvbnN0IGJsYWNrcyA9IHtcclxuICBibGFjazA6IFwiIzQwNDA0MFwiXHJcbn07XHJcblxyXG5jb25zdCBncmF5cyA9IHtcclxuICBncmF5MDogXCIjZTRlOGViXCIsXHJcbiAgZ3JheTE6IFwiI2U0ZTdlOFwiLFxyXG4gIGdyYXkyOiBcIiNmMWY0ZjZcIixcclxufTtcclxuXHJcbmNvbnN0IGdyZWVucyA9IHtcclxuICBuYXZlckdyZWVuOiBcIiMxOWNlNjBcIixcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgLi4uYmxhY2tzLFxyXG4gIC4uLmdyYXlzLFxyXG4gIC4uLmdyZWVucyxcclxufTtcclxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbW1vbkljb25DU1MgPSBjc3NgXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcy5wc3RhdGljLm5ldC9zdGF0aWMvd3d3L2ltZy91aXQvMjAyMS9zcF9tYWluXzU3ZjA3My5wbmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNDQ0cHggNDM5cHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tb25JY29uQ1NTMiA9IGNzc2BcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL3NzbC5wc3RhdGljLm5ldC9zc3RhdGljL3NlYXJjaC9wYy9pbWcvc3BfYXV0b2NvbXBsZXRlXzRkMDY4ZmViLnBuZykgMCAwIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDI5MHB4IDI3NHB4O1xyXG5gO1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uLy4uL0BzdHlsZXMvQ29sb3JzJztcclxuaW1wb3J0IGRlbGV0ZVJlY2VudFNlYXJjaGVkV29yZHMgZnJvbSAnLi4vLi4vLi4vZnJvbnQtYXBpcy9hcGlzL2RlbGV0ZVJlY2VudFNlYXJjaGVkV29yZHMnO1xyXG5pbXBvcnQgeyBjb21tb25JY29uQ1NTMiB9IGZyb20gJy4uLy4uL0BzdHlsZXMvaW5kZXgnO1xyXG5pbXBvcnQgZ2V0UmVjZW50U2VhcmNoZWRXb3Jkc0FwaSBmcm9tIFwiLi4vLi4vLi4vZnJvbnQtYXBpcy9hcGlzL2dldFJlY2VudFNlYXJjaGVkV29yZHNcIjtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLmdyYXkxfTtcclxuICBib3JkZXItdG9wOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xyXG4gIFxyXG4gID4gZGl2IHtcclxuICAgIHBhZGRpbmc6IDdweCA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gID4gbGkge1xyXG4gICAgcGFkZGluZzogNXB4IDhweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDhweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gO1xyXG5cclxuY29uc3QgSXRlbSA9IHN0eWxlZC5saWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2hJY1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdyYXkxfTtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMDQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2hJYyA9IHN0eWxlZC5zcGFuYFxyXG4gICR7Y29tbW9uSWNvbkNTUzJ9O1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzZweCAtMjYwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoZWRXb3JkcyA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRGF0ZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuYDtcclxuXHJcbmNvbnN0IERlbGV0ZUljID0gc3R5bGVkLmJ1dHRvbmBcclxuICAke2NvbW1vbkljb25DU1MyfTtcclxuICB3aWR0aDogMTFweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTkwcHggLTI2MHB4O1xyXG4gIG1hcmdpbjogNHB4IDAgNHB4IDExcHg7XHJcbmA7XHJcblxyXG5jb25zdCBCb3R0b21MaW5lID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YxZjRmNjtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ3JheTJ9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gO1xyXG5cclxuXHJcblxyXG5jb25zdCBSZWNlbnRTZWFyY2hlZFdvcmRzID0gKHsgZm9sZGVkIH06IHsgZm9sZGVkOiBib29sZWFuIH0pID0+IHtcclxuICBjb25zdCBbcmVjZW50U2VhcmNoZWRXb3Jkcywgc2V0UmVjZW50U2VhcmNoZWRXb3JkcyBdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBnZXRSZWNlbnRTZWFyY2hlZFdvcmRzID0gKCkgPT4ge1xyXG4gICAgZ2V0UmVjZW50U2VhcmNoZWRXb3Jkc0FwaSgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgc2V0UmVjZW50U2VhcmNoZWRXb3JkcyhkYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaWQ/OiBzdHJpbmcsIGFsbCA9IGZhbHNlKSA9PiB7XHJcbiAgICBkZWxldGVSZWNlbnRTZWFyY2hlZFdvcmRzKHtcclxuICAgICAgYWxsLFxyXG4gICAgICBpZCxcclxuICAgIH0pLnRoZW4oKCkgPT4gZ2V0UmVjZW50U2VhcmNoZWRXb3JkcygpKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFmb2xkZWQpIHtcclxuICAgICAgZ2V0UmVjZW50U2VhcmNoZWRXb3JkcygpO1xyXG4gICAgfVxyXG4gIH0sIFtmb2xkZWRdKTtcclxuXHJcbiAgaWYgKGZvbGRlZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlcj5cclxuICAgICAgPFRpdGxlPlxyXG4gICAgICAgIDxzcGFuPuy1nOq3vCDqsoDsg4nslrQ8L3NwYW4+PHNwYW4+7KCE7LK0IOyCreygnDwvc3Bhbj5cclxuICAgICAgPC9UaXRsZT5cclxuICAgICAge3JlY2VudFNlYXJjaGVkV29yZHM/Lm1hcCgoeyBpZCwgd29yZHMsIGRhdGUgfSkgPT4gKFxyXG4gICAgICAgIDxJdGVtIGtleT17aWR9PlxyXG4gICAgICAgICAgPFNlYXJjaEljV3JhcHBlcj5cclxuICAgICAgICAgICAgPFNlYXJjaEljIC8+XHJcbiAgICAgICAgICA8L1NlYXJjaEljV3JhcHBlcj5cclxuICAgICAgICAgIDxUZXh0V3JhcHBlcj5cclxuICAgICAgICAgICAgPFNlYXJjaGVkV29yZHM+e3dvcmRzfTwvU2VhcmNoZWRXb3Jkcz5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPERhdGU+e2RhdGV9PC9EYXRlPlxyXG4gICAgICAgICAgICAgIDxEZWxldGVJYyBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKGlkKX0vPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L1RleHRXcmFwcGVyPlxyXG4gICAgICAgIDwvSXRlbT5cclxuICAgICAgKSl9XHJcbiAgICAgIDxCb3R0b21MaW5lPlxyXG4gICAgICAgIDxidXR0b24+64+E7JuA66eQPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbj7snpDrj5nsoIDsnqUg64GE6riwPC9idXR0b24+XHJcbiAgICAgIDwvQm90dG9tTGluZT5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY2VudFNlYXJjaGVkV29yZHM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vLi4vQHN0eWxlcy9Db2xvcnMnO1xyXG5pbXBvcnQgUmVjZW50U2VhcmNoZWRXb3JkcyBmcm9tICcuL1JlY2VudFNlYXJjaGVkV29yZHMnO1xyXG5pbXBvcnQgeyBjb21tb25JY29uQ1NTIH0gZnJvbSAnLi4vLi4vQHN0eWxlcy9pbmRleCc7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICR7Y29sb3JzLm5hdmVyR3JlZW59O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgd2lkdGg6IDQ3NHB4O1xyXG4gIHBhZGRpbmc6IDEzcHggMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IERyb3Bkb3duQXJyb3cgPSBzdHlsZWQuYnV0dG9uKCh7IGZvbGRlZCB9KSA9PiBjc3NgXHJcbiAgJHtjb21tb25JY29uQ1NTfTtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDVweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkeyBmb2xkZWQgPyAnLTk2cHggLTI5NnB4JzogJy0xMDhweCAtMjk2cHgnfTtcclxuICBtYXJnaW46IDIycHggOXB4O1xyXG5gKTtcclxuXHJcbmNvbnN0IFNlYXJjaElDV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDU2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMubmF2ZXJHcmVlbn07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoSUMgPSBzdHlsZWQuYnV0dG9uYFxyXG4gICR7Y29tbW9uSWNvbkNTU307XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00MjBweCAtMjA4cHg7XHJcbmA7XHJcblxyXG5cclxuY29uc3QgU2VhcmNoSW5wdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ZvbGRlZCwgc2V0Rm9sZGVkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrRHJvcGRvd25BcnJvdyA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldEZvbGRlZCgocHJldikgPT4gIXByZXYpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8V3JhcHBlcj5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8RHJvcGRvd25BcnJvdyBmb2xkZWQ9e2ZvbGRlZH0gb25DbGljaz17b25DbGlja0Ryb3Bkb3duQXJyb3d9IGZvbGRlZD17Zm9sZGVkfSAvPlxyXG4gICAgICAgIDxTZWFyY2hJQ1dyYXBwZXI+XHJcbiAgICAgICAgICA8U2VhcmNoSUMgLz5cclxuICAgICAgICA8L1NlYXJjaElDV3JhcHBlcj5cclxuICAgICAgPC9XcmFwcGVyPlxyXG4gICAgICA8UmVjZW50U2VhcmNoZWRXb3JkcyBmb2xkZWQ9e2ZvbGRlZH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hJbnB1dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGNvbW1vbkljb25DU1MgfSBmcm9tICcuLi9Ac3R5bGVzL2luZGV4JztcclxuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi9Ac3R5bGVzL0NvbG9ycyc7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBNYWtlU3RhcnRQYWdlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6ICR7Y29sb3JzLmJsYWNrMH07XHJcbiAgZGlzcGxheTogaW5oZXJpdDtcclxuICBhbGlnbi1pdGVtczogaW5oZXJpdDtcclxuYDtcclxuXHJcbmNvbnN0IE90aGVyU2VydmljZXMgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAke2NvbG9ycy5ncmF5MH07XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxuYDtcclxuY29uc3QgSnVuaW9yTmF2ZXIgPSBzdHlsZWQuYnV0dG9uYFxyXG4gICR7Y29tbW9uSWNvbkNTU307XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yODVweCAtMjY3cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSGFwcHlCZWFuID0gc3R5bGVkLmJ1dHRvbmBcclxuICAke2NvbW1vbkljb25DU1N9O1xyXG4gIHdpZHRoOiAzNHB4O1xyXG4gIGhlaWdodDogMTFweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjIwcHggLTE0NHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUmlnaHRBcnJvd0J0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgJHtjb21tb25JY29uQ1NTfTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zNzNweCAtMzUycHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbmA7XHJcblxyXG5cclxuY29uc3QgVG9wTGluZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXI+XHJcbiAgICAgIDxNYWtlU3RhcnRQYWdlPlxyXG4gICAgICAgIHsn64Sk7J2067KE66W8IOyLnOyeke2OmOydtOyngOuhnCd9XHJcbiAgICAgICAgPFJpZ2h0QXJyb3dCdG4gLz5cclxuICAgICAgPC9NYWtlU3RhcnRQYWdlPlxyXG4gICAgICA8T3RoZXJTZXJ2aWNlcz5cclxuICAgICAgICA8SnVuaW9yTmF2ZXIgLz5cclxuICAgICAgICA8SGFwcHlCZWFuIC8+XHJcbiAgICAgIDwvT3RoZXJTZXJ2aWNlcz5cclxuICAgIDwvV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wTGluZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBJbmRleCBmcm9tICcuL1NlYXJjaElucHV0JztcclxuaW1wb3J0IFRvcExpbmUgZnJvbSAnLi9Ub3BMaW5lJztcclxuaW1wb3J0IHsgY29tbW9uSWNvbkNTUyB9IGZyb20gJy4uL0BzdHlsZXMvaW5kZXgnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTG9nbyA9IHN0eWxlZC5hYFxyXG4gICR7Y29tbW9uSWNvbkNTU307XHJcbiAgd2lkdGg6IDIyMnB4O1xyXG4gIGhlaWdodDogNTJweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xNThweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2hJbnB1dEFyZWEgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8VG9wTGluZSAvPlxyXG4gICAgICA8U2VhcmNoSW5wdXRBcmVhPlxyXG4gICAgICAgIDxMb2dvIGhyZWY9XCJodHRwczovL3d3dy5uYXZlci5jb20vXCIgLz5cclxuICAgICAgICA8SW5kZXggLz5cclxuICAgICAgPC9TZWFyY2hJbnB1dEFyZWE+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiY29uc3QgYWNjZXNzVG9rZW4gPSAnYTlhY2UwMjVjOTBjMGRhMjE2MTA3NWRhNmRkZDM0OTJhMmZjYTc3Nic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhY2Nlc3NUb2tlbjtcclxuIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbGxzL3JlcXVlc3QnO1xyXG5pbXBvcnQgQVBJUyBmcm9tICcuLi8uLi9AY29uc3RhbnRzL0FQSVMnO1xyXG5pbXBvcnQgTUVUSE9EUyBmcm9tICcuLi8uLi9AY29uc3RhbnRzL01FVEhPRFMnO1xyXG5cclxuY29uc3QgZGVsZXRlUmVjZW50U2VhcmNoZWRXb3JkcyA9IGFzeW5jICh7IGFsbCA9IGZhbHNlLCBpZCB9OiB7IGFsbD86IGJvb2xlYW47IGlkPzogc3RyaW5nIH0pID0+IHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdCh7XHJcbiAgICB1cmw6IEFQSVMuR0VUX1JFQ0VOVF9TRUFSQ0hFRF9XT1JEUyxcclxuICAgIG1ldGhvZDogTUVUSE9EUy5ERUxFVEUsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGFsbCxcclxuICAgICAgaWQsXHJcbiAgICB9LFxyXG4gICAgaXNBdXRoOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVJlY2VudFNlYXJjaGVkV29yZHM7XHJcbiIsImltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxscy9yZXF1ZXN0JztcclxuaW1wb3J0IEFQSVMgZnJvbSAnLi4vLi4vQGNvbnN0YW50cy9BUElTJztcclxuaW1wb3J0IE1FVEhPRFMgZnJvbSAnLi4vLi4vQGNvbnN0YW50cy9NRVRIT0RTJztcclxuXHJcbmNvbnN0IGdldFJlY2VudFNlYXJjaGVkV29yZHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBBUElTLkdFVF9SRUNFTlRfU0VBUkNIRURfV09SRFMsXHJcbiAgICBtZXRob2Q6IE1FVEhPRFMuR0VULFxyXG4gICAgaXNBdXRoOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFJlY2VudFNlYXJjaGVkV29yZHM7XHJcbiIsImltcG9ydCBheGlvcywge1xyXG4gIEF4aW9zUHJvbWlzZSxcclxuICBNZXRob2QsXHJcbiAgQXhpb3NSZXF1ZXN0Q29uZmlnLFxyXG59IGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGFjY2Vzc1Rva2VuIGZyb20gJy4uLy4uL2FwaS9kdW1teURhdGFNb2RlbHMvYWNjZXNzVG9rZW4nO1xyXG5cclxuY29uc3QgcmVxdWVzdCA9IGFzeW5jICh7XHJcbiAgdXJsLFxyXG4gIG1ldGhvZCxcclxuICBjb25maWcgPSB7fSxcclxuICBkYXRhLFxyXG4gIGlzQXV0aCxcclxufVxyXG46e1xyXG4gICAgdXJsOiBzdHJpbmc7IG1ldGhvZDogc3RyaW5nOyBjb25maWc/OiBBeGlvc1JlcXVlc3RDb25maWc7IGRhdGE/IDoge307IGlzQXV0aDogYm9vbGVhbjtcclxufSkgPT4ge1xyXG5cclxuICBpZighY29uZmlnPy5oZWFkZXJzKSBjb25maWcuaGVhZGVycyA9IHt9O1xyXG5cclxuICBpZiAoaXNBdXRoKSB7XHJcbiAgICBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2FjY2Vzc1Rva2VufWA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjYXN0ZWRNZXRob2Q6IE1ldGhvZCA9IG1ldGhvZCBhcyBNZXRob2Q7XHJcblxyXG4gIGNvbnN0IHJlc0RhdGEgPSBhd2FpdCBheGlvcyh1cmwse1xyXG4gICAgZGF0YTogeyAuLi5kYXRhIH0sXHJcbiAgICBtZXRob2Q6IGNhc3RlZE1ldGhvZCxcclxuICAgIC4uLmNvbmZpZyxcclxuICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdyZXMuZGF0YTonLCBkYXRhKTtcclxuICAgIHJldHVybiByZXMuZGF0YTtcclxuICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgdGhyb3cgZTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlc0RhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xyXG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vTWFpbi9IZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwibmFtZXMiOlsiR0VUX1JFQ0VOVF9TRUFSQ0hFRF9XT1JEUyIsIkdFVCIsIlBPU1QiLCJQQVRDSCIsIlVQREFURSIsIkRFTEVURSIsImJsYWNrcyIsImJsYWNrMCIsImdyYXlzIiwiZ3JheTAiLCJncmF5MSIsImdyYXkyIiwiZ3JlZW5zIiwibmF2ZXJHcmVlbiIsImNzcyIsImNvbW1vbkljb25DU1MiLCJjb21tb25JY29uQ1NTMiIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJjb2xvcnMiLCJkZWxldGVSZWNlbnRTZWFyY2hlZFdvcmRzIiwiZ2V0UmVjZW50U2VhcmNoZWRXb3Jkc0FwaSIsIldyYXBwZXIiLCJkaXYiLCJUaXRsZSIsIkl0ZW0iLCJsaSIsIlNlYXJjaEljV3JhcHBlciIsIlNlYXJjaEljIiwic3BhbiIsIlRleHRXcmFwcGVyIiwiU2VhcmNoZWRXb3JkcyIsIkRhdGUiLCJEZWxldGVJYyIsImJ1dHRvbiIsIkJvdHRvbUxpbmUiLCJSZWNlbnRTZWFyY2hlZFdvcmRzIiwiZm9sZGVkIiwicmVjZW50U2VhcmNoZWRXb3JkcyIsInNldFJlY2VudFNlYXJjaGVkV29yZHMiLCJnZXRSZWNlbnRTZWFyY2hlZFdvcmRzIiwidGhlbiIsImRhdGEiLCJkZWxldGVJdGVtIiwiaWQiLCJhbGwiLCJtYXAiLCJ3b3JkcyIsImRhdGUiLCJJbnB1dCIsImlucHV0IiwiRHJvcGRvd25BcnJvdyIsIlNlYXJjaElDV3JhcHBlciIsIlNlYXJjaElDIiwiU2VhcmNoSW5wdXQiLCJzZXRGb2xkZWQiLCJvbkNsaWNrRHJvcGRvd25BcnJvdyIsInByZXYiLCJNYWtlU3RhcnRQYWdlIiwiT3RoZXJTZXJ2aWNlcyIsIkp1bmlvck5hdmVyIiwiSGFwcHlCZWFuIiwiUmlnaHRBcnJvd0J0biIsIlRvcExpbmUiLCJJbmRleCIsIkxvZ28iLCJhIiwiU2VhcmNoSW5wdXRBcmVhIiwiSGVhZGVyIiwiYWNjZXNzVG9rZW4iLCJyZXF1ZXN0IiwiQVBJUyIsIk1FVEhPRFMiLCJ1cmwiLCJtZXRob2QiLCJpc0F1dGgiLCJheGlvcyIsImNvbmZpZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY2FzdGVkTWV0aG9kIiwicmVzRGF0YSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImUiLCJNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==