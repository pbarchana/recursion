// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here

// EXIT conditions  begin

 // If undefined, a function, or an XML value is encountered during conversion 
 //it is either omitted (when it is found in an object) or censored to null (when it is found in an array).
 // undefined may need modifications for handling.

	if (obj === undefined) {
		return obj;
	} else if( typeof obj === 'string') {
 	 	return "\"" + obj + "\"";
 	} else
  		return String(obj);
// EXIT conditions end
};
