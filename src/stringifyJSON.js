// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here

// when obj is an ARRAY
	if (Array.isArray(obj)) {
		var sOutput = "";

		_.each(obj, function (value, index, obj) {
			// If undefined, a function, or an XML value is encountered during conversion 
 			//censored to null when it is found in an array.
			if (value === undefined || typeof(value) === "function" || typeof(value) === "xml")
				sOutput += stringifyJSON(null) + ",";
			else
				sOutput += stringifyJSON(value) + ","; // sOutput will have a "," after the last element
		});
		return "[" + sOutput.substr(0, sOutput.length - 1) + "]";
	} 

// when obj is OBJECT	
	
	if (typeof(obj) === "object" && obj != null) { //typeof(null) is "object"
		var sOutput = "";

		_.each(obj, function (value, key, obj) {
			// If undefined, a function, or an XML value is encountered during conversion 
 			//it is omitted when it is found in an object.
			if (value !== undefined || typeof(value) !== "function" || typeof(value) !== "xml") {
				sOutput += "\"" + String(key) + "\":"  ; 
				sOutput += stringifyJSON(value) + "," ;
			}
		});
		if (sOutput.length > 0) {
			// omitting the "," after the last key:value pair	
			return "{" + sOutput.substr(0, sOutput.length - 1) + "}"; 
		}
		return "{}"; 
		} 

// EXIT conditions  begin
	if (obj === undefined) {
		return obj;
	} 
	if( typeof obj === 'string') {   // String needs to be appended with quotes
 	 	return "\"" + obj + "\"";
 	} 
  	return String(obj);
// EXIT conditions end
};
