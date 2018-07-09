
// grabs form submission data and stores in variable. Function is called on click. Loops through JSON data and sees if there is a match
function formSubmit() {
    var userZip = document.getElementById('zip').value;
    $.getJSON('zipcodes.json', function (data) {
        for (i = 0; i < data.length; i++) {
            if (userZip == data[i].zip) {
                $('#jsonData').html(data[i].zip + " is the zip code for " + data[i].city);
            }
        }
    });
};

// AJAX call to insert headline.html
$(function () {
    $('#zipCodeHeadline').load('headline.html');
});