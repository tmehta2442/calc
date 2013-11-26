$(function(){
		
		var $currentInput = $("input[name='input[num1]']");
		//var $operation = $("input["something or the other"]");

		$(".qwerty").on("click", "button", function(event){
		
			// console.log(event);
			// console.log(event.currentTarget);
			// console.log(this);
			// console.log(this.getAttribute("data-num"));
			// console.log(this.getAttribute("class"));
			// console.log($(this).data("num"));

	

			var val = $currentInput.val();
			$currentInput.val(val + $(this).data("num"))
	});

		//var $operations = (something)

		$(".operations").on("click", "button", function(event){
			console.log(event.currentTarget)
			console.log(this)
			console.log()

		});
});




// testing to see if we are traversing thru the DOM correctly
	////console.log($(".qwerty"))
		// testing to see if we are travesing thru the ODM correctly
	////console.log($(".qwerty").children())
		//	at this point "this" should return the button clicked
	//// $(".qwerty").on("click", "button", function(event){
	//// console.log(this);

		//	now we try to try to get the value in "data" -the second console.log does
		//  data attribute is a custom attribute in the HTML tag defined for that element
		//  fyi ".btn" can be swapped for "button" since it also identifies our buttons

		//// $(".qwerty").on("click", "button", function(event){
		
		//// 	console.log(this);
		//// 	console.log(this.getAttribute("data-num"));


		//lets try to grab the input field for num1
			//var $num1 = $("input[name='input[num1]']");
			//console.log($num1.val());



