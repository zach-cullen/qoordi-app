class Timeblock < ApplicationRecord
  belongs_to :timeline

  def project
    self.timeline.project
  end
end
