declare class StoreTile {
  constructor(
    imgSrc: any,
    imgSrcset: any,
    backgroundSrc: any,
    name: any,
    tag: any,
    notePrice: any,
    realMoneyPrice: any,
    colorTicketTier: any,
    avatarTicketTier: any,
    patreonTierToUnlock: any,
    defaultImageSize: any,
    extraClasses?: any[],
    uniqueUnlock?: boolean,
    eventColor?: boolean,
    animated?: boolean,
    jsonSrc?: null,
    atlasSrc?: null
  )
  colorTicketTier: any
  onloadCallbacks: any[]
  buildTriggered: boolean
  buildTileFunction: () => void
  _$tile: JQuery<HTMLElement>
  get $tile(): JQuery<HTMLElement>
  get imagePreload(): AvatarDisplayHandler | undefined
  set storeFade(arg: any)
  setupBaseContent(backgroundSrc: any): void
  avatarDisplayHandler: AvatarDisplayHandler | undefined
  setupContent(
    imgSrc: any,
    imgSrcset: any,
    backgroundSrc: any,
    defaultImageSize: any
  ): void
  setupAnimatedContent(jsonSrc: any, atlasSrc: any, backgroundSrc: any): void
  handleRemoved(): void
  handleDisplayed(): void
  addOnloadCallback(callback: any): void
  updateTextSize(): void
  updateFirstRowString(newPriceString: any): void
  addUnlockedClass(): void
  removeUnlockedClass(): void
  turnOffSecondRow(): void
  TILE_TEMPLATE: string
  TARGET_FONT_SIZE: number
  MIN_FONT_SIZE: number
}
declare namespace STORE_TILE_SIZE_MOD_FORMATS {
  let sizeMod0: string
  let sizeMod20: string
  let sizeMod51: string
}
declare class StorePreviewTile extends StoreTile {
  constructor(storeAvatar: any)
}
declare class StoreAvatarTile extends StoreTile {
  constructor(storeColor: any)
}
declare class StoreEmoteTile extends StoreTile {
  constructor(storeEmote: any)
  get imagePreload(): PreloadImage | undefined
  _imagePreload: PreloadImage | undefined
}
//# sourceMappingURL=storeTile.d.ts.map
