function getAllVeggiesProducts(){
	$.ajax({
  		method: 'GET',
  		dataType: "json",
  		url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productSpecification/?project=projectOpenFarmVeggies',
  		beforeSend: function (xhr) {
    		xhr.setRequestHeader ("Authorization", "Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=");
		},
  		success:function(data){
  			buildHomePage(data);
  		}
	});
}

function getAllDairyProducts(){
	$.ajax({
  		method: 'GET',
  		dataType: "json",
  		url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productSpecification/?project=projectOpenFarm',
  		beforeSend: function (xhr) {
    		xhr.setRequestHeader ("Authorization", "Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=");
		},
  		success:function(data){ 
  			buildHomePage(data);
  		}
	});
}
function getAllFruitsProducts(){
	$.ajax({
  		method: 'GET',
  		dataType: "json",
  		url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productSpecification/?project=projectOpenFarmFruits',
  		beforeSend: function (xhr) {
    		xhr.setRequestHeader ("Authorization", "Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=");
		},
  		success:function(data){ 
  			buildHomePage(data);
  		}
	});
}

function buildHomePage(data){
	for (var i = 0; i < data.length; i++) {

		var namePo = (data[i].productNumber).replace("ps","po");

		var div = document.createElement("div");
		div.setAttribute("class", "vegpost");
		div.setAttribute("id", namePo);
		var h2 = document.createElement("h2");
		
		var a = document.createElement("a");
		a.appendChild(document.createTextNode(data[i].versions[0].name));
		a.setAttribute("href","product/"+namePo);
		
		h2.appendChild(a);

		var p = document.createElement("p");
		p.appendChild(document.createTextNode(data[i].versions[0].description));
		
		var aImg = document.createElement("a");
		aImg.setAttribute("href","product/"+namePo);

		var img = document.createElement("img");
		img.setAttribute("src",data[i].versions[0].characteristics[7].versions[0].value);
		img.setAttribute("href","product/"+namePo);
		aImg.appendChild(img);
		div.appendChild(aImg);
		div.appendChild(h2);
		div.appendChild(p);

		$('#mainBody').append(div);
	}

	removeLoadingGif();
}

function clickDairyTab(){
	$('#mainBody').empty();
	loadingGif();

	$('#dairyTab').addClass("active");
	$('#fruitsTab').removeClass("active");
	$('#veggiesTab').removeClass("active");

	getAllDairyProducts();
}

function clickFruitsTab(){
	$('#mainBody').empty();
	loadingGif();

	$('#fruitsTab').addClass("active");
	$('#veggiesTab').removeClass("active");
	$('#dairyTab').removeClass("active");
	getAllFruitsProducts();
}

function clickVeggiesTab(){
	$('#mainBody').empty();
	loadingGif();

	$('#fruitsTab').removeClass("active");
	$('#veggiesTab').addClass("active");
	$('#dairyTab').removeClass("active");
	getAllVeggiesProducts();

}

function loadingGif(){
	$('#mainBody').prepend('<img id="loadingGif" src="/images/loading-cow.gif" />');
}
function removeLoadingGif(){
	$('#loadingGif').remove();
}

function isLogged(){
	var logged;
	$.ajax({
  		method: 'GET',
  		dataType: "json",
  		url: '/cart/email',
  		error:function(data){
  			console.log(data.responseText);
  			if(data.responseText == 'Unauthorized'){
  				$('#user-auth-div').empty();
  				var a = document.createElement("a");
  				a.setAttribute("href", "/signin");
  				a.setAttribute("style", "color:white;");
  				a.appendChild(document.createTextNode("Login"));
  				$('#user-auth-div').append(a);
  				
  				$('#quantity').addClass("hidden");
          		$('#right-column').append(document.createTextNode('Please Log In to buy products.'));

  			}
  			else{
  				$('#user-auth-div').empty();
  				var p = document.createElement("p");
				p.appendChild(document.createTextNode(data.responseText+'  '));
				p.setAttribute("style", "margin:0;");
				p.setAttribute("style", "color:white; display: inline;");
				var a = document.createElement("a");
  				a.setAttribute("href", "/auth/logout");
  				a.appendChild(document.createTextNode("Logout"));
				$('#user-auth-div').append(p);
				$('#user-auth-div').append(a);
				
  			}
  		}
	});
}

