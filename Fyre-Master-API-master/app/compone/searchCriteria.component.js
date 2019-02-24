"use strict";

const searchCriteria = {
  templateUrl: "app/compone/searchCriteria.html",
  controller: ["FyreService", function(FyreService) {
    const vm = this;
    vm.filter = null;
    // vm.posts = defaultEvents;
    vm.search = function(event) {
      // The search method will call this function, which returns a promise
      FyreService.searchEvent(event).then(function(data) {
        // Assigning the data from the promise to vm.posts (so it can be ngRepeated)
        vm.posts = data.data._embedded.events;
        console.log(vm.posts)
      });

    };

    vm.filterByPrice = function() {
      vm.filter = "priceRanges[0].min"
    }

    vm.filterByDate = function() {
      vm.filter = "dates.start.localDate"
    }
    
    vm.$onInit = function(){
      FyreService.searchEvent("").then(function(data) {
        vm.posts = data.data._embedded.events;
        console.log(vm.posts)
      });
    };
  }]
}

angular.module("App").component("searchCriteria", searchCriteria);

