
// starting arrays
    var foods = [ "pizza", "hotdog", "hamburger", "fries"];

 console.log(foods);
// funtion for displaying array
    function renderButtons() {

    $("#buttons-view").empty();

    // loops through the array of food
    for (var i = 0; i < foods.length; i++) {

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
    }

    // display info function re-render
    function displayfoodInfo() {

        var food = $(this).attr("data-name");

        var APIkey = "KyotFbisTB1gIptI4RfkrWU2s2T85Kor";
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=" + APIkey + "&limit=10";

        // AJAX to call for info
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            console.log(queryURL);

            // store data from AJAX
            var results = response.data;

            for (var i = 0; i < results.length; i++) {

            // creating/ storing an div
                var foodDiv = $("<div>");

                var rating = $("<p>").text("Rating: " + results[i].rating).addClass("rating");
                var title = $("<p>").text("Title: " + results[i].title).addClass("title");

            // creating/ storing an image
            var foodImage = $("<img>");

            foodImage.attr("src", results[i].images.fixed_height.url);

            foodDiv.append(title, rating, foodImage);

            $("#food-view").prepend(foodDiv);
            }
        });
    };

    // adding click event
    $(document).on("click", ".food-btn", displayfoodInfo);

    renderButtons();