class AddCompletedToHabits < ActiveRecord::Migration[6.1]
  def change
    add_column :habits, :completed, :boolean
  end
end
