class CreateDailyHabits < ActiveRecord::Migration[6.1]
  def change
    create_table :daily_habits do |t|
      t.integer :habit_id
      t.integer :day_id

      t.timestamps
    end
  end
end
