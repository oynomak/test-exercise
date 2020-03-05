var app = new function(){

	/* Initializing the records by some random data */
	this.myRecords = [
		{firstName: "Mugabo", lastName: "Kamonyo", sex: "Male", age: 42, city: "Kigali", country: "Rwanda", hasDiabetes: "No"},
	  	{firstName: "Mary", lastName: "Johnson", sex: "Female", age: 2, city: "Bujumbura", country: "Burundi", hasDiabetes: "Unknown"},
	  	{firstName: "John", lastName: "Doe", sex: "Male", age: 22, city: "Abidjan", country: "Cote d'Ivoire", hasDiabetes: "Yes"},
	  	{firstName: "Herve", lastName: "Richard", sex: "Male", age: 4, city: "Lagos", country: "Nigeria", hasDiabetes: "No"}
	];

	this.diabeteStatus = "";
	this.gender = "";

	/* Adding a new Record from Form in the page */
	this.Add = function(){
		/* Triggering the checkboxes values to be considered before saving... */
		//this.ChangeSexValue();
		//this.ChangeDiabeteValue();
		
	 	/* Get the new Record: */
		var newRecord = {
			firstName: document.getElementById("first_name").value,
			lastName: document.getElementById("last_name").value,
			sex: this.gender,
			age: document.getElementById("age").value,
			city: document.getElementById("city").value,
			country: document.getElementById("country").value,
			hasDiabetes: this.diabeteStatus
		};

		alert("sex : "+newRecord.sex + " and status : "+newRecord.hasDiabetes);

	 	if (newRecord.firstName && newRecord.lastName && age) {
		  	// Add the new value
		alert("I am saving now ...2" + this.gender);
		  	
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
			        				+ ")</td><td><a id='edit' onclick='app.Edit(" + i+ ")' >edit</a> | <a id='delete' onclick='app.Delete(" + i+ ")' >delete</a></td></tr>";
					}
				}else if(minorIsChecked == false){

					data += "<tr><td>" + app.myRecords[i].firstName + " " + app.myRecords[i].lastName + "  (" 
			        		+ app.myRecords[i].sex + "), " + app.myRecords[i].age + " - " + app.myRecords[i].city + "(" + app.myRecords[i].country 
			        				+ ")</td><td><a id='edit' onclick='app.Edit(" + i+ ")' >edit</a> | <a id='delete' onclick='app.Delete(" + i+ ")' >delete</a></td></tr>";
				}
				
			}
		}
		// Returning the tbody records...
		return document.getElementById("records").innerHTML = data;
	};

	/* Filter myRecords using different conditions */

	this.FilterRecords = function(){
		
		var display = "";
		var search = document.getElementById("search").value;
		var data = "";

		// Checking if the search box is not empty
		if(search != ""){

			data = this.myRecords.filter(function(record, i) {
						return ((record.firstName == search || record.lastName == search) || record.sex == search);
					});

			// Checking if returned array is not empty
			if(data == ""){
				data = this.myRecords;
			}
		}else{
			// Reinitializing the records to initial...
			data = this.myRecords;
		}

		// Displaying the new list...
		for (i = 0; i < data.length; i++) {

			display += "<tr><td>" + data[i].firstName + " " + data[i].lastName + "  (" 
			        		+ data[i].sex + "), " + data[i].age + " - " + data[i].city + "(" + data[i].country 
			        				+ ")</td><td><a id='edit' onclick='app.Edit("+ i+ ")' >edit</a> | <a id='delete' onclick='app.Delete("+ i+ ")' >delete</a></td></tr>";
		}
		return document.getElementById("records").innerHTML = display;
	};

	/* Updating a existing record */
	this.Edit = function (position){

		document.getElementById("submitBtn").style.display = "none";
		document.getElementById("editBtn").style.display = "inline";

		var record = this.myRecords[position];

		/* Populating form with values selected */
		document.getElementById("first_name").value = record.firstName;
		document.getElementById("last_name").value = record.lastName;

		if(record.sex == "Male")
			document.getElementById("male").checked = true;
		if(record.sex == "Female")
			document.getElementById("female").checked = true;

		document.getElementById("age").value = record.age;
		document.getElementById("city").value = record.city;
		document.getElementById("country").value = record.country;
		
		if(record.hasDiabetes == "No")
			document.getElementById("no").checked = true;
		if(record.hasDiabetes == "Yes")
			document.getElementById("yes").checked = true;
		if(record.hasDiabetes == "Unknown")
			document.getElementById("unknown").checked = true;

		self = this;

		/* When "SAVE" button is clicked, UPDATE the record */
		document.getElementById("edit_record").onclick = function() {

			/* Triggering the checkboxes values to be considered before saving... */
			self.ChangeSexValue();
			self.ChangeDiabeteValue();

			// Getting new values to update
			var updatedRecord = {
									 firstName: document.getElementById("first_name").value,
									 lastName: document.getElementById("last_name").value,
									 sex: self.gender,
									 age: document.getElementById("age").value,
									 city: document.getElementById("city").value,
									 country: document.getElementById("country").value,
									 hasDiabetes: self.diabeteStatus
								};
			
			if(updatedRecord){
				// Updating the list of records...
				self.myRecords.splice(position, 1, updatedRecord);
				// Displaying the new list
				self.FetchAll();
				// Resetting the fields
				resetFields();

			}

		}

	};

	/* Deleting a specific record from myRecords */
	this.Delete = function (position) {
		
		// Delete the current record
	    this.myRecords.splice(position, 1);
	    // Display the updated list
	    this.FetchAll();
	};

	/* Change the Checkboxes value onClick */
	this.ChangeSexValue = function (){
		
		if(document.getElementById("male").checked == true)
			this.gender = "Male";

		if(document.getElementById("female").checked == true)
			this.gender = "Female";

	};

	/* Change the Checkboxes value onClick */
	this.ChangeDiabeteValue = function (){

		if(document.getElementById("yes").checked == true)
			this.diabeteStatus = "Yes";

		if(document.getElementById("no").checked == true)
			this.diabeteStatus = "No";

		if(document.getElementById("unknown").checked == true)
			this.diabeteStatus = "Unknown";
		
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
	
	document.getElementById("editBtn").style.display = "none";
	// Returning the Submit button "SAVE"
	document.getElementById("submitBtn").style.display = "inline";
}

/*SOURCE: https://gist.github.com/EtienneR/29ef2e0604d3527072b8c3655833b7bd#file-countries-html*/