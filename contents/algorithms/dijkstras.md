---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dijkstra's algorithm

Dijkstra's algorithm is an algorithm to find the shortest path in a weighted graph, which may represent for example, road networks.

![Dijkstra's algorithm to find the shortest path between _a_ and _b_.](../../static/img/dijkstra_animation.gif)

> Dijkstra's algorithm to find the shortest path between *a* and *b*.

Breadth-first search will find you the path with the fewest segments. What if you want the fastest path instead? You can do that fastest with a different algorithm called Dijkstra's algorithm.

## Working with Dijkstra's algorithm

Let's say we have the following graph.

![Graph image](../../static/img/dijkstras-algorithm-graph-1.png)

Each segment has a travel time in minutes. You'll use Dijkstra's algorithm to go from start to finish in the shortest possible time.

If you ran breath-first search on this graph, you'd get this shortest path.

![Graph image - using BFS](../../static/img/dijkstras-algorithm-graph-bfs.png)

But that path takes 8 minutes. Let's see if you can find a path that takes less time! There are four steps to Dijkstra's algorithm:

1. Find the "cheapest" node. The node you can get to in least amount of time.
2. Update the cost of the neighbors of this node.
3. Repeat until you've done this for every node in the graph.
4. Calculate the final path.

**Step 1**: Find the cheapest node. You're standing at the start, wondering if you should go to node A or node B. How long does it take to get to each node?

![Graph image - using BFS](../../static/img/dijkstras-algorithm-step-1.png)

It takes 7 minutes to get to node A and 2 minutes to get to node B.
The rest of the nodes, you don't know yet.

Because you don't know how long it takes to get to finish yet, you put down infinity. Node B is the closest node... it's 2 minutes away.

![Graph image - using BFS](../../static/img/dijkstras-algorithm-table-1.png)

**Step 2**: Calculate how long it takes to get to all of node B's neighbors by following an edge from B.

![Graph image - using BFS](../../static/img/dijkstras-algorithm-graph-table-2.png)

You just found a shorter path to node A! It used to take 7 minutes to get to node A.

But if you go through node B, there's a path that only takes 5 minutes.

When you find a shorter path for a neighbor of B, update its cost. In this case, you found

- A shorter path to A (down from 7 minutes to 5 minutes)
- A shorter path to the finish (down from infinity to 7 minutes)

**Step 3**: Repeat!

At the end the final path should be:

![Graph image - example result ](../../static/img/dijkstras-algorithm-graph-result.png)

Breadth-first search wouldn't have found this as the shortest path,
because it has three segments. And there's a way to get from the start to the finish
in two segments.

![Graph image - using BFS final result](../../static/img/dijkstras-algorithm-graph-bfs-result.png)

## Terminology

When you work with Dijktra's algorithm, each edge in the graph has a number associated with it and it's called **weights**.

A graph with weights is called a weighted graph. A graph without weights is called unweighted graph.

To calculate the shortest path in an unweighted graph, use breath-first search. To calculate the shortest path in a weighted graph, use Dijstra's algorithm.

Graph can also have cycles.

It means you can start at a node, travel around, and end up at the same node. Suppose you're trying to find the shortest path in this graph that has a cycle.

Would it make sense to follow the cycle? Well, you can use the path that avoids the cycle.

Or you can follow the cycle.

You end up at node A either way, but the cycle adds more weigh. You could even follow the cycle twice if you wanted.

But every time you follow the cycle, you're just adding 8 to the total weight. So following the cycle will never give you the shortest path.

An undirected graph means that both nodes point each other. That's a cycle!

Dijktra's algorithm only works on **graphs with no cycles**, or on graphs with a positive weight cycle.

## Negative-weight edges

You can't use Dijkstra's algorithm if you have negative-weight edges.

Negative-weight edges break the algorithm.

Since Dijkstra follows a Greedy Approach, once a node is marked as visited it cannot be reconsidered even if there
is another path with less cost or distance. This issue arises only if there exists
a negative weight or edge in the graph.

If you want to find the shortest path in a graph that has negative-weight edges, there's an algorithm for that!
It's called the Bellman-Ford algorithm.

## Implementation

Let's see the implemention of the Dijkstra's algorithm:

Graph for the example:

![Graph image - implementation ](../../static/img/dijkstras-algoritm-graph-implementaion.png)

Code:

<Tabs>
<TabItem value="js" label="JavaScript">

```js
// Graph initialisation
const graph = {};

// Weight representation
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["fin"] = 1;

graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;

graph["fin"] = {};

// Cost for each node
const infinity = Number.POSITIVE_INFINITY;
const costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = infinity;

// Parents
const parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;

const processed = [];

function findLowestCostNode(costs) {
  let lowestCost = infinity;
  let lowestCostNode = null;
  for (let node in costs) {
    const cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

function dijkstras(costs) {
  let node = findLowestCostNode(costs);
  while (node !== null) {
    const cost = costs[node];
    const neighbors = graph[node];
    for (let n in neighbors) {
      const newCost = cost + neighbors[n];
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    }
    processed.push(node);
    node = findLowestCostNode(costs);
  }
}

dijkstras(costs);
```

</TabItem>
<TabItem value="py" label="Python">

```py
# Graph initialisation
graph = {}

# Weight representation
graph['start'] = {}
graph['start']['a'] = 6
graph['start']['b'] = 2

graph['a'] = {}
graph['a']['fin'] = 1

graph['b'] = {}
graph['b']['a'] = 3
graph['b']['fin'] = 5

graph['fin'] = {}

# Cost for each node
infinity = float('inf')
costs = {}
costs['a'] = 6
costs['b'] = 2
costs['fin'] = infinity

# Parents
parents = {}
parents['a'] = 'start'
parents['b'] = 'start'
parents['fin'] = None


processed =  []

def findLowestCostNode(costs):
            lowestCost = float('inf')
            lowestCostNode = None
            for node in costs:
                cost = costs[node]
                if cost < lowestCost and node not in processed:
                   lowestCost = cost
                   lowestCostNode = node
            return lowestCostNode

def dijkstras(costs):
        node = findLowestCostNode(costs)
        while node is not None:
            cost = costs[node]
            neighbors = graph[node]
            for n in neighbors.keys():
                newCost = cost + neighbors[n]
                if costs[n] > newCost:
                    costs[n] = newCost
                    parents[n] = node
            processed.append(node)
            node = findLowestCostNode(costs)

dijkstras(costs)
```

</TabItem>
</Tabs>

## Recap

- Breadth-first search is used to calculate the shortest path for an unweighted graph.
- Dijktra's algorithm is used to calculate the shortest path for a weighted graph.
- Dijktra's algorithm works when all the weights are positive.
- If you have negative weights, use the Bellman-Ford algorithm.
