module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1YML":
/***/ (function(module, exports) {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("bZV+");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4rJZ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AttachFile");

/***/ }),

/***/ "9MsW":
/***/ (function(module, exports) {

module.exports = require("email-validator");

/***/ }),

/***/ "9nnq":
/***/ (function(module, exports) {

module.exports = require("react-firebase-hooks/firestore");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "G9A8":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/InsertEmoticon");

/***/ }),

/***/ "HWfr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Ktyj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return provider; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pNaP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

const firebaseConfig = {
  apiKey: "AIzaSyB3FfqVsfG0ZCdzIS7j5Kg6IC7spnSEpIM",
  authDomain: "whatsapp-2-d8339.firebaseapp.com",
  projectId: "whatsapp-2-d8339",
  storageBucket: "whatsapp-2-d8339.appspot.com",
  messagingSenderId: "21144754375",
  appId: "1:21144754375:web:7977a0027a94de69db86e2"
};
const app = !firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig) : firebase__WEBPACK_IMPORTED_MODULE_0___default.a.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();


/***/ }),

/***/ "PtdR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const getRecipientEmail = (users, userLoggedIn) => users === null || users === void 0 ? void 0 : users.filter(userToFilter => userToFilter !== (userLoggedIn === null || userLoggedIn === void 0 ? void 0 : userLoggedIn.email))[0];

/* harmony default export */ __webpack_exports__["a"] = (getRecipientEmail);

/***/ }),

/***/ "UQSI":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "bZV+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./firebase.js
var firebase = __webpack_require__("Ktyj");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/Sidebar.js + 1 modules
var Sidebar = __webpack_require__("hAPS");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-firebase-hooks/auth"
var auth_ = __webpack_require__("1YML");

// EXTERNAL MODULE: external "react-firebase-hooks/firestore"
var firestore_ = __webpack_require__("9nnq");

// EXTERNAL MODULE: ./utils/getRecipientEmail.js
var getRecipientEmail = __webpack_require__("PtdR");

// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__("pNaP");
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);

// EXTERNAL MODULE: external "timeago-react"
var external_timeago_react_ = __webpack_require__("mAUa");
var external_timeago_react_default = /*#__PURE__*/__webpack_require__.n(external_timeago_react_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/icons/AttachFile"
var AttachFile_ = __webpack_require__("4rJZ");
var AttachFile_default = /*#__PURE__*/__webpack_require__.n(AttachFile_);

// EXTERNAL MODULE: external "@material-ui/icons/InsertEmoticon"
var InsertEmoticon_ = __webpack_require__("G9A8");
var InsertEmoticon_default = /*#__PURE__*/__webpack_require__.n(InsertEmoticon_);

// EXTERNAL MODULE: external "@material-ui/icons/MoreVert"
var MoreVert_ = __webpack_require__("UQSI");
var MoreVert_default = /*#__PURE__*/__webpack_require__.n(MoreVert_);

// EXTERNAL MODULE: external "@material-ui/icons/Mic"
var Mic_ = __webpack_require__("iHqE");
var Mic_default = /*#__PURE__*/__webpack_require__.n(Mic_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./components/Message.js







function Message({
  user,
  message
}) {
  const [userLoggedIn] = Object(auth_["useAuthState"])(firebase["a" /* auth */]);
  const TypeOfMessage = user === userLoggedIn.email ? Sender : Reciever;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(TypeOfMessage, {
      children: [message.message, /*#__PURE__*/Object(jsx_runtime_["jsx"])(Timestamp, {
        children: message.timestamp ? external_moment_default()(message.timestamp).format("LT") : "..."
      })]
    })
  });
}

