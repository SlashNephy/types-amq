declare class StoreWindow {
  $window: JQuery<HTMLElement>
  $rhythmText: JQuery<HTMLElement>
  $avatarTokenText: JQuery<HTMLElement>
  $storeIconAvatarContainer: JQuery<HTMLElement>
  _open: boolean
  _rhythm: number
  _avatarTokens: number
  avatarIconDisplayHandler: AvatarHeadDisplayHandler | null
  unlockedEmoteIds: {}
  _inBackgroundMode: boolean
  useAvatarListener: Listener
  unlockListner: Listener
  lockListner: Listener
  emoteUnlockListner: Listener
  emoteLockedListner: Listener
  newFavoriteListener: Listener
  removeFavoriteListener: Listener
  setResonanceTargetListener: Listener
  set open(arg: boolean)
  get open(): boolean
  get activeAvatar(): any
  get activeBackground(): any
  set inBackgroundMode(arg: boolean)
  get inBackgroundMode(): boolean
  set rhythm(arg: number)
  get rhythm(): number
  set avatarTokens(arg: number)
  get avatarTokens(): number
  setup(
    defaultDesigns: any,
    unlockedDesigns: any,
    currentAvatar: any,
    characterUnlockCount: any,
    avatarUnlockCount: any,
    emoteGroups: any,
    rhythm: any,
    unlockedEmoteIds: any,
    favoriteAvatars: any,
    recentTicketRewards: any,
    avatarTokens: any,
    rollTargets: any,
    saleInfo: any,
    resonanceState: any,
    ticketPromoAvatar: any
  ): void
  characterUnlockCount: any
  avatarUnlockCount: any
  _activeAvatarBackground: any
  mainContainer: StoreMainContainer | undefined
  storeFilter: StoreFilter | undefined
  avatarColumn: StoreAvatarColumn | undefined
  resonanceSystem: StoreResonanceSystem | undefined
  topBar: StoreTopBar | undefined
  rhythmBubbleTextController: BubbleTextController | undefined
  avatarTokenBubbleTextController: BubbleTextController | undefined
  get gotResonanceTarget(): boolean
  checkRollWillLoseResonancePoints(rollAmount: any): boolean
  checkRollTargetIsResonaceTarget(badgeId: any): boolean
  checkResonanceTargetInactive(): boolean
  reset(): void
  show(): void
  showSkin(characterId: any, avatarId: any): void
  resize(): void
  hide(): void
  toggle(): void
  getAvatar(characterId: any, avatarId: any): any
  getAvatarFromAvatarId(avatarId: any): any
  filterChangeEvent(): void
  toggleBackgroundSelect(): void
  getAvatarBonusUnlocked(avatarId: any): any
  disableTopBar(): void
  enableTopBar(): void
  getAllEmotes(): any[]
  getEmote(emoteId: any): any
  setStoreIconAvatar(currentAvatar: any): void
  getFavoriteId(avatar: any, background: any): any
  handleAvatarSelected(avatarDescription: any, backgroundDescription: any): void
  messageContainEmote(msg: any): boolean
  getAllAvatars(): any[]
  showTicketStore(): void
  REQUIRED_COUNT_FOR_BONUS: number
}
declare var storeWindow: StoreWindow
//# sourceMappingURL=storeWindow.d.ts.map
