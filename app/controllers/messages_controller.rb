class MessagesController < ApplicationController

  def new
    @group = Group.find(params[:group_id])
    @groups = current_user.groups
    @message = Message.new
    @messages = Message.where(group_id: params[:group_id])
  end

  def create
    binding.pry
    @message = Message.new(message_params)
    if @message.save
      redirect_to new_group_message_path, notice: 'メッセージの作成が完了しました。'
    else
      flash.now[:alert] = "メッセージの送信に失敗しました。"
      @groups = current_user.groups
      render :new
    end
  end


  private
  def message_params
    params.require(:message).permit(:text, :image).merge(group_id: params[:group_id], user_id: current_user.id)
  end
end
