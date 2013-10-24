# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# begin
# data = File.new(Rails.root.join("public","data.txt"), "r")
# #file = File.open("newT.html", "w")
# while (line = data.gets)
#     line.gsub!(/(.*)\s(\d+)/) { |s|
#         puts " 1 #{$1} 2 #{$2}"
#         Station.find_or_create_by(name: $1, zone: $2)
#     }
# end
# data.close
# rescue => err
# puts "Exception: #{err}"
# end


# begin
# data = File.new(Rails.root.join("public","goPrice.txt"), "r")
# #file = File.open("newT.html", "w")
# puts "starting"
# while (line = data.gets)
#     line.gsub!(/(\d+)\s(\d+)\s([\d\.]+)/) { |s|
#         puts " 1 #{$1} 2 #{$2} 3#{$3}}"
#         GoPrice.create(origin: $1 , dest: $2, price: $3)
#     }
# end
# data.close
# rescue => err
# puts "Exception: #{err}"
# end


