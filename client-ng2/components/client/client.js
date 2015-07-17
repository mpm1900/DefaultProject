/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../components.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var navbar_1 = require('../shared/navbar/navbar');
var Client = (function () {
    function Client() {
        this.name = 'Max';
    }
    Client.prototype.updateName = function (input) {
        this.name = input.value;
        console.log(this.name);
    };
    Client = __decorate([
        angular2_1.Component({
            selector: 'client'
        }),
        angular2_1.View({
            directives: [navbar_1.Navbar],
            templateUrl: './components/client/client.html',
        })
    ], Client);
    return Client;
})();
exports.Client = Client;
angular2_1.bootstrap(Client);
