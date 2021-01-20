from collections import defaultdict

class Graph:
  def __init__(self):
    self.nodes = []
    self.edges = defaultdict(list)

  def add_node(self, node):
    self.nodes.append(node)
  
  def number_of_nodes(self):
    return len(self.nodes)

  def add_edge(self, node1, node2, bi_directional=True):
    if (node1 not in self.nodes):
      self.add_node(node1)
    if (node2 not in self.nodes):
      self.add_node(node2)

    # always add an edge from n1 to n2
    self.edges[node1].append(node2)

    # only add an edge from n2 to n1 if it's birectional
    if bi_directional:
      self.edges[node2].append(node1)
    
  def number_of_edges(self):
    return len(self.edges)

  def get_neighbors(self, node):
    if node not in self.nodes:
      return False
    return self.edges[node]
