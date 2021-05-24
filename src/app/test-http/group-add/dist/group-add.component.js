"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GroupAddComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var GroupAddComponent = /** @class */ (function () {
    function GroupAddComponent(router, activatedRoute, groupService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.groupService = groupService;
        this.member = {};
        this.form = new forms_1.FormControl('', [forms_1.Validators.required]);
    }
    GroupAddComponent.prototype.ngOnInit = function () {
    };
    GroupAddComponent.prototype.goToGroup = function () {
        this.router.navigate(['/group']);
    };
    GroupAddComponent.prototype.SaveForm = function () {
        var _this = this;
        this.groupService.Add(this.member).subscribe(function (res) {
            if (res) {
                alert('Thêm thành công');
                _this.router.navigate(['/group']);
            }
        });
    };
    GroupAddComponent.prototype.getErrorMessage = function () {
        if (this.form.hasError('required')) {
            return 'Name is required';
        }
        return 'Tên phải trên 6 kí tự';
    };
    GroupAddComponent.prototype.CheckRequired = function () {
        if (this.form.hasError('required')) {
            this.disabled = true;
        }
    };
    GroupAddComponent = __decorate([
        core_1.Component({
            templateUrl: './group-add.component.html',
            styleUrls: ['./group-add.component.css']
        })
    ], GroupAddComponent);
    return GroupAddComponent;
}());
exports.GroupAddComponent = GroupAddComponent;
