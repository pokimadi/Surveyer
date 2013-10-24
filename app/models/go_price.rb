class GoPrice
  include Mongoid::Document
  field :origin, type: Integer
  field :dest, type: Integer
  field :price, type: Float

end
