"use strict";
exports.id = 533;
exports.ids = [533];
exports.modules = {

/***/ 9533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Services2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/services2.json
const services2_namespaceObject = JSON.parse('[{"id":"01","title":"Architecture","content":"Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat."},{"id":"02","title":"Interior Design","content":"Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat."},{"id":"03","title":"3D Modeling","content":"Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat."}]');
;// CONCATENATED MODULE: ./src/components/Services2/index.jsx



const Services2 = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "services",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "feat-top",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "notfull bg-gray wow"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: services2_namespaceObject.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "item-sm wow fadeInUp",
                                    "data-wow-delay": index == 0 ? "1s" : index == 1 ? "1.1s" : "1.2s",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "box",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                className: "mb-20",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "custom-font numb",
                                                        children: item.id
                                                    }),
                                                    item.title
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: item.content
                                            })
                                        ]
                                    })
                                })
                            }, item.id)
                        )
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Services2 = (Services2);


/***/ })

};
;