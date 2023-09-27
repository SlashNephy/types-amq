declare class BaseCanvas {
  constructor($canvas: any)
  $canvas: any
  ctx: any
  width: number
  height: number
  updateCanvasSize(skipRedraw: any): void
  clearCanvas(): void
}
declare class AnimationCanvas extends BaseCanvas {
  translateX: number
  translateY: number
  dragEnabled: boolean
  clickEnabled: boolean
  dragActive: boolean
  scale: number
  content: any[]
  translateChangeListeners: any[]
  inputEventsActive: boolean
  mouseDownListeners: {}[]
  mouseMoveListeners: any[]
  mouseUpListeners: {}[]
  mouseLeaveListeners: any[]
  wheelListeners: any[]
  clickListeners: any[]
  addContent(content: any): void
  removeContent(content: any): void
  populateMouseEvent(event: any): void
  attachDragListener(onDragStart: any, onDrag: any, onDragEnd: any): void
  onDragStartHandler: ((event: any) => void) | null | undefined
  onDragHandler: ((event: any) => void) | null | undefined
  onDragEndHandler: ((event: any) => void) | null | undefined
  onDragLeaveHandler: (() => void) | null | undefined
  disableDrag(): void
  enableDrag(): void
  detatchDragListener(): void
  updateTranslate(x: any, y: any): void
  calculateDefaultTranslate(): {
    x: number
    y: number
  }
  translateToDefault(): void
  updateContent(): void
  redraw(deltaTimeSeconds: any): void
  setDragLimits(
    horiMin: any,
    horiMax: any,
    vertMin: any,
    vertMax: any,
    grazeSize?: number
  ): void
  horiMinDragLimit: any
  horiMaxDragLimit: any
  vertMinDragLimit: number | undefined
  vertMaxDragLimit: any
  calculateDragMinMaxValues(
    minSize: any,
    maxSize: any,
    defaultCord: any,
    grazeSize: any,
    tileSize: any,
    sideSize: any
  ): {
    min: any
    max: number
  }
  addTranslateChangeListener(handler: any): void
  attachMouseMoveListener(handler: any): void
  setClickable(on: any): void
  attachClickListener(handler: any): void
  attachWheelistener(handler: any): void
  attachMouseLeavelistener(handler: any): void
  CLICK_MOVE_DISTANCE_GRACE: number
}
declare class AnimationCanvasCenter extends AnimationCanvas {}
declare class AnimationGroupCanvas extends AnimationCanvas {
  contentGroups: {}
  activeGroup: any
  set content(arg: any)
  get content(): any
  addContent(content: any, groupName: any): void
  removeContent(content: any, groupName: any): void
  setActiveContentGroup(groupName: any): void
}
declare class BackgroundImageCanvas extends BaseCanvas {
  displayImage(image: any, force: any): void
  currentImage: any
  reset(): void
  redraw(): void
  updateContent(): void
  BACKGROUND_DARKEN_PERCENT: number
}
//# sourceMappingURL=canvases.d.ts.map
