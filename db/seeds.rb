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

atlanta = City.create(
  name: 'Atlanta',
  city_url: 'https://www.atlantaphotos.com/media/wysiwyg/AP/ATLANTA.jpg')

sanfran = City.create(
    name: 'San Francisco',
    city_url: 'http://www.socketsite.com/wp-content/uploads/2017/03/San-Francisco-Skyline-Rendering-2017-West.jpg')

london = City.create(
  name: 'London',
  city_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/800px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg')

# 5 main seeds
anonymous = User.create(
  name: 'Anonymous',
  photo_url: 'https://source.unsplash.com/A_gTI6Jhsj0/300x300',
  is_logged_in: true)

Post.create(city: atlanta, user: anonymous, title: "Hello ATL.", description: "NCR is opening up its campus — to an extent — to the public, especially the Georgia Tech students it covets. The main lobby is open to the public and includes a coffee shop and event space.")
Post.create(city: sanfran, user: anonymous, title: "Hello SF.", description: "NCR is opening up its campus — to an extent — to the public, especially the Georgia Tech students it covets. The main lobby is open to the public and includes a coffee shop and event space.")
Post.create(city: london, user: anonymous, title: "Hello LDN.", description: "NCR is opening up its campus — to an extent — to the public, especially the Georgia Tech students it covets. The main lobby is open to the public and includes a coffee shop and event space.")
  
eric = User.create(
  name: 'Eric Lu',
  photo_url: 'https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAvQAAAAJDNmNTJiZDgzLTc1ODUtNDhhOS04MmIxLWU4NzMwOWU5ZjY0Ng.jpg',
  is_logged_in: false)

Post.create(city: atlanta, user: eric, title: "Beltline Update", description: "Atlanta Beltline Southeast Study Group Public Meeting tonight (Mon 2/12) at Dad's Garage from 6-7:30. Come out and give input for the upcoming development of the southeast section of the Beltline!")
Post.create(city: sanfran, user: eric, title: "Sunbelt Update", description: "Atlanta Beltline Southeast Study Group Public Meeting tonight (Mon 2/12) at Dad's Garage from 6-7:30. Come out and give input for the upcoming development of the southeast section of the Beltline!")
Post.create(city: london, user: eric, title: "British Line Update", description: "Atlanta Beltline Southeast Study Group Public Meeting tonight (Mon 2/12) at Dad's Garage from 6-7:30. Come out and give input for the upcoming development of the southeast section of the Beltline!")

jeremy = User.create(
  name: 'Jeremy Abernathy',
  photo_url: 'https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/AAMAAgDGAAwAAQAAAAAAAAxDAAAAJGEyYjkyZGM2LTdiM2UtNDRkNC1iOGIyLTdkMzYxZGY4Y2MwMQ.jpg',
  is_logged_in: false)

Post.create(city: atlanta, user: jeremy, title: "First impression", description: "The buildings, which overlook Interstate-85, provide sweeping views of the ever-changing Atlanta skyline and the Georgia Tech campus, a key recruiting ground as NCR seeks a more tech and computer-savvy workforce.")
Post.create(city: sanfran, user: jeremy, title: "Second impression", description: "The buildings, which overlook Interstate-85, provide sweeping views of the ever-changing Atlanta skyline and the Georgia Tech campus, a key recruiting ground as NCR seeks a more tech and computer-savvy workforce.")
Post.create(city: london, user: jeremy, title: "Third impression", description: "The buildings, which overlook Interstate-85, provide sweeping views of the ever-changing Atlanta skyline and the Georgia Tech campus, a key recruiting ground as NCR seeks a more tech and computer-savvy workforce.")

supriya = User.create(
  name: 'Supriya Yerramilli',
  photo_url: 'https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/AAMAAQDGAAwAAQAAAAAAAA4SAAAAJDJlZDU2NWIxLTBlMWMtNDIyNS04YjA2LWI1NzVkM2I3N2JhNw.jpg',
  is_logged_in: false)

Post.create(city: atlanta, user: supriya, title: "Tip of the day", description: "Like many Silicon Valley companies, NCR offers a plethora of services that incentivize employees to stay on-campus during the workday — and after.")
Post.create(city: sanfran, user: supriya, title: "Tip of the Iceberg", description: "Like many Silicon Valley companies, NCR offers a plethora of services that incentivize employees to stay on-campus during the workday — and after.")

jasen = User.create(
  name: 'Jasen Baker',
  photo_url: "./jasen.png",
  is_logged_in: false)

Post.create(city: atlanta, user: jasen, title: "Heck yeah!", description: "You don't frighten us, English pig dogs. Go and boil your bottoms, you sons of a silly person. I blow my nose at you, so-called 'Arthur King,' you and all your silly English K-nig-hts.")
Post.create(city: sanfran, user: jasen, title: "Heck yehss!!!", description: "You don't frighten us, English pig dogs. Go and boil your bottoms, you sons of a silly person. I blow my nose at you, so-called 'Arthur King,' you and all your silly English K-nig-hts.")

# 3 secondary seeds 
hamm = User.create(
  name: 'Jon Hamm',
  photo_url: 'http://www.ohniww.org/wp-content/uploads/2013/09/jon-hamm-voice.jpg',
  is_logged_in: false) 
# posts in Atlanta and SF only 

Post.create(city: atlanta, user: hamm, title: "Hello.", description: "NCR is opening up its campus — to an extent — to the public, especially the Georgia Tech students it covets. The main lobby is open to the public and includes a coffee shop and event space.")
Post.create(city: sanfran, user: hamm, title: "Beltline Update", description: "Atlanta Beltline Southeast Study Group Public Meeting tonight (Mon 2/12) at Dad's Garage from 6-7:30. Come out and give input for the upcoming development of the southeast section of the Beltline!")

black = User.create(
  name: 'Jack Black',
  photo_url: 'http://static.tvtropes.org/pmwiki/pub/images/2010_894.jpg',
  is_logged_in: false)
# comments in SF and London only 

Post.create(city: sanfran, user: black, title: "Heck NO!", description: "NCR is opening up its campus — to an extent — to the public, especially the Georgia Tech students it covets. The main lobby is open to the public and includes a coffee shop and event space.")
Post.create(city: london, user: black, title: "Heck...maybe?", description: "NCR is opening up its campus — to an extent — to the public, especially the Georgia Tech students it covets. The main lobby is open to the public and includes a coffee shop and event space.")

riri = User.create(
  name: 'Rihanna',
  photo_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Rihanna%2C_2012.jpg/465px-Rihanna%2C_2012.jpg',
  is_logged_in: false)
# comments in Atlanta and London only 

Post.create(city: atlanta, user: riri, title: "To my fans in ATL", description: "Like many Silicon Valley companies, NCR offers a plethora of services that incentivize employees to stay on-campus during the workday — and after.")
Post.create(city: london, user: riri, title: "To my British fans", description: "Like many Silicon Valley companies, NCR offers a plethora of services that incentivize employees to stay on-campus during the workday — and after.")