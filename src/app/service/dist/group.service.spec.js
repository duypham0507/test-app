"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var group_service_1 = require("./group.service");
describe('GroupService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(group_service_1.GroupService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
