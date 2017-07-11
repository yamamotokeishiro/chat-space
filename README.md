# README


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### add_index
 :users, [:name, :email]

### Association
- has_many : messages
- has_many : user_groups



## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### add_index
 :messages, [:text, :image]

### Association
- belongs_to :group
- belongs_to :user



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name| string |null: false|

### Association
- has_many : user_groups
- has_many : messages



## user_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
