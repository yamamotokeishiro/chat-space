class MessagesController < ApplicationController

  def new
    @group = Group.find(params[:group_id])
    @groups = current_user.groups
    @message = Message.find(1)
  end
end

private
def message_params
  params.require(:message).permit(:group_id)
end
