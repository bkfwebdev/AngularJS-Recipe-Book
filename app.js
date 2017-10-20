var app = angular.module("app",["ngRoute"]);

app.service("dataService", function($scope,$http){
var baseURL = "http://localhost:5000";

this.getAllRecipes = function(){
    let data = $http.get(baseURL + "/api/recipes");
    return data;
}

this.getAllCategories = function(){
    let data = $http.get(baseURL + "/api/categories");
    return data;
}

this.getAllFoodItems = function(){
    let data = $http.get(baseURL + "/api/fooditems");
    return data;
}

this.getReciCat = function(targetCat){
    let data = $http.get(baseURL + "/api/recipes?category={" + targetCat + "}");
    return data;
}
this.getReciID = // get recipe by ID
this.update = // update recipe
this.add = // add recipe
this.delete = // delete recipe 
});