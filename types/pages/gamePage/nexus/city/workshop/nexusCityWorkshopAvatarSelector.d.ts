declare class NexusCityWorkshopAvatarSelector extends NexusCityAvatarSelector {
  constructor(window: any)
  updateAvatarRunes(avatarId: any, runeInfo: any, emptyRuneSlotCount: any): void
}
declare class NexusCityWorkshopAvatarEntry extends NexusCityAvatarEntry {
  constructor(
    avatarInfo: any,
    $container: any,
    hoverCallback: any,
    clickCallback: any
  )
  set emptyRuneSlotCount(arg: any)
  get emptyRuneSlotCount(): any
  _emptyRuneSlotCount: any
}
declare class NexusCityWorkshopAvatarSelectorPreview {
  constructor($container: any)
  $container: any
  $imgContainer: any
  $name: any
  avatarDisplayHandler: AvatarDisplayHandler
  reset(): void
  displayAvatar(avatarEntry: any): void
}
//# sourceMappingURL=nexusCityWorkshopAvatarSelector.d.ts.map