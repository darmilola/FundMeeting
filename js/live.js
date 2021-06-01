$('#add_end_time').click(function(event) {
    event.preventDefault();
    $('#colored_add').toggle();
    $('#colored_remove').toggle();
    $('#end_time_form').toggle();

});


var coll = document.getElementsByClassName("collapsible_communities");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

$('.schedule_discussion_next').click(function(event) {
    event.preventDefault();
    $('.schedule_discussion_firstpage').toggle();
    $('.schedule_discussion_secondpage').toggle();

});

$('.schedule_discussion_back').click(function(event) {
    event.preventDefault();
    $('.schedule_discussion_firstpage').toggle();
    $('.schedule_discussion_secondpage').toggle();

});
