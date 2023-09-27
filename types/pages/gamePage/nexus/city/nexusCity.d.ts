declare class NexusCity {
  constructor(statBaseMax: any)
  $container: JQuery<HTMLElement>
  $canvasContainer: JQuery<HTMLElement>
  $locationNameContainer: JQuery<HTMLElement>
  skyCanvasController: AdvancedAnimationController
  cityCanvasController: AdvancedAnimationController
  ostAudioGroup: any
  dungeonSelectionWindow: NexusCityDungeonSelectionWindow
  workshopWindow: NexusCityWorkshopWindow
  innWindow: NexusCityInnWindow
  currentTransformX: number
  currentTransformY: number
  baseLoadDone: boolean
  dayLoadDone: boolean
  nightLoadDone: boolean
  activeLook: string
  skyBackdropGroup: {
    day: null
    night: null
  }
  cloudElementGroup: {
    day: null
    night: null
  }
  cityStaticElementsGroup: {
    day: never[]
    night: never[]
  }
  cityStaticElementMapGroup: {
    day: {}
    night: {}
  }
  shown: boolean
  _nexusMapRejoin: Listener
  _startNexusGameLoadListener: Listener
  set skyBackdrop(arg: any)
  get skyBackdrop(): any
  set cloudElement(arg: any)
  get cloudElement(): any
  get cityStaticElements(): any
  get cityStaticElementMap(): any
  get ostTrack(): string
  get nightMode(): boolean
  get initDone(): boolean
  show(): void
  centerHorizontally(): void
  hide(): void
  closeContent(): void
  fadeOutOst(): void
  init(): void
  loadNexusCityContent(callback: any): void
  setupDayContent(): void
  setupNightContent(): void
  readjustCanvasSizes(): void
  overflowHeight: number | undefined
  overflowWidth: number | undefined
  handleMouseMove(canvasX: any, canvasY: any, clientX: any, clientY: any): void
  hoveredElement: any
  scrollMapBottom(): void
  handleMouseClick(canvasX: any, canvasY: any): void
  getElementInCords(x: any, y: any): any
  TRIGGER_SCROLL_PERCENT: number
  SCROLL_SPEED: number
  STANDARD_CITY_HEIGHT: number
  STANDARD_CITY_WIDTH: number
  CITY_RATIO: number
  NIGHT_END_HOUR: number
  NIGHT_START_HOUR: number
  CITY_STATIC_ELEMENT_DESCRIPTNS: (
    | {
        name: string
        x: number
        y: number
        collisionBoxInfo?: undefined
        nameInfo?: undefined
        clickHandler?: undefined
        nightX?: undefined
        nightY?: undefined
      }
    | {
        name: string
        x: number
        y: number
        collisionBoxInfo: {
          x: number
          y: number
          width: number
          height: number
        }[]
        nameInfo: {
          name: string
          x: number
          y: number
          locked?: undefined
        }
        clickHandler: () => void
        nightX?: undefined
        nightY?: undefined
      }
    | {
        name: string
        x: number
        y: number
        collisionBoxInfo: {
          x: number
          y: number
          width: number
          height: number
        }[]
        nameInfo: {
          name: string
          x: number
          y: number
          locked: boolean
        }
        clickHandler?: undefined
        nightX?: undefined
        nightY?: undefined
      }
    | {
        name: string
        nightX: number
        nightY: number
        x: number
        y: number
        collisionBoxInfo: {
          x: number
          y: number
          width: number
          height: number
        }[]
        nameInfo: {
          name: string
          x: number
          y: number
          locked: boolean
        }
        clickHandler?: undefined
      }
  )[]
}
declare class NexusCityStaticElement {
  constructor(
    ctx: any,
    image: any,
    baseX: any,
    baseY: any,
    canvasWidth: any,
    collisionBoxInfo: any,
    nameInfo: any,
    clickHandler: any
  )
  currentCanvasWidth: any
  collisionBoxInfo: any
  canvasElement: NexusCityCanvasElement
  collisionBoxes: any[]
  clickHandler: any
  nameInfo: any
  $nameContainer: JQuery<HTMLElement> | undefined
  updateSize(canvasWidth: any): void
  buildCollisionBox(): void
  displayName(): void
  hideName(): void
  checkCollision(x: any, y: any): boolean
  updateNameContainerPosition(): void
  NAME_TEMPALTE: string
}
declare class NexusCitySlideElement {
  constructor(
    ctx: any,
    image: any,
    baseX: any,
    baseY: any,
    canvasWidth: any,
    speed: any
  )
  currentCanvasWidth: any
  canvasElement: NexusCityCanvasElementInfiniteSlide
  updateSize(canvasWidth: any): void
}
//# sourceMappingURL=nexusCity.d.ts.map
