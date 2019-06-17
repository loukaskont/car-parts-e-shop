/*{
    postIdAntalaktikou(id_antalaktikou);
}


function postIdAntalaktikou(id_antalaktikou)
{
    $.ajax({
    type: 'POST',
    url: 'index.php',
    data: { 'id_antalaktikou':id_antalaktikou},
    dataType:'application/json',
    success:function( msg ) {
        alert( "Data Saved: " + msg );
    }
   });
}*/


function setSelectedValueToHiddenField()
{
  var name = document.getElementById("monteloList").value;
  document.getElementById("montelo").value = name;
  alert(name);
  $.post('index.php',{monteloName:name});
  '<%Session["montelo"] = "' + name + '"; %>';
}


function showEkdosis(ekdosiId)
{
	localStorage.setItem('idMontelou',ekdosiId);
	localStorage.setItem('id_ekdosis',ekdosiId);
	var i;
	var selectEkdoseis = document.getElementById("ekdosisSelect");
	selectEkdoseis.value = "Επιλογή Εκδοσης...";
	for (i = 0; i < selectEkdoseis.options.length; i++) 
	{
		if(selectEkdoseis.options[i].id != ekdosiId)
		{
			selectEkdoseis.options[i].style.display = 'none';
		}
		else
		{
			selectEkdoseis.options[i].style.display = '';
		}
	}
}



var teleytaiaAnazitisi = "";
function searchProductsEnter(event)
{
	var charCode = event.keyCode;
	if(charCode == 13)
	{
		searchProducts(1);
	}
}



function searchProducts(request)
{
	var searchText = document.getElementById("searchTextBox").value;
	if(teleytaiaAnazitisi != searchText)
	{
		teleytaiaAnazitisi = searchText;
		var oldHref = document.getElementById("submitAnazitisi").href;
		document.getElementById("submitAnazitisi").href = oldHref + "?searchText=" + searchText;
		if(request == 1)
		{
			if(window.location.href.includes("id_ekdosis="))
			{
				var id_ekdosis = localStorage.getItem('id_ekdosis');
				if(id_ekdosis != 0 && id_ekdosis != null)
				{
					window.location.href = oldHref + "?searchText=" + searchText +"&id_ekdosis="+id_ekdosis;
				}
				else
				{
					window.location.href = oldHref + "?searchText=" + searchText;
				}
			}
			else
			{
				if(localStorage.getItem('id_ekdosis')!=0 && localStorage.getItem('id_ekdosis')!=null)
				{
					var id_ekdosis = localStorage.getItem('id_ekdosis');
					window.location.href = oldHref + "?searchText=" + searchText + "&id_ekdosis="+id_ekdosis;
				}
				else
				{
					window.location.href = oldHref + "?searchText=" + searchText
				}
			}
		}
	}
}



var cartProductsIndex = 0, cartSumPrice = 0, cartSumPriceDecimals = 0;
function addToCart(proionStr)
{
	var cartProductsCount = document.getElementById("cartProductsCount").value;
	var newCount = Number(cartProductsCount.split(" ")[0]) + 1;
	var productArray = proionStr.split("#");
	var productId = productArray[0];
	var productTitle = productArray[1];
	var productImagePath = productArray[2];
	var productTimi = productArray[3];
	if(localStorage.getItem("cartSumPrice") == null)
	{
		localStorage.setItem("cartSumPrice",0);
	}
	cartSumPrice = Number(localStorage.getItem("cartSumPrice"));
	cartSumPrice = cartSumPrice + Number(productTimi);
	document.getElementById("cartProductsCount").value = newCount + " προϊόντα ";
	localStorage.setItem('cartProductsCount','');
	localStorage.setItem('cartProductsCount',document.getElementById("cartProductsCount").value + " προϊόντα ");
	document.getElementById("cartSumPrice").value = cartSumPrice.toFixed(2) + "€";
	localStorage.setItem('cartProductsPrice','');
	localStorage.setItem('cartProductsPrice',document.getElementById("cartSumPrice").value);
	var productHtml = "<div value=\""+productTimi+"\" id = \""+productId+"_productDiv\" class=\"cartProductDiv\">" + productTitle + "&nbsp;&nbsp;<button class=\"btnred\" align=\"center\" onclick=\"deleteFromCart('"+productId+"',"+productTimi+")\">X</button></br> <img style=\"width:130px; height:130px;\" src='images\\products\\"+productImagePath+"'></br>&nbsp;&nbsp;Τιμή:"+productTimi+"€</br></br><button class=\"btn\" align=\"center\" onclick=\"openCartPage()\">Καλάθι</button>&nbsp;&nbsp;<button class=\"btn\" align=\"center\" onclick=\"openCartPageTameio()\">Ταμείο</button>";
	var cartDivHtml = document.getElementById("cartDiv").innerHTML;
	document.getElementById("cartDiv").innerHTML = cartDivHtml + productHtml + "</div></br>";
	localStorage.setItem('cartProductsDiv',cartDivHtml + productHtml + "</div></br>");
	var newLiHtml = "<li id = \""+productId+"_productLi\" class='has-sub'><a><span><button class=\"btnred\" align=\"center\" onclick=\"deleteFromCart('"+productId+"',"+productTimi+")\">X</button>&nbsp;&nbsp;"+productTitle+"<br/><img style=\"max-width:100%; height:auto;\"  src=\"images\\products\\"+productImagePath+"\" alt=\"Mountain View\"></br>"+productTimi+"€</br></br><button class=\"btn\" align=\"center\" onclick=\"openCartPage()\">Καλαθι</button></br><button class=\"btn\" align=\"center\" onclick=\"openCartPageTameio()\">Ταμειο</button></span></a></li>";
	var htmltext = document.getElementById("cartUl").innerHTML;
	document.getElementById("cartUl").innerHTML = htmltext + newLiHtml;
	localStorage.setItem('cartProductsUL',htmltext + newLiHtml);
	cartProductsIndex = cartProductsIndex + 1;
	localStorage.setItem('cartSumPrice',cartSumPrice);
	var newProduct = productId +"#"+ productTitle +"#"+ productImagePath +"#"+ productTimi;
	var cartProductsOld = localStorage.getItem('cartProducts');
	var cartProducts = cartProductsOld +"&"+ newProduct;
	var productsSeperatedString = productId+"*"+productTimi+"*"+productTitle+"*images\\products\\"+productImagePath;
	var oldProductsSeperatedString = localStorage.getItem('productsSeperatedString');
	localStorage.setItem('productsSeperatedString',oldProductsSeperatedString +"#"+ productsSeperatedString);
}


