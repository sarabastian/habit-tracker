class Api::V1::HabitsController < ApplicationController
    def index
        habits = Habit.all
        render json: habits
    end

    def show
        habit = Habit.find(params[:id])
        render json: habit
    end


end
