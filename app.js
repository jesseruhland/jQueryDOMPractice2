$('#submitbttn').on('click', function(event) {
    event.preventDefault();
    let movie = $('#movieinput').val();
    let rating = $('#ratinginput').val();
    if (rating>10 || rating<0){
        alert('Please select a rating between 0 and 10.')
    } else if (movie.length < 2) {
        alert('Please enter a movie title with at least 2 characters.')
    } else {
        $('ul').append('<li>'+movie+' | '+rating+' <button>Remove</button></li>');
        $('#movieinput').val('');
        $('#ratinginput').val('');
    }
})

$('ul').on('click', 'button', function(event) {
    $(this).parent().remove();
});