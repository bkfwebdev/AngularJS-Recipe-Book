(function() {

'use strict';

angular
    .module('app')
    //service contains all routes for the Angular application
    .service('dataService', ['$http', function($http) {
          // gets all recipes
          let baseURL = 'http://localhost:5000/api/recipes'
          this.getRecipes = function(callback) {
            $http.get(baseURL)
            .then(callback);
          };
          // gets recipes of a particular category
          this.getCategoryOfRecipes = function(category, callback) {
            $http.get(baseURL + '?category=' + category)
            .then(callback);
          };
          // gets a recipe by ID number
          this.getID = function(id, callback) {
            $http.get(baseURL + '/' + id)
            .then(callback);
          };
          // updates recipe by ID number
          this.putID = function(id, data, callback, failure) {
            $http.put(baseURL + '/' + id, data)
            .then(callback, failure)
          };
          // adds a new recipe
          this.addRecipe = function(recipe, callbackSuccess, callbackFailure) {
            $http.post(baseURL , recipe)
            .then(callbackSuccess, callbackFailure);
          };
          // deletes a recipe by ID number
          this.deleteID = function(id, callbackSuccess, callbackFailure) {
            $http.delete(baseURL + '/' + id)
            .then(callbackSuccess, callbackFailure)
          };
          // gets all the recipe categories
          this.getCategory = function(callback) {
            $http.get('http://localhost:5000/api/categories')
           .then(callback);
         };
         // gets all the food items
         this.getFoodItems = function(callback) {
           $http.get('http://localhost:5000/api/fooditems')
           .then(callback);
         };
}]);
})();