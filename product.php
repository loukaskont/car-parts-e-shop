<?php
	echo '<input type="hidden" id="pliroteoInput" value="" style="width:100; border: none; width:1px;" readonly>';
	session_start();
	header('Content-Type: text/html; charset=utf-8');
	function isMobile() {
		return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
	}
if(isMobile())
{
	header("Location: /mobile.php");
}
?>

<header class="navbar navbar1056_loukasr-fixed-top">
<link rel="shortcut icon" type="image/png" href="hyundaiMonoLogo.png"/>
<meta charset="utf8">
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
   
<br/>

<div id="search-logo">
<table style="width:100%; position:fixed; top:25%;">
  <tr>
    <td><a href = "http://www.carcylon.com/?clearCart=1"><img style="max-width:100%; height:auto;" src="hyundaiMonoLogo.png"></a></td>
    <td>
		<div class="form-wrapper">
			<input style="width:320px; height:40px; align:left;" onblur="searchProducts(0);" onkeyup="searchProductsEnter(event);" type="text" id="searchTextBox" placeholder="Αναζητηση..." required>
			<a href="index.php" id="submitAnazitisi"><input type="submit" value="Αναζητηση" id="submit"></a>
		</div>
	</td>
  </tr>
</table>
</div>

<br/>

		<div id='cssmenu' style="position:fixed; top:0;">
           <ul>
				    <li class='active'><a href='#'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\service.jpg" alt="Mountain View"></span></a>
						<ul>
							<li class='has-sub'><a id='LiLinkDropDown1' href='product.php?id_antalaktikou=3'><span>Λαδι κινητηρα<br/>&nbsp;&nbsp;&nbsp;&nbsp;<img style="max-width:100%; height:auto;"  src="DropDownImages\engineOil.jpg" alt="Mountain View"></span></a></li>
						    <li class='has-sub'><a id='LiLinkDropDown2' href='product.php?id_antalaktikou=2'><span>Φιλτρο λαδιου κινητηρα<br/>&nbsp;&nbsp;&nbsp;&nbsp;<img style="max-width:100%; height:auto;"  src="DropDownImages\oilFilter.jpg" alt="Mountain View"></span></a></li>
						    <li class='has-sub'><a id='LiLinkDropDown3' href='product.php?id_antalaktikou=13'><span>Φιλτρο αερα κινητηρα<br/>&nbsp;&nbsp;&nbsp;&nbsp;<img style="max-width:100%; height:auto;"  src="DropDownImages\engineAirFilter.jpg" alt="Mountain View"></span></a></li>
						    <li class='has-sub'><a id='LiLinkDropDown4' href='product.php?id_antalaktikou=14'><span>Φιλτρο αερα καμπινας<br/>&nbsp;&nbsp;&nbsp;&nbsp;<img style="max-width:100%; height:auto;"  src="DropDownImages\acAirFilter.jpg" alt="Mountain View"></span></a></li>
						</ul>
					</li>
				    <li class='active'><a href='#'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\systimaDiefthinsis.jpg" alt="Mountain View"></span></a>
					    <ul>
							<li class='has-sub'><a id='LiLinkDropDown11' href="product.php?id_antalaktikou=6"><span>Φουσκα, συστημα διευθυνσης<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\fouska.jpg" alt="Mountain View"></span></a></li>
						    <li class='has-sub'><a id='LiLinkDropDown12' href="product.php?id_antalaktikou=26"><span>ρουλεμαν τροχων<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\roulemanTroxou.jpg" alt="Mountain View"></span></a></li>
						    <li class='has-sub'><a id='LiLinkDropDown13' href="product.php?id_antalaktikou=29"><span>ακρομπαρα<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\akromparo.jpg" alt="Mountain View"></span></a></li>
						    <li class='has-sub'><a id='LiLinkDropDown14' href="product.php?id_antalaktikou=30"><span>αμορτισερ<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\amortiser.jpg" alt="Mountain View"></span></a></li>
						    <li class='has-sub'><a id='LiLinkDropDown15' href="product.php?id_antalaktikou=31"><span>Ελατηρια αναρτησης<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\elatiria.jpg" alt="Mountain View"></span></a></li>
						</ul>
				    </li>
			        <li class='active'><a href='#'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\engine.jpg" alt="Mountain View"></span></a>
						<ul></ul>
						<ul>
							<li class='has-sub'><a id='LiLinkDropDown7' href='product.php?id_antalaktikou=7'><span>Ιμαντες εξωτερικοι<br/>&nbsp;&nbsp;&nbsp;&nbsp;<img style="max-width:100%; height:auto;"  src="DropDownImages\outsideBelt.jpg" alt="Mountain View"></span></a></li>
						    <li class='has-sub'><a id='LiLinkDropDown8' href='product.php?id_antalaktikou=5'><span>Σετ χρονισμου (ιμαντας χρονισμου)<br/>&nbsp;&nbsp;&nbsp;&nbsp;<img style="max-width:100%; height:auto;"  src="DropDownImages\timingSet.jpg" alt="Mountain View"></span></a></li>
                            <li class='has-sub'><a id='LiLinkDropDown17' href="product.php?id_antalaktikou=17"><span>φλαντζα κεφαλης<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\flantzaKefalia.jpg" alt="Mountain View"></span></a></li>
						    <li class='has-sub'><a id='LiLinkDropDown18' href="product.php?id_antalaktikou=18"><span>Φλαντζα καπακιου<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\flantzaKapakiou.jpg" alt="Mountain View"></span></a></li>
						    <li title="ωστήρια βαλβίδων" class='has-sub'><a id='LiLinkDropDown19' href="product.php?id_antalaktikou=24"><span>ωστηρια βαλβιδων<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\ostiria.jpg" alt="Mountain View"></span></a></li>
						</ul>
					</li>
					<li class='active'><a href='#'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\psixi.jpg" alt="Mountain View"></span></a>
						<ul>
                            <li class='has-sub'><a id='LiLinkDropDown20' href="product.php?id_antalaktikou=8"><span>αντλια νερου<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\antliaNerou.jpg" alt="Mountain View"></span></a></li>
						    <li class='has-sub'><a id='LiLinkDropDown21' href="product.php?id_antalaktikou=16"><span>θερμοστατες<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\thermostatis.jpg" alt="Mountain View"></span></a></li>
						    <li class='has-sub'><a id='LiLinkDropDown22' href="product.php?id_antalaktikou=23"><span>Ψυγειο, ψυξη κινητηρα<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\psigio.jpg" alt="Mountain View"></span></a></li>
						</ul>
					</li>
					<li class='active'><a href='#'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\trofodosia.jpg" alt="Mountain View"></span></a>
						<ul>
                            <li class='has-sub'><a id='LiLinkDropDown23' href="product.php?id_antalaktikou=9"><span>αντλια βενζινης<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\antliaVenzinis.jpg" alt="Mountain View"></span></a></li>
							<li class='has-sub'><a id='LiLinkDropDown5' href='product.php?id_antalaktikou=21'><span>Φιλτρο καυσιμου<br/>&nbsp;&nbsp;&nbsp;&nbsp;<img style="max-width:100%; height:auto;"  src="DropDownImages\gasFilter.jpg" alt="Mountain View"></span></a></li>
						</ul>
					</li>
					<li class='active'><a href='#'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\frena.jpg" alt="Mountain View"></span></a>
						<ul>
                            <li class='has-sub'><a id='LiLinkDropDown24' href="product.php?id_antalaktikou=11"><span>δισκοπλακες<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\diskoplakes.jpg" alt="Mountain View"></span></a></li>
							<li class='has-sub'><a id='LiLinkDropDown25' href="product.php?id_antalaktikou=25"><span>σιαγονες φρενων<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\siagones.jpg" alt="Mountain View"></span></a></li>
							<li class='has-sub'><a id='LiLinkDropDown26' href="product.php?id_antalaktikou=10"><span>Τακακια<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\brakePads.jpg" alt="Mountain View"></span></a></li>
						</ul>
					</li>
					<li class='active'><a href='#'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\metadosi.jpg" alt="Mountain View"></span></a>
						<ul>
                            <li class='has-sub'><a id='LiLinkDropDown27' href="product.php?id_antalaktikou=12"><span>βαλβολινες κιβωτιου ταχυτητων<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\valvolines.jpg" alt="Mountain View"></span></a></li>
							<li class='has-sub'><a id='LiLinkDropDown28' href="product.php?id_antalaktikou=22"><span>Σετ συμπλεκτη<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\simplektis.jpg" alt="Mountain View"></span></a></li>
						</ul>
					</li>
					<li class='active'><a href='#'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\ekinisi.jpg" alt="Mountain View"></span></a>
						<ul>
                            <li class='has-sub'><a id='LiLinkDropDown29' href="product.php?id_antalaktikou=20"><span>μιζα<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\miza.jpg" alt="Mountain View"></span></a></li>
							<li class='has-sub'><a id='LiLinkDropDown30' href="product.php?id_antalaktikou=33"><span>προθερμαντηρες<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\prothermantires.jpg" alt="Mountain View"></span></a></li>
							<li class='has-sub'><a id='LiLinkDropDown31' href="product.php?id_antalaktikou=1"><span>Μπουζι<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\sparkPlug.jpg" alt="Mountain View"></span></a></li>
							<li class='has-sub'><a id='LiLinkDropDown32' href="product.php?id_antalaktikou=27"><span>πολλαπλασιαστης<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\polaplasiastis.jpg" alt="Mountain View"></span></a></li>
						</ul>
					</li>
					<li class='active'><a href='#'><span><img style="max-width:100%; height:auto;"  src="DropDownImages\ilektrikoSystima.jpg" alt="Mountain View"></span></a>
						<ul>
                            <li class='has-sub'><a id='LiLinkDropDown33' href="product.php?id_antalaktikou=19"><span>διναμο<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\dinamo.jpg" alt="Mountain View"></span></a></li>
							<li class='has-sub'><a id='LiLinkDropDown34' href="product.php?id_antalaktikou=27"><span>πολλαπλασιαστης<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\polaplasiastis.jpg" alt="Mountain View"></span></a></li>
							<li class='has-sub'><a id='LiLinkDropDown35' href="product.php?id_antalaktikou=28"><span>αισθητηρας λαμδα<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\lambda.jpg" alt="Mountain View"></span></a></li>
							<li class='has-sub'><a id='LiLinkDropDown36' href="product.php?id_antalaktikou=34"><span>Αξεσουαρ<br/><img style="max-width:100%; height:auto;"  src="DropDownImages\esthitiki.jpg" alt="Mountain View"></span></a></li>
						</ul>
					</li>
					<li class='active'><a href='cartPage.php'><span><input type="text" id="cartProductsCount" value="0 προιόντα" style="width:90px; border: none;" readonly></br><input type="text" id="cartSumPrice" value="" style="width:40px; position-right:0px; border: none;" readonly></br><img style="max-width:100%; height:auto;"  src="cart.png" alt="Mountain View"></span></a>
						<ul id="cartUl">
						</ul>
					</li>
					
					
			</ul>
        </div>
