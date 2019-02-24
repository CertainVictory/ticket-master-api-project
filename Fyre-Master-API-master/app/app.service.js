"use strict";
// Defining the factory
function FyreService($http, $location) {
  const self = this;
  let jsonPayload = null;
  let tempLocation = null;
  const setLocation = function(location) {
    tempLocation = location;
    console.log(location);
    $location.path("/search-criteria");
  }
  // This function will make an HTTP request to TicketMaster
  const searchEvent = function(event) {
    // This returns the value of the $http function (which is a promise)
    return $http({
      method: "GET", // Defines the method
      url: `https://app.ticketmaster.com/discovery/v2/events.json?size=40&keyword=${event}&city=${tempLocation}&apikey=bq7hwd9ESVOQrE0CdD8u0sZflgqzlAe6` // Defines the URL
    }).then(function(data) {
      // This method is what is used to get data from the promise once it has been resolved
      // console.log(data)
      jsonPayload = data;
      // Returns the jsonPayload variable
      return jsonPayload;
    });
  };
  
  const goToFavorites = function() {
    $location.path("/bucketlist-page")
  }

  const goToHomePage = function() {
    $location.path("/search-criteria")
  }

  const setFavorites = function(favorites) {
    self.tempFavorites = favorites;
    console.log(self.tempFavorites);
  }

  const getFavorites = function() {
    return self.tempFavorites;
  }

  // Factories must return a value
  // This value is an object literal that contains the functions we want to use in our controllers
  return {
    searchEvent,
    setLocation,
    getFavorites,
    setFavorites,
    goToFavorites,
    goToHomePage
  };
}

// Defining the factory
angular
  .module("App")
  .factory("FyreService", FyreService);