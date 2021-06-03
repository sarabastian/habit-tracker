class AddCompletedToDailyHabits < ActiveRecord::Migration[6.1]
  def change
    add_column :daily_habits, :completed, :boolean
  end
end
