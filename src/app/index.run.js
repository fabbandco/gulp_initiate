(function() {
  'use strict';

  angular
    .module('gulpInitiate')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
