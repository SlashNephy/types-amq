declare class StoreCharacter {
  constructor(description: any, unlockedAvatars: any, mainContainer: any)
  characterId: any
  avatars: any[]
  previewTilesInited: boolean
  defaultAvatar: StoreAvatar
  topIcon: StoreTopIcon
  set open(arg: any)
  get $topIcon(): JQuery<HTMLElement> | undefined
  get width(): number
  set inFilter(arg: any)
  updateStatus(): void
  getAvatar(avatarId: any): any
  newUnlock(avatarId: any, colorId: any): void
  newLock(avatarId: any, colorId: any): void
  sortAvatars(): void
  loadAvatarTopIcons(): void
  intPreviewTiles(): void
  clearAvatarSelection(): void
  filterUpdate(newFilter: any): void
  DEFAULT_STORE_AVATAR_ICON_NAME: string
}
declare class StoreAvatar {
  constructor(
    description: any,
    unlockedColors: any,
    mainContainer: any,
    parentCharacter: any
  )
  parentCharacter: any
  avatarId: any
  outfitId: any
  avatarName: any
  outfitName: any
  optionName: any
  backgroundVert: any
  artist: any
  world: any
  lore: any
  badgeFileName: any
  badgeName: any
  sizeModifier: any
  legacy: any
  _inFilter: boolean
  notePrice: any
  realMoneyPrice: any
  patreonTierToUnlock: any
  active: any
  defaultAvatar: any
  exclusive: any
  ticketTier: any
  limited: any
  defaultColorName: any
  defaultColorId: any
  unlockedColors: any
  _unlocked: boolean
  gotSkins: boolean
  colorsLoaded: boolean
  colors: any[]
  colorMap: {}
  mainContainer: any
  src: string
  srcSet: string
  backgroundSrc: string
  tileLoaded: boolean
  tile: StorePreviewTile
  get colorCount(): number
  get unlockedColorCount(): number
  get backgroundUnlocked(): boolean
  get $content(): JQuery<HTMLElement>
  get sizeModifierClass(): string
  updateTextSize(): void
  get typeName(): 'Standard' | 'Unavailable' | 'Limited' | 'Exclusive'
  get completeName(): string
  set iconSelected(arg: any)
  set inFilter(arg: boolean)
  get inFilter(): boolean
  get colorUnlocked(): boolean
  set unlocked(arg: any)
  get unlocked(): any
  get $topIcon(): JQuery<HTMLElement>
  get characterId(): any
  handleRemoved(): void
  handleDisplayed(): void
  newUnlock(colorId: any): void
  newLock(colorId: any): void
  buildTopIconDomObject(): void
  topIcon: StoreTopIconSkin | undefined
  topIconImagePreloader: PreloadImage | undefined
  initPreviewTile(): void
  loadTopIcon(): void
  displayColors(): void
  sortColors(): void
  getColorUnlocked(colorId: any): any
  filterUpdate(newFilter: any): void
  updateStatus(): void
  AVATAR_ICON_TEMPLATE: string
}
declare class StoreColor {
  constructor(avatar: any, colorDescription: any, unlocked: any)
  avatar: any
  colorId: any
  name: any
  colorPrice: any
  defaultColor: any
  sizeModifier: any
  unique: any
  eventColor: any
  animated: any
  animatedHeadColorName: any
  editor: any
  _inFilter: boolean
  unlocked: boolean
  active: any
  limited: any
  exclusive: any
  ticketTier: any
  backgroundId: any
  backgroundVert: any
  jsonSrc: string | undefined
  atlasSrc: string | undefined
  src: string | undefined
  srcSet: string | undefined
  backgroundSrc: string
  tile: StoreAvatarTile
  get sizeModifierClass(): string
  get $content(): JQuery<HTMLElement>
  updateTextSize(): void
  get notePrice(): number
  get realMoneyPrice(): number
  get patreonTierToUnlock(): any
  get typeName():
    | 'Standard'
    | 'Unavailable'
    | 'Limited'
    | 'Exclusive'
    | 'Unique'
  get avatarId(): any
  get characterId(): any
  get fullDescription(): {
    colorId: any
    avatarId: any
    characterId: any
    active: any
    avatarName: any
    outfitName: any
    colorName: any
    backgroundVert: any
    colorActive: any
    editor: any
    optionName: any
    optionActive: boolean
    avatarNotePrice: any
    avatarRealMoneyPrice: any
    colorNotePrice: any
    defaultColor: any
    ticketTier: any
    avatarTicketTier: any
    sizeModifier: any
    sizeModifierClass: string
    animated: any
    jsonSrc: string | undefined
    atlasSrc: string | undefined
    animatedHeadColorName: any
  }
  get backgroundDescription(): {
    avatarName: any
    outfitName: any
    avatarId: any
    characterId: any
    colorId: any
    backgroundVert: any
  }
  set inFilter(arg: boolean)
  get inFilter(): boolean
  handleRemoved(): void
  handleDisplayed(): void
  avatarUnlocked(): void
  setUnlocked(): void
  setLocked(): void
  filterUpdate(newFilter: any): void
  getAvatarBaseSrcInfo(optionActive: any): {
    src: string
    srcSet: string
  }
}
//# sourceMappingURL=storeCharacter.d.ts.map
