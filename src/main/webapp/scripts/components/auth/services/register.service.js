'use strict';

angular.module('navigoApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