function openCartPage()
{
	window.open("cartPage.php","_self");
}

function openCartPageTameio()
{
	window.open("cartPage.php?page=2","_self");
}


function goToCustomerForm(metaforika,glosa)
{
	pliroteo = document.getElementById("pliroteoInput").value;
	pliroteo = pliroteo + metaforika;
  if(localStorage.getItem('cartProductsCount').split(' ')[0] != '0')
  {
	var customerFormFieldNames = ["όνομα#onoma", "επώνυμο#eponimo", "τηλέφωνο#tilefono", "e-mail#email", "χώρα#xora", "πόλη#poli", "οδός#odos", "αριθμός#arithmos", "Ταχυδρομικός Κώδικας#tk", "ΑΦΜ#afm", "Απόδειξη Τιμολόγιο", "Τρόπος αποστολής", "Τρόπος πληρωμής"];
	var customerFormFieldNamesEn = ["Name#onoma", "Surname#eponimo", "Phone#tilefono", "e-mail#email", "country#xora", "city#poli", "street#odos", "street number#arithmos", "Postcode#tk", "ΑΦΜ#afm", "Απόδειξη Τιμολόγιο", "Τρόπος αποστολής", "Τρόπος πληρωμής"];
	document.getElementById("productTableDiv").innerHTML = '';
	document.getElementById("goToCustomerFormBotton").outerHTML = '';
	var customerFormHtml = "<table width=\"50%\">";
	for(i=0; i<customerFormFieldNames.length; i++)
	{
		var fieldHtml = "";
		if(glosa=="gr")
		{
			//fieldHtml = "<input id=\"telikoKostosParag\" value=\"Τελικό κόστος παραγγελίας:\"></br></br>";
			if(i==4)
			{
				fieldHtml = "<tr style=\"height:40px;\"><td style=\"height:100%; border:1px solid black; width:50%;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Χώρα: </td><td style=\"height:100%; border:1px solid black; width:50%;\"><select id=\"χώρα\" name=\"xora\" style=\"height:100%; font-size:16px; width:100%;\"><option>Ελλάδα</option></select></td></tr>";
			}
			if(i==10)
			{
				fieldHtml = "<tr style=\"height:40px;\"><td style=\"height:100%; border:1px solid black; width:50%;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Απόδειξη - Τιμολόγιο: </td><td style=\"height:100%; border:1px solid black; width:50%;\"><select id=\"Απόδειξη_Τιμολόγιο\" name=\"apodixi_timologio\" style=\"height:100%; font-size:16px; width:100%;\"><option>Απόδειξη</option><option>Τιμολόγιο</option></select></td></tr>";
			}
			if(i==11)
			{
				fieldHtml = "<tr style=\"height:40px;\"><td style=\"height:100%; border:1px solid black; width:50%;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Τρόπος αποστολής: </td><td style=\"height:100%; border:1px solid black; width:50%;\"><select id=\"Τρόπος_αποστολής\" name=\"tropos_apostolis\" style=\"height:100%; font-size:16px; width:100%;\"><option>courier ("+metaforika+"€)</option></select></td></tr>";
			}
			if(i==12)
			{
				fieldHtml = "<tr style=\"height:40px;\"><td style=\"height:100%; border:1px solid black; width:50%;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Τρόπος πληρωμής: </td><td style=\"height:100%; border:1px solid black; width:50%;\"><select id=\"Τρόπος_πληρωμής\" name=\"tropos_pliromis\" style=\"height:100%; font-size:16px; width:100%;\"><option>Κατάθεση web-Banking</option></select></td></tr>";
			}
			if(i<10 && i!=4)
			{
				fieldHtml = "<tr style=\"height:40px;\"><td style=\"height:100%; border:1px solid black; width:50%;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + customerFormFieldNames[i].split("#")[0] + ": </td><td style=\"height:100%; border:1px solid black; width:50%;\"><input name="+customerFormFieldNames[i].split('#')[1]+" id="+customerFormFieldNames[i].split("#")[0].replace(" ","_")+" style=\"height:100%; font-size:16px; width:100%;\" type=\"text\" name=\"fname\"></td></tr>";
			}
		}
		if(glosa=="en")
		{
			if(i==4)
			{
				fieldHtml = "<tr style=\"height:40px;\"><td style=\"height:100%; border:1px solid black; width:50%;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Country: </td><td style=\"height:100%; border:1px solid black; width:50%;\"><select id=\"χώρα\" name=\"xora\" style=\"height:100%; font-size:16px; width:100%;\"><option>	Afghanistan	</option><option>	Albania	</option><option>	Algeria	</option><option>	Andorra	</option><option>	Angola	</option><option>	Antigua and Barbuda	</option><option>	Argentina	</option><option>	Armenia	</option><option>	Australia	</option><option>	Austria	</option><option>	Azerbaijan	</option><option>	Bahamas	</option><option>	Bahrain	</option><option>	Bangladesh	</option><option>	Barbados	</option><option>	Belarus	</option><option>	Belgium	</option><option>	Belize	</option><option>	Benin	</option><option>	Bhutan	</option><option>	Bolivia	</option><option>	Bosnia and Herzegovina	</option><option>	Botswana	</option><option>	Brazil	</option><option>	Brunei	</option><option>	Bulgaria	</option><option>	Burkina Faso	</option><option>	Burundi	</option><option>	Cabo Verde	</option><option>	Cambodia	</option><option>	Cameroon	</option><option>	Canada	</option><option>	Central African Republic (CAR)	</option><option>	Chad	</option><option>	Chile	</option><option>	China	</option><option>	Colombia	</option><option>	Comoros	</option><option>	Costa Rica	</option><option>	Cote d'Ivoire	</option><option>	Croatia	</option><option>	Cuba	</option><option>	Cyprus	</option><option>	Czech Republic	</option><option>	Democratic Republic of the Congo	</option><option>	Denmark	</option><option>	Djibouti	</option><option>	Dominica	</option><option>	Dominican Republic	</option><option>	Ecuador	</option><option>	Egypt	</option><option>	El Salvador	</option><option>	Equatorial Guinea	</option><option>	Eritrea	</option><option>	Estonia	</option><option>	Eswatini (formerly Swaziland)	</option><option>	Ethiopia	</option><option>	Fiji	</option><option>	Finland	</option><option>	France	</option><option>	Gabon	</option><option>	Gambia	</option><option>	Georgia	</option><option>	Germany	</option><option>	Ghana	</option><option>	Greece	</option><option>	Grenada	</option><option>	Guatemala	</option><option>	Guinea	</option><option>	Guinea-Bissau	</option><option>	Guyana	</option><option>	Haiti	</option><option>	Honduras	</option><option>	Hungary	</option><option>	Iceland	</option><option>	India	</option><option>	Indonesia	</option><option>	Iran	</option><option>	Iraq	</option><option>	Ireland	</option><option>	Israel	</option><option>	Italy	</option><option>	Jamaica	</option><option>	Japan	</option><option>	Jordan	</option><option>	Kazakhstan	</option><option>	Kenya	</option><option>	Kiribati	</option><option>	Kosovo	</option><option>	Kuwait	</option><option>	Kyrgyzstan	</option><option>	Laos	</option><option>	Latvia	</option><option>	Lebanon	</option><option>	Lesotho	</option><option>	Liberia	</option><option>	Libya	</option><option>	Liechtenstein	</option><option>	Lithuania	</option><option>	Luxembourg	</option><option>	Macedonia (FYROM)	</option><option>	Madagascar	</option><option>	Malawi	</option><option>	Malaysia	</option><option>	Maldives	</option><option>	Mali	</option><option>	Malta	</option><option>	Marshall Islands	</option><option>	Mauritania	</option><option>	Mauritius	</option><option>	Mexico	</option><option>	Micronesia	</option><option>	Moldova	</option><option>	Monaco	</option><option>	Mongolia	</option><option>	Montenegro	</option><option>	Morocco	</option><option>	Mozambique	</option><option>	Myanmar (formerly Burma)	</option><option>	Namibia	</option><option>	Nauru	</option><option>	Nepal	</option><option>	Netherlands	</option><option>	New Zealand	</option><option>	Nicaragua	</option><option>	Niger	</option><option>	Nigeria	</option><option>	North Korea	</option><option>	Norway	</option><option>	Oman	</option><option>	Pakistan	</option><option>	Palau	</option><option>	Palestine	</option><option>	Panama	</option><option>	Papua New Guinea	</option><option>	Paraguay	</option><option>	Peru	</option><option>	Philippines	</option><option>	Poland	</option><option>	Portugal	</option><option>	Qatar	</option><option>	Republic of the Congo	</option><option>	Romania	</option><option>	Russia	</option><option>	Rwanda	</option><option>	Saint Kitts and Nevis	</option><option>	Saint Lucia	</option><option>	Saint Vincent and the Grenadines	</option><option>	Samoa	</option><option>	San Marino	</option><option>	Sao Tome and Principe	</option><option>	Saudi Arabia	</option><option>	Senegal	</option><option>	Serbia	</option><option>	Seychelles	</option><option>	Sierra Leone	</option><option>	Singapore	</option><option>	Slovakia	</option><option>	Slovenia	</option><option>	Solomon Islands	</option><option>	Somalia	</option><option>	South Africa	</option><option>	South Korea	</option><option>	South Sudan	</option><option>	Spain	</option><option>	Sri Lanka	</option><option>	Sudan	</option><option>	Suriname	</option><option>	Swaziland (renamed to Eswatini)	</option><option>	Sweden	</option><option>	Switzerland	</option><option>	Syria	</option><option>	Taiwan	</option><option>	Tajikistan	</option><option>	Tanzania	</option><option>	Thailand	</option><option>	Timor-Leste	</option><option>	Togo	</option><option>	Tonga	</option><option>	Trinidad and Tobago	</option><option>	Tunisia	</option><option>	Turkey	</option><option>	Turkmenistan	</option><option>	Tuvalu	</option><option>	Uganda	</option><option>	Ukraine	</option><option>	United Arab Emirates (UAE)	</option><option>	United Kingdom (UK)	</option><option>	United States of America (USA)	</option><option>	Uruguay	</option><option>	Uzbekistan	</option><option>	Vanuatu	</option><option>	Vatican City (Holy See)	</option><option>	Venezuela	</option><option>	Vietnam	</option><option>	Yemen	</option><option>	Zambia	</option><option>	Zimbabwe	</option></select></td></tr>";
			}
			if(i==11)
			{
				fieldHtml = "<tr style=\"height:40px;\"><td style=\"height:100%; border:1px solid black; width:50%;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shipping cost: </td><td style=\"height:100%; border:1px solid black; width:50%;\"><select id=\"Τρόπος_αποστολής\" name=\"tropos_apostolis\" style=\"height:100%; font-size:16px; width:100%;\"><option>courier ("+metaforika+"€)</option></select></td></tr>";
			}
			if(i==12)
			{
				fieldHtml = "<tr style=\"height:40px;\"><td style=\"height:100%; border:1px solid black; width:50%;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Payment: </td><td style=\"height:100%; border:1px solid black; width:50%;\"><select id=\"Τρόπος_πληρωμής\" name=\"tropos_pliromis\" style=\"height:100%; font-size:16px; width:100%;\"><option>Bank deposit (web-Banking)</option></select></td></tr>";
			}
			if(i<10 && i!=4 && i!= 9)
			{
				fieldHtml = "<tr style=\"height:40px;\"><td style=\"height:100%; border:1px solid black; width:50%;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + customerFormFieldNamesEn[i].split("#")[0] + ": </td><td style=\"height:100%; border:1px solid black; width:50%;\"><input name="+customerFormFieldNames[i].split('#')[1]+" id="+customerFormFieldNames[i].split("#")[0].replace(" ","_")+" style=\"height:100%; font-size:16px; width:100%;\" type=\"text\" name=\"fname\"></td></tr>";
			}
		}
		customerFormHtml = customerFormHtml + fieldHtml;
	}
	if(glosa=="gr")
	{
		document.getElementById("productTableDiv").innerHTML = customerFormHtml + "</table></br></br><button class=\"btn\" align=\"center\" onclick=\"oloklirosiParagelias('"+pliroteo+"','"+glosa+"')\">Αποστολή Παραγγελίας ("+Number(pliroteo).toFixed(2)+" €)</button>";
	}
	if(glosa=="en")
	{
		document.getElementById("productTableDiv").innerHTML = customerFormHtml + "</table></br></br><button class=\"btn\" align=\"center\" onclick=\"oloklirosiParagelias('"+pliroteo+"','"+glosa+"')\">send order("+Number(pliroteo).toFixed(2)+" €)</button>";
	}
  }
  else
  {
	  alert('Δεν υπάρχουν προϊόντα στο καλάθι.');
  }	
}


