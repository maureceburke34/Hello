var photos = [];
$(".add").click(function() {
    var pic = $(".picture-url").val();
    photos.push(pic);
    $(".gallery").append("<img src="+pic+">");
});