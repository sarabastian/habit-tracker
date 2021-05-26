class Habit < ApplicationRecord
    belongs_to :category
    belongs_to :day
end
