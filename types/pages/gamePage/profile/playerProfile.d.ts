declare class PlayerProfile {
  constructor(
    profileInfo: any,
    offset: any,
    onClose: any,
    offline: any,
    inGame: any
  )
  onClose: any
  contextMenuShown: boolean
  editActive: boolean
  $profile: JQuery<HTMLElement>
  avatarDisplayHandler: AvatarHeadDisplayHandler
  $additionalOptionsButton: JQuery<HTMLElement>
  statsLines: {
    creationDate: ProfileStatsLine
    songCount: ProfileStatsLine
    guessPercent: ProfileStatsLine
    list: ListProfileStatsLine
  }
  badgeHandler: ProfileBadgeHandler
  badgeContainer: ProfileBadgeContainer
  badgeOptionContainer: ProfileBadgeOptionContainer
  imageSelector: ProfileImageSelector | undefined
  resizeName(): void
  close(): void
  toggleEdit(): void
  displayAvatarProfileImage(avatarInfo: any): void
  setAvatarProfileImage(src: any, srcSet: any): void
  createContextMenuObject(
    playerName: any,
    offline: any,
    inGame: any
  ): {
    selector: string
    trigger: string
    appendTo: JQuery<HTMLElement>
    itemClickEvent: boolean
    build: () => {
      items: {
        InviteToGame: {
          name: string
          callback: () => void
        }
      }
      events: {
        show: (options: any) => void
        hide: () => void
      }
    }
    position: (opt: any, x: any, y: any) => void
  }
  PROFILE_TEMPLATE: string
  PROFILE_IMAGE_SIZE: number
}
//# sourceMappingURL=playerProfile.d.ts.map