</header>


<div>

<br/><br/><br/><br/><br/><br/></br><br/></br><br/></br>
	<table>
<tr>
<td>Λιπαντικό κινητήρα 5w30 1L</td><td>Λιπαντικό κινητήρα 5w40 1L</td><td>κάλυμμα τιμονιού ραφτό</td><td>Βαλβολινη μηχανικού σασμάν</td><td>Λιπαντικό κινητήρα 5w30 4L</td>
</tr>
<tr style="line-height: 20%;">
	<td>
	<a href='productDetails.php?idProiontos=17354'><img style="width:70%; height:70%;" src='images\\products\\17354.jpg'>
	</td>
	<td>
	<a href='productDetails.php?idProiontos=20381'><img style="width:70%; height:70%;" src='images\\products\\20381.jpg'>
	</td>
	<td>
	<a href='productDetails.php?idProiontos=78992'><img style="width:70%; height:70%;" src='images\\products\\78992.jpg'>
	</td>
	<td>
	<a href='productDetails.php?idProiontos=78990'><img style="width:70%; height:70%;" src='images\\products\\78990.jpg'>
	</td>
	<td>
	<a href='productDetails.php?idProiontos=78985'><img style="width:70%; height:70%;" src='images\\products\\78985.jpg'>
	</td>
		<tr>
		<td>MONO 8.97 €</td><td>MONO 10.95 €</td><td>MONO 5.75 €</td><td>MONO 18.40 €</td><td>MONO 28.75 €</td>
		</tr>
