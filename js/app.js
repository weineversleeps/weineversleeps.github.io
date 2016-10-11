$(document).ready(function () {
	var numberOfPeople
	var levelOfHunger
	var pizzas

	$('#submit').click(function(){
		numberOfPeople = $('#people').val();
		levelOfHunger = $('select').val();

		if (levelOfHunger === "nothungry") {
		pizzas = (numberOfPeople * 1/8);
		} else if (levelOfHunger === "hungry") {
		pizzas = (numberOfPeople * 3/8);
		} else {
		pizzas = (numberOfPeople * 4/8);
		}
	

		$('#output').html("You should order " + Math.ceil(pizzas) + " " + "pizza(s)");
	});

	
});


