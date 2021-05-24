"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChildHttpComponent = void 0;
var core_1 = require("@angular/core");
var ChildHttpComponent = /** @class */ (function () {
    function ChildHttpComponent() {
        this.childVote = new core_1.EventEmitter();
        this.voted = false;
    }
    ChildHttpComponent.prototype.ngOnInit = function () {
    };
    ChildHttpComponent.prototype.vote = function (agree) {
        this.voted = true;
        this.childVote.emit(agree);
    };
    __decorate([
        core_1.Input(),
        core_1.Output()
    ], ChildHttpComponent.prototype, "childVote");
    ChildHttpComponent = __decorate([
        core_1.Component({
            selector: 'child-http',
            templateUrl: './child-http.component.html',
            styleUrls: ['./child-http.component.css']
        })
    ], ChildHttpComponent);
    return ChildHttpComponent;
}());
exports.ChildHttpComponent = ChildHttpComponent;