function oloklirosiParagelias(pliroteo,glosa)
{
	var simplirosiFormas = 1;
	var customerFormFieldNamesAll = ["όνομα#onoma", "επώνυμο#eponimo", "τηλέφωνο#tilefono", "e-mail#email", "χώρα#xora", "πόλη#poli", "οδός#odos", "αριθμός#arithmos", "Ταχυδρομικός Κώδικας#tk", "ΑΦΜ#afm", "Απόδειξη Τιμολόγιο#apodixi_timologio", "Τρόπος αποστολής#tropos_apostolis", "Τρόπος πληρωμής#tropos_pliromis"];
	var customerFormFieldNames = ["όνομα", "επώνυμο", "τηλέφωνο", "e-mail", "πόλη", "οδός", "αριθμός", "Ταχυδρομικός_Κώδικας", "ΑΦΜ"];
	var e = document.getElementById("Απόδειξη_Τιμολόγιο");
	for(i=0; i<customerFormFieldNames.length; i++)
	{
		if(customerFormFieldNames[i] == "ΑΦΜ" && glosa=="en")
		{
			break;
		}
		if(document.getElementById(customerFormFieldNames[i]).value == "")
		{
			if((customerFormFieldNames[i] == "ΑΦΜ" && e.options[e.selectedIndex].value == "Τιμολόγιο") || (customerFormFieldNames[i] != "ΑΦΜ"))
			{
				document.getElementById(customerFormFieldNames[i]).style.backgroundColor = "red";
				simplirosiFormas = 0;
			}
		}
	}
	if(simplirosiFormas == 1)
	{
		var parageliaParams = "";
		for(i=0; i<customerFormFieldNamesAll.length; i++)
		{
			var fieldId = customerFormFieldNamesAll[i].split('#')[0];
			if(document.getElementById(fieldId.replace(" ","_"))!=null)
			{
			var field = document.getElementById(fieldId.replace(" ","_"));
			if(field.nodeName == "INPUT")
			{
				if(parageliaParams == "")
				{
					parageliaParams = parageliaParams + "?" + field.name + "=" +field.value;
				}
				else
				{
					parageliaParams = parageliaParams + "&" + field.name + "=" +field.value;
				}
			}
			if(field.nodeName == "SELECT")
			{
				var selectValue = field.options[field.selectedIndex].value;
				if(parageliaParams == "")
				{
					parageliaParams = parageliaParams + "?" + field.name + "=" +selectValue;
				}
				else
				{
					parageliaParams = parageliaParams + "&" + field.name + "=" +selectValue;
				}
			}
			}
		}
		var productsSeperatedString = localStorage.getItem('productsSeperatedString');
		var productsArray = productsSeperatedString.split('#');
		var productIds = "";
		for(i=0;i<productsArray.length; i++)
		{
			var currentProductArray = productsArray[i].split('*');
			if(currentProductArray[0] != null && currentProductArray[0].length > 0)
			{
				productIds = productIds + "*" + currentProductArray[0];
			}
		}
		parageliaParams = parageliaParams + "&productIds=" + productIds;
		var pageUrl = "cartPage.php"
		window.location.href = pageUrl + parageliaParams + "&pliroteo="+Number(pliroteo).toFixed(2)+" €&glosa="+glosa;
		
	}
	else
	{
		if(glosa == "gr")
		{
			alert("Συμπληρώστε τα πεδία με κόκκινο χρώμα για να προχωρήσετε στην παραγγελία.");
		}
		if(glosa == "en")
		{
			alert("fill in the fields in red to proceed with the order.");
		}
	}
}