function test(){
	$.ajax({
  		method: 'POST',
  		dataType: "json",
  		data: JSON.stringify([{"id": awoijdaw , "quantity":oijoiawd , "price": 1209312},{"id": awoijdaw , "quantity":oijoiawd , "price": 1209312}]),
  		url: '/ordering/placeOrder/',
  		success:function(data){ 
  			alert('WORKED!!!!');
  		}
	});
	
}

function getIdProduct(){
	return window.location.toString().split('/')[window.location.toString().split('/').length -1];
}

function getProductInfo(){
	$.ajax({
  		method: 'GET',
  		dataType: "json",
  		url: '/catalog/'+getIdProduct(),
  		success:function(data){
  			buildProductPage(data);
  		},
  		error:function(data){
  			// alert(data.responseText);
  		}
	});
}

function buildProductPage(data){


 	var imgProduct = document.createElement("img");
 	imgProduct.setAttribute("src",data[0].versions[0].associations[0].targetSpecification.versions[0].characteristics[7].versions[0].value);
 	var nutrition = document.createElement("div");
 	var pNutriLabel = document.createElement("b");
 	pNutriLabel.appendChild(document.createTextNode("Nutritional Values"));
 	nutrition.appendChild(pNutriLabel);
 	var pNutriInfo = document.createElement("p");
 	pNutriInfo.appendChild(document.createTextNode(data[0].versions[0].associations[0].targetSpecification.versions[0].characteristics[5].versions[0].value));
 	nutrition.appendChild(pNutriInfo);

 	$('#left-column').append(imgProduct);
 	$('#left-column').append(nutrition);

  	var name = document.createElement("h2");
  	name.appendChild(document.createTextNode(data[0].versions[0].associations[0].targetSpecification.versions[0].name));
  	$('#name').append(name);

  	var pDescription = document.createElement("p");
  	pDescription.appendChild(document.createTextNode(data[0].versions[0].associations[0].targetSpecification.versions[0].description));
  	$('#description').append(pDescription);

  	var organic = ((data[0].versions[0].associations[0].targetSpecification.versions[0].characteristics[4].versions[0].value).toString() ==='yes') ? true : false;
  	if(organic){
  		var imgOrganic = document.createElement("img");
	  	imgOrganic.setAttribute("src","http://67.media.tumblr.com/avatar_598acb89b7e1_128.png");
	  	$('#organic').append(imgOrganic);
  	}

  	var pPrice = document.createElement("p");
  	pPrice.appendChild(document.createTextNode(data[0].versions[0].productOfferingPrices[0].versions[0].price.units.code+' - '+data[0].versions[0].productOfferingPrices[0].versions[0].price.amount));
  	$('#price').append(pPrice);

  	var pProducer = document.createElement("p");
  	pProducer.appendChild(document.createTextNode(data[0].versions[0].associations[0].targetSpecification.versions[0].characteristics[3].versions[0].value));
  	$('#producer').append(pProducer);

}

function addToCart(){
	var productId;
	var productName;
	var quantity;
	var price;

	productId = getIdProduct();
	productName = $('#name h2')[0].textContent;
	quantity = $('#quantity-product')[0].value;
	price = $('#price p')[0].textContent.split(" ")[$('#price p')[0].textContent.split(" ").length-1];

	var jsonCart = {
		"productId" : productId, 
	 	"productName": productName,
	 	"quantity": quantity,
	 	"price" : price
	};

	console.log(jsonCart);
	$('#json').value = jsonCart;
	
	// $('#myForm').submit();

	$.ajax({
  		method: 'POST',
  		url: '/cart/',
  		data: JSON.stringify(jsonCart),
  		dataType:"json",
  		contentType: "application/json; charset=utf-8",
  // 		beforeSend: function (xhr) {
  //   		xhr.setRequestHeader ("content-type", "application/json");
		// },
  		success:function(){
  			// alert('worked');
  		},
  		error:function(data){
  			// alert(data.responseText);
  		}
	});

}
function getCartInfo(){
	$.ajax({
  		method: 'GET',
  		dataType: "json",
  		url: '/cart/',
  		success:function(data){
  			var p = document.createElement("p");
  			
  			p.appendChild(document.createTextNode(data.productName + '   -   ' + data.quantity   +   '   -   ' + data.price));
  			$('#products-list').append(p);
  			
  			var pTotal = document.createElement("p");
  			pTotal.appendChild(document.createTextNode('TOTAL : ' + (data.quantity * data.price)));
  			$('#products-list').append(pTotal);
  			// alert(data);
  		}

  	});

}