function ActivityViewCtrl($scope, $http) {
	$http.get('data/activity2.json').success(function(data) {
    	$scope.levels = data;
  	}); 

	// FIXME Conditionals could be improved
  	$scope.navClass = function (node) {
  		if (node.children) {
  			if (node.children.length >= 4)
  				return "groupBox4";
  			if (node.children.length >= 3)
  				return "groupBox3";
  			if (node.children.length >= 2)
  				return "groupBox1";
  			if (node.children.lenght >= 1)
  				return "groupBox1";
  		}
  		return "actBox";
    };  

}

function ActivityEditCtrl($scope, $http) {
	//TBD 
}