"use strict";

function red() {
  return {
    restrict: "A",
    link: function($scope, $element, $attrs) {
      $element.on("click", function() {
        $element.css("color", "#f46b45");
      });
    }
  };
}

angular 
  .module("App")
  .directive("red", red)