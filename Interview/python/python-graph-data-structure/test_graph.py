from graph import Graph

g1 = Graph()
g1.add_node("Washington")
g1.add_node("Oregon")
g1.add_node("California")
g1.add_node("Idaho")

g1.add_edge("Washington", "Idaho")
g1.add_edge("Washington", "Oregon")
g1.add_edge("Oregon", "Idaho")
g1.add_edge("Oregon", "California")

for n1 in g1.nodes:
  for n2 in g1.nodes:
    if n1 is not n2:
      if n2 in g1.get_neighbors(n1):
        print(f'Yes, {n1} and {n2} are connected')
      else:
        print(f'No, {n1} and {n2} are not connected')
  print()

