declare class SpriteAnimation {
  constructor(
    canvas: any,
    spriteName: any,
    flipSprite?: boolean,
    scale?: number,
    randomOffset?: boolean,
    speed?: number,
    loop?: boolean
  )
  canvas: any
  speed: number
  flipSprite: boolean
  loop: boolean
  scale: number
  randomOffset: boolean
  spriteSheet: any
  currentFrameNumber: number
  animationRunning: boolean
  get targetSpriteWidth(): number
  get canvasWidth(): any
  get canvasHeight(): any
  get spriteFrameCount(): any
  drawCurrentFrame(): void
  startAnimation(finishCallback: any): false | undefined
  finishCallback: any
  animationStartTimestamp: number | undefined
  tickAnimation(): void
  updateOffset(): void
  offsetX: number | undefined
  offsetY: number | undefined
  FPS: number
}
//# sourceMappingURL=spriteAnimation.d.ts.map
