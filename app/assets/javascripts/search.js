$(function() {
  $(".chat-group-form__input").on("keyup", function() {
    var input = $(".js-user-search-field").val();
    console.log(input);
  });
});
