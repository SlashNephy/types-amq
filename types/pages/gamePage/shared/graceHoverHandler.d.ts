declare class GraceHoverHandler {
  constructor(
    $element: any,
    openDelay: any,
    closeDelay: any,
    hoverHandler: any,
    leaveHandler: any
  )
  openDelay: any
  closeDelay: any
  hoverHandler: any
  leaveHandler: any
  $element: any
  displayed: boolean
  openTimeout: NodeJS.Timeout | null
  closeTimeout: NodeJS.Timeout | null
  triggered: boolean
  triggerDisplay(): void
  hide(): void
  destroy(): void
}
//# sourceMappingURL=graceHoverHandler.d.ts.map
