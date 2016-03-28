System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var foo;
    return {
        setters:[],
        execute: function() {
            foo = (function () {
                function foo() {
                }
                foo.prototype.getHelloWorldFromModule = function () {
                    return "Hello World modules world!";
                };
                return foo;
            }());
            exports_1("foo", foo);
        }
    }
});
//# sourceMappingURL=module.js.map