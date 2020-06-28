class Project < ApplicationRecord
  belongs_to :category, optional: true
  has_many :user_projects
  has_many :users, through: :user_projects
  has_many :timelines
  has_many :timeblocks, through: :timelines

  # call immediately after building new project so that project has 2 timelines by default with its project_id
  def build_initial_timelines
    self.timelines.build(title: "Primary")
    self.timelines.build(title: "Secondary")
  end
end
