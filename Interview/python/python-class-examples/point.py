class Point():
  def __init__(self, x=0, y=0):
    self.x = x
    self.y = y
  
  def __str__(self):
    return "({},{})".format(self.x, self.y)
  
  def distance(self, p2=None):
    if p2 is None:
      p2 = Point.ORIGIN
    dx = self.x - p2.x
    dy = self.y - p2.y
    return (dx ** 2 + dy ** 2) ** .5

# It's hard to reference the Point class inside itself
# so let's attach ORIGIN to the Point class after it's
# already been all defined.
Point.ORIGIN = Point()
    
# we can access ORIGIN through the Point class.
print(Point.ORIGIN)

p1 = Point(3,4)
p2 = Point(3,19)

# Distance defaults to calculating how far away a Point is from ORIGIN
print(p1.distance())

# Distance will calculate the distance from one point to another if a
# a second Point is provided as a parameter.
print(p1.distance(p2))
