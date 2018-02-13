class Api::UsersController < ApplicationController
    def index
    @users = User.all
    render json: @users
    end
<<<<<<< HEAD

    def show
    @user = User.find(params[:id])
    render json: @user
=======
    
    def show
    @user = User.find(params[:id])
    render json: @user 
>>>>>>> c7a99f43fd433fc2b38f850e770496df9daa59b6
    end

    def create
    @user = User.create!(user_params)
<<<<<<< HEAD
    render json: @user
=======
    redirect_to "/users/#{@user.id}" 
>>>>>>> c7a99f43fd433fc2b38f850e770496df9daa59b6
    end

    def update
    @user = User.find(params[:id])
    @user.update!(user_params)
    render json: @user
    end

    def destroy
    @user = User.find(params[:id]).delete
    render status: :ok
    end

    private
    def user_params
        params.require(:user).permit(:name, :photo_url)
    end
end
