class GroupsController < ApplicationController

  def new
    @group = Group.find(1)
  end

  def create

  end

  def show
    @group = Group.find(params[:id])
  end

  def edit
    @group = Group.find(params[:id])
  end

  def update
    @group = Group.find(params[:id])
    @group.update(update_params)
  end

  private
  def update_params
    params.require(:group).permit(:key, :detail)
  end
end
