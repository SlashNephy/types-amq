declare class NexusCityCanvasElement extends AnimationRendorElement {
  constructor(ctx: any, x: any, y: any, cityWidth: any, image: any)
  cityWidth: any
  image: any
  get cityScale(): number
  targetWidth: number | undefined
  targetHeight: number | undefined
  STANDARD_CITY_WIDTH: number
}
declare class NexusCityCanvasElementInfiniteSlide extends NexusCityCanvasElement {
  constructor(ctx: any, x: any, y: any, cityWidth: any, image: any, speed: any)
  speed: any
  offset: number
  draw(deltaTime: any): void
}
//# sourceMappingURL=nexusCityCanvasElement.d.ts.map
