app.controller('MainController', ['$scope',function($scope) { 
  $scope.title = 'ADD AND SHOW USERS'; 
  $scope.checked=false;
  $scope.persons= 
  [{ 
    name: 'Gaurav Gera', 
    OracleID: 117401, 
    Designation: 'AL1',
    status:true,
    checked:$scope.checked
  },
  { 
    name: 'ArpitJain', 
    OracleID: 117402, 
    Designation: 'AL2',
    status:false,
    checked:$scope.checked
  },
  { 
    name: 'Ankur Poria', 
    OracleID: 117403, 
    Designation: 'AL3',
    status:true,
    checked:$scope.checked
  },
  { 
    name: 'Rajat Chhillar', 
    OracleID: 117404, 
    Designation: 'AL4',
    status:true,
    checked:$scope.checked
  },
  { 
    name: 'Angular JS', 
    OracleID: 117405, 
    Designation: 'AL5',
    status:false,
    checked:$scope.checked
  }
];
$scope.remove=function() { 
  angular.forEach($scope.persons,function(value){
   if(value.checked){
      value.status=false;
      console.log(value);
    }
    
  });
};
}]);