declare class DragWindow {
  constructor($container: any, $dragTrigger: any)
  $container: any
  $dragTrigger: any
  $closeButton: any
  displayed: boolean
  mouseMoveListeners: any[]
  mouseUpListeners: any[]
  mouseDownListeners: any[]
  lastMouseX: any
  lastMouseY: any
  resizeObserver: ResizeObserver
  addMouseMoveListener(listener: any): void
  addMouseUpListener(listener: any): void
  addMouseDownListener(listener: any): void
  updatePositionOnDrag(pageX: any, pageY: any): void
  centerContainer(): void
  updateCurrentPosition(left: any, top: any): void
  handleSizeChanged(): void
  handleSizeReset(): void
  show(): void
  hide(): void
  fitWindowInsideContainer(): void
}
declare class DragWindowPercistence extends DragWindow {
  constructor($container: any, $dragTrigger: any, storageKey: any)
  $containerInner: any
  storageKey: any
  setupDone: boolean
  loadedSizeReset: boolean
  get positionKey(): string
  get sizeKey(): string
  loadPosition(): void
  loadSize(): void
  handleSizeChanged(width: any, height: any): void
  adjustPosition(): void
  CORNER_DOUBLE_CLICK_THRESHOLD: number
}
//# sourceMappingURL=dragWindow.d.ts.map
