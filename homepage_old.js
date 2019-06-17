function SetIdAntalaktikou(id_antalaktikou)
{
    postIdAntalaktikou(id_antalaktikou);
}


function postIdAntalaktikou(id_antalaktikou)
{
    $.ajax({
    type: 'POST',
    url: 'antalaktikaHomePage.php',
    data: { 'id_antalaktikou':id_antalaktikou},
    dataType:'application/json',
    success:function( msg ) {
        alert( "Data Saved: " + msg );
    }
   });
}


function setSelectedValueToHiddenField()
{
  var name = document.getElementById("monteloList").value;
  document.getElementById("montelo").value = name;
  alert(name);
  $.post('antalaktikaHomePage.php',{monteloName:name});
  '<%Session["montelo"] = "' + name + '"; %>';
}


function showEkdosis(ekdosiId)
{
	localStorage.setItem('idMontelou',ekdosiId);
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
		document.getElementById("submitAnazitisi").href = oldHref + searchText;
		if(request == 1)
		{
			window.location.href = oldHref + searchText;
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
	cartSumPrice = cartSumPrice + Number(productTimi);
	cartSumPriceDecimals = cartSumPrice.toFixed(2);
	document.getElementById("cartProductsCount").value = newCount + " προιόντα ";
	localStorage.setItem('cartProductsCount','');
	localStorage.setItem('cartProductsCount',document.getElementById("cartProductsCount").value);
	document.getElementById("cartSumPrice").value = cartSumPriceDecimals + "€";
	localStorage.setItem('cartProductsPrice','');
	localStorage.setItem('cartProductsPrice',document.getElementById("cartSumPrice").value);
	var productHtml = "<div value=\""+productTimi+"\" id = \""+productId+"_productDiv\" class=\"cartProductDiv\">" + productTitle + "&nbsp;&nbsp;<button class=\"btnred\" align=\"center\" onclick=\"deleteFromCart('"+productId+"',"+productTimi+")\">X</button></br> <img style=\"width:130px; height:130px;\" src='images\\products\\"+productImagePath+"'></br>&nbsp;&nbsp;Τιμή:"+productTimi+"€</br></br><button class=\"btn\" align=\"center\">Καλάθι</button>&nbsp;&nbsp;<button class=\"btn\" align=\"center\">Ταμείο</button>";
	var cartDivHtml = document.getElementById("cartDiv").innerHTML;
	document.getElementById("cartDiv").innerHTML = cartDivHtml + productHtml + "</div></br>";
	localStorage.setItem('cartProductsDiv',cartDivHtml + productHtml + "</div></br>");
	var newLiHtml = "<li id = \""+productId+"_productLi\" class='has-sub'><a><span><button class=\"btnred\" align=\"center\" onclick=\"deleteFromCart('"+productId+"',"+productTimi+")\">X</button>&nbsp;&nbsp;"+productTitle+"<br/><img style=\"max-width:100%; height:auto;\"  src=\"images\\products\\"+productImagePath+"\" alt=\"Mountain View\"></br>"+productTimi+"€</br></br><button class=\"btn\" align=\"center\">Καλαθι</button></br><button class=\"btn\" align=\"center\">Ταμειο</button></span></a></li>";
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


function loadCart()
{
	document.getElementById("cartDiv").innerHTML = '';
	document.getElementById("cartUl").innerHTML = '';
	if(localStorage.getItem('cartProductsDiv') && localStorage.getItem('cartProductsUL'))
	{
		document.getElementById("cartDiv").innerHTML = localStorage.getItem('cartProductsDiv');
		document.getElementById("cartUl").innerHTML = localStorage.getItem('cartProductsUL');
	}
	document.getElementById("cartProductsCount").value = localStorage.getItem('cartProductsCount');
	if(!localStorage.getItem('cartProductsCount'))
	{
		document.getElementById("cartProductsCount").value = 0 + " προιόντα ";
	}
	if(!localStorage.getItem('cartProductsPrice'))
	{
		document.getElementById("cartSumPrice").value = 0 + "€";
	}
	else
	{
		var sumPrice = localStorage.getItem('cartProductsPrice');
		document.getElementById("cartSumPrice").value = sumPrice;
	}
}



function deleteFromCart(productId, currentProductPrice)
{
	var oldCartSumPrice = localStorage.getItem('cartProductsPrice').replace("€","");
	var newPrice = Number(oldCartSumPrice) - Number(currentProductPrice);
	if(newPrice<0)
	{
		newPrice = 0;
	}
	document.getElementById("cartSumPrice").value = newPrice.toFixed(2)+"€";
	localStorage.setItem('cartProductsPrice','');
	localStorage.setItem('cartProductsPrice',newPrice.toFixed(2)+"€");
	cartSumPrice = newPrice;
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
		document.getElementById("cartProductsCount").value = newCount + " προιόντα ";
		localStorage.setItem('cartProductsCount','');
		localStorage.setItem('cartProductsCount',newCount + " προιόντα ");
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

function setIdEkdosisToCookies(id_ekdosis)
{
	var pageUrl = window.location.href;
	var spliting = pageUrl.split('&');
	var flag = 0, flagMonteloName = 0;
	var selectMontela = document.getElementById("montelaSelect");
	var monteloName = selectMontela.value;
	for(i=0; i<spliting.length; i++)
	{
		if(spliting[i].includes("id_ekdosis="))
		{
			pageUrl = pageUrl.replace(spliting[i],"id_ekdosis=" + id_ekdosis);
			window.location.href = pageUrl;
			flag = 1;
		}
		if(spliting[i].includes("monteloName="))
		{
			pageUrl = pageUrl.replace(spliting[i],"monteloName=" + monteloName);
			window.location.href = pageUrl;
			flagMonteloName = 1;
		}
	}
	if(flagMonteloName == 0)
	{
		window.location.href = pageUrl + "&monteloName=" + monteloName;
	}
	for(i=0; i<spliting.length; i++)
	{
		if(spliting[i].includes("monteloName="))
		{
			pageUrl = pageUrl.replace(spliting[i],"monteloName=" + monteloName);
			window.location.href = pageUrl;
			flag = 1;
		}
	}
	if(flag == 0)
	{
		window.location.href = pageUrl + "&id_ekdosis=" + id_ekdosis;
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
}


function loadPage()
{
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


function loadCartPage()
{
	var sumPrice = 0;
	var productTableDiv = document.getElementById("productTableDiv");
	productTableDiv.innerHTML = '';
	var innerHTMLproductTableDiv = '';
	var productsSeperatedString = localStorage.getItem('productsSeperatedString');
	var productsArray = productsSeperatedString.split('#');
	var divHtmlString = '<table style="width:90%;"><tr style="background-color:#cccccc; border: 1px solid black;width:20%;"><td style="border: 1px solid black;">Κωδικός Προϊόντος</td> <td style="border: 1px solid black;">Τιμή Προϊόντος</td> <td style="border: 1px solid black;">Τίτλος Προϊόντος</td> <td style="border: 1px solid black;">Εικόνα Προϊόντος</td></tr>';
	for(i=0;i<productsArray.length; i++)
	{
		var currentProductArray = productsArray[i].split('*');
		if(currentProductArray.length > 1)
		{
			divHtmlString = divHtmlString + '<tr id="tr_'+currentProductArray[0]+'" style="background-color:#ffffff; border: 1px solid black;width:20%;">';
			for(j=0; j<currentProductArray.length; j++)
			{
				divHtmlString = divHtmlString + '<td style="border: 1px solid black;">';
				if(j==3)
				{
					var deleteButtonHtml = "<button class=\"btnred\" align=\"center\" onclick=\"deleteFromCart('"+currentProductArray[0]+"',"+currentProductArray[1]+")\">X</button>";
					divHtmlString = divHtmlString +"<img style='width:20%;height:20%;' src='"+ currentProductArray[j]+"'>"+deleteButtonHtml;
				}
				if(j==0 || j==2)
				{
					divHtmlString = divHtmlString +""+ currentProductArray[j];
				}
				if(j==1)
				{
					divHtmlString = divHtmlString +""+ currentProductArray[j]+" €";
					sumPrice = sumPrice + Number(currentProductArray[j]);
				}
				divHtmlString = divHtmlString + '</td>';
			}
			divHtmlString = divHtmlString + '</tr>';
		}
	}
	divHtmlString = divHtmlString + '<tr style="background-color:#ffffff; border: 1px solid black;width:20%;"><td style="border: 1px solid black;"></td> <td style="border: 1px solid black;"><span style="font-weight:bold"></br></br>   <input type="text" id="cartSumPrice" value="'+sumPrice.toFixed(2)+' €" style="width:100; border: none;" readonly>  </br></br></span></td> <td style="border: 1px solid black;"></td> <td style="border: 1px solid black;"></td></tr>';
	divHtmlString = divHtmlString + "</table>";
	productTableDiv.innerHTML = divHtmlString;
	document.getElementById("cartProductsCount").value = localStorage.getItem('cartProductsCount');
	if(!localStorage.getItem('cartProductsCount'))
	{
		document.getElementById("cartProductsCount").value = 0 + " προιόντα ";
	}
	if(localStorage.getItem('cartProductsDiv'))
	{
		document.getElementById("cartDiv").innerHTML = localStorage.getItem('cartProductsDiv');
	}
	if(localStorage.getItem('cartProductsUL'))
	{
		document.getElementById("cartUl").innerHTML = localStorage.getItem('cartProductsUL');
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
					location.reload();
				}
			}
		}
	}
}
