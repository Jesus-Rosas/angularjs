angular.module('directoryApp', [])
	.controller('directoryController', function(){
		var dirList = this;

		dirList.list = [
			{name: 'Scott', age: '30'}, 
			{name: 'David', age: '19'}, 
			{name: 'Luis', age: '16'}
		];

		dirList.addPerson = function() {
			dirList.list.push({name: dirList.name, age: dirList.age});
			dirList.name = "";
			dirList.age = 0;
		}
	});