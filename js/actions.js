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

$('#youtube_vote_icon_link_downvote').click(function(event) {
    event.preventDefault();
    $('#youtube_downvote_icon_voted').toggle();
    $('#youtube_downvote_icon_notvoted').toggle();

    if($('#youtube_upvote_icon_voted').is(":visible")){
        $('#youtube_upvote_icon_notvoted').toggle();
        $('#youtube_upvote_icon_voted').toggle();
    }

});

$('#youtube_vote_icon_link_upvote').click(function(event) {
    event.preventDefault();
    $('#youtube_upvote_icon_notvoted').toggle();
    $('#youtube_upvote_icon_voted').toggle();

    if($('#youtube_downvote_icon_voted').is(":visible")){
        $('#youtube_downvote_icon_voted').toggle();
        $('#youtube_downvote_icon_notvoted').toggle();
    }
});

$(document).ready(function() {
    var maxLength = 500;
    $(".post_text").each(function () {
        var myStr = $(this).text();
        if ($.trim(myStr).length > maxLength) {
            var newStr = myStr.substring(0, maxLength);
            $(this).empty().html(newStr);
            $(this).append(' <a href="javascript:void(0);" id="read-more">read more...</a>');
        }
    });
    $('#read-more').click(function(){
        window.location.href = "social-post-detail.html";
    });

});



