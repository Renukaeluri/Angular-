var myApp = angular.module('myApp', []);

myApp.controller('checkBoxController', function ($scope) {
   
      $scope.employees=[{name:'abc', age:25, gender:'F'},

       {name:'ren', age:25, gender:'F'},

       {name:'kaush', age:27, gender:'M'},

       {name:'sam', age:24, gender:'M'},

       {name:'gay', age:23, gender:'F'},

       {name:'Peter', age:95, gender:'boy'},

       {name:'Sebastian', age:50, gender:'boy'},

       {name:'Erika', age:27, gender:'girl'},

       {name:'Patrick', age:40, gender:'boy'},

       {name:'Samantha', age:60, gender:'girl'}];

        $scope.selection=[];

  // toggle selection for a given employee by name

  $scope.toggleSelection = function toggleSelection(employeeName) {

     var idx = $scope.selection.indexOf(employeeName);

    // is currently selected

     if (idx > -1) {

       $scope.selection.splice(idx, 1);

     }
 
     // is newly selected
     else {

       $scope.selection.push(employeeName);

     }

   };

});
