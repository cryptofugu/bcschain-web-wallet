import insight from 'libs/nodes/insight'
import bcsInfo from 'libs/nodes/bcsInfo'

let nodeConfigs = {
  insight,
  bcsInfo
}

const defaultNodeId = 'bcsInfo'
let currentNodeId = defaultNodeId

export default {
  currentNode() {
    return nodeConfigs[currentNodeId]
  },

  setNodeId(nodeId) {
    if (nodeConfigs[nodeId]) {
      currentNodeId = nodeId
    }
  }
}
