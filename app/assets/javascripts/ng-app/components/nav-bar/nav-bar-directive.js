(function() {

  function navBar($rootScope, getCurrentUser) {

    return {
      restrict: 'EA',
      scope: {
        user: '='
      },
      templateUrl: 'ng-app/components/nav-bar/nav-bar.html',
      link: function ( scope, $ele, $attrs ) {

        getCurrentUser().then(function(result) {

          $rootScope.user = result.data;
          scope.user = result.data;

        })

        scope.chromeExtensionInstall = function() {
          console.log('install extension')
          chrome.webstore.install();
        }

      }

    }

  }

  angular
    .module('NavBar', ['currentUser'])
    .directive('navBar', ['$rootScope', 'getCurrentUser', navBar]) 

})();