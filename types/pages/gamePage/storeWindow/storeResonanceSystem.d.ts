declare class StoreResonanceSystem {
  $infoContainer: JQuery<HTMLElement>
  $mainInfoContainer: JQuery<HTMLElement>
  $buttonTargetText: JQuery<HTMLElement>
  $buttonBadgeContainer: JQuery<HTMLElement>
  $targetContainer: JQuery<HTMLElement>
  $avatarContainer: JQuery<HTMLElement>
  $avatarName: JQuery<HTMLElement>
  $noTargetContainer: JQuery<HTMLElement>
  $currentPoints: JQuery<HTMLElement>
  $targetPoints: JQuery<HTMLElement>
  $progressBar: JQuery<HTMLElement>
  avatarDisplayHandler: AvatarDisplayHandler
  gotTarget: boolean
  currentPoints: number
  targetAvatarId: any
  targetColorId: any
  targetBadgeId: any[]
  rollResultListener: Listener
  setupState(resonanceState: any): void
  setupTarget({
    avatarId,
    colorId,
    badges,
    badgeIds,
  }: {
    avatarId: any
    colorId: any
    badges: any
    badgeIds: any
  }): void
  displayNoTarget(): void
  displayResonanceState({
    resonancePoints,
    resonanceTarget,
  }: {
    resonancePoints: any
    resonanceTarget: any
  }): void
  checkRollWillLosePoints(rollAmount: any): boolean
  checkTargetInactive(): boolean
  checkRollTargetIsTarget(badgeId: any): boolean
  BADGE_TEMPLATE: string
  MAX_POINTS_WITHOUT_TARGET: number
}
//# sourceMappingURL=storeResonanceSystem.d.ts.map
