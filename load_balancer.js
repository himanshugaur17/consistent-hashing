import createTree from 'functional-red-black-tree'

class LoadBalancer {
    constructor(nodesCount) {
        this.nodesCount = nodesCount
        this.nodes = [...Array(nodesCount).keys()].map(v => new ServerNode(v))
        this.bst = createTree()
        this.partitionToNodeMap = new Map();
    }
    addNode(serverNode) {
        this.nodes.push(serverNode)
    }
    routeRequest(key) {

    }
    get(key) {
        var partition = this.bst.lt(key).next();
        var serverNode = this.partitionToNodeMap.get(partition)
        console.log(serverNode.get(key))
    }
}