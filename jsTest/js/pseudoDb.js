var pseudoDb = function() {
	
	var DB = function(options) {
		this.name = options.name;
		this.version = options.version;
	}
	
	var getData = function() {
		return '{"clients":[{"first_name": "John", "last_name": "Johnson", "email": "john@johnjohnson.com", "age": "22", "vip": false}, {"first_name": "Bob", "last_name": "Bobson", "email": "bob@bobbobson.com", "age": "12", "vip": true}, {"first_name": "Tom", "last_name": "Tomson", "email": "tom@tomtomson.com", "age": "32", "vip": true}, {"first_name": "Rick", "last_name": "Rickson", "email": "rick@rickrickson.com", "age": "24", "vip": true}, {"first_name": "Igor", "last_name": "Igorson", "email": "igor@igorigorson.com", "age": "53", "vip": false}, {"first_name": "Bill", "last_name": "billson", "email": "bill@billbillson.com", "age": "33", "vip": false}, {"first_name": "Rob", "last_name": "Robson", "email": "rob@robrobson.com", "age": "14", "vip": true}, {"first_name": "Jacob", "last_name": "Jacobson", "email": "jacob@jacobjacobson.com", "age": "35", "vip": false}]}';
	}
	
	var postData = function(options) {
		var response = Math.round(Math.random()) === 1 ? 'OK' : 'Error';
		return {options: options, response: response};
	}
	
	DB.prototype = {
		getData: getData,
		postData: postData
	}
	
	return DB;
}
