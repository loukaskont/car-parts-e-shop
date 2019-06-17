<header class="navbar navbar-fixed-top">
<link rel="shortcut icon" type="image/png" href="hyundaiMonoLogo.png"/>
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
   
<img style="width:90%; height:100%;" src="DropDownImages\headerImage.png">
<form name="marka" method="POST">
<input type="hidden" name="marka">
</form>
</header>

</br>
<?php
	function isMobile() {
		return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
	}
if(isMobile())
{
	header("Location: /mobile.php");
}
$servername = "localhost";
	$username = "****";
	$password = "****";
	$dbname = "******";
	$conn = new mysqli($servername, $username, $password, $dbname);
	$conn->set_charset("utf8");
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
$productsStartSeper = "";
$metaforika = 0;
$plitoteo = 0;
if(isset($_GET["productsKomaSeper"]))
{
	$sqlSelectProducts = 'SELECT proionta.id as productId, proionta.timi, proionta.metaforika, proionta.titlos, proionta_eikones.path_eikonas,proionta.posostoKerdous FROM r105607lou_antalaktika.proionta join proionta_eikones on proionta.id = proionta_eikones.id_proiontos where proionta.id in ('.$_GET["productsKomaSeper"].') and IsLogoImage = 0;';
	$resultProducts = $conn->query($sqlSelectProducts);
	while($rowProducts = $resultProducts->fetch_assoc()) 
	{
		$metaforika = $rowProducts["metaforika"];
		$productPrice = number_format((float)$rowProducts['timi'] + $rowProducts['timi'] * $rowProducts['posostoKerdous'] / 100, 2, '.', '');
		$plitoteo = $plitoteo + $productPrice;
		$productsStartSeper = $productsStartSeper.'#'.$rowProducts["productId"].'*'. $productPrice .'*'.$rowProducts["titlos"].'*images/products/'.$rowProducts["path_eikonas"];
	}
	$plitoteo = $plitoteo + $metaforika; 
	echo '<input type="hidden" id="pliroteoInput" value="'.$plitoteo.'" style="width:100; border: none; width:1px;" readonly>';
}

echo '<div id="productTableDiv"></div>';
echo '<body onload="setToProductsSeperatedString(\''.$productsStartSeper.'\',\''.$metaforika.'\',\''.$plitoteo.'\',\''.$_GET["glosa"].'\')">
<div id="cartDiv" style="height:1px; display: none;">
</div>';

if($_GET["glosa"]=='gr')
{
	echo '<button id="goToCustomerFormBotton" class="btn" align="center" onClick="goToCustomerForm(\''.$metaforika.'\',\''.$_GET["glosa"].'\')">Ταμειο</button>';
	echo '</br></br>Στοιχεία επικοινωνίας:</br>Website: www.carcylon.com</br></br>Τηλ: 6940658894</br></br>email: loukaskont@hotmail.com</br></br>Νησί Ημαθίας 59300';
}
if($_GET["glosa"]=='en')
{
	echo '<button id="goToCustomerFormBotton" class="btn" align="center" onClick="goToCustomerForm(\''.$metaforika.'\',\''.$_GET["glosa"].'\')">Next</button>';
		echo '</br></br>Contact Details:</br>Website: www.carcylon.com</br></br>Phone: +306940658894</br></br>email: loukaskont@hotmail.com</br></br>Street: Nisi Imathias Greece 59300';
}

echo '<input type="hidden" id="cartProductsCount" value="0 προιόντα" style="width:100; border: none;" readonly>';

	$insertEpiskepseis = 'INSERT INTO episkepseis(ip, imerominia, products) VALUES (\''.$_SERVER['REMOTE_ADDR'].'\',\''.date("Y/m/d h:i:s").'\',\''.$productsStartSeper.'\');';
		if($_SERVER['REMOTE_ADDR']!='78.87.192.12')
		{
			$conn->query($insertEpiskepseis);
		}
$conn->close();
echo '</body>';

?>

