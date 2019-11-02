
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.demo = factory());
}(this, (function () { 'use strict';

    var promiseSettled = function (args) {
        return Promise.all(args.map(function (promise) { return promise.then(function (data) { return ({ data: data, isRejected: false }); }, function (error) { return ({ error: error, isRejected: true }); }); }));
    };
    //# sourceMappingURL=PromiseSettled.js.map

    var style = {"someSelector":"css_someSelector__3u2nO"};

    var styles = {"prefix":"demo_prefix__CwzMi"};

    var index = {
        someStyle: style.someSelector + styles.prefix,
        settled: promiseSettled
    };
    //# sourceMappingURL=index.js.map

    return index;

})));
//# sourceMappingURL=index.js.map
