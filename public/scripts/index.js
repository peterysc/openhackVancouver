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

		var div = document.createElement("div");
		div.setAttribute("class", "vegpost");
		div.setAttribute("id", data[i].productNumber);
		// div.setAttribute("onclick", 'catalog/'+data[i].productNumber);
		var h2 = document.createElement("h2");
		
		var a = document.createElement("a");
		a.appendChild(document.createTextNode(data[i].versions[0].name));
		// a.setAttribute("href","catalog/"+data[i].productNumber);
		a.setAttribute("href","product/"+data[i].productNumber);
		
		h2.appendChild(a);

		var p = document.createElement("p");
		p.appendChild(document.createTextNode(data[i].versions[0].description));
		
		var aImg = document.createElement("a");
		// aImg.setAttribute("href","catalog/"+data[i].productNumber);
		aImg.setAttribute("href","product/"+data[i].productNumber);

		var img = document.createElement("img");
		img.setAttribute("src",data[i].versions[0].characteristics[7].versions[0].value);
		// img.setAttribute("href","catalog/"+data[i].productNumber);
		img.setAttribute("href","product/"+data[i].productNumber);
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

// function getURLParameter(sParam){

//     var sPageURL = window.location.search.substring(1);
//     var sURLVariables = sPageURL.split('&');

//     for (var i = 0; i < sURLVariables.length; i++){

//         var sParameterName = sURLVariables[i].split('=');
//         if (sParameterName[0] == sParam){
//             return sParameterName[1];
//         }
//     }
// }​

