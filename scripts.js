$(document).ready(function(){
	$("#shopping-form").on("submit", function(e){
		e.preventDefault();
		var itemToAdd = $(this).parent().children(".add-item__input").val();
		if (itemToAdd != ""){
			console.log(itemToAdd);
			$(".need-list").prepend(
				"<li class=\"need-list-item\"><span class=\"side check\">&#x2713;</span><span class=\"middle\">"
				+itemToAdd+"</span><span class=\"side ex\">&#x2717;</span></li>");
			$(this).parent().children(".add-item__input").val("");
		}
		else {
			alert("Please type in the box to add items");
		}
	});
		console.log("it works"); 

	$(".need-list").on("click",".need-list-item > .check",function(){
		purchasedItem = $(this).parent(".need-list-item");
	});
});