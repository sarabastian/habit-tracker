class DaySerializer < ActiveModel::Serializer
  attributes :id, :date
  has_many :daily_habits
  has_many :habits, through: :daily_habits
end