function loadCart()
{
	document.getElementById("cartDiv").innerHTML = '';
	document.getElementById("cartUl").innerHTML = '';
	if(localStorage.getItem('cartProductsDiv') && localStorage.getItem('cartProductsUL'))
	{
		document.getElementById("cartDiv").innerHTML = localStorage.getItem('cartProductsDiv');
		document.getElementById("cartUl").innerHTML = localStorage.getItem('cartProductsUL');
	}
	var indexOfProionta = localStorage.getItem('cartProductsCount').indexOf('προϊόντα');
	if(indexOfProionta == -1)
	{
		localStorage.setItem('cartProductsCount',localStorage.getItem('cartProductsCount') + " προϊόντα ");
	}
	var wordsCount = localStorage.getItem('cartProductsCount').split(" ").length;
	if(wordsCount == 7)
	{
		var splitingCount = localStorage.getItem('cartProductsCount').split(" ");
		var proiontaCountNew = splitingCount[0] + " " + splitingCount[1];
		localStorage.setItem('cartProductsCount', proiontaCountNew);
	}
	document.getElementById("cartProductsCount").value = localStorage.getItem('cartProductsCount');
	if(!localStorage.getItem('cartProductsCount'))
	{
		document.getElementById("cartProductsCount").value = 0 + " προϊόντα ";
	}
	if(!localStorage.getItem('cartProductsPrice'))
	{
		document.getElementById("cartSumPrice").value = 0 + "€";
	}
	else
	{
		var sumPrice = localStorage.getItem('cartProductsPrice');
		document.getElementById("cartSumPrice").value = sumPrice;
		if(sumPrice=="0.00€")
		{
			clearCart();
		}
	}
}



