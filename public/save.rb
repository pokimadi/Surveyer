 begin
    data = File.new("data.txt", "r")
    #file = File.open("newT.html", "w")
    while (line = data.gets)
        line.gsub!(/(.*)\s(\d+)/) { |s|
            puts "link: #{line}"
            puts "****** #{s}"
            puts " 1 #{$1} 2 #{$2}"
        }
    end
    data.close
  rescue => err
    puts "Exception: #{err}"
  end