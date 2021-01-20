import networkx as nx
import matplotlib.pyplot as plt
import pygraphviz as pgv

def main():
  g1 = pgv.AGraph()
  print("connecting state borders")
  process_states(g1)

  print("preparing image")
  g1.layout(prog="neato")
  g1.draw('neato.png')
  print("finished")

def add_neighbors(g1, state, neighbors):
  n1 = get_state_node(g1, state)
  if neighbors is not None:
    neighbors = neighbors.strip()
    neighbors = neighbors.split(",")
    for neighbor in neighbors:
      n2 = get_state_node(g1, neighbor)

      if not g1.has_edge(n1, n2):
        g1.add_edge(n1, n2)

def get_state_node(g1, name):
  name = name.strip()
  pos = state_centers()[name]
  pos = f"{-pos[1]},{pos[0]}"
  if not g1.has_node(name):
    g1.add_node(name, pos=pos)
  return g1.get_node(name)

def process_states(g1):
  state = "Alabama"
  neighbors = "Florida, Georgia, Mississippi, Tennessee"
  add_neighbors(g1, state, neighbors)

  state = "Alaska"
  neighbors = None
  add_neighbors(g1, state, neighbors)

  state = "Arizona"
  neighbors = "California, Colorado, Nevada, New Mexico, Utah"
  add_neighbors(g1, state, neighbors)

  state = "Arkansas"
  neighbors = "Louisiana, Mississippi, Missouri, Oklahoma, Tennessee, Texas"
  add_neighbors(g1, state, neighbors)

  state = "California"
  neighbors = "Arizona, Nevada, Oregon"
  add_neighbors(g1, state, neighbors)

  state = "Colorado"
  neighbors = "Arizona, Kansas, Nebraska, New Mexico, Oklahoma, Utah, Wyoming"
  add_neighbors(g1, state, neighbors)

  state = "Connecticut"
  neighbors = "Massachusetts, New York, Rhode Island"
  add_neighbors(g1, state, neighbors)

  state = "Delaware"
  neighbors = "Maryland, New Jersey, Pennsylvania"
  add_neighbors(g1, state, neighbors)

  state = "Florida"
  neighbors = "Alabama, Georgia"
  add_neighbors(g1, state, neighbors)

  state = "Georgia"
  neighbors = "Alabama, Florida, North Carolina, South Carolina, Tennessee"
  add_neighbors(g1, state, neighbors)

  state = "Hawaii"
  neighbors = None
  add_neighbors(g1, state, neighbors)

  state = "Idaho"
  neighbors = "Montana, Nevada, Oregon, Utah, Washington, Wyoming"
  add_neighbors(g1, state, neighbors)

  state = "Illinois"
  neighbors = "Indiana, Iowa, Michigan, Kentucky, Missouri, Wisconsin"
  add_neighbors(g1, state, neighbors)

  state = "Indiana"
  neighbors = "Illinois, Kentucky, Michigan, Ohio"
  add_neighbors(g1, state, neighbors)

  state = "Iowa"
  neighbors = "Illinois, Minnesota, Missouri, Nebraska, South Dakota, Wisconsin"
  add_neighbors(g1, state, neighbors)

  state = "Kansas"
  neighbors = "Colorado, Missouri, Nebraska, Oklahoma"
  add_neighbors(g1, state, neighbors)

  state = "Kentucky"
  neighbors = "Illinois, Indiana, Missouri, Ohio, Tennessee, Virginia, West Virginia"
  add_neighbors(g1, state, neighbors)

  state = "Louisiana"
  neighbors = "Arkansas, Mississippi, Texas"
  add_neighbors(g1, state, neighbors)

  state = "Maine"
  neighbors = "New Hampshire"
  add_neighbors(g1, state, neighbors)

  state = "Maryland"
  neighbors = "Delaware, Pennsylvania, Virginia, West Virginia"
  add_neighbors(g1, state, neighbors)

  state = "Massachusetts"
  neighbors = "Connecticut, New Hampshire, New York, Rhode Island, Vermont"
  add_neighbors(g1, state, neighbors)

  state = "Michigan"
  neighbors = "Illinois, Indiana, Minnesota, Ohio, Wisconsin"
  add_neighbors(g1, state, neighbors)

  state = "Minnesota"
  neighbors = "Iowa, Michigan, North Dakota, South Dakota, Wisconsin"
  add_neighbors(g1, state, neighbors)

  state = "Mississippi"
  neighbors = "Alabama, Arkansas, Louisiana, Tennessee"
  add_neighbors(g1, state, neighbors)

  state = "Missouri"
  neighbors = "Arkansas, Illinois, Iowa, Kansas, Kentucky, Nebraska, Oklahoma, Tennessee"
  add_neighbors(g1, state, neighbors)

  state = "Montana"
  neighbors = "Idaho, North Dakota, South Dakota, Wyoming"
  add_neighbors(g1, state, neighbors)

  state = "Nebraska"
  neighbors = "Colorado, Iowa, Kansas, Missouri, South Dakota, Wyoming"
  add_neighbors(g1, state, neighbors)

  state = "Nevada"
  neighbors = "Arizona, California, Idaho, Oregon, Utah"
  add_neighbors(g1, state, neighbors)

  state = "New Hampshire"
  neighbors = "Maine, Massachusetts, Vermont"
  add_neighbors(g1, state, neighbors)

  state = "New Jersey"
  neighbors = "Delaware, New York, Pennsylvania"
  add_neighbors(g1, state, neighbors)

  state = "New Mexico"
  neighbors = "Arizona, Colorado, Oklahoma, Texas, Utah"
  add_neighbors(g1, state, neighbors)

  state = "New York"
  neighbors = "Connecticut, Massachusetts, New Jersey, Pennsylvania, Rhode Island, Vermont"
  add_neighbors(g1, state, neighbors)

  state = "North Carolina"
  neighbors = "Georgia, South Carolina, Tennessee, Virginia"
  add_neighbors(g1, state, neighbors)

  state = "North Dakota"
  neighbors = "Minnesota, Montana, South Dakota"
  add_neighbors(g1, state, neighbors)

  state = "Ohio"
  neighbors = "Indiana, Kentucky, Michigan, Pennsylvania, West Virginia"
  add_neighbors(g1, state, neighbors)

  state = "Oklahoma"
  neighbors = "Arkansas, Colorado, Kansas, Missouri, New Mexico, Texas"
  add_neighbors(g1, state, neighbors)

  state = "Oregon"
  neighbors = "California, Idaho, Nevada, Washington"
  add_neighbors(g1, state, neighbors)

  state = "Pennsylvania"
  neighbors = "Delaware, Maryland, New Jersey, New York, Ohio, West Virginia"
  add_neighbors(g1, state, neighbors)

  state = "Rhode Island"
  neighbors = "Connecticut, Massachusetts, New York"
  add_neighbors(g1, state, neighbors)

  state = "South Carolina"
  neighbors = "Georgia, North Carolina"
  add_neighbors(g1, state, neighbors)

  state = "South Dakota"
  neighbors = "Iowa, Minnesota, Montana, Nebraska, North Dakota, Wyoming"
  add_neighbors(g1, state, neighbors)

  state = "Tennessee"
  neighbors = "Alabama, Arkansas, Georgia, Kentucky, Mississippi, Missouri, North Carolina, Virginia"
  add_neighbors(g1, state, neighbors)

  state = "Texas"
  neighbors = "Arkansas, Louisiana, New Mexico, Oklahoma"
  add_neighbors(g1, state, neighbors)

  state = "Utah"
  neighbors = "Arizona, Colorado, Idaho, Nevada, New Mexico, Wyoming"
  add_neighbors(g1, state, neighbors)

  state = "Vermont"
  neighbors = "Massachusetts, New Hampshire, New York"
  add_neighbors(g1, state, neighbors)

  state = "Virginia"
  neighbors = "Kentucky, Maryland, North Carolina, Tennessee, West Virginia"
  add_neighbors(g1, state, neighbors)

  state = "Washington"
  neighbors = "Idaho, Oregon"
  add_neighbors(g1, state, neighbors)

  state = "West Virginia"
  neighbors = "Kentucky, Maryland, Ohio, Pennsylvania, Virginia"
  add_neighbors(g1, state, neighbors)

  state = "Wisconsin"
  neighbors = "Illinois, Iowa, Michigan, Minnesota"
  add_neighbors(g1, state, neighbors)

  state = "Wyoming"
  neighbors = "Colorado, Idaho, Montana, Nebraska, South Dakota, Utah"
  add_neighbors(g1, state, neighbors)

