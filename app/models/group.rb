class Group < ApplicationRecord
  has_many :users, through: :groupsusers
  has_many :messages
  has_many :groupsusers
end
