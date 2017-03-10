var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");


for (var i = 0; i < reindeer.length; i++) {
    hohohoElement.innerHTML += "<li>" + colors[i] + " " + reindeer[i] + "</li>"
    }

console.log(hohohoElement)
console.log("The apprentice of front-end development who was behind the completion of this exercise spent entirely too long overcomplicating the assignment before realizing she'd made MVP in the first five minutes.")

//loop through the strings in either the 'colors' or the 'reigndeer' array, 
//populate the chosen string to the DOM as a list, 
//-- with corresponding strings in the other array 
//-- added as paired strings in the same list item



//so basically, 
//--- we got two arrays 
//--- of different lengths, 
//- we create a singular list
//-- not to exceed the length of the array
//-- What I need to happen:
//	<ul>
//		<li ("array1.string1", "array2.string1")>;
//      <li ("array1.string2", "array2.string2")>;
//      <li ("array1.string3", "array2,string3")>;
//      <li ("array1.string4", "array2.string4")>;
//		''	  ''	  ''		''		''	
//		''	  ''	  ''		''		''	
//		''	  ''	  ''		''		''	
//		''	  ''	  ''		''		''	
//		''	  ''	  ''		''		''	
//		''	  ''	  ''		''		''	
//		''	  ''	  ''		''		''	
//		''	  ''	  ''		''		''	
//		''	  ''	  ''		''		''	
//
//
//
//
//
//