/* harmony default export */ var components_Message = (Message);
const Container = external_styled_components_default.a.div``;
const MessageElement = external_styled_components_default.a.p`
  width: fit-content;
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 26px;
  position: relative;
  text-align: right;
`;
const Sender = external_styled_components_default()(MessageElement)`
  margin-left: auto;
  background-color: #dcf8c6;
`;
const Reciever = external_styled_components_default()(MessageElement)`
  background-color: whitesmoke;
  text-align: left;
`;
const Timestamp = external_styled_components_default.a.span`
  color: gray;
  padding: 10px;
  font-size: 9px;
  position: absolute;
  bottom: 0;
  text-align: right;
  right: 0;
`;
// CONCATENATED MODULE: ./components/ChatScreen.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















function ChatScreen({
  chat,
  messages
}) {
  var _recipientSnapshot$do, _recipientSnapshot$do2, _recipient$lastSeen, _recipient$lastSeen2;

  const [user] = Object(auth_["useAuthState"])(firebase["a" /* auth */]);
  const router = Object(router_["useRouter"])();
  const endOfMessagesRef = Object(external_react_["useRef"])(null);
  const {
    0: input,
    1: setInput
  } = Object(external_react_["useState"])("");
  const [messagesSnapshot] = Object(firestore_["useCollection"])(firebase["b" /* db */].collection("chats").doc(router.query.id).collection("messages").orderBy("timestamp", "asc"));
  const [recipientSnapshot] = Object(firestore_["useCollection"])(firebase["b" /* db */].collection("users").where("email", "==", Object(getRecipientEmail["a" /* default */])(chat.users, user)));

  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map(message => {
        var _message$data$timesta;

        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Message, {
          user: message.data().user,
          message: _objectSpread(_objectSpread({}, message.data()), {}, {
            timestamp: (_message$data$timesta = message.data().timestamp) === null || _message$data$timesta === void 0 ? void 0 : _message$data$timesta.toDate().getTime()
          })
        }, message.id);
      });
    } else {
      return JSON.parse(messages).map(message => /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Message, {
        user: message.user,
        message: message
      }, message.id));
    }
  };

  const ScrollToBottom = () => {
    endOfMessagesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const sendMessage = e => {
    e.preventDefault();
    firebase["b" /* db */].collection("users").doc(user.uid).set({
      lastSeen: external_firebase_default.a.firestore.FieldValue.serverTimestamp()
    }, {
      merge: true
    });
    firebase["b" /* db */].collection("chats").doc(router.query.id).collection("messages").add({
      timestamp: external_firebase_default.a.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user.email,
      photoURL: user.photoURL
    });
    setInput("");
    ScrollToBottom();
  };

  const recipient = recipientSnapshot === null || recipientSnapshot === void 0 ? void 0 : (_recipientSnapshot$do = recipientSnapshot.docs) === null || _recipientSnapshot$do === void 0 ? void 0 : (_recipientSnapshot$do2 = _recipientSnapshot$do[0]) === null || _recipientSnapshot$do2 === void 0 ? void 0 : _recipientSnapshot$do2.data();
  const recipientEmail = Object(getRecipientEmail["a" /* default */])(chat.users, user);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ChatScreen_Container, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Header, {
      children: [recipient ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Avatar"], {
        src: recipient === null || recipient === void 0 ? void 0 : recipient.photoURL
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Avatar"], {
        children: recipientEmail[0]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeaderInformation, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: recipientEmail
        }), recipientSnapshot ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: ["Last active:", ` `, recipient !== null && recipient !== void 0 && (_recipient$lastSeen = recipient.lastSeen) !== null && _recipient$lastSeen !== void 0 && _recipient$lastSeen.toDate() ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_timeago_react_default.a, {
            datetime: recipient === null || recipient === void 0 ? void 0 : (_recipient$lastSeen2 = recipient.lastSeen) === null || _recipient$lastSeen2 === void 0 ? void 0 : _recipient$lastSeen2.toDate()
          }) : "Unavailable"]
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "Loading Last active..."
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeaderIcons, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["IconButton"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AttachFile_default.a, {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["IconButton"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(MoreVert_default.a, {})
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MessageContainer, {
      children: [showMessages(), /*#__PURE__*/Object(jsx_runtime_["jsx"])(EndOfMessage, {
        ref: endOfMessagesRef
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(InputContainer, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(InsertEmoticon_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input, {
        value: input,
        onChange: e => setInput(e.target.value),
        type: "text"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        hidden: true,
        disabled: !input,
        type: "submit",
        onClick: sendMessage,
        children: "Send Message"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Mic_default.a, {})]
    })]
  });
}

/* harmony default export */ var components_ChatScreen = (ChatScreen);
const ChatScreen_Container = external_styled_components_default.a.div`
  display: flex;
  flex-direction: column;
`;
const Header = external_styled_components_default.a.div`
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`;
const HeaderInformation = external_styled_components_default.a.div`
  margin-left: 15px;
  flex: 1;

  > h3 {
    margin-bottom: 3px;
  }

  > p {
    font-size: 14px;
    color: gray;
  }
`;
const HeaderIcons = external_styled_components_default.a.div``;
const MessageContainer = external_styled_components_default.a.div`
  padding: 30px;
  background-color: #e5ded8;
  min-height: 90vh;
`;
const InputContainer = external_styled_components_default.a.form`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 100;
`;
const Input = external_styled_components_default.a.input`
  flex: 1;
  outline: 0;
  border: none;
  border-radius: 10px;
  background-color: whitesmoke;
  padding: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;
const EndOfMessage = external_styled_components_default.a.div`
  margin-bottom: 50px;
`;
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/chat/[id].js



function _id_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _id_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _id_ownKeys(Object(source), true).forEach(function (key) { _id_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _id_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _id_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function Chat({
  chat,
  messages
}) {
  const [user] = Object(auth_["useAuthState"])(firebase["a" /* auth */]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(_id_Container, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("title", {
        children: ["Chat with ", Object(getRecipientEmail["a" /* default */])(chat.users, user)]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Sidebar["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ChatContainer, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ChatScreen, {
        chat: chat,
        messages: messages
      })
    })]
  });
}

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (Chat);
async function getServerSideProps(context) {
  const ref = firebase["b" /* db */].collection("chats").doc(context.query.id); // Prep the Messages...

  const messagesRes = await ref.collection("messages").orderBy("timestamp", "asc").get();
  const messages = messagesRes.docs.map(doc => _id_objectSpread({
    id: doc.id
  }, doc.data())).map(messages => _id_objectSpread(_id_objectSpread({}, messages), {}, {
    timestamp: messages.timestamp.toDate().getTime()
  })); // Prep the Chats...

  const chatRes = await ref.get();

  const chat = _id_objectSpread({
    id: chatRes.id
  }, chatRes.data());

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat
    }
  };
}
const _id_Container = external_styled_components_default.a.div`
  display: flex;
  box-shadow: 1px 1px 4px -1px rgba(0, 0, 0, 0.75);
`;
const ChatContainer = external_styled_components_default.a.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hAPS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-firebase-hooks/auth"
var auth_ = __webpack_require__("1YML");

// EXTERNAL MODULE: ./firebase.js
var firebase = __webpack_require__("Ktyj");

// EXTERNAL MODULE: external "@material-ui/icons/Chat"
var Chat_ = __webpack_require__("HWfr");
var Chat_default = /*#__PURE__*/__webpack_require__.n(Chat_);

// EXTERNAL MODULE: external "@material-ui/icons/MoreVert"
var MoreVert_ = __webpack_require__("UQSI");
var MoreVert_default = /*#__PURE__*/__webpack_require__.n(MoreVert_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@material-ui/icons/Search"
var Search_ = __webpack_require__("iSPQ");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-firebase-hooks/firestore"
var firestore_ = __webpack_require__("9nnq");

// EXTERNAL MODULE: ./utils/getRecipientEmail.js
var getRecipientEmail = __webpack_require__("PtdR");

// CONCATENATED MODULE: ./components/Chat.js











function Chat({
  id,
  users
}) {
  var _recipientSnapshot$do, _recipientSnapshot$do2;

  const router = Object(router_["useRouter"])();
  const [user] = Object(auth_["useAuthState"])(firebase["a" /* auth */]);
  const [recipientSnapshot] = Object(firestore_["useCollection"])(firebase["b" /* db */].collection("users").where("email", "==", Object(getRecipientEmail["a" /* default */])(users, user)));

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  const recipient = recipientSnapshot === null || recipientSnapshot === void 0 ? void 0 : (_recipientSnapshot$do = recipientSnapshot.docs) === null || _recipientSnapshot$do === void 0 ? void 0 : (_recipientSnapshot$do2 = _recipientSnapshot$do[0]) === null || _recipientSnapshot$do2 === void 0 ? void 0 : _recipientSnapshot$do2.data();
  const recipientEmail = Object(getRecipientEmail["a" /* default */])(users, user);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container, {
    onClick: enterChat,
    children: [recipient ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(UserAvatar, {
      src: recipient === null || recipient === void 0 ? void 0 : recipient.photoURL
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(UserAvatar, {
      children: recipientEmail[0]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: recipientEmail
    })]
  });
}

/* harmony default export */ var components_Chat = (Chat);
const Container = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;
const UserAvatar = external_styled_components_default()(core_["Avatar"])`
  margin: 5px;
  margin-right: 15px;
`;
// EXTERNAL MODULE: external "email-validator"
var external_email_validator_ = __webpack_require__("9MsW");

// CONCATENATED MODULE: ./components/Sidebar.js














function Sidebar() {
  const [user] = Object(auth_["useAuthState"])(firebase["a" /* auth */]);
  const userChatsRef = firebase["b" /* db */].collection("chats").where("users", "array-contains", user.email);
  const [chatsSnapshot, loading] = Object(firestore_["useCollection"])(userChatsRef);

  const createChat = () => {
    const input = prompt("Please enter an email address for the user you wish to chat with");
    if (!input) return;

    if (external_email_validator_["validate"](input) && !chatAlreadyExist(input) && input !== user.email) {
      firebase["b" /* db */].collection("chats").add({
        users: [user.email, input]
      });
    }
  };

  const chatAlreadyExist = recipientEmail => !!(chatsSnapshot !== null && chatsSnapshot !== void 0 && chatsSnapshot.docs.find(chat => {
    var _chat$data$users$find;

    return ((_chat$data$users$find = chat.data().users.find(user => user === recipientEmail)) === null || _chat$data$users$find === void 0 ? void 0 : _chat$data$users$find.length) > 0;
  }));

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Sidebar_Container, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Header, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Sidebar_UserAvatar, {
        onClick: () => firebase["a" /* auth */].signOut(),
        src: user.photoURL
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(IconsContainer, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["IconButton"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Chat_default.a, {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["IconButton"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(MoreVert_default.a, {})
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Search, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Search_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchInput, {
        placeholder: "Search in chats",
        type: "text"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SidebarButton, {
      onClick: createChat,
      children: "Start a new chat"
    }), chatsSnapshot === null || chatsSnapshot === void 0 ? void 0 : chatsSnapshot.docs.map(chat => /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Chat, {
      id: chat.id,
      users: chat.data().users
    }, chat.id))]
  });
}

/* harmony default export */ var components_Sidebar = __webpack_exports__["a"] = (Sidebar);
const Sidebar_Container = external_styled_components_default.a.div`
  flex: 0.45;
  border-right: 1px solid whitesmoke;
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
const Sidebar_UserAvatar = external_styled_components_default()(core_["Avatar"])`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const SidebarButton = external_styled_components_default()(core_["Button"])`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
const Search = external_styled_components_default.a.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 2px;
  padding: 20px;
`;
const SearchInput = external_styled_components_default.a.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;
const Header = external_styled_components_default.a.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;
const IconsContainer = external_styled_components_default.a.div``;

/***/ }),

/***/ "iHqE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mic");

/***/ }),

/***/ "iSPQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "mAUa":
/***/ (function(module, exports) {

module.exports = require("timeago-react");

/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });