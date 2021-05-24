"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GroupEditComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var GroupEditComponent = /** @class */ (function () {
    function GroupEditComponent(router, activatedRoute, groupService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.groupService = groupService;
        this.form = new forms_1.FormControl('', [forms_1.Validators.required]);
    }
    GroupEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.params.subscribe(function (params) {
            _this.id = params.id;
            console.log(_this.id);
        });
        this.groupService.GetSingle(this.id).subscribe(function (rs) {
            _this.member = rs;
        });
    };
    GroupEditComponent.prototype.SaveForm = function () {
        var _this = this;
        this.groupService.Updated(this.id, this.member).subscribe(function (res) {
            if (res) {
                alert('Đã lưu');
                _this.disabled = true;
            }
        });
    };
    GroupEditComponent.prototype.goToGroup = function () {
        this.router.navigate(['group']);
    };
    GroupEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    GroupEditComponent = __decorate([
        core_1.Component({
            templateUrl: './group-edit.component.html',
            styleUrls: ['./group-edit.component.css']
        })
    ], GroupEditComponent);
    return GroupEditComponent;
}());
exports.GroupEditComponent = GroupEditComponent;
