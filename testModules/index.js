System.register(["module"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var module_1;
    var f;
    return {
        setters:[
            function (module_1_1) {
                module_1 = module_1_1;
            }],
        execute: function() {
            f = new module_1.foo();
            console.log(f.getHelloWorldFromModule());
        }
    }
});
//# sourceMappingURL=index.js.map