# README

## Usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|email|string|null: false, unique: true|
|password|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- has_many : messages
- has_many : groups, through: :GroupsUsers
- has_many : GroupsUsers




## Messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user



## Groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name| string |null: false|

### Association
- has_many : users, through: :GroupsUsers
- has_many : messages
- has_many : GroupsUsers


## GroupsUsersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