</tr>
</br>



<?php
echo '<body onscroll="scrollingPage()" onload="loadPage()">';
echo '<div style="overflow-y: auto;height:auto;">';
echo '<table style="width:100%; height:auto;">';
echo '<tr>';
echo '<td style="width:33%;">';

	$servername = "localhost";
	$username = "****";
	$password = "****";
	$dbname = "****";
	$conn = new mysqli($servername, $username, $password, $dbname);
	
	$conn->set_charset("utf8");
	
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	echo '<div style="background-color:white; width:100%; height:auto; border: 1px solid black;"><br/>';
	echo '<select id="markaSelect"  style="width:95%;">';
	echo '<option onclick="showMontela(0);" value="">Επιλογή Μάρκας..</option>';
	echo '<option onclick="showMontela(75);" value="Hyundai" id="75">Hyundai</option>';
	echo '</select><br/><br/><br/>';
	echo '<select id="montelaSelect" name="monteloList" class="dropdown-select" style="width:95%;">;';
	$sql = "SELECT * FROM r105607lou_antalaktika.montelo;";
	$result = $conn->query($sql);
	if ($result->num_rows > 0)
	{
		echo '<option selected disabled>Επιλογή Μοντέλου...</option>';
		while($row = $result->fetch_assoc()) 
		{
			echo '<option style = "display:none" onclick="showEkdosis('.$row['id_montelou'].');" id="'.$row['id_markas'].'" name="'.$row['onoma_montelou'].'" value="'.$row['onoma_montelou'].'">'.$row['onoma_montelou'].'</option>';
		}
	}
	echo '</select><br/><br/><br/>';
	echo '<select id = "ekdosisSelect" style=" width:95%;">';
	echo '<option selected disabled>Επιλογή Εκδοσης...</option>';
	$sql2 = "SELECT * FROM r105607lou_antalaktika.ekdosi;";
	$result = $conn->query($sql2);
	$montelaEkdoseis = "";
	if ($result->num_rows > 0)
	{
		while($row = $result->fetch_assoc()) 
		{
			echo '<option onclick="setIdEkdosisToCookies('.$row['id_ekdosis'].');" style = "display:none" id="'.$row['id_montelou'].'" value="'.$row['onoma'].'">'.$row['onoma'].'</option>';
		}
	}
	echo '</select><br/><br/>';
	echo '</div>';
	$conn->close();
