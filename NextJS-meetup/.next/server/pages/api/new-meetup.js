"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = async (req, res)=>{\n    console.log(req);\n    console.log(res);\n    if (req.method === \"POST\") {\n        const data = req.body;\n        // const { title, image, address, description } = data;\n        // Connect to MongoDB server\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://joonhabaak:9rpAKJZFWcDrLF6s@cluster0.rfkrpzi.mongodb.net/meetups?retryWrites=true&w=majority\");\n        /**\n     * Create a new Db instance sharing the current socket connections.\n     *\n     * @param dbName - The name of the database we want to use. If not provided, use database name from connection string.\n     * @param options - Optional settings for Db construction\n     */ // The **Db** class is a class that represents a MongoDB Database.\n        const db = client.db();\n        const meetupsCollection = db.collection(\"meetups\");\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result);\n        // close DB connection\n        client.close();\n        res.status(201).json({\n            message: \"Meetup inserted!\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsT0FBTyxHQUFHLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2xDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDLENBQUM7SUFDakJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBQztJQUVqQixJQUFJRCxHQUFHLENBQUNJLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsTUFBTUMsSUFBSSxHQUFHTCxHQUFHLENBQUNNLElBQUk7UUFFckIsdURBQXVEO1FBRXZELDRCQUE0QjtRQUM1QixNQUFNQyxNQUFNLEdBQUcsTUFBTVQsd0RBQW1CLENBQ3RDLDRHQUE0RyxDQUM3RztRQUNEOzs7OztLQUtDLEdBQ0Qsa0VBQWtFO1FBQ2xFLE1BQU1XLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFLEVBQUU7UUFFdEIsTUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUVsRCxNQUFNQyxNQUFNLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLFNBQVMsQ0FBQ1IsSUFBSSxDQUFDO1FBQ3RESCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLENBQUM7UUFDcEIsc0JBQXNCO1FBQ3RCTCxNQUFNLENBQUNPLEtBQUssRUFBRSxDQUFDO1FBRWZiLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLGtCQUFrQjtTQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlbEIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLW1lZXR1cC8uL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzPzczOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zb2xlLmxvZyhyZXEpO1xuICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG5cbiAgICAvLyBjb25zdCB7IHRpdGxlLCBpbWFnZSwgYWRkcmVzcywgZGVzY3JpcHRpb24gfSA9IGRhdGE7XG5cbiAgICAvLyBDb25uZWN0IHRvIE1vbmdvREIgc2VydmVyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICAgICdtb25nb2RiK3NydjovL2pvb25oYWJhYWs6OXJwQUtKWkZXY0RyTEY2c0BjbHVzdGVyMC5yZmtycHppLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xuICAgICk7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IERiIGluc3RhbmNlIHNoYXJpbmcgdGhlIGN1cnJlbnQgc29ja2V0IGNvbm5lY3Rpb25zLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRiTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBkYXRhYmFzZSB3ZSB3YW50IHRvIHVzZS4gSWYgbm90IHByb3ZpZGVkLCB1c2UgZGF0YWJhc2UgbmFtZSBmcm9tIGNvbm5lY3Rpb24gc3RyaW5nLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9uYWwgc2V0dGluZ3MgZm9yIERiIGNvbnN0cnVjdGlvblxuICAgICAqL1xuICAgIC8vIFRoZSAqKkRiKiogY2xhc3MgaXMgYSBjbGFzcyB0aGF0IHJlcHJlc2VudHMgYSBNb25nb0RCIERhdGFiYXNlLlxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIC8vIGNsb3NlIERCIGNvbm5lY3Rpb25cbiAgICBjbGllbnQuY2xvc2UoKTtcblxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogJ01lZXR1cCBpbnNlcnRlZCEnIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();