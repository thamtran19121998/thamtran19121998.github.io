webpackJsonp([13],{

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.jpg?8cccc71bedb39a2e967fdb1e76532b39";

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2.jpg?92fb17ecdfda04c14deb22b1175e31cf";

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3.jpg?7896245001dbc6883d17f7b6e412acac";

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4.jpg?7eef6399163e94d847992e8f7f9797bb";

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5.jpg?764ff0464199e47c14d2db98d10304b9";

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var image_1 = __webpack_require__(372);
var image_2 = __webpack_require__(376);
var image_3 = __webpack_require__(381);
var image_4 = __webpack_require__(382);
var image_5 = __webpack_require__(383);

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      enabled: true,
      notifications: [{
        id: 0,
        taskName: "Thiết kế database, thiết kế prototype cho cả web và android",
        proName: "Phát triển ứng dụng di động",
        content: "Bạn có một công việc đến hạn vào 28/03/2020",
        time: "Hôm nay",
        watch: true
      }, {
        id: 1,
        taskName: "Đi siêu thị",
        proName: "Đồ án tốt nghiệp",
        content: "Trần Thị Hồng Thắm đã phân công cho bạn công việc này",
        time: "1 ngày",
        watch: true
      }, {
        id: 2,
        taskName: "Code giao diện web chức phần nav-menu, header",
        proName: "Đồ án tốt nghiệp",
        content: "Phạm Hồng Thái đã nhắc đến bạn trong một bình luận",
        time: "1 ngày",
        watch: true
      }, {
        id: 3,
        taskName: "Thiết kế database, thiết kế prototype cho cả web và android",
        proName: "Phát triển ứng dụng di động",
        content: "Trần Thị Hồng Thắm đã thay đổi thời gian của công việc này thành 28/03/2020",
        time: "2 ngày",
        watch: false
      }, {
        id: 4,
        taskName: "Thiết kế database, thiết kế prototype cho cả web và android",
        proName: "Phát triển ứng dụng di động",
        content: "Trần Thị Hồng Thắm đã phân công cho bạn công việc này",
        time: "4 ngày",
        watch: false
      }, {
        id: 5,
        taskName: "Code giao diện web chức phần nav-menu, header",
        proName: "Đồ án tốt nghiệp",
        content: "Phạm Hồng Thái đã bình luận trong công việc này",
        time: "4 ngày",
        watch: false
      }, {
        id: 6,
        taskName: "Gặp bạn bè, ăn uống, nói chuyện",
        deadLine: "11/03/2020",
        proName: "Phát triển ứng dụng web",
        content: "Trần Thị Hồng Thắm đã phân công cho bạn công việc này",
        time: "5 ngày",
        watch: false
      }, {
        id: 7,
        taskName: "Đi ngân hàng gửi tiền cho bạn",
        proName: "Phát triển ứng dụng di động",
        content: "Phạm Hồng Thái đã bình luận trong công việc này",
        time: "6 ngày",
        watch: false
      }]
    };
  },

  methods: {
    showModal: function showModal() {
      // $("#exampleModalCenter").modal();
      // $("#exampleModalCenter").modal("toggle");
    },
    completeTask: function completeTask(id) {
      var color = $("[taskID=" + id + "]").css("background-color");

      if (color == "rgb(255, 255, 255)") {
        $("div[taskID=" + id + "]").css({
          "background-color": "#3ADBB9",
          color: "white"
        });
      } else {
        $("div[taskID=" + id + "]").css({
          "background-color": "white",
          color: "#99abb4"
        });
      }
    },
    hideListTask: function hideListTask(id) {
      console.log("test", id);
      $(".icon-caret-hide[groupID=" + id + "]").css({
        display: "none"
      });
      $(".icon-caret-show[groupID=" + id + "]").css({
        display: "block"
      });

      $(".list-task[groupID=" + id + "]").css({
        display: "none"
      });
    },
    showListTask: function showListTask(id) {
      $(".icon-caret-show[groupID=" + id + "]").css({
        display: "none"
      });
      $(".icon-caret-hide[groupID=" + id + "]").css({
        display: "block"
      });
      $(".list-task[groupID=" + id + "]").css({
        display: "block"
      });
    },
    showProject: function showProject() {
      window.location.replace("/#/tasks");
    },
    detailNotification: function detailNotification(event) {
      window.location.replace("/#/dashboard");
    },
    showMenuNoti: function showMenuNoti() {
      $(".btn-menu-noti").dropdown("toggle");
      // $('.btn-menu-noti').attr("data-toggle", "dropdown");
    }
  }
});

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(472);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(12).default
var update = add("d5e401c0", content, true, {});

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".bg-watched[data-v-60aed036]{background-color:#f6f8f9}.btn-menu-noti[data-v-60aed036]{background-color:transparent;cursor:pointer;border-radius:5px;padding:4px;padding-left:6px;padding-right:6px;align-self:center;margin-right:-25px;margin-top:5px;color:#455a64}.btn-group.show>.btn-menu-noti[data-v-60aed036],div.btn-menu-noti[data-v-60aed036]:hover{background:#d7dde9}.head-noti[data-v-60aed036]{display:flex;flex-direction:row}.project-noti[data-v-60aed036]{flex-grow:1;margin-top:15px}.content-text[data-v-60aed036]{margin-right:10px}.fw-bold[data-v-60aed036]{font-weight:600}.content-noti[data-v-60aed036]{display:flex;flex-direction:row;margin-top:15px;align-items:center}.team-member[data-v-60aed036]{border-radius:100px;width:33px;margin-right:5px;align-self:center}.name-task-noti[data-v-60aed036]{font-size:18px;margin-top:15px}.badge-primary[data-v-60aed036]{background-color:#4f9dd1;font-size:13px;border-radius:10px}.notification[data-v-60aed036]{display:flex;flex-direction:column;padding-bottom:15px;border-bottom:1px solid #dee2e6;padding-left:30px;padding-right:30px;cursor:pointer}.btn-filter[data-v-60aed036]{padding:6px;padding-left:8px;padding-right:8px;margin-right:10px}.btn-add-project[data-v-60aed036],.btn-filter[data-v-60aed036]{background-color:transparent;cursor:pointer;border-radius:5px;align-self:center;color:#455a64}.btn-add-project[data-v-60aed036]{padding:6px;margin-right:3px}.btn-group.show>.btn-filter[data-v-60aed036],div.btn-add-project[data-v-60aed036]:hover,div.btn-filter[data-v-60aed036]:hover{background:#d7dde9}.dropdown-item[data-v-60aed036]{color:#455a64}a.dropdown-item[data-v-60aed036]:hover{background:#ebeff7}a.dropdown-item[data-v-60aed036]:active{background:#d7dde9}.ui-notification[data-v-60aed036]{display:flex;flex-direction:column;flex-grow:1;margin-bottom:0;background-color:#f6f8f9}.page-titles[data-v-60aed036]{position:sticky;top:54px;height:50px;margin-bottom:20px;display:flex;flex-direction:row}.title[data-v-60aed036]{margin-left:15px;display:flex;flex-grow:1}div.notification-frame[data-v-60aed036]{margin-left:200px;margin-right:200px;flex-grow:1;border-radius:5px;box-shadow:0 5px 20px rgba(0,0,0,.05);margin-bottom:-6px;background-color:#fff}", ""]);

