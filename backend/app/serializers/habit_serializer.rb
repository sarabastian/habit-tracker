class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :category_id, :day_id, :completed
end
