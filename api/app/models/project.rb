class Project < ApplicationRecord
  belongs_to :category
  has_many :user_projects
  has_many :users, through: :user_projects
end
