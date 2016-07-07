$(document).ready(function(){
	$("#shopping-form").on("submit", function(e){
		e.preventDefault();
		var itemToAdd = $(".add-item__input").val();
		if (itemToAdd != ""){
			console.log(itemToAdd);
			$(".need-list").prepend(
				"<li class=\"need-list-item\"><span class=\"side check\">&#x2713;</span><span class=\"middle\">"
				+itemToAdd+"</span><span class=\"side ex\">&#x2717;</span></li>");
			$(".add-item__input").val("");
		}
		else {
			alert("Please type in the box to add items");
		}
	});
		console.log("it works"); 

	$(".need-list").on("click",".need-list-item > .check",function(){
		purchasedItem = $(this).parent(".need-list-item");
		$(this).parent(".need-list-item").remove();
	});

	$(document).on("click", ".side.ex", function(){
		$(this).parent(".need-list-item").remove();
	})

	$(document).on("click", ".side.check", function(){
		var itemText = $(this).next().text();
		if (itemText != ""){
		$(".done-list").append(
			"<li class=\"done-list-item\"><span class=\"side back-up\">&#x21ea;</span><span class=\"middle\">"
				+itemText+"</span><span class=\"side ex\">&#x2717;</span></li>");
			$(".add-item__input").val("");
		}
	})

	$(document).on("click", ".side.ex", function(){
		$(this).parent(".done-list-item").remove();
	})

	$(document).on("click", ".side.back-up", function(){
		var itemToAdd = $(this).next().text();
		if (itemToAdd != ""){
		$(".need-list").append(
			"<li class=\"need-list-item\"><span class=\"side check\">&#x2713;</span><span class=\"middle\">"
				+itemToAdd+"</span><span class=\"side ex\">&#x2717;</span></li>");
			$(".add-item__input").val("");
			$(this).parent(".done-list-item").remove();
		}
	})

});