function deleteFromCart(productId, currentProductPrice)
{
	var oldCartSumPrice = localStorage.getItem('cartProductsPrice').replace("€","");
	var newPrice = Number(oldCartSumPrice) - Number(currentProductPrice);
	document.getElementById("pliroteoInput").value = Number(document.getElementById("pliroteoInput").value) - Number(currentProductPrice);
	if(newPrice<0)
	{
		newPrice = 0;
	}
	document.getElementById("cartSumPrice").value = newPrice.toFixed(2)+"€";
	localStorage.setItem('cartProductsPrice','');
	localStorage.setItem('cartProductsPrice',newPrice.toFixed(2)+"€");
	cartSumPrice = newPrice;
	if(document.contains(document.getElementById("tr_"+productId)))
	{
		var productTr = document.getElementById("tr_"+productId);
		productTr.innerHTML = '';
		productTr.outerHTML = '';
	}
	if(document.contains(document.getElementById(productId+"_productLi")))
	{
		var productLi = document.getElementById(productId+"_productLi");
		productLi.innerHTML = '';
		productLi.outerHTML = '';
	}
	if(document.contains(document.getElementById(productId+"_productDiv")))
	{
		var productDiv = document.getElementById(productId+"_productDiv");
		productDiv.innerHTML = '';
		productDiv.outerHTML = '';
	}
	if(document.contains(document.getElementById("cartProductsCount")))
	{
		var cartProductsCount = document.getElementById("cartProductsCount").value;
		var newCount = Number(cartProductsCount.split(" ")[0]) - 1;
		document.getElementById("cartProductsCount").value = newCount + " προϊόντα ";
		localStorage.setItem('cartProductsCount','');
		localStorage.setItem('cartProductsCount',newCount + " προϊόντα ");
	}
	if(document.contains(document.getElementById("cartDiv")))
	{
		localStorage.setItem('cartProductsDiv',document.getElementById("cartDiv").innerHTML);
	}
	if(document.contains(document.getElementById("cartUl")))
	{
		localStorage.setItem('cartProductsUL',document.getElementById("cartUl").innerHTML);
	}
	if(localStorage.getItem('productsSeperatedString'))
	{
		deleteFromProductsSeperatedString(productId);
	}
}


