import createTree from 'functional-red-black-tree'

class LoadBalancer {
    constructor(nodesCount) {
        this.nodesCount = nodesCount
        this.nodes = [...Array(nodesCount).keys()].map(v => new ServerNode(v))
        this.bst = createTree()
    }
    addNode(serverNode) {
        this.nodes.push(serverNode)
    }
    routeRequest(key) {

    }
}