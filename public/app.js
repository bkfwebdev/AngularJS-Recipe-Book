var app = angular.module("app",["ngRoute"]);

app.service("dataService", function($scope,$http){
let baseURL = "http://localhost:5000";
this.getAllRecipes = function(callback){ $http.get(baseURL + "/api/recipes").then(callback);}
this.getAllCategories = function(callback){$http.get(baseURL + "/api/categories").then(callback);}
this.getAllFoodItems = function(callback){$http.get(baseURL + "/api/fooditems").then(callback);}
this.getReciCat = function(targetCat,callback){$http.get(baseURL + "/api/recipes?category={" + targetCat + "}").then(callback)};
this.getReciID = function(recipeID,callback){$http.get(baseURL + "/api/recipes/{" + recipeID + "}").then(callback)};
this.update = function(recipeUpdate){$http.put(baseURL + "/api/recipes/{" + recipeUpdate + "}");}
this.add = function(recipeAddition){$http.post(baseURL + "/api/recipes/{" + recipeAddition + "}");}
this.delete = function(deletedItem){$http.delete(baseURL + "/api/recipes/{" + deletedItem + "}");}
});

app.controller("RecipesController",function($scope){});