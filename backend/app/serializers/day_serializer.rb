class DaySerializer < ActiveModel::Serializer
  attributes :id, :date
  has_many :habits
end
