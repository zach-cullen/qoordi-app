class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true, case_sensitive: false
  validates :given_name, :family_name, presence: true
end
