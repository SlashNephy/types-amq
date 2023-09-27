declare class StoreTicketPromo {
  constructor(ticketPromoAvatar: any)
  $container: JQuery<HTMLElement>
  $containerInner: JQuery<HTMLElement>
  $titleContainer: JQuery<HTMLElement>
  $titleText: JQuery<HTMLElement>
  $descriptionContainer: JQuery<HTMLElement>
  $descriptionText: JQuery<HTMLElement>
  $timerContainer: JQuery<HTMLElement>
  $timerText: JQuery<HTMLElement>
  $avatarContainer: JQuery<HTMLElement>
  avatarDisplayHandler: AvatarDisplayHandler
  active: boolean
  show(): void
  hide(): void
  resizeTexts(): void
  updateTimeText(): void
  END_DATE: string
}
//# sourceMappingURL=storeTicketPromo.d.ts.map