def state_centers():
  return {
    "Alabama": [32.7794, 86.8287],
    "Alaska": [64.0685, 152.2782],
    "Arizona": [34.2744, 111.6602],
    "Arkansas": [34.8938, 92.4426],
    "California": [37.1841, 119.4696],
    "Colorado": [38.9972, 105.5478],
    "Connecticut": [41.6219, 72.7273],
    "Delaware": [38.9896, 75.5050],
    "District of Columbia": [38.9101, 77.0147],
    "Florida": [28.6305, 82.4497],
    "Georgia": [32.6415, 83.4426],
    "Hawaii": [20.2927, 156.3737],
    "Idaho": [44.3509, 114.6130],
    "Illinois": [40.0417, 89.1965],
    "Indiana": [39.8942, 86.2816],
    "Iowa": [42.0751, 93.4960],
    "Kansas": [38.4937, 98.3804],
    "Kentucky": [37.5347, 85.3021],
    "Louisiana": [31.0689, 91.9968],
    "Maine": [45.3695, 69.2428],
    "Maryland": [39.0550, 76.7909],
    "Massachusetts": [42.2596, 71.8083],
    "Michigan": [44.3467, 85.4102],
    "Minnesota": [46.2807, 94.3053],
    "Mississippi": [32.7364, 89.6678],
    "Missouri": [38.3566, 92.4580],
    "Montana": [47.0527, 109.6333],
    "Nebraska": [41.5378, 99.7951],
    "Nevada": [39.3289, 116.6312],
    "New Hampshire": [43.6805, 71.5811],
    "New Jersey": [40.1907, 74.6728],
    "New Mexico": [34.4071, 106.1126],
    "New York": [42.9538, 75.5268],
    "North Carolina": [35.5557, 79.3877],
    "North Dakota": [47.4501, 100.4659],
    "Ohio": [40.2862, 82.7937],
    "Oklahoma": [35.5889, 97.4943],
    "Oregon": [43.9336, 120.5583],
    "Pennsylvania": [40.8781, 77.7996],
    "Rhode Island": [41.6762, 71.5562],
    "South Carolina": [33.9169, 80.8964],
    "South Dakota": [44.4443, 100.2263],
    "Tennessee": [35.8580, 86.3505],
    "Texas": [31.4757, 99.3312],
    "Utah": [39.3055, 111.6703],
    "Vermont": [44.0687, 72.6658],
    "Virginia": [37.5215, 78.8537],
    "Washington": [47.3826, 120.4472],
    "West Virginia": [38.6409, 80.6227],
    "Wisconsin": [44.6243, 89.9941],
    "Wyoming": [42.9957, 107.5512]
  }

if __name__ == "__main__":
  main()

