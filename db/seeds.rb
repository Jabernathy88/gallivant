# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Post.destroy_all
City.destroy_all
User.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
    ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

users = []
cities = []

users << User.create(
    name: 'Eric Lu',
    photo_url: 'https://source.unsplash.com/A_gTI6Jhsj0/300x300',
    is_logged_in: false
)

users << User.create(
    name: 'Jeremy Abernathy',
    photo_url: 'https://source.unsplash.com/A_gTI6Jhsj0/300x300',
    is_logged_in: false
)

users << User.create(
    name: 'Supriya Yerramilli',
    photo_url: 'https://source.unsplash.com/A_gTI6Jhsj0/300x300',
    is_logged_in: false
)

users << User.create(
    name: 'Jasen Baker',
    photo_url: 'https://source.unsplash.com/A_gTI6Jhsj0/300x300',
    is_logged_in: false
)

cities << City.create(
    name: 'Atlanta',
    city_url: 'http://pics4.city-data.com/cpicc/cfiles34956.jpg'
)

cities << City.create(
    name: 'San Francisco',
    city_url: 'http://www.socketsite.com/wp-content/uploads/2017/03/San-Francisco-Skyline-Rendering-2017-West.jpg'
)

users.each do |user|
    cities.each do |city|
        Post.create(
            user_id: user.id,
            city_id: city.id,
            title: 'Atlanta is Great!!!',
            description: 'Atlanta is where the players play'
        )
    end
end