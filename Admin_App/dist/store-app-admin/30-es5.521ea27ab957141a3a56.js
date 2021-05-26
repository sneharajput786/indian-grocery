function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30], {
  /***/
  "./src/app/pages/banners/banners-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/banners/banners-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: BannersRoutingModule */

  /***/
  function srcAppPagesBannersBannersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannersRoutingModule", function () {
      return BannersRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _banners_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./banners.component */
    "./src/app/pages/banners/banners.component.ts");

    var routes = [{
      path: '',
      component: _banners_component__WEBPACK_IMPORTED_MODULE_1__["BannersComponent"]
    }];

    var BannersRoutingModule = function BannersRoutingModule() {
      _classCallCheck(this, BannersRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/pages/banners/banners.component.ngfactory.js":
  /*!**************************************************************!*\
    !*** ./src/app/pages/banners/banners.component.ngfactory.js ***!
    \**************************************************************/

  /*! exports provided: RenderType_BannersComponent, View_BannersComponent_0, View_BannersComponent_Host_0, BannersComponentNgFactory */

  /***/
  function srcAppPagesBannersBannersComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_BannersComponent", function () {
      return RenderType_BannersComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BannersComponent_0", function () {
      return View_BannersComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BannersComponent_Host_0", function () {
      return View_BannersComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannersComponentNgFactory", function () {
      return BannersComponentNgFactory;
    });
    /* harmony import */


    var _banners_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./banners.component.scss.shim.ngstyle */
    "./src/app/pages/banners/banners.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_ngx_skeleton_loader_ngx_skeleton_loader_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/ngx-skeleton-loader/ngx-skeleton-loader.ngfactory */
    "./node_modules/ngx-skeleton-loader/ngx-skeleton-loader.ngfactory.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../node_modules/ngx-spinner/ngx-spinner.ngfactory */
    "./node_modules/ngx-spinner/ngx-spinner.ngfactory.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../node_modules/ngx-pagination/dist/ngx-pagination.ngfactory */
    "./node_modules/ngx-pagination/dist/ngx-pagination.ngfactory.js");
    /* harmony import */


    var _banners_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./banners.component */
    "./src/app/pages/banners/banners.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_apis_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ng2-toasty/src/toasty.service */
    "./node_modules/ng2-toasty/src/toasty.service.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_BannersComponent = [_banners_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_BannersComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_BannersComponent,
      data: {}
    });

    function View_BannersComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "ngx-skeleton-loader", [["count", "1"]], null, null, null, _node_modules_ngx_skeleton_loader_ngx_skeleton_loader_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NgxSkeletonLoaderComponent_0"], _node_modules_ngx_skeleton_loader_ngx_skeleton_loader_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NgxSkeletonLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderComponent"], [], {
        count: [0, "count"],
        theme: [1, "theme"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, {
        "border-radius": 0,
        height: 1,
        border: 2
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "ngx-skeleton-loader", [["count", "1"]], null, null, null, _node_modules_ngx_skeleton_loader_ngx_skeleton_loader_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NgxSkeletonLoaderComponent_0"], _node_modules_ngx_skeleton_loader_ngx_skeleton_loader_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NgxSkeletonLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 114688, null, 0, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderComponent"], [], {
        count: [0, "count"],
        theme: [1, "theme"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](8, {
        "border-radius": 0,
        height: 1,
        border: 2
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "ngx-skeleton-loader", [["count", "1"]], null, null, null, _node_modules_ngx_skeleton_loader_ngx_skeleton_loader_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NgxSkeletonLoaderComponent_0"], _node_modules_ngx_skeleton_loader_ngx_skeleton_loader_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NgxSkeletonLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 114688, null, 0, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderComponent"], [], {
        count: [0, "count"],
        theme: [1, "theme"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](12, {
        "border-radius": 0,
        height: 1,
        border: 2
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 2, "ngx-skeleton-loader", [["count", "1"]], null, null, null, _node_modules_ngx_skeleton_loader_ngx_skeleton_loader_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NgxSkeletonLoaderComponent_0"], _node_modules_ngx_skeleton_loader_ngx_skeleton_loader_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NgxSkeletonLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 114688, null, 0, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderComponent"], [], {
        count: [0, "count"],
        theme: [1, "theme"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](16, {
        "border-radius": 0,
        height: 1,
        border: 2
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "ngx-skeleton-loader", [["count", "1"]], null, null, null, _node_modules_ngx_skeleton_loader_ngx_skeleton_loader_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NgxSkeletonLoaderComponent_0"], _node_modules_ngx_skeleton_loader_ngx_skeleton_loader_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NgxSkeletonLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 114688, null, 0, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderComponent"], [], {
        count: [0, "count"],
        theme: [1, "theme"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](20, {
        "border-radius": 0,
        height: 1,
        border: 2
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "ngx-skeleton-loader", [["count", "1"]], null, null, null, _node_modules_ngx_skeleton_loader_ngx_skeleton_loader_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NgxSkeletonLoaderComponent_0"], _node_modules_ngx_skeleton_loader_ngx_skeleton_loader_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NgxSkeletonLoaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 114688, null, 0, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderComponent"], [], {
        count: [0, "count"],
        theme: [1, "theme"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](24, {
        "border-radius": 0,
        height: 1,
        border: 2
      })], function (_ck, _v) {
        var currVal_0 = "1";

        var currVal_1 = _ck(_v, 4, 0, "5px", "10px", "1px solid white");

        _ck(_v, 3, 0, currVal_0, currVal_1);

        var currVal_2 = "1";

        var currVal_3 = _ck(_v, 8, 0, "5px", "10px", "1px solid white");

        _ck(_v, 7, 0, currVal_2, currVal_3);

        var currVal_4 = "1";

        var currVal_5 = _ck(_v, 12, 0, "5px", "10px", "1px solid white");

        _ck(_v, 11, 0, currVal_4, currVal_5);

        var currVal_6 = "1";

        var currVal_7 = _ck(_v, 16, 0, "5px", "10px", "1px solid white");

        _ck(_v, 15, 0, currVal_6, currVal_7);

        var currVal_8 = "1";

        var currVal_9 = _ck(_v, 20, 0, "5px", "10px", "1px solid white");

        _ck(_v, 19, 0, currVal_8, currVal_9);

        var currVal_10 = "1";

        var currVal_11 = _ck(_v, 24, 0, "5px", "10px", "1px solid white");

        _ck(_v, 23, 0, currVal_10, currVal_11);
      }, null);
    }

    function View_BannersComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Top"]))], null, null);
    }

    function View_BannersComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Bottom"]))], null, null);
    }

    function View_BannersComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Between"]))], null, null);
    }

    function View_BannersComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Category"]))], null, null);
    }

    function View_BannersComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Product"]))], null, null);
    }

    function View_BannersComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["External Link"]))], null, null);
    }

    function View_BannersComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 25, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "a", [["href", "javascript:;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["alt", "chat-user"], ["class", "img-responsive"], ["onError", "this.src='assets/images/user.png'"], ["style", "height: 100px;width: 100px;"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BannersComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BannersComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BannersComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 6, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BannersComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BannersComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BannersComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "button", [["type", "button"]], [[8, "className", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.changeStatus(_v.context.$implicit) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "button", [["class", "btn btn-success btn-round btn-outline-success"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.view(_v.context.$implicit) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["View"]))], function (_ck, _v) {
        var currVal_1 = _v.context.$implicit.position === "0";

        _ck(_v, 6, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.position === "1";

        _ck(_v, 8, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.position === "2";

        _ck(_v, 10, 0, currVal_3);

        var currVal_4 = _v.context.$implicit.type === "0";

        _ck(_v, 13, 0, currVal_4);

        var currVal_5 = _v.context.$implicit.type === "1";

        _ck(_v, 15, 0, currVal_5);

        var currVal_6 = _v.context.$implicit.type === "2";

        _ck(_v, 17, 0, currVal_6);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.api.mediaURL + _v.context.$implicit.cover;

        _ck(_v, 3, 0, currVal_0);

        var currVal_7 = _v.context.$implicit.link;

        _ck(_v, 19, 0, currVal_7);

        var currVal_8 = _co.getClass(_v.context.$implicit.status);

        _ck(_v, 21, 0, currVal_8);

        var currVal_9 = _v.context.$implicit.status === "1" ? "Active" : "Deactivated";

        _ck(_v, 22, 0, currVal_9);
      });
    }

    function View_BannersComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "ngx-spinner", [["color", "#e74c3c"], ["type", "ball-pulse-sync"]], null, null, null, _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_NgxSpinnerComponent_0"], _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_NgxSpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"], [ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        color: [0, "color"],
        type: [1, "type"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "p", [["style", "font-size: 20px; color: #e74c3c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 39, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 37, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 36, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["All Banners "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 32, "div", [["class", "card-body reset-table p-t-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 5, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "button", [["class", "btn btn-danger btn-round"], ["style", "float: right;"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.createNew() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["CREATE NEW"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 22, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 21, "table", [["class", "table table-hover"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 13, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 12, "tr", [["class", "text-uppercase"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cover"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Position"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Type"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Value"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Action"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 6, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BannersComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 3, null, View_BannersComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](39, {
        id: 0,
        itemsPerPage: 1,
        currentPage: 2
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"], [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationService"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 2, "div", [["class", "has-text-centered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "pagination-controls", [["id", "pagin1"]], null, [[null, "pageChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("pageChange" === en) {
          var pd_0 = (_co.page = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_PaginationControlsComponent_0"], _node_modules_ngx_pagination_dist_ngx_pagination_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_PaginationControlsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 49152, null, 0, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"], [], {
        id: [0, "id"]
      }, {
        pageChange: "pageChange"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "#e74c3c";
        var currVal_1 = "ball-pulse-sync";

        _ck(_v, 1, 0, currVal_0, currVal_1);

        var currVal_3 = _co.dummy;

        _ck(_v, 36, 0, currVal_3);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 38, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).transform(_co.banners, _ck(_v, 39, 0, "pagin1", 10, _co.page)));

        _ck(_v, 38, 0, currVal_4);

        var currVal_5 = "pagin1";

        _ck(_v, 43, 0, currVal_5);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_2 = _co.api.translate("Please wait...");

        _ck(_v, 3, 0, currVal_2);
      });
    }

    function View_BannersComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-banners", [], null, null, null, View_BannersComponent_0, RenderType_BannersComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _banners_component__WEBPACK_IMPORTED_MODULE_9__["BannersComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _services_apis_service__WEBPACK_IMPORTED_MODULE_11__["ApisService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_12__["ToastyService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var BannersComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-banners", _banners_component__WEBPACK_IMPORTED_MODULE_9__["BannersComponent"], View_BannersComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/pages/banners/banners.component.scss.shim.ngstyle.js":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/banners/banners.component.scss.shim.ngstyle.js ***!
    \**********************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppPagesBannersBannersComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["@charset \"UTF-8\";\n\n.top-paddding[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.top-paddding[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n}"];
    /***/
  },

  /***/
  "./src/app/pages/banners/banners.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/banners/banners.component.ts ***!
    \****************************************************/

  /*! exports provided: BannersComponent */

  /***/
  function srcAppPagesBannersBannersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannersComponent", function () {
      return BannersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var BannersComponent = /*#__PURE__*/function () {
      function BannersComponent(router, api, spinner, toastyService) {
        var _this = this;

        _classCallCheck(this, BannersComponent);

        this.router = router;
        this.api = api;
        this.spinner = spinner;
        this.toastyService = toastyService;
        this.dummy = Array(5);
        this.banners = [];
        this.page = 1;
        var param = {
          id: localStorage.getItem('uid')
        };
        this.api.auth(param).then(function (data) {
          if (data !== true) {
            localStorage.removeItem('uid');

            _this.router.navigate(['login']);
          }
        }, function (error) {
          console.log(error);
          localStorage.removeItem('uid');

          _this.router.navigate(['login']);
        })["catch"](function (error) {
          console.log(error);
          localStorage.removeItem('uid');

          _this.router.navigate(['login']);
        });
        this.getBanners();
      }

      _createClass(BannersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getBanners",
        value: function getBanners() {
          var _this2 = this;

          this.api.get('banners').then(function (data) {
            console.log('data', data);

            if (data && data.status === 200 && data.data && data.data.length) {
              _this2.dummy = [];
              _this2.banners = data.data;
            }
          })["catch"](function (error) {
            console.log('error=>', error);
          });
        }
      }, {
        key: "error",
        value: function error(message) {
          var toastOptions = {
            title: this.api.translate('Error'),
            msg: this.api.translate(message),
            showClose: true,
            timeout: 2000,
            theme: 'default',
            onAdd: function onAdd(toast) {
              console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function onRemove() {
              console.log('Toast  has been removed!');
            }
          };
          this.toastyService.error(toastOptions);
        }
      }, {
        key: "success",
        value: function success(message) {
          var toastOptions = {
            title: this.api.translate('Success'),
            msg: this.api.translate(message),
            showClose: true,
            timeout: 2000,
            theme: 'default',
            onAdd: function onAdd(toast) {
              console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function onRemove() {
              console.log('Toast  has been removed!');
            }
          };
          this.toastyService.success(toastOptions);
        }
      }, {
        key: "createNew",
        value: function createNew() {
          this.router.navigate(['manage-banners']);
        }
      }, {
        key: "getClass",
        value: function getClass(item) {
          if (item === '1') {
            return 'btn btn-primary btn-round';
          } else if (item === '0') {
            return 'btn btn-danger btn-round';
          }

          return 'btn btn-warning btn-round';
        }
      }, {
        key: "changeStatus",
        value: function changeStatus(item) {
          var text = item.status === '1' ? 'deactive' : 'active';
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: this.api.translate('Are you sure?'),
            text: this.api.translate('To ') + text + this.api.translate(' this banner!'),
            icon: 'question',
            showConfirmButton: true,
            confirmButtonText: this.api.translate('Yes'),
            showCancelButton: true,
            cancelButtonText: this.api.translate('Cancle'),
            backdrop: false,
            background: 'white'
          }).then(function (data) {
            if (data && data.value) {
              console.log('update it');
              console.log(item); // const param = {
              //   id: item.id,
              //   status: item.status === '1' ? 0 : 1
              // };
              // this.spinner.show();
              // this.api.post('banners/editList', param).then((info) => {
              //   this.spinner.hide();
              //   this.getBanners();
              // }, error => {
              //   console.log(error);
              //   this.spinner.hide();
              // }).catch(error => {
              //   this.spinner.hide();
              //   console.log(error);
              // });
            }
          });
        }
      }, {
        key: "view",
        value: function view(item) {
          var param = {
            queryParams: {
              id: item.id
            }
          };
          this.router.navigate(['manage-banners'], param);
        }
      }]);

      return BannersComponent;
    }();
    /***/

  },

  /***/
  "./src/app/pages/banners/banners.module.ngfactory.js":
  /*!***********************************************************!*\
    !*** ./src/app/pages/banners/banners.module.ngfactory.js ***!
    \***********************************************************/

  /*! exports provided: BannersModuleNgFactory */

  /***/
  function srcAppPagesBannersBannersModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannersModuleNgFactory", function () {
      return BannersModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _banners_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./banners.module */
    "./src/app/pages/banners/banners.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _banners_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./banners.component.ngfactory */
    "./src/app/pages/banners/banners.component.ngfactory.js");
    /* harmony import */


    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
    "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-toasty/src/toasty.service */
    "./node_modules/ng2-toasty/src/toasty.service.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular2-notifications/dist/src/simple-notifications/services/notifications.service */
    "./node_modules/angular2-notifications/dist/src/simple-notifications/services/notifications.service.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! css-animator/angular/animation.service */
    "./node_modules/css-animator/angular/animation.service.js");
    /* harmony import */


    var css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @nicky-lenaers/ngx-scroll-to */
    "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../shared/menu-items/menu-items */
    "./src/app/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shared/todo/todo.service */
    "./src/app/shared/todo/todo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _banners_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./banners-routing.module */
    "./src/app/pages/banners/banners-routing.module.ts");
    /* harmony import */


    var ng2_toasty__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ng2-toasty */
    "./node_modules/ng2-toasty/index.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! angular2-notifications/dist/src/simple-notifications.module */
    "./node_modules/angular2-notifications/dist/src/simple-notifications.module.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! css-animator/angular/animator.module */
    "./node_modules/css-animator/angular/animator.module.js");
    /* harmony import */


    var css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */


    var ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ng-click-outside/lib/click-outside.module */
    "./node_modules/ng-click-outside/lib/click-outside.module.js");
    /* harmony import */


    var ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21__);
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _banners_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./banners.component */
    "./src/app/pages/banners/banners.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var BannersModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_banners_module__WEBPACK_IMPORTED_MODULE_1__["BannersModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _banners_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["BannersComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵsNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyService"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["toastyServiceFactory"], [ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"], angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__["AnimationService"], css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__["AnimationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationService"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_12__["ScrollToService"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_12__["ScrollToService"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_13__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_13__["ɵd"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_13__["MapsAPILoader"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["LazyMapsAPILoader"], [[2, _agm_core__WEBPACK_IMPORTED_MODULE_13__["LAZY_MAPS_API_CONFIG"]], _agm_core__WEBPACK_IMPORTED_MODULE_13__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["ɵd"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_14__["MenuItems"], _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_14__["MenuItems"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_15__["TodoService"], _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_15__["TodoService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _banners_routing_module__WEBPACK_IMPORTED_MODULE_17__["BannersRoutingModule"], _banners_routing_module__WEBPACK_IMPORTED_MODULE_17__["BannersRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_toasty__WEBPACK_IMPORTED_MODULE_18__["ToastyModule"], ng2_toasty__WEBPACK_IMPORTED_MODULE_18__["ToastyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19__["SimpleNotificationsModule"], angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19__["SimpleNotificationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20__["AnimatorModule"], css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20__["AnimatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_12__["ScrollToModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_12__["ScrollToModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21__["ClickOutsideModule"], ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21__["ClickOutsideModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_23__["NgxSkeletonLoaderModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_23__["NgxSkeletonLoaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_spinner__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _banners_module__WEBPACK_IMPORTED_MODULE_1__["BannersModule"], _banners_module__WEBPACK_IMPORTED_MODULE_1__["BannersModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTES"], function () {
        return [[{
          path: "",
          component: _banners_component__WEBPACK_IMPORTED_MODULE_26__["BannersComponent"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _agm_core__WEBPACK_IMPORTED_MODULE_13__["LAZY_MAPS_API_CONFIG"], {
        apiKey: "AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk"
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PERFECT_SCROLLBAR_CONFIG"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["ɵ0"], [])]);
    });
    /***/

  },

  /***/
  "./src/app/pages/banners/banners.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/banners/banners.module.ts ***!
    \*************************************************/

  /*! exports provided: BannersModule */

  /***/
  function srcAppPagesBannersBannersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannersModule", function () {
      return BannersModule;
    });

    var BannersModule = function BannersModule() {
      _classCallCheck(this, BannersModule);
    };
    /***/

  }
}]);