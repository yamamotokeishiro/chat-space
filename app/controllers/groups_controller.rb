class GroupsController < ApplicationController

  def new
    @group = Group.new
  end

  def create
    # binding.pry
    @group = Group.new(group_params)
    @group.save
    redirect_to controller: :messages, action: :index  # トップページにリダイレクトする
  end

  def show
    @group = Group.find(params[:id])
  end

  def edit
    @group = Group.find(1)
  end

  def update
    @group = Group.find(params[:id])
    @group.update(update_params)
  end

  private
  def update_params
    params.require(:group).permit(:key, :detail)
  end

  def group_params
    # binding.pry
    params.require(:group).permit(:name, user_ids: [])
  end
end
