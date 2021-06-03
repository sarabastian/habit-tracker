# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Habit.destroy_all()
Category.destroy_all()
Day.destroy_all()

c1 = Category.create(title: 'Health & Fitness')
c2 = Category.create(title: 'Programming')
c3 = Category.create(title: 'Reading')


d1 = Day.create(date: '2021-05-26', habit_achieved: false)
h1 = Habit.create(name: 'Exercise', category_id: c1.id, day_id: d1.id, completed: false)
h2 = Habit.create(name: 'Meditation', category_id: c1.id, day_id: d1.id, completed: false)