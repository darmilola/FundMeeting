$('#vote_icon_link_downvote').click(function(event) {
    event.preventDefault();
    $('#downvote_icon_voted').toggle();
    $('#downvote_icon_notvoted').toggle();

    if($('#upvote_icon_voted').is(":visible")){
        $('#upvote_icon_notvoted').toggle();
        $('#upvote_icon_voted').toggle();
    }

});

$('#vote_icon_link_upvote').click(function(event) {
    event.preventDefault();
    $('#upvote_icon_notvoted').toggle();
    $('#upvote_icon_voted').toggle();

   if($('#downvote_icon_voted').is(":visible")){
       $('#downvote_icon_voted').toggle();
       $('#downvote_icon_notvoted').toggle();
   }
});

