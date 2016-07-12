function getAllProducts(){
	$.ajax({
  		method: 'GET',
  		dataType: "json",
  		url: 'http://192.176.47.48:27030/rest/CatalogManagement/v2/productSpecification/?project=projectOpenFarmVeggies',
  		beforeSend: function (xhr) {
    		xhr.setRequestHeader ("Authorization", "Basic ZjAwNTAxOTlmYjg1YmYwYTkyMGZiMjkwNjk1OTBmYmY5MWQ5Zjk0Zjk1YWJkOWQ2ZGQ6RWdYYWMzQzRSZGhqOUtFQXA1MDZtdkZ1M0t1VXJTaXJHVjYzZDVjcTczVTREeDV4VFY=");
		},
  		success: function(data){
  			console.log(data);
  		}
	});
}

function buildProductPage(){

}