// exports


/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ui-notification"},[_c('div',{staticClass:"page-titles"},[_c('div',{staticClass:"title align-self-center"},[_c('h3',{staticClass:"text-primary"},[_vm._v(_vm._s(_vm.$t("notifications.title-bar.title")))])]),_vm._v(" "),_c('div',{staticClass:"btn-add-project"},[_vm._v(_vm._s(_vm.$t("notifications.title-bar.all")))]),_vm._v(" "),_c('div',{staticClass:"btn-add-project"},[_vm._v(_vm._s(_vm.$t("notifications.title-bar.assignee")))]),_vm._v(" "),_c('div',{staticClass:"btn-add-project"},[_vm._v(_vm._s(_vm.$t("notifications.title-bar.mention")))]),_vm._v(" "),_c('div',{staticClass:"btn-group"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"dropdown-menu dropdown-menu-right"},[_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.$t("notifications.title-bar.dropdown.readAll")))]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.$t("notifications.title-bar.dropdown.deleteAll")))])])])]),_vm._v(" "),_c('div',{staticClass:"border notification-frame"},_vm._l((_vm.notifications),function(element){return _c('div',{key:element.id,staticClass:"notification ",class:{ 'bg-watched' : element.watch}},[_c('div',{staticClass:"head-noti"},[_c('div',{staticClass:"project-noti",attrs:{"title":"Nhấn vào để xem tất cả công việc trong dự án"},on:{"click":function($event){$event.stopPropagation();return _vm.showProject()}}},[_c('span',{staticClass:"badge badge-primary"},[_vm._v(_vm._s(element.proName))])]),_vm._v(" "),_c('div',{staticClass:"btn-group"},[_vm._m(1,true),_vm._v(" "),_c('div',{staticClass:"dropdown-menu dropdown-menu-right"},[_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.$t("notifications.child.dropdown.read")))]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v(_vm._s(_vm.$t("notifications.child.dropdown.delete")))])])])]),_vm._v(" "),_c('div',{staticClass:"name-task-noti fw-bold"},[_vm._v(_vm._s(element.taskName))]),_vm._v(" "),_c('div',{staticClass:"content-noti"},[_c('img',{staticClass:"team-member",attrs:{"src":__webpack_require__(372)}}),_vm._v(" "),_c('div',{staticClass:"content-text fw-bold"},[_vm._v(_vm._s(element.content))]),_vm._v(" "),_c('div',{staticClass:"time-noti"},[_vm._v(_vm._s(element.time))])])])}),0)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"btn-filter",attrs:{"data-toggle":"dropdown"}},[_c('span',[_c('i',{staticClass:"ti-more-alt"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"btn-menu-noti",attrs:{"data-toggle":"dropdown"}},[_c('span',[_c('i',{staticClass:"ti-more-alt"})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_notifications_vue__ = __webpack_require__(408);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60aed036_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_notifications_vue__ = __webpack_require__(473);
function injectStyle (ssrContext) {
  __webpack_require__(471)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-60aed036"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_notifications_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60aed036_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_notifications_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=13.build.js.map