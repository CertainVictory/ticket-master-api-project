"use strict";

const navBar = {
  templateUrl: "app/compfive/nav.html",
  controller: ["FyreService", function(FyreService){
    const vm = this;
    vm.goToFavs = function() {
      console.log("works")
      FyreService.goToFavorites();
    }
  }]
}

angular.module("App").component("navBar", navBar);