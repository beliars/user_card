angular.module('userCards', [])

        .directive('userCard', function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'templates/user_card.html',
                controller: function ($scope, $http) {
                    $scope.user = {};
                    $http.get('https://randomuser.me/api/').success(function (data) {
                        var person = data.results[0];
                        var birthday = new Date(person.dob);
                        var dateOptions = {month: 'long', day: 'numeric'};
                        $scope.user = {
                            fullName: capitalize(person.name.first + ' ' + person.name.last),
                            sex: capitalize(person.gender),
                            birthdate: birthday.toLocaleDateString('en-US', dateOptions),
                            address: capitalize(person.location.street + ', ' +
                                    person.location.city + ' ' +
                                    person.location.postcode),
                            email: person.email,
                            avatarUrl: person.picture.large
                        };
                    });
                    
                    function capitalize(str) {
                        var arr = str.split(" ");
                        arr = arr.map(function(item) {
                            return item.substring(0, 1).toUpperCase() + item.substring(1);
                        });
                        return arr.join(" ");
                    }
                }
            };
        });