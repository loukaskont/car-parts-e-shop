<?php
	session_start();
?>

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
   
<form name="marka" method="POST">
<input type="hidden" name="marka">
</form>


<?php
	$servername = "localhost";
	$username = "*******";
	$password = "*******";
	$dbname = "*******";
	$conn = new mysqli($servername, $username, $password, $dbname);
	$conn->set_charset("utf8");
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
$insertEpiskepseis = 'INSERT INTO episkepseis(ip, imerominia, products, lastPage) VALUES (\''.$_SERVER['REMOTE_ADDR'].'\',\''.date("Y/m/d h:i:s").'\',\''.$productsStartSeper.'\',\'cartPage.php\');';
		if($_SERVER['REMOTE_ADDR']!='78.87.192.12')
		{
			$conn->query($insertEpiskepseis);
		}
$userFormFill = false;
$metaforika = 10;
$sqlSelectMetaforika = 'select * from proionta where id = '.$_SESSION['idProiontos'].';';
$resultMetaforika = $conn->query($sqlSelectMetaforika);
if ($resultMetaforika->num_rows > 0)
{
	$rowMetaforika = $resultMetaforika->fetch_assoc();
	$metaforika = $rowMetaforika['metaforika'];
}
if(isset($_GET["onoma"]) and isset($_GET["eponimo"]) and isset($_GET["tilefono"]) and isset($_GET["email"]))
{
	$userFormFill = true;
}
if($userFormFill == false)
{
echo '
<div id="search-logo">
<table style="width:100%; position:fixed; top:25%;">
  <tr>
    <td align="top"><a href = "http://www.carcylon.com/?clearCart=1"><img style="max-width:100%; height:auto;"  src="hyundaiMonoLogo.png"></a></td>
    <td align="center">
		<div class="form-wrapper">
			<input style="width:320px; height:40px; align:left;" onblur="searchProducts();" onkeyup="searchProductsEnter(event);" type="text" id="searchTextBox" placeholder="Αναζητηση..." required>
			<a href="index.php?searchText=" id="submitAnazitisi"><input type="submit" value="Αναζητηση" id="submit"></a>
		</div>
	</td>
	<td align="right">
	</td>
  </tr>
</table>
</div>
<br/>
   
		<div id=\'cssmenu\' style="position:fixed; top:0;">
           <ul>
				    <li class=\'active\'><a href=\'#\'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\service.jpg" alt="Mountain View"></span></a>
						<ul>
							<li class=\'has-sub\'><a href=\'product.php?id_antalaktikou=3\'><span>Λαδι κινητηρα<br/>&nbsp;&nbsp;&nbsp;&nbsp;<img style="max-width:100%; height:auto;"  src="DropDownImages\engineOil.jpg" alt="Mountain View"></span></a></li>
						    <li class=\'has-sub\'><a href=\'product.php?id_antalaktikou=2\'><span>Φιλτρο λαδιου κινητηρα<br/>&nbsp;&nbsp;&nbsp;&nbsp;<img style="max-width:100%; height:auto;"  src="DropDownImages\oilFilter.jpg" alt="Mountain View"></span></a></li>
						    <li class=\'has-sub\'><a href=\'product.php?id_antalaktikou=13\'><span>Φιλτρο αερα κινητηρα<br/>&nbsp;&nbsp;&nbsp;&nbsp;<img style="max-width:100%; height:auto;"  src="DropDownImages\engineAirFilter.jpg" alt="Mountain View"></span></a></li>
						    <li class=\'has-sub\'><a href=\'product.php?id_antalaktikou=14\'><span>Φιλτρο αερα καμπινας<br/>&nbsp;&nbsp;&nbsp;&nbsp;<img style="max-width:100%; height:auto;"  src="DropDownImages\acAirFilter.jpg" alt="Mountain View"></span></a></li>
						</ul>
					</li>
				    <li class=\'active\'><a href=\'#\'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\systimaDiefthinsis.jpg" alt="Mountain View"></span></a>
					    <ul>
							<li class=\'has-sub\'><a href="product.php?id_antalaktikou=6"><span>Φουσκα, συστημα διευθυνσης<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\fouska.jpg" alt="Mountain View"></span></a></li>
						    <li class=\'has-sub\'><a href="product.php?id_antalaktikou=26"><span>ρουλεμαν τροχων<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\roulemanTroxou.jpg" alt="Mountain View"></span></a></li>
						    <li class=\'has-sub\'><a href="product.php?id_antalaktikou=29"><span>ακρομπαρα<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\akromparo.jpg" alt="Mountain View"></span></a></li>
						    <li class=\'has-sub\'><a href="product.php?id_antalaktikou=30"><span>αμορτισερ<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\amortiser.jpg" alt="Mountain View"></span></a></li>
						    <li class=\'has-sub\'><a href="product.php?id_antalaktikou=31"><span>Ελατηρια αναρτησης<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\elatiria.jpg" alt="Mountain View"></span></a></li>
						    <li class=\'has-sub\'><a href="product.php?id_antalaktikou=32"><span>αρθρωση, μπαρα τιμονιου<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\arthrosi.jpg" alt="Mountain View"></span></a></li>
						</ul>
				    </li>
			        <li class=\'active\'><a href=\'#\'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\engine.jpg" alt="Mountain View"></span></a>
						<ul></ul>
						<ul>
						<li class=\'has-sub\'><a href=\'product.php?id_antalaktikou=7\'><span>Ιμαντες εξωτερικοι<br/>&nbsp;&nbsp;&nbsp;&nbsp;<img style="max-width:100%; height:auto;"  src="DropDownImages\outsideBelt.jpg" alt="Mountain View"></span></a></li>
						<li class=\'has-sub\'><a href=\'product.php?id_antalaktikou=5\'><span>Σετ χρονισμου (ιμαντας χρονισμου)<br/>&nbsp;&nbsp;&nbsp;&nbsp;<img style="max-width:100%; height:auto;"  src="DropDownImages\timingSet.jpg" alt="Mountain View"></span></a></li>
						<li class=\'has-sub\'><a href="product.php?id_antalaktikou=17"><span>φλαντζα κεφαλης<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\flantzaKefalia.jpg" alt="Mountain View"></span></a></li>
						    <li class=\'has-sub\'><a href="product.php?id_antalaktikou=18"><span>Φλαντζα καπακιου<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\flantzaKapakiou.jpg" alt="Mountain View"></span></a></li>
						    <li title="ωστήρια βαλβίδων" class=\'has-sub\'><a href="product.php?id_antalaktikou=24"><span>ωστηρια βαλβιδων<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\ostiria.jpg" alt="Mountain View"></span></a></li>
						</ul>
					</li>
					<li class=\'active\'><a href=\'#\'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\psixi.jpg" alt="Mountain View"></span></a>
						<ul>
                            <li class=\'has-sub\'><a href="product.php?id_antalaktikou=8"><span>αντλια νερου<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\antliaNerou.jpg" alt="Mountain View"></span></a></li>
						    <li class=\'has-sub\'><a href="product.php?id_antalaktikou=16"><span>θερμοστατες<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\thermostatis.jpg" alt="Mountain View"></span></a></li>
						    <li class=\'has-sub\'><a href="product.php?id_antalaktikou=23"><span>Ψυγειο, ψυξη κινητηρα<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\psigio.jpg" alt="Mountain View"></span></a></li>
						</ul>
					</li>
					<li class=\'active\'><a href=\'#\'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\trofodosia.jpg" alt="Mountain View"></span></a>
						<ul>
						<li class=\'has-sub\'><a href=\'product.php?id_antalaktikou=21\'><span>Φιλτρο καυσιμου<br/>&nbsp;&nbsp;&nbsp;&nbsp;<img style="max-width:100%; height:auto;"  src="DropDownImages\gasFilter.jpg" alt="Mountain View"></span></a></li>
                            <li class=\'has-sub\'><a href="product.php?id_antalaktikou=9"><span>αντλια βενζινης<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\antliaVenzinis.jpg" alt="Mountain View"></span></a></li>
						</ul>
					</li>
					<li class=\'active\'><a href=\'#\'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\frena.jpg" alt="Mountain View"></span></a>
						<ul>
                            <li class=\'has-sub\'><a href="product.php?id_antalaktikou=11"><span>δισκοπλακες<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\diskoplakes.jpg" alt="Mountain View"></span></a></li>
							<li class=\'has-sub\'><a href="product.php?id_antalaktikou=25"><span>σιαγονες φρενων<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\siagones.jpg" alt="Mountain View"></span></a></li>
							<li class=\'has-sub\'><a href="product.php?id_antalaktikou=10"><span>Τακακια<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\brakePads.jpg" alt="Mountain View"></span></a></li>
						</ul>
					</li>
					<li class=\'active\'><a href=\'#\'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\metadosi.jpg" alt="Mountain View"></span></a>
						<ul>
                            <li class=\'has-sub\'><a href="product.php?id_antalaktikou=12"><span>βαλβολινες κιβωτιου ταχυτητων<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\valvolines.jpg" alt="Mountain View"></span></a></li>
							<li class=\'has-sub\'><a href="product.php?id_antalaktikou=22"><span>Σετ συμπλεκτη<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\simplektis.jpg" alt="Mountain View"></span></a></li>
						</ul>
					</li>
					<li class=\'active\'><a href=\'#\'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\ekinisi.jpg" alt="Mountain View"></span></a>
						<ul>
                            <li class=\'has-sub\'><a href="product.php?id_antalaktikou=20"><span>μιζα<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\miza.jpg" alt="Mountain View"></span></a></li>
							<li class=\'has-sub\'><a href="product.php?id_antalaktikou=33"><span>προθερμαντηρες<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\prothermantires.jpg" alt="Mountain View"></span></a></li>
							<li class=\'has-sub\'><a href="product.php?id_antalaktikou=1"><span>Μπουζι<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\sparkPlug.jpg" alt="Mountain View"></span></a></li>
							<li class=\'has-sub\'><a href="product.php?id_antalaktikou=27"><span>πολλαπλασιαστης<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\polaplasiastis.jpg" alt="Mountain View"></span></a></li>
						</ul>
					</li>
					<li class=\'active\'><a href=\'#\'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\ilektrikoSystima.jpg" alt="Mountain View"></span></a>
						<ul>
                            <li class=\'has-sub\'><a href="product.php?id_antalaktikou=19"><span>διναμο<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\dinamo.jpg" alt="Mountain View"></span></a></li>
							<li class=\'has-sub\'><a href="product.php?id_antalaktikou=27"><span>πολλαπλασιαστης<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\polaplasiastis.jpg" alt="Mountain View"></span></a></li>
							<li class=\'has-sub\'><a href="product.php?id_antalaktikou=28"><span>αισθητηρας λαμδα<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\lambda.jpg" alt="Mountain View"></span></a></li>
						</ul>
					</li>	


					<li class=\'active\'"><a href=\'#\'><span><input type="text" id="cartProductsCount" value="0 προιόντα" style="width:90px; border: none;" readonly></br><input type="text" id="cartSumPrice" value="" style="width:40px; position-right:0px; border: none;" readonly></br><img style="max-width:100%; height:auto;"  src="cart.png" alt="Mountain View"></span></a>
						<ul id="cartUl">
						</ul>
					</li>
			</ul>
        </div>
';
}