?>
</div>

<?php
echo '</td>
<td style="width:33%;">
</td>
<td style="width:33%;">';
echo '<div id="cartDiv" style="height:1px;">';
echo '</div>';
echo '</tr>
</table></div>';
?>

</br></br></br></br></br>
<div>
<?php
	if(isset($_GET["id_antalaktikou"]))
	{
	$servername = "localhost";
	$username = "****";
	$password = "****";
	$dbname = "****";
	$conn = new mysqli($servername, $username, $password, $dbname);
	$conn->set_charset("utf8");
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	if($_GET['id_ekdosis'] != 0)
	{
		$sql = "SELECT proionta.posostoKerdous, proionta.id as idProiontos, arithmos_proiontos, titlos, timi, id_antalaktika, path_eikonas FROM r105607lou_antalaktika.montelo join ekdosi on montelo.id_montelou = ekdosi.id_montelou join ekdosi_proionta on ekdosi.id_ekdosis = ekdosi_proionta.id_ekdosis join proionta on ekdosi_proionta.id_proiontos = proionta.id join proionta_eikones on proionta.id = proionta_eikones.id_proiontos where ekdosi.id_ekdosis = ".$_GET['id_ekdosis']." and id_antalaktika = ".$_GET["id_antalaktikou"]." and isLogoImage = 0 and active = '1';";
	}
	else
	{
		$sql = "SELECT DISTINCT proionta.posostoKerdous, proionta.id as idProiontos, proionta.arithmos_proiontos, proionta.titlos, proionta.timi, proionta.id_antalaktika, proionta_eikones.path_eikonas FROM r105607lou_antalaktika.proionta join proionta_eikones on proionta.id = proionta_eikones.id_proiontos where id_antalaktika = ".$_GET["id_antalaktikou"]." and isLogoImage = 0 and active = '1' limit 1000;";
	}
	$result = $conn->query($sql);
	if ($result->num_rows > 0)
	{
		echo'<ul class="cd-gallery">';
		$proiontaArray = [];
		$proiontaIndex = 0;
		while($row = $result->fetch_assoc()) 
		{
			if (!in_array($row['timi'], $proiontaArray)) 
			{
				$_SESSION['idProiontos'] = $row['idProiontos'];
				$proiontaArray[$proiontaIndex] = $row['timi'];
				$proiontaIndex++;
				$telikiTimi = number_format((float)$row['timi'] + $row['timi'] * $row['posostoKerdous'] / 100, 2, '.', '');
				echo'<li>
				<div class="cd-single-item">
					<a href="productDetails.php?idProiontos='.$row['idProiontos'].'">
						<ul class="cd-slider-wrapper">
							<li class="selected"><img style="max-width:100%; height:30%;" src="';
				echo 'images\\products\\'.$row['path_eikonas'];
				echo '" alt="Preview image"></li>
						</ul>
					</a>
					<div class="cd-customization">
						<button class="add-to-cart" onclick="addToCart(\''.$row['idProiontos'].'#'.$row['titlos'].'#'.$row['path_eikonas'].'#'.$telikiTimi.'\')">
							<em>στο καλαθι</em>
							<svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
								<path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11"/>
							</svg>
						</button>
					</div>
				</div>
				<div class="cd-item-info">
					<b>';
				echo $row['titlos'];
				echo '</br>Αριθμός προϊόντος:'.$row['arithmos_proiontos'];
				echo '</b>
					<em>';
				echo $telikiTimi.' €';
				echo '</em> </div> </li>';
			}
		}
		echo ' </ul>';
	}
	else
	{
		echo "Δεν βρέθηκαν αποτελέσματα.";
	}
	$insertEpiskepseis = 'INSERT INTO episkepseis(ip, imerominia, products, lastPage) VALUES (\''.$_SERVER['REMOTE_ADDR'].'\',\''.date("Y/m/d h:i:s").'\',\''.$productsStartSeper.'\',\'product.php_'.$_GET["id_antalaktikou"].'\');';
		if($_SERVER['REMOTE_ADDR']!='78.87.192.12')
		{
			$conn->query($insertEpiskepseis);
		}
	$conn->close();
	}
?>
</div>
</body>