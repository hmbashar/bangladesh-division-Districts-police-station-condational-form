# JavaScript Condational Form for bangladesh Division, Districts &amp; Police Station and more
### [Demo]{https://hmbashar.github.io/bangladesh-division-Districts-police-station-condational-form/}
## HTML
```<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>JavaScript Conditional Form</title>
</head>
<body>
	<form action="">
		<label for="divisions">Select Division</label>
		<select name="divisions" id="divisions" onchange="divisionsList();">
			<option disabled selected>Select Division</option>
			<option value="Barishal">Barishal</option>
			<option value="Chattogram">Chattogram</option>
			<option value="Dhaka">Dhaka</option>
			<option value="Khulna">Khulna</option>
			<option value="Mymensingh">Mymensingh</option>
			<option value="Rajshahi">Rajshahi</option>
			<option value="Rangpur">Rangpur</option>
			<option value="Sylhet">Sylhet</option>
		</select>
		<br>
		<br>
		<label for="distr">Select District</label>
		<select name="" id="distr" onchange="thanaList();"></select>
		<br>
		<br>
		<label for="polic_sta">Select Police Station</label>
		<select name="" id="polic_sta"></select>
	</form>
	<script src="jquery-3.2.1.min.js"></script>
	<script src="javascript.js"></script>
</body>
</html>
```
## JavaScript
```// Division Section select
function divisionsList() {
	// get value from division lists
	var diviList = document.getElementById('divisions').value;

	// set barishal division districts
	if(diviList == 'Barishal'){		
		var disctList = '<option disabled selected>Select District</option><option value="Barguna">Barguna</option><option value="Barishal">Barishal</option><option value="Bhola">Bhola</option><option value="Jhalokati">Jhalokati</option><option value="Patuakhali">Patuakhali</option><option value="Pirojpur">Pirojpur</option>';
	}
	// set Chattogram division districts
	else if(diviList == 'Chattogram') {
		var disctList = '<option disabled selected>Select Division</option><option value="Bandarban">Bandarban</option><option value="Chandpur">Chandpur</option><option value="Chattogram">Chattogram</option><option value="Cumilla">Cumilla</option><option value="Cox\'s Bazar">Cox\'s Bazar</option><option value="Feni">Feni</option><option value="Khagrachhari">Khagrachhari</option><option value="Noakhali">Noakhali</option><option value="Rangamati">Rangamati</option>';	
	}
	// set Dhaka division districts
	else if(diviList == 'Dhaka') {
		var disctList = '<option disabled selected>Select Division</option><option value="Dhaka">Dhaka</option><option value="Faridpur">Faridpur</option><option value="Gazipur">Gazipur</option><option value="Gopalganj">Gopalganj</option><option value="Kishoreganj">Kishoreganj</option><option value="Madaripur">Madaripur</option><option value="Manikganj">Manikganj</option><option value="Munshiganj">Munshiganj</option><option value="Narayanganj">Narayanganj</option><option value="Narsingdi">Narsingdi</option><option value="Rajbari">Rajbari</option><option value="Shariatpur">Shariatpur</option><option value="Tangail">Tangail</option>';
	}
	//  set/send districts name to District lists from division
	document.getElementById("distr").innerHTML= disctList;
}

// Thana Section select
function thanaList(){
	var DisList = document.getElementById('distr').value;
	if(DisList == 'Barguna') {
		var thanaList = '<option disabled selected>Select District</option><option value="Barguna">Barguna</option><option value="Barishal">Barishal</option><option value="Bhola">Bhola</option><option value="Jhalokati">Jhalokati</option><option value="Patuakhali">Patuakhali</option><option value="Pirojpur">Pirojpur</option>';
	}
	document.getElementById("polic_sta").innerHTML= thanaList;
}
```
