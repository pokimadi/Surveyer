#This is the easiest format I can do.
#TO run the file type ruby and filename.
#Hopefully makes it a bit easier

Header = { "ad" => "01","ap" => "02",
          "ltw" => "03","ltad" => "04",
          "ltap" => "05","ltcp" => "06",
          "ltb" => "07","rtw" => "08", 
          "rtad" => "09", "rtap" => "10",
          "rtcp" => "11", "rtb" => "12", "rtltw" => "13" }
          
#Replace Header in Temp Header.
tempHeader = ["ad","ap", "ltw", "ltad", "ltap", "ltcp", "ltb","rtw", "rtad", "rtap", "rtcp", "rtb","rtltw" ]
@map = {}
for i in 0..tempHeader.size-1
  @map[i] = tempHeader[i]
end
p @map
choices= {
c1:[ ["current","current","current","current","current","current","current","current","current","current","current","current","current"],
["N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","Yes","N/A","Yes","N/A","N/A"],
["N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","40","N/A","40","N/A","N/A"],
["N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","0"],
["N/A","N/A","N/A","N/A","N/A","N/A","N/A","0","0","0","0","0","0"],
["N/A","N/A","current","current","current","current","current","current","current","current","current","current","0.5*current"],
["N/A","N/A","current","current","current","current","current","current","current","current","current","current","0.5*current"],
["N/A","N/A","Yes","Yes","Yes","Yes","Yes","N/A","N/A","N/A","N/A","N/A","Yes"],
["N/A","N/A","N/A","N/A","N/A","N/A","N/A","Yes","Yes","Yes","Yes","Yes","Yes"],
["N/A","N/A","N/A","current","N/A","current","N/A","N/A","N/A","N/A","N/A","N/A","N/A"],
["current","current","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A"],
["N/A","N/A","current","current","current","current","current","current","current","current","current","current","current"],
["current","current","current","current","current","current","current","current","current","current","current","current","current"],
["N/A","N/A","current","current","current","current","current","current","current","current","current","current","current"],
["current","current","current","current","current","current","current","current","current","current","current","current","current"]
],
c2: [
 ["1.75*current",	"1.75*current",	"current",	"1.75*current_car + 1.3*current_transit",	"1.5*current_car + 1.2*current_transit",	"current",	"1.2*current",	"1.2*current",	"current",	"current",	"current", "1.2*current",	"1.2*current" ],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"No",	"N/A", "Yes",	"N/A",	"N/A"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"8",	"N/A",	"120",	"N/A",	"N/A"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"0.5*current"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"0",	"current",	"0.5*current",	"current",	"0",	"0.5*current"],
["N/A",	"N/A",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"1.5*current"],
["N/A",	"N/A",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current"],
["N/A",	"N/A",	"No",	"No",	"Yes",	"No",	"Yes",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"No"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"No",	"No",	"No",	"Yes",	"Yes",	"No"]
],
c3: [
 ["1.75*current",	"1.75*current",	"current",	"1.75*current_car + 1.3*current_transit",	"1.5*current_car + 1.2*current_transit",	"current",	"1.2*current",	"1.2*current",	"current",	"current",	"current", "1.2*current",	"1.2*current" ],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"No",	"N/A", "Yes",	"N/A",	"N/A"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"8",	"N/A",	"120",	"N/A",	"N/A"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"0.5*current"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"0",	"current",	"0.5*current",	"current",	"0",	"0.5*current"],
["N/A",	"N/A",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"1.5*current"],
["N/A",	"N/A",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current"],
["N/A",	"N/A",	"No",	"No",	"Yes",	"No",	"Yes",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"No"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"No",	"No",	"No",	"Yes",	"Yes",	"No"]
],
c4: [
 ["1.75*current",	"1.75*current",	"current",	"1.75*current_car + 1.3*current_transit",	"1.5*current_car + 1.2*current_transit",	"current",	"1.2*current",	"1.2*current",	"current",	"current",	"current", "1.2*current",	"1.2*current" ],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"No",	"N/A", "Yes",	"N/A",	"N/A"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"8",	"N/A",	"120",	"N/A",	"N/A"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"0.5*current"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"0",	"current",	"0.5*current",	"current",	"0",	"0.5*current"],
["N/A",	"N/A",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"1.5*current"],
["N/A",	"N/A",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current"],
["N/A",	"N/A",	"No",	"No",	"Yes",	"No",	"Yes",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"No"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"No",	"No",	"No",	"Yes",	"Yes",	"No"]
],
c5: [
 ["1.75*current",	"1.75*current",	"current",	"1.75*current_car + 1.3*current_transit",	"1.5*current_car + 1.2*current_transit",	"current",	"1.2*current",	"1.2*current",	"current",	"current",	"current", "1.2*current",	"1.2*current" ],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"No",	"N/A", "Yes",	"N/A",	"N/A"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"8",	"N/A",	"120",	"N/A",	"N/A"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"0.5*current"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"0",	"current",	"0.5*current",	"current",	"0",	"0.5*current"],
["N/A",	"N/A",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"1.5*current"],
["N/A",	"N/A",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current"],
["N/A",	"N/A",	"No",	"No",	"Yes",	"No",	"Yes",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"No"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"No",	"No",	"No",	"Yes",	"Yes",	"No"]
],
c6: [
 ["1.75*current",	"1.75*current",	"current",	"1.75*current_car + 1.3*current_transit",	"1.5*current_car + 1.2*current_transit",	"current",	"1.2*current",	"1.2*current",	"current",	"current",	"current", "1.2*current",	"1.2*current" ],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"No",	"N/A", "Yes",	"N/A",	"N/A"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"8",	"N/A",	"120",	"N/A",	"N/A"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"0.5*current"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"0",	"current",	"0.5*current",	"current",	"0",	"0.5*current"],
["N/A",	"N/A",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"1.5*current"],
["N/A",	"N/A",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current",	"current"],
["N/A",	"N/A",	"No",	"No",	"Yes",	"No",	"Yes",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"No"],
["N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"N/A",	"No",	"No",	"No",	"Yes",	"Yes",	"No"]
]
}



def getId row, col
   # if col < 10
     # col =  "0"+col.to_s
   # end
   #p @map[col-1]
   ""+row.to_s + "" +  Header[@map[col-1]]     #col.to_s
end

ret ="{\n" 
choices.each do |key, data|
  ret +=  "\t'#{key}' : [\n"
  for row in 0..data.size- 1
    for col in 0..data[row].size- 1
      id =  getId row+1, col+1
      if data[row][col] == "No"  || data[row][col] == "Yes"
        type = 'R'
        ret = ret + "\t\t{ id: '#{id}', type:'#{type}', value:'#{data[row][col]}' },\n"  
      elsif data[row][col].match(/^(\d*)$/)
       type = 'R'
       ret = ret + "\t\t{ id: '#{id}', type:'#{type}', value:'#{$1}' },\n"  
      elsif data[row][col].match(/^\s*([\d\.]+)\*\w+\s*$/)
       type = 'M'
       ret = ret + "\t\t{ id: '#{id}', type:'#{type}', value:'#{$1}' },\n"  
      elsif data[row][col].match(/^\s*([\d\.]+)\*\w+\s*\+\s*([\d\.]+)\*\w+\s*$/)
        car = $1
        type = 'S'
        tran = $2
        ret = ret + "\t\t{ 'id': #{id}, 'type':#{type}, 'car':#{$1}, 'tran': #{$2} },\n"
      end 
         
    end
  end
  ret = ret.slice(0..-3) + "\n\t],\n"
end
ret = ret.slice(0..-3) +  "\n}\n"
print ret 
