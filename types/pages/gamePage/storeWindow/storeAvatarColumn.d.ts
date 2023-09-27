declare class StoreAvatarColumn {
  $bottomColumn: JQuery<HTMLElement>
  $name: JQuery<HTMLElement>
  $avatarImage: JQuery<HTMLElement>
  $avatarImageContainer: JQuery<HTMLElement>
  $actionButton: JQuery<HTMLElement>
  $actionButtonMainContainer: JQuery<HTMLElement>
  $actionButtonText: JQuery<HTMLElement>
  $actionButtonPriceContainer: JQuery<HTMLElement>
  $actionButtonPriceText: JQuery<HTMLElement>
  $actionButtonPriceIcon: JQuery<HTMLElement>
  $actionButtonRhythmContainer: JQuery<HTMLElement>
  $actionButtonFavoriteContainer: JQuery<HTMLElement>
  $actionButtonTargetTrigger: JQuery<HTMLElement>
  $actionButtonFavoriteStarSelected: JQuery<HTMLElement>
  $actionButtonFavoriteStarUnselected: JQuery<HTMLElement>
  $swRightColumnActionButtonRhythmPrice: JQuery<HTMLElement>
  $worldName: JQuery<HTMLElement>
  $artistName: JQuery<HTMLElement>
  $editerName: JQuery<HTMLElement>
  $loreText: JQuery<HTMLElement>
  $avatarContainer: JQuery<HTMLElement>
  $extraInfoContainer: JQuery<HTMLElement>
  $backgroundButton: JQuery<HTMLElement>
  $bonusBadgeIconImage: JQuery<HTMLElement>
  avatarDisplayHandler: AvatarDisplayHandler
  animationLoaded: boolean
  poseButtonsByName: {
    BASE: JQuery<HTMLElement>
    THINKING: JQuery<HTMLElement>
    WRONG: JQuery<HTMLElement>
    RIGHT: JQuery<HTMLElement>
    WAITING: JQuery<HTMLElement>
    CONFUSED: JQuery<HTMLElement>
  }
  actionState: number
  targetButtonActive: boolean | null
  characterProgressBar: StoreColumnProgressBar
  avatarProgressBar: StoreColumnProgressBar
  toggleButton: ToggleButton
  displayResonanceTargetStepTwo(): void
  displayResonanceTargetStepThree(): void
  get avatarName(): any
  get totalNotePrice(): any
  get currentDescriptionPackage(): {
    avatar: {
      avatarId: any
      colorId: any
      optionActive: any
    }
    background: {
      avatarId: any
      colorId: any
    }
  }
  displayAvatar(avatarDescription: any, initialSetup: any): void
  currentAvatar: any
  displayBackground(backgroundDescription: any): void
  currentBackground: any
  newUnlock(): void
  updateActionButton(): void
  updateLayout(): void
  updateScroll(): void
  updateTextSize(): void
  setImagePose(poseName: any, initialSetup: any): void
  currentPose: any
  updateBackgroundMode(active: any): void
  updateFavoriteButton(on: any): void
  activeFavoriteId: any
  updateTargetButtonState(): void
  handleWindowClosed(): void
  handleWindowOpened(): void
  MIN_TIER_FOR_TARGET: number
  ACTION_STATES: {
    NONE: number
    USE: number
    UNLOCK: number
  }
  NOTE_ICON_SRC: string
  AVATAR_MOD_SIZE_SIZES: {
    0: string
    20: string
    51: string
  }
}
declare class StoreColumnProgressBar {
  constructor($bar: any, $endpoint: any)
  $bar: any
  $endpoint: any
  _progressPercent: number
  set progressPercent(arg: number)
  get progressPercent(): number
  updateProgress(newCount: any): void
}
//# sourceMappingURL=storeAvatarColumn.d.ts.map
