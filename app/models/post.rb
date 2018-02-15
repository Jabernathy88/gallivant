class Post < ApplicationRecord
  belongs_to :user
  belongs_to :city

  validates :title, length: {minimum: 1, maximum: 200}
  validates :description, presence: true

end
