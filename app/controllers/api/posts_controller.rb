class Api::PostsController < ApplicationController
    def index
        @posts = Post.all
        render json: @posts
        end
    
        def show
        @post = Post.find(params[:id])
        render json: @post
        end
    
        def create
        @post = Post.create!(post_params)
        render json: @post
        end
    
        def update
        @post = Post.find(params[:id])
        @post.update!(post_params)
        render json: @post
        end
    
        def destroy
        @post = Post.find(params[:id]).delete
        render status: :ok
        end
    
        private
        def Post_params
            params.require(:post).permit(:title, :description)
        end
end
