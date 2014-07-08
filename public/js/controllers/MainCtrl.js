angular.module('mainModule', []).controller('MainController', ['$scope','Todo', function($scope, Todo) {

	$scope.tagline = 'Your Future is created by what you do today not tomorrow';	

	/*$scope.items = [
		{text:  'Todo 1', done:'false'},
		{text:  'Todo 2', done:'true'},
		{text:  'Todo 3', done:'true'}
	];*/

	$scope.items = Todo.query(function() {
    	//console.log(entries);
  	}); //query() returns all the entries

	$scope.addTodo = function(){
		var item = new Todo({
			text: $scope.formTodoText,
			done: false
		});
		 
		Todo.save(item, function (response) {
			console.log(response);
		});
		$scope.items.push(item);
		$scope.formTodoText = '';
	}

	/*if($scope.items[].done == true)
	{
		alert('its true');
	}*/

	$scope.updateTodo = function(id, done){
		$scope.item = Todo.get({ todoId: id }, function() {
			// $scope.entry is fetched from server and is an instance of Entry
			$scope.item.done = done;
			$scope.item.$update(function() {
			});
		});
	}
 	
 	/*$scope.$watch('$scope.item.done', function () {
 		console.log('changes');
	}, true);*/

}]);