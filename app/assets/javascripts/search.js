$(function() {
  var search_list = $(".js_inc");

  function appendUser(user) {
   var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-1'>
                  <p class='chat-group-user__name'>${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
               </div>`
    search_list.append(html);
  }
  function appendNouser(user) {
    var html = `<li>
                  <div class='listview__element--right-icon'>${ user }</div>
                </li>`
    search_list.append(html);
  }
  function buildUser(id, name) {
     var html = `<div class='chat-group-user clearfix js-chat-members' id='chat-group-user-8'>
                   <input name='group[user_ids][]' type='hidden' value='${id}'>
                   <p class='chat-group-user__name'>${name}</p>
                   <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`;
     $(".js-add-user").append(html);
  }

  $(".chat-group-form__input").on("keyup", function() {
    var input = $(".js-user-search-field").val();
    if (!input == "") {
      $.ajax({
        type: 'GET',
        url: '/users',
        data: { keyword: input },
        dataType: 'json'
      })
      .done(function(user) {
        $(".js-chat-member").empty();
        $(".js-chat-member").remove();
        $("li").remove();
        if (user.length !== 0) {
          user.forEach(function(user){
            appendUser(user);
          });
        }
        else {
          appendNouser("一致する映画はありません");
        }
      })
      .fail(function() {
        alert('ユーザー検索に失敗しました');
      })
    }
    else {
      $(".js-chat-member").empty();
      $(".js-chat-member").remove();
      $("li").remove();
    }
  });
  $(".chat-group-form").on("click", ".user-search-add", function() {
    var id = $(this).data('user-id');
    var name = $(this).data('user-name');
      buildUser(id, name);
  });
  $(".chat-group-form").on("click", ".user-search-remove", function() {
    var user = $(this).parent();
    user.remove();
  });
});
