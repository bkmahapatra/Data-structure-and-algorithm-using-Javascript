class Bnode<T> {
  key: T;
  left: Bnode<T> | null;
  right: Bnode<T> | null;

  constructor(k: T) {
    this.key = k;
    this.left = null;
    this.right = null;
  }
}

export default Bnode;
