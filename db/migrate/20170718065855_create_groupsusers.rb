class CreateGroupsusers < ActiveRecord::Migration[5.0]
  def change
    create_table :groupsusers do |t|

      t.timestamps
    end
  end
end
