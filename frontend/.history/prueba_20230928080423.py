class Vertex:
    def __init__(self, id, data):
        self.id = id
        self.data = data
        self.neigbhbourns = []
        self.padre = None
        self.distancia = float('inf')
        self.visitado = False
        
    def agregar_vecino(self, vertice, distancia):
        if vertice not in self.neigbhbourns:
            self.neigbhbourns.append([vertice, distancia])
    def __str__(self) -> str:
        return f"{self.id}"

class Graph:
    def __init__(self):
        self.matrix = []
        self.list_adjacent = []
        self.graph_dict = {}
    
    def add_vertex(self, id, data):
        if not self.search_vertex(id):
            self.graph_dict[id] = Vertex(id, data)
            return 
        print("Ya se encuentra ese id registrado")
    
    def search_vertex(self, id):
        if id in self.graph_dict:
            return True
        return False
    
    def get_vertex(self, id):
        return self.graph_dict.copy().get(id)

    def imprimir_gráfica(self):
        for v, item in self.graph_dict.items():
            print(f"La distancia del vertice {str(item.id)} es {str(item.distancia)} Llegando desde {item.padre}")
    
    def camino(self, a, b):
        camino = []
        actual = b
        while actual != None:
            camino.insert(0, actual.id)
            actual = self.graph_dict[actual.id].padre
        return [camino, self.graph_dict[b.id].distancia]
            
    def minium(self, no_visitado):
        if len(no_visitado) > 0:
            m = self.graph_dict[no_visitado[0]].distancia
            v = self.graph_dict[no_visitado[0]]
            for i in no_visitado:
                if m > self.graph_dict[i].distancia:
                    m = self.graph_dict[i].distancia
                    v = self.graph_dict[i]
            return v
    def dijktra(self, vertice_init):
        if vertice_init.id in self.graph_dict:
            self.graph_dict[vertice_init.id].distancia = 0
            actual = vertice_init
            no_visitados = [i for i in self.graph_dict]
        
            while len(no_visitados):
                for vecino in self.graph_dict[actual.id].neigbhbourns:
                    if self.graph_dict[vecino[0].id].visitado == False:
                        if self.graph_dict[actual.id].distancia + vecino[1] < self.graph_dict[vecino[0].id].distancia:
                            self.graph_dict[vecino[0].id].distancia = self.graph_dict[actual.id].distancia + vecino[1]
                            self.graph_dict[vecino[0].id].padre = actual
                
                self.graph_dict[actual.id].visitado = True
                no_visitados.remove(actual.id)
                
                actual = self.minium(no_visitados)

    def print(self):
        for key, value in self.graph_dict.items():
            print(key, [i.id for i in value.neigbhbourns])
    
class Edges:
    def __init__(self) -> None:
        self.dict_edges = {}
    
    def add_edge(self, v1: Vertex, v2: Vertex, un_direct = False, weight = 0):
        if v1 in self.dict_edges:
            self.dict_edges[v1].append(v2)
        else:
            self.dict_edges[v1] = [v2]
        v1.agregar_vecino(v2, weight)
        
        if un_direct:
            if v2 in self.dict_edges:
                    self.dict_edges[v2].append(v1)
            else:
                self.dict_edges[v2] = [v1]
            v2.agregar_vecino(v1, weight)
        
    def get_edges(self):
        return self.dict_edges.copy()

g = Graph()
edge = Edges()

def build_graph():
    g = Graph()
    edge = Edges()

    edges = [
        ('a', 'b', 5, False),
        ('b', 'c', 8, False),
        ('c', 'a', 7, False),
        ('c', 'e', 20, False),
        ('e', 'd', 10, True),
        ('d', 'b', 4, True),
        ('d', 'f', 3, True),
    ]
    for index, element in enumerate(('a', 'b', 'c', 'd', 'e', 'f')):
        g.add_vertex(element, index)

    for v1, v2, peso, boolean in edges:
        edge.add_edge(v1 = g.get_vertex(v1), v2 = g.get_vertex(v2), weight= peso, un_direct=boolean)
    
    #g.print()
    for key, value in edge.get_edges().items():
        print(key, [i.id for i in value])
    
    
    g.dijktra(g.get_vertex('b'))
    print("\nLos valores de la gráfica son los siguientes: ")
    g.imprimir_gráfica()

    for key, value in g.graph_dict.items():
        print(key ,value.padre, value.distancia)


if __name__ == "__main__":
    build_graph()
    