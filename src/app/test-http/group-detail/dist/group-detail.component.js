"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GroupDetailComponent = void 0;
var core_1 = require("@angular/core");
var GroupDetailComponent = /** @class */ (function () {
    function GroupDetailComponent(router, activatedRoute, groupService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.groupService = groupService;
    }
    GroupDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.params.subscribe(function (params) {
            _this._id = params['id'];
            console.log(_this._id);
        });
        this.groupService.GetSingle(this._id).subscribe(function (data) {
            _this.group = data;
        });
    };
    GroupDetailComponent.prototype.GoToGroup = function () {
        this.router.navigate(['group']);
    };
    GroupDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    GroupDetailComponent = __decorate([
        core_1.Component({
            templateUrl: './group-detail.component.html',
            styleUrls: ['./group-detail.component.css']
        })
    ], GroupDetailComponent);
    return GroupDetailComponent;
}());
exports.GroupDetailComponent = GroupDetailComponent;
