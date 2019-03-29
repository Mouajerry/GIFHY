
// starting arrays
    var food = [ "pizza", "hotdog", "hamburger", "fries"];

// funtion for displaying array
    function renderButtons() {

    $("#buttons-veiw").empty();

    // loops through the array of food
    for (var i = 0; i < food.length; i++) {

        //generates buttons for the arrays
        var b = $("<button>");
        // add class to button
        b.addClass("food-btn");
        // add a data attribute
        b.attr("data-name", foods[i]);
        // add text to button
        b.text(foods[i]);
        // adds button on to page/ html
        $("#buttons-view").append(b);

    };
    };