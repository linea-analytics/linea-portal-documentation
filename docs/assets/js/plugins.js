;(function () {
  // Example: add a footer to every page
  var footerHTML = `
    <hr>
    <p style="font-size: 0.9em;">
      Provided by <a href="https://linea-analytics.com/">Linea-Analytics</a>.
    </p>`;
  window.$docsify = window.$docsify || {};
  var hookPlugin = function (hook, vm) {
    hook.afterEach(function (html) {
      return html + footerHTML;
    });
  };
  window.$docsify.plugins = [].concat(window.$docsify.plugins || [], hookPlugin);
})();

