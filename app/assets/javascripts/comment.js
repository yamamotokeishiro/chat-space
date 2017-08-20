$(function(){
  function buildHTML(message){
    var html = `<div class='message'>
                  <div class='message-top'>
                    <div class='message-top__user-name'>
                      <p>${message.user_name}</p>
                    </div>
                    <div class='message-top__date'>
                      <p>${message.created_at}</p>
                    </div>
                  </div>
                  <div class='message-bottom'>
                    <p class='message-bottom__content'>${message.text}</p>
                  </div>
                </div>`
    return html;
  }
  $('.form_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
      url: '../messages',
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.form_message__message').val('');
      $(".form_message__submit").prop('disabled', false);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
      $(".form_message__submit").prop('disabled', false);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
  })
});
