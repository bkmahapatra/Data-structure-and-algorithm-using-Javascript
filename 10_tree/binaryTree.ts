class Bnode<T> {
  data: T;
  left: Bnode<T> | null;
  right: Bnode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export default Bnode;

/*         
                  1
               /     \
              2       3
            /   \       \
           4     5       6
*/
