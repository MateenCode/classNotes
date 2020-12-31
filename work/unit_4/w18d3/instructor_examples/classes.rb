# class House
#     # Instance Variables
#     @this_owner_name = ''
#     @this_address = ''

#     def initialize(zip) 
#         @zip_code = zip
#     end

#     def set_address(address) 
#         @this_address = address
#     end

#     def set_owner(owner) 
#         @this_owner_name = owner
#     end

#     def get_owner
#         @this_owner_name
#     end

#     def get_address
#         @this_address
#     end

#     def open_doors 
#         p "open door"
#     end

#     def close_door
#         p "close door"
#     end


# end

# my_house = House.new 1234
# # your_house = House.new

# my_house.set_address("1621 Tuckerstown")
# p my_house.get_address


# this is our superclass
class Vehicle 

    @@factory = "Tesla"
    attr_accessor :name

    def initialize(odometer, gas_used)
        @this_odometer = odometer
        @this_gas_used = gas_used
    end

    def self.print
        puts "you got a new vehicle"
    end

    def sound_horn
        puts "Beep Beep!"
    end

    def accelerate
        puts "Vroom Vroom"
    end

    def check_mileage
        puts @this_odometer / @this_gas_used
    end

    def manufacturer 
        p "#{@@factory} has manufactured this vehicle"
    end

end

# Sub Classes
class Car < Vehicle 
    def accelerate
       super
       p "my car is fast"
    end
end

class Truck < Vehicle 

end

class Motorcycle < Vehicle 

end


my_car = Car.new(1000, 45)
my_car.accelerate
my_car.check_mileage
my_car.manufacturer
my_car.name = "Madelines Car"
p my_car.name

# my_truck = Truck.new(1000, 45)
# my_truck.manufacturer

# Vehicle.print