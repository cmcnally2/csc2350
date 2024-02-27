class Point {
  private currentPosition: Point
  constructor(x: number, y: number) {
    this.xcoord = x;
    this.ycoord = y;
  }
  public get x() {
    return this.xcoord;
  }
  public get y() {
    return this.ycoord;
  }
}
export default Point;