# class House 

    # instance variables
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
#         p "open_doors"
#     end

#     def close_door
#         p "close_door"
#     end


# end

# my_house = House.new 88799
# your_house = House.new

# my_house.set_address("123,elm street")
# p my_house.get_address

# this is our super class
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
        puts "Beep Beep !"
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


class Car < Vehicle
    def accelerate
        super
        p "I want o be fast lke rick bobby"
    end
end

# my_cars = Car.new("I want ot be fast like rick bobby")
# my_cars.accelerate

class Motorcycle < Vehicle 
end

my_car = Car.new(1000,45)
my_car.accelerate
my_car.sound_horn
my_car.check_mileage
my_car.manufacturer
my_car.name = "The Bat mobile"
p my_car.name

# Vehicle.print

