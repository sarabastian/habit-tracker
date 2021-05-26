class AddHabitAchievedToDays < ActiveRecord::Migration[6.1]
  def change
    add_column :days, :habit_achieved, :boolean
  end
end
