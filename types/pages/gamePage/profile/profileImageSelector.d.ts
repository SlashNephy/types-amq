declare class ProfileImageSelector {
  constructor(
    $profile: any,
    avatarImage: any,
    emoteImageId: any,
    avatarInfo: any,
    profile: any
  )
  $avatarButton: any
  $emoteContainer: any
  $profileImage: any
  displayLoaded: boolean
  emoteImageId: any
  avatarImage: any
  avatarInfo: any
  profile: any
  emoteEntries: {}
  newSelect(avatarImage: any, emoteId: any): void
  displayed(): void
}
declare class ProfileImageSelectorEmote {
  constructor(
    emoteInfo: any,
    active: any,
    $emoteContainer: any,
    selectHandler: any
  )
  $tile: JQuery<HTMLElement>
  src: any
  srcSet: any
  id: any
  set selected(arg: any)
  preLoadImage: PreloadImage
  TEMPALTE: string
}
//# sourceMappingURL=profileImageSelector.d.ts.map
