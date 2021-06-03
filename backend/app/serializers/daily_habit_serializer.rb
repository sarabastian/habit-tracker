class DailyHabitSerializer < ActiveModel::Serializer
  attributes :id, :habit, :day, :completed
end