function setParamsToLiLinks()
{
	var id_ekdosis = localStorage.getItem('id_ekdosis');
	if(id_ekdosis)
	{
		for(i=1; i<37; i++)
		{
			if(document.getElementById("LiLinkDropDown"+i)!=null)
			{
				document.getElementById("LiLinkDropDown"+i).href = document.getElementById("LiLinkDropDown"+i).href + "&id_ekdosis=" + id_ekdosis;
			}
		}
	}
}


function setIdEkdosisToCookies(id_ekdosis)
{
	var pageUrl = window.location.href;
	var selectMontela = document.getElementById("montelaSelect");
	var monteloName = selectMontela.value;
	if(!pageUrl.includes("?"))
	{
			window.location.href = window.location.href + "?id_ekdosis=" + id_ekdosis;
	}
	else
	{
		var splitingErot = pageUrl.split('?');
		var splitingKai = splitingErot[1].split('&');
		var boolEkdoseId = false;
		for(i=0; i<splitingKai.length; i++)
		{
			if(splitingKai[i].includes("id_ekdosis="))
			{
				pageUrl = pageUrl.replace(splitingKai[i],"id_ekdosis=" + id_ekdosis);
				window.location.href = pageUrl;
				boolEkdoseId = true;
			}
		}
		if(boolEkdoseId == false)
		{
			window.location.href = window.location.href + "&id_ekdosis=" + id_ekdosis;
		}
	}
	if(pageUrl.includes("product.php?id_antalaktikou="))
	{
		if(!pageUrl.includes("id_ekdosis="))
		{
			window.location.href = window.location.href + "&id_ekdosis=" + id_ekdosis;
		}
	}
	if(pageUrl.includes("index.php?searchText="))
	{
		if(!pageUrl.includes("id_ekdosis="))
		{
			window.location.href = window.location.href + "&id_ekdosis=" + id_ekdosis;
		}
	}
	localStorage.setItem('id_ekdosis',id_ekdosis);
	var selectEkdoseis = document.getElementById("ekdosisSelect");
	var ekdosisName = selectEkdoseis.options[selectEkdoseis.selectedIndex].value;
	localStorage.setItem('ekdosisName',ekdosisName);
	var montelaSelect = document.getElementById("montelaSelect");
	var monteloName = montelaSelect.options[montelaSelect.selectedIndex].value;
	localStorage.setItem('monteloName',monteloName);
	var markaSelect = document.getElementById("markaSelect");
	var markaName = markaSelect.options[markaSelect.selectedIndex].value;
	localStorage.setItem('markaName',markaName);
}

