declare class NexusDungeonNextFloorWindow extends NexusDungeonBaseWindow {
  constructor()
  $floorNumber: any
  $floorDescription: any
  $avatarRow: any
  $taxAmount: any
  $continueButton: any
  avatarMap: {}
  _nexusAvatarHpChangesListener: Listener
  _nexusFragmentChangeListener: Listener
  _nexusEndFloorArtifactLockListener: Listener
  _nexusArtifactSelectListener: Listener
  displayContent(
    nextFloor: any,
    fragments: any,
    avatars: any,
    artifactLocks: any
  ): void
  reset(): void
  updateFragmentAmount(fragments: any): void
  continueNextFloor(): void
  displayHealVote(avatarName: any, playerIcon: any): void
  displayArtifactLockVote(avatarName: any, playerIcon: any): void
  HEAL_COST: number
  LOCK_COST: number
}
declare class NexusDungeonNextFloorAvatar {
  constructor(
    {
      avatarName,
      outfitName,
      optionName,
      optionActive,
      colorName,
      sizeModifier,
      animated,
    }: {
      avatarName: any
      outfitName: any
      optionName: any
      optionActive: any
      colorName: any
      sizeModifier: any
      animated: any
    },
    backgroundVert: any,
    maxHealth: any,
    currentHealth: any,
    artifacts: any,
    artifactLock: any
  )
  $body: JQuery<HTMLElement>
  $imageContainer: JQuery<HTMLElement>
  $healthBar: JQuery<HTMLElement>
  $healthText: JQuery<HTMLElement>
  $healButton: JQuery<HTMLElement>
  $lockButton: JQuery<HTMLElement>
  $healButtonVoteContainer: JQuery<HTMLElement>
  $lockButtonVoteContainer: JQuery<HTMLElement>
  $artifactContainerOuter: JQuery<HTMLElement>
  $artifactContainer: JQuery<HTMLElement>
  $noArtifactText: JQuery<HTMLElement>
  name: any
  artifactLockEnabled: boolean
  avatarDisplayHandler: AvatarDisplayHandler
  maxHealth: any
  set currentHealth(arg: any)
  artifactList: any[]
  get unselectedArtifact(): boolean
  enableArtifactLock(): void
  disableHealButton(): void
  disableLockButton(): void
  updateSizes(): void
  remove(): void
  artifactSelected(artifactName: any): void
  displayHealVote(playerIcon: any): void
  displayArtifactLockVote(playerIcon: any): void
  TEMPLATE: string
}
declare class NexusDungeonNextFloorAvatarArtifact {
  constructor(
    {
      fileName,
      name,
      description,
    }: {
      fileName: any
      name: any
      description: any
    },
    avatarName: any
  )
  $body: JQuery<HTMLElement>
  selected: boolean
  active: boolean
  avatarName: any
  name: any
  graceHover: GraceHoverHandler
  destroy(): void
  select(): void
  deselect(): void
  TEMPLATE: string
}
//# sourceMappingURL=nexusNextFloorWindow.d.ts.map
