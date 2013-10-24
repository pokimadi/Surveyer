json.array!(@stations) do |station|
  json.extract! station, :name, :zone
  json.url station_url(station, format: :json)
end
