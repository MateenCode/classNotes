# Python won't allow you to append an int and a string together implicitly.
# You need to manually convert a number to string in order to append it to
# another string.
#
# Expirement with it in the IPython shell:
# "my favorite number is:" + 2
# "my favorite number is:" + str(2)
#
# The first line tries to add the number 2 to a string. Python will get angry.
# The second line manually converts the number two with the str() function.
#
# a = [1,2,3]
# bad_concat = ""
# for item in a:
#   bad_concat += item
#
# You'll see the code above crash with an error: "TypeError: must be str, not int"
# Fix the error by manually passing the item through the str() function.
#
# good_concat = ""
# for item in a:
#   good_concat += str(item)
# print(good_concat)
def array_to_string(a):
  pass

print(array_to_string([42, 12, 90]))
print(array_to_string([]))