function showMontela(idMarkas)
{
	if(idMarkas == 0)
	{
		var katharoUrl = window.location.href.split('?')[0];
		if(katharoUrl.includes("product.php"))
		{
			var idEkdosis = localStorage.getItem('id_ekdosis');
			window.location.href = window.location.href.replace("&id_ekdosis="+idEkdosis,"");
		}
		if(katharoUrl.includes("index.php"))
		{
			window.location.href = window.location.href.split('?')[0];
		}
		localStorage.setItem('idMarkas','');
		localStorage.setItem('markaName','');
		localStorage.setItem('idMontelou','');
		localStorage.setItem('monteloName','');
		localStorage.setItem('id_ekdosis','');
		localStorage.setItem('ekdosisName','');
	}
	localStorage.setItem('idMarkas',idMarkas);
	var i;
	var selectMontela = document.getElementById("montelaSelect");
	selectMontela.value = "Επιλογή Μοντέλου...";
	for (i = 0; i < selectMontela.options.length; i++) 
	{
		if(selectMontela.options[i].id != idMarkas)
		{
			selectMontela.options[i].style.display = 'none';
		}
		else
		{
			selectMontela.options[i].style.display = '';
		}
	}
	showEkdosis(0);
}


function clearCart()
{
	localStorage.setItem('productsSeperatedString','');
	localStorage.setItem('cartProductsPrice','');
	localStorage.setItem('cartProducts','');
	localStorage.setItem('cartProductsDiv','');
	localStorage.setItem('cartProductsUL','');
	localStorage.setItem('cartProductsCount','');
	document.getElementById("cartProductsCount").value = "";
	document.getElementById("cartSumPrice").value = "";
	document.getElementById("cartProductsCount").value = "";
	localStorage.setItem("cartSumPrice","0");
	loadPage();
}


function loadPage()
{
	setParamsToLiLinks();
	var idMarkas = localStorage.getItem('idMarkas');
	var idEkdosis = localStorage.getItem('id_ekdosis');
	var idMontelou = localStorage.getItem('idMontelou');
	var ekdosisName = localStorage.getItem('ekdosisName');
	var monteloName = localStorage.getItem('monteloName');
	var markaName = localStorage.getItem('markaName');
	if(idMarkas && idEkdosis && idMontelou && ekdosisName && monteloName && markaName)
	{
		document.getElementById("markaSelect").value = markaName;
		showMontela(idMarkas);
		document.getElementById("montelaSelect").value = monteloName;
		showEkdosis(idMontelou);
		document.getElementById("ekdosisSelect").value = ekdosisName;
		var cartSumPrice = localStorage.getItem('cartSumPrice');
	}
	loadCart();
	if(document.getElementById("cartProductsCount").value.split(" ")[0] == "0")
	{
		var cartDiv = document.getElementById("cartDiv");
		cartDiv.innerHTML = '';
		var cartUl = document.getElementById("cartUl");
		cartUl.innerHTML = '';
	}
}


function setToProductsSeperatedString(productsStartSeper,metaforika,pliroteo,glosa)
{
	document.getElementById("pliroteoInput").value = pliroteo;
	localStorage.setItem('productsSeperatedString',productsStartSeper);
	loadCartPage(1,metaforika,glosa);
}


