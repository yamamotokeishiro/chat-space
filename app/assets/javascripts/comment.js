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
  $('#new_comment').on('submit',function(e){
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
      $('.messages').append(html)
    })
    .fail(function(){
      alert('error');
    })
  })
});
