
class Muppet 
    # @@name = "curly"

    def initialize(name)
        p "This muppet is called #{name}" 
      p  ["red","blue","green"].sample 
       
    end

end

class Character < Muppet
    end

    this_character = Character.new("curly")
    # this_character.muppet_one