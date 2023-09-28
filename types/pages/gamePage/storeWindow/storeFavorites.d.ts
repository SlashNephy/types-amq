declare class StoreFavorites {
  constructor(mainContainer: any, favoriteAvatars: any)
  $switchStateContainer: JQuery<HTMLElement>
  $switchStateContainerStateText: JQuery<HTMLElement>
  $noFavoritesContainer: JQuery<HTMLElement>
  mainContainer: any
  _topIcon: StoreTopIcon
  open: boolean
  favoriteAvatars: any
  get $topIcon(): JQuery<HTMLElement> | undefined
  generateFavoriteEntryMocks(): any[]
  getFavoriteId(avatar: any, background: any): any
  newFavorite(favorite: any): void
  removeFavorite(favoriteId: any): void
  getActiveAvatarFavoriteIndex(): any
  toggleRandomFavoriteAvatar(): void
  toggleCycleFavoriteAvatar(): void
  toggleFavoritedAvatar(favoritedAvatar: any): void
  updateSwitchStateText(newText: any): void
  TOP_ICON_NAME: string
}
declare class StoreColorMock {
  constructor(avatarInfo: any, backgroundInfo: any)
  avatar: any
  avatarColor: any
  backgroundAvatar: any
  backgroundAvatarColor: any
  optionActive: any
  src: string
  srcSet: string
  backgroundSrc: string
  tile: StoreAvatarTile
  get $content(): JQuery<HTMLElement>
  get animated(): any
  get jsonSrc(): any
  get atlasSrc(): any
  get name(): any
  get typeName(): any
  get notePrice(): any
  get realMoneyPrice(): any
  get ticketTier(): any
  get patreonTierToUnlock(): any
  get backgroundDescription(): any
  get fullDescription(): any
  get unlocked(): any
  get sizeModifierClass(): any
  updateTextSize(): void
}
//# sourceMappingURL=storeFavorites.d.ts.map