class GroupsController < ApplicationController

  def index
    @groups = Group.all
  end

  def new
    @group = Group.new
  end

  def create
    # binding.pry
    @group = Group.new(group_params)
    if @group.save
      redirect_to groups_path, notice: 'グループの作成が完了しました。'
    else
      redirect_to new_group_path, alert: 'グループ名を入力してください'
    end
  end

  def show
    @group = Group.find(params[:id])
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
  def update_params
    params.require(:group).permit(:key, :detail)
  end

  def group_params
    # binding.pry
    params.require(:group).permit(:name, user_ids: [])
  end
end
