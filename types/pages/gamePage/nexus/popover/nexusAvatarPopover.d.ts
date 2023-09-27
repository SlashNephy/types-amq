declare class NexusAvatarPopover extends NexusBasePopover {
  constructor()
  infoDisplay: NexusCityAvatarInfoDisplay
  activeBadge: boolean
  displayAvatar(
    {
      name,
      baseStats,
      runeInfo,
      genreInfo,
      abilityInfo,
      badgeInfo,
    }: {
      name: any
      baseStats: any
      runeInfo: any
      genreInfo: any
      abilityInfo: any
      badgeInfo: any
    },
    avatarInfo: any,
    $triggerElement: any,
    handlerId: any
  ): void
}
declare var nexusAvatarPopover: NexusAvatarPopover
//# sourceMappingURL=nexusAvatarPopover.d.ts.map