echo '</header>';


$pliroteo = 0;
$idParagelias = "";
if($userFormFill == true)
{
	$servername = "localhost";
	$username = "r1056_loukas";
	$password = "iGrz_014";
	$dbname = "r105607lou_antalaktika";
	$conn = new mysqli($servername, $username, $password, $dbname);
	$conn->set_charset("utf8");
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	$sql = '';
	$dieythinsi = $_GET["poli"].' '.$_GET["odos"].' '.$_GET["arithmos"];
	$sqlSelectPelatis = "Select id from r105607lou_antalaktika.pelates where onoma = '".$_GET["onoma"]."' and eponimo = '".$_GET["eponimo"]."' and tilefono = '".$_GET["tilefono"]."' and email = '".$_GET["email"]."' and xora = '".$_GET["xora"]."' and tk = '".$_GET["tk"]."' and diefthinsi = '".$dieythinsi."' and afm = '".$_GET['afm']."'";
	$sqlInsetPelatis = "INSERT INTO r105607lou_antalaktika.pelates(onoma,eponimo,tilefono,email,xora,tk,diefthinsi,afm) VALUES('".$_GET["onoma"]."','".$_GET["eponimo"]."','".$_GET["tilefono"]."','".$_GET["email"]."','".$_GET["xora"]."','".$_GET["tk"]."','".$dieythinsi."','".$_GET['afm']."');";
	$resultPelatisPrin = $conn->query($sqlSelectPelatis);
	if($resultPelatisPrin->num_rows == 0)
	{
		$conn->query($sqlInsetPelatis);
	}
	$resultPelatis = $conn->query($sqlSelectPelatis);
	$id_pelati = "";
	if ($resultPelatis->num_rows > 0)
	{
		$row = $resultPelatis->fetch_assoc();
		$id_pelati = $row["id"];
		$imerominia = date("d-m-Y");
		$ora = date('H:i:s');
		$productIdsString = $_GET["productIds"];
		$productIds = explode("*", $productIdsString);
		$pliroteoPelati = 0;
		foreach ($productIds as $prodactId)  
		{
			if(isset($prodactId) and strlen($prodactId)>0 and $prodactId != 'null')
			{
				$sqlSelectProductPrice = "SELECT * FROM r105607lou_antalaktika.proionta where id = ".$prodactId.";";
				$resultProductPrice = $conn->query($sqlSelectProductPrice);
				if ($resultProductPrice->num_rows > 0)
				{
					$rowProductPrice = $resultProductPrice->fetch_assoc();
					$productPrice = number_format((float)$rowProductPrice['timi'] + $rowProductPrice['timi'] * $rowProductPrice['posostoKerdous'] / 100, 2, '.', '');
					$metaforika = $rowProductPrice['metaforika'];
				}
			}
		}
		$pliroteoPelati = str_replace(" €","",$_GET["pliroteo"]);
		echo '<input type="hidden" id="pliroteoInput" value="'.$pliroteoPelati.'" style="width:100; border: none;" readonly>';
		$sqlInsertParagelia = "INSERT INTO r105607lou_antalaktika.paragelies (id_pelati,imerominia,ora,pliroteo_pelati,kostos_metaforas,tropos_apostolis,tropos_pliromis) VALUES('".$id_pelati."','".$imerominia."','".$ora."','-','-','".$_GET["tropos_apostolis"]."','".$_GET["tropos_pliromis"]."');";
		$conn->query($sqlInsertParagelia);
		$sqlSelectParagelia = "SELECT * FROM r105607lou_antalaktika.paragelies where id_pelati= ".$id_pelati." and imerominia= '".$imerominia."' and ora='".$ora."';";
		$resultParagelia = $conn->query($sqlSelectParagelia);
		if ($resultParagelia->num_rows > 0)
		{
			$rowParagelia = $resultParagelia->fetch_assoc();
			$idParagelias = $rowParagelia["id"];
			foreach ($productIds as $prodactId)
			{
				$sqlInsertParageliesProionta = "INSERT INTO r105607lou_antalaktika.paragelies_proionta(id_paragelias,id_proiontos)VALUES(".$idParagelias.",".$prodactId.");";
				$conn->query($sqlInsertParageliesProionta);
			}
		}
	}
	$conn->close();
}
else
{
	echo '<input type="hidden" id="pliroteoInput" value="0" style="width:100; border: none;" readonly>';
}




if($userFormFill == false)
{
	if(isset($_GET["page"]))
	{
		if($_GET["page"]==2)
		{
			echo '<body onscroll="scrollingPage()" onload="loadCartPage(2,'.$metaforika.',\'gr\')">';
		}
	}
	else
	{
		echo '<body onscroll="scrollingPage()" onload="loadCartPage(1,'.$metaforika.',\'gr\')">';
	}
	echo '
	<div id="cartDiv" style="height:1px; display: none;">
	</div><br/><br/><br/><br/></div><br/><br/><br/><br/>
	<br/><button id="goToCustomerFormBotton" class="btn" align="center" onClick="goToCustomerForm('.$metaforika.',\'gr\')">Ταμειο</button>
	<br/><br/><div id="productTableDiv"></div>';
}
else
{
	if($_GET["glosa"]=="gr")
	{
	echo '</br></br></br></br></br></br></br><a href="paragelia.php?glosa=gr&idParagelias='.$idParagelias.'">Ολοκλήρωση παραγγελίας</a>';
	}
	if($_GET["glosa"]=="en")
	{
	echo '</br></br></br></br></br></br></br><a href="paragelia.php?glosa=en&idParagelias='.$idParagelias.'">save order</a>';
	}
}





?>

</body>