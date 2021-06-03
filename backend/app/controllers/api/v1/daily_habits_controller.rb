class Api::V1::DailyHabitsController < ApplicationController
    def index
        daily_habits = DailyHabit.all
        render json: daily_habits
    end

    def show
        daily_habit = DailyHabit.find(params[:id])
        render json: daily_habit
    end

end
