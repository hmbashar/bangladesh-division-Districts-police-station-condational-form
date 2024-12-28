
// Division Section select
function divisionsList() {
	// get value from division lists
	var diviList = document.getElementById('divisions').value;
	
	
	// Fetch
	fetch(`data/${diviList}.json`)
		.then(response => response.json())
		.then(data => {
			var disctList = '<option disabled selected>Select District</option>';
			let districts = Object.keys(data[diviList]);

			for (let district of districts){
				disctList += `<option value="${district}">${district}</option>`;
			}

			//  set/send districts name to District lists from division
			document.getElementById("distr").innerHTML= disctList;
		})
		.catch(error => console.error(error));

	
}

// Thana Section select
function thanaList(){
	var DisList = document.getElementById('distr').value;
	var DivList = document.getElementById('divisions').value; // Division value

	fetch(`data/${DivList}.json`)
		.then(data => data.json())
		.then(data => {
			var thanaList = '<option disabled selected>Select Thana</option>';
			let thanas = data[DivList][DisList];

			for (let thana of thanas){
				thanaList += `<option value="${thana}">${thana}</option>`;
			}

			document.getElementById("polic_sta").innerHTML= thanaList;
		})
		.catch(error => console.error(error));
}