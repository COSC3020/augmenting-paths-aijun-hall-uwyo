function augmentingPath(graph, start, end) {
    // If start node is same as end node, just return list immediately
    if (start == end) {
        return [start];
    }

    // Queue starting at the start node
    let queue = [[start]];

    // Track visited nodes
    let visited = [start];

    // Explore paths in queue
    while (queue.length > 0) {
        // First path
        let path = queue.shift();

        // Last node in current path
        let node = path[path.length - 1];

        // If node has neighbors, explore each from current node
        if (graph[node]) {
            for (let neighbor in graph[node]) {
                if (visited.includes(neighbor) == false && graph[node][neighbor] > 0) {
                    let newPath = path.concat([neighbor]);

                    // valid path found since neighbor is the end node
                    if (neighbor == end) {
                        return newPath;
                    }

                    queue.push(newPath);
                    visited.push(neighbor);
                }
            }
        }
    }

    // No path found
    return [];
}