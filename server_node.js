class ServerNode {

    constructor(id) {
        this.id = id
        this.keysMap = new Map()
        this.partitionToKeys = new Map();
    }
    get(key) {
        return this.keysMap.get(key)
    }
}