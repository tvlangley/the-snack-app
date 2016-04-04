(function() {
    'use strict';

    angular
        .module('snacks')
        .controller('IndexController', [
          "SnackFactory",
          IndexControllerFunction
        ]);

    function IndexControllerFunction(SnackFactory) {
      this.snacks = SnackFactory.query();
    }
})();