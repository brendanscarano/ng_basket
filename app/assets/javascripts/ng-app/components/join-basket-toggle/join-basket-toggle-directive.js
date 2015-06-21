angular.module('joinBasketToggle', ['popupJoinBasketModal'])
  .directive('joinBasketToggle', ['$timeout', function( $timeout ) {

    var checkJoinStatus = function(user, followers) {

      console.log(user);
      console.log(followers);
      var followersIds = [];

      // use a .map in a refactor
      for (var i = 0; i < followers.length; i++) {

        followersIds.push(followers[i].id);

      }

      console.log(followersIds);

      var following = followersIds.indexOf(user.id) === -1 ? false : true

      return following;

    }

    return {
      restrict: 'E',
      scope: {
        followers: '=',
        user: '=',
        showJoinModal: '='
      },
      templateUrl: 'ng-app/components/join-basket-toggle/join-basket-toggle.html',
      link: function( scope, $ele, $attrs ) {

        // very Hackey!!!
        // look to refactor
        scope.$watchGroup(['user', 'followers'], function(newVal, oldVal) {

          if ( newVal[0] != undefined && newVal[1] != undefined ) {

            scope.following = checkJoinStatus(newVal[0], scope.followers);
            console.log(scope.following);

          }

        })

      } // link

    } // return

  }])