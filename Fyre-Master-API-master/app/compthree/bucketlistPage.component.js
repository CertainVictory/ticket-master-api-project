"use strict";

const bucketlistPage = {
  templateUrl: "app/compthree/bucketlistPage.html",
  controller: ["FyreService", function(FyreService){
    const vm = this;
    vm.favoriteEvents = [];
    vm.$onInit = function() {
      vm.favoriteEvents = FyreService.getFavorites();
      console.log(vm.favoriteEvents);
    }
    vm.removeFavorite = function($index) {
      vm.favoriteEvents.splice($index, 1)
    }
    vm.goHome = function() {
      console.log("works")
      FyreService.goToHomePage();
    }
  }]
}

angular.module("App").component("bucketlistPage", bucketlistPage);