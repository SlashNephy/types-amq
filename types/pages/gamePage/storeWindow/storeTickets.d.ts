declare class StoreTickets {
  constructor(
    mainContainer: any,
    recentTicketRewards: any,
    rollTargets: any,
    saleInfo: any,
    ticketPromoAvatar: any
  )
  $ticketOptionContainer: JQuery<HTMLElement>
  $useButton: JQuery<HTMLElement>
  $buyButton: JQuery<HTMLElement>
  $historyButton: JQuery<HTMLElement>
  $infoTabMain: JQuery<HTMLElement>
  _topIcon: StoreTopIcon
  displayed: boolean
  historySelector: StoreTicketHistory
  rollSelector: StoreTicketRollSelector
  storeSelector: StoreTicketStoreController
  handleDisplayed(): void
  handleHidden(): void
  handleWindowHidden(): void
  handleWindowShown(): void
  changeToBuy(): void
  get $topIcon(): JQuery<HTMLElement> | undefined
  resize(): void
  TOP_ICON_NAME: string
}
//# sourceMappingURL=storeTickets.d.ts.map
