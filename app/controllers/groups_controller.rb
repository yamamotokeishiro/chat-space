class GroupsController < ApplicationController
  before_action :find_group, only: [:edit, :update]
  def index
  end

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to groups_path, notice: 'グループの作成が完了しました。'
    else
      flash.now[:alert] = 'グループの更新に失敗しました。'
      render :new
    end
  end

  def edit
  end

  def update
    if @group.update(group_params)
      redirect_to groups_path, notice: 'グループの更新が完了しました。'
    else
      flash.now[:alert] = 'グループの更新に失敗しました。'
      render :edit
    end
  end

  private
  def group_params
    params.require(:group).permit(:name, user_ids: [])
  end

  def find_group
    @group = Group.find(params[:id])
  end
end
