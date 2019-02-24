"use strict";

angular
  .module("App")
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider
      .when("/landing-page", {
        template: `<landing-page></landing-page>`
      })
      .when("/search-criteria", {
        template: `<search-criteria></search-criteria>`
      })
      .when("/bucketlist-page", {
        template: `<bucketlist-page></bucketlist-page>`
      })
      .otherwise({ redirectTo: "/landing-page" });
  }]);