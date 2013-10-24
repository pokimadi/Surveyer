class Station
  include Mongoid::Document
  field :name, type: String
  field :zone, type: Integer
  index({ name: 1}, { unique: true })
end
