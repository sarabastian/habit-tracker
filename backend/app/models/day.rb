class Day < ApplicationRecord
    has_many :daily_habits
    has_many :habits, through: :daily_habits
end
