declare class SocialRewardModal {
  $modal: JQuery<HTMLElement>
  $discordButton: JQuery<HTMLElement>
  $menuBanner: JQuery<HTMLElement>
  discordClaimed: boolean
  setup(discordClaimed: any): void
  hideMenuBannerCheck(): void
  setDiscordClaimed(): void
  setButtonClaimed($button: any): void
  triggerDiscordClaim(): void
  triggerClaimWindow(url: any): void
}
declare var socialRewardModal: SocialRewardModal
//# sourceMappingURL=socialRewardModal.d.ts.map
