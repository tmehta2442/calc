$(function(){
	var $currentInput = $("input[name='input[num1]']");
	var $operation = $("input[name='input[operation]']");
	var	$displayField = $("#display");


// Talk about these three variable and how they're used in your app
	var inputs = [];
	var currentInput = "";
	var action = "";

/* Talk about each delegate and click event */
// Define delegate: What does it mean. (look up jQuery Docs)

	// What happens on number click before operation click
	// What happens on number click after operation click
	// relate this in terms of what's happening with  inputs, currentInput and action
	$(".numbers").on("click", "button", function(event){
		var val1 = $currentInput.val();

		//$currentInput.val(val1 + $(this).data("num"))
		currentInput += $(this).data("num");

		$displayField.val(currentInput);
	});


	// What happens on Operation Click?
	// relate this in terms of what's happening with  inputs, currentInput and action
	$(".operations").on("click", "button", function(event){
		
		var operation_value = $operation.val();

		if(operation_value == ""){

			action = $(this).data("operation");
			$operation.val($(this).data("operation"));
			$currentInput = $("input[name='input[num2]']")
			
			inputs.push(currentInput);
			currentInput = "";

		} else {
			alert("Ooops! You've already entered an operation!")
		}
		console.log(currentInput)
		console.log(inputs)
		console.log(action)
	});


	// What happens on Submit?
	// relate this in terms of what's happening with  inputs, currentInput and action
	$("#input").on("submit", function(event){
		console.log(event)
		event.preventDefault();

		console.log(inputs)
		inputs.push(currentInput)
		console.log(inputs)

		$.ajax({
			url: "/"+action,
			data: {inputs: inputs},
			method: "get"
		}).done(function(data) {
			console.log("the result is:", data);
		});
	});

});


