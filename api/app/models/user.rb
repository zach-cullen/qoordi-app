class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true, case_sensitive: false
  validates :given_name, :family_name, presence: true

  has_many :user_events
  has_many :events, through: :user_events
end
