alert("hey");

$(document).ready(function() {
	
	var Parse = require('parse');

   Parse.initialize("ycznb2CfcJNUAiNHLqSr4Zq1XB96HGOMI8tLY7Kj", "dDuTTQVvxLqpFuNfuVXU0tToIAwz0ti6qemCWXDe");


   var TestObject = Parse.Object.extend("TestObject");
   var testObject = new TestObject();
   testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
   });

   )}