"use strict";

const landingPage = {
  templateUrl: "app/compfour/landingPage.html",
  controller: ["FyreService", function (FyreService) {
    const vm = this;
    vm.sendCity = function (location) {
      vm.location = location
      FyreService.setLocation(location);
      console.log(vm.location);
    }
  }]
}

angular.module("App").component("landingPage", landingPage);