# create a player class
class Player
    attr_accessor  :bankroll, :hand
    attr_accessor :name

    def initialize bankroll, name
        @name = name
        @bankroll = bankroll
        @hand = []
    end
    def card_sum
        @hand[0].value + @hand[1].value
    end

end

class Player1 < Player
end



class Computer < Player
end

    # this_player1 = Player1.new 
    # this_player1.name = "Gambit"
    # p this_player1.name
    # this_player1.bankroll = 20
    # p this_player1.bankroll

    # the_computer = Computer.new
    # the_computer.name = "CPU"
    # p the_computer
    # the_computer.bankroll = 10
    # p the_computer.bankroll

    ########### The Deck##########
    class  Deck
    def initialize
        @deck = []
        @suits = ["hearts", "diamonds" ]
    end
end

######### Cards ##########
class Card
    attr_reader :value

    def initialize value
        @value = value
    end
end

def make_deck
    deck = []
    for j in 1..4
        for i in 1..13
            if i == 1
                card_value = 11
            elsif i < 10
                card_value = 1
            elsif i >= 10
                card_value = 10
            end
            deck.push(Card.new(card_value))
        end
    end
    deck.shuffle!
end

# this invokes the make_deck method - same as make_deck() in js
bj_deck = make_deck

player = Player.new 100 , "Khoury"
cpu = Player.new  1000 , "Computer"

p player
# p cpu
# p bj_deck

cpu.hand = bj_deck.pop(2)
player.hand = bj_deck.pop(2)

# p player.card_sum
# p cpu.card_sum
# p player.name

if player.card_sum > cpu.card_sum
    p "#{player.name} is the winner"
    elsif cpu.card_sum <= player.card_sum
        p "Computer wins"
    end

    # inline conditionals


