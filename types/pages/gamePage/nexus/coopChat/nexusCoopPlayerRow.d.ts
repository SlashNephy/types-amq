declare class NexusCoopPlayerRow {
  constructor({
    name,
    host,
    icon,
    connected,
  }: {
    name: any
    host: any
    icon: any
    connected: any
  })
  $body: JQuery<HTMLElement>
  $host: JQuery<HTMLElement>
  $disconnected: JQuery<HTMLElement>
  $nameContainer: JQuery<HTMLElement>
  $nameTextContainer: JQuery<HTMLElement>
  $profileOption: JQuery<HTMLElement>
  $prmoteOption: JQuery<HTMLElement>
  $kickOption: JQuery<HTMLElement>
  avatarDisplayHandler: AvatarHeadDisplayHandler
  name: any
  updateSizes(): void
  setHost(): void
  unsetHost(): void
  setDisconnected(): void
  unsetDisconnected(): void
  enableHostOptions(): void
  disableHostOptions(): void
  displayIcon({
    emoteId,
    avatarInfo: {
      avatar: {
        avatarName,
        outfitName,
        colorName,
        optionName,
        optionActive,
        animated,
      },
    },
  }: {
    emoteId: any
    avatarInfo: {
      avatar: {
        avatarName: any
        outfitName: any
        colorName: any
        optionName: any
        optionActive: any
        animated: any
      }
    }
  }): void
  remove(): void
  TEMPLATE: string
}
//# sourceMappingURL=nexusCoopPlayerRow.d.ts.map
