// Division Section select
function divisionsList() {
	// get value from division lists
	var diviList = document.getElementById('divisions').value;

	// set barishal division districts
	if(diviList == 'Barishal'){		
		var disctList = '<option disabled selected>Select District</option><option value="Barguna">Barguna</option><option value="Barishal">Barishal</option><option value="Bhola">Bhola</option><option value="Jhalokhathi">Jhalokhathi</option><option value="Patuakhali">Patuakhali</option><option value="Pirojpur">Pirojpur</option>';
	}
	// set Chattogram division districts
	else if(diviList == 'Chattogram') {
		var disctList = '<option disabled selected>Select District</option><option value="Bandarban">Bandarban</option><option value="Chandpur">Chandpur</option><option value="Chattogram">Chattogram</option><option value="Cumilla">Cumilla</option><option value="Cox\'s Bazar">Cox\'s Bazar</option><option value="Feni">Feni</option><option value="Khagrachhari">Khagrachhari</option><option value="Noakhali">Noakhali</option><option value="Rangamati">Rangamati</option><option value="Lakshmipur">Lakshmipur</option>';	
	}
	// set Dhaka division districts
	else if(diviList == 'Dhaka') {
		var disctList = '<option disabled selected>Select District</option><option value="Dhaka">Dhaka</option><option value="Faridpur">Faridpur</option><option value="Gazipur">Gazipur</option><option value="Gopalganj">Gopalganj</option><option value="Kishoreganj">Kishoreganj</option><option value="Madaripur">Madaripur</option><option value="Manikganj">Manikganj</option><option value="Munshiganj">Munshiganj</option><option value="Narayanganj">Narayanganj</option><option value="Narsingdi">Narsingdi</option><option value="Rajbari">Rajbari</option><option value="Shariatpur">Shariatpur</option><option value="Tangail">Tangail</option>';
	}
	
	else if(diviList == 'Khulna') {
		var disctList = '<option disabled selected>Select District</option><option value="Bagerhat">Bagerhat</option><option value="Chuadanga">Chuadanga</option><option value="Jashore">Jashore</option><option value="Jhenaidah">Jhenaidah</option><option value="Khulna">Khulna</option><option value="Kushtia">Kushtia</option><option value="Magura">Magura</option><option value="Meharpur">Meharpur</option><option value="Narail">Narail</option><option value="Satkhira">Satkhira</option>';
	}
	
	else if(diviList == 'Mymensingh') {
		var disctList = '<option disabled selected>Select District</option><option value="Jamalpur">Jamalpur</option><option value="Mymensingh">Mymensingh</option><option value="Netrokona">Netrokona</option><option value="Sherpur">Sherpur</option>';
	}
	else if(diviList == 'Rajshahi') {
		var disctList = '<option disabled selected>Select District</option><option value="Bogura">Bogura</option><option value="Chapai Nawabganj">Chapai Nawabganj</option><option value="Jaipurhat">Jaipurhat</option><option value="Naogaon">Naogaon</option><option value="Natore">Natore</option><option value="Pabna">Pabna</option><option value="Rajshahi">Rajshahi</option><option value="Sirajganj">Sirajganj</option>';
	}
	else if(diviList == 'Rangpur') {
		var disctList = '<option disabled selected>Select District</option><option value="Dinajpur">Dinajpur</option><option value="Gaibandha">Gaibandha</option><option value="Lalmonirhat">Lalmonirhat</option><option value="Nilphamari">Nilphamari</option><option value="Panchagarh">Panchagarh</option><option value="Rangpur">Rangpur</option><option value="Thakurgaon">Thakurgaon</option>';
	}
	else if(diviList == 'Sylhet') {
		var disctList = '<option disabled selected>Select District</option><option value="Habiganj">Habiganj</option><option value="Mauluvibazar">Mauluvibazar</option><option value="Sunamganj">Sunamganj</option><option value="Sylhet">Sylhet</option>';
	}

	//  set/send districts name to District lists from division
	document.getElementById("distr").innerHTML= disctList;
}