function loadCartPage(page, metaforika,glosa)
{
	var sumPrice = 0, productsCount = 0;
	var productTableDiv = document.getElementById("productTableDiv");
	productTableDiv.innerHTML = '';
	var innerHTMLproductTableDiv = '';
	var productsSeperatedString = localStorage.getItem('productsSeperatedString');
	var productsArray = productsSeperatedString.split('#');
	var divHtmlString = "";
	if(glosa == "gr")
	{
		divHtmlString = '<table style="width:90%;"><tr style="background-color:#cccccc; border: 1px solid black;width:20%;"><td style="border: 1px solid black;">Κωδικός Προϊόντος</td> <td style="border: 1px solid black;">Τιμή Προϊόντος</td> <td style="border: 1px solid black;">Τίτλος Προϊόντος</td> <td style="border: 1px solid black;">Εικόνα Προϊόντος</td></tr>';
	}
	if(glosa == "en")
	{
		divHtmlString = '<table style="width:90%;"><tr style="background-color:#cccccc; border: 1px solid black;width:20%;"><td style="border: 1px solid black;">Product code</td> <td style="border: 1px solid black;">Product price</td> <td style="border: 1px solid black;">Product Title</td> <td style="border: 1px solid black;">Product Image</td></tr>';
	}
	for(i=0;i<productsArray.length; i++)
	{
		var currentProductArray = productsArray[i].split('*');
		if(currentProductArray.length > 1)
		{
			var productId = currentProductArray[0];
			productsCount = productsCount + 1;
			divHtmlString = divHtmlString + '<tr id="tr_'+productId+'" style="background-color:#ffffff; border: 1px solid black;width:20%;">';
			for(j=0; j<currentProductArray.length; j++)
			{
				divHtmlString = divHtmlString + '<td style="border: 1px solid black;">';
				if(j==3)
				{
					var deleteButtonHtml = "<button class=\"btnred\" align=\"center\" onclick=\"deleteFromCart('"+productId+"',"+currentProductArray[1]+")\">X</button>";
					divHtmlString = divHtmlString +"<a href=\"imageView.php?imagePath="+ currentProductArray[j]+"\"><img style='width:20%;height:20%;' src='"+ currentProductArray[j]+"'></a>"+deleteButtonHtml;
				}
				if(j==0 || j==2)
				{
					divHtmlString = divHtmlString +""+ currentProductArray[j];
				}
				if(j==1)
				{
					divHtmlString = divHtmlString +""+ currentProductArray[j] +" €";
					sumPrice = sumPrice + Number(currentProductArray[j]);
				}
				divHtmlString = divHtmlString + '</td>';
			}
			divHtmlString = divHtmlString + '</tr>';
		}
	}
	var pliroteo = document.getElementById("pliroteoInput").value;
	if(pliroteo == "0")
	{
		document.getElementById("pliroteoInput").value = sumPrice + metaforika;
	}
	localStorage.setItem('cartProductsPrice',sumPrice.toFixed(2)+" €");
	divHtmlString = divHtmlString + '<tr style="background-color:#ffffff; border: 1px solid black;width:20%;"><td style="border: 1px solid black;"></td> <td style="border: 1px solid black;"><span style="font-weight:bold"></br></br>   <input type="text" id="cartSumPrice" value="'+sumPrice.toFixed(2)+' €" style="width:100; border: none;" readonly>  </br></br></span></td> <td style="border: 1px solid black;"></td> <td style="border: 1px solid black;"></td></tr>';
	divHtmlString = divHtmlString + "</table>";
	productTableDiv.innerHTML = divHtmlString;
	document.getElementById("cartProductsCount").value = localStorage.getItem('cartProductsCount');
	if(!localStorage.getItem('cartProductsCount'))
	{
		document.getElementById("cartProductsCount").value = 0 + " προϊόντα ";
	}
	if(localStorage.getItem('cartProductsDiv'))
	{
		document.getElementById("cartDiv").innerHTML = localStorage.getItem('cartProductsDiv');
	}
	if(localStorage.getItem('cartProductsUL'))
	{
		document.getElementById("cartUl").innerHTML = localStorage.getItem('cartProductsUL');
	}
	if(page == 2)
	{
		goToCustomerForm(metaforika,glosa);
	}
	localStorage.setItem('cartProductsCount',productsCount);
	document.getElementById("cartProductsCount").value = productsCount + " προϊόντα ";
}

function scrollingPage()
{
	var x = document.getElementById("search-logo");
    if (document.body.scrollTop == 0) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
	var y = document.getElementById("cssmenu");
    if (document.body.scrollTop < 350) {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}


function deleteFromProductsSeperatedString(deletedProductId)
{
	var productsSeperatedString = localStorage.getItem('productsSeperatedString');
	var productsArray = productsSeperatedString.split('#');
	for(i=0;i<productsArray.length; i++)
	{
		var currentProductArray = productsArray[i].split('*');
		if(currentProductArray.length > 1)
		{
			for(j=0; j<currentProductArray.length; j++)
			{
				var productId = currentProductArray[0];
				if(productId == deletedProductId)
				{
					productsSeperatedString = productsSeperatedString.replace(productsArray[i],"");
					localStorage.setItem('productsSeperatedString',productsSeperatedString);
					if(location.href.includes("cartPage.php"))
					{
						location.reload();
					}
				}
			}
		}
	}
}
