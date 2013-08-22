function ActivityViewCtrl($scope, $http) {
	$http.get('data/activity2.json').success(function(data) {
    	$scope.levels = data;
  	}); 

  	$scope.navClass = function (node) {
  		if (node.children) {
  			return "groupBox4";
  		}
  		return "actBox";
    };  

}

function ActivityEditCtrl($scope, $http) {
	//TBD 
}