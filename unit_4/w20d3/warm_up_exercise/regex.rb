def pattern_match? word
    # regexp = /^.[aeiou]\.$/i
    august = /colou?r/
            if august.match(word)
            return "#{word}:true"
        end

        # p regexp.match(word)
    "#{word}:false"
end

# p pattern_match? ('color') # true

# p pattern_match? ('colours') # true

# p pattern_match? ('aloha') # false

# p pattern_match? 'hello.' # true
# p pattern_match? '.hi!' # true
# p pattern_match? '?howdy' # true
# p pattern_match? 'aloha' # true
# p pattern_match? 'pffft' # false

def  valid_date? word
    exp = /\d\d-\d\d-\d\d\d\d/
    if exp.match(word)
      true
    else
      false
    end
  end
  
  # Try these examples:
  valid_date?('12-12-2112')
  
  valid_date?('12122112')
  
  valid_date?('12/12/2112'