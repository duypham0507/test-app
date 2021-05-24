"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TestAngularComponent = void 0;
var core_1 = require("@angular/core");
var TestAngularComponent = /** @class */ (function () {
    function TestAngularComponent() {
        this.people = [
            { id: 1, name: 'Bố', age: 60, address: 'Thái Bình' },
            { id: 1, name: 'Mẹ', age: 55, address: 'Thái Bình' },
            { id: 1, name: 'Chị', age: 31, address: 'Hà Nội' },
            { id: 1, name: 'Tôi', age: 23, address: 'Hà Nội' },
        ];
        this.displayedColumns = ['id', 'name', 'age', 'address'];
        this.dataSource = this.people.map(function (a) {
            return Object.assign([], {
                id: a.id,
                name: a.name,
                age: a.age
            });
        });
    }
    TestAngularComponent.prototype.ngOnInit = function () {
        console.log(this.dataSource);
    };
    TestAngularComponent = __decorate([
        core_1.Component({
            selector: 'app-test',
            templateUrl: './test-angular.component.html',
            styleUrls: ['./test-angular.component.css']
        })
    ], TestAngularComponent);
    return TestAngularComponent;
}());
exports.TestAngularComponent = TestAngularComponent;
