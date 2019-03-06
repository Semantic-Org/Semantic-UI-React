export default class NodeRegistry {
  constructor() {
    this.nodes = new Map()
  }

  add = (nodeRef, component) => {
    if (this.nodes.has(nodeRef)) {
      const set = this.nodes.get(nodeRef)

      set.add(component)
      return
    }

    this.nodes.set(nodeRef, new Set([component]))
  }

  del = (nodeRef, component) => {
    if (!this.nodes.has(nodeRef)) return

    const set = this.nodes.get(nodeRef)

    if (set.size === 1) {
      this.nodes.delete(nodeRef)
      return
    }

    set.delete(component)
  }

  emit = (nodeRef, callback) => {
    callback(nodeRef, this.nodes.get(nodeRef))
  }
}
