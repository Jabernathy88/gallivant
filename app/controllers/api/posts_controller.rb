class Api::PostsController < ApplicationController

        def index
        @posts = Post.all
        # Author.joins("INNER JOIN posts ON posts.author_id = authors.id AND posts.published = 't'")
        # @posts = Post.joins("SELECT users.name, users.photo_url, posts.title, posts.description 
        # FROM posts
        # FULL JOIN users
        # ON users.id = posts.user_id")
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
        def post_params
            params.require(:post).permit(:title, :description, :user_id, :city_id)
        end
end
