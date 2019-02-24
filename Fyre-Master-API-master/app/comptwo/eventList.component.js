"use strict";

const eventList = {
  bindings: {
    posts: "<",
    filterKey: "<"
  },
  templateUrl: "app/comptwo/eventList.html",
  controller: ["FyreService", function(FyreService){
    const vm = this;
    vm.favoriteEvents = [];
    vm.addFavorite = function(newFavorite) {
      vm.favoriteEvents.push(angular.copy(newFavorite));
      console.log(vm.favoriteEvents);
      FyreService.setFavorites(vm.favoriteEvents);
    }
  }]
}

angular.module("App").component("eventList", eventList);