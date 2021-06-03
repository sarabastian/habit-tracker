class Habit < ApplicationRecord
    belongs_to :category
    has_many :daily_habits
    has_many :days, through: :daily_habits
end
