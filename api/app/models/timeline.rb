class Timeline < ApplicationRecord
  belongs_to :project
  has_many :timeblocks
end
