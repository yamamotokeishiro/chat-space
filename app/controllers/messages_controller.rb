class MessagesController < ApplicationController

  def new
    @group = Group.find(params[:group_id])
    @groups = Group.all
  end
end

private
def message_params
  params.require(:message).permit(:group_id)
end
