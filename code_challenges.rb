# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# create the function that will take in an array
# use the selector method to select what you want from the array 
# call a method that will sort the numbers from least to greatest
def only_odds array
    array_nums = array.select { |value| value.is_a?(Integer) }
    odd_numbers = array_nums.select { |value| value.odd? }
    odd_numbers.sort!
end

p only_odds fullArr1
p only_odds fullArr2
# Expected output: [-9, 7, 9, 199]
# Expected output: [-823, 7, 23]





# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
letter_a = 'a'
def letter_container (array, letter)
    selected_array = array.select { |value| value.include?(letter) }
end
p letter_container(beverages_array, letter_o)
p letter_container(beverages_array, letter_a)
# Expected output: ['coffee', 'soda water']

# Expected output: ['tea', 'soda water']





# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'
def noVowels string
    string.delete "aeiouAEIOU"
end
p noVowels album1
p noVowels album2
p noVowels album3
# i love ruby


# --------------------4) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
class Bike
    attr_accessor :model, :wheels, :current_speed

    def initialize model
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def get_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster speed_up
        @current_speed = @current_speed + speed_up
    end

    def brake speed_down
        @current_speed = @current_speed - speed_down
        if @current_speed < 0
            @current_speed = 0
        end
    end
end
jr_bike = Bike.new "GT"

jr_bike.pedal_faster 10
p jr_bike.get_info
jr_bike.brake 15
p jr_bike.get_info
# cmckcc