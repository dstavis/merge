import Space from "./space"
class BoardState {
  constuctor(data) { // rows, columns, spaces
    this.rows = data.rows;
    this.columns = data.columns;
    this.spaces = data.spaces || this.generateSpaces();
  }

  numberOfSpaces() {
    return this.columns * this.rows;
  }

  getSpaces() {
    return this.spaces
  }

  static generateSpaces() {
    let spaces = Array.from({length: this.numberOfSpaces()}).map( 
      (value, index) => {
        return new Space({
            id: index + 1,
            coordinates: [Math.floor(index / 10) + 1, index % 10 + 1]
          })
        }
      )

    return spaces;
  }

}

export default BoardState;