// Thana Section select
function thanaList(){
	var DisList = document.getElementById('distr').value;
	if(DisList == 'Bagerhat') {
		var thanaList = '<option value="">Select One</option><option value="Bagerhat Sadar">Bagerhat Sadar</option><option value="Chitalmari">Chitalmari</option><option value="Fakirhat">Fakirhat</option><option value="Kachua">Kachua</option><option value="Mollahat">Mollahat</option><option value="Mongla">Mongla</option><option value="Morrelganj">Morrelganj</option><option value="Rampal">Rampal</option><option value="Sarankhola">Sarankhola</option><option value="Others">Others</option>';
	}
	if(DisList == 'Bandarban') {
		var thanaList = '<option value="">Select One</option><option value="Alikadam">Alikadam</option><option value="Bandarban Sadar">Bandarban Sadar</option><option value="Lama">Lama</option><option value="Naikhongchhari">Naikhongchhari</option><option value="Rowangchhari">Rowangchhari</option><option value="Ruma">Ruma</option><option value="Thanchi">Thanchi</option><option value="Others">Others</option>';
	}
	if(DisList == 'Barguna') {
		var thanaList = '<option value="">Select One</option><option value="Amtali">Amtali</option><option value="Bamna">Bamna</option><option value="Barguna Sadar">Barguna Sadar</option><option value="Betagi">Betagi</option><option value="Patharghata">Patharghata</option><option value="Others">Others</option>';
	}
	if(DisList == 'Barishal') {
		var thanaList = '<option value="">Select One</option><option value="Agailjhara">Agailjhara</option><option value="Babuganj">Babuganj</option><option value="Bakerganj">Bakerganj</option><option value="Banari Para">Banari Para</option><option value="Barishal Sadar (Kotwali)">Barishal Sadar (Kotwali)</option><option value="Gaurnadi">Gaurnadi</option><option value="Hizla">Hizla</option><option value="Mehendiganj">Mehendiganj</option><option value="Muladi">Muladi</option><option value="Wazirpur">Wazirpur</option><option value="Others">Others</option>';
	}
	if(DisList == 'Bhola') {
		var thanaList = '<option value="">Select One</option><option value="Bhola Sadar">Bhola Sadar</option><option value="Burhanuddin">Burhanuddin</option><option value="Char Fasson">Char Fasson</option><option value="Daulatkhan">Daulatkhan</option><option value="Lalmohan">Lalmohan</option><option value="Manpura">Manpura</option><option value="Tazumuddin">Tazumuddin</option><option value="Others">Others</option>';
	}
	if(DisList == 'Bogura') {
		var thanaList = '<option value="">Select One</option><option value="Adamdighi">Adamdighi</option><option value="Bogura Sadar">Bogura Sadar</option><option value="Dhunat">Dhunat</option><option value="Dhupchanchia">Dhupchanchia</option><option value="Gabtali">Gabtali</option><option value="Kahaloo">Kahaloo</option><option value="Nandigram">Nandigram</option><option value="Sariakandi">Sariakandi</option><option value="Shajhanpur">Shajhanpur</option><option value="Sherpur">Sherpur</option><option value="Shibganj">Shibganj</option><option value="Sonatola">Sonatola</option><option value="Others">Others</option>';
	}
	if(DisList == 'Brahmanbaria') {
		var thanaList = '<option value="">Select One</option><option value="Akhaura">Akhaura</option><option value="Ashuganj">Ashuganj</option><option value="Banchharampur">Banchharampur</option><option value="Bijoynagar">Bijoynagar</option><option value="Brahmanbaria Sadar">Brahmanbaria Sadar</option><option value="Kasba">Kasba</option><option value="Nabinagar">Nabinagar</option><option value="Nasirnagar">Nasirnagar</option><option value="Sarail">Sarail</option><option value="Others">Others</option>';
	}
	if(DisList == 'Chandpur') {
		var thanaList = '<option value="">Select One</option><option value="Chandpur Sadar">Chandpur Sadar</option><option value="Faridganj">Faridganj</option><option value="Haim Char">Haim Char</option><option value="Hajiganj">Hajiganj</option><option value="Kachua">Kachua</option><option value="Matlab">Matlab</option><option value="Shahrasti">Shahrasti</option><option value="Uttar Matlab">Uttar Matlab</option><option value="Others">Others</option>';
	}
	if(DisList == 'Chapai Nawabganj') {
		var thanaList = '<option value="">Select One</option><option value="Bholahat">Bholahat</option><option value="Gomastapur">Gomastapur</option><option value="Nachole">Nachole</option><option value="Nawabganj Sadar">Nawabganj Sadar</option><option value="Shibganj">Shibganj</option><option value="Others">Others</option>';
	}
	if(DisList == 'Chattogram') {
		var thanaList = '<option value="">Select One</option><option value="Akbar Shah">Akbar Shah</option><option value="Anowara">Anowara</option><option value="Bakalia">Bakalia</option><option value="Bandar(Chitt. Port)">Bandar(Chitt. Port)</option><option value="Banshkhali">Banshkhali</option><option value="Bayejid Bostami">Bayejid Bostami</option><option value="Boalkhali">Boalkhali</option><option value="Chandanish">Chandanish</option><option value="Chandgaon">Chandgaon</option><option value="Chawkbazar">Chawkbazar</option><option value="Double Mooring">Double Mooring</option><option value="EPZ">EPZ</option><option value="Fatikchhari">Fatikchhari</option><option value="Halishahar">Halishahar</option><option value="Hathazari">Hathazari</option><option value="Karnafuli">Karnafuli</option><option value="Khulshi">Khulshi</option><option value="Kotwali">Kotwali</option><option value="Lohagara">Lohagara</option><option value="Mirsharai">Mirsharai</option><option value="Pahartali">Pahartali</option><option value="Panchlaish">Panchlaish</option><option value="Patenga">Patenga</option><option value="Patiya">Patiya</option><option value="Rangunia">Rangunia</option><option value="Raozan">Raozan</option><option value="Sadarghat">Sadarghat</option><option value="Sandwip">Sandwip</option><option value="Satkania">Satkania</option><option value="Sitakunda">Sitakunda</option><option value="Others">Others</option>'
	}
	if(DisList == 'Chuadanga') {
		var thanaList = '<option value="">Select One</option><option value="Alamdanga">Alamdanga</option><option value="Chuadanga Sadar">Chuadanga Sadar</option><option value="Damurhuda">Damurhuda</option><option value="Jiban Nagar">Jiban Nagar</option><option value="Others">Others</option>';
	}
	if(DisList == 'Cox\'s Bazar') {
		var thanaList = '<option value="">Select One</option><option value="Chakaria">Chakaria</option><option value="Cox\'s Bazar Sadar">Cox\'s Bazar Sadar</option><option value="Kutubdia">Kutubdia</option><option value="Maheshkhali">Maheshkhali</option><option value="Pekua">Pekua</option><option value="Ramu">Ramu</option><option value="Teknaf">Teknaf</option><option value="Ukhia">Ukhia</option><option value="Others">Others</option>';
	}
	if(DisList == 'Cumilla') {
		var thanaList = '<option value="">Select One</option><option value="Barura">Barura</option><option value="Brahaman Para">Brahaman Para</option><option value="Burichang">Burichang</option><option value="Chandina">Chandina</option><option value="Chauddagram">Chauddagram</option><option value="Cumilla Sadar">Cumilla Sadar</option><option value="Cumilla Sadar South">Cumilla Sadar South</option><option value="Daudkandi">Daudkandi</option><option value="Debidwar">Debidwar</option><option value="Homna">Homna</option><option value="Laksam">Laksam</option><option value="Langalkot">Langalkot</option><option value="Meghna">Meghna</option><option value="Monohorganj">Monohorganj</option><option value="Muradnagar">Muradnagar</option><option value="Titas">Titas</option><option value="Others">Others</option>';
	}
	if(DisList == 'Dhaka') {
		var thanaList = '<option value="">Select One</option><option value="Adabor">Adabor</option><option value="Airport">Airport</option><option value="Badda">Badda</option><option value="Banani">Banani</option><option value="Bangshal">Bangshal</option><option value="Bhashantek">Bhashantek</option><option value="Cantonment">Cantonment</option><option value="Chackbazar">Chackbazar</option><option value="Dakshin Khan">Dakshin Khan</option><option value="Darus-Salam">Darus-Salam</option><option value="Demra">Demra</option><option value="Dhamrai">Dhamrai</option><option value="Dhanmondi">Dhanmondi</option><option value="Dohar">Dohar</option><option value="Gandaria">Gandaria</option><option value="Gulshan">Gulshan</option><option value="Hatirjheel">Hatirjheel</option><option value="Hazaribhag">Hazaribhag</option><option value="Jattrabari">Jattrabari</option><option value="Kadamtoli">Kadamtoli</option><option value="Kafrul">Kafrul</option><option value="Kalabagan">Kalabagan</option><option value="Kamrangir Char">Kamrangir Char</option><option value="Keraniganj Model">Keraniganj Model</option><option value="Khilgaon">Khilgaon</option><option value="Khilkhet">Khilkhet</option><option value="Kotwali">Kotwali</option><option value="Lalbag">Lalbag</option><option value="Mirpur Model">Mirpur Model</option><option value="Mohammadpur">Mohammadpur</option><option value="Motijheel">Motijheel</option><option value="Mugda">Mugda</option><option value="Nawabganj">Nawabganj</option><option value="New Market">New Market</option><option value="Pallabi">Pallabi</option><option value="Paltan Model">Paltan Model</option><option value="Ramna Model">Ramna Model</option><option value="Rampura">Rampura</option><option value="Rupnagar">Rupnagar</option><option value="Sabujbhag">Sabujbhag</option><option value="Savar">Savar</option><option value="Shah Ali">Shah Ali</option><option value="Shahbag">Shahbag</option><option value="Shahjahanpur">Shahjahanpur</option><option value="Sher e Bangla Nagar">Sher e Bangla Nagar</option><option value="Shyampur">Shyampur</option><option value="South Keraniganj">South Keraniganj</option><option value="Sutrapur">Sutrapur</option><option value="Tejgaon">Tejgaon</option><option value="Tejgaon Industrial">Tejgaon Industrial</option><option value="Turag">Turag</option><option value="Uttar Khan">Uttar Khan</option><option value="Uttara East">Uttara East</option><option value="Uttara West">Uttara West</option><option value="Vatara">Vatara</option><option value="Wari">Wari</option><option value="Others">Others</option>';
	}
	if(DisList == 'Dinajpur') {
		var thanaList = '<option value="">Select One</option><option value="Biral">Biral</option><option value="Birampur">Birampur</option><option value="Birganj">Birganj</option><option value="Bochaganj">Bochaganj</option><option value="Chirirbandar">Chirirbandar</option><option value="Dinajpur Sadar">Dinajpur Sadar</option><option value="Fulbari">Fulbari</option><option value="Ghoraghat">Ghoraghat</option><option value="Hakimpur">Hakimpur</option><option value="Kaharole">Kaharole</option><option value="Khansama">Khansama</option><option value="Nawabganj">Nawabganj</option><option value="Parbatipur">Parbatipur</option><option value="Others">Others</option>';
	}
	if(DisList == 'Faridpur') {
		var thanaList = '<option value="">Select One</option><option value="Alfadanga">Alfadanga</option><option value="Bhanga">Bhanga</option><option value="Boalmari">Boalmari</option><option value="Char Bhadrasan">Char Bhadrasan</option><option value="Faridpur Sadar">Faridpur Sadar</option><option value="Madukhali">Madukhali</option><option value="Nagarkanda">Nagarkanda</option><option value="Sadarpur">Sadarpur</option><option value="Saltha">Saltha</option><option value="Others">Others</option>';
	}
	if(DisList == 'Feni') {
		var thanaList = '<option value="">Select One</option><option value="Chhagalnayian">Chhagalnayian</option><option value="Daganbhuyian">Daganbhuyian</option><option value="Feni Sadar">Feni Sadar</option><option value="Fulgazi">Fulgazi</option><option value="Parshuram">Parshuram</option><option value="Sonagazi">Sonagazi</option><option value="Others">Others</option>';
	}
	if(DisList == 'Gaibandha') {
		var thanaList = '<option value="">Select One</option><option value="Fulchhari">Fulchhari</option><option value="Gaibandha Sadar">Gaibandha Sadar</option><option value="Gobidaganj">Gobidaganj</option><option value="Palashbari">Palashbari</option><option value="Sadullapur">Sadullapur</option><option value="Saghatta">Saghatta</option><option value="Sundarganj">Sundarganj</option><option value="Others">Others</option>';
	}
	if(DisList == 'Gazipur') {
		var thanaList = '<option value="">Select One</option><option value="Gazipur Sadar">Gazipur Sadar</option><option value="Kaliakair">Kaliakair</option><option value="Kaliganj">Kaliganj</option><option value="Kapasia">Kapasia</option><option value="Sreepur">Sreepur</option><option value="Tongi">Tongi</option><option value="Others">Others</option>';
	}
	if(DisList == 'Gopalganj') {
		var thanaList = '<option value="">Select One</option><option value="Gopalganj Sadar">Gopalganj Sadar</option><option value="Kashiani">Kashiani</option><option value="Kotalipara">Kotalipara</option><option value="Muksudpur">Muksudpur</option><option value="Tungi Para">Tungi Para</option><option value="Others">Others</option>';
	}
	if(DisList == 'Habiganj') {
		var thanaList = '<option value="">Select One</option><option value="Ajmirganj">Ajmirganj</option><option value="Bahubal">Bahubal</option><option value="Baniachang">Baniachang</option><option value="Chunarughat">Chunarughat</option><option value="Habiganj Sadar">Habiganj Sadar</option><option value="Lakhai">Lakhai</option><option value="Madhabpur">Madhabpur</option><option value="Nabiganj">Nabiganj</option><option value="Shayestaganj">Shayestaganj</option><option value="Others">Others</option>';
	}
	if(DisList == 'Jaipurhat') {
		var thanaList = '<option value="">Select One</option><option value="Akkelpur">Akkelpur</option><option value="Joypurhat  Sadar">Joypurhat  Sadar</option><option value="Kalai">Kalai</option><option value="Khetlal">Khetlal</option><option value="Panchbibi">Panchbibi</option><option value="Others">Others</option>';
	}
	if(DisList == 'Jamalpur') {
		var thanaList = '<option value="">Select One</option><option value="Bakshiganj">Bakshiganj</option><option value="Dewanganj">Dewanganj</option><option value="Islampur">Islampur</option><option value="Jamalpur Sadar">Jamalpur Sadar</option><option value="Madarganj">Madarganj</option><option value="Melandaha">Melandaha</option><option value="Sarishabari">Sarishabari</option><option value="Others">Others</option>';
	}
	if(DisList == 'Jashore') {
		var thanaList = '<option value="">Select One</option><option value="Abhay Nagar">Abhay Nagar</option><option value="Bagherpara">Bagherpara</option><option value="Chowghacha">Chowghacha</option><option value="Jhikargacha">Jhikargacha</option><option value="Keshabpur">Keshabpur</option><option value="Kotwali">Kotwali</option><option value="Manirampur">Manirampur</option><option value="Sharsha">Sharsha</option><option value="Others">Others</option>';
	}
	if(DisList == 'Jhalokhathi') {
		var thanaList = '<option value="">Select One</option><option value="Jhalokhathi Sadar">Jhalokhathi Sadar</option><option value="Kanthalia">Kanthalia</option><option value="Nalchity">Nalchity</option><option value="Rajapur">Rajapur</option><option value="Others">Others</option>';
	}
	if(DisList == 'Jhenaidah') {
		var thanaList = '<option value="">Select One</option><option value="Harinakunda">Harinakunda</option><option value="Jhenaidah Sadar">Jhenaidah Sadar</option><option value="Kaliganj">Kaliganj</option><option value="Kotchandpur">Kotchandpur</option><option value="Mahespur">Mahespur</option><option value="Shailkupa">Shailkupa</option><option value="Others">Others</option>';
	}
	if(DisList == 'Khagrachhari') {
		var thanaList = '<option value="">Select One</option><option value="Dighinala">Dighinala</option><option value="Khagrachhari Sadar">Khagrachhari Sadar</option><option value="Lakshmichhari">Lakshmichhari</option><option value="Mahalchhari">Mahalchhari</option><option value="Manikchhari">Manikchhari</option><option value="Matiranga">Matiranga</option><option value="Panchhari">Panchhari</option><option value="Ramgarh">Ramgarh</option><option value="Others">Others</option>';
	}
	if(DisList == 'Khulna') {
		var thanaList = '<option value="">Select One</option><option value="Batiaghata">Batiaghata</option><option value="Dacope">Dacope</option><option value="Daulatpur">Daulatpur</option><option value="Dighala">Dighala</option><option value="Dumuria">Dumuria</option><option value="Khalishpur">Khalishpur</option><option value="Khan Jahan Ali">Khan Jahan Ali</option><option value="Khulna Sadar">Khulna Sadar</option><option value="Koyra">Koyra</option><option value="Paikgachha">Paikgachha</option><option value="Phultala">Phultala</option><option value="Rupsa">Rupsa</option><option value="Sonadanga">Sonadanga</option><option value="Terokhada">Terokhada</option><option value="Others">Others</option>';
	}
	if(DisList == 'Kishoreganj') {
		var thanaList = '<option value="">Select One</option><option value="Austagram">Austagram</option><option value="Bajitpur">Bajitpur</option><option value="Bhairab">Bhairab</option><option value="Hossenpur">Hossenpur</option><option value="Itna">Itna</option><option value="Karimganj">Karimganj</option><option value="Katiadi">Katiadi</option><option value="Kishoregonj SADAR">Kishoregonj SADAR</option><option value="Kuliar Char">Kuliar Char</option><option value="Mithamoin">Mithamoin</option><option value="Nikli">Nikli</option><option value="Pakundia">Pakundia</option><option value="Tarail">Tarail</option><option value="Others">Others</option>';
	}
	if(DisList == 'Kurigram') {
		var thanaList = '<option value="">Select One</option><option value="Bhurungamari">Bhurungamari</option><option value="Char Rajibpur">Char Rajibpur</option><option value="Chilmari">Chilmari</option><option value="Kurigram Sadar">Kurigram Sadar</option><option value="Nageshwari">Nageshwari</option><option value="Phulbari">Phulbari</option><option value="Rajarhat">Rajarhat</option><option value="Rajibpur">Rajibpur</option><option value="Rowmari">Rowmari</option><option value="Ulipur">Ulipur</option><option value="Others">Others</option>';
	}
	if(DisList == 'Kushtia') {
		var thanaList = '<option value="">Select One</option><option value="Bheramara">Bheramara</option><option value="Daulatpur">Daulatpur</option><option value="Khoksa">Khoksa</option><option value="Kumarkhali">Kumarkhali</option><option value="Kushtia Sadar">Kushtia Sadar</option><option value="Mirpur">Mirpur</option><option value="Others">Others</option>';
	}
	if(DisList == 'Lalmonirhat') {
		var thanaList = '<option value="">Select One</option><option value="Aditmari">Aditmari</option><option value="Hatibanda">Hatibanda</option><option value="Kaliganj">Kaliganj</option><option value="Lalmonirhat Sadar">Lalmonirhat Sadar</option><option value="Patgram">Patgram</option><option value="Others">Others</option>';
	}
	if(DisList == 'Lakshmipur') {
		var thanaList = '<option value="">Select One</option><option value="Komol Nogor">Komol Nogor</option><option value="Lakshmipur Sadar">Lakshmipur Sadar</option><option value="Raipur">Raipur</option><option value="Ramganj">Ramganj</option><option value="Ramgati">Ramgati</option><option value="Others">Others</option>';
	}
	if(DisList == 'Madaripur') {
		var thanaList = '<option value="">Select One</option><option value="Kalkini">Kalkini</option><option value="Madaripur Sadar">Madaripur Sadar</option><option value="Rajoir">Rajoir</option><option value="Shibchar">Shibchar</option><option value="Others">Others</option>';
	}
	if(DisList == 'Magura') {
		var thanaList = '<option value="">Select One</option><option value="Magura Sadar">Magura Sadar</option><option value="Mohammadpur">Mohammadpur</option><option value="Shalikha">Shalikha</option><option value="Sreepur">Sreepur</option><option value="Others">Others</option>';
	}
	if(DisList == 'Manikganj') {
		var thanaList = '<option value="">Select One</option><option value="Daulatpur">Daulatpur</option><option value="Ghior">Ghior</option><option value="Harirampur">Harirampur</option><option value="Manikganj Sadar">Manikganj Sadar</option><option value="Saturia">Saturia</option><option value="Shibalaya">Shibalaya</option><option value="Singair">Singair</option><option value="Others">Others</option>';
	}
	if(DisList == 'Meharpur') {
		var thanaList = '<option value="">Select One</option><option value="Gangni">Gangni</option><option value="Meherpur Sadar">Meherpur Sadar</option><option value="Mujib Nagar">Mujib Nagar</option><option value="Others">Others</option>';
	}
	if(DisList == 'Mauluvibazar') {
		var thanaList = '<option value="">Select One</option><option value="Barlekha">Barlekha</option><option value="Juri">Juri</option><option value="Kamalganj">Kamalganj</option><option value="Kulaura">Kulaura</option><option value="Mauluvi Bazar Sadar">Maulvi Bazar Sadar</option><option value="Rajnagar">Rajnagar</option><option value="Sreemangal">Sreemangal</option><option value="Others">Others</option>';
	}
	if(DisList == 'Munshiganj') {
		var thanaList = '<option value="">Select One</option><option value="Gazaria">Gazaria</option><option value="Louhajang">Louhajang</option><option value="Munshiganj Sadar">Munshiganj Sadar</option><option value="Serajdikhan">Serajdikhan</option><option value="Sreenagar">Sreenagar</option><option value="Tongibari">Tongibari</option><option value="Others">Others</option>';
	}
	if(DisList == 'Mymensingh') {
		var thanaList = '<option value="">Select One</option><option value="Bhalukha">Bhalukha</option><option value="Dhobaura">Dhobaura</option><option value="Fulbaria">Fulbaria</option><option value="Gaffargaon">Gaffargaon</option><option value="Gauripur">Gauripur</option><option value="Haluaghat">Haluaghat</option><option value="Ishwarganj">Ishwarganj</option><option value="Muktagachha">Muktagachha</option><option value="Mymensingh Sadar">Mymensingh Sadar</option><option value="Nandail">Nandail</option><option value="Phulpur">Phulpur</option><option value="Tarakanda">Tarakanda</option><option value="Trishal">Trishal</option><option value="Others">Others</option>';
	}
	if(DisList == 'Naogaon') {
		var thanaList = '<option value="">Select One</option><option value="Atrai">Atrai</option><option value="Badalgachhi">Badalgachhi</option><option value="Dhamoirhat">Dhamoirhat</option><option value="Mahadebpur">Mahadebpur</option><option value="Manda">Manda</option><option value="Naogaon Sadar">Naogaon Sadar</option><option value="Niamatpur">Niamatpur</option><option value="Patnitala">Patnitala</option><option value="Porsha">Porsha</option><option value="Raninagar">Raninagar</option><option value="Sapahar">Sapahar</option><option value="Others">Others</option>';
	}
	if(DisList == 'Narail') {
		var thanaList = '<option value="">Select One</option><option value="Kalia">Kalia</option><option value="Lohagara">Lohagara</option><option value="NarailSadar">NarailSadar</option><option value="Others">Others</option>';
	}
	if(DisList == 'Narayanganj') {
		var thanaList = '<option value="">Select One</option><option value="Araihazar">Araihazar</option><option value="Bandar">Bandar</option><option value="Narayanganj Sadar">Narayanganj Sadar</option><option value="Rupganj">Rupganj</option><option value="Siddirganj">Siddirganj</option><option value="Sonargaon">Sonargaon</option><option value="Others">Others</option>';
	}
	if(DisList == 'Narsingdi') {
		var thanaList = '<option value="">Select One</option><option value="Belabo">Belabo</option><option value="Manohardi">Manohardi</option><option value="Narsingdi Sadar">Narsingdi Sadar</option><option value="Palash">Palash</option><option value="Roypura">Roypura</option><option value="Shibpur">Shibpur</option><option value="Others">Others</option>';
	}
	if(DisList == 'Natore') {
		var thanaList = '<option value="">Select One</option><option value="Bagati Para">Bagati Para</option><option value="Baraigram">Baraigram</option><option value="Gurudaspur">Gurudaspur</option><option value="Lalpur">Lalpur</option><option value="Naldanga">Naldanga</option><option value="Natore Sadar">Natore Sadar</option><option value="Singra">Singra</option><option value="Others">Others</option>';
	}
	if(DisList == 'Netrokona') {
		var thanaList = '<option value="">Select One</option><option value="Atpara">Atpara</option><option value="Barhatta">Barhatta</option><option value="Durgapur">Durgapur</option><option value="Kalmakanda">Kalmakanda</option><option value="Kendua">Kendua</option><option value="Khaliajuri">Khaliajuri</option><option value="Madan">Madan</option><option value="Mohanganj">Mohanganj</option><option value="Netrokona Sadar">Netrokona Sadar</option><option value="Purbadhala">Purbadhala</option><option value="Others">Others</option>';
	}
	if(DisList == 'Nilphamari') {
		var thanaList = '<option value="">Select One</option><option value="Dimla">Dimla</option><option value="Domar">Domar</option><option value="Jaldhaka">Jaldhaka</option><option value="Kishoreganj ">Kishoreganj </option><option value="Nilphamari Sadar">Nilphamari Sadar</option><option value="Saidpur">Saidpur</option><option value="Others">Others</option>';
	}
	if(DisList == 'Noakhali') {
		var thanaList = '<option value="">Select One</option><option value="Begumganj">Begumganj</option><option value="Chatkhil">Chatkhil</option><option value="Companiganj">Companiganj</option><option value="Hatiya">Hatiya</option><option value="Kobirhat">Kobirhat</option><option value="Noakhali Sadar (Sudharam)">Noakhali Sadar (Sudharam)</option><option value="Senbagh">Senbagh</option><option value="Sonaimuri">Sonaimuri</option><option value="Subornachhar">Subornachhar</option><option value="Others">Others</option>';
	}
	if(DisList == 'Pabna') {
		var thanaList = '<option value="">Select One</option><option value="Atgharia">Atgharia</option><option value="Bera">Bera</option><option value="Bhangura">Bhangura</option><option value="Chatmohar">Chatmohar</option><option value="Faridpur">Faridpur</option><option value="Ishwardi">Ishwardi</option><option value="Pabna Sadar">Pabna Sadar</option><option value="Santhia">Santhia</option><option value="Sujanagar">Sujanagar</option><option value="Others">Others</option>';
	}
	if(DisList == 'Panchagarh') {
		var thanaList = '<option value="">Select One</option><option value="Atwari">Atwari</option><option value="Boda">Boda</option><option value="Debiganj">Debiganj</option><option value="Panchagarh Sadar">Panchagarh Sadar</option><option value="Tentulia">Tentulia</option><option value="Others">Others</option>';
	}
	if(DisList == 'Patuakhali') {
		var thanaList = '<option value="">Select One</option><option value="Bauphal">Bauphal</option><option value="Dashmina">Dashmina</option><option value="Dumki">Dumki</option><option value="Galachipa">Galachipa</option><option value="Kala Para">Kala Para</option><option value="Mirzaganj">Mirzaganj</option><option value="Patuakhali Sadar">Patuakhali Sadar</option><option value="Rangabali">Rangabali</option><option value="Others">Others</option>';
	}
	if(DisList == 'Pirojpur') {
		var thanaList = '<option value="">Select One</option><option value="Bhandaria">Bhandaria</option><option value="Indurkani">Indurkani</option><option value="Kawkhali">Kawkhali</option><option value="Mathbaria">Mathbaria</option><option value="Nazirpur">Nazirpur</option><option value="Nesarabad (Swarupkati)">Nesarabad (Swarupkati)</option><option value="Pirojpur Sadar">Pirojpur Sadar</option><option value="Others">Others</option>';
	}
	if(DisList == 'Rajbari') {
		var thanaList = '<option value="">Select One</option><option value="Balia Kandi">Balia Kandi</option><option value="Goalandaghat">Goalandaghat</option><option value="Kalukhali">Kalukhali</option><option value="Pangsha">Pangsha</option><option value="Rajbari Sadar">Rajbari Sadar</option><option value="Others">Others</option>';
	}
	if(DisList == 'Rajshahi') {
		var thanaList = '<option value="">Select One</option><option value="Balia Kandi">Balia Kandi</option><option value="Goalandaghat">Goalandaghat</option><option value="Kalukhali">Kalukhali</option><option value="Pangsha">Pangsha</option><option value="Rajbari Sadar">Rajbari Sadar</option><option value="Others">Others</option>';
	}
	if(DisList == 'Rangamati') {
		var thanaList = '<option value="">Select One</option><option value="Bagaichhari">Bagaichhari</option><option value="Barkal">Barkal</option><option value="Belaichhari">Belaichhari</option><option value="Juraichhari">Juraichhari</option><option value="Kaptai">Kaptai</option><option value="Kawkhali (Betbunia)">Kawkhali (Betbunia)</option><option value="Langadu">Langadu</option><option value="Naniarchar">Naniarchar</option><option value="Rajasthali">Rajasthali</option><option value="Rangamati Sadar">Rangamati Sadar</option><option value="Others">Others</option>';
	}
	if(DisList == 'Rangpur') {
		var thanaList = '<option value="">Select One</option><option value="Badarganj">Badarganj</option><option value="Gangachara">Gangachara</option><option value="Kaunia">Kaunia</option><option value="Mitha Pukur">Mitha Pukur</option><option value="Pirgachha">Pirgachha</option><option value="Pirganj">Pirganj</option><option value="Rangpur Sadar">Rangpur Sadar</option><option value="Taraganj">Taraganj</option><option value="Others">Others</option>';
	}
	if(DisList == 'Satkhira') {
		var thanaList = '<option value="">Select One</option><option value="Assasuni">Assasuni</option><option value="Debhata">Debhata</option><option value="Kalaroa">Kalaroa</option><option value="Kaliganj">Kaliganj</option><option value="Satkhira Sadar">Satkhira Sadar</option><option value="Shyamnagar">Shyamnagar</option><option value="Tala">Tala</option><option value="Others">Others</option>';
	}
	if(DisList == 'Shariatpur') {
		var thanaList = '<option value="">Select One</option><option value="Bhaderganj">Bhaderganj</option><option value="Damudya">Damudya</option><option value="Gosairhat">Gosairhat</option><option value="Naria">Naria</option><option value="Palong(Sadar)">Palong(Sadar)</option><option value="Zanjira">Zanjira</option><option value="Others">Others</option>';
	}
	if(DisList == 'Sherpur') {
		var thanaList = '<option value="">Select One</option><option value="Jhenaigati">Jhenaigati</option><option value="Nakla">Nakla</option><option value="Nalitabari">Nalitabari</option><option value="Sherpur Sadar">Sherpur Sadar</option><option value="Sreebardi">Sreebardi</option><option value="Others">Others</option>';
	}
	if(DisList == 'Sirajganj') {
		var thanaList = '<option value="">Select One</option><option value="Belkuchi">Belkuchi</option><option value="Chauhali">Chauhali</option><option value="Kamarkhanda">Kamarkhanda</option><option value="Kazipur">Kazipur</option><option value="Royganj">Royganj</option><option value="Shahjadpur">Shahjadpur</option><option value="Sirajganj Sadar">Sirajganj Sadar</option><option value="Tarash">Tarash</option><option value="Ullah Para">Ullah Para</option><option value="Others">Others</option>';
	}
	if(DisList == 'Sunamganj') {
		var thanaList = '<option value="">Select One</option><option value="Bishwambarpur">Bishwambarpur</option><option value="Chhatak">Chhatak</option><option value="Daxin Sunamganj">Daxin Sunamganj</option><option value="Derai">Derai</option><option value="Dharampasha">Dharampasha</option><option value="Dowarabazar">Dowarabazar</option><option value="Jagannatpur">Jagannatpur</option><option value="Jamalganj">Jamalganj</option><option value="Sulla">Sulla</option><option value="Sunamganj Sadar">Sunamganj Sadar</option><option value="Tahirpur">Tahirpur</option><option value="Others">Others</option>';
	}
	if(DisList == 'Sylhet') {
		var thanaList = '<option value="">Select One</option><option value="Balaganj">Balaganj</option><option value="Beani Bazar">Beani Bazar</option><option value="Bishwanath">Bishwanath</option><option value="Companiganj">Companiganj</option><option value="Fenchuganj">Fenchuganj</option><option value="Golabganj">Golabganj</option><option value="Gowainghat">Gowainghat</option><option value="Jaintiapur">Jaintiapur</option><option value="Kanaighat">Kanaighat</option><option value="Kowtali">Kowtali</option><option value="South Surma">South Surma</option><option value="Zakirganj">Zakirganj</option><option value="Others">Others</option>';
	}
	if(DisList == 'Tangail') {
		var thanaList = '<option value="">Select One</option><option value="Basail">Basail</option><option value="Bhuapur">Bhuapur</option><option value="Delduar">Delduar</option><option value="Dhonbari">Dhonbari</option><option value="Ghatail">Ghatail</option><option value="Gopalpur">Gopalpur</option><option value="Kalihati">Kalihati</option><option value="Madhupur">Madhupur</option><option value="Mirzapur">Mirzapur</option><option value="Nagarpur">Nagarpur</option><option value="Sakhipur">Sakhipur</option><option value="Tangail Sadar">Tangail Sadar</option><option value="Others">Others</option>';
	}
	if(DisList == 'Thakurgaon') {
		var thanaList = '<option value="">Select One</option><option value="Baliadangi">Baliadangi</option><option value="Haripur">Haripur</option><option value="Pirganj">Pirganj</option><option value="Ranisankail">Ranisankail</option><option value="Thakurgaon Sadar">Thakurgaon Sadar</option><option value="Others">Others</option>';
	}
	

	document.getElementById("polic_sta").innerHTML= thanaList;
}