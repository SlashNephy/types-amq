declare class StoreEmoteController {
  constructor(emoteGroups: any, mainContainer: any, unlockedEmoteIds: any)
  $collapseButton: JQuery<HTMLElement>
  open: boolean
  collapseButton: ToggleButton
  _topIcon: StoreTopIcon
  groups: any
  emoteMap: {}
  emoteRegex: RegExp
  messageContainEmote(msg: any): boolean
  buildEmoteRegex(): RegExp
  getAllEmotes(): any[]
  getEmote(emoteId: any): any
  triggerLazyLoad(): void
  newUnlock(groupName: any, emoteId: any): void
  newLocked(groupName: any, emoteId: any): void
  get $topIcon(): JQuery<HTMLElement> | undefined
  TOP_ICON_NAME: string
}
declare class StoreEmoteGroup {
  constructor(groupInfo: any, mainContainer: any, unlockedEmoteIds: any)
  $group: JQuery<HTMLElement>
  $emoteContainer: JQuery<HTMLElement>
  orderNumber: any
  name: any
  imagesLoaded: boolean
  textSizeUpdated: boolean
  _open: boolean
  emotesLoaded: boolean
  emotes: any
  set open(arg: boolean)
  get open(): boolean
  get $content(): JQuery<HTMLElement>
  get offsetTop(): number
  initEmotes(): void
  loadImages(): void
  updateTextSize(): void
  newUnlock(emoteId: any): void
  newLocked(emoteId: any): void
  GROUP_TEMPLATE: string
}
declare class StoreEmote {
  constructor(emoteInfo: any, unlockedEmoteIds: any)
  id: any
  tier: any
  name: any
  unlocked: any
  src: string
  smallSrc: string
  srcSet: string
  tile: StoreEmoteTile
  loadImage(): void
  setUnlocked(): void
  setLocked(): void
  get description(): {
    emoteId: any
    tier: any
    name: any
    unlocked: any
    src: string
    smallSrc: string
    srcSet: string
  }
}
//# sourceMappingURL=storeEmotes.d.ts.map
