$(document).ready(function() {
    for (var i = 1; i < 151; i++) {
        $('#pokemon').append(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png" id="${i}">`);
    }

    $(document).on("click", "img", function(){
        var id = this.id
        $.get('https://pokeapi.co/api/v2/pokemon/' + id, function(res) {
            var html_str = "";
            html_str += `<div id="img"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png" id="${id}"></div>`;
            html_str += "<h4>Name: " + res['name'] + "</h4>";
            html_str += "<h4>Height:</h4>";
            html_str += res['height'];
            html_str += "<h4>Weight</h4>";
            html_str += res['weight'];
            html_str += "<h4>Types</h4>";
            html_str += "<ul>";
            for (var k = 0; k < res.types.length; k++) {
                html_str += "<li>" + res.types[k].type.name + "</li>";
            }
            html_str += "</ul>";

            $('#pokedeck').html(html_str)
            $('html, body').animate({scrollTop: 0}, 600);
        });
    })

 });