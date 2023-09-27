declare class SocialTabFriendEntry {
  constructor(friendInfo: any, offline: any, $scrollContainer: any)
  status: any
  name: any
  $html: JQuery<HTMLElement>
  $nameContainer: JQuery<HTMLElement>
  $name: JQuery<HTMLElement>
  $sociaiStatusText: JQuery<HTMLElement>
  $scrollContainer: any
  inList: any
  inGame: boolean
  gameState: any
  open: boolean
  avatarIconDisplayHandler: AvatarHeadDisplayHandler
  get colorStatusClass():
    | 'socialTabPlayerSocialStatusInnerCircleColorOnline'
    | 'socialTabPlayerSocialStatusInnerCircleColorDoNotDisturb'
    | 'socialTabPlayerSocialStatusInnerCircleColorAway'
    | 'socialTabPlayerSocialStatusInnerCircleColorOffline'
  get statusText(): 'Offline' | 'Online' | 'Do Not Disturb' | 'Away'
  handleOpen(): void
  handleHidden(): void
  updateName(newName: any): void
  updateTextSize(): void
  destroy(): void
  updateStatus(newStatus: any, gameState: any): void
  detach(): void
  updateAvatar(avatarInfo: any): void
  checkLazyLoad(): void
  TEMPLATE: string
}
//# sourceMappingURL=socialTabFriendEntry.d.ts.map
