var app = new function(){

	/* Initializing the records by some random data */
	this.myRecords = [
		{firstName: "Mugabo", lastName: "Kamonyo", sex: "Male", age: 42, city: "Kigali", country: "Rwanda", hasDiabetes: "No"},
	  	{firstName: "Mary", lastName: "Johnson", sex: "Female", age: 2, city: "Bujumbura", country: "Burundi", hasDiabetes: "No"},
	  	{firstName: "John", lastName: "Doe", sex: "Male", age: 22, city: "Abidjan", country: "Cote d'Ivoire", hasDiabetes: "Yes"},
	  	{firstName: "Herve", lastName: "Richard", sex: "Male", age: 4, city: "Lagos", country: "Nigeria", hasDiabetes: "No"}
	];

	/* Adding a new Record from Form in the page */
	this.Add = function(){

	 	/* Get the new Record: */
		var newRecord;

		// Getting sex info...
	 	var sex = "-";
	 	if (document.getElementById("male").checked) {
		  sex = document.getElementById("male").value;
		}else if (document.getElementById("female").checked) {
		  sex = document.getElementById("female").value;
		}
		// Getting diabete info...
		var diabete = "-";
	 	if (document.getElementById("yes").checked) {
		  diabete = document.getElementById("yes").value;
		}else if (document.getElementById("no").checked) {
		  diabete = document.getElementById("no").value;
		}else if (document.getElementById("unknown").checked) {
		  diabete = document.getElementById("unknown").value;
		}

	 	newRecord = {
			firstName: document.getElementById("first_name").value,
			lastName: document.getElementById("last_name").value,
			sex: sex,
			age: document.getElementById("age").value,
			city: document.getElementById("city").value,
			country: document.getElementById("country").value,
			hasDiabetes: diabete
		};

	 	if (newRecord.firstName && newRecord.lastName && age) {
		  	// Add the new value
		  	
		  	this.myRecords.push(newRecord);
		  	// Reset form's values
		  	resetFields();
		  	// Dislay the new list
		  	this.FetchAll();
		}

	};

	/* Fetching throught the list of records */
	this.FetchAll = function() {

		var data = "";
		var minorIsChecked = document.getElementById("mineur").checked;

		if (app.myRecords.length > 0) {
			for (i = 0; i < app.myRecords.length; i++) {

				if (minorIsChecked == true) {
					if (app.myRecords[i].age < 18) {

						data += "<tr><td>" + app.myRecords[i].firstName + " " + app.myRecords[i].lastName + "  (" 
			        		+ app.myRecords[i].sex + "), " + app.myRecords[i].age + " - " + app.myRecords[i].city + "(" + app.myRecords[i].country 
			        				+ ")</td><td></td></tr>";
					}
				}else if(minorIsChecked == false){

					data += "<tr><td>" + app.myRecords[i].firstName + " " + app.myRecords[i].lastName + "  (" 
			        		+ app.myRecords[i].sex + "), " + app.myRecords[i].age + " - " + app.myRecords[i].city + "(" + app.myRecords[i].country 
			        				+ ")</td><td></td></tr>";
				}
				
			}
		}
		// Returning the tbody records...
		return document.getElementById("records").innerHTML = data;
	};

};

// Reset form's values
function resetFields(){

  	document.getElementById("first_name").value = '';
	document.getElementById("last_name").value = '';
	document.getElementById("male").checked = false;
	document.getElementById("female").checked = false;
	document.getElementById("age").value = '';
	document.getElementById("city").value = '';
	document.getElementById("country").value = '';
	document.getElementById("yes").checked = false;
	document.getElementById("no").checked = false;
	document.getElementById("unknown").checked = false;
}