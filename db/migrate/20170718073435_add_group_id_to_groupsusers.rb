class AddGroupIdToGroupsusers < ActiveRecord::Migration[5.0]
  def change
    add_column :groupsusers, :group_id, :integer
  end
end
