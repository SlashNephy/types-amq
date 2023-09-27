declare class BaseTopIcon {
  updateStatus(current: any, total: any): void
}
declare class StoreTopIcon extends BaseTopIcon {
  constructor(
    src: any,
    srcSet: any,
    callback: any,
    extraClasses?: any[],
    badgeSrc?: string,
    badgeSrcSet?: string
  )
  childCount: number
  closed: boolean
  active: boolean
  _open: boolean
  _selected: boolean
  set open(arg: boolean)
  get open(): boolean
  set selected(arg: boolean)
  get selected(): boolean
  get childContainerWidth(): number
  get width(): number
  set inFilter(arg: any)
  buildTopIconDomObject(
    src: any,
    srcSet: any,
    badgeSrc: any,
    badgeSrcSet: any,
    extraClasses: any
  ): void
  $topIcon: JQuery<HTMLElement> | undefined
  $childContainer: JQuery<HTMLElement> | undefined
  $iconImage: JQuery<HTMLElement> | undefined
  $childInnerContainer: JQuery<HTMLElement> | undefined
  $statusTotal: JQuery<HTMLElement> | undefined
  $stautsCurrent: JQuery<HTMLElement> | undefined
  $stautsTextContainer: JQuery<HTMLElement> | undefined
  $allUnlockedGlow: JQuery<HTMLElement> | undefined
  appendChildren(childList: any): void
  ICON_TEMPLATE: string
  CHILD_WIDTH: number
  ICON_WIDTH: number
}
declare class StoreTopIconSkin extends BaseTopIcon {
  constructor(badgeSrc: any, badgeSrcSet: any)
  $topIcon: JQuery<HTMLElement>
  $statusTotal: JQuery<HTMLElement>
  $stautsCurrent: JQuery<HTMLElement>
  $stautsTextContainer: JQuery<HTMLElement>
  $allUnlockedGlow: JQuery<HTMLElement>
  ICON_TEMPLATE: string
}
//# sourceMappingURL=storeTopIcon.d.ts.map
