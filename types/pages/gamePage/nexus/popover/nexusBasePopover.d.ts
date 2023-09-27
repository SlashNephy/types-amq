declare class NexusBasePopover {
  constructor(extraClasses?: any[])
  $body: JQuery<HTMLElement>
  $headerText: JQuery<HTMLElement>
  $cooldownContainer: JQuery<HTMLElement>
  $cooldown: JQuery<HTMLElement>
  $cooldownDisplay: JQuery<HTMLElement>
  $imageContainer: JQuery<HTMLElement>
  $image: JQuery<HTMLElement>
  $name: JQuery<HTMLElement>
  $description: JQuery<HTMLElement>
  $statInfo: JQuery<HTMLElement>
  $extenionContainer: JQuery<HTMLElement>
  $runeTotalContainer: JQuery<HTMLElement>
  $runeTotal: JQuery<HTMLElement>
  $runeInUseContainer: JQuery<HTMLElement>
  $runeInUse: JQuery<HTMLElement>
  $badgeLevelContainer: JQuery<HTMLElement>
  $badgeLevel: JQuery<HTMLElement>
  $badgeStatBoostContainer: JQuery<HTMLElement>
  $badgeStatBoost: JQuery<HTMLElement>
  $badgeGenreBoostContainer: JQuery<HTMLElement>
  $badgeGenreBoost: JQuery<HTMLElement>
  iconDisplayerHandler: AvatarHeadDisplayHandler
  activeExtendedPopovers: any[]
  currentDirection: string | null
  $currentCustomImage: any
  $container: JQuery<HTMLElement>
  currentHandlerId: any
  displayDefault(
    typeName: any,
    name: any,
    description: any,
    src: any,
    srcSet: any,
    $triggerElement: any,
    handlerId: any,
    forceDirection: any,
    $image: any,
    jsonSrc: any,
    atlasSrc: any,
    optionActive: any
  ): void
  setupContent(
    typeName: any,
    name: any,
    description: any,
    src: any,
    srcSet: any,
    triggerLoad?: boolean,
    $image?: null,
    jsonSrc?: null,
    atlasSrc?: null,
    optionActive?: null
  ): void
  hide(handlerId: any): void
  TEMPALTE: string
  MARGIN_SIZE: number
  CONTAINER_WIDTH: number
}
//# sourceMappingURL=nexusBasePopover.d.ts.map
