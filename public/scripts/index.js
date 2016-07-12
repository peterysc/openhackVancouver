function getAllVeggiesProducts(){
	$.ajax({
  		method: 'GET',
  		dataType: "json",
  		url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productSpecification/?project=projectOpenFarmVeggies',
  		beforeSend: function (xhr) {
    		xhr.setRequestHeader ("Authorization", "Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=");
		},
  		success:function(data){ 
  			buildProductPage(data);
  		}
	});
}

function buildProductPage(data){

	for (var i = 0; i < data.length; i++) {
		var div = document.createElement("div");
		div.setAttribute("class", "vegpost");
		div.setAttribute("id", data[i].productNumber);
		var h2 = document.createElement("h2");
		h2.appendChild(document.createTextNode(data[i].versions[0].name));
		var p = document.createElement("p");
		p.appendChild(document.createTextNode(data[i].versions[0].description));
		var img = document.createElement("img");
		img.setAttribute("src",data[i].versions[0].characteristics[7].versions[0].value);
		div.appendChild(img);
		div.appendChild(h2);
		div.appendChild(p);

		$('#mainBody').append(div);
	}

}