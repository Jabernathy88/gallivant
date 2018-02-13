class Api::CitiesController < ApplicationController
    def index
        @cities = City.all
        render json: @cities
<<<<<<< HEAD
<<<<<<< HEAD
        end
    
        def show
        @city = City.find(params[:id])
        render json: @City
        end
    
        def create
        @city = City.create!(City_params)
        render json: @city
        end
    
        def update
        @city = City.find(params[:id])
        @city.update!(city_params)
        render json: @city
        end
    
        def destroy
        @city = City.find(params[:id]).delete
        render status: :ok
        end
    
        private
        def city_params
            params.require(:City).permit(:name, :city_url)
        end
=======
=======
>>>>>>> c7a99f43fd433fc2b38f850e770496df9daa59b6
    end
        
    def show
        @city = City.find(params[:id])
        render json: @city 
    end
    
    def create
        @city = City.create!(city_params)
        redirect_to "/cities/#{@city.id}" 
    end
    
    def update
        @city = City.find(params[:id])
        @city.update!(city_params)
        render json: @city
    end
    
    def destroy
        @city = City.find(params[:id]).delete
        render status: :ok
    end
    
    private
    def city_params
        params.require(:city).permit(:name, :city_url)
    end
<<<<<<< HEAD
>>>>>>> c7a99f43fd433fc2b38f850e770496df9daa59b6
=======
>>>>>>> c7a99f43fd433fc2b38f850e770496df9daa59b6
end
