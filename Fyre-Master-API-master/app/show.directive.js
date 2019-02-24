"use strict";

function show() {
  return {
    restrict: "A",
    link: function($scope, $element, $attrs) {
      $element.parent().bind("mouseenter", function() {
        $element.css("visibility", "visible");
      });
      $element.parent().bind("mouseleave", function() {
        $element.css("visibility", "hidden");
      }); 
    }
  };
}

angular 
  .module("App")
  .directive("show", show)