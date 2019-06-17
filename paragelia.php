<?php
	session_start();
?>

<header class="navbar navbar-fixed-top">
<meta charset="utf-8">
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.min.css">
<script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
<script>src="https://code.jquery.com/jquery-2.2.4.min.js"</script>
<link rel="stylesheet" type="text/css" href="dropdownmenu.css">
<link rel="stylesheet" type="text/css" href="css\selectTags.css">
<script src="homepage.js"></script>
<script src="dropdownmenu.js"></script>
   <meta charset='utf-8'>
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="stylesheet" href="styles.css">
   <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
   <script src="script.js"></script>
   
   <link rel="stylesheet" href="css/reset.css">
   <link rel="stylesheet" href="css/style1.css">
   <script src="js/modernizr.js"></script>
   
<form name="marka" method="POST">
<input type="hidden" name="marka">
</form>
</header>

<?php
	echo '<body onload="clearCart();">';
	$servername = "localhost";
	$username = "****";
	$password = "****";
	$dbname = "****";
	$conn = new mysqli($servername, $username, $password, $dbname);
	$conn->set_charset("utf8");
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	if(isset($_GET["idParagelias"]))
	{
		$sqlParagelies_proionta = 'SELECT * FROM r105607lou_antalaktika.paragelies_proionta where id_paragelias = '.$_GET["idParagelias"].';';
		$resultParagelies_proionta = $conn->query($sqlParagelies_proionta);
		if ($resultParagelies_proionta->num_rows > 0)
		{
			$titloiProionton = '';
			$kostosXorisMetaforika = 0;
			$metaforika = 0;
			while($rowParagelies_proionta = $resultParagelies_proionta->fetch_assoc())
			{
				$sqlProionta = 'select * from proionta where id = '.$rowParagelies_proionta["id_proiontos"].';';
				$resultProionta = $conn->query($sqlProionta);
				if ($resultProionta->num_rows > 0)
				{
					if($rowProionta = $resultProionta->fetch_assoc())
					{
						$metaforika = $rowProionta["metaforika"];
						$timiMeKerdos = number_format((float)$rowProionta["timi"] + ($rowProionta['timi'] * $rowProionta['posostoKerdous'] / 100), 2, '.', '');
						$kostosXorisMetaforika = number_format((float)$kostosXorisMetaforika + $rowProionta["timi"] + ($rowProionta['timi'] * $rowProionta['posostoKerdous'] / 100), 2, '.', '');
						$titloiProionton = $titloiProionton .'</br>'. $rowProionta["titlos"].':  '.$timiMeKerdos.' €.';
					}
				}
			}
			$pliroteo = $kostosXorisMetaforika + $metaforika;
			$sqlUpdateParagelia = 'UPDATE r105607lou_antalaktika.paragelies SET pliroteo_pelati = \''.$pliroteo.'\',kostos_metaforas = \''.$metaforika.'\' WHERE id = '.$_GET["idParagelias"].';';
			$conn->query($sqlUpdateParagelia);
			
			
			if($_GET["glosa"]=="gr"){
			echo 'Η παραγγελία σας καταχωρήθηκε επιτυχώς. </br>Για να γίνει η αποστολή των προϊόντων από μέρους μας στην διεύθυνση που μας έχετε υποδείξει, </br>θα πρέπει να καταθέσετε σε κάποιον από τους παρακάτω λογαριασμούς το αντίτιμο της παραγγελίας που είναι: '.$pliroteo.' €.
</br></br></br></br>Προϊόντα παραγγελίας:</br>';
$titloiProionton = $titloiProionton .'</br>Μεταφορικά: '.$metaforika.' €.</br>Σύνολο: '.$pliroteo.' €.</br>';
echo $titloiProionton.'
</br></br></br></br>
Carcylon.com</br>Υπεύθυνος Κοντοτάσιος Λουκάς</br>
Τηλ: 6940658894</br></br>Πειραιώς IBAN: GR69 0172 2100 0052 1006 2217 262

</br></br>Εθνική IBAN: GR5301104300000043000102277
</br></br>3. paypal user: loukaskont@hotmail.com</br></br>price = '.$pliroteo.' €</br></br><a target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/myaccount/transfer/homepage/send"><img src="images/app/paypal-logo.png" style="width:10%; height:20%">

';}
				if($_GET["glosa"]=="en"){
			echo 'Your order has been successfully registered. </ br> In order for our products to be shipped to the address you have indicated to us, </ br> you will have to deposit into one of the following accounts the price of the order that is: '.$pliroteo.' €.
</br></br></br></br>products:</br>';
$titloiProionton = $titloiProionton .'</br>Shiping cost: '.$metaforika.' €.</br>payment: '.$pliroteo.' €.</br>';
echo $titloiProionton.'
</br></br></br></br>
Carcylon.com</br>Loukas Kontotasios</br>
</br></br>1. IBAN: GR69 0172 2100 0052 1006 2217 262

</br></br>2. IBAN: GR5301104300000043000102277
</br></br>3. paypal user: loukaskont@hotmail.com</br></br>price = '.$pliroteo.' €</br></br><a target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/myaccount/transfer/homepage/send"><img src="images/app/paypal-logo.png" style="width:10%; height:20%">
';}			
				
				
		}
	}
	$conn->close();
?>

</body>