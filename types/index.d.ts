declare function clientSetup(): void
declare var setupDocumentDone: boolean
declare class BaseCanvas {
  constructor($canvas: any)
  $canvas: any
  ctx: any
  width: number
  height: number
  updateCanvasSize(skipRedraw: any): void
  clearCanvas(): void
}
declare class AnimationCanvas extends BaseCanvas {
  translateX: number
  translateY: number
  dragEnabled: boolean
  clickEnabled: boolean
  dragActive: boolean
  scale: number
  content: any[]
  translateChangeListeners: any[]
  inputEventsActive: boolean
  mouseDownListeners: {}[]
  mouseMoveListeners: any[]
  mouseUpListeners: {}[]
  mouseLeaveListeners: any[]
  wheelListeners: any[]
  clickListeners: any[]
  addContent(content: any): void
  removeContent(content: any): void
  populateMouseEvent(event: any): void
  attachDragListener(onDragStart: any, onDrag: any, onDragEnd: any): void
  onDragStartHandler: ((event: any) => void) | null | undefined
  onDragHandler: ((event: any) => void) | null | undefined
  onDragEndHandler: ((event: any) => void) | null | undefined
  onDragLeaveHandler: (() => void) | null | undefined
  disableDrag(): void
  enableDrag(): void
  detatchDragListener(): void
  updateTranslate(x: any, y: any): void
  calculateDefaultTranslate(): {
    x: number
    y: number
  }
  translateToDefault(): void
  updateContent(): void
  redraw(deltaTimeSeconds: any): void
  setDragLimits(
    horiMin: any,
    horiMax: any,
    vertMin: any,
    vertMax: any,
    grazeSize?: number
  ): void
  horiMinDragLimit: any
  horiMaxDragLimit: any
  vertMinDragLimit: number | undefined
  vertMaxDragLimit: any
  calculateDragMinMaxValues(
    minSize: any,
    maxSize: any,
    defaultCord: any,
    grazeSize: any,
    tileSize: any,
    sideSize: any
  ): {
    min: any
    max: number
  }
  addTranslateChangeListener(handler: any): void
  attachMouseMoveListener(handler: any): void
  setClickable(on: any): void
  attachClickListener(handler: any): void
  attachWheelistener(handler: any): void
  attachMouseLeavelistener(handler: any): void
  CLICK_MOVE_DISTANCE_GRACE: number
}
declare class AnimationCanvasCenter extends AnimationCanvas {}
declare class AnimationGroupCanvas extends AnimationCanvas {
  contentGroups: {}
  activeGroup: any
  set content(arg: any)
  get content(): any
  addContent(content: any, groupName: any): void
  removeContent(content: any, groupName: any): void
  setActiveContentGroup(groupName: any): void
}
declare class BackgroundImageCanvas extends BaseCanvas {
  displayImage(image: any, force: any): void
  currentImage: any
  reset(): void
  redraw(): void
  updateContent(): void
  BACKGROUND_DARKEN_PERCENT: number
}
declare class AnimationController {
  constructor(staticAnimationCanvas: any, dynamicAnimationCanvas: any)
  staticCanvas: any
  dynamicCanvas: any
  updateCanvasSize(skipRedraw: any): void
  drawFrame(deltaTimeSeconds: any): void
  clearFrame(): void
}
declare class SimpleAnimationController {
  constructor(canvas: any)
  canvas: any
  running: boolean
  tickListeners: any[]
  start(): void
  lastTimeStamp: number | Date | null | undefined
  runAnimation(): void
  stop(): void
  addTickListener(handler: any): void
  removeTickListener(handler: any): void
}
declare class AdvancedAnimationController {
  constructor(staticCanvas: any, dynamicCanvas: any)
  staticCanvas: any
  dynamicCanvas: any
  staticAnimation: SimpleAnimationController
  dynamicAniamtion: SimpleAnimationController
  domElements: {}
  get canvasClass(): typeof SimpleAnimationController
  get staticCtx(): any
  get dynamicCtx(): any
  disableInputEvents(): void
  enableInputEvents(): void
  updateSize(saveTranslateY: any, skipRedraw: any): void
  drawStatic(): void
  drawDynamic(): void
  addStaticElement(element: any, groupName: any): void
  removeStaticElement(element: any, groupName: any): void
  addDynamicElement(element: any, groupName: any): void
  removeDynamicElement(element: any, groupName: any): void
  setActiveContentGroup(groupName: any): void
  startStaticAnimation(): void
  stopStaticAnimation(): void
  startDynamicAnimation(): void
  stopDynamicAnimation(): void
  attatchDragEvents(onStart: any, onDrag: any, onEnd: any): void
  attachTranslateChangeListener(handler: any): void
  enableDrag(): void
  disableDrag(): void
  updateTranslate(xChange: any, yChange: any): void
  setTranslateLimits(
    horiMin: any,
    horiMax: any,
    vertMin: any,
    vertMax: any,
    grazeSize: any
  ): void
  addDomElement(id: any, element: any): void
  resetCanvasContent(): void
  disableDomElement(id: any): void
  enableDomElement(id: any): void
  addStaticTickListener(handler: any): void
  removeStaticTickListener(handler: any): void
  addDynamicTickListener(handler: any): void
  removeDynamicTickListener(handler: any): void
  displayClickable(on: any): void
  addClickTickListener(handler: any): void
  addWheelListener(handler: any): void
  updateScale(newScale: any): void
  clearFrame(): void
}
declare class AdvancedAnimationControllerTripple extends AdvancedAnimationController {
  constructor(staticCanvas: any, dynamicCanvas: any, extraDynamicCanvases: any)
  extraDynamicCanvases: any
  extraDynamicAniamtion: SimpleAnimationController
  get extraDynamicCtx(): any
  drawExtraDynamic(): void
  addExtraDynamicElement(element: any): void
  removeExtraDynamicElement(element: any): void
  startExtraDynamicAnimation(): void
  stopExtraDynamicAnimation(): void
  clearExtraDynamicFrame(): void
}
declare class DomElement {
  constructor($element: any, onClick: any)
  $element: any
  show(): void
  hide(): void
  disable(): void
  enable(): void
}
declare class AnimationElement {
  constructor(ctx: any, x: any, y: any, rgbColor: any)
  ctx: any
  x: any
  y: any
  _color: any
  get color(): any
  draw(): void
  updateColor(rgbColor: any): void
}
declare class AnimationRendorElement extends AnimationElement {
  constructor(
    ctx: any,
    x: any,
    y: any,
    rgbColor: any,
    canvasWidth: any,
    canvasHeight: any
  )
  $renderCanvas: JQuery<HTMLElement>
  canvasWidth: any
  canvasHeight: any
  renderCanvas: AnimationCanvasCenter
  render(): void
}
declare class AnimationImageElement {
  constructor(ctx: any, x: any, y: any, imageCanvas: any)
  ctx: any
  x: any
  y: any
  imageCanvas: any
  draw(): void
}
declare class BubleImageElement extends AnimationImageElement {
  constructor(
    ctx: any,
    x: any,
    y: any,
    imageCanvas: any,
    horiAcc: any,
    horiChangeChance: any,
    maxHori: any,
    vertSpeed: any,
    vertGoal: any,
    vertGoalCallback: any,
    vertOpacityTrigger: any,
    opacityDropRate: any
  )
  horiAcc: any
  maxHori: any
  vertSpeed: any
  vertGoal: any
  vertGoalCallback: any
  horiSpeed: number
  horiDirection: number
  horiDirectionChangeChance: any
  opacity: number
  vertOpacityTrigger: any
  opacityDropRate: any
  draw(deltaTimeSeconds: any): void
}
declare class RandomBubleImageElement extends BubleImageElement {
  constructor(
    ctx: any,
    x: any,
    y: any,
    imageCanvas: any,
    horiAccMin: any,
    hoiiAccMax: any,
    horiChangeChanceMin: any,
    horiChangeChanceMax: any,
    maxHoriMin: any,
    maxHoriMax: any,
    vertSpeedMin: any,
    vertSpeedmax: any,
    vertGoal: any,
    vertGoalCallback: any,
    vertOpacityTrigger: any,
    opacityDropRate: any
  )
}
declare class StaticDonut extends AnimationElement {
  constructor(
    ctx: any,
    x: any,
    y: any,
    containerRadius: any,
    radiusPercent: any,
    clearPercent: any,
    rgbColor: any
  )
  radiusPercent: any
  clearPercent: any
  set containerRadius(arg: any)
  targetRadius: number | undefined
  targetClearRadius: number | undefined
}
declare class StaticGlowOrb extends AnimationElement {
  constructor(
    ctx: any,
    x: any,
    y: any,
    radius: any,
    glowRangePercent: any,
    glowFadeStartPercent: any,
    glowFadeEndPercent: any,
    rgbColor: any
  )
  baseRadius: any
  glowRangePercent: any
  glowFadeStartPercent: any
  glowFadeEndPercent: any
  centerGolor: RGB
  glowColor: any
  fadeStartColor: any
  fadeEndColor: any
}
declare class RotatingCircleSlice extends AnimationElement {
  constructor(
    ctx: any,
    x: any,
    y: any,
    startAngel: any,
    containerRadius: any,
    radiusPercent: any,
    angle: any,
    speed: any,
    rgbColor: any
  )
  currentAngle: any
  angle: any
  speed: any
  bonusSpeed: number
  _targetBonusSpeed: number
  oldBonusSpeed: number
  acceleration: number
  radiusPercent: any
  set containerRadius(arg: any)
  set targetBonusSpeed(arg: number)
  get targetBonusSpeed(): number
  targetRadius: number | undefined
  draw(deltaTimeSeconds: any): void
  DEFAULT_ACCELERATION_PERCENT: number
}
declare class AnimationParticle extends StaticGlowOrb {
  constructor(
    ctx: any,
    x: any,
    y: any,
    radius: any,
    glowRangePercent: any,
    glowFadeStartPercent: any,
    glowFadeEndPercent: any,
    rgbColor: any,
    speed: any,
    targetShape: any
  )
  speed: any
  bonusSpeed: number
  _targetBonusSpeed: number
  oldBonusSpeed: number
  acceleration: number
  targetShape: any
  _revereDirection: boolean
  currentFade: number
  fadeOut: boolean
  set targetBonusSpeed(arg: number)
  get targetBonusSpeed(): number
  get velucityX(): number
  get velucityY(): number
  set reverseDirection(arg: boolean)
  get reverseDirection(): boolean
  movedDistance: any
  calculateVelucity(): void
  normVector: any
  targetDistance: number | undefined
  targetReached(): void
  draw(deltaTimeSeconds: any): void
  DEFAULT_ACCELERATION_PERCENT: number
}
declare class AnimationRandomParticle extends AnimationParticle {
  constructor(
    ctx: any,
    glowRangePercent: any,
    glowFadeStartPercent: any,
    glowFadeEndPercent: any,
    rgbColor: any,
    targetShape: any,
    spawnShape: any,
    minSpeed: any,
    maxSpeed: any,
    minRadius: any,
    maxRadius: any
  )
  spawnShape: any
  minSpeed: any
  maxSpeed: any
  minRadius: any
  maxRadius: any
  randomize(spawnMoving: any): void
  fadeDistance: number | undefined
  nextTargetShape: any
}
declare class RGB {
  constructor(r?: number, g?: number, b?: number, opacity?: number)
  r: number
  g: number
  b: number
  opacity: number
  get string(): string
  clone(): RGB
}
declare class AnimationShapeCircle {
  constructor(x: any, y: any, radius: any)
  x: any
  y: any
  radius: any
  getRandomPointWithin(): {
    x: number
    y: number
  }
  generateShortestDirection(
    sourceX: any,
    sourceY: any
  ): {
    normVector: {
      x: number
      y: number
    }
    distance: number
  }
  calculateAngleToPoint(x: any, y: any): number | null
}
declare class AnimationShapeDonut {
  constructor(x: any, y: any, innerRadius: any, outerRadius: any)
  x: any
  y: any
  innerRadius: any
  outerRadius: any
  getRandomPointWithin(): {
    x: number
    y: number
  }
}
declare class CollisionShapeTriangle {
  constructor(cordOne: any, cordTwo: any, cordThree: any)
  cordOne: any
  cordTwo: any
  cordThree: any
  sign(targetX: any, targetY: any, pointOne: any, pointTwo: any): number
  pointInside(targetX: any, targetY: any): boolean
  pointInTriangle(targetX: any, targetY: any): boolean
}
declare class CollisionShapeSquare {
  constructor(corner: any, width: any, height: any)
  corner: any
  width: any
  height: any
  leftX: any
  rightX: any
  topY: any
  bottomY: any
  pointInside(targetX: any, targetY: any): boolean
}
declare class SpineAnimation {
  constructor(
    $container: any,
    jsonUrl: any,
    atlasUrl: any,
    lazyLoadInfo: any,
    onloadCallback: any,
    optionActive: any,
    startPoseId: any,
    delayPoseChange: any
  )
  $container: any
  $canvas: any
  jsonUrl: any
  atlasUrl: any
  poseId: any
  targetPoseId: any
  onloadCallback: any
  optionActive: any
  delayPoseChange: any
  buildStarted: boolean
  pauseOnStart: boolean
  lazyLoadHandler: LazyLoadHandler | null
  transitionFinishedHandler: any
  observer: ResizeObserver
  build(): void
  buildHead(): void
  setupApp(config: any): void
  spineApp: SpineApp | undefined
  spineCanvas: AMQSpineCanvas | undefined
  changePose(poseId: any): void
  updatePose(poseId: any): void
  destroy(): void
  pause(): void
  play(): void
  lazyLoadEvent(): void
  cancelLazyLoad(): void
  updateSizes(): void
  showOptionElement(): void
  hideOptionElement(): void
  SETUP_CONFIG: {
    STANDARD: {
      SIZE: number
      X_POS: number
      Y_POS: number
      ZOOM: number
    }
    HEAD: {
      SIZE: number
      X_POS: number
      Y_POS: number
      ZOOM: number
    }
  }
  DEFAULT_POSE_ID: number
  POSE_ID_ANIMATION_NAMES: {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
  }
  POSE_TRANSITION_ANIMATIONS: {
    1: {
      2: string
    }
    2: {
      3: string
      6: string
    }
    3: {
      4: string
      5: string
    }
    4: {
      2: string
    }
    5: {
      2: string
    }
    6: {
      2: string
    }
  }
  TOGGLE_ATTACHMENTS: string[]
}
declare class SpineApp {
  constructor(
    jsonSrc: any,
    atlasSrc: any,
    startAnimation: any,
    baseHeight: any,
    scaleXPos?: number,
    scaleYPos?: number,
    scaleZoom?: number
  )
  skeleton: any
  animationState: any
  canvas: any
  pma: boolean
  paused: boolean
  attachmentsToHideOnCreate: any[]
  jsonSrc: any
  atlasSrc: any
  startAnimation: any
  startAnimationLoop: boolean
  startAnimationQueue: any[]
  baseHeight: any
  scaleXPos: number
  scaleYPos: number
  scaleZoom: number
  loadAssets(canvas: any): void
  initialize(canvas: any): void
  loadSkeleton(
    jsonSrc: any,
    atlasSrc: any,
    animationName: any,
    animationLoop?: boolean,
    animationQueue?: any[]
  ): void
  setAttachments(attachments: any): void
  clearAttachments(attachments: any): void
  setAnimation(animationName: any, loop: any): void
  addAnimation(animationName: any, loop: any): void
  positionSkeleton(): void
  updateSize(): void
  update(canvas: any, delta: any): void
  render(canvas: any): void
  pause(): void
  play(): void
}
declare class AMQSpineCanvas {
  constructor(canvas: any, config: any)
  loopTerminated: boolean
  time: any
  htmlCanvas: any
  context: any
  renderer: any
  gl: any
  assetManager: any
  input: any
  stopLoop(): void
  clear(r: any, g: any, b: any, a: any): void
}
declare class SpriteAnimation {
  constructor(
    canvas: any,
    spriteName: any,
    flipSprite?: boolean,
    scale?: number,
    randomOffset?: boolean,
    speed?: number,
    loop?: boolean
  )
  canvas: any
  speed: number
  flipSprite: boolean
  loop: boolean
  scale: number
  randomOffset: boolean
  spriteSheet: any
  currentFrameNumber: number
  animationRunning: boolean
  get targetSpriteWidth(): number
  get canvasWidth(): any
  get canvasHeight(): any
  get spriteFrameCount(): any
  drawCurrentFrame(): void
  startAnimation(finishCallback: any): false | undefined
  finishCallback: any
  animationStartTimestamp: number | undefined
  tickAnimation(): void
  updateOffset(): void
  offsetX: number | undefined
  offsetY: number | undefined
  FPS: number
}
declare class SpriteSheet {
  constructor(
    sheetBufferedImage: any,
    spriteSize: any,
    colCount: any,
    rowCount: any
  )
  frames: SpriteSheetFrame[]
  cachedLoaded: boolean
  get loaded(): boolean
  get frameCount(): number
  getFrame(frameNumber: any): SpriteSheetFrame
}
declare class SpriteSheetFrame {
  constructor(bufferedImage: any, spriteSize: any, col: any, row: any)
  $canvas: JQuery<HTMLElement>
  canvas: HTMLElement
  ctx: any
  frameReady: boolean
  loadImage(image: any, spriteSize: any, col: any, row: any): void
}
declare class SpriteSheetBuffer {
  spriteSheets: {}
  get maxSize(): number
  loadSheet(name: any, targetSize: any): void
  loadAttackVFXSheet(name: any): void
  getSpriteSheet(name: any, targetSize: any): any
  getSizeFromTargetSize(targetSize: any): number | undefined
  SPRITE_SIZES: number[]
  SPRITE_SHEET_ROW_COUNT: number
  SPRITE_SHEET_COL_COUNT: number
  BUFFER_CATEGORY: string
}
declare var spriteSheetBuffer: SpriteSheetBuffer
declare class AudioController {
  audioGroups: {
    nexusDungeonOst: AudioGroup
    cityOstGroup: AudioGroup
    nexusSfx: AudioGroup
  }
  nexusMasterVolume: number
  getGroup(name: any): any
  updateNexusMasterVolume(newValue: any): void
  updateNexusOSTVolume(newValue: any): void
  updateCityOSTVolume(newValue: any): void
  updateNexusSfxVolume(newValue: any): void
  updateAllVolumesToNewMean(): void
}
declare class AudioGroup {
  elements: {}
  localeVolume: number
  fadePercent: number
  get volume(): number
  addElement(name: any, element: any): void
  addDynamicBufferElement(
    name: any,
    src: any,
    loop: any,
    meanVolume: any,
    bufferCallback?: () => void
  ): void
  waitLoad(callback: any): void
  playTrack(name: any, ownInstance: any): void
  resetAll(): void
  stopTrack(name: any): void
  updateLocaleVolume(newVolume: any): void
  updateVolumes(): void
  fadeTrack(name: any, fadePercent: any, duration: any): void
  pauseTrack(name: any): void
  trackReady(name: any): any
}
declare var audioController: AudioController
declare class AudioElement {
  constructor(src: any, loop: any, meanVolume: any)
  howl: any
  loaded: boolean
  loadListeners: any[]
  endListener: any[]
  meanVolume: any
  load(callback: any): void
  play(ownInstance: any): void
  activeId: any
  pause(): void
  reset(): void
  stop(): void
  updateVolume(newVolume: any): void
  fade(targetVolume: any, duration: any): void
}
declare class AudioLoopElementChain {
  constructor(introSource: any, bodySrc: any, meanVolume: any)
  introElement: AudioElement
  bodyElement: AudioElement
  inBody: boolean
  stopped: boolean
  get loaded(): boolean
  get activeElement(): AudioElement
  load(callback: any): void
  play(): void
  pause(): void
  reset(): void
  stop(): void
  updateVolume(newVolume: any): void
  fade(targetVolume: any, duration: any): void
}
declare function AvatarDrive(): void
declare class AvatarDrive {
  top5Nominations: any[]
  top5AllTime: any[]
  top5Monthly: any[]
  top5Weekly: any[]
  recentDonations: any[]
  totalDonations: number
  DRIVE_GOAL: number
  TOP_TAB_STATES: {
    WEEKLY: number
    MONTLY: number
    ALL_TIME: number
  }
  topTabCurrentState: number
  STANDING_ENTRIES: JQuery<HTMLElement>[]
  TOP_ENTIRES: JQuery<HTMLElement>[]
  RECENT_ENTIRES: JQuery<HTMLElement>[]
  $TOP_TABS: JQuery<HTMLElement>
  $ALL_TIME_TAB: JQuery<HTMLElement>
  $MONTHLY_TAB: JQuery<HTMLElement>
  $WEEKLY_TAB: JQuery<HTMLElement>
  $PROGRESS_BAR: JQuery<HTMLElement>
  $TOTAL_TEXT: JQuery<HTMLElement>
  $GOAL_TEXT: JQuery<HTMLElement>
  _$FREE_DONATION_HIGHLIGHT: JQuery<HTMLElement>
  newDonationListener: void
  newAvatarListener: void
  setup(
    top5Nominations: any,
    top5AllTime: any,
    top5Monthly: any,
    top5Weekly: any,
    recentDonations: any,
    total: any,
    gotFreeDonation: any
  ): void
  updateTop5Nominations(): void
  updateTop5AllTime(): void
  updateTop5Monthly(): void
  updateTop5Weekly(): void
  updateTop5Donators(list: any): void
  updateRecent(): void
  updateBar(): void
  updateAll(): void
  clearTopTab(): void
  formatValue(value: any): string
  showModal(showDonationTab: any): void
}
declare var avatarDrive: AvatarDrive
declare function AvatarDriveModal(): void
declare class AvatarDriveModal {
  $MODAL: JQuery<HTMLElement>
  $STANDING_LIST: JQuery<HTMLElement>
  $STANDING_CONTAINER: JQuery<HTMLElement>
  $FAQ_CONTAINER: JQuery<HTMLElement>
  $DONATION_CONTAINER: JQuery<HTMLElement>
  $DONATION_BUTTON: JQuery<HTMLElement>
  $DONATION_DESCRIPTION: JQuery<HTMLElement>
  $DONATION_CHOICE_TEXT: JQuery<HTMLElement>
  _$FREE_DONATION_TOGGLE: JQuery<HTMLElement>
  _$FREE_AMOUNT_CONTAINER: JQuery<HTMLElement>
  _$PAYPAL_AMOUNT_CONTAINER: JQuery<HTMLElement>
  _$FREE_DONATION_CHECKBOX: JQuery<HTMLElement>
  STANDING_ENTRY_TEMPLATE: string
  standingListener: Listener
  _patreonChangeListner: void
  setup(backerLevel: any, gotFreeDonation: any): void
  show(showDonation: any): void
  showDonation(): void
  hideDonation(): void
  requestStandings(): void
  showNominatedDonations(): void
  showNewDonations(): void
  showNoneDonations(): void
  toggleFreeDonation(on: any): void
  updateFreeDonationState(backerLevel: any, gotFreeDonation: any): void
  sendFreeDonation(): void
  getDonationInfo(): {
    type: number
    description: string | number | string[] | undefined
    avatarSelected: string
    anon: boolean
    value: string | number | string[] | undefined
  }
}
declare let avatarDriveModal: AvatarDriveModal
declare class CheatTestGame {
  songEntries: any[]
  modView: boolean
  $challengeContainer: JQuery<HTMLElement>
  $selector: JQuery<HTMLElement>
  $note: JQuery<HTMLElement>
  $modContainers: JQuery<HTMLElement>
  targetJoinListener: Listener
  targetLeftListener: Listener
  gameClosedListner: Listener
  playSongListner: Listener
  newAnswerListener: Listener
  resetAnswerListener: Listener
  get $view(): any
  get answerInput(): any
  set inQuiz(arg: any)
  get inQuiz(): any
  get videoOverlay(): any
  get avatarContainer(): any
  get skipController(): any
  setup(originalQuiz: any): void
  _quizController: any
  openView(callback: any): void
  closeView(args: any): void
  setupModMode(songs: any, note: any, challengeId: any): void
  challengeId: any
  setupTargetMode(challengeId: any, player: any): void
  invitePlayer(): void
  resetAnswer(): void
  issueBan(): void
  issueNoBan(): void
  displayPlayer(player: any): void
  gamePlayer: QuizPlayer | undefined
}
declare var cheatTestGame: CheatTestGame
declare class CheatTestSongEntry {
  constructor(
    {
      songId,
      videoLink,
      songName,
      artist,
      animeNames,
      note,
      correct,
    }: {
      songId: any
      videoLink: any
      songName: any
      artist: any
      animeNames: any
      note: any
      correct: any
    },
    challengeId: any
  )
  $body: JQuery<HTMLElement>
  $animeContainer: JQuery<HTMLElement>
  $note: JQuery<HTMLElement>
  songId: any
  challengeId: any
  setPlaying(playing: any): void
  TEMPLATE: string
}
declare class CheatTestModal {
  $modal: JQuery<HTMLElement>
  $modView: JQuery<HTMLElement>
  $modEntries: JQuery<HTMLElement>
  $testeeView: JQuery<HTMLElement>
  $triggerContainer: JQuery<HTMLElement>
  $testTimeContainer: JQuery<HTMLElement>
  $triggerHighlight: JQuery<HTMLElement>
  $openCloseNoticeButton: JQuery<HTMLElement>
  $openCloseChevarons: JQuery<HTMLElement>
  modEntries: {}
  targetMode: boolean
  open: boolean
  noticeOpen: boolean
  setupCheatTestGameListener: Listener
  cheatTestGameIniteListener: Listener
  setup(isMod: any, testInfo: any): void
  messageController: CheatTestChatController | undefined
  toggleHighlight(on: any): void
  updateTargetLastViewMessageIndex(challengeId: any, newIndex: any): void
  updateModHighlightToggle(): void
  removeEntry(challengeId: any): void
  hideContainer(): void
}
declare class CheatTestModEntry {
  constructor({
    challengeId,
    name,
    status,
    time,
    messages,
    lastMessageIndex,
  }: {
    challengeId: any
    name: any
    status: any
    time: any
    messages: any
    lastMessageIndex: any
  })
  challengeId: any
  messages: any
  $row: JQuery<HTMLElement>
  $highlight: JQuery<HTMLElement>
  highlightOn: boolean
  newMessageListener: Listener
  toggleHighlight(on: any): void
  MODAL_ROW_TEMPLATE: string
}
declare class CheatTestChatController {
  $messageContainer: JQuery<HTMLElement>
  $messageInput: JQuery<HTMLElement>
  messageCount: number
  newMessageListener: Listener
  get scrollAtBottom(): boolean
  setupForChallenge(challengeId: any, messages: any): void
  currentChallengeId: any
  insertMessage(name: any, message: any): void
  updateScroll(forceBottom: any): void
  MESSAGE_TEMPLATE: string
}
declare var cheatTestModal: CheatTestModal
declare class EmojiSelector {
  gameMenu: EmojiSelectorGameMenu | null
  nexusCoopMenu: EmojiSelectorMenu | null
  setup(recentEmotes: any): void
  buildEntries(): void
  buildRecent(): void
  open(): void
  close(): void
  insertRecentEmote(emoteId: any, emojiId: any, shortCode: any): void
  removeRecentEmoji(emojiId: any): void
  setLockInMode(on: any): void
  lockInEmoteInMsg(msg: any): void
}
declare class EmojiSelectorMenu {
  constructor(
    $container: any,
    $button: any,
    $inputContainer: any,
    selectionCallback: any
  )
  $mainContainer: any
  $container: any
  $button: any
  $inputContainer: any
  selectionCallback: any
  $allEmoteContainer: any
  $recentEmoteContainer: any
  isOpen: boolean
  entries: any[]
  recentEmotes: any[]
  MAX_NUMBER_OF_RECENT: number
  setup(recentEmotes: any): void
  setupRecent(recentEmotes: any): void
  insertRecentEmote(emoteId: any, emojiId: any, shortCode: any): void
  buildRecent(): void
  buildEntries(): void
  createEmoteEntry(emoteInfo: any, emoteId: any): EmojiSelectorEntry
  insertEmote(emoteInfo: any): void
  createEmojiEntry(emojiInfo: any, emojiId: any): EmojiSelectorEntry
  insertEmoji(emojiInfo: any): void
  createShortCodeEntry(shortcode: any): EmojiSelectorEntry | null
  removeRecentEmoji(emojiId: any): void
  open(): void
  close(): void
}
declare class EmojiSelectorGameMenu extends EmojiSelectorMenu {
  constructor(
    $container: any,
    $button: any,
    $input: any,
    selectionCallback: any,
    $lockInContainer: any
  )
  $lockInContainer: any
  setLockInMode(on: any): void
  lockInEmoteInMsg(msg: any): void
  clearLockedInEmote(): void
  setLockedInEmote($emote: any): void
}
declare class EmojiSelectorEntry {
  constructor(
    name: any,
    src: any,
    srcSet: any,
    locked: any,
    $container: any,
    emoteId: any,
    emojiId: any,
    shortCode: any,
    callback: any
  )
  name: any
  emoteId: any
  emojiId: any
  shortCode: any
  $entry: JQuery<HTMLElement>
  preLoadImage: PreloadImage
  TEMPLATE: string
}
declare var emojiSelector: EmojiSelector
declare function translateShortcodeToUnicode(text: any): {
  text: any
  codeMap: {}
}
declare function getShortCodesInMessage(msg: any): string[]
declare function getEmojisInMessage(msg: any): string[]
declare function messageContainsShortcodes(msg: any): boolean
declare function getShortCodeMatchingStart(startText: any): string[]
declare const EMOJI_SHORTCODE_MAP: {
  ':ideograph_advantage:': number[]
  ':ophiuchus:': number[]
  ':flag-gt:': number[]
  ':label:': number[]
  ':gift_heart:': number[]
  ':headphones:': number[]
  ':baggage_claim:': number[]
  ':crossed_swords:': number[]
  ':flag-sy:': number[]
  ':barber:': number[]
  ':astonished:': number[]
  ':bath:': number[]
  ':flag-uz:': number[]
  ':flag-jm:': number[]
  ':poodle:': number[]
  ':sweat:': number[]
  ':massage:': number[]
  ':small_red_triangle:': number[]
  ':arrow_down_small:': number[]
  ':full_moon:': number[]
  ':flag-na:': number[]
  ':cop:': number[]
  ':disappointed:': number[]
  ':cityscape:': number[]
  ':person_with_pouting_face:': number[]
  ':flag-uy:': number[]
  ':flag-sj:': number[]
  ':video_camera:': number[]
  ':question:': number[]
  ':radioactive:': number[]
  ':bullettrain_front:': number[]
  ':kissing_cat:': number[]
  ':clock430:': number[]
  ':u7981:': number[]
  ':two_men_holding_hands:': number[]
  ':pig_nose:': number[]
  ':railway_car:': number[]
  ':poop:': number[]
  ':tanabata_tree:': number[]
  ':light_rail:': number[]
  ':cl:': number[]
  ':bridge_at_night:': number[]
  ':yen:': number[]
  ':flag-bn:': number[]
  ':grimacing:': number[]
  ':weary:': number[]
  ':tomato:': number[]
  ':flag-gl:': number[]
  ':flag-kz:': number[]
  ':boom:': number[]
  ':microphone:': number[]
  ':angry:': number[]
  ':smirk:': number[]
  ':clock1:': number[]
  ':flag-pm:': number[]
  ':black_medium_small_square:': number[]
  ':u5272:': number[]
  ':haircut:': number[]
  ':flag-gi:': number[]
  ':sound:': number[]
  ':vs:': number[]
  ':underage:': number[]
  ':up:': number[]
  ':flag-ls:': number[]
  ':japanese_castle:': number[]
  ':flag-nr:': number[]
  ':minibus:': number[]
  ':flag-ps:': number[]
  ':guitar:': number[]
  ':flag-kp:': number[]
  ':leftwards_arrow_with_hook:': number[]
  ':flag-mt:': number[]
  ':chart_with_downwards_trend:': number[]
  ':smiley:': number[]
  ':place_of_worship:': number[]
  ':crown:': number[]
  ':bank:': number[]
  ':rage:': number[]
  ':arrow_upper_right:': number[]
  ':flag-kg:': number[]
  ':worried:': number[]
  ':bee:': number[]
  ':clapper:': number[]
  ':thinking:': number[]
  ':flag-is:': number[]
  ':airplane:': number[]
  ':sa:': number[]
  ':slot_machine:': number[]
  ':joystick:': number[]
  ':flag-id:': number[]
  ':cow2:': number[]
  ':smiling_imp:': number[]
  ':clock230:': number[]
  ':fr:': number[]
  ':milky_way:': number[]
  ':flag-vi:': number[]
  ':tophat:': number[]
  ':flag_ag:': number[]
  ':page_with_curl:': number[]
  ':flag-bf:': number[]
  ':crab:': number[]
  ':fireworks:': number[]
  ':steam_locomotive:': number[]
  ':womans_clothes:': number[]
  ':fire_engine:': number[]
  ':flag-me:': number[]
  ':purse:': number[]
  ':hushed:': number[]
  ':flag-tn:': number[]
  ':microscope:': number[]
  ':control_knobs:': number[]
  ':sake:': number[]
  ':sunrise:': number[]
  ':rice:': number[]
  ':flag-eh:': number[]
  ':alarm_clock:': number[]
  ':kiss:': number[]
  ':flag-cz:': number[]
  ':honey_pot:': number[]
  ':small_red_triangle_down:': number[]
  ':flag-dm:': number[]
  ':flag-mw:': number[]
  ':flag-ir:': number[]
  ':hourglass:': number[]
  ':flag-dz:': number[]
  ':capricorn:': number[]
  ':fried_shrimp:': number[]
  ':flag-sh:': number[]
  ':slight_smile:': number[]
  ':flag-tf:': number[]
  ':diamond_shape_with_a_dot_inside:': number[]
  ':see_no_evil:': number[]
  ':flag-fo:': number[]
  ':octagonal_sign:': number[]
  ':white_medium_small_square:': number[]
  ':flag-vn:': number[]
  ':flag-hu:': number[]
  ':baby_symbol:': number[]
  ':point_down:': number[]
  ':palm_tree:': number[]
  ':european_castle:': number[]
  ':flag-sb:': number[]
  ':mans_shoe:': number[]
  ':package:': number[]
  ':mountain:': number[]
  ':taxi:': number[]
  ':free:': number[]
  ':six:': number[]
  ':white_small_square:': number[]
  ':white_check_mark:': number[]
  ':lemon:': number[]
  ':flag-mk:': number[]
  ':heart_decoration:': number[]
  ':flag-mq:': number[]
  ':flag-om:': number[]
  ':flag-ic:': number[]
  ':corn:': number[]
  ':persevere:': number[]
  ':japan:': number[]
  ':pick:': number[]
  ':man:': number[]
  ':wine_glass:': number[]
  ':flag-lt:': number[]
  ':sweat_drops:': number[]
  ':flag-cf:': number[]
  ':octopus:': number[]
  ':heavy_minus_sign:': number[]
  ':flag-bt:': number[]
  ':tired_face:': number[]
  ':video_game:': number[]
  ':partly_sunny:': number[]
  ':lock_with_ink_pen:': number[]
  ':flag-tl:': number[]
  ':broken_heart:': number[]
  ':flag-tv:': number[]
  ':soon:': number[]
  ':wrench:': number[]
  ':flag-qa:': number[]
  ':izakaya_lantern:': number[]
  ':open_hands:': number[]
  ':five:': number[]
  ':white_medium_square:': number[]
  ':panda_face:': number[]
  ':large_orange_diamond:': number[]
  ':bikini:': number[]
  ':flag-jo:': number[]
  ':spaghetti:': number[]
  ':ice_cream:': number[]
  ':cat2:': number[]
  ':confused:': number[]
  ':fish:': number[]
  ':dog2:': number[]
  ':monkey:': number[]
  ':joy:': number[]
  ':trophy:': number[]
  ':flag-tj:': number[]
  ':hearts:': number[]
  ':flag-fi:': number[]
  ':mailbox_closed:': number[]
  ':clubs:': number[]
  ':u7533:': number[]
  ':flag_black:': number[]
  ':flag-ug:': number[]
  ':arrow_backward:': number[]
  ':information_desk_person:': number[]
  ':dizzy:': number[]
  ':black_square_button:': number[]
  ':flag-bg:': number[]
  ':flag-kh:': number[]
  ':flag-md:': number[]
  ':no_bell:': number[]
  ':flashlight:': number[]
  ':flag-ss:': number[]
  ':film_frames:': number[]
  ':smiley_cat:': number[]
  ':cocktail:': number[]
  ':coffin:': number[]
  ':flag-um:': number[]
  ':oncoming_bus:': number[]
  ':white_square_button:': number[]
  ':flag-pa:': number[]
  ':flag-ck:': number[]
  ':whale:': number[]
  ':arrow_lower_left:': number[]
  ':flag-lr:': number[]
  ':flag-pf:': number[]
  ':point_left:': number[]
  ':flag-it:': number[]
  ':oden:': number[]
  ':cow:': number[]
  ':telephone:': number[]
  ':disappointed_relieved:': number[]
  ':hear_no_evil:': number[]
  ':skull:': number[]
  ':secret:': number[]
  ':flag-ht:': number[]
  ':file_folder:': number[]
  ':anguished:': number[]
  ':poultry_leg:': number[]
  ':flag-ga:': number[]
  ':walking:': number[]
  ':ferry:': number[]
  ':person_frowning:': number[]
  ':cyclone:': number[]
  ':cinema:': number[]
  ':horse:': number[]
  ':paperclip:': number[]
  ':triangular_ruler:': number[]
  ':clock12:': number[]
  ':arrow_up_down:': number[]
  ':evergreen_tree:': number[]
  ':train2:': number[]
  ':japanese_goblin:': number[]
  ':ambulance:': number[]
  ':bento:': number[]
  ':three:': number[]
  ':on:': number[]
  ':confounded:': number[]
  ':biohazard:': number[]
  ':airplane_departure:': number[]
  ':flag-cr:': number[]
  ':flag-se:': number[]
  ':clock9:': number[]
  ':arrow_right_hook:': number[]
  ':heavy_dollar_sign:': number[]
  ':dress:': number[]
  ':pager:': number[]
  ':seven:': number[]
  ':low_brightness:': number[]
  ':flag-gm:': number[]
  ':speech_left:': number[]
  ':bug:': number[]
  ':bird:': number[]
  ':smile_cat:': number[]
  ':speech_balloon:': number[]
  ':stew:': number[]
  ':u55b6:': number[]
  ':japanese_ogre:': number[]
  ':droplet:': number[]
  ':fog:': number[]
  ':flag-pr:': number[]
  ':flag_al:': number[]
  ':flag-va:': number[]
  ':skull_crossbones:': number[]
  ':flag-ao:': number[]
  ':school_satchel:': number[]
  ':kissing_heart:': number[]
  ':recycle:': number[]
  ':cupid:': number[]
  ':closed_umbrella:': number[]
  ':put_litter_in_its_place:': number[]
  ':doughnut:': number[]
  ':blowfish:': number[]
  ':flag-cx:': number[]
  ':eyeglasses:': number[]
  ':flag_wf:': number[]
  ':u5408:': number[]
  ':bathtub:': number[]
  ':wheel_of_dharma:': number[]
  ':dog:': number[]
  ':flag-cd:': number[]
  ':play_pause:': number[]
  ':articulated_lorry:': number[]
  ':eye:': number[]
  ':iphone:': number[]
  ':flag-tk:': number[]
  ':flag-cl:': number[]
  ':traffic_light:': number[]
  ':star_and_crescent:': number[]
  ':oncoming_automobile:': number[]
  ':green_heart:': number[]
  ':candle:': number[]
  ':flag-pt:': number[]
  ':last_quarter_moon:': number[]
  ':woman:': number[]
  ':calling:': number[]
  ':flag-ms:': number[]
  ':hammer:': number[]
  ':desert:': number[]
  ':aerial_tramway:': number[]
  ':star_of_david:': number[]
  ':sob:': number[]
  ':no_mobile_phones:': number[]
  ':no_mouth:': number[]
  ':part_alternation_mark:': number[]
  ':zap:': number[]
  ':sunglasses:': number[]
  ':cry:': number[]
  ':mailbox_with_no_mail:': number[]
  ':dark_sunglasses:': number[]
  ':flag-bj:': number[]
  ':end:': number[]
  ':flag_ac:': number[]
  ':flag-gq:': number[]
  ':stadium:': number[]
  ':heart_exclamation:': number[]
  ':notebook:': number[]
  ':dash:': number[]
  ':white_circle:': number[]
  ':flag_vu:': number[]
  ':wind_chime:': number[]
  ':tea:': number[]
  ':waning_gibbous_moon:': number[]
  ':flag-lc:': number[]
  ':flag-pw:': number[]
  ':drum:': number[]
  ':black_small_square:': number[]
  ':wolf:': number[]
  ':pisces:': number[]
  ':flag_am:': number[]
  ':arrow_right:': number[]
  ':handbag:': number[]
  ':flag-gs:': number[]
  ':dancer:': number[]
  ':libra:': number[]
  ':running_shirt_with_sash:': number[]
  ':womans_hat:': number[]
  ':flag-ng:': number[]
  ':flag-ea:': number[]
  ':pig:': number[]
  ':ring:': number[]
  ':arrow_lower_right:': number[]
  ':angel:': number[]
  ':checkered_flag:': number[]
  ':bullettrain_side:': number[]
  ':womens:': number[]
  ':waxing_crescent_moon:': number[]
  ':ant:': number[]
  ':flag-im:': number[]
  ':spider_web:': number[]
  ':bouquet:': number[]
  ':last_quarter_moon_with_face:': number[]
  ':dolls:': number[]
  ':a:': number[]
  ':flag_white:': number[]
  ':ship:': number[]
  ':sunny:': number[]
  ':flag-sa:': number[]
  ':smirk_cat:': number[]
  ':chicken:': number[]
  ':heart_eyes_cat:': number[]
  ':basketball:': number[]
  ':relieved:': number[]
  ':curly_loop:': number[]
  ':popcorn:': number[]
  ':flag-sl:': number[]
  ':clock6:': number[]
  ':one:': number[]
  ':tongue:': number[]
  ':busstop:': number[]
  ':flag-ph:': number[]
  ':first_quarter_moon_with_face:': number[]
  ':flag-lb:': number[]
  ':department_store:': number[]
  ':post_office:': number[]
  ':incoming_envelope:': number[]
  ':key:': number[]
  ':golf:': number[]
  ':thumbsdown:': number[]
  ':file_cabinet:': number[]
  ':chocolate_bar:': number[]
  ':page_facing_up:': number[]
  ':trolleybus:': number[]
  ':nine:': number[]
  ':anger:': number[]
  ':euro:': number[]
  ':wavy_dash:': number[]
  ':track_next:': number[]
  ':cookie:': number[]
  ':bowling:': number[]
  ':sandal:': number[]
  ':sagittarius:': number[]
  ':link:': number[]
  ':shopping_bags:': number[]
  ':gift:': number[]
  ':radio_button:': number[]
  ':motorway:': number[]
  ':wheelchair:': number[]
  ':white_flower:': number[]
  ':u6307:': number[]
  ':flag-mp:': number[]
  ':rat:': number[]
  ':train:': number[]
  ':arrow_up:': number[]
  ':balloon:': number[]
  ':full_moon_with_face:': number[]
  ':flag-ml:': number[]
  ':hamburger:': number[]
  ':flag-gb:': number[]
  ':herb:': number[]
  ':first_quarter_moon:': number[]
  ':eggplant:': number[]
  ':statue_of_liberty:': number[]
  ':egg:': number[]
  ':pear:': number[]
  ':cold_sweat:': number[]
  ':loudspeaker:': number[]
  ':mahjong:': number[]
  ':metro:': number[]
  ':arrow_upper_left:': number[]
  ':flag-hr:': number[]
  ':flag-no:': number[]
  ':flag-do:': number[]
  ':white_large_square:': number[]
  ':hot_pepper:': number[]
  ':flushed:': number[]
  ':dollar:': number[]
  ':high_brightness:': number[]
  ':cactus:': number[]
  ':volcano:': number[]
  ':unlock:': number[]
  ':flag-py:': number[]
  ':compression:': number[]
  ':flag-il:': number[]
  ':hotel:': number[]
  ':chipmunk:': number[]
  ':toilet:': number[]
  ':flag-mn:': number[]
  ':bamboo:': number[]
  ':dvd:': number[]
  ':flag-cm:': number[]
  ':baby_chick:': number[]
  ':family:': number[]
  ':church:': number[]
  ':flag-cu:': number[]
  ':ocean:': number[]
  ':anger_right:': number[]
  ':mag:': number[]
  ':bicyclist:': number[]
  ':flag-cv:': number[]
  ':hourglass_flowing_sand:': number[]
  ':open_file_folder:': number[]
  ':repeat_one:': number[]
  ':arrow_double_up:': number[]
  ':id:': number[]
  ':melon:': number[]
  ':boar:': number[]
  ':flag-td:': number[]
  ':flag-sv:': number[]
  ':cake:': number[]
  ':dolphin:': number[]
  ':joy_cat:': number[]
  ':new_moon:': number[]
  ':tennis:': number[]
  ':golfer:': number[]
  ':flag-bw:': number[]
  ':bride_with_veil:': number[]
  ':writing_hand:': number[]
  ':rice_cracker:': number[]
  ':clock130:': number[]
  ':expressionless:': number[]
  ':banana:': number[]
  ':mens:': number[]
  ':water_buffalo:': number[]
  ':flag-br:': number[]
  ':flag-as:': number[]
  ':flag-ly:': number[]
  ':abcd:': number[]
  ':pensive:': number[]
  ':flag-bv:': number[]
  ':clock5:': number[]
  ':triumph:': number[]
  ':thermometer:': number[]
  ':house_with_garden:': number[]
  ':clock930:': number[]
  ':truck:': number[]
  ':chart:': number[]
  ':flag-ch:': number[]
  ':rabbit:': number[]
  ':star:': number[]
  ':rolling_eyes:': number[]
  ':fearful:': number[]
  ':gear:': number[]
  ':cool:': number[]
  ':flag-mv:': number[]
  ':flag-ge:': number[]
  ':repeat:': number[]
  ':waning_crescent_moon:': number[]
  ':radio:': number[]
  ':flag_yt:': number[]
  ':raised_hands:': number[]
  ':earth_americas:': number[]
  ':currency_exchange:': number[]
  ':flag-gn:': number[]
  ':blue_heart:': number[]
  ':flag-gp:': number[]
  ':yum:': number[]
  ':cd:': number[]
  ':hibiscus:': number[]
  ':flag-cc:': number[]
  ':flag-dj:': number[]
  ':abc:': number[]
  ':sunflower:': number[]
  ':custard:': number[]
  ':small_blue_diamond:': number[]
  ':candy:': number[]
  ':flag-cn:': number[]
  ':notes:': number[]
  ':tram:': number[]
  ':flag-ne:': number[]
  ':taco:': number[]
  ':black_medium_square:': number[]
  ':hatching_chick:': number[]
  ':koala:': number[]
  ':flag-si:': number[]
  ':beginner:': number[]
  ':shield:': number[]
  ':tada:': number[]
  ':fire:': number[]
  ':lock:': number[]
  ':computer:': number[]
  ':vertical_traffic_light:': number[]
  ':calendar:': number[]
  ':flag-lu:': number[]
  ':om_symbol:': number[]
  ':flag-ba:': number[]
  ':flag-be:': number[]
  ':skier:': number[]
  ':point_up_2:': number[]
  ':eyes:': number[]
  ':seedling:': number[]
  ':flag-dg:': number[]
  ':ok:': number[]
  ':symbols:': number[]
  ':dango:': number[]
  ':camera_with_flash:': number[]
  ':athletic_shoe:': number[]
  ':mobile_phone_off:': number[]
  ':wind_blowing_face:': number[]
  ':amphora:': number[]
  ':globe_with_meridians:': number[]
  ':money_with_wings:': number[]
  ':sun_with_face:': number[]
  ':flag-nc:': number[]
  ':girl:': number[]
  ':cancer:': number[]
  ':camel:': number[]
  ':jeans:': number[]
  ':flag-nf:': number[]
  ':flag-sx:': number[]
  ':construction:': number[]
  ':flag-mh:': number[]
  ':kissing_closed_eyes:': number[]
  ':umbrella:': number[]
  ':grey_question:': number[]
  ':four_leaf_clover:': number[]
  ':shaved_ice:': number[]
  ':flag-ca:': number[]
  ':closed_book:': number[]
  ':flag_ye:': number[]
  ':nerd:': number[]
  ':movie_camera:': number[]
  ':flag-ma:': number[]
  ':clock3:': number[]
  ':school:': number[]
  ':ghost:': number[]
  ':spades:': number[]
  ':fishing_pole_and_fish:': number[]
  ':bookmark_tabs:': number[]
  ':rosette:': number[]
  ':heavy_check_mark:': number[]
  ':flag-at:': number[]
  ':closed_lock_with_key:': number[]
  ':ice_skate:': number[]
  ':non-potable_water:': number[]
  ':o2:': number[]
  ':sunrise_over_mountains:': number[]
  ':grinning:': number[]
  ':u6e80:': number[]
  ':yellow_heart:': number[]
  ':scissors:': number[]
  ':flag-li:': number[]
  ':flag-ax:': number[]
  ':apple:': number[]
  ':tropical_fish:': number[]
  ':card_index:': number[]
  ':surfer:': number[]
  ':satellite:': number[]
  ':nut_and_bolt:': number[]
  ':older_man:': number[]
  ':flag-sk:': number[]
  ':black_heart:': number[]
  ':flag_ae:': number[]
  ':chart_with_upwards_trend:': number[]
  ':flag-jp:': number[]
  ':office:': number[]
  ':cross:': number[]
  ':fax:': number[]
  ':heart_eyes:': number[]
  ':heavy_multiplication_x:': number[]
  ':cherry_blossom:': number[]
  ':sheep:': number[]
  ':police_car:': number[]
  ':flag-pl:': number[]
  ':flag-us:': number[]
  ':mega:': number[]
  ':snowflake:': number[]
  ':lips:': number[]
  ':syringe:': number[]
  ':electric_plug:': number[]
  ':synagogue:': number[]
  ':no_entry:': number[]
  ':arrow_down:': number[]
  ':circus_tent:': number[]
  ':spider:': number[]
  ':scorpius:': number[]
  ':clock1230:': number[]
  ':do_not_litter:': number[]
  ':gun:': number[]
  ':ox:': number[]
  ':upside_down:': number[]
  ':flag-sg:': number[]
  ':couplekiss:': number[]
  ':princess:': number[]
  ':moyai:': number[]
  ':red_circle:': number[]
  ':fuelpump:': number[]
  ':loud_sound:': number[]
  ':wink:': number[]
  ':dart:': number[]
  ':tropical_drink:': number[]
  ':flag-gg:': number[]
  ':left_right_arrow:': number[]
  ':aquarius:': number[]
  ':ram:': number[]
  ':maple_leaf:': number[]
  ':high_heel:': number[]
  ':icecream:': number[]
  ':blossom:': number[]
  ':flag_ad:': number[]
  ':bear:': number[]
  ':soccer:': number[]
  ':foggy:': number[]
  ':flag-ro:': number[]
  ':flag-sz:': number[]
  ':flag-cp:': number[]
  ':minidisc:': number[]
  ':football:': number[]
  ':construction_worker:': number[]
  ':carousel_horse:': number[]
  ':b:': number[]
  ':beer:': number[]
  ':flag_af:': number[]
  ':us:': number[]
  ':ticket:': number[]
  ':sleepy:': number[]
  ':clipboard:': number[]
  ':shamrock:': number[]
  ':flag_za:': number[]
  ':flag-gd:': number[]
  ':camera:': number[]
  ':european_post_office:': number[]
  ':arrow_forward:': number[]
  ':smile:': number[]
  ':flag-in:': number[]
  ':flag-iq:': number[]
  ':vibration_mode:': number[]
  ':pig2:': number[]
  ':o:': number[]
  ':name_badge:': number[]
  ':sparkle:': number[]
  ':pushpin:': number[]
  ':monorail:': number[]
  ':exclamation:': number[]
  ':flag-mz:': number[]
  ':earth_africa:': number[]
  ':cherries:': number[]
  ':wedding:': number[]
  ':peach:': number[]
  ':point_up:': number[]
  ':inbox_tray:': number[]
  ':new:': number[]
  ':flag-sc:': number[]
  ':ribbon:': number[]
  ':flag-dk:': number[]
  ':musical_score:': number[]
  ':flag-ki:': number[]
  ':trident:': number[]
  ':scream:': number[]
  ':pizza:': number[]
  ':eight:': number[]
  ':flag-mr:': number[]
  ':taurus:': number[]
  ':information_source:': number[]
  ':flag-km:': number[]
  ':crystal_ball:': number[]
  ':flag-sr:': number[]
  ':flag-de:': number[]
  ':ledger:': number[]
  ':ok_woman:': number[]
  ':flag-pe:': number[]
  ':tiger:': number[]
  ':runner:': number[]
  ':sushi:': number[]
  ':flag-ve:': number[]
  ':books:': number[]
  ':santa:': number[]
  ':crying_cat_face:': number[]
  ':flag-cy:': number[]
  ':flag-my:': number[]
  ':flag-ni:': number[]
  ':curry:': number[]
  ':cat:': number[]
  ':person_with_blond_hair:': number[]
  ':8ball:': number[]
  ':station:': number[]
  ':pouting_cat:': number[]
  ':kaaba:': number[]
  ':arrow_heading_down:': number[]
  ':volleyball:': number[]
  ':briefcase:': number[]
  ':mag_right:': number[]
  ':busts_in_silhouette:': number[]
  ':flag-pk:': number[]
  ':whale2:': number[]
  ':leo:': number[]
  ':stuck_out_tongue:': number[]
  ':arrow_double_down:': number[]
  ':flag-bi:': number[]
  ':flag-tz:': number[]
  ':flag-fm:': number[]
  ':grin:': number[]
  ':u6708:': number[]
  ':flag-tc:': number[]
  ':middle_finger:': number[]
  ':heart:': number[]
  ':level_slider:': number[]
  ':rotating_light:': number[]
  ':flag-nu:': number[]
  ':champagne:': number[]
  ':floppy_disk:': number[]
  '*': string[]
  ':flag_ai:': number[]
  ':wave:': number[]
  ':warning:': number[]
  ':lion_face:': number[]
  ':saxophone:': number[]
  ':flag-hn:': number[]
  ':flag-ie:': number[]
  ':fish_cake:': number[]
  ':heavy_division_sign:': number[]
  ':mailbox:': number[]
  ':confetti_ball:': number[]
  ':clap:': number[]
  ':monkey_face:': number[]
  ':night_with_stars:': number[]
  ':scroll:': number[]
  ':beach_umbrella:': number[]
  ':hotsprings:': number[]
  ':baby:': number[]
  ':house:': number[]
  ':postal_horn:': number[]
  ':dancers:': number[]
  ':mountain_bicyclist:': number[]
  ':left_luggage:': number[]
  ':helicopter:': number[]
  ':dizzy_face:': number[]
  ':flag-pn:': number[]
  ':back:': number[]
  ':credit_card:': number[]
  ':clock730:': number[]
  ':suspension_railway:': number[]
  ':pray:': number[]
  ':feet:': number[]
  ':oncoming_taxi:': number[]
  ':grapes:': number[]
  ':crossed_flags:': number[]
  ':tent:': number[]
  ':flag-fk:': number[]
  ':ok_hand:': number[]
  ':flag-la:': number[]
  ':arrow_up_small:': number[]
  ':strawberry:': number[]
  ':orange_book:': number[]
  ':small_orange_diamond:': number[]
  ':swimmer:': number[]
  ':flag-tm:': number[]
  ':flag-gr:': number[]
  ':atom:': number[]
  ':snake:': number[]
  ':tokyo_tower:': number[]
  ':sos:': number[]
  ':flag-mu:': number[]
  ':heartbeat:': number[]
  ':flag-fr:': number[]
  ':flag_xk:': number[]
  ':clock8:': number[]
  ':christmas_tree:': number[]
  ':diamonds:': number[]
  ':postbox:': number[]
  ':wastebasket:': number[]
  ':camping:': number[]
  ':flag-pg:': number[]
  ':heavy_plus_sign:': number[]
  ':sparkler:': number[]
  ':dromedary_camel:': number[]
  ':flag-ci:': number[]
  ':two_women_holding_hands:': number[]
  ':rainbow:': number[]
  ':mosque:': number[]
  ':flag-by:': number[]
  ':signal_strength:': number[]
  ':grey_exclamation:': number[]
  ':sleeping_accommodation:': number[]
  ':shirt:': number[]
  ':flag-st:': number[]
  ':flag-so:': number[]
  ':flag-tg:': number[]
  ':potable_water:': number[]
  ':new_moon_with_face:': number[]
  ':date:': number[]
  ':flag-eu:': number[]
  ':mouse2:': number[]
  ':frowning:': number[]
  ':arrow_left:': number[]
  ':flag-aq:': number[]
  ':flag-mo:': number[]
  ':bangbang:': number[]
  ':kissing:': number[]
  ':flag-re:': number[]
  ':pouch:': number[]
  ':sparkling_heart:': number[]
  ':x:': number[]
  ':clock1130:': number[]
  ':notebook_with_decorative_cover:': number[]
  ':tiger2:': number[]
  ':sleeping:': number[]
  ':flag-kr:': number[]
  ':thought_balloon:': number[]
  ':gemini:': number[]
  ':violin:': number[]
  ':speaker:': number[]
  ':scales:': number[]
  ':revolving_hearts:': number[]
  ':no_good:': number[]
  ':black_circle:': number[]
  ':flag-aw:': number[]
  ':door:': number[]
  ':flag-cg:': number[]
  ':lollipop:': number[]
  ':mailbox_with_mail:': number[]
  ':flower_playing_cards:': number[]
  ':tangerine:': number[]
  ':jack_o_lantern:': number[]
  ':u7a7a:': number[]
  ':mountain_cableway:': number[]
  ':orthodox_cross:': number[]
  ':rose:': number[]
  ':comet:': number[]
  ':eight_spoked_asterisk:': number[]
  ':flag-eg:': number[]
  ':space_invader:': number[]
  ':watermelon:': number[]
  ':boy:': number[]
  ':rowboat:': number[]
  ':love_hotel:': number[]
  ':baseball:': number[]
  ':flag-ta:': number[]
  ':flag-er:': number[]
  ':flag-co:': number[]
  ':anchor:': number[]
  ':leaves:': number[]
  ':nose:': number[]
  ':snail:': number[]
  ':pill:': number[]
  ':older_woman:': number[]
  ':burrito:': number[]
  ':clock830:': number[]
  ':city_sunset:': number[]
  ':classical_building:': number[]
  ':newspaper:': number[]
  ':arrows_clockwise:': number[]
  ':green_apple:': number[]
  ':capital_abcd:': number[]
  ':bed:': number[]
  ':flag-gh:': number[]
  ':no_pedestrians:': number[]
  ':bar_chart:': number[]
  ':elephant:': number[]
  ':black_nib:': number[]
  ':bow:': number[]
  ':flag-nl:': number[]
  ':telephone_receiver:': number[]
  ':sweet_potato:': number[]
  ':flag-ec:': number[]
  ':flag-bm:': number[]
  ':four:': number[]
  ':arrows_counterclockwise:': number[]
  ':flag-au:': number[]
  ':flag-gu:': number[]
  ':rugby_football:': number[]
  ':stuck_out_tongue_closed_eyes:': number[]
  ':moneybag:': number[]
  ':performing_arts:': number[]
  ':clock630:': number[]
  ':musical_note:': number[]
  ':pencil2:': number[]
  ':rice_scene:': number[]
  ':point_right:': number[]
  ':railway_track:': number[]
  ':horse_racing:': number[]
  ':flag-ar:': number[]
  ':triangular_flag_on_post:': number[]
  ':deciduous_tree:': number[]
  ':black_large_square:': number[]
  ':flag-mf:': number[]
  ':flag-rs:': number[]
  ':keycap_ten:': number[]
  ':two_hearts:': number[]
  ':penguin:': number[]
  ':clock1030:': number[]
  ':flag-bs:': number[]
  ':flag-hk:': number[]
  ':flag-gf:': number[]
  ':open_mouth:': number[]
  ':battery:': number[]
  ':flag-gw:': number[]
  ':ng:': number[]
  ':flag-tr:': number[]
  ':flag_zw:': number[]
  ':ballot_box:': number[]
  ':flag-mx:': number[]
  ':mountain_railway:': number[]
  ':thumbsup:': number[]
  ':medal:': number[]
  ':alien:': number[]
  ':flag-sd:': number[]
  ':oncoming_police_car:': number[]
  ':flag-sm:': number[]
  ':interrobang:': number[]
  ':blue_circle:': number[]
  ':ear_of_rice:': number[]
  ':black_joker:': number[]
  ':telescope:': number[]
  ':no_bicycles:': number[]
  ':crescent_moon:': number[]
  ':stopwatch:': number[]
  ':purple_heart:': number[]
  ':flag-hm:': number[]
  ':flag-bo:': number[]
  ':bike:': number[]
  ':hamster:': number[]
  ':track_previous:': number[]
  ':no_entry_sign:': number[]
  ':hospital:': number[]
  ':kissing_smiling_eyes:': number[]
  ':baby_bottle:': number[]
  ':nail_care:': number[]
  ':top:': number[]
  ':flag-fj:': number[]
  ':earth_asia:': number[]
  ':crocodile:': number[]
  ':flag-et:': number[]
  ':shell:': number[]
  ':outbox_tray:': number[]
  ':straight_ruler:': number[]
  ':footprints:': number[]
  ':large_blue_diamond:': number[]
  ':rooster:': number[]
  ':goat:': number[]
  ':clock7:': number[]
  ':bomb:': number[]
  ':hash:': number[]
  ':hatched_chick:': number[]
  ':tractor:': number[]
  ':flag-rw:': number[]
  ':stuck_out_tongue_winking_eye:': number[]
  ':rewind:': number[]
  ':yin_yang:': number[]
  ':ramen:': number[]
  ':trackball:': number[]
  ':flag-kn:': number[]
  ':prayer_beads:': number[]
  ':bulb:': number[]
  ':turkey:': number[]
  ':speedboat:': number[]
  ':neutral_face:': number[]
  ':bell:': number[]
  ':clock11:': number[]
  ':round_pushpin:': number[]
  ':beers:': number[]
  ':no_smoking:': number[]
  ':menorah:': number[]
  ':muscle:': number[]
  ':game_die:': number[]
  ':negative_squared_cross_mark:': number[]
  ':mortar_board:': number[]
  ':flag-th:': number[]
  ':restroom:': number[]
  ':v:': number[]
  ':couple_with_heart:': number[]
  ':dragon:': number[]
  ':bookmark:': number[]
  ':envelope_with_arrow:': number[]
  ':hotdog:': number[]
  ':musical_keyboard:': number[]
  ':flag-vg:': number[]
  ':rice_ball:': number[]
  ':flag-cw:': number[]
  ':shower:': number[]
  ':asterisk:': number[]
  ':flag-lk:': number[]
  ':twisted_rightwards_arrows:': number[]
  ':man_in_suit:': number[]
  ':flag-kw:': number[]
  ':blue_book:': number[]
  ':ski:': number[]
  ':flag-az:': number[]
  ':boot:': number[]
  ':atm:': number[]
  ':rocket:': number[]
  ':seat:': number[]
  ':clock4:': number[]
  ':meat_on_bone:': number[]
  ':scorpion:': number[]
  ':flag-tw:': number[]
  ':fist:': number[]
  ':flag-gy:': number[]
  ':man_with_turban:': number[]
  ':rabbit2:': number[]
  ':flag-tt:': number[]
  ':m:': number[]
  ':cloud:': number[]
  ':flag-to:': number[]
  ':flag-ua:': number[]
  ':flag-bh:': number[]
  ':customs:': number[]
  ':flag-bl:': number[]
  ':koko:': number[]
  ':flag-io:': number[]
  ':coffee:': number[]
  ':laughing:': number[]
  ':flag-vc:': number[]
  ':flag_ws:': number[]
  ':flag-bb:': number[]
  ':keyboard:': number[]
  ':bus:': number[]
  ':scream_cat:': number[]
  ':tv:': number[]
  ':peace:': number[]
  ':e-mail:': number[]
  ':mute:': number[]
  ':imp:': number[]
  ':six_pointed_star:': number[]
  ':flag-bd:': number[]
  ':tm:': number[]
  ':flag-ee:': number[]
  ':copyright:': number[]
  ':loop:': number[]
  ':stars:': number[]
  ':flag-ke:': number[]
  ':chains:': number[]
  ':arrow_heading_up:': number[]
  ':virgo:': number[]
  ':star2:': number[]
  ':fountain:': number[]
  ':fallen_leaf:': number[]
  ':ear:': number[]
  ':eight_pointed_black_star:': number[]
  ':pound:': number[]
  ':innocent:': number[]
  ':flags:': number[]
  ':guardsman:': number[]
  ':flag-np:': number[]
  ':dragon_face:': number[]
  ':flag-nz:': number[]
  ':smoking:': number[]
  ':mount_fuji:': number[]
  ':lipstick:': number[]
  ':frog:': number[]
  ':registered:': number[]
  ':mask:': number[]
  ':raising_hand:': number[]
  ':flag-lv:': number[]
  ':flag-mg:': number[]
  ':sweat_smile:': number[]
  ':children_crossing:': number[]
  ':book:': number[]
  ':vhs:': number[]
  ':alembic:': number[]
  ':two:': number[]
  ':tulip:': number[]
  ':beetle:': number[]
  ':flag-mc:': number[]
  ':aries:': number[]
  ':flag-ru:': number[]
  ':couple:': number[]
  ':congratulations:': number[]
  ':factory:': number[]
  ':speak_no_evil:': number[]
  ':turtle:': number[]
  ':u6709:': number[]
  ':hole:': number[]
  ':mouse:': number[]
  ':clock2:': number[]
  ':racehorse:': number[]
  ':man_with_gua_pi_mao:': number[]
  ':bread:': number[]
  ':heartpulse:': number[]
  ':clock530:': number[]
  ':ballot_box_with_check:': number[]
  ':love_letter:': number[]
  ':snowboarder:': number[]
  ':zipper_mouth:': number[]
  ':roller_coaster:': number[]
  ':birthday:': number[]
  ':gem:': number[]
  ':clock330:': number[]
  ':flag-ky:': number[]
  ':watch:': number[]
  ':fleur-de-lis:': number[]
  ':passport_control:': number[]
  ':convenience_store:': number[]
  ':accept:': number[]
  ':parking:': number[]
  ':blush:': number[]
  ':ferris_wheel:': number[]
  ':fork_and_knife:': number[]
  ':u7121:': number[]
  ':flag-es:': number[]
  ':ab:': number[]
  ':wc:': number[]
  ':trumpet:': number[]
  ':hugging:': number[]
  ':zzz:': number[]
  ':zero:': number[]
  ':flag_zm:': number[]
  ':flag-je:': number[]
  ':flag-sn:': number[]
  ':printer:': number[]
  ':unamused:': number[]
  ':kimono:': number[]
  ':reminder_ribbon:': number[]
  ':airplane_arriving:': number[]
  ':mushroom:': number[]
  ':sparkles:': number[]
  ':necktie:': number[]
  ':leopard:': number[]
  ':fries:': number[]
  ':flag-mm:': number[]
  ':clock10:': number[]
  ':snowman:': number[]
  ':green_book:': number[]
  ':bow_and_arrow:': number[]
  ':flag-bz:': number[]
  ':blue_car:': number[]
  ':flag-bq:': number[]
  ':pineapple:': number[]
}
declare const EMOJI_SHORTCODE_LIST: string[]
declare const EMOJI_TO_NAME_MAP: {}
declare function EmojiUnlockBar(): void
declare class EmojiUnlockBar {
  _$unlockContainer: JQuery<HTMLElement>
  _EMOJI_PREVIEW_TEMPLATE: string
  _OUTFIT_EMOJI_BASE: {
    80: {
      BASE: string
      DEFAULT_COLOR: string
      TYPE_AT_LEVEL: {
        1: string[]
        3: string[]
        5: string[]
        8: string[]
        10: string[]
      }
    }
    81: {
      BASE: string
      DEFAULT_COLOR: string
      TYPE_AT_LEVEL: {
        1: string[]
        3: string[]
        5: string[]
        8: string[]
        10: string[]
      }
    }
    84: {
      BASE: string
      DEFAULT_COLOR: string
      TYPE_AT_LEVEL: {
        1: string[]
        3: string[]
        5: string[]
        8: string[]
        10: string[]
      }
    }
    85: {
      BASE: string
      DEFAULT_COLOR: string
      TYPE_AT_LEVEL: {
        1: string[]
        3: string[]
        5: string[]
        8: string[]
        10: string[]
      }
    }
    86: {
      BASE: string
      DEFAULT_COLOR: string
      TYPE_AT_LEVEL: {
        1: string[]
        3: string[]
        5: string[]
        8: string[]
        10: string[]
      }
    }
    87: {
      BASE: string
      DEFAULT_COLOR: string
      TYPE_AT_LEVEL: {
        1: string[]
        3: string[]
        5: string[]
        8: string[]
        10: string[]
      }
    }
    88: {
      BASE: string
      DEFAULT_COLOR: string
      TYPE_AT_LEVEL: {
        1: string[]
        3: string[]
        5: string[]
        8: string[]
        10: string[]
      }
    }
    89: {
      BASE: string
      DEFAULT_COLOR: string
      TYPE_AT_LEVEL: {
        1: string[]
        3: string[]
        5: string[]
        8: string[]
        10: string[]
      }
    }
    90: {
      BASE: string
      DEFAULT_COLOR: string
      TYPE_AT_LEVEL: {
        1: string[]
        3: string[]
        5: string[]
        8: string[]
        10: string[]
      }
    }
    91: {
      BASE: string
      DEFAULT_COLOR: string
      TYPE_AT_LEVEL: {
        1: string[]
        3: string[]
        5: string[]
        8: string[]
        10: string[]
      }
    }
    92: {
      BASE: string
      DEFAULT_COLOR: string
      TYPE_AT_LEVEL: {
        1: string[]
        3: string[]
        5: string[]
        8: string[]
        10: string[]
      }
    }
    93: {
      BASE: string
      DEFAULT_COLOR: string
      TYPE_AT_LEVEL: {
        1: string[]
        3: string[]
        5: string[]
        8: string[]
        10: string[]
      }
    }
    94: {
      BASE: string
      DEFAULT_COLOR: string
      TYPE_AT_LEVEL: {
        1: string[]
        3: string[]
        5: string[]
        8: string[]
        10: string[]
      }
    }
  }
  _unlockListner: Listener
  setup(unlockedDesigns: any): void
  avatarLevels: {} | undefined
  show(avatarId: any): void
  _currentAvatarId: any
  hide(): void
  updateToOutfit(avatarId: any): void
  showProgress(avatarId: any): void
  newOutfitUnlocked(avatarId: any): void
  getAvatarLevel(avatarId: any): any
  haveEntryForOutfit(avatarId: any): boolean
}
declare var emojiUnlockBar: EmojiUnlockBar
declare function ExpandLibrary(): void
declare class ExpandLibrary {
  $view: JQuery<HTMLElement>
  $counterContainer: JQuery<HTMLElement>
  $counter: JQuery<HTMLElement>
  open: boolean
  particleAnimation: ParticleAnimation
  particleTrack: ParticleTrack
  _newAnswerListener: Listener
  _answerResultListener: Listener
  setup(expandCount: any): void
  questionListHandler: ExpandQuestionList | undefined
  questionBox: ExpandQuestionBox | undefined
  runXPAnimation(xpInfo: any, level: any, credits: any, tickets: any): void
  closeView(): void
  openView(callback: any): void
  songOpened(songEntry: any): void
  selectedSong: any
  songClosed(): void
  submitAnswer(url: any, resolution: any): void
}
declare var expandLibrary: ExpandLibrary
declare function ExpandQuestionListEntry(question: any, expandList: any): void
declare class ExpandQuestionListEntry {
  constructor(question: any, expandList: any)
  name: any
  annId: any
  $body: JQuery<HTMLElement>
  $animeEntry: JQuery<HTMLElement>
  $songContainer: JQuery<HTMLElement>
  $opStatus: JQuery<HTMLElement>
  $edStatus: JQuery<HTMLElement>
  $inStatus: JQuery<HTMLElement>
  songList: any[]
  open: boolean
  active: boolean
  updateSongList(): void
  updateSongStatuses(): void
  applyFilter(filter: any, closedHostFilter: any): void
  applySearchFilter(regexFilter: any, stricter: any): false | undefined
  resetSearchFilter(): void
  updateDisplay(): void
  updateScroll(containerHeight: any): void
  isShown(containerHeight: any): boolean
  isOverTop(): boolean
  isUnderBottom(containerHeight: any): boolean
  remove(): void
  removeSong(annSongId: any): void
  isEmpty(): boolean
  setSongPending(annSongId: any, host: any, resolution: any): void
}
declare function calculateScrollIndent(
  topOffset: any,
  height: any,
  containerHeight: any
): number
declare function ExpandQuestionSongEntry(
  songInfo: any,
  animeId: any,
  animeName: any
): void
declare class ExpandQuestionSongEntry {
  constructor(songInfo: any, animeId: any, animeName: any)
  annSongId: any
  type: any
  number: any
  animeId: any
  animeName: any
  videoExamples: any
  typeName: string
  artist: any
  name: any
  $body: JQuery<HTMLElement>
  versionStatus: any
  open: boolean
  inFilter: boolean
  inSearch: boolean
  updateMissingState(): void
  missingRess: boolean | undefined
  missingHosts: boolean | undefined
  missingAll: boolean | undefined
  onlyMissingClosed: boolean | undefined
  applyFilter(filter: any, closedHostFilter: any): void
  applySearchFilter(regex: any, stricter: any): false | undefined
  resetSearchFilter(): void
  updateDisplay(): void
  isActive(): boolean
  updateScroll(entryContainerHeight: any): void
  setOpen(open: any): void
  remove(): void
  setVersionPending(host: any, resolution: any): void
}
declare var EXPAND_QUESTION_TEMPLATE: string
declare var EXPAND_SONG_QUESTION_TEMPLATE: string
declare namespace EXPAND_SONG_STATUS {
  let APPROVED: number
  let PENDING: number
  let MISSING: number
}
declare const HIGH_PERCENT: 70
declare const HIGH_PERCENT_SCROLL_RANGE: 50
declare const SCROLL_START_RANGE: 100
declare function ExpandQuestionBox(): void
declare class ExpandQuestionBox {
  submitingUrl: boolean
  $STATE_CONTAINER: JQuery<HTMLElement>
  $STATE_WARNING: JQuery<HTMLElement>
  $STATE_SPINNER: JQuery<HTMLElement>
  $SUBMIT_BUTTON: JQuery<HTMLElement>
  $HOST_STATUSES: {
    catbox: {
      720: JQuery<HTMLElement>
      480: JQuery<HTMLElement>
      mp3: JQuery<HTMLElement>
    }
    openingsmoe: JQuery<HTMLElement>
  }
  _VERSION_STATES: {
    APPROVED: number
    PENDING: number
    MISSING: number
    BLOCKED: number
  }
  supportedResolutions: (string | number)[]
  $PREVIEW_SOUND_ONLY_TEXT_CONTAINER: JQuery<HTMLElement>
  $PREVIEW_VIDEO: JQuery<HTMLElement>
  $INPUT_PREVIEW_VIDEO: JQuery<HTMLElement>
  $PREVIEW_CONTAINER: JQuery<HTMLElement>
  $ACTIVE_PREVIEW_TEXT: JQuery<HTMLElement>
  $ALL_PREVIEW_SELECTORS: JQuery<HTMLElement>
  $VIDEO_PREVIEW_SELECTOR: {
    mp3: JQuery<HTMLElement>
    480: JQuery<HTMLElement>
    720: JQuery<HTMLElement>
    preview: JQuery<HTMLElement>
  }
  inputResolution: any
  realResolution: any
  $INPUT: JQuery<HTMLElement>
  currentInput: any
  $ANIME_NAME_CONTAINER: JQuery<HTMLElement>
  $ANIME_NAME_LINK: JQuery<HTMLElement>
  $SONG_NAME: JQuery<HTMLElement>
  $ARTIST_NAME: JQuery<HTMLElement>
  $SONG_TYPENAME: JQuery<HTMLElement>
  $NO_SONG_SELECTED_CONTAINER: JQuery<HTMLElement>
  _ANN_BASE_ENTRY_URL: string
  showSong(
    animeId: any,
    animeName: any,
    songName: any,
    songArtist: any,
    songTypeName: any,
    songUploadStatus: any,
    videoExamples: any
  ): void
  videoExamples: any
  songUploadStatus: any
  currentExampleRes: any
  setHostStatus($statusEntry: any, status: any): void
  setSongUploadStatusPending(host: any, resolution: any): void
  setSongSelected(songSelected: any): void
  showVideoPreview(url: any, previewType: any, noLoad: any): void
  getVideoHost(url: any): 'catbox' | 'openingsmoe' | null
  isClosedHost(host: any): boolean
  checkVersionStatus(host: any, resolution: any, expectedStatus: any): boolean
  updateSubmitButton(): void
  setSubmitting(newState: any): void
  clearInput(): void
  reset(): void
}
declare function ExpandQuestionList(): void
declare class ExpandQuestionList {
  _$questionList: JQuery<HTMLElement>
  _$openingsFilter: JQuery<HTMLElement>
  _$endingsFilter: JQuery<HTMLElement>
  _$insertsFilter: JQuery<HTMLElement>
  _$missingFilter: JQuery<HTMLElement>
  _$resolutionFilter: JQuery<HTMLElement>
  _$altHostFilter: JQuery<HTMLElement>
  _$searchBar: JQuery<HTMLElement>
  _$searchSpinner: JQuery<HTMLElement>
  _LIST_FILLER_HTML: string
  _filter: {
    openings: boolean
    endings: boolean
    inserts: boolean
    missing: boolean
    resolution: boolean
    altHost: boolean
  }
  _closedHostFilter: {
    openingsmoe: number
  }
  animeEntries: any[]
  _QUERY_UPDATE_CHUNK_SiZE: number
  _currentSearchId: number
  lastSearchRegex: RegExp
  topShownAnimeIndex: number
  updateQuestionList(questions: any): void
  topShownQuestionIndex: number | undefined
  toggleFilter($filterObject: any, filterName: any): void
  applyFilter(): void
  applySearchFilter(query: any): void
  updateScrollLayout(): void
  removeAnime(annId: any): void
  removeSong(annId: any, annSongId: any): void
  isEmpty(): boolean
  setSongPending(annId: any, annSongId: any, host: any, resolution: any): void
  resetFilterLayout(): void
  clear(): void
}
declare namespace CLOSED_HOST_FILTER_STATES {
  let NOT_SET: number
  let ONLY: number
  let EXCLUDE: number
}
declare class BattleRoyal {
  $view: JQuery<HTMLElement>
  $playerList: JQuery<HTMLElement>
  $playerListContainer: JQuery<HTMLElement>
  $brMapContainer: JQuery<HTMLElement>
  $brMap: JQuery<HTMLElement>
  $loadTextContainer: JQuery<HTMLElement>
  PLAYER_LIST_ENTRY_TEMPLATE: string
  LEVEL_OVERLAP_HEIGHT: number
  inView: boolean
  _readyListener: Listener
  _spawnListener: Listener
  _objectDespawnListener: Listener
  _newEntryCollectedListener: Listener
  _dataStoreContentListener: Listener
  _dataStoreContentDespawn: Listener
  _spawnPlayerListener: Listener
  _newPlayerPositionListener: Listener
  _playerDespawnListener: Listener
  _playerLeaveListner: Listener
  _playerRejoiningListener: Listener
  _phaseOverListener: Listener
  _correctPosistionListener: Listener
  _spectatorCountChangeListener: Listener
  _returnMapListener: Listener
  _dropNameEntryListener: Listener
  _objectSpawnListener: Listener
  _nameChangeListner: Listener
  _noPlayersListner: Listener
  setup(): void
  timer: BattleRoyalTimer | undefined
  map: BattleRoyalMap | undefined
  collectionController: BattleRoyalCollectionController | undefined
  spectatorController: BattleRoyalSpectatorController | undefined
  setupGame(
    players: any,
    isSpectator: any,
    settings: any,
    timeLeft: any,
    mapState: any,
    soloMode: any,
    playerBRState: any
  ): void
  soloMode: any
  isSpectator: any
  settings: any
  players: {} | undefined
  closeView(args: any): void
  openView(callback: any): void
  updateMapSize(): void
  leave(): void
}
declare var battleRoyal: BattleRoyal
declare function BattleRoyalCollectionController(): void
declare class BattleRoyalCollectionController {
  $container: JQuery<HTMLElement>
  $list: JQuery<HTMLElement>
  $slotsLeft: JQuery<HTMLElement>
  $collectedCount: JQuery<HTMLElement>
  size: number
  entries: any[]
  reset(): void
  hide(): void
  show(): void
  addEntry(entry: any): void
  removeEntry(id: any): void
  updateCounter(): void
  extractShowName(nameInfo: any): any
  setSize(size: any): void
  isFull(): boolean
  disableDrop(): void
  AMOUNT_FOR_WARNING_COLOR: number
}
declare function BattleRoyalMap(): void
declare class BattleRoyalMap {
  $mapContent: JQuery<HTMLElement>
  $dropText: JQuery<HTMLElement>
  $returnToMapButton: JQuery<HTMLElement>
  mapObjects: {}
  mapGates: {}
  activeObjects: any[]
  playerMap: {}
  tiles: {}
  pointPixelSize: number | null
  gateSize: any
  tileId: any
  overmapSize: any
  selfPlayer: BattleRoyalPlayer | null
  activationRadius: any
  tileSize: any
  lastServerUpdate: Date | null
  lastUpdate: Date | null
  spectatorCount: number
  collectionFull: boolean
  playerMovementInterval: NodeJS.Timer | null
  BASE_PLAYER_MOVE_SERVER_TICK_RATE: number
  PLAYER_MOVEMENT_TICK_RATE: number
  playerMovementController: BattleRoyalMovementController
  inventoryFullMessageController: BattleRoyaleInventoryFullMessageController
  drawTileOverview(mapSize: any, isSpectator: any, tilePlayerCounts: any): void
  setupTile(tileState: any, isSpectator: any, inventoryFull: any): void
  spawnObject(object: any, inventoryFull: any): void
  spawnPlayer(playerInfo: any, moveSpeed: any): void
  despawnPlayer(playerId: any): void
  updatePlayerPosition(playerId: any, position: any): void
  spawnGate(position: any, isSpectator: any): void
  objectDespawn(x: any, y: any): void
  containerEntryDespawn(x: any, y: any, annId: any): void
  showContainerContent(x: any, y: any, entries: any): void
  updatePlayerName(gamePlayerId: any, newName: any): void
  relayout(): void
  clear(): void
  extractShowName(nameInfo: any): any
  startPlayerMovement(): void
  executeMove(forceServerUpdate: any): void
  toggleActiveObjects(): void
  stopPlayerMovement(): void
  correctPosition(x: any, y: any): void
  updateTileCount(x: any, y: any, count: any): void
  setCollectionFull(isFull: any): void
}
declare function BattleRoyalTile(
  x: any,
  y: any,
  sizePercent: any,
  isSpectator: any
): void
declare class BattleRoyalTile {
  constructor(x: any, y: any, sizePercent: any, isSpectator: any)
  $html: JQuery<HTMLElement>
  $counter: JQuery<HTMLElement>
  updateCount(count: any): void
}
declare function BattleRoyalShowEntry(
  annId: any,
  name: any,
  x: any,
  y: any,
  inventoryFull: any,
  inventoryFullMessageController: any,
  updatePosition: any
): void
declare class BattleRoyalShowEntry {
  constructor(
    annId: any,
    name: any,
    x: any,
    y: any,
    inventoryFull: any,
    inventoryFullMessageController: any,
    updatePosition: any
  )
  $html: JQuery<HTMLElement>
  annId: any
  x: number
  y: number
  inventoryFull: boolean
  active: boolean
  updatePosition(pointPixelSize: any): void
  setActive(active: any): void
  remove(): void
  toggleInventoryFullState(toggleOn: any): void
  template: string
}
declare function BattleRoyalContainerEntry(
  x: any,
  y: any,
  $container: any,
  inventoryFull: any,
  inventoryFullMessageController: any,
  updatePosition: any
): void
declare class BattleRoyalContainerEntry {
  constructor(
    x: any,
    y: any,
    $container: any,
    inventoryFull: any,
    inventoryFullMessageController: any,
    updatePosition: any
  )
  $html: JQuery<HTMLElement>
  $containerContent: JQuery<HTMLElement>
  x: number
  y: number
  inventoryFull: boolean
  inventoryFullMessageController: any
  active: boolean
  updatePosition(pointPixelSize: any): void
  setActive(active: any): void
  showContent(entries: any): void
  hideContent(): void
  removeContentEntry(id: any): void
  remove(): void
  toggleInventoryFullState(toggleOn: any): void
  template: string
}
declare function BattleRoyalTileGate(
  gateSize: any,
  pointPixelSize: any,
  position: any,
  tileSize: any,
  updatePosition: any,
  isSpectator: any
): void
declare class BattleRoyalTileGate {
  constructor(
    gateSize: any,
    pointPixelSize: any,
    position: any,
    tileSize: any,
    updatePosition: any,
    isSpectator: any
  )
  $html: JQuery<HTMLElement>
  gateSize: any
  position: any
  tileSize: any
  active: boolean
  updateSize(pointPixelSize: any): void
  inGate(x: any, y: any): boolean
  setActive(active: any): void
  template: string
}
declare function BattleRoyalPlayer(
  name: any,
  avatar: any,
  x: any,
  y: any,
  pointPixelSize: any,
  self: any,
  tileSize: any
): void
declare class BattleRoyalPlayer {
  constructor(
    name: any,
    avatar: any,
    x: any,
    y: any,
    pointPixelSize: any,
    self: any,
    tileSize: any
  )
  $html: JQuery<HTMLElement>
  x: any
  y: any
  tileSize: any
  move(moveVector: any): void
  updatePosition(pointPixelSize: any): void
  updateName(newName: any): void
  remove(): void
  template: string
}
declare function BattleRoyalMovementController(): void
declare class BattleRoyalMovementController {
  keysDown: {
    up: boolean
    down: boolean
    left: boolean
    right: boolean
  }
  moveSpeedSec: number
  digMoveSpeedSec: number
  UP_KEY_CODES: number[]
  DOWN_KEY_CODES: number[]
  LEFT_KEY_CODES: number[]
  RIGHT_KEY_CODES: number[]
  setSpeed(baseSpeed: any): void
  reset(): void
  moving(): boolean
  getMovementVector(deltaTimeSec: any): {
    x: number
    y: number
  }
}
declare class BattleRoyalePlayer extends GamePlayer {
  constructor(
    name: any,
    level: any,
    gamePlayerId: any,
    host: any,
    avatarInfo: any,
    positionSlot: any,
    teamPlayer: any,
    teamNumber: any
  )
  inGame: boolean
  positionSlot: any
  teamPlayer: any
  teamNumber: any
}
declare function BattleRoyalSpectatorController(): void
declare class BattleRoyalSpectatorController {
  $container: JQuery<HTMLElement>
  $icon: JQuery<HTMLElement>
  reset(): void
  show(): void
  hide(): void
  updateIcon(spectatorCount: any): void
}
declare function BattleRoyalTimer(): void
declare class BattleRoyalTimer {
  $timerText: JQuery<HTMLElement>
  STANDBY_TEXT: string
  reset(): void
  start(lengthSeconds: any): void
  endMoment: any
  runInterval: NodeJS.Timer | undefined
  stop(): void
  updateTime(): void
}
declare function BattleRoyaleInventoryFullMessageController(): void
declare class BattleRoyaleInventoryFullMessageController {
  $container: JQuery<HTMLElement>
  show(): void
  hideTimeout: NodeJS.Timeout | undefined
  hide(): void
  OPEN_TIME: number
}
declare class EmoteBubler {
  canvas: AnimationCanvas
  aniamtionController: SimpleAnimationController
  emoteImageCatch: {}
  emojiImageCatch: {}
  shortCodeCatch: {}
  newBubbleEventList(bubbleEvents: any): void
  spawnBubbleGroup(group: any): void
  newBubles(emoteIds: any, shortCodes: any, customEmojiIds: any): void
  insertEmoteBuble(emoteId: any): void
  insertEmojiBuble(emojiId: any): void
  insertShortCodeBuble(shortCode: any): void
  createNewBuble(imageCanvas: any): void
  createOffscrenImageCanvas(img: any, size: any): HTMLElement
  removeBuble(element: any): void
  resize(): void
  SPAWN_MARGIN_SIZE: number
  MIN_HORI_ACC: number
  MAX_HORI_ACC: number
  MIN_HORI_CHANGE_CHANCE: number
  MAX_HORI_CHANGE_CHANCE: number
  MIN_MAX_HORI: number
  MAX_MAX_HORI: number
  MIN_VERT: number
  MAX_VERT: number
  IMAGE_SIZE: number
  FADE_OUT_START_PERCENT: number
  FADE_OUT_RATE: number
  MAX_GROUP_SIZE: number
  GROUP_SPAWN_SPEED: number
}
declare function GameChat(): void
declare class GameChat {
  $view: JQuery<HTMLElement>
  open: boolean
  MAX_MESSAGE_LENGTH: number
  MOD_BAN_MESSAGE_COMMAND_REGEX: RegExp
  MOD_BAN_MESSAGE_LENGTH: number
  MOD_CLEAR_BAN_MESSAGE_REGEX: RegExp
  $chatMessageContainer: JQuery<HTMLElement>
  $chatInputField: JQuery<HTMLElement>
  $spectatorView: JQuery<HTMLElement>
  $chatView: JQuery<HTMLElement>
  $gameChatButton: JQuery<HTMLElement>
  $spectateListButton: JQuery<HTMLElement>
  $spectatorList: JQuery<HTMLElement>
  $spectatorCounter: JQuery<HTMLElement>
  $SCROLLABLE_CONTAINERS: JQuery<HTMLElement>
  $QUEUE_LIST_BUTTON: JQuery<HTMLElement>
  $QUEUE_TAB: JQuery<HTMLElement>
  $QUEUE_LIST: JQuery<HTMLElement>
  $QUEUE_COUNT: JQuery<HTMLElement>
  $QUEUE_JOIN_BUTTON_TEXT: JQuery<HTMLElement>
  _$CHAT_MENU: JQuery<HTMLElement>
  $SPECTATE_HOST_ICON: JQuery<HTMLElement>
  $CHAT_TEXTAREA_CONTAINER: JQuery<HTMLElement>
  $SPECTATE_BUTTON: JQuery<HTMLElement>
  $QUEUE_BUTTON: JQuery<HTMLElement>
  $PLAYER_ONLY_MESSAGE: JQuery<HTMLElement>
  playerOnlyMode: boolean
  noEmoteMode: boolean
  spectators: any[]
  queueMap: {}
  lastChatCursorPosition: number
  displayJoinLeaveMessages: boolean
  MAX_CHAT_MESSAGES: number
  currentMessageCount: number
  CHAT_COOLDOWN_LENGTH: number
  lastMessageCooldown: number
  slowModeActive: boolean
  $cooldownBar: JQuery<HTMLElement>
  $cooldownBarContainer: JQuery<HTMLElement>
  COOLDOWN_POPOVER_DISPLAY_TIME: number
  SPAM_COOLDOWN: number
  lastMessageInfo: {
    msg: any
    cooldownUntil: number
  } | null
  MINIMUM_LEVEL_TO_CHAT_IN_SLOW_MODE: number
  _TABS: {
    CHAT: number
    SPECTATORS: number
    QUEUE: number
  }
  currentTab: number
  serverMsgTemplate: string
  playerMsgTemplate: string
  playerMsgBadgeTemplate: string
  spectatorListItemTemplate: string
  _PLAYER_COMMANDS_TEMPLATE: string
  _QUEUE_ENTRY_TEMPLATE: string
  $teamChatSwitchContainer: JQuery<HTMLElement>
  teamChatSwitch: Switch
  emoteSelectorWrapper: EmoteSelectorInputWrapper
  _newMessageListner: Listener
  _newSystemMessageListner: Listener
  _chatUpdateListener: Listener
  _newSpectatorListner: Listener
  _spectatorLeftListner: Listener
  _playerLeaveListner: Listener
  _spectatorChangeToPlayer: Listener
  _kickedFromGameListner: Listener
  _forceSpectatorListner: Listener
  _settingChangeListener: Listener
  _newQueueEntryListener: Listener
  _playerLeftQueueListener: Listener
  _hostPromotionListner: Listener
  _playerNameChangeListner: Listener
  _spectatorNameChangeListner: Listener
  _deletePlayerMessagesListener: Listener
  _deleteChatMessageListener: Listener
  _pauseTriggerListener: Listener
  _unpauseTriggerListener: Listener
  _playerRejoiningListener: Listener
  _answerResultsListener: Listener
  _playerLateJoinListener: Listener
  setup(): void
  atSelfRegex: RegExp | undefined
  emoteBubler: EmoteBubler | undefined
  openView(): void
  closeView(): void
  systemMessage(title: any, msg: any, teamMessage: any): void
  chatMessage({
    sender,
    modMessage,
    message,
    emojis,
    badges,
    messageId,
    atEveryone,
    teamMessage,
    nameColor,
    nameGlow,
  }: {
    sender: any
    modMessage: any
    message: any
    emojis: any
    badges: any
    messageId: any
    atEveryone: any
    teamMessage: any
    nameColor: any
    nameGlow: any
  }): void
  removeTwoOldestMessages(): void
  insertMsg(msg: any): void
  sendMessage(): void
  banMessage(): void
  clearBannedMessages(): void
  displaySlowModeMessage(msg: any): void
  cooldownPopoverTimeout: NodeJS.Timeout | undefined
  messageRepeated(msg: any): boolean | null
  updateNameInChat(targetName: any, newName: any): void
  deletePlayersMessagesInChat(playerName: any): void
  viewSpectators(): void
  viewChat(): void
  viewQueue(): void
  resetView(): void
  addSpectator(spectator: any, isHost: any): void
  bindSpectatorClickFunctions($entry: any, name: any): void
  updateSpectatorNameFontSize(spectatorName: any): void
  removeSpectator(spectatorName: any): void
  enableHostOptions(newHostName: any): void
  disableHostOptions(): void
  kickSpectator(playerName: any): void
  isShown(): boolean
  setSpectatorButtonState(enabled: any): void
  setQueueButtonState(enabled: any): void
  insertEmoji(emoji: any): void
  insertText(texToInsert: any): void
  focus(): void
  updateChatScroll(): void
  toggleQueueTab(on: any): void
  joinLeaveQueue(): void
  removePlayerFromQueue(playerName: any): void
  resetQueue(): void
  addPlayerToQueue(playerName: any): void
  toggleShowTeamChatSwitch(show: any): void
  getTeamChatToggleSwitchActive(): boolean
  setPlayerOnlyMode(on: any): void
  MOD_INSTANT_FLAG_TYPES: {
    SPAM: number
    SPOILING: number
    NEGATIVE: number
  }
}
declare var gameChat: GameChat
declare class Lobby {
  $view: JQuery<HTMLElement>
  $roomName: JQuery<HTMLElement>
  $roomId: JQuery<HTMLElement>
  $ruleButton: JQuery<HTMLElement>
  $shuffleTeamButton: JQuery<HTMLElement>
  players: {}
  inLobby: boolean
  soloMode: boolean
  ownGamePlayerId: any
  lobbyAvatarContainer: LobbyAvatarContainer
  mainButton: LobbyMainButton
  playerCounter: LobbyPlayerCounter
  ruleModal: LobbyRuleModal
  inputModeSelector: LobbyInputModeSelector
  $battleRoyalRuleModal: JQuery<HTMLElement>
  $lastManRuleModal: JQuery<HTMLElement>
  $rankedRuleModal: JQuery<HTMLElement>
  _settingListener: Listener
  _newPlayerListner: Listener
  _playerLeaveListner: Listener
  _spectatorChangeToPlayer: Listener
  _readyChangeListner: Listener
  _gameStartListner: Listener
  _forceSpectatorListner: Listener
  _avatarChangeListener: Listener
  _hostPromotionListner: Listener
  _gameClosedListner: Listener
  _spectatorLeftListener: Listener
  _nameChangeListner: Listener
  _spectatorNameChangeListner: Listener
  _joinTeamListener: Listener
  _shuffleTeamsListener: Listener
  _playerAnswerModeChangeListener: Listener
  get isHost(): boolean
  get numberOfPlayers(): number
  get numberOfPlayersReady(): number
  openView(callback: any): void
  closeView(args: any): void
  setupLobby(lobbyInfo: any, isSpectator: any): void
  isSpectator: any
  isReady: any
  gameId: any
  hostName: any
  closeTime: any
  blockJoinMessage: any
  numberOfTeams: any
  settings: any
  displayJoinLeaveMessages: boolean | undefined
  updatePlayerCounter(): void
  addPlayer(player: any, teamFullMap: any): LobbyPlayer
  removePlayer(gamePlayerId: any): void
  kickPlayer(playerName: any): void
  viewSettings(): void
  changeGameSettings(): void
  changeToSpectator(playerName: any): void
  promoteHost(playerName: any): void
  fireMainButtonEvent(dueStartTrigger: any): void
  setNewHost(newHostName: any): void
  getPlayerByName(playerName: any): any
  toggleRuleButton(settingChanges: any): void
  checkAutoDisplayRuleModal(settingChanges: any): void
  showRules(): void
  shuffleTeams(): void
  updateMainButton(): void
  get canJoin(): boolean
  get joinBlockedMessage(): any
  leave(args: any): void
  setPlayerTeam(gamePlayerId: any, teamNumber: any): void
  RULE_DESCRIPED_GAME_MODES: string[]
  ANSWERING_MODES: {
    TYPING: number
    MIXED: number
    MULTIPLE_CHOICE: number
  }
}
declare class LobbyMainButton {
  $mainButton: JQuery<HTMLElement>
  $duoMainButton: JQuery<HTMLElement>
  $dueJoinButotn: JQuery<HTMLElement>
  $dueStartButotn: JQuery<HTMLElement>
  $rankedMainButton: JQuery<HTMLElement>
  $rankedButtonText: JQuery<HTMLElement>
  $rankedTimerText: JQuery<HTMLElement>
  inDueMode: boolean
  toggleMainButton(): void
  toggleSplitButton(): void
  toggleRankedButton(closeTimeString: any): void
  rankedTargetTime: any
  rankedUpdateInterval: NodeJS.Timer | undefined
  hideAll(): void
  updateRankedTimer(): void
  updateDueJoinButton(text: any, active: any, disableMessage: any): void
  dueJoinActive: any
  updateDueStartButton(text: any, active: any, disableMessage: any): void
  dueStartActive: any
  updateMainButton(text: any, active: any, disableMessage: any): void
  active: any
  _toggleButton(text: any, active: any, disableMessage: any, button: any): void
}
declare let lobby: Lobby
declare class LobbyAvatarContainer {
  $avatarContainer: JQuery<HTMLElement>
  $leftContainer: JQuery<HTMLElement>
  $rightContainer: JQuery<HTMLElement>
  get leftContainerCount(): number
  get rightContainerCount(): number
  addAvatar(avatarSlot: any): void
  updateLayout(): void
  reset(): void
  AVATAR_SLOT_COUNT: number
  ROW_SIZE: number
}
declare class LobbyAvatarSlot {
  constructor(
    avatarInfo: any,
    playerName: any,
    playerLevel: any,
    isReady: any,
    isHost: any,
    isSelf: any,
    teamNumber: any,
    numberOfTeams: any,
    teamFullMap: any,
    mixedAnswerMode: any,
    multipleChoice: any
  )
  $LOBBY_SLOT: JQuery<HTMLElement>
  $NAME_OUTER_CONTAINER: JQuery<HTMLElement>
  $NAME_CONTAINER: JQuery<HTMLElement>
  $LEVEL_CONTAINER: JQuery<HTMLElement>
  $IS_HOST_CONTAINER: JQuery<HTMLElement>
  $HOST_OPTIONS: JQuery<HTMLElement>
  $TEAM_DISPLAY: JQuery<HTMLElement>
  $TEAM_DISPLAY_TEXT: JQuery<HTMLElement>
  $ANSWER_MODE_DISPLAY: JQuery<HTMLElement>
  $ANSWER_MODE_ICON: JQuery<HTMLElement>
  avatarIconDisplayHandler: AvatarHeadDisplayHandler
  isSelf: any
  set avatar(arg: any)
  set name(arg: any)
  get name(): any
  set level(arg: any)
  set ready(arg: any)
  set isHost(arg: any)
  get isHost(): any
  teamController: LobbyAvatarTeamController | undefined
  set numberOfTeams(arg: any)
  set teamNumber(arg: any)
  _name: any
  _isHost: any
  set hostOptionsActive(arg: any)
  setupAvatarOptions(): void
  remove(): void
  updateLayout(): void
  setTeamFull(teamNumber: any, isFull: any): void
  setDisplayAnswerMode(on: any): void
  setAnswerMode(multiChoiceMode: any): void
  SLOT_TEMPLATE: string
}
declare class LobbyAvatarTeamController {
  constructor(
    $lobbySlot: any,
    numberOfTeams: any,
    teamFullMap: any,
    isHost: any
  )
  $teamDisplay: any
  $teamNumberContainer: any
  $unsetOption: any
  set isHost(arg: any)
  numberMap: {}
  hideTimeout: any
  updateNumberOfTeams(numberOfTeams: any): void
  setTeamFull(teamNumber: any, isFull: any): void
  setActiveNumber(number: any): void
  activeNumber: any
  clearActiveNumber(): void
}
declare class LobbyAvatarTeamNumber {
  constructor(number: any)
  $body: JQuery<HTMLElement>
  _full: boolean
  set active(arg: any)
  set full(arg: boolean)
  get full(): boolean
  remove(): void
  TEMPLATE: string
}
declare class LobbyInputModeSelector {
  $container: JQuery<HTMLElement>
  $typingOption: JQuery<HTMLElement>
  $multipleChoiceOption: JQuery<HTMLElement>
  reset(): void
  show(): void
  hide(): void
  sendSelectionUpdate(): void
  displayOptionMessage(): void
  setTypingSelected(): void
  setMultipleChoiceSelected(): void
}
declare class LobbyPlayer extends GamePlayer {
  constructor(
    name: any,
    level: any,
    gamePlayerId: any,
    host: any,
    avatarInfo: any,
    ready: any,
    teamNumber: any,
    numberOfTeams: any,
    teamFullMap: any,
    mixedAnswerMode: any,
    multipleChoice: any
  )
  _ready: any
  lobbySlot: LobbyAvatarSlot
  set ready(arg: any)
  get ready(): any
  set avatar(arg: any)
  set hostOptionsActive(arg: any)
  set teamNumber(arg: any)
  set mixedAnswerActive(arg: any)
  set answerModeMultipleChoice(arg: any)
  remove(): void
  updateAvatarLayout(): void
  updateNumberOfTeams(newNumber: any): void
  setTeamFull(teamNumber: any, isFull: any): void
}
declare class LobbyPlayerCounter {
  $topCount: JQuery<HTMLElement>
  $bottomCount: JQuery<HTMLElement>
  $centerCount: JQuery<HTMLElement>
  $load: JQuery<HTMLElement>
  $readyLoad: JQuery<HTMLElement>
  countMode: boolean
  toggleCountMode(on: any): void
  updateCount(max: any, current: any): void
  updateReadyCount(max: any, current: any): void
}
declare class LobbyRuleModal {
  $modal: JQuery<HTMLElement>
  $prevButton: JQuery<HTMLElement>
  $nextButton: JQuery<HTMLElement>
  $imageContainer: JQuery<HTMLElement>
  $title: JQuery<HTMLElement>
  mainCycle: LobbyRuleCycleContainer
  modeCycle: LobbyRuleCycleContainer
  currentSetIndex: number
  entries: any[]
  teamModeSet: LobbyRuleModalEntrySet
  speedScoringSet: LobbyRuleModalEntrySet
  livesSet: LobbyRuleModalEntrySet
  lootingSet: LobbyRuleModalEntrySet
  get onLastEntry(): boolean
  get onFirstEntry(): boolean
  show(): void
  hide(): void
  reset(): void
  setupContent(
    showLooting: any,
    showTeam: any,
    showSpeed: any,
    showLives: any
  ): void
  setActiveSet(index: any): void
  selectedChange(newIndex: any): void
  updateButtons(): void
  TEAM_MODE_TEMPLATE: string
  SPEED_SCORING_TEMPLATE: string
  LIVES_TEMPLATE: string
  LOOTING_TEMPLATE: string
}
declare class LobbyRuleCycleContainer {
  constructor($container: any)
  $container: any
  entries: any[]
  activeIndex: number
  setup(
    amount: any,
    nameMap: any,
    activeIndex: any,
    onClickHandler?: () => void
  ): void
  setActive(index: any): void
  ENTRY_TEMPLATE: string
}
declare class LobbyRuleModalEntrySet {
  constructor(
    name: any,
    $entries: any,
    maxSizeMap: any,
    customOffsetMap: any,
    mainController: any,
    nameMap: any,
    onFinishCallback: any
  )
  name: any
  entries: LobbyRuleModalEntry[]
  selectedEntryIndex: number
  mainController: any
  nameMap: any
  onFinishCallback: any
  get entryCount(): number
  get onLastEntry(): boolean
  get onFirstEntry(): boolean
  removeEntries(): void
  reset(): void
  updateSelectedEntry(): void
  changeSelected(newIndex: any): void
  setNewSelected(newIndex: any): void
  FULL_WIDTH: number
  DEFAULT_OPEN_SIZE: number
}
declare class LobbyRuleModalEntry {
  constructor(
    $entry: any,
    index: any,
    parentSet: any,
    maxSize: any,
    customOffset: any
  )
  $entry: any
  index: any
  parentSet: any
  maxSize: any
  _selected: boolean
  set width(arg: any)
  set selected(arg: boolean)
  get selected(): boolean
}
declare function SettingMessageFormater(): void
declare class SettingMessageFormater {
  ARROW_HTML: string
  format(newEntry: any, oldEntry: any, settingName: any): string
  translateOnOff(on: any): 'On' | 'Off'
  translateVintageSeason(
    seasonId: any
  ): 'Winter' | 'Spring' | 'Summer' | 'Fall' | undefined
  translateVintageEntry(entry: any): string
  formatGenreTagString(entry: any, name: any): string | undefined
  translateSettingNameToText(
    setting: any
  ):
    | 'Vintage'
    | 'Anime Score'
    | 'Player Score'
    | 'Sample Point'
    | 'Guess Time'
    | 'Inventory Size'
    | 'Looting Time'
    | 'Song Selection'
    | 'Show Selection'
    | 'Number of Songs'
    | 'Number of Players'
    | 'Song Popularity'
    | 'Song Difficulty'
    | 'Song Types'
    | 'Opening Categories'
    | 'Ending Categories'
    | 'Insert Categories'
    | 'Room Name'
    | 'Room Private'
    | 'Password'
    | 'Playback Speed'
    | 'Game Mode'
    | 'Modifiers'
    | 'Type'
    | 'Genre'
    | 'Tags'
    | 'Lives'
    | 'Scoring'
    | 'Team Size'
    | 'Watched Distribution'
    | 'Answering'
    | 'Extra Guess Time'
    | undefined
  translateSettingValueToText(
    setting: any,
    settingName: any,
    rangeTranslator: any
  ): string
  translateSubSetting(value: any, settingName: any): any
}
declare var settingMessageFormater: SettingMessageFormater
declare class LifeCounterController {
  constructor($avatar: any, maxLives: any, currentLives: any)
  $container: any
  maxLives: any
  currentLives: any
  lifeMap: {
    1: any
    2: any
    3: any
    4: any
    5: any
  }
  setupLives(currentLives: any, revivePoints: any): void
  updateState(newLifeCount: any, newReviveScore: any): void
  activateLife(number: any): void
  killLife(number: any): void
  activateCharge(number: any): void
  killChage(number: any): void
  showReviveTarget(): void
  runReviewAnimation(): void
}
declare function AmqAwesomeplete(input: any, o: any, scrollable: any): void
declare class AmqAwesomeplete {
  constructor(input: any, o: any, scrollable: any)
  searchId: number
  currentSubList: any
  letterLists: {}
  currentQuery: string
  $ul: JQuery<HTMLElement>
  item: (text: any, input: any, item_id: any) => any
  evaluate(): void
  index: number | undefined
  hide(): void
  goto(i: any): void
}
declare function Suggestion(data: any): void
declare class Suggestion {
  constructor(data: any)
  label: any
  value: any
  toString: () => string
  valueOf(): string
}
declare class AnswerNumberController {
  constructor($answerContainer: any)
  $textContainer: any
  $answerNumber: any
  $answerContainer: any
  shown: boolean
  showResult(number: any, correct: any): void
  showUnknown(number: any): void
  show(): void
  hide(): void
}
declare function AutoCompleteController($input: any): void
declare class AutoCompleteController {
  constructor($input: any)
  list: any[]
  version: any
  $input: any
  updateList(): void
  newList(): void
  awesomepleteInstance: AmqAwesomeplete | undefined
  hide(): void
}
declare class AvatarAnswerStatus {
  constructor($answerContainer: any)
  $statusContainer: any
  $listBar: any
  $typeText: any
  $scoreText: any
  $lootedText: any
  set status(arg: any)
  set score(arg: any)
  set looted(arg: any)
  hide(): void
  show(): void
  convertStatusToLetter(status: any): '' | 'P' | 'W' | 'C' | 'H' | 'D' | 'L'
  convertStatusToClass(
    status: any
  ): '' | 'watching' | 'completed' | 'hold' | 'dropped' | 'planning' | 'looted'
}
declare class FlaggedMessageContainer {
  $container: JQuery<HTMLElement>
  $contentContainer: JQuery<HTMLElement>
  $counter: JQuery<HTMLElement>
  $displayButton: JQuery<HTMLElement>
  $clearAllButton: JQuery<HTMLElement>
  entryMap: {}
  show(): void
  hide(): void
  toggleDisplay(): void
  addEntry({
    messagePayload,
    rankedChatBanState,
    rankedChatBanTime,
  }: {
    messagePayload: any
    rankedChatBanState: any
    rankedChatBanTime: any
  }): void
  removeEntry(messageId: any): void
  updateCount(): void
  setMessageWarned(messageId: any): void
  setMessageBanned(messageId: any): void
  clear(): void
}
declare class FlaggedMessageContainerEntry {
  constructor(
    {
      sender,
      message,
      messageId,
      emojis,
    }: {
      sender: any
      message: any
      messageId: any
      emojis: any
    },
    rankedChatBanState: any,
    rankedChatBanTime: any,
    controller: any
  )
  $html: JQuery<HTMLElement>
  $warnButton: JQuery<HTMLElement>
  $banButton: JQuery<HTMLElement>
  $resultContainer: JQuery<HTMLElement>
  $resultText: JQuery<HTMLElement>
  messageId: any
  controller: any
  active: boolean
  showResult(text: any): void
  remove(): void
  TEMPLATE: string
}
declare class MoeVideoPlayer extends VideoPlayer {
  firstVideo: boolean
  _SUPPORTED_RESOLUTIONS: number[]
  troubleTriggerActive: boolean
  startPoint: number | null | undefined
  loadVideo(
    id: any,
    playLength: any,
    startPoint: any,
    firstVideo: any,
    videoMap: any,
    playOnReady: any,
    startTime: any,
    playbackRate: any,
    videoVolumeMap: any,
    fullSongRange: any
  ): void
  videoMap: any
  videoVolumeMap: any
  playbackRate: any
  startPercent: number | undefined
  bufferLength: number | undefined
  startTime: number | undefined
  hostOrder: any[] | undefined
  resolutionOrder: any
  songId: any
  loadAndPlayVideo(
    id: any,
    playLength: any,
    startPoint: any,
    firstVideo: any,
    startTime: any,
    videoMap: any,
    playbackRate: any,
    videoVolumeMap: any,
    fullSongRange: any
  ): void
  getVideoVolume(): any
  isPlaying(): boolean
  getNextVideoId(): undefined
  resolution: any
  host: any
  startLoading(): void
  tryNextVideo(): void
  BUFFER_MONITOR_TICK_RATE: number
}
declare class PauseButton {
  $button: JQuery<HTMLElement>
  $icon: JQuery<HTMLElement>
  $pauseTextOverlay: JQuery<HTMLElement>
  $pauseCountdownOverlay: JQuery<HTMLElement>
  $pauseCountdownValue: JQuery<HTMLElement>
  pauseOn: boolean
  show(): void
  hide(): void
  updateState(pauseOn: any): void
  startCountdown(lengthMs: any): void
  reset(): void
  PAUSE_ICON_CLASS: string
  PLAY_ICON_CLASS: string
  PAUSE_POPOVER_MESSAGE: string
  PLAY_POPOVER_MESSAGE: string
}
declare function QualityController(): void
declare class QualityController {
  _$LIST: JQuery<HTMLElement>
  _$720: JQuery<HTMLElement>
  _$480: JQuery<HTMLElement>
  _$0: JQuery<HTMLElement>
  setup(): void
  targetResolution: any
  resetSelected(): void
  newResolution(newRes: any): void
}
declare var qualityController: QualityController
declare class Quiz {
  $view: JQuery<HTMLElement>
  $inputContainer: JQuery<HTMLElement>
  $startReturnToLobbyButton: JQuery<HTMLElement>
  $nexusTargetLayer: JQuery<HTMLElement>
  $videoOverflowContainer: JQuery<HTMLElement>
  inputFocused: boolean
  onLastSong: boolean
  settingUpFirstSong: boolean
  inQuiz: boolean
  soloMode: boolean
  isHost: boolean
  _groupSlotMap: {}
  targetingPlayerId: any
  currentAbilityTarget: any
  _noSongsListner: Listener
  _quizOverListner: Listener
  _sendFeedbackListner: Listener
  _playerLeaveListner: Listener
  _playerRejoiningListener: Listener
  _spectatorLeftListener: Listener
  _quizreadyListner: Listener
  _nextVideoInfoListener: Listener
  _playNextSongListner: Listener
  _playerAnswerListner: Listener
  _resultListner: Listener
  _endResultListner: Listener
  _waitingForBufferingListner: Listener
  _xpCreditGainListner: Listener
  _noPlayersListner: Listener
  _playerAnswerListener: Listener
  _skippingVideoListener: Listener
  _skipMessageListener: Listener
  _returnVoteStartListner: Listener
  _guessPhaseOverListner: Listener
  _errorListener: Listener
  _nameChangeListner: Listener
  _pauseTriggerListener: Listener
  _unpauseTriggerListener: Listener
  _returnVoteResultListener: Listener
  _teamMemberAnswerListener: Listener
  _modMessageFlagListener: Listener
  _messageFlagWarnedListener: Listener
  _messageFlagBanListener: Listener
  _playerHiddenListener: Listener
  _lateJoinTriggeredListener: Listener
  _playerLateJoinListener: Listener
  _nexusGameEventsListener: Listener
  _extraGuessTimeListener: Listener
  setup(): void
  videoOverlay: VideoOverlay | undefined
  infoContainer: QuizInfoContainer | undefined
  returnVoteController: ReturnVoteController | undefined
  videoTimerBar: TimerBar | undefined
  skipController: QuizSkipController | undefined
  avatarContainer: QuizAvatarContainer | undefined
  scoreboard: QuizScoreboard | undefined
  answerInput: QuizAnswerInput | undefined
  pauseButton: PauseButton | undefined
  avatarAssetHandler: QuizAvatarAssetHandler | undefined
  flaggedMessageContainer: FlaggedMessageContainer | undefined
  lateJoinButton: StandardButton | undefined
  nexusAttackOrderContainer: QuizNexusAttackOrderContainer | undefined
  eventQueue: QuizEventQueue | undefined
  openView(callback: any): void
  closeView(args: any): void
  players: {} | null | undefined
  setupQuiz(
    players: any,
    isSpectator: any,
    quizState: any,
    settings: any,
    isHost: any,
    groupSlotMap: any,
    soloMode: any,
    teamAnswers: any,
    selfAnswer: any,
    champGame: any,
    multipleChoice: any,
    quizDescription: any,
    enemies: any,
    avatarAssets: any
  ): void
  gameMode: any
  ownGamePlayerId: any
  teamMode: boolean | undefined
  quizDescription: any
  fullSongRange: any
  isSpectator: any
  champGame: any
  set groupSlotMap(arg: {})
  get groupSlotMap(): {}
  skipSettings:
    | {
        guessing: any
        replay: any
      }
    | undefined
  enemyMap: {} | undefined
  avatarSlotMap: {} | undefined
  nextSongPlayLength: any
  setInputInFocus(inFocus: any): void
  skipClicked(): void
  promoteHost(newHostName: any): void
  leave(): void
  viewSettings(): void
  videoReady(songId: any): void
  startReturnLobbyVote(): void
  selectAvatarGroup(number: any): void
  handleAutoHide(type: any, watched: any, highRisk: any): void
  handlePlayerOnlyChatPoint(on: any): void
  handleNoEmotePoint(on: any): void
  addLateJoinPlayer(player: any): QuizPlayer
  updateEnemyTarget(targetPosition: any, targetPlayer: any): void
  handleNexusEvent(event: any, finishedCallback?: () => void): void
  getNexusTarget(targetType: any, slot: any): any
  sortNexusEvents(events: any): any
  updateSwapTarget(slotOne: any, slotTwo: any): void
  clearSwapIcons(): void
  displayAbilityTarget(
    $targetIcon: any,
    ability: any,
    mouseX: any,
    mouseY: any
  ): void
  currentAbilityTargetClickHandler: ((target: any) => void) | null | undefined
  currentAbilityMouseMoveHandler: ((event: any) => void) | null | undefined
  currentAbilityTargetClearHandler: (() => void) | undefined
  $currentAbilityTargetIcon: any
  clearAbilityTarget(): void
  handleNewNexusCharacterClick(quizPlayer: any): boolean
  get ownGroupSlot(): string | undefined
  displayListNumber(display: any): void
  QUIZ_STATES: {
    PRESETUP: number
    LOADING: number
    WAITING_FOR_READY: number
    GUESS_PHASE: number
    ANSWER_PHASE: number
    SHOW_ANSWER_PHASE: number
    END_PHASE: number
    WAITING_BUFFERING: number
    WAITING_ANSWERS_PHASE: number
    BATTLE_ROYAL: number
    PAUSE: number
    EXTRA_GUESS_TIME: number
  }
  SCORE_TYPE_IDS: {
    COUNT: number
    SPEED: number
    LIVES: number
  }
  SHOW_SELECTION_IDS: {
    AUTO: number
    LOOTING: number
  }
  TEAM_ANSWER_IN_CHAT_STATES: {
    NEVER: number
    OUT_OF_FOCUS: number
    ALWAYS: number
  }
  SKIP_PHASES: any[]
  SHOW_TIMER_PHASES: any[]
  CURRENT_BUFFER_FOCUS_PHASES: any[]
  NEXUS_DELAYED_EVENT_DELAY: number
}
declare var quiz: Quiz
declare class QuizAbilityIcon {
  constructor(
    $iconContainer: any,
    {
      name,
      description,
      fileName,
      enabled,
      cooldownLength,
      currentCooldown,
      targetInfo,
    }: {
      name: any
      description: any
      fileName: any
      enabled: any
      cooldownLength: any
      currentCooldown: any
      targetInfo: any
    },
    slot: any,
    ownAbility: any
  )
  $iconContainer: any
  $icon: any
  $cooldownText: any
  slot: any
  _enabled: any
  cooldownLength: any
  _currentCooldown: any
  abilityHover: GraceHoverHandler
  targetInfo: any
  $iconTarget: JQuery<HTMLElement> | undefined
  set enabled(arg: any)
  get enabled(): any
  get onCooldown(): boolean
  get active(): any
  set currentCooldown(arg: any)
  get currentCooldown(): any
  updateState(): void
  validateAbilityTarget(target: any): boolean
  targetSelected(slot: any, enemy: any): void
  ICON_TARGET_TEMPLATE: string
}
declare class QuizAnswerInput {
  constructor(skipController: any)
  typingInput: QuizTypeAnswerInput
  multipleChoice: QuizMultipleChoiceAnswerController
  get activeInputController():
    | QuizTypeAnswerInput
    | QuizMultipleChoiceAnswerController
  set inFocus(arg: boolean)
  get inFocus(): boolean
  set active(arg: any)
  set gotTeamAnswer(arg: any)
  updateMode(multipleChoiceActive: any): void
  displayAnswer(answer: any): void
  setNewAnswer(answer: any): void
  submitAnswer(showState: any): void
  showSubmitedAnswer(): void
  handleGuessPhaseOver(): void
  disable(): void
  enable(): void
  clear(): void
  resetAnswerState(): void
  updateAutocomplete(): void
  setMultipleChoiceNames(names: any): void
  setCorrectGuess(correctGuess: any): void
}
declare class QuizTypeAnswerInputController {
  constructor($container: any, skipController: any)
  $container: any
  skipController: any
  displayed: boolean
  _inFocus: boolean
  gotTeamAnswer: boolean
  show(): void
  hide(): void
  set inFocus(arg: boolean)
  get inFocus(): boolean
  set active(arg: any)
  get autoSubmitEligible(): boolean
  displayAnswer(): void
  setNewAnswer(): void
  submitAnswer(answer: any): void
  handleGuessPhaseOver(): void
  disable(): void
  enable(): void
  clear(): void
  resetAnswerState(): void
}
declare class QuizTypeAnswerInput extends QuizTypeAnswerInputController {
  constructor(skipController: any)
  $input: JQuery<HTMLElement>
  quizAnswerState: QuizAnswerState
  autoCompleteController: AutoCompleteController
  displayAnswer(answer: any): void
  setNewAnswer(answer: any): void
  showSubmitedAnswer(): void
  updateAutocomplete(): void
}
declare class QuizMultipleChoiceAnswerController extends QuizTypeAnswerInputController {
  constructor(skipController: any)
  answerSubmitted: boolean
  answerOptions: QuizMultipleChoiceAnswerOption[]
  answerListener: Listener
  get currentSelectedOption(): QuizMultipleChoiceAnswerOption | undefined
  handleClick(option: any): void
  findOptionWithName(name: any): QuizMultipleChoiceAnswerOption | undefined
  displayAnswer(answer: any): void
  setNewAnswer(answer: any): void
  submitAnswer(): void
  setNames(names: any): void
  setCorrectGuess(correctGuess: any): void
}
declare class QuizMultipleChoiceAnswerOption {
  constructor($body: any, clickHandler: any)
  $body: any
  $textContainer: any
  $text: any
  currentName: string
  altName: string
  selected: boolean
  disabled: boolean
  setName(name: any): void
  setPopoverName(main: any, alt: any): void
  resetName(): void
  reset(): void
  clearSelected(): void
  setSelected(): void
  setRegistered(): void
  setCorrectGuess(correctGuess: any): void
  disable(): void
  enable(): void
}
declare function QuizAnswerState($input: any): void
declare class QuizAnswerState {
  constructor($input: any)
  $SENDING_CONTAINER: JQuery<HTMLElement>
  $ANSWER_CHECK: JQuery<HTMLElement>
  $OUTER_CONTAINER: JQuery<HTMLElement>
  $INNER_CONTAINER: JQuery<HTMLElement>
  $INPUT: any
  popoverContent: any
  answerListener: Listener
  startListner(): void
  stopListener(): void
  startLoad(): void
  loadingInterval: NodeJS.Timer | undefined
  stopLoad(): void
  show(): void
  hide(): void
  showCheck(): void
  hideCheck(): void
  submitAnswer(answer: any, showState: any, noLoad: any): void
  currentAnswer: any
  reset(): void
  submittedAnswer: any
  toggleFade(on: any): void
  setInputToAnswer(): void
  answerSubmited(): boolean
}
declare class QuizAvatarAssetHandler {
  assetMap: {}
  loadAssets(assetNameList: any): void
  getAssetSrcInfo(assetName: any): {
    srcset: any
    src: any
  }
  TARGET_SIZE: string
}
declare class QuizAvatarSlotBase {
  constructor(
    template: any,
    name: any,
    level: any,
    points: any,
    avatarDisabled: any,
    poseIdMap: any,
    flipDamageSprite: any,
    poseId: any
  )
  $body: JQuery<HTMLElement>
  $innerContainer: JQuery<HTMLElement>
  $bottomContainer: JQuery<HTMLElement>
  $nameContainer: JQuery<HTMLElement>
  $levelContainer: JQuery<HTMLElement>
  $pointContainer: JQuery<HTMLElement>
  $avatarImageContainer: JQuery<HTMLElement>
  $imageContainer: JQuery<HTMLElement>
  $targetIconContainer: JQuery<HTMLElement>
  $swapIconContainer: JQuery<HTMLElement>
  $hpBar: JQuery<HTMLElement>
  $shieldBar: JQuery<HTMLElement>
  $buffContainer: JQuery<HTMLElement>
  $buffContainerInner: JQuery<HTMLElement>
  $overlayImg: JQuery<HTMLElement>
  $iconFlashImg: JQuery<HTMLElement>
  $iconObjectContainer: JQuery<HTMLElement>
  $hitCanvas: JQuery<HTMLElement>
  $internalCanvas: JQuery<HTMLElement>
  $damageBubleContainer: JQuery<HTMLElement>
  $shieldAmount: JQuery<HTMLElement>
  $nexusTargetButton: JQuery<HTMLElement>
  $nexusTargetButtonText: JQuery<HTMLElement>
  hitCanvasCtx: any
  internalCanvasCtx: any
  flashImg: QuizAvatarSlotFlashImage
  avatarDisplayHandler: AvatarDisplayHandler
  poseIdMap: any
  _pose: any
  currentBuffSize: number
  avatarSizeMod: any
  set name(arg: any)
  get name(): any
  set level(arg: any)
  set points(arg: any)
  flipDamageSprite: any
  displayed: boolean
  set disabled(arg: any)
  get disabled(): any
  cloneImageTarget: any
  poseImages: {}
  animatedAvatar: boolean
  get allPoseImages(): any[]
  setupAvatar(): void
  addTargetIcon(icon: any): void
  addSwapIcon(icon: any): void
  loadPoses(): void
  updatePose(): void
  getPoseImage(targetPose: any, disabled: any): any
  updateSpriteCanvasPosition(): void
  updateSize(maxWidth: any, maxHeight: any): void
  currentMaxWidth: any
  currentMaxHeight: any
  updateTargetButtonTextSize(): void
  updateBuffContainerSize(): void
  buffsLargerThanContainer(): boolean
  resizeBuffs(): void
  resetBuffSize(): void
  addBuff($buff: any): void
  buffRemoved(): void
  remove(): void
  hide(): void
  show(): void
  displayDamage(
    newHp: any,
    newShield: any,
    hpChangeText: any,
    maxHealth: any,
    damageClasses: any,
    attackEffectSet: any,
    finishedCallback: any
  ): void
  triggerHealthUpdate(
    newHp: any,
    newShield: any,
    hpChangeText: any,
    maxHealth: any,
    damageClasses: any
  ): void
  displayAttackEffectSetInternal(
    attackEffectSet: any,
    loop: any,
    scale: any
  ): void
  playForcedSfx(sfx: any, sfxTimeingMs: any, callback: any): void
  playSfx(sfx: any): void
  playDamageSprite(sprite: any, hitEffect: any, finishedCallback: any): void
  displayDamageSprite(sprite: any, loop: any, scale: any): void
  updateHealth(
    newHp: any,
    hpChangeText: any,
    maxHealth: any,
    damageClasses: any
  ): void
  set hpBarPercent(arg: any)
  updateShield(newShield: any, maxHealth: any): void
  set shieldBarPercent(arg: any)
  set shieldAmount(arg: any)
  displayOverlay(
    src: any,
    srcset: any,
    scale: any,
    fadeIn: any,
    noShadow: any
  ): void
  clearOverlay(fadeOut: any): void
  displayFlashIcon(
    iconSrc: any,
    iconSrcset: any,
    callback: any,
    $targetImage: any
  ): void
  getEffectClassFromHitEffectId(
    hitEffectId: any
  ): 'qpAvatarDamagePushOneWay' | 'qpAvatarDamageShake' | 'qpAvatarDamagePush'
  setCloneEffect(cloneSlot: any): void
  removeCloneEffect(): void
  setCustomEffectClass(effectClass: any): void
  _name: any
  _disabled: any
  set zIndex(arg: any)
  set pose(arg: any)
  get pose(): any
  get sizeModClass(): string
  get sizeModValue(): any
  IMAGE_SIZE_MOD_SIZES: {
    0: string
    20: string
    51: string
    80: string
  }
  INFO_CONTAINER_HEIGHT: number
  INNER_OUTER_CONTAINER_WIDTH_RATIO: number
  DAMAGE_BUBLE_TEMPLATE: string
  MAX_HORI_DAMAGE_BUBLE_OFFSET: number
  MIN_HORI_DAMAGE_BUBLE_OFFSET: number
  BOTTOM_BAR_SIZE: number
  BUFF_MAX_SIZE: number
  BUFF_MIN_SIZE: number
  BUFF_SIZE_STEPS: number
  BUFF_SIZE_GRACE: number
  OVERLAY_DEFAULT_WIDTH: number
  OVERLAY_DEFAULT_SIZES: number
}
declare class QuizAvatarPoseImageBase {
  constructor(avatarInfo: any, pose: any, imageVh: any)
  avatarInfo: any
  pose: any
  imageVh: any
  loaded: boolean
  get srcset(): void
  get src(): void
  load(callback: any): void
  image: HTMLImageElement | undefined
}
declare class QuizAvatarSlotFlashImage {
  constructor($img: any, $objectContainer: any)
  $img: any
  $objectContainer: any
  active: boolean
  fadingIn: boolean
  flashImage(src: any, srcset: any, callback: any, $targetImage: any): void
  callback: any
  stuckTimeout: NodeJS.Timeout | undefined
  STUCK_TIMEOUT_TIME: number
}
declare class QuizAvatarContainer {
  $avatarRow: JQuery<HTMLElement>
  $avatarContainer: JQuery<HTMLElement>
  $enemyContainer: JQuery<HTMLElement>
  _$page: JQuery<HTMLElement>
  _$animeContainer: JQuery<HTMLElement>
  playerSlotMap: {}
  enemySlotMap: {}
  _groupSlotMap: {}
  _currentGroup: number
  delayUpdateRunning: boolean
  set currentGroup(arg: number)
  get currentGroup(): number
  set groupSlotMap(arg: any)
  setupAvatars(players: any, groupSlotMap: any): void
  setupEnemies(enemies: any): void
  replaceEnemies(enemies: any): void
  removeEnemy(enemyPosition: any): void
  spawnEnemies(enemies: any, fadeIn: any): void
  addLateJoinAvatars(players: any, groupSlotMap: any): void
  updateAvatarLayout(nexusLayout: any): void
  currentMaxWidth: number | undefined
  currentMaxHeight: number | undefined
  updateGroupSlotWithDelay(newMap: any, delayInMs: any): void
  updateCurrentGroup(): void
  reset(): void
  MAX_GROUP_SIZE: number
  MAX_ENEMY_COUNT: number
  NEXUS_MODE_CONTAINER_HEIGHT_REDUCTION: number
}
declare class QuizAvatarSlot extends QuizAvatarSlotBase {
  constructor(
    name: any,
    level: any,
    points: any,
    avatarInfo: any,
    isHost: any,
    avatarDisabled: any,
    lifeCountEnabled: any,
    maxLives: any,
    teamPlayer: any,
    hidden: any,
    nexusSlot: any,
    multiChoiceActive: any,
    poseId: any
  )
  $answerContainerText: JQuery<HTMLElement>
  $answerContainer: JQuery<HTMLElement>
  $hostIconContainer: JQuery<HTMLElement>
  $hiddenIconContainer: JQuery<HTMLElement>
  $abilityIconContainer: JQuery<HTMLElement>
  $backgroundContainer: JQuery<HTMLElement>
  $genreIconContainer: JQuery<HTMLElement>
  $multiChoiceIcon: JQuery<HTMLElement>
  genreIcons: {}
  jsonSrc: string | null
  atlasSrc: string | null
  optionActive: any
  set host(arg: any)
  _teamAnswerSharingOn: boolean
  answerNumberController: AnswerNumberController
  answerStatus: AvatarAnswerStatus
  lifeCounterController: LifeCounterController | null
  set answer(arg: any)
  get answer(): any
  _answer: any
  set listLooted(arg: any)
  set answerCorrect(arg: any)
  set finalResult(arg: any)
  set unknownAnswerNumber(arg: any)
  set listStatus(arg: any)
  set listScore(arg: any)
  set teamAnswerSharingOn(arg: boolean)
  get teamAnswerSharingOn(): boolean
  showTeamAnswer(): void
  hideTeamAnswer(): void
  displayHidden(): void
  setResultAnswerNumber(number: any, correct: any): void
  setupAvatar(avatar: any): void
  setupBackground(background: any): void
  updateLifeCounter(lifeCount: any, revivePoints: any): void
  setupLifeCounterState(lives: any, revivePoints: any): void
  updateAnswerFontSize(): void
  runGroupUpAnimation(): void
  runGroupDownAnimation(): void
  showNexusTurn(): void
  hideNexusTurn(): void
  addGenreIcons(genreInfo: any): void
  hideAllGenres(): void
  showGenres(genreIds: any, seasonId: any): void
  AVATAR_TEMPALTE: string
  GROUP_CHANGE_ANIMATION_LENGTH: number
  SEASON_ID_GENRE_OFFSET: number
}
declare class QuizAvatarPoseImage extends QuizAvatarPoseImageBase {
  get srcset(): string
  get src(): string
}
declare class QuizAvatarGenreIcon {
  constructor(
    {
      name,
    }: {
      name: any
    },
    strong: any
  )
  $body: JQuery<HTMLElement>
  set active(arg: any)
  remove(): void
  TEMPLATE: string
}
declare class QuizBoss extends QuizEnemy {
  createSlot(enemyInfo: any): QuizBossSlot
  createTargetIcon(enemyInfo: any): QuizBossTargetIcon
  updatePoseState({
    poseId,
    attack,
    form,
  }: {
    poseId: any
    attack: any
    form: any
  }): void
  updateState({
    attackTimer,
    poseInfo,
    defeated,
  }: {
    attackTimer: any
    poseInfo: any
    defeated: any
  }): void
}
declare class QuizBossSlot extends QuizEnemySlot {
  currentForm: any
  currentAttack: string | undefined
  DEFAULT_POSES: string[]
  ATTACK_POSES: string[]
}
declare class QuizBossPoseImage extends QuizEnemyPoseImage {
  constructor(
    avatarInfo: any,
    pose: any,
    imageVh: any,
    attackName: any,
    form: any
  )
  attackName: any
  form: any
}
declare class QuizBuffIcon {
  constructor(
    name: any,
    description: any,
    fileName: any,
    duration: any,
    debuff: any,
    currentCharge: any
  )
  $body: JQuery<HTMLElement>
  $img: JQuery<HTMLElement>
  $duration: JQuery<HTMLElement>
  $chargeNumber: JQuery<HTMLElement>
  abilityHover: GraceHoverHandler
  remove(): void
  updateDuration(duration: any): void
  updateCharge(charge: any): void
  TEMPLATE: string
}
declare class QuizCharacter {
  constructor(spriteSheets: any)
  buffs: {}
  disabledAction: {}
  get slotElement(): void
  addBuff({
    name,
    description,
    fileName,
    duration,
    disables,
    debuff,
    currentCharge,
  }: {
    name: any
    description: any
    fileName: any
    duration: any
    disables: any
    debuff: any
    currentCharge: any
  }): void
  updateBuff({
    name,
    duration,
    charge,
  }: {
    name: any
    duration: any
    charge: any
  }): void
  removeBuff({ name }: { name: any }): void
  removeAllBuffs(): void
  displayDisabledAction(actionName: any, callback: any): void
  displayFlashIcon(
    src: any,
    srcset: any,
    callback: any,
    $targetImage: any
  ): void
  updateShield(newShieldValue: any): void
  setCloneEffect(cloneTarget: any): void
  removeCloneEffect(): void
  displayAttackEffectSet(attackEffectSet: any, loop: any, scale: any): void
  setCustomEffectClass(effectClass: any): void
  DISABLE_ICON_SIZE: string
}
declare class QuizEnemy extends QuizCharacter {
  enemyPosition: any
  hp: any
  shield: any
  maxHp: any
  staticEnemy: any
  enemySlot: QuizEnemySlot
  targetIcon: QuizEnemyTargetIcon | null
  get slotElement(): QuizEnemySlot
  get slot(): any
  createSlot(enemyInfo: any): QuizEnemySlot
  createTargetIcon(enemyInfo: any): QuizEnemyTargetIcon | null
  initPose(enemyInfo: any): void
  updatePose(): void
  addTargetIcon(icon: any): void
  displayDamage(
    newHp: any,
    newShield: any,
    damage: any,
    damageClasses: any,
    attackEffectSet: any,
    finishedCallback: any,
    displayZero: any
  ): void
  updateState({
    attackTimer,
    poseId,
    defeated,
  }: {
    attackTimer: any
    poseId: any
    defeated: any
  }): void
  displayDefeated(): void
  setAvatarTarget(avatar: any): void
  updateAttackTimer(timeLeft: any): void
  displayOverlay(
    src: any,
    srcet: any,
    scale: any,
    fadeIn: any,
    noShadow: any
  ): void
  clearOverlay(fadeOut: any): void
}
declare class QuizEnemySlot extends QuizAvatarSlotBase {
  constructor(enemyInfo: any, hp: any, position: any)
  $targetImage: JQuery<HTMLElement>
  $counterContainer: JQuery<HTMLElement>
  setupAvatar(avatar: any): void
  updateTarget(src: any, srcset: any): void
  clearTarget(): void
  setGotTarget(gotTarget: any): void
  ENEMY_TEMPLATE: string
  SPRITE_CANVAS_POSITION_CHANGE_X: number
  SPRITE_CANVAS_POSITION_CHANGE_Y: number
  SPRITE_CANVAS_POSITION_Y_DEFAULT: number
  MINIMUM_BUBBLE_SPEED: number
  MAXIMUM_BUBBLE_SPEED: number
}
declare class QuizEnemyPoseImage extends QuizAvatarPoseImageBase {
  get srcset(): string
  get src(): string
}
declare class QuizEventQueue {
  constructor(quiz: any)
  quiz: any
  queue: any[]
  currentEvents: any[]
  finishedEventCount: number
  running: boolean
  reset(): void
  addEvent(events: any, skipDelay: any): void
  startQueue(): void
  tickNextEvents(): void
  TICK_DELAY: number
}
declare function QuizInfoContainer(): void
declare class QuizInfoContainer {
  $name: JQuery<HTMLElement>
  $nameContainer: JQuery<HTMLElement>
  $nameHider: JQuery<HTMLElement>
  $currentSongCount: JQuery<HTMLElement>
  $totalSongCount: JQuery<HTMLElement>
  $extraAnimeSongInfo: JQuery<HTMLElement>
  $songName: JQuery<HTMLElement>
  $songArtist: JQuery<HTMLElement>
  $songType: JQuery<HTMLElement>
  $songVideoLink: JQuery<HTMLElement>
  $songAnimeLink: JQuery<HTMLElement>
  $infoHider: JQuery<HTMLElement>
  $rateContainers: JQuery<HTMLElement>
  $upvoteContainer: JQuery<HTMLElement>
  $downvoteContainer: JQuery<HTMLElement>
  $reportContainer: JQuery<HTMLElement>
  $reportFeedbackContainer: JQuery<HTMLElement>
  $reportFeedbackInput: JQuery<HTMLElement>
  $adminReportCheckbox: JQuery<HTMLElement>
  $songInfoLinkRow: JQuery<HTMLElement>
  REPORT_AUTO_REASONS: string[]
  currentSongNumber: number
  reportAwesomeplete: AmqAwesomeplete
  reportSelected: boolean
  likeSelected: boolean
  dislikeSelected: boolean
  FEEDBACK_TYPE: {
    NONE: number
    LIKE: number
    DISLIKE: number
    REPORT: number
  }
  $extraAnimeNameContent: string
  $extraAnimeContent: string
  showInfo(
    animeNames: any,
    songName: any,
    artist: any,
    type: any,
    typeNumber: any,
    urls: any,
    siteIds: any,
    animeScore: any,
    animeType: any,
    vintage: any,
    animeDifficulty: any,
    animeTags: any,
    animeGenre: any,
    altAnimeNames: any,
    altAnimeNamesAnswers: any
  ): void
  displayAnimeName(name: any, altNames?: any[], altAnswers?: any[]): void
  displayInfoBoxHint({
    artist,
    songName,
    type,
    typeNumber,
    animeScore,
    animeType,
    vintage,
    animeDifficulty,
  }: {
    artist: any
    songName: any
    type: any
    typeNumber: any
    animeScore: any
    animeType: any
    vintage: any
    animeDifficulty: any
  }): void
  fitTextToContainer(): void
  showAnimeName(): void
  showContent(): void
  hideContent(): void
  setCurrentSongCount(count: any): void
  setTotalSongCount(count: any): void
  sendSongFeedback(): void
  resetFeedbackSelects(): void
  reset(): void
  upvoteSong(): void
  downvoteSong(): void
  reportSong(): void
  EXTRA_INFO_TEMPLATE: string
  EXTRA_ANIME_NAME_TEMPLATE: string
}
declare class QuizNexusAttackOrderContainer {
  $container: JQuery<HTMLElement>
  addIcon(icon: any): void
  reset(): void
}
declare class QuizPlayer extends QuizCharacter {
  constructor(
    name: any,
    level: any,
    gamePlayerId: any,
    host: any,
    avatarInfo: any,
    points: any,
    avatarDisabled: any,
    lifeCountEnabled: any,
    maxLives: any,
    startPositionSlot: any,
    teamPlayer: any,
    teamNumber: any,
    hidden: any,
    slot: any,
    maxHp: any,
    currentHp: any,
    shield: any,
    abilityInfo: any,
    buffs: any,
    genreInfo: any,
    playerName: any,
    multiChoiceActive: any,
    poseId: any
  )
  _name: any
  level: any
  gamePlayerId: any
  _host: any
  avatarInfo: any
  points: any
  lifeCountEnabled: any
  _inGame: boolean
  isSelf: boolean
  startPositionSlot: any
  teamNumber: any
  hidden: any
  _slot: any
  targetIcons: any[]
  maxHp: any
  startHp: any
  startShield: any
  genreInfo: any
  avatarSlot: QuizAvatarSlot
  abilityIcon: QuizAbilityIcon | undefined
  particleAnimation: ParticleAnimation | undefined
  particleTrack: ParticleTrack | undefined
  set host(arg: any)
  get host(): any
  get slotElement(): QuizAvatarSlot
  set slot(arg: any)
  get slot(): any
  set name(arg: any)
  get name(): any
  set groupNumber(arg: number | undefined)
  get groupNumber(): number | undefined
  _groupNumber: number | undefined
  set inGame(arg: boolean)
  get inGame(): boolean
  set avatarPose(arg: any)
  set score(arg: any)
  set finalPosition(arg: any)
  set avatarDisabled(arg: any)
  get avatarDisabled(): any
  set answer(arg: any)
  get answer(): any
  set teamAnswer(arg: any)
  set unknownAnswerNumber(arg: any)
  set resultAnswerNumber(arg: any)
  set state(arg: any)
  updatePose(): void
  updateAnswerResult(answerResult: any): void
  fireRewardEvent(xpInfo: any, level: any, credits: any, tickets: any): void
  toggleTeamAnswerSharing(on: any): void
  initNexusContent(): void
  attackOrderIcon: QuizTargetAvatarIcon | undefined
  targetIcon: QuizTargetAvatarIcon | undefined
  swapIcon: QuizTargetAvatarIcon | undefined
  clearNexusContent(): void
  addTargetIcon(icon: any): void
  removeTargetIcon(icon: any): void
  updateTargetIcons(): void
  setNexusTurn(on: any): void
  displayDamage(
    newHp: any,
    newShield: any,
    damage: any,
    damageClasses: any,
    attackEffectSet: any,
    finishedCallback: any,
    displayZero: any
  ): void
  setSwapIcon(icon: any): void
  updateNexusState({ alive }: { alive: any }): void
  displayOverlay(
    src: any,
    srcet: any,
    scale: any,
    fadeIn: any,
    noShadow: any
  ): void
  clearOverlay(fadeOut: any): void
  setInFocus(on: any): void
  hideAllGenres(): void
  showGenres(genreIds: any, seasonId: any): void
}
declare class QuizScoreboard {
  $container: JQuery<HTMLElement>
  _$animeCenterContainer: JQuery<HTMLElement>
  $quizScoreboardItemContainer: JQuery<HTMLElement>
  $quizScoreboardEntryContainer: JQuery<HTMLElement>
  $qpStandingCorrectCount: JQuery<HTMLElement>
  groups: {}
  playerEntries: {}
  scoreType: any
  teamMap: {}
  idsToRemove: any[]
  activeGroup: any
  showCorrect: boolean
  updateLayout(groupMap: any): void
  reset(): void
  setScoreType(scoreType: any): void
  setupGroups(groupMap: any): void
  resetupGroups(groupMap: any): void
  setActiveGroup(groupNumber: any): void
  setupPlayers(players: any, lives: any): void
  setupLatePlayers(newPlayers: any, playerCount: any): void
  setupPlayersWithScore(players: any): void
  updateEntryFontSize(): void
  addPlayerToTeam(entry: any, teamNumber: any): void
  displayListNumber(display: any): void
  updateStandings(players: any, groupMap: any): void
  updateEntryLayout(): void
  updateGroupLayout(groupMap: any): void
  scrollToGroup(groupNumber: any): void
  getScoreTitle(): 'Lives' | 'Points'
  disableEntry(gamePlayerId: any): void
  enableEntry(gamePlayerId: any): void
  resetCorrect(): void
  showCorrectCount(count: any): void
  setEntryHidden(gamePlayerId: any): void
  removeEntry(gamePlayerId: any): void
  SCOREBOARD_BOTTOM_MARGIN: number
  SCOREBOARD_TITLE_HEIGHT: number
  PLAYER_NEEDED_FOR_SHOWING_CORRECT: number
}
declare class QuizSkipController {
  answerInputController: QuizSkipButtonController
  videoSkipController: QuizSkipButtonController
  controllers: QuizSkipButtonController[]
  $container: JQuery<HTMLElement>
  $button: JQuery<HTMLElement>
  $voteStateText: JQuery<HTMLElement>
  _toggled: boolean
  enabled: boolean
  set highlight(arg: any)
  set toggled(arg: boolean)
  get toggled(): boolean
  set stateMessage(arg: any)
  set votePreviewMode(arg: any)
  toggle(): void
  voteSkip(): void
  sendSkipVote(): void
  autoVoteSkip(timeout: any): void
  autoVoteTimeout: NodeJS.Timeout | undefined
  reset(): void
  disable(skipTimeout: any): void
  enable(): void
  setTypingMode(): void
  setMultipleChoiceMode(): void
}
declare class QuizSkipButtonController {
  constructor($container: any)
  $container: any
  $button: any
  $voteStateText: JQuery<HTMLElement>
  set highlight(arg: any)
  set toggled(arg: any)
  set stateMessage(arg: any)
  set votePreviewMode(arg: any)
  disable(skipTimeout: any): void
  enable(): void
  show(): void
  hide(): void
}
declare class QuizTargetIcon {
  constructor(entryInfo: any)
  $body: JQuery<HTMLElement>
  iconImageHandler: AvatarHeadDisplayHandler
  setupImage(entryInfo: any): void
  createSrc(): void
  createSrcSet(): void
  detach(): void
  handleAttached(): void
  destroy(): void
  showFade(): void
  hideFade(): void
  TEMPLATE: string
}
declare class QuizTargetAvatarIcon extends QuizTargetIcon {
  $swapIcon: JQuery<HTMLElement>
  createSrc(avatarInfo: any): string
  createSrcSet(avatarInfo: any): string
  showSwapIcon(): void
  hideSwapIcon(): void
}
declare class QuizEnemyTargetIcon extends QuizTargetIcon {
  constructor(enemyInfo: any, turnsToAttck: any, position: any)
  $counter: JQuery<HTMLElement>
  set attackCounter(arg: any)
  get attackCounter(): any
  createSrc(enemyName: any): string
  createSrcSet(enemyName: any): string
  _attackCounter: any
}
declare class QuizBossTargetIcon extends QuizEnemyTargetIcon {
  constructor(bossName: any, turnsToAttck: any, position: any, headForm: any)
  createSrc({ name, headForm }: { name: any; headForm: any }): string
  createSrcSet({ name, headForm }: { name: any; headForm: any }): string
}
declare function QuizVideoController(): void
declare class QuizVideoController {
  moePlayers: any[]
  nextMoePlayerId: number
  readyToBufferNextVideo: boolean
  _NUMBER_OF_MOE_PLAYERS: number
  setup(): void
  loadNextVideo(): void
  playNextVideo(): void
  replayVideo(): void
  stopVideo(): void
  muteVideo(): void
  unmuteVideo(): void
  setVolume(newVolume: any): void
  calculateNextPlayerId(): void
  getNextPlayer(): any
  getCurrentPlayer(): any
  changeToNextPlayer(): void
  currentMoePlayerId: number | null | undefined
  hideAll(): void
  getCurrentResolution(): any
  getCurrentHost(): any
  getCurrentSongId(): any
  getCurrentVideoStartPoint(): any
  getCurrentVideoLength(): any
  getCurrentVideoUrl(): any
  currentVideoPlaying(): any
  nextVideoInfo(
    songInfo: any,
    playLength: any,
    startPoint: any,
    firstVideo: any,
    startTime: any,
    playbackSpeed: any,
    fullSongRange: any
  ): void
  _nextVideoInfo:
    | {
        songInfo: any
        playLength: any
        startPoint: any
        playbackSpeed: any
        firstVideo: any
        startTime: any
        fullSongRange: any
      }
    | null
    | undefined
  popNextVideoInfo():
    | {
        songInfo: any
        playLength: any
        startPoint: any
        playbackSpeed: any
        firstVideo: any
        startTime: any
        fullSongRange: any
      }
    | null
    | undefined
  currentVideoDoneBuffering(): void
  reset(): void
}
declare var quizVideoController: QuizVideoController
declare class ReturnVoteController extends BaseVoteContainer {
  constructor(videoOverlay: any)
  $VOTE_BUTTON: JQuery<HTMLElement>
  videoOverlay: any
  toggleVoteButton(on: any): void
  vote(votedFor: any): void
  updateState(newState: any, isSpectator: any): void
}
declare class ScoreBoardEntry {
  constructor(
    name: any,
    score: any,
    standing: any,
    guessCount: any,
    scoreTitle: any,
    scoreBoardPosition: any,
    active: any,
    teamNumber: any,
    hidden: any,
    listNumber: any
  )
  $entry: JQuery<HTMLElement>
  isSelf: boolean
  positionSlot: any
  currentPosition: any
  set disabled(arg: any)
  teamNumber: any
  $scoreBoardEntry: JQuery<HTMLElement>
  $scoreBoardEntryTextContainer: JQuery<HTMLElement>
  $guessCount: JQuery<HTMLElement>
  $score: JQuery<HTMLElement>
  $position: JQuery<HTMLElement>
  $listNumber: JQuery<HTMLElement>
  $hiddenIcon: JQuery<HTMLElement>
  set listNumber(arg: any)
  set guessCount(arg: any)
  set boardPosition(arg: any)
  set score(arg: any)
  set position(arg: any)
  get positionFromTop(): number
  get height(): number
  set displayListNumber(arg: any)
  set correct(arg: any)
  remove(): void
  updateLayout(): void
  displayHidden(): void
  TEMPLATE: string
  ENTRY_HEIGHT: number
  POSITION_RIGHT_MARGIN: number
}
declare class ScoreBoardGroup {
  constructor(number: any)
  $group: JQuery<HTMLElement>
  set active(arg: any)
  updatePosition(topOffset: any, bottomOffset: any): void
  topOffset: any
  remove(): void
  TEMPlATE: string
  OFFSET_CORRECTION: number
  FULL_HEIGHT: number
  FINAL_TEAM_GROUP_EXTENSION: number
}
declare class ScoreBoardTeamEntry {
  constructor(teamNumber: any)
  $body: JQuery<HTMLElement>
  $playerContainer: JQuery<HTMLElement>
  entryCount: number
  teamNumber: any
  get positionFromTop(): number
  get slotSortNumber(): any
  set offset(arg: any)
  get height(): number
  addPlayerEntry(playerEntry: any): void
  playerEntrySample: any
  remove(): void
  TEMPLATE: string
}
declare function TimerBar($bar: any): void
declare class TimerBar {
  constructor($bar: any)
  $TIMER_BAR: any
  TICK_RATE: number
  setWidthPercent(percent: any): void
  start(timerLength: any, timeAlreadyPlayed: any): void
  updateInterval: any
  reset(): void
  updateState(state: any): void
}
declare class TroubleShooterDropDown {
  $container: JQuery<HTMLElement>
  $close: JQuery<HTMLElement>
  currentLives: number
  currentMax: number
  inCooldown: boolean
  videoFullyBuffered(): void
  videoIssueBuffering(): void
}
declare var troubleShooterDropDown: TroubleShooterDropDown
declare function VideoOverlay(): void
declare class VideoOverlay {
  $hider: JQuery<HTMLElement>
  $hiderText: JQuery<HTMLElement>
  $extraTimeCounter: JQuery<HTMLElement>
  $bufferingScreen: JQuery<HTMLElement>
  $overlayTextContainers: JQuery<HTMLElement>
  $userVideoHider: JQuery<HTMLElement>
  $textOverlay: JQuery<HTMLElement>
  $returnToLobbyOverlay: JQuery<HTMLElement>
  $streamCommentsOverlay: JQuery<HTMLElement>
  showLoadingText(): void
  loadingInterval: NodeJS.Timer | undefined
  stopLoadingText(): void
  showAnswerText(): void
  showCheatTestText(): void
  showWaitingBuffering(): void
  hideWaitingBuffering(): void
  startTimer(time: any, extraTime: any): void
  extraTime: any
  totaltTime: any
  startTime: number | undefined
  timerInterval: NodeJS.Timer | undefined
  tickTimer(): void
  stopTimer(): void
  startExtraTimer(): void
  extraStartTime: number | undefined
  extraTimerInterval: NodeJS.Timer | undefined
  tickExtraTimer(): void
  stopExtraTimer(): void
  setFontSize(): void
  show(): void
  hide(): void
  showTextOverlay(message: any): void
  hideTextOverlay(): void
  toogleUserVideoHidder(autoHidden?: boolean): void
  hideUserVideoHidder(): void
  sendUserHiddenFeedback(hidden: any, autoHidden: any): void
  showReturnToLobbyText(): void
  hideReturnToLobbyText(): void
  reset(): void
  startStreamComments(hints: any, filler: any): void
}
declare function VolumeController(): void
declare class VolumeController {
  $bar: JQuery<HTMLElement>
  $indicator: JQuery<HTMLElement>
  $icon: JQuery<HTMLElement>
  setup(): void
  volume: string | number | undefined
  muted: any
  setMuted(state: any): void
  adjustVolume(): void
}
declare var volumeController: VolumeController
declare class GamePlayer {
  constructor(
    name: any,
    level: any,
    gamePlayerId: any,
    host: any,
    avatarInfo: any
  )
  _name: any
  level: any
  gamePlayerId: any
  _host: any
  avatarInfo: any
  set name(arg: any)
  get name(): any
  set host(arg: any)
  get host(): any
}
declare function AdvancedSettingController(
  $switch: any,
  $standardSettingContainer: any,
  $advacnedSettingContainer: any,
  doubleActive: any
): void
declare class AdvancedSettingController {
  constructor(
    $switch: any,
    $standardSettingContainer: any,
    $advacnedSettingContainer: any,
    doubleActive: any
  )
  $standardContainer: any
  $advancedContainer: any
  doubleActive: any
  setOn(on: any): void
}
declare function DropDownSettingFilter(
  $container: any,
  $input: any,
  inputList: any
): void
declare class DropDownSettingFilter {
  constructor($container: any, $input: any, inputList: any)
  awesomepleteInstance: AmqAwesomeplete
}
declare namespace DROPDOWN_INCLUSION_SETTINGS {
  let INCLUDE: number
  let EXCLUDE: number
  let ONE_OFF: number
}
declare function HostModal(): void
declare class HostModal {
  $view: JQuery<HTMLElement>
  $title: JQuery<HTMLElement>
  $hostButton: JQuery<HTMLElement>
  $changeButton: JQuery<HTMLElement>
  $RESET_DEFAULT_BUTTON: JQuery<HTMLElement>
  $JOIN_BUTTON: JQuery<HTMLElement>
  $SPECTATE_BUTTON: JQuery<HTMLElement>
  $PREVIEW_BUTTON_CONTAINER: JQuery<HTMLElement>
  $MODE_BUTTON: JQuery<HTMLElement>
  $SHOW_HIDE_PASSWORD_BUTTON: JQuery<HTMLElement>
  $INVITE_LINK_BUTTON: JQuery<HTMLElement>
  $LIFE_SETTING_CONTAINER: JQuery<HTMLElement>
  $GUESS_TIME_SETTING_CONTAINER: JQuery<HTMLElement>
  $SONG_SELECTION_OUTER_CONTAINER: JQuery<HTMLElement>
  $BATTLE_ROYALE_SETTING_ROW: JQuery<HTMLElement>
  $LOOT_DROPPING_CONTAINER: JQuery<HTMLElement>
  $ROOM_SIZE_LIMITED_CONTAINER: JQuery<HTMLElement>
  $ROOM_SIZE_UNLIMITED_CONTAINER: JQuery<HTMLElement>
  $songPool: JQuery<HTMLElement>
  $privateCheckbox: JQuery<HTMLElement>
  $passwordInput: JQuery<HTMLElement>
  $songTypeInsert: JQuery<HTMLElement>
  $songTypeEnding: JQuery<HTMLElement>
  $songTypeOpening: JQuery<HTMLElement>
  $roomName: JQuery<HTMLElement>
  $showSelection: JQuery<HTMLElement>
  $scoring: JQuery<HTMLElement>
  $answering: JQuery<HTMLElement>
  $watchedDistribution: JQuery<HTMLElement>
  $skipGuessing: JQuery<HTMLElement>
  $skipReplay: JQuery<HTMLElement>
  $duplicateShows: JQuery<HTMLElement>
  $lootDropping: JQuery<HTMLElement>
  $queueing: JQuery<HTMLElement>
  $rebroadcastSongs: JQuery<HTMLElement>
  $dubSongs: JQuery<HTMLElement>
  $fullSongRange: JQuery<HTMLElement>
  $playbackSpeed: JQuery<HTMLElement>
  $playerScore: JQuery<HTMLElement>
  $animeScore: JQuery<HTMLElement>
  $vintageAddToFilterButton: JQuery<HTMLElement>
  $songDiffHard: JQuery<HTMLElement>
  $songDiffMedium: JQuery<HTMLElement>
  $songDiffEasy: JQuery<HTMLElement>
  $songPopLiked: JQuery<HTMLElement>
  $songPopMixed: JQuery<HTMLElement>
  $songPopDisliked: JQuery<HTMLElement>
  $samplePoint: JQuery<HTMLElement>
  $animeTvCheckbox: JQuery<HTMLElement>
  $animeMovieCheckbox: JQuery<HTMLElement>
  $animeOVACheckbox: JQuery<HTMLElement>
  $animeONACheckbox: JQuery<HTMLElement>
  $animeSpecialCheckbox: JQuery<HTMLElement>
  $openingCategoryOptions: JQuery<HTMLElement>
  $openingInstrumentalCheckbox: JQuery<HTMLElement>
  $openingChantingCheckbox: JQuery<HTMLElement>
  $openingCharacterCheckbox: JQuery<HTMLElement>
  $openingStandardCheckbox: JQuery<HTMLElement>
  $endingCategoryOptions: JQuery<HTMLElement>
  $endingInstrumentalCheckbox: JQuery<HTMLElement>
  $endingChantingCheckbox: JQuery<HTMLElement>
  $endingCharacterCheckbox: JQuery<HTMLElement>
  $endingStandardCheckbox: JQuery<HTMLElement>
  $insertCategoryOptions: JQuery<HTMLElement>
  $insertInstrumentalCheckbox: JQuery<HTMLElement>
  $insertChantingCheckbox: JQuery<HTMLElement>
  $insertCharacterCheckbox: JQuery<HTMLElement>
  $insertStandardCheckbox: JQuery<HTMLElement>
  $gameMode: JQuery<HTMLElement>
  $teamSizeContainer: JQuery<HTMLElement>
  $teamSize: JQuery<HTMLElement>
  $tabContainer: JQuery<HTMLElement>
  $mainContainer: JQuery<HTMLElement>
  $mainContainerInner: JQuery<HTMLElement>
  $settingContainers: JQuery<HTMLElement>
  $quickTab: JQuery<HTMLElement>
  $advancedTab: JQuery<HTMLElement>
  $ANIME_SETTING_CONTAINER: JQuery<HTMLElement>
  $GENERAL_SETTING_CONTAINER: JQuery<HTMLElement>
  $MODE_SETTING_CONTAINER: JQuery<HTMLElement>
  $QUIZ_SETTING_CONTAINER: JQuery<HTMLElement>
  MAX_LEVEL_FOR_HARD_DEFAULT_OFF: number
  roomId: string
  roomPassword: string
  latestSoloSettings: any
  lastestMultiSettings: any
  DEFUALT_SETTINGS: {
    roomName: string
    privateRoom: boolean
    password: string
    roomSize: number
    teamSize: number
    numberOfSongs: number
    modifiers: {
      skipGuessing: boolean
      skipReplay: boolean
      queueing: boolean
      duplicates: boolean
      lootDropping: boolean
      rebroadcastSongs: boolean
      dubSongs: boolean
      fullSongRange: boolean
    }
    songSelection: {
      standardValue: number
      advancedValue: {
        watched: number
        unwatched: number
        random: number
      }
    }
    watchedDistribution: number
    songType: {
      standardValue: {
        openings: boolean
        endings: boolean
        inserts: boolean
      }
      advancedValue: {
        openings: number
        endings: number
        inserts: number
        random: number
      }
    }
    openingCategories: {
      instrumental: boolean
      chanting: boolean
      character: boolean
      standard: boolean
    }
    endingCategories: {
      instrumental: boolean
      chanting: boolean
      character: boolean
      standard: boolean
    }
    insertCategories: {
      instrumental: boolean
      chanting: boolean
      character: boolean
      standard: boolean
    }
    guessTime: {
      randomOn: boolean
      standardValue: number
      randomValue: number[]
    }
    extraGuessTime: {
      randomOn: boolean
      standardValue: number
      randomValue: number[]
    }
    scoreType: number
    showSelection: number
    answeringMode: number
    inventorySize: {
      randomOn: boolean
      standardValue: number
      randomValue: number[]
    }
    lootingTime: {
      randomOn: boolean
      standardValue: number
      randomValue: number[]
    }
    lives: number
    samplePoint: {
      randomOn: boolean
      standardValue: number
      randomValue: number[]
    }
    playbackSpeed: {
      randomOn: boolean
      standardValue: number
      randomValue: boolean[]
    }
    songDifficulity: {
      advancedOn: boolean
      standardValue: {
        easy: boolean
        medium: boolean
        hard: boolean
      }
      advancedValue: number[]
    }
    songPopularity: {
      advancedOn: boolean
      standardValue: {
        disliked: boolean
        mixed: boolean
        liked: boolean
      }
      advancedValue: number[]
    }
    playerScore: {
      advancedOn: boolean
      standardValue: number[]
      advancedValue: boolean[]
    }
    animeScore: {
      advancedOn: boolean
      standardValue: number[]
      advancedValue: boolean[]
    }
    vintage: {
      standardValue: {
        years: number[]
        seasons: number[]
      }
      advancedValueList: never[]
    }
    type: {
      tv: boolean
      movie: boolean
      ova: boolean
      ona: boolean
      special: boolean
    }
    genre: never[]
    tags: never[]
  }
  soloMode: boolean
  passwordHidden: boolean
  _previewRoomTile: any
  createInviteLink(): string
  show(): void
  setup(
    genreInfo: any,
    tagInfo: any,
    savedSettings: any,
    latestQuizSettingStrings: any
  ): void
  settingStorage: SettingStorage | undefined
  numberOfSongsSliderCombo: SliderTextCombo | undefined
  genreFilter: DropDownSettingFilter | undefined
  tagFilter: DropDownSettingFilter | undefined
  setupRoomSize(): void
  roomSizeSliderCombo: SliderTextCombo | undefined
  setupShowSelection(): void
  inventorySizeSliderCombo: SliderTextCombo | undefined
  inventorySizeRangeSliderCombo: SliderTextCombo | undefined
  inventorySizeRandomSwitch: Switch | undefined
  lootingTimeSliderCombo: SliderTextCombo | undefined
  lootingTimeRangeSliderCombo: SliderTextCombo | undefined
  lootingTimeRandomSwitch: Switch | undefined
  setupScoring(): void
  lifeSliderCombo: SliderTextCombo | undefined
  setupAnswering(): void
  setupGameMode(): void
  setupTeamSize(): void
  setupSongSelection(): void
  watchedSliderCombo: SliderTextCombo | undefined
  unwatchedSliderCombo: SliderTextCombo | undefined
  randomWatchedSliderCombo: SliderTextCombo | undefined
  setupSongTypes(): void
  openingsSliderCombo: SliderTextCombo | undefined
  endingsSliderCombo: SliderTextCombo | undefined
  insertSliderCombo: SliderTextCombo | undefined
  randomSliderCombo: SliderTextCombo | undefined
  setupPlayLength(): void
  playLengthSliderCombo: SliderTextCombo | undefined
  playLengthRangeSliderCombo: SliderTextCombo | undefined
  playLengthRandomSwitch: Switch | undefined
  setupExtraGuessTime(): void
  extraGuessTimeSliderCombo: SliderTextCombo | undefined
  extraGuessTimeRangeSliderCombo: SliderTextCombo | undefined
  extraGuessTimeRandomSwitch: Switch | undefined
  setupPlaybackSpeed(): void
  playbackSpeedToggleSlider: ToggleSlider | undefined
  playbackSpeedRandomSwitch: Switch | undefined
  setupSamplePoint(): void
  samplePointRangeSliderCombo: SliderTextCombo | undefined
  samplePointRandomSwitch: Switch | undefined
  setupPlayerScore(): void
  playerScoreToggleSlider: ToggleSlider | undefined
  playerScoreAdvancedSwitch: Switch | undefined
  setupAnimeScore(): void
  animeScoreToggleSlider: ToggleSlider | undefined
  animeScoreAdvancedSwitch: Switch | undefined
  setupVintage(): void
  vintageRangeSliderCombo: SliderTextCombo | undefined
  fromSeasonSelector: SeasonSelector | undefined
  toSeasonSelector: SeasonSelector | undefined
  vintageAdvancedFilter: SettingFilter | undefined
  setupSongDifficulty(): void
  songDiffRangeSliderCombo: SliderTextCombo | undefined
  songDiffAdvancedSwitch: Switch | undefined
  setupSongPopularity(): void
  songPopRangeSliderCombo: SliderTextCombo | undefined
  songPopAdvancedSwitch: Switch | undefined
  showSettings(): void
  relayout(): void
  relayoutModeTab(): void
  relayoutGeneralTab(): void
  relayoutQuizTab(): void
  relayoutAnimeTab(): void
  getSettings(onlyValidateStaticSettings: any):
    | false
    | {
        roomName: string | number | string[] | undefined
        privateRoom: boolean
        password: string | number | string[] | undefined
        roomSize: any
        numberOfSongs: any
        teamSize: any
        modifiers: {
          skipGuessing: boolean
          skipReplay: boolean
          duplicates: boolean
          queueing: boolean
          lootDropping: boolean
          rebroadcastSongs: boolean
          dubSongs: boolean
          fullSongRange: boolean
        }
        songSelection: {
          standardValue: any
          advancedValue: {
            watched: any
            unwatched: any
            random: any
          }
        }
        watchedDistribution: any
        songType: {
          standardValue: {
            openings: boolean
            endings: boolean
            inserts: boolean
          }
          advancedValue: {
            openings: any
            endings: any
            inserts: any
            random: any
          }
        }
        openingCategories: {
          instrumental: boolean
          chanting: boolean
          character: boolean
          standard: boolean
        }
        endingCategories: {
          instrumental: boolean
          chanting: boolean
          character: boolean
          standard: boolean
        }
        insertCategories: {
          instrumental: boolean
          chanting: boolean
          character: boolean
          standard: boolean
        }
        guessTime: {
          randomOn: boolean
          standardValue: any
          randomValue: any
        }
        extraGuessTime: {
          randomOn: boolean
          standardValue: any
          randomValue: any
        }
        scoreType: any
        answeringMode: any
        showSelection: any
        inventorySize: {
          randomOn: boolean
          standardValue: any
          randomValue: any
        }
        lootingTime: {
          randomOn: boolean
          standardValue: any
          randomValue: any
        }
        lives: any
        samplePoint: {
          randomOn: boolean
          standardValue: any
          randomValue: any
        }
        playbackSpeed: {
          randomOn: boolean
          standardValue: any
          randomValue: any[]
        }
        songDifficulity: {
          advancedOn: boolean
          standardValue: {
            easy: boolean
            medium: boolean
            hard: boolean
          }
          advancedValue: any
        }
        songPopularity: {
          advancedOn: boolean
          standardValue: {
            disliked: boolean
            mixed: boolean
            liked: boolean
          }
          advancedValue: any
        }
        playerScore: {
          advancedOn: boolean
          standardValue: any
          advancedValue: any[]
        }
        animeScore: {
          advancedOn: boolean
          standardValue: any
          advancedValue: any[]
        }
        vintage: {
          standardValue: {
            years: any
            seasons: undefined[]
          }
          advancedValueList: any[]
        }
        type: {
          tv: boolean
          movie: boolean
          ova: boolean
          ona: boolean
          special: boolean
        }
        genre: any
        tags: any
        gameMode: any
      }
  hide(): void
  displayHostSolo(): void
  reset(): void
  setModeHostGame(soloMode: any): void
  gameMode: any
  setModeGameSettings(host: any, soloMode: any): void
  setModePreviewGame(tile: any): void
  resetMode(): void
  changeSettings(changes: any): void
  updateSetting(setting: any, change: any): void
  setCheckBox(checkBoxElement: any, checked: any): void
  changeView(viewName: any): void
  showLoadContainer(): void
  hideLoadContainer(): void
  toggleLoadContainer(): void
  toggleJoinButton(on: any): void
  saveSettings(): void
  randomizePlayerScore(): void
  randomizeAnimeScore(): void
  randomizeVintage(): void
  randomizeGenre(): void
  randomizeTag(): void
  updateSelectedGameMode(): void
  updateStandardSongSelection(): void
  setTickPopovers(
    textArray: any,
    $slider: any,
    $controller: any,
    defaultValue: any
  ): void
  scrollToContainer(containerName: any): void
  getTutorialSettings(): any
  setPasswordHidden(hidden: any): void
  updateLatestSettings(soloMode: any, settings: any): void
  SHOW_SELECTION_IDS:
    | {
        AUTO: number
        LOOTING: number
      }
    | {
        AUTO: number
        LOOTING: number
      }
}
declare function createAdvancedDistributionSongListener(
  sliderComboList: any
): (newValue: any, oldValue: any) => void
declare var hostModal: HostModal
declare function SeasonSelector($seasonContainer: any): void
declare class SeasonSelector {
  constructor($seasonContainer: any)
  seasonObjects: any
  _listeners: any[]
  setValue(seasonNumber: any): void
  getValue(): undefined
  addListener(listener: any): void
}
declare function SettingFilter(
  $container: any,
  valueFormater: any,
  valueEqualFunctoin: any
): void
declare class SettingFilter {
  constructor($container: any, valueFormater: any, valueEqualFunctoin: any)
  $container: any
  $contentContainer: any
  $list: any
  $emptyText: any
  valueFormater: any
  valueEqualFunction: any
  values: any[]
  addValue(value: any): void
  clear(): void
  toggleEmptyText(show: any): void
  relayout(): void
  getValues(): any[]
}
declare namespace SETTING_FILTER_ENTRY_TEMPLATES {
  let VINTAGE: string
  let TEXT: string
}
declare function SettingRandomizer(): void
declare class SettingRandomizer {
  _RANGE_TYPES: {
    INTEGER: number
    INTEGER_PAIR: number
    INTEGER_SET: number
    BOOLEAN_ARRAY: number
    BOOLEAN_MAP: number
  }
  generalSettingRanges: {
    numberOfSongs: {
      min: number
      max: number
    }
    songSelection: {
      advanced: boolean
      standardValue: {
        min: number
        max: number
      }
      advancedValue: {
        fields: string[]
      }
    }
    songType: {
      advanced: boolean
      standardValue: {
        fields: string[]
      }
      advancedValue: {
        fields: string[]
      }
    }
  }
  quizSettingRanges: {
    guessTime: {
      random: boolean
      standardValue: {
        type: number
        min: number
        max: number
      }
      randomValue: {
        type: number
        min: number
        max: number
      }
    }
    extraGuessTime: {
      random: boolean
      standardValue: {
        type: number
        min: number
        max: number
      }
      randomValue: {
        type: number
        min: number
        max: number
      }
    }
    samplePoint: {
      random: boolean
      standardValue: {
        type: number
        min: number
        max: number
      }
      randomValue: {
        type: number
        min: number
        max: number
      }
    }
    playbackSpeed: {
      random: boolean
      standardValue: {
        type: number
        set: number[]
      }
      randomValue: {
        type: number
        size: number
        atLeastOneRandom: boolean
      }
    }
    songDifficulity: {
      advanced: boolean
      standardValue: {
        type: number
        fields: string[]
        atLeastOneRandom: boolean
      }
      advancedValue: {
        type: number
        min: number
        max: number
        minRange: number
      }
    }
    songPopularity: {
      advanced: boolean
      standardValue: {
        type: number
        fields: string[]
        atLeastOneRandom: boolean
      }
      advancedValue: {
        type: number
        min: number
        max: number
        minRange: number
      }
    }
  }
  animeSettingRange: {
    playerScore: {
      advanced: boolean
      standardValue: {
        type: number
        min: number
        max: number
        minRange: number
      }
      advancedValue: {
        type: number
        size: number
        atLeastOneRandom: boolean
      }
    }
    type: {
      type: number
      fields: string[]
      atLeastOneRandom: boolean
    }
  }
  _ANIME_SCORE_CONSTANTS: {
    RANGE: {
      min: number
      max: number
    }
    MAIN_RANGE: {
      min: number
      max: number
    }
  }
  _VINTAGE_CONSTANTS: {
    RANGE: {
      YEARS: {
        min: number
        max: number
      }
      SEASONS: {
        min: number
        max: number
      }
    }
    WEIGHTED_YEARS: {
      1944: number
      1980: number
      1990: number
      2000: number
      2010: number
      2023: number
    }
  }
  _MAX_TAG_GENRE_FILTER_AMOUNT: number
  _GENRE_TAG_STATES: {
    INCLUDE: number
    EXLUCDE: number
    OPTIONAL: number
  }
  _genreIds: any[]
  _tagIds: any[]
  setup(genreList: any, tagList: any): void
  getRandomGeneralSettings(): {
    numberOfSongs: any
    songSelection: {
      advancedOn: boolean
      standardValue: any
      advancedValue: {}
    }
    songType: {
      standardValue: {}
      advancedOn: boolean
      advancedValue: {
        random: any
      }
    }
  }
  getRandomQuizSettings(): {}
  getRandomAnimeSettings(): {
    animeScore: {
      advancedOn: boolean
      standardValue: any[]
      advancedValue: boolean[]
    }
    vintage: {
      standardValue: {
        years: any[]
        seasons: any[]
      }
      advancedValueList: never[]
    }
    genre: {
      id: any
      state: number
    }[]
    tags: {
      id: any
      state: number
    }[]
  }
  getRandomSongSelection(numberOfSongs: any): {
    advancedOn: boolean
    standardValue: any
    advancedValue: {}
  }
  getRandomSongType(numberOfSongs: any): {
    standardValue: {}
    advancedOn: boolean
    advancedValue: {
      random: any
    }
  }
  getRandomAnimeScoreSetting(): {
    advancedOn: boolean
    standardValue: any[]
    advancedValue: boolean[]
  }
  getRandomVintageSetting(): {
    standardValue: {
      years: any[]
      seasons: any[]
    }
    advancedValueList: never[]
  }
  randomVintage(useWeightedSeason: any): {
    years: any[]
    seasons: any[]
  }
  randomTagGenreFilters(
    list: any,
    onlyExclude: any
  ): {
    id: any
    state: number
  }[]
  getNewFromList(list: any, alreadySelectedList: any): any
  parseSettingRange(settingRange: any): {
    standardValue: any
    randomOn: boolean
    randomValue: any
    advancedOn: boolean
    advancedValue: any
  }
  parseSettingValue(value: any): any
  getRandomInteger(min: any, max: any): any
  getRandomIntegerPair(min: any, max: any): any[]
  randomBoolean(): boolean
  selectRandomFromList(list: any): any
  getRandomBooleanArray(length: any, atLeastOneRandom: any): boolean[]
}
declare var settingRandomizer: SettingRandomizer
declare module 'pages/gamePage/gameSettings/settingSerilizer' {
  export = SettingSerilizer
  function SettingSerilizer(): void
  class SettingSerilizer {
    _DATA_FORMATS: {
      SMALL_INT: number
      BIG_INT: number
      BOOLEAN: number
      PAIR_SMALL_INT: number
      PAIR_BIG_INT: number
      PAIR_LARGE_INT: number
      QUAD_BOOLEAN: number
      NINE_BOOLEAN: number
      TEN_BOOLEAN: number
      ARRAY_VINTAGE_SET: number
      ARRAY_TAG_GENRE_ENTRY: number
      ARRAY_TAG_GENRE_ENTRY_LARGE: number
      LARGE_INT: number
    }
    _SETTING_SCHEMEAS: {
      1: {
        BASE: number
        ARRAY_DELIMITER: string
        MAX_LENGTH: number
        SCHEMA: {
          roomSize: number
          numberOfSongs: number
          modifiers: {
            skipGuessing: number
            skipReplay: number
            queueing: number
            duplicates: number
          }
          songSelection: {
            advancedOn: number
            standardValue: number
            advancedValue: {
              watched: number
              unwatched: number
              random: number
            }
          }
          songType: {
            advancedOn: number
            standardValue: {
              openings: number
              endings: number
              inserts: number
            }
            advancedValue: {
              openings: number
              endings: number
              inserts: number
              random: number
            }
          }
          guessTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          samplePoint: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          playbackSpeed: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          songDifficulity: {
            advancedOn: number
            standardValue: {
              easy: number
              medium: number
              hard: number
            }
            advancedValue: number
          }
          songPopularity: {
            advancedOn: number
            standardValue: {
              disliked: number
              mixed: number
              liked: number
            }
            advancedValue: number
          }
          playerScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          animeScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          vintage: {
            standardValue: {
              years: number
              seasons: number
            }
            advancedValueList: number
          }
          type: {
            tv: number
            movie: number
            ova: number
            ona: number
            special: number
          }
          genre: number
          tags: number
        }
      }
      2: {
        BASE: number
        ARRAY_DELIMITER: string
        MAX_LENGTH: number
        SCHEMA: {
          roomSize: number
          numberOfSongs: number
          modifiers: {
            skipGuessing: number
            skipReplay: number
            queueing: number
            duplicates: number
            lootDropping: number
          }
          songSelection: {
            advancedOn: number
            standardValue: number
            advancedValue: {
              watched: number
              unwatched: number
              random: number
            }
          }
          songType: {
            advancedOn: number
            standardValue: {
              openings: number
              endings: number
              inserts: number
            }
            advancedValue: {
              openings: number
              endings: number
              inserts: number
              random: number
            }
          }
          guessTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          inventorySize: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lootingTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lives: number
          samplePoint: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          playbackSpeed: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          songDifficulity: {
            advancedOn: number
            standardValue: {
              easy: number
              medium: number
              hard: number
            }
            advancedValue: number
          }
          songPopularity: {
            advancedOn: number
            standardValue: {
              disliked: number
              mixed: number
              liked: number
            }
            advancedValue: number
          }
          playerScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          animeScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          vintage: {
            standardValue: {
              years: number
              seasons: number
            }
            advancedValueList: number
          }
          type: {
            tv: number
            movie: number
            ova: number
            ona: number
            special: number
          }
          genre: number
          tags: number
        }
      }
      3: {
        BASE: number
        ARRAY_DELIMITER: string
        MAX_LENGTH: number
        SCHEMA: {
          roomSize: number
          numberOfSongs: number
          teamSize: number
          modifiers: {
            skipGuessing: number
            skipReplay: number
            queueing: number
            duplicates: number
            lootDropping: number
          }
          songSelection: {
            standardValue: number
            advancedValue: {
              watched: number
              unwatched: number
              random: number
            }
          }
          songType: {
            standardValue: {
              openings: number
              endings: number
              inserts: number
            }
            advancedValue: {
              openings: number
              endings: number
              inserts: number
              random: number
            }
          }
          guessTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          scoreType: number
          showSelection: number
          inventorySize: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lootingTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lives: number
          samplePoint: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          playbackSpeed: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          songDifficulity: {
            advancedOn: number
            standardValue: {
              easy: number
              medium: number
              hard: number
            }
            advancedValue: number
          }
          songPopularity: {
            advancedOn: number
            standardValue: {
              disliked: number
              mixed: number
              liked: number
            }
            advancedValue: number
          }
          playerScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          animeScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          vintage: {
            standardValue: {
              years: number
              seasons: number
            }
            advancedValueList: number
          }
          type: {
            tv: number
            movie: number
            ova: number
            ona: number
            special: number
          }
          genre: number
          tags: number
        }
      }
      4: {
        BASE: number
        ARRAY_DELIMITER: string
        MAX_LENGTH: number
        SCHEMA: {
          roomSize: number
          numberOfSongs: number
          teamSize: number
          modifiers: {
            skipGuessing: number
            skipReplay: number
            queueing: number
            duplicates: number
            lootDropping: number
            rebroadcastSongs: number
            dubSongs: number
          }
          songSelection: {
            standardValue: number
            advancedValue: {
              watched: number
              unwatched: number
              random: number
            }
          }
          songType: {
            standardValue: {
              openings: number
              endings: number
              inserts: number
            }
            advancedValue: {
              openings: number
              endings: number
              inserts: number
              random: number
            }
          }
          guessTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          scoreType: number
          showSelection: number
          inventorySize: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lootingTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lives: number
          samplePoint: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          playbackSpeed: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          songDifficulity: {
            advancedOn: number
            standardValue: {
              easy: number
              medium: number
              hard: number
            }
            advancedValue: number
          }
          songPopularity: {
            advancedOn: number
            standardValue: {
              disliked: number
              mixed: number
              liked: number
            }
            advancedValue: number
          }
          playerScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          animeScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          vintage: {
            standardValue: {
              years: number
              seasons: number
            }
            advancedValueList: number
          }
          type: {
            tv: number
            movie: number
            ova: number
            ona: number
            special: number
          }
          genre: number
          tags: number
        }
      }
      5: {
        BASE: number
        ARRAY_DELIMITER: string
        MAX_LENGTH: number
        SCHEMA: {
          roomSize: number
          numberOfSongs: number
          teamSize: number
          modifiers: {
            skipGuessing: number
            skipReplay: number
            queueing: number
            duplicates: number
            lootDropping: number
            rebroadcastSongs: number
            dubSongs: number
          }
          songSelection: {
            standardValue: number
            advancedValue: {
              watched: number
              unwatched: number
              random: number
            }
          }
          songType: {
            standardValue: {
              openings: number
              endings: number
              inserts: number
            }
            advancedValue: {
              openings: number
              endings: number
              inserts: number
              random: number
            }
          }
          insertCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          guessTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          scoreType: number
          showSelection: number
          inventorySize: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lootingTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lives: number
          samplePoint: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          playbackSpeed: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          songDifficulity: {
            advancedOn: number
            standardValue: {
              easy: number
              medium: number
              hard: number
            }
            advancedValue: number
          }
          songPopularity: {
            advancedOn: number
            standardValue: {
              disliked: number
              mixed: number
              liked: number
            }
            advancedValue: number
          }
          playerScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          animeScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          vintage: {
            standardValue: {
              years: number
              seasons: number
            }
            advancedValueList: number
          }
          type: {
            tv: number
            movie: number
            ova: number
            ona: number
            special: number
          }
          genre: number
          tags: number
        }
      }
      6: {
        BASE: number
        ARRAY_DELIMITER: string
        MAX_LENGTH: number
        SCHEMA: {
          roomSize: number
          numberOfSongs: number
          teamSize: number
          modifiers: {
            skipGuessing: number
            skipReplay: number
            queueing: number
            duplicates: number
            lootDropping: number
            rebroadcastSongs: number
            dubSongs: number
          }
          songSelection: {
            standardValue: number
            advancedValue: {
              watched: number
              unwatched: number
              random: number
            }
          }
          watchedDistribution: number
          songType: {
            standardValue: {
              openings: number
              endings: number
              inserts: number
            }
            advancedValue: {
              openings: number
              endings: number
              inserts: number
              random: number
            }
          }
          insertCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          guessTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          scoreType: number
          showSelection: number
          inventorySize: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lootingTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lives: number
          samplePoint: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          playbackSpeed: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          songDifficulity: {
            advancedOn: number
            standardValue: {
              easy: number
              medium: number
              hard: number
            }
            advancedValue: number
          }
          songPopularity: {
            advancedOn: number
            standardValue: {
              disliked: number
              mixed: number
              liked: number
            }
            advancedValue: number
          }
          playerScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          animeScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          vintage: {
            standardValue: {
              years: number
              seasons: number
            }
            advancedValueList: number
          }
          type: {
            tv: number
            movie: number
            ova: number
            ona: number
            special: number
          }
          genre: number
          tags: number
        }
      }
      7: {
        BASE: number
        ARRAY_DELIMITER: string
        MAX_LENGTH: number
        SCHEMA: {
          roomSize: number
          numberOfSongs: number
          teamSize: number
          modifiers: {
            skipGuessing: number
            skipReplay: number
            queueing: number
            duplicates: number
            lootDropping: number
            rebroadcastSongs: number
            dubSongs: number
          }
          songSelection: {
            standardValue: number
            advancedValue: {
              watched: number
              unwatched: number
              random: number
            }
          }
          watchedDistribution: number
          songType: {
            standardValue: {
              openings: number
              endings: number
              inserts: number
            }
            advancedValue: {
              openings: number
              endings: number
              inserts: number
              random: number
            }
          }
          openingCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          endingCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          insertCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          guessTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          scoreType: number
          showSelection: number
          inventorySize: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lootingTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lives: number
          samplePoint: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          playbackSpeed: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          songDifficulity: {
            advancedOn: number
            standardValue: {
              easy: number
              medium: number
              hard: number
            }
            advancedValue: number
          }
          songPopularity: {
            advancedOn: number
            standardValue: {
              disliked: number
              mixed: number
              liked: number
            }
            advancedValue: number
          }
          playerScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          animeScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          vintage: {
            standardValue: {
              years: number
              seasons: number
            }
            advancedValueList: number
          }
          type: {
            tv: number
            movie: number
            ova: number
            ona: number
            special: number
          }
          genre: number
          tags: number
        }
      }
      8: {
        BASE: number
        ARRAY_DELIMITER: string
        MAX_LENGTH: number
        SCHEMA: {
          roomSize: number
          numberOfSongs: number
          teamSize: number
          modifiers: {
            skipGuessing: number
            skipReplay: number
            queueing: number
            duplicates: number
            lootDropping: number
            rebroadcastSongs: number
            dubSongs: number
          }
          songSelection: {
            standardValue: number
            advancedValue: {
              watched: number
              unwatched: number
              random: number
            }
          }
          watchedDistribution: number
          songType: {
            standardValue: {
              openings: number
              endings: number
              inserts: number
            }
            advancedValue: {
              openings: number
              endings: number
              inserts: number
              random: number
            }
          }
          openingCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          endingCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          insertCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          guessTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          extraGuessTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          scoreType: number
          showSelection: number
          inventorySize: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lootingTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lives: number
          samplePoint: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          playbackSpeed: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          songDifficulity: {
            advancedOn: number
            standardValue: {
              easy: number
              medium: number
              hard: number
            }
            advancedValue: number
          }
          songPopularity: {
            advancedOn: number
            standardValue: {
              disliked: number
              mixed: number
              liked: number
            }
            advancedValue: number
          }
          playerScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          animeScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          vintage: {
            standardValue: {
              years: number
              seasons: number
            }
            advancedValueList: number
          }
          type: {
            tv: number
            movie: number
            ova: number
            ona: number
            special: number
          }
          genre: number
          tags: number
        }
      }
      9: {
        BASE: number
        ARRAY_DELIMITER: string
        MAX_LENGTH: number
        SCHEMA: {
          roomSize: number
          numberOfSongs: number
          teamSize: number
          modifiers: {
            skipGuessing: number
            skipReplay: number
            queueing: number
            duplicates: number
            lootDropping: number
            rebroadcastSongs: number
            dubSongs: number
          }
          songSelection: {
            standardValue: number
            advancedValue: {
              watched: number
              unwatched: number
              random: number
            }
          }
          watchedDistribution: number
          songType: {
            standardValue: {
              openings: number
              endings: number
              inserts: number
            }
            advancedValue: {
              openings: number
              endings: number
              inserts: number
              random: number
            }
          }
          openingCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          endingCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          insertCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          guessTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          extraGuessTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          scoreType: number
          showSelection: number
          answeringMode: number
          inventorySize: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lootingTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lives: number
          samplePoint: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          playbackSpeed: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          songDifficulity: {
            advancedOn: number
            standardValue: {
              easy: number
              medium: number
              hard: number
            }
            advancedValue: number
          }
          songPopularity: {
            advancedOn: number
            standardValue: {
              disliked: number
              mixed: number
              liked: number
            }
            advancedValue: number
          }
          playerScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          animeScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          vintage: {
            standardValue: {
              years: number
              seasons: number
            }
            advancedValueList: number
          }
          type: {
            tv: number
            movie: number
            ova: number
            ona: number
            special: number
          }
          genre: number
          tags: number
        }
      }
      10: {
        BASE: number
        ARRAY_DELIMITER: string
        MAX_LENGTH: number
        SCHEMA: {
          roomSize: number
          numberOfSongs: number
          teamSize: number
          modifiers: {
            skipGuessing: number
            skipReplay: number
            queueing: number
            duplicates: number
            lootDropping: number
            rebroadcastSongs: number
            dubSongs: number
          }
          songSelection: {
            standardValue: number
            advancedValue: {
              watched: number
              unwatched: number
              random: number
            }
          }
          watchedDistribution: number
          songType: {
            standardValue: {
              openings: number
              endings: number
              inserts: number
            }
            advancedValue: {
              openings: number
              endings: number
              inserts: number
              random: number
            }
          }
          openingCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          endingCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          insertCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          guessTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          extraGuessTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          scoreType: number
          showSelection: number
          answeringMode: number
          inventorySize: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lootingTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lives: number
          samplePoint: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          playbackSpeed: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          songDifficulity: {
            advancedOn: number
            standardValue: {
              easy: number
              medium: number
              hard: number
            }
            advancedValue: number
          }
          songPopularity: {
            advancedOn: number
            standardValue: {
              disliked: number
              mixed: number
              liked: number
            }
            advancedValue: number
          }
          playerScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          animeScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          vintage: {
            standardValue: {
              years: number
              seasons: number
            }
            advancedValueList: number
          }
          type: {
            tv: number
            movie: number
            ova: number
            ona: number
            special: number
          }
          genre: number
          tags: number
        }
      }
      11: {
        BASE: number
        ARRAY_DELIMITER: string
        MAX_LENGTH: number
        SCHEMA: {
          roomSize: number
          numberOfSongs: number
          teamSize: number
          modifiers: {
            skipGuessing: number
            skipReplay: number
            queueing: number
            duplicates: number
            lootDropping: number
            rebroadcastSongs: number
            dubSongs: number
          }
          songSelection: {
            standardValue: number
            advancedValue: {
              watched: number
              unwatched: number
              random: number
            }
          }
          watchedDistribution: number
          songType: {
            standardValue: {
              openings: number
              endings: number
              inserts: number
            }
            advancedValue: {
              openings: number
              endings: number
              inserts: number
              random: number
            }
          }
          openingCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          endingCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          insertCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          guessTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          extraGuessTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          scoreType: number
          showSelection: number
          answeringMode: number
          inventorySize: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lootingTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lives: number
          samplePoint: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          playbackSpeed: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          songDifficulity: {
            advancedOn: number
            standardValue: {
              easy: number
              medium: number
              hard: number
            }
            advancedValue: number
          }
          songPopularity: {
            advancedOn: number
            standardValue: {
              disliked: number
              mixed: number
              liked: number
            }
            advancedValue: number
          }
          playerScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          animeScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          vintage: {
            allYears: number
            standardValue: {
              years: number
              seasons: number
            }
            advancedValueList: number
          }
          type: {
            tv: number
            movie: number
            ova: number
            ona: number
            special: number
          }
          genre: number
          tags: number
        }
      }
      12: {
        BASE: number
        ARRAY_DELIMITER: string
        MAX_LENGTH: number
        SCHEMA: {
          roomSize: number
          numberOfSongs: number
          teamSize: number
          modifiers: {
            skipGuessing: number
            skipReplay: number
            queueing: number
            duplicates: number
            lootDropping: number
            rebroadcastSongs: number
            dubSongs: number
            fullSongRange: number
          }
          songSelection: {
            standardValue: number
            advancedValue: {
              watched: number
              unwatched: number
              random: number
            }
          }
          watchedDistribution: number
          songType: {
            standardValue: {
              openings: number
              endings: number
              inserts: number
            }
            advancedValue: {
              openings: number
              endings: number
              inserts: number
              random: number
            }
          }
          openingCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          endingCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          insertCategories: {
            instrumental: number
            chanting: number
            character: number
            standard: number
          }
          guessTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          extraGuessTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          scoreType: number
          showSelection: number
          answeringMode: number
          inventorySize: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lootingTime: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          lives: number
          samplePoint: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          playbackSpeed: {
            randomOn: number
            standardValue: number
            randomValue: number
          }
          songDifficulity: {
            advancedOn: number
            standardValue: {
              easy: number
              medium: number
              hard: number
            }
            advancedValue: number
          }
          songPopularity: {
            advancedOn: number
            standardValue: {
              disliked: number
              mixed: number
              liked: number
            }
            advancedValue: number
          }
          playerScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          animeScore: {
            advancedOn: number
            standardValue: number
            advancedValue: number
          }
          vintage: {
            allYears: number
            standardValue: {
              years: number
              seasons: number
            }
            advancedValueList: number
          }
          type: {
            tv: number
            movie: number
            ova: number
            ona: number
            special: number
          }
          genre: number
          tags: number
        }
      }
    }
    _NEWEST_VERSION: number
    _VERSION_BASE: number
    encode(
      settings: any,
      defaultSettings?: {
        roomName: string
        privateRoom: boolean
        password: string
        roomSize: number
        teamSize: number
        numberOfSongs: number
        modifiers: {
          skipGuessing: boolean
          skipReplay: boolean
          queueing: boolean
          duplicates: boolean
          lootDropping: boolean
          rebroadcastSongs: boolean
          dubSongs: boolean
          fullSongRange: boolean
        }
        songSelection: {
          standardValue: number
          advancedValue: {
            watched: number
            unwatched: number
            random: number
          }
        }
        watchedDistribution: number
        songType: {
          standardValue: {
            openings: boolean
            endings: boolean
            inserts: boolean
          }
          advancedValue: {
            openings: number
            endings: number
            inserts: number
            random: number
          }
        }
        openingCategories: {
          instrumental: boolean
          chanting: boolean
          character: boolean
          standard: boolean
        }
        endingCategories: {
          instrumental: boolean
          chanting: boolean
          character: boolean
          standard: boolean
        }
        insertCategories: {
          instrumental: boolean
          chanting: boolean
          character: boolean
          standard: boolean
        }
        guessTime: {
          randomOn: boolean
          standardValue: number
          randomValue: number[]
        }
        extraGuessTime: {
          randomOn: boolean
          standardValue: number
          randomValue: number[]
        }
        scoreType: number
        showSelection: number
        answeringMode: number
        inventorySize: {
          randomOn: boolean
          standardValue: number
          randomValue: number[]
        }
        lootingTime: {
          randomOn: boolean
          standardValue: number
          randomValue: number[]
        }
        lives: number
        samplePoint: {
          randomOn: boolean
          standardValue: number
          randomValue: number[]
        }
        playbackSpeed: {
          randomOn: boolean
          standardValue: number
          randomValue: boolean[]
        }
        songDifficulity: {
          advancedOn: boolean
          standardValue: {
            easy: boolean
            medium: boolean
            hard: boolean
          }
          advancedValue: number[]
        }
        songPopularity: {
          advancedOn: boolean
          standardValue: {
            disliked: boolean
            mixed: boolean
            liked: boolean
          }
          advancedValue: number[]
        }
        playerScore: {
          advancedOn: boolean
          standardValue: number[]
          advancedValue: boolean[]
        }
        animeScore: {
          advancedOn: boolean
          standardValue: number[]
          advancedValue: boolean[]
        }
        vintage: {
          standardValue: {
            years: number[]
            seasons: number[]
          }
          advancedValueList: never[]
        }
        type: {
          tv: boolean
          movie: boolean
          ova: boolean
          ona: boolean
          special: boolean
        }
        genre: never[]
        tags: never[]
      }
    ): string
    encodeObject(object: any, schema: any, base: any, delimiter: any): string
    encodeValue(
      value: any,
      dataType: any,
      base: any,
      arrayDelimiter: any
    ): string
    encodeInteger(value: any, base: any, encodeSize: any): string
    encodeBooleanArray(array: any, expectedLength: any): string
    decode(encodedString: any): {
      insertCategories: {
        instrumental: boolean
        chanting: boolean
        character: boolean
        standard: boolean
      }
      watchedDistribution: number
      openingCategories: {
        instrumental: boolean
        chanting: boolean
        character: boolean
        standard: boolean
      }
      endingCategories: {
        instrumental: boolean
        chanting: boolean
        character: boolean
        standard: boolean
      }
      extraGuessTime: {
        randomOn: boolean
        standardValue: number
        randomValue: number[]
      }
      answeringMode: number
    }
    decodeObject(
      encodedStringContainer: any,
      schema: any,
      base: any,
      arrayDelimiter: any,
      versionNumber: any
    ): {
      insertCategories: {
        instrumental: boolean
        chanting: boolean
        character: boolean
        standard: boolean
      }
      watchedDistribution: number
      openingCategories: {
        instrumental: boolean
        chanting: boolean
        character: boolean
        standard: boolean
      }
      endingCategories: {
        instrumental: boolean
        chanting: boolean
        character: boolean
        standard: boolean
      }
      extraGuessTime: {
        randomOn: boolean
        standardValue: number
        randomValue: number[]
      }
      answeringMode: number
    }
    decodeValue(
      encodedStringContainer: any,
      dataType: any,
      base: any,
      arrayDelimiter: any
    ): any
    decodeInteger(encodedString: any, base: any): number
    decodeIntegerPair(
      stringContainer: any,
      base: any,
      intEncodeSize: any
    ): number[]
    extractEncodedString(stringContainer: any, encodeLength: any): any
    decodeBooleanArray(stringContainer: any, arrayLength: any): boolean[]
  }
}
declare function SettingStorage(savedSettings: any): void
declare class SettingStorage {
  constructor(savedSettings: any)
  _$SAVED_LIST: JQuery<HTMLElement>
  _$LOAD_CONTAINER: JQuery<HTMLElement>
  _$LOAD_FROM_CODE_BUTTON: JQuery<HTMLElement>
  _$LOAD_ENTRY_CONTAINER: JQuery<HTMLElement>
  _$SAVE_BUTTON: JQuery<HTMLElement>
  _$LOAD_TAB_HEADER: JQuery<HTMLElement>
  _HEADER_MESSAGES: {
    ENABLED: string
    DISABLED: string
  }
  _MAX_SETTING_NAME_LENGTH: number
  _MAX_SAVED_COUNT: number
  saveDisabled: boolean
  loadingEnabled: boolean
  serilizer: any
  _tabs: any[]
  _settingDeletedListener: Listener
  decodeSetting(settingString: any): any
  saveSettings(settings: any): void
  addSetting(id: any, settingString: any, name: any): void
  setLoadContainerHidden(hidden: any): void
  loadContainerShown(): boolean
  updateScrollBar(): void
  updateSaveButtonState(): void
  setLoadingEnabled(enabled: any): void
}
declare function StoredSettingTab(
  id: any,
  settingString: any,
  name: any,
  serilizer: any,
  loadingEnabled: any
): void
declare class StoredSettingTab {
  constructor(
    id: any,
    settingString: any,
    name: any,
    serilizer: any,
    loadingEnabled: any
  )
  _$body: JQuery<HTMLElement>
  _$settingName: JQuery<HTMLElement>
  id: any
  _settingString: any
  deleteSetting(): void
  remove(): void
  setLoadingEnabled(enabled: any): void
}
declare const SETTING_LOAD_LIST_ENTRY_TEMPlATE: string
declare function SliderTextCombo(
  $slider: any,
  textfields: any,
  sliderSettings: any
): void
declare class SliderTextCombo {
  constructor($slider: any, textfields: any, sliderSettings: any)
  max: any
  min: any
  $slider: any
  textfields: any[]
  _listener: any[]
  addValueGroup(groupMembers: any): void
  getValue(): any
  setValue(newValue: any, fireChangeEvent: any): void
  relayout(): void
  addListener(listener: any): void
  setMax(newMax: any): void
  setDisabled(disabled: any): void
  isEnabled(): any
}
declare class Switch {
  constructor($switch: any)
  $switch: any
  _on: boolean
  _listeners: any[]
  get on(): boolean
  setOn(on: any): void
  setDisabled(disabled: any): void
  addListener(listener: any): void
  addContainerToggle($onContainer: any, $offContainer: any): void
  getOn(): boolean
}
declare function ToggleSlider($container: any, tickNames: any): void
declare class ToggleSlider {
  constructor($container: any, tickNames: any)
  $container: any
  tickList: any[]
  setValue(onArray: any): void
  getValues(): any[]
}
declare function ToggleTrack(widthPercent: any): void
declare class ToggleTrack {
  constructor(widthPercent: any)
  $track: JQuery<HTMLElement>
  ticks: any[]
  addTick(tick: any): void
  update(): void
}
declare function ToggleTick(name: any, on: any, tickOffsetPercent: any): void
declare class ToggleTick {
  constructor(name: any, on: any, tickOffsetPercent: any)
  name: any
  _listeners: any[]
  $tick: JQuery<HTMLElement>
  $label: JQuery<HTMLElement>
  toggle(on: any): void
  on: any
  addListener(listener: any): void
}
declare class GuestRegistrationController {
  $noticeContainer: JQuery<HTMLElement>
  $modal: JQuery<HTMLElement>
  $formContainer: JQuery<HTMLElement>
  $verificationContainer: JQuery<HTMLElement>
  $username: JQuery<HTMLElement>
  $password: JQuery<HTMLElement>
  $passwordRepeat: JQuery<HTMLElement>
  $email: JQuery<HTMLElement>
  $country: JQuery<HTMLElement>
  $tos: JQuery<HTMLElement>
  $errorContainer: JQuery<HTMLElement>
  $registerButton: JQuery<HTMLElement>
  $resendEmailButton: JQuery<HTMLElement>
  $validationEmailText: JQuery<HTMLElement>
  $validationEmailInput: JQuery<HTMLElement>
  _guestRegistrationListener: Listener
  _accountVerifiedListener: Listener
  isGuest: boolean
  updateValidationEmail(email: any): void
  setup(isGuest: any): void
  showError(msg: any): void
  sendRegistrationPackage(): void
}
declare var guestRegistrationController: GuestRegistrationController
declare class LeaderboardModule {
  levelLeaderboard: Leaderboard
  rankedLeaderboard: Leaderboard
  rankedRegionLists: {}
  currentRankedRegion: number
  $modal: JQuery<HTMLElement>
  _allLevelEntriesListener: Listener
  _selfLevelEntriesListener: Listener
  _topLevelEntriesListener: Listener
  _friendsLevelEntriesListener: Listener
  _rankedStandingUpdatedListener: Listener
  _rankedChampionsUpdatedListener: Listener
  show(): void
  setup(regionRankedStandings: any, regionRankedChampions: any): void
  updateRankedList(region: any, newList: any): void
  updateChampionList(region: any, newList: any): void
  initRegionEntry(region: any): void
  updateRankedEntries(): void
  setRankedRegion(region: any): void
}
declare class Leaderboard {
  constructor(tabMap: any, formatRankFunction: any, formatScoreFunction: any)
  tabMap: any
  formatRankFunction: any
  formatScoreFunction: any
  tabBoard: TabBoard
  updateList(listName: any, entries: any): void
  scrollToSelf(listName: any): void
  ENTRY_TEMPLATE: string
}
declare class TabBoard {
  constructor(tabEntries: any, onShowHandler: any)
  tabEntries: any
  clearSelected(): void
}
declare var leaderboardModule: LeaderboardModule
declare function NewsManager(): void
declare class NewsManager {
  $BODY: JQuery<HTMLElement>
  animatedMiyuHandler: AvatarDisplayHandler
  setup(): void
  handleShown(): void
  handleHidden(): void
}
declare var newsManager: NewsManager
declare function PromoCarousel(): void
declare class PromoCarousel {
  $PROMO_CONTAINER: JQuery<HTMLElement>
  $CYCLE_CONTAINER: JQuery<HTMLElement>
  promoList: any[]
  currentIndex: number
  LOOP_SPEED: number
  setup(): void
  initCarousel(): void
  resetLoop(): void
  interval: NodeJS.Timer | undefined
  step(): void
  stepTo(index: any): void
  createCycleEntry(index: any): JQuery<HTMLElement>
}
declare var promoCarousel: PromoCarousel
declare class Ranked {
  $button: JQuery<HTMLElement>
  $buttonStateMessage: JQuery<HTMLElement>
  $buttonStatusText: JQuery<HTMLElement>
  $buttonRankedTimer: JQuery<HTMLElement>
  $buttonTimerSerie: JQuery<HTMLElement>
  $buttonTimer: JQuery<HTMLElement>
  $descriptionButton: JQuery<HTMLElement>
  $descriptionModal: JQuery<HTMLElement>
  timers: {}
  currentState: any
  $modeSelector: JQuery<HTMLElement>
  $noviceSelector: JQuery<HTMLElement>
  $expertSelector: JQuery<HTMLElement>
  _stateChangeListener: Listener
  setup({
    state,
    serieId,
    games,
  }: {
    state: any
    serieId: any
    games: any
  }): void
  updateState(state: any, serieId: any, games: any): void
  joinRankedLobby(rankedTypeId: any): void
  joinRankedGame(rankedTypeId: any): void
  showNextTimer(): void
  currentTimerId: any
  showTimer(targetId: any): void
  getCurrentTargetTime(): any
  GAME_HOST_TIME_OBJECT: {
    hours: number
    minutes: number
    seconds: number
  }
  GAME_TIME_ZONES: {
    1: string
    2: string
    3: string
  }
  GAME_SERIES_IDS: {
    CENTRAL: number
    WEST: number
    East: number
  }
  GAME_SERIES_SYMBOL: {
    1: string
    2: string
    3: string
  }
  GAME_SERIES_NAMES: {
    1: string
    2: string
    3: string
  }
  STATE_MESSAGES: {
    0: string
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
    7: string
    8: string
  }
  RANKED_STATE_IDS: {
    OFFLINE: number
    LOBBY: number
    RUNNING: number
    FINISHED: number
    CHAMP_OFFLINE: number
    CHAMP_LOBBY: number
    CHAMP_RUNNING: number
    CHAMP_FINISHED: number
    BREAK_DAY: number
  }
  RANKED_TYPE_IDS: {
    NOVICE: number
    EXPERT: number
  }
}
declare class RankedTimer {
  constructor(
    $timer: any,
    $message: any,
    targetTimeObject: any,
    timeZone: any,
    serieSymbol: any
  )
  $timer: any
  $message: any
  targetTimeObject: any
  timeZone: any
  serieSymbol: any
  breakMode: boolean
  get targetTime(): any
  _targetTime: any
  get timeLeft(): any
  getTimeLeftString(): string
  zeroMode(): void
  show(): void
  start(): void
  interval: NodeJS.Timer | undefined
  stop(): void
  updateTimer(): void
  calculateDurationLeft(): any
  UPDATE_INTERVAL: number
}
declare var ranked: Ranked
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
declare class Tutorial {
  $container: JQuery<HTMLElement>
  $blockerLayer: JQuery<HTMLElement>
  $tutorialTileContainer: JQuery<HTMLElement>
  messageContainer: TutorialMessageContainer
  optionContainer: TutorialOptionController
  textBoxController: TutorialTextInputController
  state: {}
  inToturialGame: boolean
  $modal: JQuery<HTMLElement>
  gameplayModalRow: TutorialModalRow
  avatarModalRow: TutorialModalRow
  socialModalRow: TutorialModalRow
  set showLooting(arg: boolean)
  get showLooting(): boolean
  set showTeams(arg: boolean)
  get showTeams(): boolean
  set showSpeed(arg: boolean)
  get showSpeed(): boolean
  set showLives(arg: boolean)
  get showLives(): boolean
  setup(tutorialState: any, roomInvite: any): void
  $tutorialRoomTile: JQuery<HTMLElement> | undefined
  nexusCityOverviewRow: TutorialModalNexusRow | undefined
  nexusDungeonModeRow: TutorialModalNexusRow | undefined
  nexusDungeonLobbyRow: TutorialModalNexusRow | undefined
  nexusAvatarSelectionRow: TutorialModalNexusRow | undefined
  nexusDungeonMapRow: TutorialModalNexusRow | undefined
  nexusDungeonCombatRow: TutorialModalNexusRow | undefined
  nexusDungeonRewardsRow: TutorialModalNexusRow | undefined
  nexusCraftingStationRow: TutorialModalNexusRow | undefined
  nexusWorkshopRow: TutorialModalNexusRow | undefined
  nexusRuneSetupRow: TutorialModalNexusRow | undefined
  show(): void
  hide(): void
  updateNexusRowStates(): void
  nexusTutorialCompleted(tutorialId: any): void
  nexusTutorialReset(tutorialId: any): void
  createTutorialStates(): void
  TUTORIAL_STATES:
    | {
        WELCOME: TutorialState[]
        WELCOME_NO_LIST: TutorialState[]
        WELCOME_NO_LIST_ANILIST: TutorialState[]
        WELCOME_NO_LIST_KITSU: TutorialState[]
        WELCOME_NO_LIST_MAL: TutorialState[]
        WELCOME_NO_LIST_DISMISS: TutorialState[]
        WELCOME_DISMISS: TutorialState[]
        FIRST_GAME: TutorialState[]
        AVATAR: TutorialState[]
        SOCIAL: TutorialState[]
        DISSMISS: TutorialState[]
      }
    | undefined
  startFirstGameTutorial(): void
  startAvatarTutorial(): void
  startSocialTutorial(): void
  startTutorialAt(stateName: any, stateNumber: any): void
  displayState(stateName: any, stateNumber: any): void
  currentTutorialState: any
  updateModalRowStates(): void
  NOTE_REWARD_SIZE: number
}
declare class TutorialMessageContainer {
  constructor(tutorialController: any)
  $container: JQuery<HTMLElement>
  $exitButton: JQuery<HTMLElement>
  $continueButton: JQuery<HTMLElement>
  $titleText: JQuery<HTMLElement>
  $message: JQuery<HTMLElement>
  inExit: boolean
  nextStateGroup: any
  nextStateNumber: any
  set text(arg: any)
  set title(arg: any)
  hide(): void
  show(): void
  displayState({
    title,
    message,
    nextStateGroupName,
    nextStateNumber,
    options,
    $altTrigger,
    triggerEvents,
    hideTrigger,
    customTriggerSetup,
    clearTrigger,
  }: {
    title: any
    message: any
    nextStateGroupName: any
    nextStateNumber: any
    options: any
    $altTrigger: any
    triggerEvents: any
    hideTrigger: any
    customTriggerSetup: any
    clearTrigger: any
  }): void
  clearTrigger: any
  hideTrigger: any
}
declare class TutorialState {
  constructor(
    tutorialController: any,
    title: any,
    message: any,
    nextStateGroupName: any,
    nextStateNumber: any,
    options: any,
    popoutElements: any,
    highlightElements: any,
    enableSoloElements: any,
    enableElements: any,
    disableElements: any,
    $altTrigger: any,
    triggerEvents: any,
    onClear: any,
    onDisplay: any,
    hideTrigger: any,
    altTargetInfo: any,
    onDisplayConfig: any,
    customTriggerSetup: any,
    input: any,
    clearTrigger: any
  )
  title: any
  message: any
  _nextStateGroupName: any
  _nextStateNumber: any
  options: any
  popoutElements: any
  highlightElements: any
  enableSoloElements: any
  enableElements: any
  disableElements: any
  $altTrigger: any
  triggerEvents: any
  onClear: any
  onDisplay: any
  hideTrigger: any
  altTargetInfo: any
  onDisplayConfig: any
  customTriggerSetup: any
  input: any
  clearTrigger: any
  controller: any
  msgContainer: any
  optionContainer: any
  textBoxController: any
  get nextStateGroupName(): any
  get nextStateNumber(): any
  display(): void
  unbindTriggersFunction: any
  clearState(): void
}
declare class TutorialTextInputController {
  $container: JQuery<HTMLElement>
  input: JQuery<HTMLElement>
  setupInput(input: any): void
}
declare class TutorialOptionController {
  $container: JQuery<HTMLElement>
  options: TutorialOption[]
  setupOptions(newOptions: any): void
}
declare class TutorialOption {
  constructor($container: any)
  $container: any
  $text: any
  set text(arg: any)
  displayOption({ text, callback }: { text: any; callback: any }): void
  callback: any
  updateTextSize(): void
  show(): void
  hide(): void
}
declare class TutorialModalRow {
  constructor($row: any, buttonEvent: any)
  $row: any
  $button: any
  $text: any
  setPending(): void
  setCompleted(): void
  setDisabled(): void
}
declare class TutorialModalNexusRow extends TutorialModalRow {}
declare var tutorial: Tutorial
declare function AllPlayersList(): void
declare class AllPlayersList {
  _$CONTAINER: JQuery<HTMLElement>
  _$LOADING_ICON: JQuery<HTMLElement>
  _$TAB: JQuery<HTMLElement>
  _$ONLINE_PLAYER_COUNT: JQuery<HTMLElement>
  _ALL_PLAYER_ENTRY_TEMAPLTE: string
  _playerEntries: {}
  TRACKING_TIMEOUT: number
  allOnlineUsersListnerActive: boolean
  ready: boolean
  _onlineUserChangeMessageListener: Listener
  _nameChangeListener: Listener
  _onlineCountChange: Listener
  startTracking(): void
  _onlinePlayers: {} | undefined
  stopTracking(): void
  trackingTimeout: NodeJS.Timeout | undefined
  show(): void
  hide(): void
  insertPlayer(name: any): JQuery<HTMLElement>
  getEntryAfterPlayer(name: any): undefined
  compareNames(nameA: any, nameB: any): any
  loadAllOnline(): void
  createEntry(name: any): JQuery<HTMLElement>
  attachContextMenu($entry: any, name: any): void
}
declare class BubbleTextController {
  constructor($spawnRow: any)
  $spawnRow: any
  spawnText(text: any, extraClass: any): void
  generateRandomPosition(): number
  generateRandomFloatHeight(): number
  TEXT_TEMPLATE: string
  MIN_HORIZONTAL_POS: number
  HORIZONTAL_POS_RANGE: number
  MIN_FLOAT_HEIGHT: number
  FLOAT_HEIGHT_RANGE: number
}
declare function ChatBar(): void
declare class ChatBar {
  activeChatContainerDom: JQuery<HTMLElement>
  _$ACTIVE_CHAT_SCROLL_CONTAINER: JQuery<HTMLElement>
  $LEFT_INDICATOR: JQuery<HTMLElement>
  $RIGHT_INDICATOR: JQuery<HTMLElement>
  SCROLL_CONTAINER_PADDING: number
  AUTO_SCROLL_INTERVAL_SIZE: number
  AUTO_SCROLL_TICK_RATE: number
  activeChats: any[]
  _newFriendRequestListner: Listener
  _gameInviteListner: Listener
  _nexusGameInviteListner: Listener
  _newChatAlertListener: Listener
  _chatMessageListener: Listener
  _serverMessageListener: Listener
  handleAlert(name: any, message: any, callback: any): void
  handleMessage(name: any, message: any, emojis: any, modMessage: any): void
  handleServerMessage(message: any): void
  handleActiveGameOnJoin(): boolean
  getChat(playerName: any, modMessage: any): any
  getChatInfo(owner: any):
    | {
        chatObject: any
        index: number
      }
    | undefined
  updateLayout(): void
  getInsideOffsets(): {
    right: number
    left: number
  }
  toggleIndicators(): void
  closeOutsideChats(): void
  startChat(name: any): void
  scrollToChat(chat: any): void
  scrollingChat: any
  scrollRight(scrollingLeft: any): void
  scrollTimeout: NodeJS.Timeout | undefined
  scrollLeft(scrollingLeft: any): void
  clearScroll(): void
  deleteChat(owner: any): void
  shiftChatRight(chatName: any): void
  shiftChatLeft(chatName: any): void
}
declare const CHAT_BOX_WIDTH: 165
declare const CHAT_BASE_OFFSET: -15
declare function ChatBox(name: any, parentBar: any, modMessage: any): void
declare class ChatBox {
  constructor(name: any, parentBar: any, modMessage: any)
  name: any
  id: string
  modMessage: any
  parentBar: any
  update: boolean
  moveing: boolean
  targetOnline: boolean
  dom: JQuery<HTMLElement>
  footer: JQuery<HTMLElement>
  container: JQuery<HTMLElement>
  $CHAT_INPUT_TEXTAREA: JQuery<HTMLElement>
  $CHAT_INPUT: JQuery<HTMLElement>
  $CHAT_CONTENT: JQuery<HTMLElement>
  $HEADER: JQuery<HTMLElement>
  emoteSelectorWrapper: EmoteSelectorInputWrapper
  _playerOnlineChangeListener: Listener
  _messageResponseListner: Listener
  getXOffset(): number
  getOffset(): number
  getFooterHeader(): JQuery<HTMLElement>
  setOffset(value: any): void
  selected(): void
  newUpdate(): void
  writeMessage(sender: any, msg: any, emojis: any, allowHtml: any): void
  delete(): void
  updateFooterFontSize(): void
  handleAlert(msg: any, callback: any): void
  handleMessage(sender: any, msg: any, emojis: any, allowHtml: any): void
  handleOnline(): void
  handleOffline(): void
  setServerMessage(): void
  openClose(): void
  closeHeader(): void
  scrollChatInView(): void
  close(): void
  open(): void
}
declare function createFriendRequestHandler(
  accept: any,
  callback: any
): () => void
declare var chatBoxTemplate: string
declare var chatHeaderInputTemplate: string
declare var chatBoxLineTemplate: string
declare var chatHeaderCloseTemplate: string
declare var CHAT_CONTENT_SIZE: number
declare function ContextMenueGenerator(): void
declare class ContextMenueGenerator {
  menuOpen: boolean
  _itemFields: {
    Chat: (player: any) => {
      name: string
      callback: () => void
    }
    InviteToGame: (player: any) => {
      name: string
      callback: () => void
    }
    FriendRequest: (player: any) => {
      name: string
      callback: () => void
    }
    Block: (player: any) => {
      name: string
      callback: () => void
    }
    Report: (player: any) => {
      name: string
      callback: () => void
    }
    RemoveFriend: (player: any) => {
      name: string
      callback: () => void
    }
    JoinGame: (player: any) => {
      name: string
      callback: () => void
    }
    InspectGame: (player: any) => {
      name: string
      callback: () => void
    }
  }
  generateStandardContextMenu(
    $entry: any,
    selector: any,
    player: any,
    trigger?: string
  ): void
  generateFriendListContextMenu(
    $entry: any,
    selector: any,
    player: any,
    trigger?: string
  ): void
  generatePlayerItemsObject(itemFieldList: any, player: any): {}
  generateNonPlayerItemsObject(itemFieldList: any): {}
  generateSocialStatusContextMenu(
    $entry: any,
    selector: any,
    trigger?: string
  ): void
  createClickTrigger($element: any): void
}
declare let contextMenueGenerator: ContextMenueGenerator
declare function ReportModal(): void
declare class ReportModal {
  _$modal: JQuery<HTMLElement>
  _$nameContainer: JQuery<HTMLElement>
  _$reportTypeSelector: JQuery<HTMLElement>
  _$reportDescription: JQuery<HTMLElement>
  _$submitButton: JQuery<HTMLElement>
  $playerContent: JQuery<HTMLElement>
  $modContent: JQuery<HTMLElement>
  $modButton: JQuery<HTMLElement>
  $modRadioButtons: JQuery<HTMLElement>
  $modReasonMessage: JQuery<HTMLElement>
  targetPlayer: string
  setup(): void
  show(playerName: any): void
  submitReport(): void
  toggleMod(): void
}
declare var reportModal: ReportModal
declare class SocialStatus {
  constructor($entry: any)
  $entry: any
  currentStatus: number
  changeSocialStatus(socialStatus: any): void
  getSocialStatusInfo(
    statusCode: any
  ): 'Offline' | 'Online' | 'Do Not Disturb' | 'Away'
  STATUS_IDS: {
    ONLINE: number
    DO_NO_DISTURB: number
    AWAY: number
    INVISIBLE: number
  }
}
declare function SocialTab(): void
declare class SocialTab {
  _tab: JQuery<HTMLElement>
  _friendEntryTemplate: string
  _onlineFriendCounter: JQuery<HTMLElement>
  $onlineFriendList: JQuery<HTMLElement>
  $offlineFriendList: JQuery<HTMLElement>
  $friendView: JQuery<HTMLElement>
  $friendsButton: JQuery<HTMLElement>
  $allUsersView: JQuery<HTMLElement>
  $allUsersButton: JQuery<HTMLElement>
  $ownProfileButton: JQuery<HTMLElement>
  ownProfileXOffset: number
  _$SOCIAL_TAB_CONTAINER: JQuery<HTMLElement>
  onlineFriends: {}
  offlineFriends: {}
  blockedPlayers: any[]
  chatBar: ChatBar | undefined
  socialStatus: SocialStatus | undefined
  _newFriendListener: Listener
  _friendStateChangeListener: Listener
  _friendRemoveListener: Listener
  _friendNameChangeListener: Listener
  _friendSocialStatusChangeListener: Listener
  _friendProfilePictureChangeListener: Listener
  setup(friends: any, blockedPlayers: any): void
  allPlayerList: AllPlayersList | undefined
  openClose(): void
  close(): void
  changeToAllUsers(): void
  changeToFriends(): void
  openOwnProfile(): void
  triggerFriendLazyLoad(): void
  updateOnline(): void
  updateOnlineFriendCount(): void
  updateOffline(): void
  updateFriendList(friendMap: any, type: any, $list: any): void
  _handleOpen(): void
  handleClose(): void
  updateScrollbar(): void
  addToOnlineFriends(friend: any): void
  addToOfflineFriends(friend: any): void
  removeFriend(name: any): void
  sendFriendRequest(playerName: any): void
  blockPlayer(playerName: any): void
  addBlockedPlayer(playerName: any): void
  removeBlockedPlayer(playerName: any): void
  unblockPlayer(playerName: any): void
  startChat(playerName: any): void
  getAllFriends(): string[]
  isFriend(name: any): any
  isBlocked(name: any): boolean
}
declare function sortFriends(friendA: any, friendB: any): any
declare var socialTab: SocialTab
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
declare function XpBar(): void
declare class XpBar {
  $xpBarOuter: JQuery<HTMLElement>
  $xpBarInner: JQuery<HTMLElement>
  $xpBarAnimationContainer: JQuery<HTMLElement>
  $levelText: JQuery<HTMLElement>
  $creditText: JQuery<HTMLElement>
  $CREDIT_ICON_GLOW: JQuery<HTMLElement>
  $creditSpawner: JQuery<HTMLElement>
  $xpSpawner: JQuery<HTMLElement>
  $ticketText: JQuery<HTMLElement>
  $ticketSpawner: JQuery<HTMLElement>
  _xpPercent: number
  level: number
  currentCreditCount: number
  currentTicketCount: number
  TICK_RATE: number
  _uploadedUrlRemoved: Listener
  _ticketChangeListener: Listener
  _noteUpdateListener: Listener
  setup(xpInfo: any, level: any, credits: any, tickets: any): void
  creditBubbleTextController: BubbleTextController | undefined
  xpBubbleTextController: BubbleTextController | undefined
  ticketBubbleTextController: BubbleTextController | undefined
  setLevel(newLevel: any): void
  setXpPercent(newXpP: any): void
  setXpText(current: any, target: any): void
  handleXpChange(
    newXpPercent: any,
    toNextLevel: any,
    currentXp: any,
    level: any,
    lastGain: any
  ): void
  xpGain(newXpP: any, newLevel: any): void
  setCredits(credits: any, noAnimation: any, onlyIfLarger: any): void
  setTickets(tickets: any, noAnimation: any, onlyIfLarger: any): void
  textCountAnimation(
    currentAmount: any,
    targetAmount: any,
    $textContainer: any
  ): void
}
declare var xpBar: XpBar
declare namespace NEXUS_EVENTS {
  let DAMAGE: string
  let ENEMY_STATE: string
  let ENEMY_TARGET: string
  let SWAP_TARGET: string
  let NEW_TURN_AVATAR: string
  let SWAP_AVATARS: string
  let PLAYER_TARGET: string
  let AVATAR_STATE: string
  let PRE_PLAY: string
  let ABILITY_ENABLED_CHANGE: string
  let ANIME_NAME_HINT: string
  let ABILITY_COOLDOWN_CHANGE: string
  let NEW_BUFF: string
  let BUFF_UPDATE: string
  let BUFF_END: string
  let HP_CHANGE: string
  let DISPLAY_AVATAR_OVERLAY: string
  let REMOVE_AVATAR_OVERLAY: string
  let DISABLED_ACTION: string
  let QUEUE_EVENT: string
  let DELAY_EVENT: string
  let HEAL_EVENT: string
  let FLASH_ICON: string
  let SHIELD_UPDATE: string
  let HIDE_GENRE: string
  let SHOW_GENRE: string
  let SONG_INFO_HINT: string
  let PLAY_SFX: string
  let COMABT_TUTORIAL: string
  let SET_CLONE_EFFECT: string
  let REMOVE_CLONE_EFFECT: string
  let IGNORE_EVENT: string
  let PLAY_ATTACK_EFFECT_SET: string
  let REPLACE_ENEMIES: string
  let SPAWN_ENEMIES: string
  let DESPAWN_ENEMY: string
  let SET_EFFECT_CLASS: string
  let RIKU_ABILITY_ACTIVATE: string
}
declare namespace NEXUS_RUNE_TYPES {
  let STANDARD: number
  let ADVANCED: number
}
declare namespace NEXUS_RUNE_CATEGORIES {
  let OFFENSIVE: number
  let DEFENSIVE: number
  let HYBRID: number
}
declare namespace NEXUS_RUNE_LEVELS {
  let MINOR: number
  let LESSER: number
  let GREATOR: number
  let MAJOR: number
  let SUPERIOR: number
}
declare namespace NEXUS_HIT_EFFECT_IDS {
  let SHAKE: number
  let PUSH: number
  let PUSH_ONE_WAY: number
}
declare namespace NEXUS_DUNGEON_TYPE_IDS {
  let STANDARD_1: number
  export { STANDARD_1 as STANDARD }
  export let ENDLESS: number
}
declare class Nexus {
  $view: JQuery<HTMLElement>
  $loadingScreen: JQuery<HTMLElement>
  _nexusMapInitListener: Listener
  get inNexusLobby(): boolean
  get inCoopLobby(): boolean
  get inNexusGame(): boolean
  setup(statBaseMax: any, nexusBuffs: any): void
  mapController: NexusMapController | undefined
  cityController: NexusCity | undefined
  statBaseMax: any
  changeToDungeon(): void
  changeToNexus(): void
  openView(callback: any, arg: any): void
  closeView(args: any): void
  displayLoading(): void
  hideLoading(): void
  getNexusFloorDescription(floor: any): any
  FLOOR_DESCRIPTIONS: {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
    7: string
    8: string
    9: string
    10: string
    11: string
    12: string
    13: string
    14: string
    15: string
    16: string
    17: string
    18: string
    19: string
    20: string
    21: string
    22: string
    23: string
    24: string
    25: string
  }
}
declare var nexus: Nexus
declare class NexusBadge {
  constructor(
    level: any,
    {
      avatarId,
      characterId,
      colorId,
    }: {
      avatarId: any
      characterId: any
      colorId: any
    },
    size: any,
    extraClasses?: any[]
  )
  $body: JQuery<HTMLElement>
  $badgeImage: JQuery<HTMLElement>
  $avatarImage: JQuery<HTMLElement>
  characterId: any
  avatarId: any
  level: any
  badgeSrc: string
  completeName: any
  TEMPLATE: string
}
declare class NexusBadgeEmpty extends NexusBadge {
  constructor(
    size: any,
    extraClasses: any[] | undefined,
    popoverMessage: any,
    popoverContainerId: any
  )
  detatch(): void
}
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
declare class NexusCityDungeonWindowAvatarSelector {
  constructor(selectionWindow: any)
  $container: JQuery<HTMLElement>
  $avatarContainer: JQuery<HTMLElement>
  $backButton: JQuery<HTMLElement>
  selectionWindow: any
  avatarsLoaded: boolean
  availableAvatars: any[]
  lockedAvatars: any[]
  get allAvatars(): any[]
  show(slotNumber: any): void
  currentSlotNumber: any
  hide(): void
  loadAvatars(): void
  handleNewAvatarUnlock(): void
  relayout(): void
  lockCharacter(characterId: any): void
  unlockCharacter(characterId: any): void
  resetAvatars(): void
}
declare class NexusCityDungeonWindowAvatarSelectorEntry {
  constructor(
    storeAvatar: any,
    name: any,
    imgSrc: any,
    imgSrcset: any,
    selectorWindow: any
  )
  $body: JQuery<HTMLElement>
  $img: JQuery<HTMLElement>
  $nameContainer: JQuery<HTMLElement>
  $name: JQuery<HTMLElement>
  storeAvatar: any
  selectorWindow: any
  characterLocked: boolean
  shouldAdjustTextSize: boolean
  imagePreload: PreloadImage
  get characterId(): any
  get avatarId(): any
  get pickable(): any
  triggerLoad(): void
  detatch(): void
  updateTextSize(): void
  updateLockedState(): void
  newCharacterLock(characterId: any): void
  removeCharacterLock(characterId: any): void
  updateCharacterLock(locked: any): void
  TEMPLATE: string
  WORD_COUNT_FOR_TEXT_ADJUST: number
}
declare class NexusCityCanvasElement extends AnimationRendorElement {
  constructor(ctx: any, x: any, y: any, cityWidth: any, image: any)
  cityWidth: any
  image: any
  get cityScale(): number
  targetWidth: number | undefined
  targetHeight: number | undefined
  STANDARD_CITY_WIDTH: number
}
declare class NexusCityCanvasElementInfiniteSlide extends NexusCityCanvasElement {
  constructor(ctx: any, x: any, y: any, cityWidth: any, image: any, speed: any)
  speed: any
  offset: number
  draw(deltaTime: any): void
}
declare class NexusDungeonSelectionTab extends NexusCityWindowTab {
  constructor(window: any)
  $standardContainer: any
  $endlessContainer: any
  standardModeSelectionEntry: NexusDungeonModeSelectionEntry
  endlessModeSelectionEntry: NexusDungeonModeSelectionEntry
  _nexusClearSoloStateListener: Listener
  show(): void
  updateState(
    nexusStandardSoloGotState: any,
    nexusEndlessSoloGotState: any
  ): void
  DUNGEON_TYPE_IDS: {
    STANDARD: number
    ENDLESS: number
  }
}
declare class NexusDungeonModeSelectionEntry {
  constructor($container: any, typeId: any)
  $container: any
  $soloButton: any
  $coopButton: any
  $coopHostButton: any
  $coopJoinButton: any
  $coopBackButton: any
  soloContinueText: any
  typeId: any
  toggleSoloContinue(toggleOn: any): void
  initDungeonLobby(typeId: any, coop: any): void
  reset(): void
  LOBBY_ID_MAX_LENGTH: number
  LOBBY_ID_MIN_LENGTH: number
}
declare class NexusCityDungeonSelectionWindow extends NexusCityWindow {
  currentSelectionTargetSlotNumber: any
  avatarInfoDisplay: NexusCityAvatarInfoDisplay
  modeSelectionTab: NexusDungeonSelectionTab
  dungeonSetupTab: NexusCityDungeonSetupTab
  avatarSelectionTab: NexusCityDungeonAvatarSelector
  teamSelectionTab: NexusCityDungeonTeamSelectTab
  badgeSelectionTab: NexusCityBadgeSelector
  activeLobby: boolean
  _joinNexusLobbyListener: Listener
  _nexusLobbyAvatarChangeListener: Listener
  _nexusLobbyBadgeChangeListener: Listener
  _unlockAvatarListener: Listener
  _leaveDungeonLobbyListener: Listener
  _nexusDungeonFinishedListener: Listener
  _exitNexusGame: Listener
  _nexusDungeonWindowInfoListener: Listener
  _nexusUpdateLobbyPlayerSlotsListener: Listener
  setupDungeonInfo({
    lobbyId,
    slotsInfo,
    avatarInfoList,
    teams,
    players,
    hostName,
    settings,
    badges,
    typeId,
  }: {
    lobbyId: any
    slotsInfo: any
    avatarInfoList: any
    teams: any
    players: any
    hostName: any
    settings: any
    badges: any
    typeId: any
  }): void
  setupDungeonLobby(typeId: any, coop: any): void
  changeToConfigView(type: any): void
  changeToTeamSelectionView(): void
  displayAvatarSelection(targetSlotNumber: any, displayClear: any): void
  displayBadgeSelection(targetSlotNumber: any, displayClear: any): void
  selectAvatar(avatarId: any): void
  selectBadge(avatarId: any): void
  clearSelectedSlot(): void
  clearSelectedSlotsBadge(): void
  leaveLobby(): void
  close(force: any): void
  changeTab(newTab: any): void
  DUNGEON_TYPE_IDS: {
    STANDARD: number
    ENDLESS: number
  }
}
declare class NexusCityDungeonAvatarEntry extends NexusCityAvatarEntry {
  constructor(
    avatarDescription: any,
    $container: any,
    hoverCallback: any,
    clickCallback: any
  )
  $freeWeekIcon: JQuery<HTMLElement>
  freeWeek: any
  updateFreeWeek(freeWeek: any): void
  _locked: any
}
declare class NexusCityDungeonAvatarSelector extends NexusCityAvatarSelector {
  constructor(window: any)
  updateRotationAvatars(rotationAvatarIds: any): void
}
declare class NexusCityDungeonSetupTab extends NexusCityWindowTab {
  constructor(window: any)
  $startButton: any
  $ratingContainer: any
  $loadTeamButton: any
  $lobbyIdContainer: any
  $lobbyIdText: any
  $hideIdButton: any
  $showIdButton: any
  $ratingRow: any
  $floorRow: any
  $modeRow: any
  inLobby: boolean
  coopLobby: boolean
  floorSelector: NexusFloorSelector
  slotMap: {
    1: NexusCityDungeonSetupTabAvatarSlot
    2: NexusCityDungeonSetupTabAvatarSlot
    3: NexusCityDungeonSetupTabAvatarSlot
    4: NexusCityDungeonSetupTabAvatarSlot
  }
  avatarSelector: NexusCityDungeonWindowAvatarSelector
  doingReset: boolean
  starRating: NexusCityDungeonSetupTabRatingDisplay
  typeButtonSet: NexusCityDungeonSetupTabTypeButtonSet
  diffButtonSet: NexusCityDungeonSetupTabDiffButtonSet
  selectionButtonSet: NexusCityDungeonSetupTabAvatarSelectionButtonSet
  answeringButtonSet: NexusCityDungeonSetupTabAvatarAnsweringButtonSet
  _nexusDungeonFinishedListener: Listener
  _nexusUpdateLobbyPlayerSlotsListener: Listener
  _nexusLobbyHostChangeListener: Listener
  _nexusPlayerLeaveListener: Listener
  _nexusLobbySettingUpdateListener: Listener
  _mapInitListener: Listener
  _nexusMapStateListener: Listener
  _updatedFloorProgress: Listener
  get allSlotsInUse(): boolean
  get allSlots(): NexusCityDungeonSetupTabAvatarSlot[]
  get viableSettings(): any
  get settingDescription(): {
    settings: {
      songTypes: {
        openings: any
        endings: any
        inserts: any
      }
      difficulties: {
        easy: any
        medium: any
        hard: any
      }
      songSelection: {
        watched: any
        random: any
      }
      answering: {
        typing: any
        choice: any
      }
    }
    floor: number
  }
  updatePlayerNameSizes(): void
  updateSettings(
    {
      settings: { songTypes, difficulties, songSelection, answering },
      floor,
    }: {
      settings: {
        songTypes: any
        difficulties: any
        songSelection: any
        answering: any
      }
      floor: any
    },
    typeId: any
  ): void
  setupLayout(lobbyId: any, slotsInfo: any): void
  inCoopLobby: boolean | undefined
  disableSettings(): void
  enableSettings(): void
  handleSettingsUpdated(): void
  calculateCurrentRating(): any
  avatarChange(
    clearTileSlots: any,
    newAvatarSlots: any
  ): {
    removedCharacterIds: any[]
    newCharacterIds: any[]
  }
  badgeChange(clearBadgeSlots: any, newBadgeSlots: any): void
  sendSettingUpdate(): void
  updateFloorProgress(floorProgress: any): void
}
declare class NexusCityDungeonSetupTabAvatarSlot {
  constructor(
    number: any,
    $slot: any,
    clickHandler: any,
    badgeClickHandler: any
  )
  $slot: any
  $avatarImgContainer: any
  $slotText: any
  $slotSideText: any
  $slotLevelText: any
  $slotLevelTextNumber: any
  $playerSlot: any
  $playerName: any
  $progressContainer: any
  number: any
  coopGame: boolean
  characterId: any
  avatarSelected: boolean
  playerSlot: NexusCityDungeonSetupTabAvatarPlayerSlot
  badgeSlot: NexusCityDungeonSetupTabAvatarBadgeSlot
  avatarDisplayHandler: AvatarDisplayHandler
  updatePlayerNameSize(): void
  setDisplayPlayer(displayPlayer: any): void
  updateLevel(level: any): void
  displayAvatar({
    avatarId,
    colorId,
    backgroundAvatarId,
    backgroundColorId,
    level,
    baseStats,
    runeInfo,
    genreInfo,
    abilityInfo,
    soloProgress,
    coopProgress,
    optionActive,
  }: {
    avatarId: any
    colorId: any
    backgroundAvatarId: any
    backgroundColorId: any
    level: any
    baseStats: any
    runeInfo: any
    genreInfo: any
    abilityInfo: any
    soloProgress: any
    coopProgress: any
    optionActive: any
  }): void
  graceHover: GraceHoverHandler | null | undefined
  updateProgress(soloProgress: any, coopProgress: any): void
  reset(keepPlayer: any): void
  displayBadge(badgeInfo: any): void
  removeBadge(): void
  calculateProgressValue({ rating, floor }: { rating: any; floor: any }): any
  pauseAnimation(): void
  resumeAnimation(): void
  relayout(): void
  PROGRESS_ROW: string
}
declare class NexusCityDungeonSetupTabAvatarPlayerSlot {
  constructor($container: any, $name: any, slotId: any)
  $container: any
  $name: any
  $nameTextContainer: any
  $emptyText: any
  avatarIconDisplayHandler: AvatarHeadDisplayHandler
  slotId: any
  imagePreload: any
  gotPlayer: boolean
  get claimedBySelf(): boolean
  claimSlot(): void
  hide(): void
  show(): void
  displayPlayer({
    name,
    icon: {
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
    },
  }: {
    name: any
    icon: {
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
    }
  }): void
  currentPlayerName: any
  updatePlayerNameSize(): void
  clearPlayer(): void
  reset(): void
  handleHidden(): void
  handleDisplayed(): void
  handleRelayout(): void
}
declare class NexusCityDungeonSetupTabAvatarBadgeSlot {
  constructor($badgeContainer: any, slotId: any, clickHandler: any)
  $badgeContainer: any
  slotId: any
  currentBadge: NexusBadge | null
  graceHover: GraceHoverHandler | null
  emptyBadge: NexusBadgeEmpty
  get gotBadge(): boolean
  show(): void
  hide(): void
  displayBadge(badgeInfo: any): void
  displayEmpty(): void
  clearBadge(): void
  reset(): void
}
declare class NexusCityDungeonSetupTabBaseButtonSet {
  constructor(buttonInfoList: any, updateRatingCallback: any, singleSelect: any)
  buttons: any
  get state(): void
  get rating(): void
  get selectedCount(): any
  get viable(): any
  reset(): void
  disable(): void
  enable(): void
}
declare class NexusCityDungeonSetupTabConfigButton {
  constructor(
    {
      $element,
      defaultSelected,
    }: {
      $element: any
      defaultSelected: any
    },
    updateRatingCallback: any,
    clickCallback: any,
    onlySelect: any
  )
  $element: any
  defaultSelected: any
  updateRatingCallback: any
  set selected(arg: any)
  get selected(): any
  _selected: any
  noCallbackUnselect(): void
  reset(): void
  disable(): void
  enable(): void
}
declare class NexusCityDungeonSetupTabTypeButtonSet extends NexusCityDungeonSetupTabBaseButtonSet {
  constructor(updateRatingCallback: any)
  get state(): {
    openings: any
    endings: any
    inserts: any
  }
  get rating(): any
  updateState({
    openings,
    endings,
    inserts,
  }: {
    openings: any
    endings: any
    inserts: any
  }): void
}
declare class NexusCityDungeonSetupTabDiffButtonSet extends NexusCityDungeonSetupTabBaseButtonSet {
  constructor(updateRatingCallback: any)
  get state(): {
    easy: any
    medium: any
    hard: any
  }
  get rating(): 0 | 1 | 2 | 3 | 4
  updateState({
    easy,
    medium,
    hard,
  }: {
    easy: any
    medium: any
    hard: any
  }): void
}
declare class NexusCityDungeonSetupTabAvatarSelectionButtonSet extends NexusCityDungeonSetupTabBaseButtonSet {
  constructor(updateRatingCallback: any)
  get state(): {
    watched: any
    random: any
  }
  get rating(): 0 | 1 | 3
  updateState({ watched, random }: { watched: any; random: any }): void
}
declare class NexusCityDungeonSetupTabAvatarAnsweringButtonSet extends NexusCityDungeonSetupTabBaseButtonSet {
  constructor(updateRatingCallback: any)
  get state(): {
    typing: any
    choice: any
  }
  get rating(): 0 | -4
  updateState({ typing, choice }: { typing: any; choice: any }): void
}
declare class NexusCityDungeonSetupTabRatingDisplay {
  $starOne: JQuery<HTMLElement>
  $starTwo: JQuery<HTMLElement>
  $starThree: JQuery<HTMLElement>
  $starFour: JQuery<HTMLElement>
  $starFive: JQuery<HTMLElement>
  updateRating(targetRating: any): void
  FULL_STAR_CLASS: string
  HALF_STAR_CLASS: string
  EMPTY_STAR_CLASS: string
}
declare class NexusFloorSelector {
  constructor(settingUpdateCallback: any)
  $floorNumber: JQuery<HTMLElement>
  $leftArrow: JQuery<HTMLElement>
  $rightArrow: JQuery<HTMLElement>
  $descrition: JQuery<HTMLElement>
  _floor: number
  floorProgress: {}
  _disabled: boolean
  lockMax: boolean
  breakthroughHit: boolean
  settingUpdateCallback: any
  set floor(arg: number)
  get floor(): number
  set disabled(arg: boolean)
  get disabled(): boolean
  updateActiveArrows(): void
  disable(): void
  enable(): void
  updateFloorProgress(floorProgress: any): void
  updateDungeonRating(rating: any): void
  currentRating: any
  BREAKTHROUGH_FLOOR_START: number
  MIN_FLOOR: number
}
declare class NexusCityDungeonTeamSelectTab extends NexusCityTeamSetupTab {
  constructor(window: any)
  handleTeamClick(team: any): void
}
declare class NexusCityInnWindow extends NexusCityWindow {
  avatarInfoDisplay: NexusCityAvatarInfoDisplay
  avatarSelectionTab: NexusCityAvatarSelector
  badgeSelectionTab: NexusCityBadgeSelector
  avatarSetupTab: NexusCityInnAvatarSetupTab
  avatarSkinSelectTab: NexusCitySkinSelectTab
  backgroundSelectTab: NexusCityInnBackgroundSelectTab
  teamSelectionTab: NexusCityInnTeamSetupTab
  _nexusWorkshopBaseInfoListener: Listener
  _defaultUpdateListener: Listener
  selectSkin(avatarId: any): void
  updateSelectedSkin(
    colorId: any,
    src: any,
    srcSet: any,
    backgroundSrc: any,
    sizeModifier: any,
    animated: any,
    jsonSrc: any,
    atlasSrc: any
  ): void
  selectBackground(): void
  updateSelectedBackground(
    avatarId: any,
    colorId: any,
    backgroundVert: any
  ): void
  changeTeamAvatarSelect(teamId: any, slotId: any, displayClear: any): void
  changeTeamBadgeSelect(teamCharacters: any, displayClear: any): void
  changeAvatarSetTeam(avatarInfo: any): void
}
declare class NexusCityInnAvatarSetupTab extends NexusCityWindowTab {
  constructor(window: any)
  $imageContainer: any
  $skinSelectButton: any
  $backgroundSelectButton: any
  $toggleOptionButton: any
  $setDefaultButton: any
  $addToTeamTeamButton: any
  avatarDisplayHandler: AvatarDisplayHandler
  defaultUpdateListener: Listener
  get currentAvatarInfo(): {
    avatarId: any
    colorId: any
    backgroundAvatarId: any
    backgroundColorId: any
    optionActive: boolean
  }
  displayAvatar({
    avatarId,
    characterId,
    backgroundAvatarId,
    backgroundColorId,
    colorId,
    sizeModifier,
    jsonSrc,
    atlasSrc,
    animated,
    src,
    srcSet,
    backgroundSrc,
    optionName,
    optionActive,
  }: {
    avatarId: any
    characterId: any
    backgroundAvatarId: any
    backgroundColorId: any
    colorId: any
    sizeModifier: any
    jsonSrc: any
    atlasSrc: any
    animated: any
    src: any
    srcSet: any
    backgroundSrc: any
    optionName: any
    optionActive: any
  }): void
  currentAvatarId: any
  currentCharacterId: any
  currentColorId: any
  defaultColorId: any
  defaultOptionActive: any
  currentOptionActive: any
  defaultBackgroundAvatarId: any
  defaultBackgroundColorId: any
  currentBackgroundAvatarId: any
  currentBackgroundColorId: any
  toggleOption(): void
  loadAvatar(
    src: any,
    srcSet: any,
    sizeModifier: any,
    animated: any,
    jsonSrc: any,
    atlasSrc: any
  ): void
  loadBackground(backgroundSrc: any): void
  updateAvatar(
    colorId: any,
    src: any,
    srcSet: any,
    backgroundSrc: any,
    sizeModifier: any,
    animated: any,
    jsonSrc: any,
    atlasSrc: any
  ): void
  updateBackground(avatarId: any, colorId: any, backgroundVert: any): void
  updateSetDefaultButton(): void
}
declare class NexusCitySkinSelectTab extends NexusCityWindowTab {
  constructor(window: any)
  skinEntries: any[]
  unlockListner: Listener
  displaySkinOptions(avatarId: any): void
  show(): void
  hide(): void
}
declare class NexusCitySkinSelectEntry {
  constructor(
    {
      avatarId,
      colorId,
      name,
      sizeModifier,
      src,
      srcSet,
      jsonSrc,
      atlasSrc,
      backgroundSrc,
      unlocked,
      animated,
    }: {
      avatarId: any
      colorId: any
      name: any
      sizeModifier: any
      src: any
      srcSet: any
      jsonSrc: any
      atlasSrc: any
      backgroundSrc: any
      unlocked: any
      animated: any
    },
    $container: any,
    window: any
  )
  $body: JQuery<HTMLElement>
  avatarDisplayHandler: AvatarDisplayHandler
  avatarId: any
  colorId: any
  unlocked: any
  setUnlocked(): void
  removed(): void
  template: string
}
declare class NexusCityInnBackgroundSelectTab extends NexusCityWindowTab {
  constructor(window: any)
  $contentContainer: any
  $searchContainer: any
  loadList: any[]
  backgroundEntries: any[]
  loadTimeout: NodeJS.Timeout | null
  unlockListner: Listener
  show(): void
  hide(): void
  updateScroll(): void
  setupContent(): void
  loadSection(): void
  applySearchFilter(): void
  LOAD_SECTION_SIZE: number
  LOAD_SECTION_DELAY: number
}
declare class NexusCityInnBackgroundGroup {
  constructor(avatarEntry: any, $scrolLContainer: any, window: any)
  $body: JQuery<HTMLElement>
  $avatarImg: JQuery<HTMLElement>
  $lockedMessage: JQuery<HTMLElement>
  $backgroundScrollContainer: JQuery<HTMLElement>
  $backgroundContainer: JQuery<HTMLElement>
  fullName: any
  imageLoadTriggered: boolean
  avatarId: any
  imagePreload: PreloadImage
  locked: boolean
  backgroundEntries: any
  show(): void
  hide(): void
  handleNewUnlock(avatarId: any, colorId: any): void
  applySearchfilter(searchFilter: any): void
  TEMPLATE: string
}
declare class NexusCityInnBackgroundEntry {
  constructor(
    {
      colorId,
      avatarId,
      backgroundVert,
      name,
      unlocked,
    }: {
      colorId: any
      avatarId: any
      backgroundVert: any
      name: any
      unlocked: any
    },
    $scrollContainer: any,
    window: any
  )
  $body: JQuery<HTMLElement>
  $image: JQuery<HTMLElement>
  name: any
  colorId: any
  unlocked: any
  imagePreload: PreloadImage
  show(): void
  hide(): void
  triggerImageLoad(): void
  setUnlocked(): void
  TEMPLATE: string
  LAZY_LOAD_OFFSET_MOD: number
}
declare class NexusCityInnTeamSetupTab extends NexusCityTeamSetupTab {
  constructor(window: any)
  $newTeamButton: any
  avatarTarget: any
  selectedSlot: any
  _nexusCreateTeamListener: Listener
  _nexusTeamAvatarUpdate: Listener
  _nexusRenameTeamListener: Listener
  _nexusDeleteTeamListener: Listener
  _nexusTeamAvatarClearListener: Listener
  _nexusTeamBadgeClearListener: Listener
  setAvatarTarget(avatarInfo: any): void
  handleTeamAvatarSlotClick(slot: any): void
  avatarSelectedForTeam(
    teamId: any,
    slotId: any,
    {
      avatarId,
      colorId,
      backgroundAvatarId,
      backgroundColorId,
      optionActive,
    }: {
      avatarId: any
      colorId: any
      backgroundAvatarId: any
      backgroundColorId: any
      optionActive: any
    }
  ): void
  clearSelectedSlot(): void
  handleTeamAvatarBadgeClick(slot: any): void
  badgeSelected(avatarId: any): void
  clearBadgeSelected(): void
  displayTeamNameInput(title: any, callback: any): void
  updateCreateTeamButtonState(): void
  TEAM_NAME_MAX_LENGTH: number
  MAX_TEAM_COUNT: number
}
declare class NexusCityInnTeamRow extends NexusCityTeamRow {
  constructor(
    teamInfo: any,
    window: any,
    tab: any,
    $container: any,
    teamNumber: any
  )
  $renameButton: JQuery<HTMLElement>
  $deleteButton: JQuery<HTMLElement>
  $optionContainer: JQuery<HTMLElement>
  $name: JQuery<HTMLElement>
  rename(newName: any): void
  delete(): void
  clearSlot(slotId: any): void
  clearBadge(slotId: any): void
}
declare class NexusCityAvatarInfoDisplay {
  constructor($container: any, statBaseMax: any, autoScroll: any)
  $avatarContainer: any
  $nameContainer: any
  $name: any
  $level: any
  $specialBuffList: any
  avatarDisplayHandler: AvatarDisplayHandler
  autoScroll: any
  currentAvatarId: any
  speciaBuffs: {}
  specialBuffList: any[]
  statsBars: {
    cont: NexusCityAvatarInfoDisplayStatLine
    def: NexusCityAvatarInfoDisplayStatLine
    dodge: NexusCityAvatarInfoDisplayStatLine
    atk: NexusCityAvatarInfoDisplayStatLine
    acc: NexusCityAvatarInfoDisplayStatLine
  }
  genreIcons: {
    Strong: {
      0: NexusCityAvatarInfoDisplayGenreIcon
      1: NexusCityAvatarInfoDisplayGenreIcon
      2: NexusCityAvatarInfoDisplayGenreIcon
    }
    Weak: {
      0: NexusCityAvatarInfoDisplayGenreIcon
      1: NexusCityAvatarInfoDisplayGenreIcon
    }
  }
  statBaseMax: any
  handleHidden(): void
  handleDisplayed(): void
  reset(): void
  displayAvatar({
    avatarId,
    src,
    srcSet,
    backgroundSrc,
    name,
    level,
    sizeModifier,
    baseStats,
    runeInfo,
    genreInfo,
    animated,
    jsonSrc,
    atlasSrc,
    optionActive,
  }: {
    avatarId: any
    src: any
    srcSet: any
    backgroundSrc: any
    name: any
    level: any
    sizeModifier: any
    baseStats: any
    runeInfo: any
    genreInfo: any
    animated: any
    jsonSrc: any
    atlasSrc: any
    optionActive: any
  }): void
  loadAvatar({
    src,
    srcSet,
    backgroundSrc,
    sizeModifier,
    animated,
    jsonSrc,
    atlasSrc,
    optionActive,
  }: {
    src: any
    srcSet: any
    backgroundSrc: any
    sizeModifier: any
    animated: any
    jsonSrc: any
    atlasSrc: any
    optionActive: any
  }): void
  displayStats(baseStats: any, runeInfo: any, genreInfo: any): void
  avatarUpdate(avatarInfo: any): void
  relayout(): void
  setRuneBoosts(runes: any, noScroll: any): void
  newRune(rune: any): void
  removeRune(rune: any): void
  handleNewSpecialRune(rune: any, noScroll: any): void
  resetBoosts(): void
  updateBuffScroll(): void
  triggerAutoScroll(): void
  autoScrollInterval: NodeJS.Timer | undefined
  AUTO_SCROLL_FRAME_SPEED: number
  AUTO_SCROLL_SPEED: number
}
declare class NexusCityAvatarInfoDisplayStatLine {
  constructor($container: any)
  $baseBar: any
  $baseValueText: any
  $runeIncreaseText: any
  $runeIncreaseBar: any
  runePercentIncrease: number
  setupBaseState(baseStat: any, maxStat: any): void
  baseStat: any
  maxStat: any
  updateRuneIncrease(): void
  AVATAR_MAX_BASE_STAT: number
}
declare class NexusCityAvatarInfoDisplaySpecialStatLine {
  constructor(name: any, percent: any, fullName: any)
  name: any
  percent: any
  fullName: any
  $body: JQuery<HTMLElement>
  $clone: JQuery<HTMLElement>
  get percentString(): any
  get description(): any
  updateText(): void
  TEMPLATE: string
}
declare class NexusCityAvatarInfoDisplayGenreIcon {
  constructor($icon: any, strong: any)
  $icon: any
  strong: any
  popoverMessage: string
  popoverTitle: string
  displayGenre({ name, active }: { name: any; active: any }): void
  reset(): void
}
declare class NexusCityAvatarSelector extends NexusCityWindowTab {
  constructor(
    window: any,
    $leftContainer: any,
    $rightContainer: any,
    $tab: any,
    selectorPreview: any,
    avatarEntryClass: any,
    clickHandler: any,
    extraOrderFilterInfo?: any[],
    clearPreviewOnHide?: boolean,
    clearClickHandler?: () => void
  )
  $avatarSelectionContainer: any
  avatarEntries: {}
  disabledCharacterIds: {}
  avatarEntryClass: any
  clickHandler: (avatarEntry: any) => void
  clearElement: NexusCityAvatarClearEntry
  selectorPreview: any
  clearPreviewOnHide: boolean
  customSelectionCallback: any
  avatarFilter: NexusCityFilter
  get entryList(): any[]
  updateScroll(): void
  triggerImageLoads(): void
  displayAvatars(avatarInfoList: any): void
  addAvatars(avatarInfoList: any): void
  displayFirstAvatar(): void
  avatarUnlocks(avatarInfoList: any): void
  displayClear(): void
  getAvatarInfo(avatarId: any): any
  updateAvatarOrder(): void
  disableCharacter(characterId: any): void
  enableCharacter(characterId: any): void
  updateAvatarInfo(avatarId: any, level: any, baseStats: any): void
  updateDefaultAvatarSkin(
    avatarId: any,
    colorId: any,
    backgroundAvatarId: any,
    backgroundColorId: any,
    optionActive: any
  ): void
  setSelectionCallback(callback: any): void
}
declare class NexusCityAvatarEntry {
  constructor(
    {
      avatarInfo: {
        avatarId,
        colorId,
        backgroundAvatarId,
        backgroundColorId,
        optionActive,
        level,
        abilityInfo,
        genreInfo,
      },
      baseStats,
      runes,
      locked,
      earlyAccess,
      earlyAccessEndDate,
    }: {
      avatarInfo: {
        avatarId: any
        colorId: any
        backgroundAvatarId: any
        backgroundColorId: any
        optionActive: any
        level: any
        abilityInfo: any
        genreInfo: any
      }
      baseStats: any
      runes: any
      locked: any
      earlyAccess: any
      earlyAccessEndDate: any
    },
    $container: any,
    hoverCallback: any,
    clickCallback: any
  )
  $body: JQuery<HTMLElement>
  $imgContainer: JQuery<HTMLElement>
  $emptyRuneSlotCounter: JQuery<HTMLElement>
  $levelText: JQuery<HTMLElement>
  $earlyAccessIcon: JQuery<HTMLElement>
  avatarId: any
  colorId: any
  backgroundAvatarId: any
  backgroundColorId: any
  abilityInfo: any
  locked: any
  earlyAccess: any
  characterId: any
  animated: any
  jsonSrc: any
  atlasSrc: any
  $mainContainer: any
  level: any
  baseStats: any
  runeInfo: any
  genreInfo: any
  optionName: any
  optionActive: any
  name: any
  sizeModifier: any
  src: string
  srcSet: string
  backgroundSrc: string
  avatarDisplayHandler: AvatarDisplayHandler
  abilityHover: GraceHoverHandler
  clickCallback: any
  updateAvatarDisplay(): void
  unlocked({ avatarId, colorId }: { avatarId: any; colorId: any }): void
  updateLevelText(): void
  updateAvatarColor(colorId: any, optionActive: any): void
  updateAvatarBackground(avatarId: any, colorId: any): void
  get avatarInfo(): {
    avatarId: any
    level: any
    src: string
    srcSet: string
    name: any
    backgroundSrc: string
    baseStats: any
    runeInfo: any
    genreInfo: any
    abilityInfo: any
    sizeModifier: any
    animated: any
    jsonSrc: any
    atlasSrc: any
  }
  remove(): void
  detatch(): void
  triggerImageLoadCheck(): void
  handleHidden(): void
  handleShown(): void
  disable(): void
  enable(): void
  TEMPLATE: string
  PATREON_LEVLE_FOR_EARLY_ACCESS: number
}
declare class NexusCityAvatarClearEntry {
  constructor(clickHandler: any)
  $body: JQuery<HTMLElement>
  $textContainer: JQuery<HTMLElement>
  level: number
  name: string
  detatch(): void
  TEMPLATE: string
}
declare class NexusCityBadgeSelector extends NexusCityWindowTab {
  constructor(
    window: any,
    $leftContainer: any,
    $rightContainer: any,
    $tab: any,
    clickHandler: any,
    clearClickHandler?: () => void
  )
  $badgeSelectContainer: any
  badgeEntries: {}
  clickHandler: any
  clearElement: NexusCityAvatarClearEntry
  badgeFilter: NexusCityFilter
  get gotBadges(): boolean
  displayBadges(badgeInfoList: any): void
  updateBadges(badgeInfoList: any): void
  addBadges(badgeInfoList: any): void
  updateBadgeOrder(): void
  updateScroll(): void
  displayClear(): void
  resetActiveCharacters(): void
  updateActiveCharacters(clearedCharacterIds: any, newCharacterIds: any): void
}
declare class NexusCityBadgeEntry {
  constructor(badgeInfo: any, clickCallback: any)
  badgeInfo: any
  $body: JQuery<HTMLElement>
  $iconContainer: JQuery<HTMLElement>
  $levelText: JQuery<HTMLElement>
  avatarId: any
  colorId: any
  characterId: any
  level: any
  locked: boolean
  name: any
  graceHover: GraceHoverHandler
  updateLevelText(): void
  updateBadgeImage(): void
  badge: NexusBadge | undefined
  update(badgeInfo: any): void
  remove(): void
  detatch(): void
  disable(): void
  enable(): void
  TEMPLATE: string
}
declare class NexusCityFilter {
  constructor(
    filterEntries: any,
    defaultSortFunction: any,
    $nameSearch: any,
    callbackFunction: any,
    initialSortFunction: any,
    toggleFilter: any
  )
  filterEntries: any
  defaultSortFunction: any
  initialSortFunction: any
  $nameSearch: any
  toggleFilter: any
  searchString: any
  reset(): void
  sortList(list: any): any
  TEXT_INPUT_UPDATE_DELAY: number
}
declare class NexusCityOrderFilter {
  constructor(
    $triggerElement: any,
    useSortFunction: any,
    sortValueFunction: any,
    triggerCallback: any
  )
  useSortFunction: any
  sortValueFunction: any
  $triggerElement: any
  $directionElement: any
  set state(arg: any)
  get state(): any
  setOnStateChangeCallback(callback: any): void
  onStateChangeCallback: any
  shouldSort(a: any, b: any): any
  calculateSortValue(a: any, b: any): number
  reset(): void
  _state: any
  STATES: {
    ACTIVE: number
    REVERSE: number
    OFF: number
  }
}
declare class NexusCityTeamSetupTab extends NexusCityWindowTab {
  constructor(
    window: any,
    $leftContainer: any,
    $rightContainer: any,
    $tab: any,
    $teamContainer: any,
    teamRowClass: any,
    avatarInfoDisplay: any
  )
  $teamContainer: any
  teamRowClass: any
  avatarInfoDisplay: any
  teamMap: {}
  get currentTeamCount(): number
  handleTeamAvatarSlotClick(): void
  handleTeamClick(): void
  handleTeamAvatarBadgeClick(): void
  handleTeamAvatarSlotHover(slot: any): void
  addTeam(teamInfo: any): void
  setupTeams(teams: any): void
  updateAvatarLevels(avatarInfoList: any): void
}
declare class NexusCityTeamRow {
  constructor(
    {
      teamId,
      name,
      avatars,
      badges,
    }: {
      teamId: any
      name: any
      avatars: any
      badges: any
    },
    window: any,
    tab: any,
    $container: any,
    teamNumber: any
  )
  $body: JQuery<HTMLElement>
  teamId: any
  name: any
  $container: any
  window: any
  slots: {
    1: NexusCityTeamSlot
    2: NexusCityTeamSlot
    3: NexusCityTeamSlot
    4: NexusCityTeamSlot
  }
  get editableBadge(): boolean
  getTeamCharacterIds(): any[]
  updateAvatars(avatars: any): void
  updateBadges(badges: any): void
  triggerLazyLoad(): void
  updateAvatarLevels(avatarInfoList: any): void
  handleHidden(): void
  handleShown(): void
  TEMPLATE: string
}
declare class NexusCityTeamSlot {
  constructor(
    $body: any,
    teamId: any,
    slotId: any,
    tab: any,
    editableBadge: any
  )
  $body: any
  $badgeContainer: any
  $emptyNumber: any
  $selectedNumber: any
  editableBadge: any
  avatarDisplayHandler: AvatarDisplayHandler
  emptyBadge: NexusBadgeEmpty | undefined
  currentBadge: NexusBadgeEmpty | null
  badgeGraceHover: GraceHoverHandler | null
  teamId: any
  slotId: any
  avatarInfo: any
  get badgeClasses(): string[]
  get gotAvatar(): boolean
  get characterId(): any
  get gotBadge(): boolean
  checkNewAvatarDescription(
    avatarId: any,
    colorId: any,
    backgroundAvatarId: any,
    backgroundColorId: any
  ): boolean
  displayLoading(): void
  displayAvatar(avatarInfo: any, $lazyLoadContainer: any, $row: any): void
  updateBadge(badgeInfo: any): void
  clearBadge(): void
  clearBadgeContainer(): void
  updateAvatarLevel(avatarInfoList: any): void
  displayEmpty(): void
  handleHidden(): void
  handleShown(): void
  DEFAULT_SIZES: string
}
declare class NexusCityToggleFilter {
  constructor($toggle: any, $container: any, filterCategories: any)
  $toggle: any
  $container: any
  filterCategories: any
  displayed: boolean
  closeHandler: () => void
  updateActive(): void
  checkFilter(entry: any): boolean
  open(): void
  close(): void
}
declare class NexusCityToggleFilterCategory {
  constructor(targetParameters: any, filterEntries: any)
  targetParameters: any
  filterEntries: any
  get activeFilter(): any
  checkFilter(entry: any): any
}
declare class NexusCityToggleFilterCategoryEntry {
  constructor($toggle: any, value: any, changeCallback: any)
  $toggle: any
  $box: any
  value: any
  on: boolean
  enable(): void
  disable(): void
}
declare class NexusCityToggleFilterStaticEntry {
  constructor(value: any)
  value: any
  on: boolean
}
declare class NexusCityWindow {
  constructor($window: any)
  $window: any
  $exitButton: any
  $backButton: any
  get isOpen(): any
  trigger(): void
  open(): void
  close(): void
  executeClose(): void
  changeTab(newTab: any, noChangeHighlightTab: any): void
  executeTabChange(newTab: any, noChangeHighlightTab: any): void
  currentTab: any
  enableBackForTab(callback: any): void
  backClickCallback: any
}
declare class NexusCityWindowButton {
  constructor($button: any, clickFunction: any, popoverTitle: any)
  $button: any
  disable(): void
  enable(): void
}
declare class NexusCityWindowTab {
  constructor(window: any, $leftContainer: any, $rightContainer: any, $tab: any)
  window: any
  $leftContainer: any
  $rightContainer: any
  $tab: any
  confirmTabChange(callback: any): void
  confirmClose(callback: any): void
  reset(): void
  show(noChangeHighlightTab: any): void
  hide(noChangeHighlightTab: any): void
}
declare class NexusCityWorkshopAvatarSelector extends NexusCityAvatarSelector {
  constructor(window: any)
  updateAvatarRunes(avatarId: any, runeInfo: any, emptyRuneSlotCount: any): void
}
declare class NexusCityWorkshopAvatarEntry extends NexusCityAvatarEntry {
  constructor(
    avatarInfo: any,
    $container: any,
    hoverCallback: any,
    clickCallback: any
  )
  set emptyRuneSlotCount(arg: any)
  get emptyRuneSlotCount(): any
  _emptyRuneSlotCount: any
}
declare class NexusCityWorkshopAvatarSelectorPreview {
  constructor($container: any)
  $container: any
  $imgContainer: any
  $name: any
  avatarDisplayHandler: AvatarDisplayHandler
  reset(): void
  displayAvatar(avatarEntry: any): void
}
declare class NexusCityWorkshopRuneReformaterTab extends NexusCityWindowTab {
  constructor(window: any, runeSelector: any)
  $outerContainer: any
  slotHandler: NexusCityWorkshopRuneReformaterSlotHandler
  successContainer: NexusCityWorkshopRuneReformaterSuccessRateContainer
  duplicateButton: NexusCityWindowButton
  upgradeButton: NexusCityWindowButton
  runeSelector: any
  show(): void
  hide(): void
  slotInRune(slot: any): void
  unequipSlot(slot: any): void
  updateSuccessRate(): void
  MAX_LEVEL_FOR_UPGRADING: number
}
declare class NexusCityWorkshopRuneReformaterSlotHandler {
  constructor($container: any, controller: any)
  sacSlots: any[]
  mainSlot: NexusCityWorkshopRuneReformaterSlot
  get sacRuneInfo(): any[]
  get mainSlotRuneInfo(): {
    runeId: any
    level: any
  }
  get mainSlotInUse(): boolean
  unlockSacSlots(): void
  lockSacSlots(): void
  calculateSuccessRate(): number
  reset(): void
  BASE_CHANCE_PERCENT: number
}
declare class NexusCityWorkshopRuneReformaterSlot extends NexusCityWorkshopRuneSlot {
  constructor($body: any, imageSize: any, controller: any, mainSlot: any)
  mainSlot: any
  get runeInfo(): {
    runeId: any
    level: any
  }
  unlock(): void
  lock(): void
}
declare class NexusCityWorkshopRuneReformaterSuccessRateContainer {
  constructor($container: any)
  $successText: any
  setSuccessPercent(percent: any): void
  reset(): void
}
declare class NexusCityWorkshopRuneSelector {
  constructor($window: any)
  $runeContainer: any
  $expandButton: any
  $expandButtonText: any
  runeMap: {}
  expanded: boolean
  filter: NexusCityFilter
  get runeList(): any[]
  getRune(runeId: any, level: any): any
  runeUnequiped(runeId: any, level: any): void
  setupRunes(runes: any): void
  changeToExpandedSize(): void
  changeToNormalSize(): void
  relayout(): void
  loadImages(): void
  expand(): void
  collapse(): void
  updateScroll(): void
  scrollToRune(rune: any): void
  runeSelected(rune: any): void
  selectedRune: any
  clearSelection(): void
  resetSelection(): void
  updateRunes(deletedRunes: any, updatedRunes: any): void
  updateRuneAmounts(deletedRunes: any, updatedRunes: any, newRune: any): void
  clearedRunePage(clearedRunes: any, avatarId: any): void
  SCROLL_OFFSET_TOP: number
}
declare class NexusCityWorkshopRuneSelectorRune {
  constructor(
    {
      description: {
        runeId,
        level,
        name,
        fileName,
        type,
        category,
        description,
        boostPercent,
        statPropName,
        customBoostName,
      },
      amount,
      inUseCount,
      equipedAvatarIds,
    }: {
      description: {
        runeId: any
        level: any
        name: any
        fileName: any
        type: any
        category: any
        description: any
        boostPercent: any
        statPropName?: null | undefined
        customBoostName?: null | undefined
      }
      amount: any
      inUseCount: any
      equipedAvatarIds: any
    },
    $container: any,
    selector: any
  )
  runeId: any
  level: any
  name: any
  fileName: any
  type: any
  category: any
  selector: any
  boostPercent: any
  statPropName: any
  customBoostName: any
  description: any
  amount: any
  slottedInCount: number
  inUseCount: any
  equipedAvatarIds: any
  $body: JQuery<HTMLElement>
  $img: JQuery<HTMLElement>
  $amount: JQuery<HTMLElement>
  src: string
  srcSet: string
  imagePreload: PreloadImage
  hoverId: string
  graceHover: GraceHoverHandler
  get availableAmount(): number
  set selected(arg: any)
  unequiped(): void
  slottedIn(): void
  compare(target: any): number
  detach(): void
  remove(): void
  updateAmount(): void
  resetSelection(): void
  TEMPLATE: string
}
declare class NexusCityWorkshopRuneSetupTab extends NexusCityWindowTab {
  constructor(window: any, statBaseMax: any, runeSelector: any)
  $outerContainer: any
  $openSlotsCounter: any
  currentRuneSetup: any[] | null
  saveButton: NexusCityWindowButton
  unequipAllButton: NexusCityWindowButton
  emptyRuneSlotCount: number
  runeSelector: any
  avatarInfoDisplay: NexusCityAvatarInfoDisplay
  tooltip: NexusCityWorkshopRuneSetupTooltip
  slotHandler: NexusCityWorkshopRuneSelectorSlotHandler
  displayAvatar(avatarInfo: any): void
  avatarId: any
  setupRunes(runeInfo: any, noDisplayUpdate: any): void
  show(): void
  hide(): void
  slotInRune(slot: any): void
  unequipSlot(slot: any, skipOpenSlotUpdate: any): void
  updateOpenSlots(): void
  newRuneLayout(runes: any, emptyRuneSlotCount: any): void
  updateSaveButtonState(): void
  get pageChanged(): boolean
  TOOLTIPS: {
    NO_RUNE_SELECTED: string
    WRONG_RUNE_SLOT: string
    INVALID_SETUP: string
    DUPLICATE_ADVANCED_RUNE: string
  }
}
declare class NexusCityWorkshopRuneSelectorSlotHandler {
  constructor($window: any, controller: any, tooltip: any)
  offensiveStandardTopContainer: NexusCityWorkshopRuneSelectorStandardContainer
  offensiveStandardBottomContainer: NexusCityWorkshopRuneSelectorStandardContainer
  defensiveStandardTopContainer: NexusCityWorkshopRuneSelectorStandardContainer
  defensiveStandardBottomContainer: NexusCityWorkshopRuneSelectorStandardContainer
  offensiveAdvancedContainer: NexusCityWorkshopRuneSelectorAdvancedContainer
  defensiveAdvancedContainer: NexusCityWorkshopRuneSelectorAdvancedContainer
  sharedAdvancedContainer: NexusCityWorkshopRuneSelectorAdvancedContainer
  get allOffensiveContainers(): (
    | NexusCityWorkshopRuneSelectorStandardContainer
    | NexusCityWorkshopRuneSelectorAdvancedContainer
  )[]
  get allDefensiveContainers(): (
    | NexusCityWorkshopRuneSelectorStandardContainer
    | NexusCityWorkshopRuneSelectorAdvancedContainer
  )[]
  get allContainers(): (
    | NexusCityWorkshopRuneSelectorStandardContainer
    | NexusCityWorkshopRuneSelectorAdvancedContainer
  )[]
  get allRunes(): any[]
  get validSlotSetup(): any
  validateAdvancedRuneEquipSetup(newRuneId: any): boolean
  checkContainerSetupValid(
    topContainer: any,
    advancedContainer: any,
    bottomContainer: any
  ): any
  displayRunes(runes: any): void
  updateLockedStates(): void
  updateLockStatesForContainers(
    topContainer: any,
    advancedContainer: any,
    bottomContainer: any
  ): any
  updateOpenSlots(openSlots: any): void
  reset(): void
  OFFENSIVE_RUNE_TOP_RANGE: number[]
  OFFENSIVE_ADVANCED_SLOT_NUMBER: number
  OFFENSIVE_RUNE_BOTTOM_RANGE: number[]
  DEFENSIVE_RUNE_TOP_RANGE: number[]
  DEFENSIVE_ADVANCED_SLOT_NUMBER: number
  DEFENSIVE_RUNE_BOTTOM_RANGE: number[]
  SHARED_ADVANCED_SLOT_NUMBER: number
}
declare class NexusCityWorkshopRuneSelectorContainer {
  constructor(
    $container: any,
    baseSlotNumber: any,
    controller: any,
    categoryList: any,
    tooltip: any
  )
  $container: any
  controller: any
  locked: boolean
  openSlots: boolean
  entryMap: {}
  get allSlotsInUse(): boolean
  get allRunes(): any[]
  get slotInUse(): boolean
  clear(): void
  addRune(rune: any, slot: any, original: any): void
  updateLocked(locked: any): void
  updateOpenSlots(openSlots: any): void
}
declare class NexusCityWorkshopRuneSelectorStandardContainer extends NexusCityWorkshopRuneSelectorContainer {
  SLOT_CLASS: string
  IMAGE_SIZE: string
  TARGET_TYPE: number
}
declare class NexusCityWorkshopRuneSelectorAdvancedContainer extends NexusCityWorkshopRuneSelectorContainer {
  get advancedRuneId(): any
  SLOT_CLASS: string
  IMAGE_SIZE: string
  TARGET_TYPE: number
}
declare class NexusCityWorkshopRuneSlot {
  constructor($body: any, imageSize: any)
  $body: any
  $img: any
  imageSize: any
  slotInRune(rune: any): void
  imagePreload: PreloadImage | undefined
  runeId: any
  runeLevel: any
  graceHover: GraceHoverHandler | null | undefined
  reset(): void
}
declare class NexusCityWorkshopRuneSelectorEntry extends NexusCityWorkshopRuneSlot {
  constructor(
    $body: any,
    slotNumber: any,
    imageSize: any,
    controller: any,
    targetType: any,
    targetCategoryList: any
  )
  slotNumber: any
  targetType: any
  targetCategoryList: any
  newRune: boolean
  get runeDescription(): {
    runeId: any
    level: any
    slot: any
  }
  get typeName(): 'Standard' | 'Advanced'
  get categoryName(): 'Any' | 'Offensive' | 'Defensive'
  canEquipRune(rune: any): any
  slotInRune(rune: any, original: any): void
  originalRuneId: any
  originalRuneLevel: any
  slotInNewRune(rune: any): void
  clear(): void
}
declare class NexusCityWorkshopRuneSetupTooltip {
  constructor($container: any)
  $tooltip: any
  $tooltipText: any
  displayMessage(message: any): void
  hideTimeout: NodeJS.Timeout | undefined
  hide(): void
  DISPLAY_TIME: number
}
declare class NexusCityWorkshopWindow extends NexusCityWindow {
  runeSelector: NexusCityWorkshopRuneSelector
  avatarSelector: NexusCityWorkshopAvatarSelector
  runeSetupTab: NexusCityWorkshopRuneSetupTab
  runeReformaterTab: NexusCityWorkshopRuneReformaterTab
  runes: {}
  _nexusWorkshopBaseInfoListener: Listener
  _runePageUpdateListener: Listener
  _clearRunePageListener: Listener
  _reformatRunesListener: Listener
  _unlockAvatarListener: Listener
  displayRuneSetup(avatarInfo: any): void
}
declare class NexusCoopChat extends DragWindow {
  constructor()
  $chatContainer: any
  $chatMessageContainer: any
  $chatInput: any
  $playerContainer: any
  $playerCount: any
  $chatTab: any
  $playerTab: any
  chatMesageList: any[]
  playerMap: {}
  hostName: any
  lastChatCursorPosition: number
  emoteSelectorWrapper: EmoteSelectorInputWrapper
  _nexusCoopChatMessageListener: Listener
  _nexusCoopServerMessageListener: Listener
  _newNexusPlayerListener: Listener
  _nexusPlayerLeaveListener: Listener
  _nexusLobbyHostChangeListener: Listener
  _nexusPlayerDisconectListener: Listener
  _nexusPlayerReconectListener: Listener
  resetDrag(): void
  setGameMode(): void
  setNexusMode(): void
  clearGameMode(): void
  clearNexusMode(): void
  displayChat(): void
  displayPlayers(): void
  setupPlayers(playerList: any, hostName: any): void
  updateHostOptions(hostName: any): void
  addPlayer(playerInfo: any): void
  updatePlayerCount(): void
  displayMessage({
    sender,
    message,
    emojis,
    badges,
  }: {
    sender: any
    message: any
    emojis: any
    badges: any
  }): void
  displayServerMessage({ message }: { message: any }): void
  insertMsg($meesage: any): void
  reset(): void
  emojiSelected(emoji: any): void
  CHAT_MESSAGE_TEMPLATE: string
  SERVER_MESSAGE_TEMPLATE: string
  BADGE_TEMPLATE: string
  MAX_CHAT_MESSAGES: number
  MAX_MESSAGE_LENGTH: number
}
declare var nexusCoopChat: NexusCoopChat
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
declare class NexusAbandonRunVoteContainer extends BaseVoteContainer {
  constructor()
  _nexusAbandonRunVoteStartListener: Listener
  vote(votedFor: any): void
}
declare class NexusAvatarStatusController {
  $statusContainer: JQuery<HTMLElement>
  entries: {}
  entryList: any[]
  addAvatar(avatarInfo: any): void
  getAvatar(avatarName: any): any
  reset(): void
  updateHp(name: any, newHp: any): void
  updateCooldown(name: any, currentCooldown: any): void
  getAvatarDescriptions(): any[]
  addArtifactToAvatar(avatarName: any, artifactInfo: any): void
  removeArtifactFromAvatar(avatarName: any, artifactName: any): void
}
declare class NexusAvatarStatusEntry {
  constructor({
    name,
    hp,
    maxHp,
    avatar,
    artifacts,
    baseStats,
    runeInfo,
    genreInfo,
    abilityInfo,
    statusDisplayName,
    badgeInfo,
  }: {
    name: any
    hp: any
    maxHp: any
    avatar: any
    artifacts: any
    baseStats: any
    runeInfo: any
    genreInfo: any
    abilityInfo: any
    statusDisplayName: any
    badgeInfo: any
  })
  name: any
  hp: any
  maxHp: any
  avatarInfo: any
  currentCooldown: any
  artifactMap: {}
  artifactGraceHoverMap: {}
  artifactDescriptionMap: {}
  currentArtifactHeight: number
  $body: JQuery<HTMLElement>
  $hpBar: JQuery<HTMLElement>
  $emptyMessage: JQuery<HTMLElement>
  $artifactRow: JQuery<HTMLElement>
  $artifactRowInner: JQuery<HTMLElement>
  $hpText: JQuery<HTMLElement>
  $nameContainer: JQuery<HTMLElement>
  $name: JQuery<HTMLElement>
  $imageContainer: JQuery<HTMLElement>
  avatarIconDisplayerHandler: AvatarHeadDisplayHandler
  graceHover: GraceHoverHandler
  get hpPercent(): number
  get avatarDescription(): {
    avatarInfo: any
    alive: boolean
    artifactCount: number
    hp: any
    maxHp: any
    artifacts: any[]
  }
  get artifactCount(): number
  get artifacts(): any[]
  resizeName(): void
  updateHp(newHp: any): void
  updateHpBar(): void
  addArtifact({
    name,
    fileName,
    description,
  }: {
    name: any
    fileName: any
    description: any
  }): void
  artifactsLargerThanContainer(): boolean
  resizeArtifacts(): void
  resetArtifactSize(): void
  removeArtifact(artifactName: any): void
  clear(): void
  TEMPLATE: string
  ARTIFACT_TEMPLATE: string
  ARTIFACT_DEFAULT_SIZE: number
  ARTIFACT_MIN_SIZE: number
  ARTIFACT_SIZE_STEP: number
  ARTIFACT_SIZE_GRACE: number
}
declare class NexusDungeonBaseWindow {
  constructor($window: any)
  $window: any
  $hideButton: any
  $hideButtonIcon: any
  open(): void
  close(): void
  updateHideButton(): void
}
declare class NexusDungeonResultWindow extends NexusDungeonBaseWindow {
  constructor()
  $headerText: JQuery<HTMLElement>
  $continueButton: any
  $title: any
  xpController: NexusDungeonResultWindowXpController
  avatarController: NexusDungeonResultWindowAvatarController
  runeModController: NexusDungeonResultWindowRuneModsController
  reset(): void
  displayResult(
    xpResults: any,
    avatarList: any,
    avatarXpInfo: any,
    runeMods: any,
    title: any
  ): void
  XP_ANIMATION_TIME_MS: number
  XP_BAR_ANIMATION_TIME_MS: number
  RUNE_MODS_ANIMATION_TIME_MS: number
}
declare class NexusDungeonResultWindowXpController {
  constructor($window: any, counterSpeed: any, completedCallback: any)
  $xpRewardRow: any
  xpMainCounter: TextCounter
  currentEntries: any[]
  reset(): void
  displayEntries(entries: any, totalSpeedMs: any): void
}
declare class NexusDungeonResultWindowXpEntry {
  constructor(
    {
      name,
      entryCount,
      xpCount,
    }: {
      name: any
      entryCount: any
      xpCount: any
    },
    speedMs: any
  )
  $body: JQuery<HTMLElement>
  $nameCount: JQuery<HTMLElement>
  xpCount: any
  counter: TextCounter
  get counterFinished(): boolean
  startCounter(): void
  TEMPALTE: string
}
declare class NexusDungeonResultWindowAvatarController {
  constructor($window: any, animationDoneCallback: any)
  $avatarRow: any
  animationDoneCallback: any
  currentAvatars: any[]
  reset(): void
  displayAvatars(avatarlist: any, avatarXpInfo: any): void
  handleAnimationFinished(): void
  runAnimations(durationMs: any): void
}
declare class NexusDungeonResultWindowAvatarEntry {
  constructor(
    {
      avatarName,
      outfitName,
      optionName,
      optionActive,
      colorName,
      sizeModifier,
      animated,
    }: {
      avatarName: any
      outfitName: any
      optionName: any
      optionActive: any
      colorName: any
      sizeModifier: any
      animated: any
    },
    backgroundVert: any,
    {
      originalXpState,
      newXpState,
    }: {
      originalXpState: any
      newXpState: any
    },
    updateFinishedCallback: any
  )
  $body: JQuery<HTMLElement>
  $imgContainer: JQuery<HTMLElement>
  $levelText: JQuery<HTMLElement>
  $xpBar: JQuery<HTMLElement>
  $rewardContainer: JQuery<HTMLElement>
  avatarDisplayHandler: AvatarDisplayHandler
  set levelText(arg: any)
  originalXpState: any
  newXpState: any
  updateFinishedCallback: any
  get animationDone(): boolean
  updateXpPercent(newPercent: any, transitionTimeMs: any): void
  displayNewState(durationMs: any): void
  levelUpSteps:
    | {
        level: any
        targetXpPercent: number
        reset: boolean
        durationMs: any
      }[]
    | (
        | {
            level: any
            targetXpPercent: number
            reset: boolean
            durationMs: number
            levelUpRewards?: undefined
          }
        | {
            level: any
            targetXpPercent: number
            reset: boolean
            durationMs: number
            levelUpRewards: any
          }
      )[]
    | {
        level: any
        targetXpPercent: number
        reset: boolean
        durationMs: number
      }[]
    | undefined
  runAnimationStep(): void
  clear(): void
  TEMPLATE: string
  LEVEL_UP_REWARD_TEMPLATE: string
  MAX_LEVEL: number
}
declare class NexusDungeonResultWindowRuneModsController {
  constructor($window: any, animationDoneCallback: any)
  $runeModRow: any
  animationDoneCallback: any
  baseCapacity: number
  currentRuneMods: any[]
  reset(): void
  displayRuneMods(runeModList: any, animationTimeMs: any): void
  calculatePositionBasis(runeModList: any): {
    startX: number
    offsetIncrease: number
  }
  runAnimations(durationMs: any): void
  BASE_CONTAINER_WIDTH: number
  FULL_CONTAINER_WIDTH: number
  FULL_ROW_WIDTH: number
  RUNE_MOD_SIZE: number
  BASE_CONTAINER_EXTRA_CAPACITY: number
  FADE_IN_TOGGLE_SPEED_INCREASE: number
}
declare class NexusDungeonResultWindowRuneModEntry {
  constructor(
    {
      name,
      fileName,
    }: {
      name: any
      fileName: any
    },
    offset: any,
    fadeTime: any
  )
  $body: JQuery<HTMLElement>
  display(): void
  TEMPLATE: string
}
declare class NexusEventWindow extends NexusDungeonBaseWindow {
  $nameContainer: any
  $text: any
  $optionContainer: any
  $timer: any
  videoController: NexusEventVideoController
  volumeController: NexusEventWindowVolumeController
  loadingDisplay: NexusEventLoadingDisplay
  mapController: any
  activeOptions: {}
  graceCurrentHovers: any[]
  _nexusMapEventListener: Listener
  _nexusMapEventUpdateListener: Listener
  _nexusMapEventStartTimer: Listener
  _nexusMapEventEndListener: Listener
  _nexusMapEventEnableOptionListener: Listener
  displayContent(eventInfo: any): void
  resetGraceHovers(): void
  setupContent(
    header: any,
    text: any,
    options: any,
    centerText: any,
    artifactHighlights: any,
    keywordHighlights: any,
    objectHighlights: any
  ): void
  startTimer(length: any): void
  timerInterval: any
  stopTimer(): void
  displayVolume(): void
  displayVote(optionId: any, playerVote: any): void
}
declare class NexusEventWindowOption {
  constructor({
    optionId,
    text,
    active,
  }: {
    optionId: any
    text: any
    active: any
  })
  $body: JQuery<HTMLElement>
  $voteContainer: JQuery<HTMLElement>
  enable(): void
  disable(): void
  displayVote(playerVote: any): void
  TEMPLATE: string
}
declare class NexusEventWindowVolumeController {
  constructor(videoController: any)
  $container: JQuery<HTMLElement>
  $slider: JQuery<HTMLElement>
  videoController: any
  init(): void
  resetVolume(): void
  show(): void
  hide(): void
}
declare class NexusEventVideoPlayer extends VideoPlayer {
  constructor($video: any, readyCallback: any, finishedBufferingCallback: any)
  readyCallback: any
  finishedBufferingCallback: any
  videoLoadStarted: boolean
  bufferFinished: boolean
  setupVideo({
    videoLink,
    startTime,
    meanVolume,
    playLength,
  }: {
    videoLink: any
    startTime: any
    meanVolume: any
    playLength: any
  }): void
  videoMeanVolume: any
  startTime: any
  bufferLength: any
  startPoint: any
  getVideoVolume(): any
  reset(): void
}
declare class NexusEventVideoController {
  $container: JQuery<HTMLElement>
  playerOne: NexusEventVideoPlayer
  playerTwo: NexusEventVideoPlayer
  activePlayer: NexusEventVideoPlayer
  bufferPlayer: NexusEventVideoPlayer
  currentVideoIndex: number
  currentVideos: any[]
  displayTinyVideo(): void
  hideTinyVideo(): void
  reset(): void
  videoReady(player: any): void
  videoFinishedBuffering(player: any): void
  updateVolume(newVolume: any): void
  setupVideos(videoList: any): void
  startBuffering(videoIndex: any, player: any): void
  playVideo(): void
  stopVideo(): void
  nextVideo(): void
}
declare class NexusEventLoadingDisplay {
  $display: JQuery<HTMLElement>
  dotNumber: number
  start(): void
  runInterval: NodeJS.Timer | undefined
  stop(): void
  update(): void
  DOT_COUNT: number
  SPEED: number
}
declare class NexusMapController {
  $container: JQuery<HTMLElement>
  $hoverContainer: JQuery<HTMLElement>
  $iconOvelayContainer: JQuery<HTMLElement>
  $fragmentCounter: JQuery<HTMLElement>
  fragmentCounter: TextCounter
  $floorNumber: JQuery<HTMLElement>
  canvasController: AdvancedAnimationControllerTripple
  backgroundCanvas: BackgroundImageCanvas
  backdropCanvas: TileBackdropCanvas
  ostAudioGroup: any
  statusController: NexusAvatarStatusController
  rewardWindow: NexusMapRewardWindow
  eventWindow: NexusEventWindow
  storeWindow: NexusStoreWindow
  resultWindow: NexusDungeonResultWindow
  nextFloorWindow: NexusDungeonNextFloorWindow
  runeInventory: RuneInventory
  abandonVote: NexusAbandonRunVoteContainer
  tileRowMap: {}
  tileList: any[]
  playerVoteIcons: {}
  _fragmentCount: number
  artifactFlashImageBuffer: {}
  buffFlashImageBuffer: {}
  runeFlashImageBuffer: {}
  badgeFlashImageBuffer: {}
  runActive: boolean
  activePan: boolean
  active: boolean
  mapElementsHidden: boolean
  maxThreeArtifacts: boolean
  exitButton: DomElement
  _mapInitListener: Listener
  set fragmentCount(arg: number)
  get fragmentCount(): number
  _nextFloorSetupListener: Listener
  _mapNextFloorListener: Listener
  _nexusMapReadyListener: Listener
  _tileSelectListener: Listener
  _enemyyEncounterListener: Listener
  _enemyyEncounterResultListener: Listener
  _nexusGameEventsListener: Listener
  _playNextSongListener: Listener
  _partyWipeListener: Listener
  _dungeonClear: Listener
  _nexusAvatarArtifactListener: Listener
  _nexusRemoveAvatarArtifactListener: Listener
  _nexusFragmentChangeListener: Listener
  _nexusAvatarHpChangesListener: Listener
  _nexusNewRewardsListener: Listener
  _nexusStoreTileListener: Listener
  _nexusStoreArtifactBoughtListener: Listener
  _nexusStoreEventEndListener: Listener
  _nexusDungeonFinishedListener: Listener
  _nexusRuneFoundListener: Listener
  _nexusMapEventListener: Listener
  _nexusMapTileVoteListener: Listener
  _nexusMapOptionVoteListener: Listener
  _nexusMapShopVoteListener: Listener
  _nexusMapEndFloorHealVote: Listener
  _nexusMapEndFloorArtifactLockVote: Listener
  _nexusMapRejoinListener: Listener
  _nexusMapStateListener: Listener
  _exitNexusGameListener: Listener
  get currentTileFocusY(): number
  get tileSize(): number
  get backdropSize(): number
  loadMap(mapInfo: any, callback: any): void
  get exitButtonText(): 'Exit' | 'Save & Exit'
  get exitButtonDesription():
    | 'If you exit doing an enemy encounter, the encounter will be reset'
    | null
  handleNewQuizEvents(events: any): void
  show(): void
  hide(): void
  initMap(activeSession: any): void
  setupTiles(tileList: any): void
  currentTileSize: any
  updateDragOffsetLimits(): void
  mapBaseY: number | undefined
  tileHeight: any
  handleTileSelect(row: any, col: any): void
  setCurrentTile(row: any, col: any): void
  currentTile: any
  clearPlayerVotes(): void
  disableTile(row: any, col: any): void
  getTileInDirection(currentRow: any, currentCol: any, direction: any): any
  handleMouseMove(canvasX: any, canvasY: any): void
  currentHoverTile: any
  clearTileDescription(): void
  handleMouseClick(canvasX: any, canvasY: any): void
  getTileInCords(x: any, y: any): any
  translateToDirectionToColChange(direction: any): 0 | 1 | -1 | null
  closeMap(): void
  readjustCanvasSizes(): void
  reset(): void
  resetMap(): void
  hideMapElements(): void
  pauseOSTTrack(): void
  fadeOSTTrack(target: any, lengthMs: any): void
  setupArtifactFlashImage({
    flashAble,
    fileName,
  }: {
    flashAble: any
    fileName: any
  }): void
  getArtifactFlashImage(artifactName: any): any
  setupBuffFlashImage(name: any): void
  getBuffFlashImage(name: any): any
  setupRuneFlashImage(name: any): void
  getRuneFlashImage(name: any): any
  setupBadgeFlashImage(badgeInfo: any): void
  getBadgeFlashImage(avatarId: any): any
  switchMapFromGame(): void
  scrollMapTop(): void
  panMapToBottom(delay: any, callback?: () => void): void
  panMapToCord(
    targetY: any,
    panSpeed: any,
    delay: any,
    callback?: () => void
  ): void
  focusMapOnCurrentTile(): void
  panToCurrentTile(): void
  displayFinalResult(
    {
      xpDistribution,
      avatarXpInfo,
      runeMods,
    }: {
      xpDistribution: any
      avatarXpInfo: any
      runeMods: any
    },
    text: any
  ): void
  displayNextFloor(nextFloor: any): void
  addAvatarsToStatusController(avatarList: any): void
  FADE_OUT_PERCENT: number
  DRAG_GRACE_SIZE: number
  FULL_PAN_TIME: number
  INITIAL_PAN_DELAY: number
  FOCUS_PAN_SPEED: number
  TILE_SELECT_ANIMATION_TIME: number
  SMALL_TILE_MAX_WIDTH: number
  STANDARD_TILE_SIZE: number
  SMALL_TILE_SIZE: number
}
declare class NexusMapPlayerVoteIcon {
  constructor({
    name,
    icon: {
      emoteId,
      avatarInfo: {
        avatar: {
          avatarName,
          outfitName,
          colorName,
          optionName,
          optionActive,
          animatedHeadColorName,
        },
      },
    },
  }: {
    name: any
    icon: {
      emoteId: any
      avatarInfo: {
        avatar: {
          avatarName: any
          outfitName: any
          colorName: any
          optionName: any
          optionActive: any
          animatedHeadColorName: any
        }
      }
    }
  })
  $icon: JQuery<HTMLElement>
  $img: JQuery<HTMLElement>
  imagePreload: PreloadImage
  detach(): void
  TEMPLATE: string
}
declare class NexusMapRewardWindow extends NexusDungeonBaseWindow {
  constructor()
  $closeButton: any
  $fragmentCounter: any
  $artifactRow: any
  $runeModRow: any
  $runeModNoDropText: any
  $runeCounter: any
  $runeCounterText: any
  rewardPreview: NexusWindowItemPreview
  currentArtifacts: any[]
  currentRuneMods: any[]
  _nexusHighlightArtifactReward: Listener
  _nexusCloseArtifactReward: Listener
  set fragments(arg: any)
  highlightTargetArtifact(artifactName: any, avatarName: any): void
  displayArtifacts(
    artifacts: any,
    avatarDescriptions: any,
    soloReward: any,
    maxThree: any
  ): void
  displayRuneMods(runeMods: any): void
  clearRuneMods(): void
  clearArtifacts(): void
  clearAllArtifactSelections(): void
  getSelectedArtifactsInfo(): {
    artifactName: any
    avatarName: any
  }[]
  displayArtifactVote(
    avatarName: any,
    artifactName: any,
    voteIcon: any,
    gamePlayerId: any
  ): void
}
declare class NexusOptionBase {
  constructor(
    {
      name,
      fileName,
      description,
    }: {
      name: any
      fileName: any
      description: any
    },
    rewardPreview: any
  )
  name: any
  $body: JQuery<HTMLElement>
  $img: JQuery<HTMLElement>
  $voteContainer: JQuery<HTMLElement>
  active: boolean
  voteHighlights: {}
  imagePreload: PreloadImage
  createImgSrc(): void
  createImgSrcSet(): void
  remove(): void
  displayVote(avatarName: any, voteIcon: any, gamePlayerId: any): void
  clearPlayerVote(gamePlayerId: any): void
  clearAllPlayerVotes(): void
  VOTE_ROW_TEMPLATE: string
}
declare class NexusArtifactOptionBase extends NexusOptionBase {
  constructor(
    {
      name,
      fileName,
      description,
    }: {
      name: any
      fileName: any
      description: any
    },
    avatarDescriptions: any,
    rewardPreview: any,
    maxThree: any
  )
  $avatarTargetContainer: JQuery<HTMLElement>
  $selectedAvatarContainer: JQuery<HTMLElement>
  selectedAvatar: any
  targetsShown: boolean
  artifactName: any
  avatarTargets: any
  hideHandlerFunction: () => void
  createImgSrc(fileName: any): string
  createImgSrcSet(fileName: any): string
  displayTargetContainer(): void
  hideTargetContainer(): void
  highlightAvatar(avatarName: any): void
  getTagerAvatar(avatarName: any): any
  removeTarget(avatarName: any): void
  handleAvatarSelect(avatarName: any): void
  selectAvatar($avatarImg: any, avatarName: any): void
  clearSelection(): void
  TEMPLATE: string
}
declare class NexusArtifactRewardOption extends NexusArtifactOptionBase {
  constructor(
    {
      name,
      fileName,
      description,
    }: {
      name: any
      fileName: any
      description: any
    },
    avatarDescriptions: any,
    rewardWindow: any,
    soloReward: any,
    rewardPreview: any,
    maxThree: any
  )
  rewardWindow: any
  soloReward: any
}
declare class NexusArtifactRewardAvatarTarget {
  constructor(
    {
      avatarName,
      outfitName,
      optionName,
      optionActive,
      colorName,
      animatedHeadColorName,
      animated,
    }: {
      avatarName: any
      outfitName: any
      optionName: any
      optionActive: any
      colorName: any
      animatedHeadColorName: any
      animated: any
    },
    clickHandler: any
  )
  name: any
  $body: JQuery<HTMLElement>
  $img: JQuery<HTMLElement>
  $selectedImage: JQuery<HTMLElement>
  preloadImage: PreloadImage
  remove(): void
  TEMPLATE: string
  SELECTED_ICON_TEMPLATE: string
}
declare class NexusRuneModReward {
  constructor(name: any, fileName: any, description: any, rewardPreview: any)
  $body: JQuery<HTMLElement>
  $img: JQuery<HTMLElement>
  imagePreload: PreloadImage
  remove(): void
  TEMPLATE: string
}
declare class NexusMapTile {
  constructor(
    staticCtx: any,
    dynamicCtx: any,
    extraDynamicCtx: any,
    $iconOverlayContainer: any,
    row: any,
    column: any,
    tileInnerWidth: any,
    incomingConDirections: any,
    outgoingConDirections: any,
    genre: any,
    typeId: any
  )
  row: any
  column: any
  tileInnerWidth: any
  outgoingConDirections: any
  genre: any
  typeId: any
  selectable: boolean
  staticTile: NexusCanvasTile
  dynamicTile: NexusCanvasGlowTile
  selectAnimationTile: NexusCanvasSelectAnimationTile
  tileDescription: NexusTileDescirption
  descriptionDisplayed: boolean
  $tileIconRow: JQuery<HTMLElement>
  get tileHeight(): number
  get tileInnerHeight(): number
  get tileOuterHeight(): any
  get tileOuterWidth(): number
  get outgoingConDirectionList(): string[]
  get tileStandardOffsetX(): number
  get tileSquareBoundaryX(): number
  updateCanvasTilePositoin(): void
  canvasX: number | undefined
  canvasY: number | undefined
  buildCollisionTriangels(): void
  topTriangleCollider: CollisionShapeTriangle | undefined
  bottomTriangleCollider: CollisionShapeTriangle | undefined
  centerY: any
  setSelectable(on: any, incomingDirection: any): void
  disableGlow(): void
  showGlow(connectionFromDirection: any): void
  setVisited(): void
  cordinateInTile(x: any, y: any): boolean
  disable(): void
  disableFromDirection(direction: any): void
  mouseOnTile(
    $container: any,
    canvasTranslateX: any,
    canvasTranslateY: any
  ): void
  descriptionDisplayTimeout: NodeJS.Timeout | null | undefined
  descriptionHideTimeout: NodeJS.Timeout | null | undefined
  runSelectAnimation(): void
  stopSelectAnimation(): void
  mouseLeaveTile(): void
  hideDescription(): void
  displayVote(playerVote: any): void
  updateTileSize(newTileInnerWidth: any): void
  DESCRIPTION_GRACE_PERIOD: number
  DESCRIPTION_DELAY_PERIOD: number
  CENTER_COLUMN_NUMBER: number
  TILE_ICON_ROW_TEMPLATE: string
}
declare class NexusDungeonNextFloorWindow extends NexusDungeonBaseWindow {
  constructor()
  $floorNumber: any
  $floorDescription: any
  $avatarRow: any
  $taxAmount: any
  $continueButton: any
  avatarMap: {}
  _nexusAvatarHpChangesListener: Listener
  _nexusFragmentChangeListener: Listener
  _nexusEndFloorArtifactLockListener: Listener
  _nexusArtifactSelectListener: Listener
  displayContent(
    nextFloor: any,
    fragments: any,
    avatars: any,
    artifactLocks: any
  ): void
  reset(): void
  updateFragmentAmount(fragments: any): void
  continueNextFloor(): void
  displayHealVote(avatarName: any, playerIcon: any): void
  displayArtifactLockVote(avatarName: any, playerIcon: any): void
  HEAL_COST: number
  LOCK_COST: number
}
declare class NexusDungeonNextFloorAvatar {
  constructor(
    {
      avatarName,
      outfitName,
      optionName,
      optionActive,
      colorName,
      sizeModifier,
      animated,
    }: {
      avatarName: any
      outfitName: any
      optionName: any
      optionActive: any
      colorName: any
      sizeModifier: any
      animated: any
    },
    backgroundVert: any,
    maxHealth: any,
    currentHealth: any,
    artifacts: any,
    artifactLock: any
  )
  $body: JQuery<HTMLElement>
  $imageContainer: JQuery<HTMLElement>
  $healthBar: JQuery<HTMLElement>
  $healthText: JQuery<HTMLElement>
  $healButton: JQuery<HTMLElement>
  $lockButton: JQuery<HTMLElement>
  $healButtonVoteContainer: JQuery<HTMLElement>
  $lockButtonVoteContainer: JQuery<HTMLElement>
  $artifactContainerOuter: JQuery<HTMLElement>
  $artifactContainer: JQuery<HTMLElement>
  $noArtifactText: JQuery<HTMLElement>
  name: any
  artifactLockEnabled: boolean
  avatarDisplayHandler: AvatarDisplayHandler
  maxHealth: any
  set currentHealth(arg: any)
  artifactList: any[]
  get unselectedArtifact(): boolean
  enableArtifactLock(): void
  disableHealButton(): void
  disableLockButton(): void
  updateSizes(): void
  remove(): void
  artifactSelected(artifactName: any): void
  displayHealVote(playerIcon: any): void
  displayArtifactLockVote(playerIcon: any): void
  TEMPLATE: string
}
declare class NexusDungeonNextFloorAvatarArtifact {
  constructor(
    {
      fileName,
      name,
      description,
    }: {
      fileName: any
      name: any
      description: any
    },
    avatarName: any
  )
  $body: JQuery<HTMLElement>
  selected: boolean
  active: boolean
  avatarName: any
  name: any
  graceHover: GraceHoverHandler
  destroy(): void
  select(): void
  deselect(): void
  TEMPLATE: string
}
declare class NexusStoreWindow extends NexusDungeonBaseWindow {
  constructor()
  $nexusStoreArtifactRow: any
  $nexusStoreRuneModRow: any
  $closeButton: any
  shopEntries: any[]
  itemBrought: boolean
  rewardPreview: NexusWindowItemPreview
  endShopSession(): void
  setupContent(
    artifacts: any,
    runeMods: any,
    currentFragmentCount: any,
    avatarDescriptions: any,
    maxThree: any
  ): void
  itemBought(
    shopId: any,
    fragmentCount: any,
    avatarName: any,
    maxThree: any,
    unlockCount: any
  ): void
  displayShopVote(
    avatarName: any,
    shopId: any,
    voteIcon: any,
    gamePlayerId: any
  ): void
}
declare class NexusStoreArtifact extends NexusArtifactOptionBase {
  constructor(
    {
      name,
      fileName,
      description,
      shopId,
      price,
      brought,
      avatarName,
    }: {
      name: any
      fileName: any
      description: any
      shopId: any
      price: any
      brought: any
      avatarName: any
    },
    avatarDescriptions: any,
    rewardPreview: any,
    maxThree: any
  )
  $priceText: JQuery<HTMLElement>
  $priceContainer: JQuery<HTMLElement>
  shopId: any
  price: any
  updateState(currentFragmentCount: any): void
  displayBought(avatarName: any): void
}
declare class NexusStoreRuneMod extends NexusOptionBase {
  constructor(
    {
      name,
      fileName,
      description,
      shopId,
      price,
      brought,
    }: {
      name: any
      fileName: any
      description: any
      shopId: any
      price: any
      brought: any
    },
    rewardPreview: any
  )
  $priceText: JQuery<HTMLElement>
  shopId: any
  price: any
  createImgSrc(fileName: any): string
  createImgSrcSet(fileName: any): string
  updateState(currentFragmentCount: any): void
  displayBought(): void
  TEMPLATE: string
}
declare class NexusTileDescirption {
  constructor(typeId: any, genreName: any)
  $body: JQuery<HTMLElement>
  $list: JQuery<HTMLElement>
  addRow(text: any): void
  display(x: any, y: any): void
  hide(): void
  detatchTimeout: NodeJS.Timeout | undefined
  TEMPLATE: string
  ROW_TEMPLATE: string
  DETATCH_TIMEOUT: number
  TYPE_DESCRIPTION: {
    1: string
    2: string
    3: string
    4: string
    5: string
  }
}
declare class NexusWindowItemPreview {
  constructor($window: any)
  $img: any
  $title: any
  $text: any
  displayItem(name: any, description: any, imgSrc: any, imgSrcSet: any): void
  imagePreload: PreloadImage | undefined
  reset(): void
}
declare class RuneInventory {
  $container: JQuery<HTMLElement>
  $count: JQuery<HTMLElement>
  $combatWarning: JQuery<HTMLElement>
  $standardMsg: JQuery<HTMLElement>
  $noRunesMsg: JQuery<HTMLElement>
  $runeContainer: JQuery<HTMLElement>
  _count: number
  graceHovers: any[]
  set count(arg: number)
  get count(): number
  resetGraceHovers(): void
  reset(): void
  addRune({
    name,
    fileName,
    description,
    type,
    baseName,
    baseFileName,
  }: {
    name: any
    fileName: any
    description: any
    type: any
    baseName: any
    baseFileName: any
  }): void
  combatWon(): void
}
declare class TileBackdropCanvas extends BaseCanvas {
  constructor($canvas: any, backdropWidth: any)
  backdropWidth: any
  drawBackdrop(newSize: any): void
  redraw(): void
  updateContent(): void
  BACKDROP_COLOR: RGB
  BORDER_COLOR: RGB
  BORDER_GLOW: RGB
  SHADOW_BLUR: number
  BORDER_SIZE: number
}
declare class NexusCanvasTile extends AnimationRendorElement {
  constructor(
    ctx: any,
    x: any,
    y: any,
    sideHeight: any,
    incomingConDirections: any,
    genre: any,
    typeId: any
  )
  sideHeight: any
  genre: any
  typeId: any
  visisted: boolean
  disabled: boolean
  connectionIncomingDirections: any
  traversIncomingDirections: {}
  disabledIncomingDirection: {}
  leftExtendedDistancePercent: number
  rightExtendedDistancePercent: number
  get glowVersion(): boolean
  get bufferSize(): number
  get sideWidth(): number
  get tileSpacingHeight(): number
  get tileSpacingWidth(): number
  get circleIntersectionDiameter(): number
  get downHeight(): number
  get downWidth(): number
  get circleBufferSize(): number
  get outerHeight(): any
  get outerWidth(): number
  get iconSize(): number
  get lineWidth(): number
  drawShape(ctx: any, onlyLines: any, incomingDirections: any): void
  doStroke(ctx: any): void
  calculateSideConnectionSizes(horiShiftPercent: any): {
    circleVectorX: number
    circleVectorY: number
    firstHoriDistance: number
    firstVertDistance: number
    lastVertDistance: number
    lastHoriDistance: number
    extraHoriTravelDistance: number
  }
  STANDARD_TILE_SIDE_HEIGH: number
  STANDARD_LINE_WIDTH: number
  SMALL_SIDE_WIDTH: number
  SHADOW_BLUR: number
  SIDE_CONNECTION_ANGLE: number
  SIDE_BASE_ANGLE_VECTOR_X: number
  SIDE_BASE_ANGLE_VECTOR_Y: number
  SIDE_CONNECTION_EXTEND_DISTANCE_MIN_PERCENT: number
  SIDE_CONNECTION_EXTEND_DISTANCE_MAX_PERCENT: number
  SIDE_CONNECTION_ENDPOINT_SIDE_DROP: number
  ICON_TRANSPARANCY: number
  DISABLED_ALPHA: number
  VISITED_HIGHLIHT_COLOR: RGB
  VISITED_HIGHLIHT_SHADOW_COLOR: RGB
  VISITED_HIGHLIHT_SHADOW_BLUR: number
  ZONE_COLORS: {
    standard: {
      FILL: RGB
      GLOW: RGB
    }
    comedy: {
      FILL: RGB
      GLOW: RGB
    }
    action: {
      FILL: RGB
      GLOW: RGB
    }
    adventure: {
      FILL: RGB
      GLOW: RGB
    }
    fantasy: {
      FILL: RGB
      GLOW: RGB
    }
    drama: {
      FILL: RGB
      GLOW: RGB
    }
    'sci-fi': {
      FILL: RGB
      GLOW: RGB
    }
    romance: {
      FILL: RGB
      GLOW: RGB
    }
    'slice of life': {
      FILL: RGB
      GLOW: RGB
    }
    supernatural: {
      FILL: RGB
      GLOW: RGB
    }
    mecha: {
      FILL: RGB
      GLOW: RGB
    }
    ecchi: {
      FILL: RGB
      GLOW: RGB
    }
    mystery: {
      FILL: RGB
      GLOW: RGB
    }
    sports: {
      FILL: RGB
      GLOW: RGB
    }
    music: {
      FILL: RGB
      GLOW: RGB
    }
    horror: {
      FILL: RGB
      GLOW: RGB
    }
    psychological: {
      FILL: RGB
      GLOW: RGB
    }
    'mahou shoujo': {
      FILL: RGB
      GLOW: RGB
    }
    thriller: {
      FILL: RGB
      GLOW: RGB
    }
  }
  TYPE_IMAGE_NAMES: {
    1: string
    2: string
    3: string
    4: string
    5: string
  }
}
declare class NexusCanvasGlowTile extends NexusCanvasTile {
  alphaState: number
  direction: number
  active: boolean
  draw(deltaTimeSeconds: any): void
  updateAlpha(deltaTimeSeconds: any): void
  ALPHA_MIN: number
  ALPHA_MAX: number
  CYCLE_SPEED: number
}
declare class NexusCanvasSelectHightlightTile extends NexusCanvasTile {}
declare class NexusCanvasSelectAnimationTile extends NexusCanvasTile {
  highlightTile: NexusCanvasSelectHightlightTile
  active: boolean
  clearPercent: number
  updateExtendDistancePercent(
    leftExtendedDistancePercent: any,
    rightExtendedDistancePercent: any
  ): void
  draw(deltaTimeSeconds: any): void
  ANIMATION_TIME: number
  START_CLEAR_PERCENT: number
}
declare class NexusAbilityPopover extends NexusBasePopover {
  constructor()
  displayAbility(
    {
      name,
      description,
      fileName,
      cooldownLength,
      currentCooldown,
    }: {
      name: any
      description: any
      fileName: any
      cooldownLength: any
      currentCooldown: any
    },
    $triggerElement: any,
    handlerId: any,
    forcedDirection: any
  ): void
}
declare var nexusAbilityPopover: NexusAbilityPopover
declare class NexusArtifactPopover extends NexusBasePopover {
  constructor()
  displayArtifact(
    {
      name,
      description,
      fileName,
    }: {
      name: any
      description: any
      fileName: any
    },
    $triggerElement: any,
    handlerId: any
  ): void
}
declare var nexusArtifactPopover: NexusArtifactPopover
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
declare class NexusBadgePopover extends NexusBasePopover {
  constructor()
  displayBadge(
    badgeInfo: any,
    $triggerElement: any,
    handlerId: any,
    direction: any
  ): void
}
declare var nexusBadgePopover: NexusBadgePopover
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
declare class NexusBuffPopover extends NexusBasePopover {
  constructor()
  displayBuff(
    {
      name,
      description,
      fileName,
      debuff,
    }: {
      name: any
      description: any
      fileName: any
      debuff: any
    },
    $triggerElement: any,
    handlerId: any
  ): void
}
declare var nexusBuffPopover: NexusBuffPopover
declare class NexusPopoverExtendedDescriptions {
  extendedDescriptionMap: {}
  addBuffDescription({
    name,
    fileName,
    description,
    debuff,
  }: {
    name: any
    fileName: any
    description: any
    debuff: any
  }): void
  getExtendedContentInDescription(description: any): any[]
}
declare var nexusPopoverExtendedDescriptions: NexusPopoverExtendedDescriptions
declare class NexusRunePopover extends NexusBasePopover {
  constructor()
  displayRune(
    {
      name,
      description,
      fileName,
      amount,
      inUseAmount,
      type,
    }: {
      name: any
      description: any
      fileName: any
      amount: any
      inUseAmount: any
      type: any
    },
    $triggerElement: any,
    handlerId: any
  ): void
}
declare var nexusRunePopover: NexusRunePopover
declare class NexusTutorialController {
  window: NexusTutorialWindow
  startCityOverviewTutorial(
    $cityContainer: any,
    elementMap: any,
    cityController: any
  ): void
  startDungeonModeTutorial(selectionTab: any): void
  startDungeonLobbyTutorial(
    $slot: any,
    $settingRow: any,
    $rating: any,
    $floor: any
  ): void
  startDungeonAvatarSelectionTutorial(avatarSelector: any): void
  startDungeonMapTutorial($partyContainer: any, $runeContainer: any): void
  startDungeonCombatTutorial(
    $enemyContainer: any,
    $turnOrder: any,
    $partyContainer: any
  ): void
  startDungeonRewardsTutorial(
    $fragments: any,
    $artifactRow: any,
    $runeRow: any,
    $continueButton: any
  ): void
  startDungeonCraftingStationTutorial($continueButton: any): void
  startWorkshopTutorial($reformaterTab: any): void
  startRuneSetupTutorial(
    $runeContainer: any,
    $slotContainer: any,
    $minorRuneContainer: any,
    $minorRuneContainerTwo: any,
    $sharedRuneSlot: any,
    $slotCounter: any,
    $saveButton: any,
    $clearButton: any,
    $runePageContainer: any
  ): void
  NEXUS_TUTORIAL_IDS: {
    CITY_OVERVIEW: number
    DUNGEON_MODE: number
    DUNGEON_LOBBY: number
    DUNGEON_AVATAR_SELECTION: number
    DUNGEON_MAP: number
    DUNGEON_COMBAT: number
    DUNGEON_REWARDS: number
    CRAFTING_STATION: number
    WORKSHOP: number
    RUNE_SETUP: number
  }
}
declare class BaseNexusTutorial {
  constructor(tutorialId: any)
  tutorialId: any
  events: any[]
  currentIndex: number | null
  addEvent(
    text: any,
    element: any,
    centerPosition: any,
    triggerHandler: any,
    delay: any,
    centerOffsetX: any,
    centerOffsetY: any
  ): void
  get currenEventInfo(): any
  start(): any
  step(): any
}
declare class NexusTutorialWindow {
  $body: JQuery<HTMLElement>
  $text: JQuery<HTMLElement>
  $backdrop: JQuery<HTMLElement>
  currentTutorial: any
  doingDelay: boolean
  loadTutorial(tutorial: any): void
  handleClick(): void
  handleNewContent({
    text,
    element,
    centerPosition,
    triggerHandler,
    delay,
    centerOffsetX,
    centerOffsetY,
  }: {
    text: any
    element: any
    centerPosition: any
    triggerHandler: any
    delay: any
    centerOffsetX: any
    centerOffsetY: any
  }): void
  showContent({
    text,
    element,
    centerPosition,
    centerOffsetX,
    centerOffsetY,
  }: {
    text: any
    element: any
    centerPosition: any
    centerOffsetX: any
    centerOffsetY: any
  }): void
  hide(): void
}
declare class NexusTutorialBasePositionElement {
  constructor(
    element: any,
    vertPosition: any,
    horPosition: any,
    noOffsetbackdrop: any,
    backdropOffsetX: any,
    backdropOffsetY: any,
    extraOffsetX: any,
    extraOffsetY: any
  )
  element: any
  vertPosition: any
  horPosition: any
  noOffsetbackdrop: any
  backdropOffsetX: any
  backdropOffsetY: any
  extraOffsetX: any
  extraOffsetY: any
  get elementCords(): void
  get elementHeight(): void
  get elementWidth(): void
  calculatePosition(): {
    xCord: any
    yCord: any
    backdropXOffset: number
    backdropYOffset: number
  }
  TUTORIAL_WINDOW_HEIGHT: number
  TUTORIAL_WINDOW_WIDTH: number
}
declare class NexusTutorialStandardPositionElement extends NexusTutorialBasePositionElement {
  get elementCords(): {
    yCord: any
    xCord: any
  }
  get elementHeight(): any
  get elementWidth(): any
}
declare var nexusTutorialController: NexusTutorialController
declare class NexusTutorialDungeonMode extends BaseNexusTutorial {
  constructor(tutorialId: any, selectionTab: any)
}
declare class NexusTutorialDungeonLobby extends BaseNexusTutorial {
  constructor(
    tutorialId: any,
    $slot: any,
    $settingRow: any,
    $rating: any,
    $floor: any
  )
}
declare class NexusTutorialDungeonAvatarSelection extends BaseNexusTutorial {
  constructor(tutorialId: any, avatarSelector: any)
}
declare class NexusTutorialCityOverview extends BaseNexusTutorial {
  constructor(
    tutorialId: any,
    $container: any,
    elementMap: any,
    cityController: any
  )
  $container: any
}
declare class NexusCityTutorialCityPositionElement extends NexusTutorialBasePositionElement {
  constructor(
    staticElement: any,
    vertPosition: any,
    horPosition: any,
    noOffsetbackdrop: any,
    backdropOffsetX: any,
    backdropOffsetY: any
  )
  get elementCords(): {
    xCord: any
    yCord: any
  }
  get elementHeight(): any
  get elementWidth(): any
}
declare class NexusTutorialWorkshop extends BaseNexusTutorial {
  constructor(tutorialId: any, $reformaterTab: any)
}
declare class NexusTutorialRuneSetup extends BaseNexusTutorial {
  constructor(
    tutorialId: any,
    $runeContainer: any,
    $slotContainer: any,
    $minorRuneContainer: any,
    $minorRuneContainerTwo: any,
    $sharedRuneSlot: any,
    $slotCounter: any,
    $saveButton: any,
    $clearButton: any,
    $runePageContainer: any
  )
}
declare class NexusTutorialDungeonMap extends BaseNexusTutorial {
  constructor(tutorialId: any, $partyContainer: any, $runeContainer: any)
}
declare class NexusTutorialDungeonCombat extends BaseNexusTutorial {
  constructor(
    tutorialId: any,
    $enemyContainer: any,
    $turnOrder: any,
    $partyContainer: any
  )
}
declare class NexusTutorialDungeonRewards extends BaseNexusTutorial {
  constructor(
    tutorialId: any,
    $fragments: any,
    $artifactRow: any,
    $runeRow: any,
    $continueButton: any
  )
}
declare class NexusTutorialCraftingStations extends BaseNexusTutorial {
  constructor(tutorialId: any, $continueButton: any)
}
declare function EmojiPreviewTab(): void
declare class EmojiPreviewTab {
  _MAXIMUM_FILE_SIZE: number
  _MAX_EMOJI_NAME_LENGH: number
  _PREVIEW_EMOJI_AMOUNT: number
  _EMOJI_TYPES: {
    STANDARD: number
    ANIMATED: number
  }
  _EMOJI_SLOTS_FOR_BACKERLEVEL: {
    0: {
      1: number
      2: number
    }
    1: {
      1: number
      2: number
    }
    2: {
      1: number
      2: number
    }
    3: {
      1: number
      2: number
    }
    4: {
      1: number
      2: number
    }
    5: {
      1: number
      2: number
    }
    6: {
      1: number
      2: number
    }
  }
  _EMOJI_TEMPLATE: string
  _EMOJI_IMAGE_PREVIEW_TEMPLATE: string
  _backerLevel: number
  _standardEmojis: any[]
  _animatedEmojis: any[]
  newAvatarListener: void
  updateContent(emojis: any, backerLevel: any): void
  _$EMOJI_LIST: JQuery<HTMLElement> | undefined
  _$EMOJI_LIST_CONTAINER: JQuery<HTMLElement> | undefined
  _$INNER_CONTAINER: JQuery<HTMLElement> | undefined
  _$MANAGE_BUTTON: JQuery<HTMLElement> | undefined
  _$CLOSE_BUTTON: JQuery<HTMLElement> | undefined
  _$UPLOAD_BUTTON: JQuery<HTMLElement> | undefined
  _$USED_EMOJI_SLOT_LIST: JQuery<HTMLElement> | undefined
  _$EMPTY_EMOJI_SLOT_LIST: JQuery<HTMLElement> | undefined
  _$EMOJI_PREVIEW_LIST: JQuery<HTMLElement> | undefined
  open(): void
  close(): void
  getOpenSlotsForType(type: any): number
  addEmojiEntry(emoji: any): void
  addEmptySlots(): void
  updateEmptyEmoji(emoji: any): void
  setEmojiEmpty(emojiId: any): void
  updatePreviewEmojis(): void
  getEmojiDescriptoins(): any[]
  getEmojiDescription(emojiId: any): any
  clearEmojis(): void
  buildEmojiRegex(): void
  emojiRegex: RegExp | null | undefined
}
declare function EmojiTabEntry(emoji: any, isAnimated: any): void
declare class EmojiTabEntry {
  constructor(emoji: any, isAnimated: any)
  _EMPTY_EMOJI_PREVIEW_TEMPLATE: string
  _EMOJI_PREVIEW_TEMPLATE: string
  _emoji: any
  enabled: boolean
  empty: boolean
  isAnimated: any
  updateBody(): void
  $body: JQuery<HTMLElement> | undefined
  updateState(): void
  getEmojiId(): any
  updateEmoji(newEmoji: any): void
  remove(): void
  updateValidation(validated: any, active: any): void
  getEmojiDescription(): any
}
declare function Patreon(): void
declare class Patreon {
  $modal: JQuery<HTMLElement>
  $content: JQuery<HTMLElement>
  linkedTemplate: string
  unlinkedTemplate: string
  backerLevel: number
  delinked: boolean
  setup(
    patreonId: any,
    backerLevel: any,
    badgeLevel: any,
    usersCustomEmojis: any,
    patreonBadgeInfo: any,
    desynced: any
  ): void
  _patreonChangeListner: Listener | undefined
  _desyncListener: Listener | undefined
  _emojiTab: EmojiPreviewTab | undefined
  updateModalContent(
    patreonId: any,
    backerLevel: any,
    badgeLevel: any,
    currentBadge: any,
    nextBadge: any,
    usersCustomEmojis: any,
    desynced: any
  ): void
  unlinkPatreon(): void
  updatePatreonInfo(): void
  triggerOAuth(relink: any): void
  getCustomEmojis(): any[]
  getCustomEmoji(emojiId: any): any
  msgContainsCustomEmoji(msg: any): boolean | null | undefined
  getEmojiFromName(name: any): any
  showModal(): void
  setDelinked(): void
}
declare var patreon: Patreon
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
declare class PlayerProfileController {
  PROFILE_WIDTH: number
  PROFILE_HEIGHT: number
  open: boolean
  currentProfile: PlayerProfile | null
  editToggleOnListener: any
  loadProfileIfClosed(
    profileName: any,
    $requestObject: any,
    offsetCorrections: any,
    closeHandler: any,
    offline: any,
    inGame: any
  ): void
  loadProfile(
    profileName: any,
    $requestObject: any,
    offsetCorrections: any,
    closeHandler: any,
    offline: any,
    inGame: any
  ): void
  clearProfiles(): void
  toogleEdit(): void
  calculateOffset(
    $requestObject: any,
    offsetCorrections: any
  ): {
    x: any
    y: any
  }
  displayProfile(
    profileInfo: any,
    offset: any,
    closeHandler: any,
    offline: any,
    inGame: any
  ): void
  $PROFILE_LAYER: JQuery<HTMLElement>
}
declare var playerProfileController: PlayerProfileController
declare class ProfileBadgeContainer {
  constructor(badgeHandler: any, profileBadges: any, $profile: any)
  $badgeContainer: any
  $noBadgeContainer: any
  badgeSlotMap: {
    1: ProfileBadgeSlot
    2: ProfileBadgeSlot
    3: ProfileBadgeSlot
    4: ProfileBadgeSlot
    5: ProfileBadgeSlot
    6: ProfileBadgeSlot
    7: ProfileBadgeSlot
    8: ProfileBadgeSlot
    9: ProfileBadgeSlot
  }
  badgeHandler: any
  activeBadgeCount: any
  set selectedSlot(arg: any)
  get selectedSlot(): any
  showBadge(badge: any, slot: any): void
  toggleNoBadges(on: any): void
  toggleEdit(on: any): void
  handleBadgeClear(): void
}
declare class ProfileBadgeSlot {
  constructor(
    $container: any,
    slotNumber: any,
    selectionHandler: any,
    clearHandler: any
  )
  $container: any
  slotNumber: any
  clearHandler: any
  currentBadgeId: any
  $image: any
  $clearButton: any
  _selected: boolean
  _editActive: boolean
  get activeBadge(): boolean
  set editActive(arg: boolean)
  get editActive(): boolean
  set selected(arg: boolean)
  get selected(): boolean
  showBadge(badge: any): void
  fireClear(): void
  clearBadge(): void
}
declare class ProfileBadgeHandler {
  constructor(allBadges: any, activeBadges: any)
  badgeMap: {}
  selectedOptionBadge: any
  selectedSlot: any
  setActive(badgeId: any, slot: any): void
  attachOptionSlot(badgeId: any, slot: any): void
  attachChatSlot(badgeId: any, slot: any): void
  slotSelected(slot: any): void
  optionClick(badgeId: any): void
  getBadge(badgeId: any): any
  clearSelected(badgeId: any): void
  handleBadgeSelectedForSlot(): void
  resetSelection(): void
}
declare class ProfileBadge {
  constructor(badgeInfo: any)
  name: any
  unlockDescription: any
  fileName: any
  id: any
  special: any
  unlocked: any
  showInChat: any
  badgeSlot: any
  optionSlot: any
  chatSlott: any
  get active(): boolean
  get canSelect(): any
  showInSlot(slot: any): void
  attachOptionSlot(slot: any): void
  attachChatSlot(slot: any): void
  chatSlot: any
  updateOptionState(selected: any): void
  updateChatState(): void
  clearBadgeSlot(): void
}
declare class ProfileBadgeOptionContainer {
  constructor(badgeHandler: any, allBadges: any, $profileContainer: any)
  $profile: any
  $container: any
  $profileBody: any
  $chatBody: any
  $chatContent: any
  $chatBodyPlayerName: any
  $chatBodyPlayerNamBadges: any
  $chatBodySpecialContainer: any
  $chatBodyStandardContainer: any
  $profileToggle: any
  $chatToggle: any
  optionSlots: any[]
  chatSlots: any[]
  activeChatSlots: any[]
  badgesLoaded: boolean
  get shouldPlaceLeft(): boolean
  toggleEdit(on: any): void
  addChatBadge(badgeInfo: any): void
  getNonSpeicalChatBadgeId(): any
  removeChatBadge(badgeId: any): void
  updateChatBadges(): void
  setChatView(): void
  setProfileView(): void
  PROFILE_BADGE_TYPES: number[]
  BADGE_TYPE_ORDER_WEIGHT: {
    1: number
    2: number
    3: number
    4: number
    5: number
    6: number
  }
  CONTAINER_WIDTH: number
}
declare class ProfileOptionBadgeSlot {
  constructor(handleBadgeClick: any, badgeId: any)
  badgeId: any
  $imgContainer: JQuery<HTMLElement>
  setBadge(badgeName: any, unlockDescription: any, fileName: any): void
  badgeFileName: any
  load(): void
  clearSelection(): void
  selected: boolean | undefined
  updateState(unlocked: any, active: any, selected: any): void
  BADGE_TEMPLATE: string
}
declare class ProfileOptionChatBadgeSlot extends ProfileOptionBadgeSlot {
  constructor(badgeInfo: any)
  special: any
  weight: any
  updateState(): void
  CHAT_BADGE_ORDER_WEIGHT: {
    1: number
    2: number
    3: number
    4: number
    5: number
  }
}
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
declare class ProfileStatsLine {
  constructor($line: any, fieldName: any, hide: any, adminDisplay: any)
  $line: any
  fieldName: any
  $hider: any
  $hideToogle: any
  $hideTooglIcon: any
  set hide(arg: any)
  get hide(): any
  _hide: any
  HIDE_TOOGLE_ICON_CLASSES: {
    ACTIVE: string
    INACTIVE: string
  }
}
declare class ListProfileStatsLine extends ProfileStatsLine {
  constructor(
    $line: any,
    fieldName: any,
    hide: any,
    adminView: any,
    listId: any,
    username: any,
    urlUsername: any
  )
  $lineName: any
  $lineValue: any
  $listToogle: any
  get listName(): any
  get listUrl(): string
  get nextListId(): any
  updateList(listId: any, username: any, urlUsername: any): void
  _listId: any
  _userName: any
  _urlUsername: any
  LIST_ID_NAME_MAP: {
    1: string
    2: string
    3: string
  }
  LIST_ID_BASE_URL_MAP: {
    1: string
    2: string
    3: string
  }
  LINK_TEMPLATE: string
}
declare class QusetContainer {
  $body: JQuery<HTMLElement>
  $questContainer: JQuery<HTMLElement>
  $infoIcon: JQuery<HTMLElement>
  $stickOut: JQuery<HTMLElement>
  $counterCurrent: JQuery<HTMLElement>
  $counterTarget: JQuery<HTMLElement>
  $tokenCounter: JQuery<HTMLElement>
  $tokenGainedShadow: JQuery<HTMLElement>
  questMap: {}
  questEventListener: Listener
  set tokenProgress(arg: any)
  setup(questDescriptions: any, tokenProgress: any): void
  selectQuest(weekSlot: any): void
  selectedQuest: any
  updateCounter(): void
  QUEST_EVENTS: {
    STATE_UPDATE: number
  }
}
declare var qusetContainer: QusetContainer
declare class Quest {
  constructor(questDescription: any, locked: any)
  $body: JQuery<HTMLElement>
  $progressBar: JQuery<HTMLElement>
  $name: JQuery<HTMLElement>
  $stateCount: JQuery<HTMLElement>
  $totalStateCount: JQuery<HTMLElement>
  $questTypeText: JQuery<HTMLElement>
  locked: any
  get sortValue(): any
  get popoverContent(): string
  set selected(arg: any)
  get typeName():
    | 'Sun'
    | 'Mon'
    | 'Tue'
    | 'Wed'
    | 'Thu'
    | 'Fri'
    | 'Sat'
    | 'Eve'
    | 'unk'
  get timeUntilReset(): any
  updateState(state: any): void
  eventQuest: boolean | undefined
  questId: any
  name: any
  state: any
  targetState: any
  ticketReward: any
  noteReward: any
  description: any
  weekSlot: any
  updateBody(): void
  updateProgressBar(): void
  TEMPALTE: string
}
declare function RoomBrowser(): void
declare class RoomBrowser {
  $view: JQuery<HTMLElement>
  $roomContainer: JQuery<HTMLElement>
  $roomHider: JQuery<HTMLElement>
  $totalRoomCount: JQuery<HTMLElement>
  $shownRoomCount: JQuery<HTMLElement>
  activeRooms: {}
  numberOfRooms: number
  _roomListner: Listener
  setup(): void
  closeView(): void
  openView(callback: any): void
  openHostModal(): void
  host(): void
  hostListner: any
  appendRoomTile(tileHtml: any): void
  removeRoomTile(tileId: any): void
  updateNumberOfRoomsText(): void
  applyTileFilter(): void
  applyTileFilterToRoom(room: any): void
  notifyFriendChange(): void
  fireJoinLobby(gameId: any, password: any): void
  joinGameListner: any
  spectateGameWithPassword(gameId: any): void
  fireSpectateGame(gameId: any, password: any, gameInvite: any): void
  spectateGameListner: any
  joinLobby(data: any, isSpectator: any): void
  joinGame(data: any): void
}
declare var roomBrowser: RoomBrowser
declare function RoomFilter(): void
declare class RoomFilter {
  $FILTER_SEARCH_INPUT: JQuery<HTMLElement>
  $FILTER_BUTTON: JQuery<HTMLElement>
  $FILTER_CONTAINER: JQuery<HTMLElement>
  $ONLY_PUBLIC_CHECKBOX: JQuery<HTMLElement>
  $ONLY_IN_LOBBY: JQuery<HTMLElement>
  $ONLY_OPEN_SLOT: JQuery<HTMLElement>
  $ONLY_FRIENDS: JQuery<HTMLElement>
  $ROOM_SIZE_SLIDER: JQuery<HTMLElement>
  $SONG_COUNT_SLIDER: JQuery<HTMLElement>
  $GUESS_TIME_SLIDER: JQuery<HTMLElement>
  $DIFFICULTY_SLIDER: JQuery<HTMLElement>
  $SHOW_SELECTION_AUTO: JQuery<HTMLElement>
  $SHOW_SELECTION_LOOTING: JQuery<HTMLElement>
  $SCORING_COUNT: JQuery<HTMLElement>
  $SCORING_SPEED: JQuery<HTMLElement>
  $SCORING_LIVES: JQuery<HTMLElement>
  $OPENINGS_CHECKBOX: JQuery<HTMLElement>
  $ENDINGS_CHECKBOX: JQuery<HTMLElement>
  $INSERTS_CHECKBOX: JQuery<HTMLElement>
  $WATCHED_CHECKBOX: JQuery<HTMLElement>
  $UNWATCHED_CHECKBOX: JQuery<HTMLElement>
  $RANDOM_CHECKBOX: JQuery<HTMLElement>
  $ANSWER_MODE_TYPING: JQuery<HTMLElement>
  $ANSWER_MODE_MULTIPLE_CHOICE: JQuery<HTMLElement>
  $TV_TYPE_CHECKBOX: JQuery<HTMLElement>
  $MOVIE_TYPE_CHECKBOX: JQuery<HTMLElement>
  $OVA_TYPE_CHECKBOX: JQuery<HTMLElement>
  $ONA_TYPE_CHECKBOX: JQuery<HTMLElement>
  $SPECIAL_TYPE_CHECKBOX: JQuery<HTMLElement>
  $SAMPLE_POINT_CHECKBOX: JQuery<HTMLElement>
  $PLAYBACK_SPEED_CHECKBOX: JQuery<HTMLElement>
  $ANIME_SCORE_CHECKBOX: JQuery<HTMLElement>
  $VINTAGE_CHECKBOX: JQuery<HTMLElement>
  $GENRE_CHECKBOX: JQuery<HTMLElement>
  $TAG_CHECKBOX: JQuery<HTMLElement>
  $POPULARITY_CHECKBOX: JQuery<HTMLElement>
  _DEFAULT_VALUES: {
    TRUE_CHECKBOXES: JQuery<HTMLElement>[]
    FALSE_CHECKBOXES: JQuery<HTMLElement>[]
    SLIDERS: {
      SLIDER: JQuery<HTMLElement>
      VALUE: number[]
    }[]
    SEARCH: string
  }
  setup(): void
  setupFilterOptions(): void
  testRoom(room: any): boolean
  compareSettings(settingA: any, settingB: any): boolean
  reset(): void
}
declare var roomFilter: RoomFilter
declare function RoomTile(
  settings: any,
  host: any,
  hostAvatar: any,
  id: any,
  numberOfPlayers: any,
  numberOfSpectators: any,
  players: any,
  inLobby: any,
  parent: any,
  songLeft: any,
  tutorialRoom: any,
  $scrollContainer: any
): void
declare class RoomTile {
  constructor(
    settings: any,
    host: any,
    hostAvatar: any,
    id: any,
    numberOfPlayers: any,
    numberOfSpectators: any,
    players: any,
    inLobby: any,
    parent: any,
    songLeft: any,
    tutorialRoom: any,
    $scrollContainer: any
  )
  settings: any
  id: any
  host: any
  _inLobby: any
  _roomSize: any
  _numberOfPlayers: any
  _numberOfSpectators: any
  _players: any
  _private: any
  modalPreviewOpen: boolean
  _friendsInGameMap: {}
  parent: any
  $tile: JQuery<HTMLElement>
  avatarDisplayHandler: AvatarDisplayHandler
  $joinButton: JQuery<HTMLElement>
  _changeListner: Listener | undefined
  joinGame(): void
  spectateGame(): void
  togglePrivate(): void
  isPrivate(): any
  translateSongSelection(
    songSelection: any
  ): 'Random' | 'Mainly Watched' | 'Only Watched' | 'Custom' | undefined
  translateGuessTime(guessTimeEntry: any): string
  updateFriendInfo(): void
  updateSetting(setting: any, change: any): void
  updateAdvancedSetting(className: any, newValue: any): void
  updateAdvancedSelection(className: any, selected: any): void
  updateSelection(className: any, selected: any): void
  updateProgressBar(): void
  toggleJoinButton(): void
  isInLobby(): any
  isFull(): boolean
  getSelectionClass(checked: any): '' | 'rbrSelected'
  delete(): void
  setHidden(hide: any): void
  updateFriends(): void
  resizeRoomName(): void
  setSongsLeft(newValue: any): void
  previewSettings(): void
  settingPreviewClosed(): void
  getFriendsInGame(): string[]
  AVATAR_SIZE_MOD_SIZES: {
    0: string
    20: string
    51: string
  }
}
declare var ROOM_TILE_TEMPLATE: string
declare function HostPrioList(hosts: any): void
declare class HostPrioList {
  constructor(hosts: any)
  _$list: JQuery<HTMLElement>
  _ENTRY_TEMPLATE: string
  _hostMap: {}
  ENTRY_COUNT: any
  swapPosition(indexOne: any, indexTwo: any): void
  getOrder(): any[]
}
declare function HostPrioEntry(hostName: any, index: any): void
declare class HostPrioEntry {
  constructor(hostName: any, index: any)
  $body: JQuery<HTMLElement>
  name: any
  index: any
  bindUpClick(handler: any): void
  bindDownClick(handler: any): void
  updateButton(entryCount: any): void
}
declare const SETTING_HOST_PRIO_ENTRY_TEMPLATE: string
declare class NameChangeModal {
  $modal: JQuery<HTMLElement>
  $tokenCount: JQuery<HTMLElement>
  $nicknameInput: JQuery<HTMLElement>
  $checkAvailableButton: JQuery<HTMLElement>
  $changeButton: JQuery<HTMLElement>
  nicknameAvailableListener: Listener
  changeNicknameListener: Listener
  setup(tokenCount: any): void
  show(): void
  hide(): void
  updateTokenCount(newCount: any): void
}
declare var nameChangeModal: NameChangeModal
declare function Options(): void
declare class Options {
  $modal: JQuery<HTMLElement>
  menuItem: JQuery<HTMLElement>
  optionMenuContainer: JQuery<HTMLElement>
  _$blockedPlayerModalContent: JQuery<HTMLElement>
  _$blockedPlayerModal: JQuery<HTMLElement>
  _$blockedPlayerTable: JQuery<HTMLElement>
  _blockedPlayerTemplate: string
  $CPM_CURRENT_PASSWORD: JQuery<HTMLElement>
  $CPM_NEW_PASSWORD: JQuery<HTMLElement>
  $CPM_REPEAT_PASSWORD: JQuery<HTMLElement>
  $CPM_MESSAGE_CONTAINER: JQuery<HTMLElement>
  $MAl_SHARE_CHECKBOX: JQuery<HTMLElement>
  $SHARE_SCORE_CHECKBOX: JQuery<HTMLElement>
  $SHARE_SCORE_CONTAINER: JQuery<HTMLElement>
  $AUTO_SUBMIT_CHECKBOX: JQuery<HTMLElement>
  $LIST_NUMBER_CHECKBOX: JQuery<HTMLElement>
  $AUTO_VOTE_GUESS: JQuery<HTMLElement>
  $AUTO_VOTE_REPLAY: JQuery<HTMLElement>
  $DISABLE_EMOJIS: JQuery<HTMLElement>
  $INCLUDE_WATCHING_CHECKBOX: JQuery<HTMLElement>
  $INCLUDE_COMPLETED_CHECKBOX: JQuery<HTMLElement>
  $INCLUDE_ON_HOLD_CHECKBOX: JQuery<HTMLElement>
  $INCLUDE_DROPPED_CHECKBOX: JQuery<HTMLElement>
  $INCLUDE_PLANNING_CHECKBOX: JQuery<HTMLElement>
  $DISABLE_FLOATING_TEXT: JQuery<HTMLElement>
  DEFAULT_FLOATING_TEXT: boolean
  $PARTICLE_SLIDER: JQuery<HTMLElement>
  DEFAULT_PARTICLE_QUALITY: number
  $HOST_PRIOTISE_SLIDER: JQuery<HTMLElement>
  HOST_PRIO: {
    RESOLUTION: number
    HOST: number
  }
  DEFAULT_HOST_PRIORITY: number
  $LIST_NAME_INPUTS: {
    1: JQuery<HTMLElement>
    2: JQuery<HTMLElement>
    3: JQuery<HTMLElement>
  }
  ANIME_LIST_IDS: {
    ANILIST: number
    KTISU: number
    MAL: number
    ANN: number
  }
  ANIME_LIST_BASE_URL: {
    ANILIST: string
    KTISU: string
    MAL: string
    ANN: string
  }
  $ANIME_LIST_SLIDER: JQuery<HTMLElement>
  $SHOW_NAME_SLIDER: JQuery<HTMLElement>
  $SHOW_TEAM_ANSWERS_SLIDER: JQuery<HTMLElement>
  $soundEqualizerAdvancedContainer: JQuery<HTMLElement>
  $soundEqualizerMaxVolumeSlider: JQuery<HTMLElement>
  DEFAULT_EQUALIZE_MAX_VOLUME: number
  $autoHideOpenings: JQuery<HTMLElement>
  $autoHideEndings: JQuery<HTMLElement>
  $autoHideInserts: JQuery<HTMLElement>
  $autoHideUnwatched: JQuery<HTMLElement>
  $autoHideHighRisk: JQuery<HTMLElement>
  AUTO_SWITCH_AVATAR_STATES: {
    OFF: number
    CYCLE: number
    RANDOM: number
  }
  AUTO_SWITCH_AVATAR_NAMES: {
    0: string
    1: string
    2: string
  }
  $SETTING_TABS: JQuery<HTMLElement>
  $SETTING_CONTAINERS: JQuery<HTMLElement>
  timeoutTime: number
  lastHoverTimeout: NodeJS.Timeout | null
  _malLastUpdateListener: Listener
  _aniListLastUpdateListener: Listener
  _kitsuLastUpdateListener: Listener
  show(): void
  setup(
    malName: any,
    malLastUpdate: any,
    settings: any,
    aniListName: any,
    aniListLastUpdate: any,
    kitsuName: any,
    kitsuLastUpdate: any,
    useRomajiNames: any,
    serverStatuses: any,
    hostNames: any
  ): void
  autoSubmit: any
  showListNumber: any
  autoVoteSkipGuess: any
  autoVoteSkipReplay: any
  disableEmojis: any
  useRomajiNames: any
  showTeamAnswersState: any
  autoSwitchFavoritedAvatars: any
  equalizeSound: any
  autoHideOpenings: any
  autoHideEndings: any
  autoHideInserts: any
  autoHideUnwatched: any
  autoHideHighRisk: any
  animeListLinkId: any
  equalizeMaxVolume: any
  disableFloatingText: any
  soundEqualizerSwitch: Switch | undefined
  _SERVER_STATUS_TABLE: ServerStatusTable | undefined
  _HOST_PRIO_LIST: HostPrioList | undefined
  nexusAudioMasterSliderCombo: SliderTextCombo | undefined
  nexusAudioOSTSliderCombo: SliderTextCombo | undefined
  nexusAudioSFXSliderCombo: SliderTextCombo | undefined
  setMalLastUpdate(date: any): void
  setAniListLastUpdate(date: any): void
  setKitsuLastUpdate(date: any): void
  hoverHandler(hover: any): void
  logout(): void
  updateMal(): void
  updateAniList(): void
  updateKitsu(): void
  updatePassword(): void
  showCPMWarning(msg: any, danger: any): void
  updateShareMal(): void
  updateShareScore(): void
  updateListInclusion(checkbox: any, name: any): void
  updateAutoSubmit(): void
  updateShowListNumber(): void
  updateAutoVoteSkipGuess(): void
  updateAutoVoteSkipReplay(): void
  updateDisableEmojis(): void
  updateAutoHideOpenings(): void
  updateAutoHideEndings(): void
  updateAutoHideInserts(): void
  updateAutoHideUnwatched(): void
  updateAutoHideHighRisk(): void
  updateDisableFloatingText(): void
  setParticleQuality(newValue: any): void
  particleQuality: any
  setAnimeListLinkId(newValue: any): void
  setUseRomajiNames(newValue: any): void
  setShowTeamAnswersState(newValue: any): void
  setAutoSwitchFavoritedAvatars(newValue: any): void
  setEqualizeSound(newValue: any): void
  setEqualizeMaxVolume(newValue: any): void
  selectTab(contentContainerId: any, tab: any): void
  setNexusMasterVolume(newValue: any): void
  setNexusMusicVolume(newValue: any): void
  setNexusSfxVolume(newValue: any): void
  getHostPriorityList(): any[]
  getHostResPrio(): any
  getListUsername(listId: any): any
  gotAnimeList(): boolean
}
declare function createHoverFunction(target: any, handler: any): void
declare var options: Options
declare function ServerStatusTable(serverStatuses: any): void
declare class ServerStatusTable {
  constructor(serverStatuses: any)
  $TABLE_BODY: JQuery<HTMLElement>
  _rowMap: {}
  _SERVER_STATE_CHANGE_LISTENER: Listener
}
declare function ServerStatusTableRow(name: any, online: any): void
declare class ServerStatusTableRow {
  constructor(name: any, online: any)
  name: any
  online: any
  $body: JQuery<HTMLElement>
  getStateText(): 'Offline' | 'Online'
  updateStateColor(): void
  updateOnline(online: any): void
}
declare const SERVER_STATUS_TEMPLATE: string
declare class BaseVoteContainer {
  constructor(
    $container: any,
    resultPackageName: any,
    resultCallback?: () => void
  )
  $VOTE_COTNAINER: any
  $BUTTON_CONTAINER: any
  $RESULT_TEXT: any
  $VOTE_YES_BUTTON: any
  $VOTE_NO_BUTTON: any
  timerBar: TimerBar
  _VOTE_RESULT_LISTNER: Listener
  startVote(
    defaultYes: any,
    disableVote: any,
    duration: any,
    timeAlreadyPlayed: any
  ): void
  openVote(): void
  closeVote(): void
  reset(): void
  buttonSelected($button: any): void
  vote(): void
  showResult(resultMessage: any): void
}
declare function AfkKicker(): void
declare class AfkKicker {
  afkTriggeredOldStatus: number | null
  _AFK_TIMEOUT_TIME: number
  _HOST_AFK_TIMEOUT_TIME: number
  SOLO_AFK_TIMEOUT: number
  PRIVATE_AFK_TIMEOUT: number
  AFK_STATUS_TIME: number
  setup(): void
  resetTimers(): void
  setupAfkTimeout(): void
  afkWarningTimeout: NodeJS.Timeout | undefined
  setupHostTimeout(soloGame: any, privateGame: any): void
  hostAfkWarningTimeout: NodeJS.Timeout | null | undefined
  clearHostTimeout(): void
  setInExpandLibrary(active: any): void
  setupAfkStatusTimeout(): void
  afkStatusTimeout: NodeJS.Timeout | undefined
}
declare let afkKicker: AfkKicker
declare function createAnimeSearchRegexQuery(query: any): any
declare const ANIME_REGEX_REPLACE_RULES: {
  input: string
  replace: string
}[]
declare class AvatarDisplayHandler {
  constructor($container: any)
  $container: any
  $avatarImage: JQuery<HTMLElement>
  $avatarSpine: JQuery<HTMLElement>
  imagePreload: PreloadImage | null
  spineAnimater: SpineAnimation | null
  setSizeMod(sizeModifier: any): void
  clearSizeMod(): void
  setImageSizeMod(sizeModValue: any): void
  setCustomClass(className: any): void
  displayLoading(): void
  removeCustomClass(className: any): void
  displayBackground(src: any): void
  clearBackground(): void
  displayAvatarImage(src: any, srcSet: any, preloadOptions?: {}): void
  displayAvatarImageInstant(src: any, srcSet: any): void
  displayAvatarAnimated(
    jsonSrc: any,
    atlasSrc: any,
    buildOnCreate: any,
    lazyLoadInfo: any,
    onloadCallback: any,
    optionActive: boolean | undefined,
    startPoseId: any,
    delayPoseChange: any
  ): void
  updateAvatarAnimatedPose(poseId: any): void
  load(): void
  loadSpine(): void
  lazyLoadEvent(): void
  cancel(): void
  clear(): void
  handleDetatched(): void
  handleDisplayed(): void
  handleRemoved(): void
  destroySpineAnimator(): void
  updateSizes(): void
  showOptionElement(): void
  hideOptionElement(): void
  hide(): void
  show(): void
  IMG_TEMPLATE: string
  SPINE_TEMPLATE: string
}
declare class AvatarHeadDisplayHandler extends AvatarDisplayHandler {}
declare class CDNFormater {
  CDN_URL: string
  AVATAR_URL: string
  BADGE_URL: string
  EMOTE_URL: string
  STORE_ICON_URL: string
  BACKGROUND_URL: string
  TICKET_URL: string
  ENEMY_URL: string
  BOSS_URL: string
  NEXUS_TILE_ICONS_URL: string
  NEXUS_DUNGEON_BACKGROUND_URL: string
  NEXUS_DUNGEON_OST_URL: string
  NEXUS_CITY_DAY_URL: string
  NEXUS_CITY_NIGHT_URL: string
  NEXUS_CITY_OST_URL: string
  NEXUS_ABILITY_ICON_URL: string
  NEXUS_ARTIFACT_ICON_URL: string
  NEXUS_RUNE_MOD_ICON_URL: string
  NEXUS_AVATAR_OVERLAYS: string
  NEXUS_SPRITE_SHEET_URL: string
  NEXUS_GENRE_ICON_URL: string
  NEXUS_SFX_URL: string
  NEXUS_BADGE_URL: string
  AVATAR_SIZES: number[]
  AVATAR_POSE_FILENAMES: {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
  }
  AVATAR_POSE_IDS: {
    BASE: number
    THINKING: number
    WAITING: number
    WRONG: number
    RIGHT: number
    CONFUSED: number
  }
  AVATAR_HEAD_SIZES: number[]
  AVATAR_HEAD_FILENAME: string
  AVATAR_ANIMINATED_JSON_FILENAME: string
  AVATAR_ANIMINATED_ATLAS_FILENAME: string
  ENEMY_SIZES: number[]
  ENEMY_POSE_FILENAMES: {
    1: string
    2: string
    3: string
    4: string
    5: string
  }
  ENEMY_POSE_IDS: {
    BASE: number
    CHARGING: number
    READY: number
    ATTACK: number
    DEFEATED: number
  }
  ENEMY_HEAD_SIZES: number[]
  ENEMY_HEAD_FILENAME: string
  BADGE_SIZES: number[]
  PATREON_PREVIEW_BADGE_FILENAME: string
  STORE_ICON_SIZES: number[]
  STORE_ICON_HEIGHT_WIDTH_MAP: {
    130: number
    150: number
    200: number
  }
  BACKGROUND_SIZES: number[]
  BACKGROUND_STORE_TILE_SIZE: number
  BACKGROUND_STORE_PREVIEW_SIZE: number
  BACKGROUND_ROOM_BROWSER_SIZE: number
  BACKGROUND_GAME_SIZE: number
  EMOTE_SIZES: number[]
  TICKET_SIZES: number[]
  TICKET_FILE_NAMES: {
    1: string
    2: string
    3: string
    4: string
  }
  RHYTHM_ICON_PATH: string
  NEXUS_TILE_ICON_SIZES: number[]
  NEXUS_DUNGEON_BACKGROUND_SIZES: number[]
  NEXUS_ABILITY_ICON_SIZES: number[]
  NEXUS_ARTIFACTS_ICON_SIZES: number[]
  NEXUS_RUNE_MOD_ICON_SIZES: number[]
  NEXUS_GENRE_ICON_SIZES: number[]
  NEXUS_BADGE_ICON_SIZES: number[]
  newAvatarSrc(
    avatar: any,
    outfit: any,
    option: any,
    optionOn: any,
    color: any,
    poseId: any
  ): string
  newAvatarSrcSet(
    avatar: any,
    outfit: any,
    option: any,
    optionOn: any,
    color: any,
    poseId: any
  ): string
  newAvatarHeadSrc(
    avatar: any,
    outfit: any,
    option: any,
    optionOn: any,
    color: any
  ): string
  newAvatarHeadSrcSet(
    avatar: any,
    outfit: any,
    option: any,
    optionOn: any,
    color: any
  ): string
  newAnimatedAvatarJsonSrc(avatar: any, outfit: any, useLarge: any): string
  newAnimatedAvatarAtlasSrc(avatar: any, outfit: any, useLarge: any): string
  newEnemySrc(enemyName: any, poseId: any): string
  newEnemySrcSet(enemyName: any, poseId: any): string
  newEnemyHeadSrc(enemyName: any): string
  newEnemyHeadSrcSet(enemyName: any): string
  newBossSrc(bossName: any, attackName: any, form: any, poseId: any): string
  newBossSrcSet(bossName: any, attackName: any, form: any, poseId: any): string
  newBossHeadSrc(bossName: any, form: any): string
  newBossHeadSrcSet(bossName: any, form: any): string
  newAvatarBackgroundSrc(fileName: any, size: any): string
  newBadgeSrc(fileName: any): string
  newBadgeSrcSet(fileName: any): string
  newStoreIconSrc(name: any): string
  newStoreIconSrcSet(name: any): string
  newStoreAvatarIconSrc(avatarName: any, outfitName: any): string
  newStoreAvatarIconSrcSet(avatarName: any, outfitName: any): string
  newEmoteSrc(emoteName: any): string
  newEmoteSmallSrc(emoteName: any): string
  newEmoteSrcSet(emoteName: any): string
  newTicketSrc(ticketTier: any): string
  newTicketSrcSet(ticketTier: any): string
  formatScoreIconOutfitName(name: any): any
  newNexusTileIconSrc(name: any): string
  newNexusDungeonBackgroundSrc(name: any): string
  newNexusDungeonOstSrc(name: any): string
  newNexusCityDaySrc(name: any): string
  newNexusCityNightSrc(name: any): string
  newNexusCityOstSrc(name: any): string
  newNexusAbilityIconSrc(name: any): string
  newNexusAbilityIconSrcSet(name: any): string
  newNexusArtifactIconSrc(name: any): string
  newNexusArtifactIconSrcSet(name: any): string
  newNexusRuneIconSrc(name: any): string
  newNexusRuneIconSrcSet(name: any): string
  newNexusGenreIconSrc(name: any): string
  newNexusGenreIconSrcSet(name: any): string
  newNexusAvatarOverlaySrc(name: any): string
  newNexusAvatarOverlaySrcSet(name: any): string
  newNexusBadgeSrc(level: any, size: any): string
  newNexusSpriteSheetSrc(name: any, size: any): string
  newNexusSfxSrc(name: any): string
  newSizePath(size: any): string
  buildUrl(...args: any[]): string
}
declare var cdnFormater: CDNFormater
declare class DragWindow {
  constructor($container: any, $dragTrigger: any)
  $container: any
  $dragTrigger: any
  $closeButton: any
  displayed: boolean
  mouseMoveListeners: any[]
  mouseUpListeners: any[]
  mouseDownListeners: any[]
  lastMouseX: any
  lastMouseY: any
  resizeObserver: ResizeObserver
  addMouseMoveListener(listener: any): void
  addMouseUpListener(listener: any): void
  addMouseDownListener(listener: any): void
  updatePositionOnDrag(pageX: any, pageY: any): void
  centerContainer(): void
  updateCurrentPosition(left: any, top: any): void
  handleSizeChanged(): void
  handleSizeReset(): void
  show(): void
  hide(): void
  fitWindowInsideContainer(): void
}
declare class DragWindowPercistence extends DragWindow {
  constructor($container: any, $dragTrigger: any, storageKey: any)
  $containerInner: any
  storageKey: any
  setupDone: boolean
  loadedSizeReset: boolean
  get positionKey(): string
  get sizeKey(): string
  loadPosition(): void
  loadSize(): void
  handleSizeChanged(width: any, height: any): void
  adjustPosition(): void
  CORNER_DOUBLE_CLICK_THRESHOLD: number
}
declare class EmoteSelector {
  emojiCache: EmoteSelectorCache
  emoteCache: EmoteSelectorCache
  emoteList: any[]
  setup(): void
  buildEmoteRegex(): void
  emoteRegex: RegExp | undefined
  handleKeypress($input: any): {
    word: any
    entries: any[]
  }
  getCurrentWord($input: any): any
  getEmojiMatches(currentWord: any): any[]
  getEmoteMatches(currentWord: any): any[]
  EMOJI_REGEX: RegExp
}
declare class EmoteSelectorCache {
  constructor(nameRetriver: any)
  currentCacheList: any[]
  cacheRegex: RegExp | null
  nameRetriver: any
  getInCache(word: any): boolean | null
  clearCache(): void
  setCache(word: any, list: any): void
  lookup(word: any): any[]
}
declare class EmoteSelectorInputWrapper {
  constructor($input: any, inputIdentifer: any, customClassName?: string)
  $input: any
  items: any[]
  counter: number
  displayed: boolean
  currentWord: any
  handleKeypress(): void
  display(): void
  hide(): void
  CUSTOM_KEY_HANDLER(e: any): void
}
declare var emoteSelector: EmoteSelector
declare class GraceHoverHandler {
  constructor(
    $element: any,
    openDelay: any,
    closeDelay: any,
    hoverHandler: any,
    leaveHandler: any
  )
  openDelay: any
  closeDelay: any
  hoverHandler: any
  leaveHandler: any
  $element: any
  displayed: boolean
  openTimeout: NodeJS.Timeout | null
  closeTimeout: NodeJS.Timeout | null
  triggered: boolean
  triggerDisplay(): void
  hide(): void
  destroy(): void
}
declare function IdTranslator(): void
declare class IdTranslator {
  tagNames: {}
  genreNames: {}
  setup(genresInfo: any, tagsInfo: any): void
}
declare var idTranslator: IdTranslator
declare class ImageBuffer {
  bufferCategoies: {
    nexusTileIcons: ImageBufferCategory
    nexusDungeonBG: ImageBufferCategory
    nexusCityDay: ImageBufferCategory
    nexusCityNight: ImageBufferCategory
    nexusDungeonSpriteMaps: ImageBufferCategory
  }
  setupImagesInBuffer(category: any, infoList: any): void
  setupImageInBuffer(category: any, name: any, src: any, triggerLoad: any): void
  loadCategory(category: any): void
  waitMultipleCategoryLoad(categoryList: any, callback: any): void
  waitCategoryLoad(category: any, callback: any): void
  waitBufferSpecficImages(category: any, nameList: any, callback: any): void
  getImage(category: any, name: any): any
  getImageBuffer(category: any, name: any): any
}
declare class ImageBufferCategory {
  imageMap: {}
  loaded: boolean
  loadFinishCallbacks: any[]
  addImg(name: any, src: any, forceLoad: any): void
  getImg(name: any): any
  getBufferedImg(name: any): any
  handelLoadFinished(): void
  startLoad(): void
}
declare class BufferedImage {
  constructor(src: any, onloadCallback: any)
  src: any
  onloadCallback: any
  loadStarted: boolean
  loadDone: boolean
  onLoadListeners: any[]
  load(): void
  img: HTMLImageElement | undefined
  bitmap: ImageBitmap | undefined
  retryDecode(): void
  executeLoadCallbacks(): void
  addLoadListener(callback: any): void
}
declare var imageBuffer: ImageBuffer
declare function ImagePreLoader(): void
declare class ImagePreLoader {
  loadImages(): void
}
declare var imagePreloader: ImagePreLoader
declare class LazyLoadHandler {
  constructor(
    $content: any,
    $lazyLoadContainer: any,
    strictLazy: any,
    $lazyOffsetParent: any,
    horiLasyLoad: any,
    delayLasyLoad: any,
    lasyLoadOffsetMod?: number,
    callback?: () => void
  )
  $content: any
  $lazyLoadContainer: any
  strictLazy: any
  $lazyOffsetParent: any
  horiLasyLoad: any
  lasyLoadOffsetMod: number
  callback: () => void
  lazyLoadCallback: () => void
  enableLazyLoadCheck(): void
  lazyLoadEvent(): void
  cancel(): void
}
declare function Listener(command: any, callback: any): void
declare class Listener {
  constructor(command: any, callback: any)
  command: any
  callback: any
  bound: boolean
  fire(payload: any): void
  bindListener(): void
  unbindListener(): void
}
declare function Particle(
  $container: any,
  startPoint: any,
  endPoint: any,
  diameter: any,
  ticks: any
): void
declare class Particle {
  constructor(
    $container: any,
    startPoint: any,
    endPoint: any,
    diameter: any,
    ticks: any
  )
  $container: any
  diameter: any
  startPoint: any
  path: {
    x: number
    y: number
  }[]
  step: number
  movementCompleted: boolean
  $particle: JQuery<HTMLElement>
  insert(): void
  update(): void
  delete(): void
  calculateAcceleration(startSpeed: any, distance: any, ticks: any): number
}
declare var particleTemplate: string
declare function ParticleAnimation(): void
declare class ParticleAnimation {
  particleTracks: any[]
  animationRunning: boolean
  addTrack(particleTrack: any): void
  clearTrack(): void
  startAnimation(): void
}
declare function ParticleTrack(
  $startElement: any,
  $endElement: any,
  startPointStrategy: any
): void
declare class ParticleTrack {
  constructor($startElement: any, $endElement: any, startPointStrategy: any)
  $startElement: any
  $endElement: any
  $particleContainer: JQuery<HTMLElement>
  particels: any[]
  activeParticles: any[]
  endEvent: () => void
  endEventFired: boolean
  startPointStrategy: any
  setEndEvent(event: any): void
  buildTrack(): void
  particleCount: number | undefined
  spawnTimeout: number | undefined
  spawnAnimation(): number | undefined
  spawnParticles(): void
  getSpawnTimeout(): number
  spawnNextParticle(): void
  tick(): boolean
}
declare namespace PARTICLE_SPAWN_STRATEGIES {
  function CIRCLE($spawnElement: any): {
    x: any
    y: any
  }
  function RECTANGLE_VERTICAL_EDGES($spawnElement: any): {
    x: any
    y: any
  }
}
declare function PopoutMessages(): void
declare class PopoutMessages {
  $restartMessageContainer: JQuery<HTMLElement>
  $popoutMessageContainer: JQuery<HTMLElement>
  DONATION_TEMPALTE: string
  STANDARD_TEMPLATE: string
  RANKRED_REWARD_TEMPLATE: string
  POPOUT_CLOSE_TIMEOUT: number
  POPOUT_CLOSE_TIME: number
  popoutMessageQueue: any[]
  closeRestartMessage(): void
  displayRestartMessage(msg: any, time: any): void
  restartAt: any
  restartCountdownInterval: NodeJS.Timer | undefined
  displayDonationMessage(donator: any, amount: any, target: any): void
  displayStandardMessage(header: any, message: any): void
  displayRankedRewardMessage(
    position: any,
    oldScore: any,
    oldRank: any,
    newScore: any,
    newRank: any,
    oldBadge: any,
    newBadge: any
  ): void
  displayPopoutMessage(htmlBody: any, force: any, onDisplay?: () => void): void
  popoutMessageCloseTimeout: NodeJS.Timeout | undefined
  closePopoutMessage(): void
}
declare var popoutMessages: PopoutMessages
declare class PreloadImage {
  constructor(
    $img: any,
    src: any,
    srcset: any,
    triggerLoad?: boolean,
    defaultSizes?: null,
    onloadCallback?: null,
    noPreload?: boolean,
    $lazyLoadContainer?: null,
    strictLazy?: boolean,
    $lazyOffsetParent?: null,
    horiLasyLoad?: boolean,
    delayLasyLoad?: boolean,
    lasyLoadOffsetMod?: number
  )
  $img: any
  src: any
  srcset: any
  defaultSizes: any
  onloadCallback: any
  loadStarted: boolean
  lazyLoadHandler: LazyLoadHandler | null
  load(): void
  img: HTMLImageElement | undefined
  enableLazyLoadCheck(): void
  lazyLoadEvent(): void
  cancel(): void
  SPINNER_IMAGE: HTMLImageElement
}
declare namespace PreloadImage {}
declare function getTime(): number
declare function htmlToElement(html: any): [string]
declare function format(str: any, ...args: any[]): any
declare function formatNoHtml(str: any, ...args: any[]): any
declare function displayMessage(
  title: any,
  msg: any,
  callback?: () => void,
  outsideDismiss?: boolean,
  disableSWAL?: boolean,
  confirmButtonText?: undefined
): any
declare function displayHtmlMessage(
  title: any,
  html: any,
  buttonText: any,
  callback: any
): any
declare function displayOption(
  title: any,
  msg: any,
  acceptMsg: any,
  declineMsg: any,
  callback: any,
  callbackCancel: any,
  outsideDismiss?: boolean
): any
declare function removeFromArray(array: any, element: any): void
declare function ChatValidator(): void
declare class ChatValidator {
  _MAX_CHAR_COUNT: number
  validateMsg(msg: any): boolean
}
declare function escapeHtml(string: any): string
declare function escapeRegExp(str: any): any
declare function capitalizeFirstLetter(string: any): any
declare function capitalizeMajorWords(string: any): string
declare function fitTextToContainer(
  $text: any,
  $container: any,
  baseFontSize: any,
  minimumSize: any
): void
declare function extractUrls(message: any): string[]
declare function passChatMessage(message: any, emojis: any, allowHtml: any): any
declare function popoutEmotesInMessage($message: any, containerId: any): void
declare function createEmotePopoverHtml(
  name: any,
  useSrcSet: any,
  originalSrc: any
): any
declare function getEmojiPath(emojiName: any): string
declare function getCustomEmojiPath(id: any): string
declare function createHoverablePopoverHandlers(
  $parent: any,
  playerName: any
): {
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick: () => void
}
declare function shuffleArray(array: any): any
declare function getVolumeAtMax(): boolean
declare function setOneCheckBoxAlwaysOn(
  checkboxList: any,
  alertMessage: any
): void
declare function convertDurationToCountdownString(duration: any): string
declare function formatCountdownNumber(value: any): string
declare function createBadgePopoverHtml(
  fileName: any,
  badgeName: any,
  badgeDescription: any
): any
declare function numberWithCommas(x: any): any
declare function equalizeVolume(baseVolume: any, sourceVolume: any): any
declare function clearAllPopovers(): void
declare function generateAnimeSiteUrl(siteIds: any, targetListId: any): string
declare function generateAnnUrl(annId: any): string
declare function generateAniListUrl(aniListId: any): string
declare function generateKitsuUrl(kitsuId: any): string
declare function generateMalUrl(malId: any): string
declare function convertTypeInfoToText(
  type: any,
  typeNumber: any
): string | undefined
declare function convertSecondsToTimeString(totalSeconds: any): string
declare function convertListStatusIdToName(
  statusId: any
):
  | 'Completed'
  | 'Watching'
  | 'On Hold'
  | 'Dropped'
  | 'Planning'
  | 'Looted'
  | undefined
declare function deepCompareObjects(objectOne: any, objectTwo: any): boolean
declare function webGlEnabled(): any
declare function isPowerOfTwo(value: any): any
declare var TICKET_TIER_RHYTHM_PRICES: {
  1: number
  2: number
  3: number
  4: number
}
declare var PAYPAL_ENV: string
declare let SWAL_ACTIVE: boolean
declare var chatValidator: ChatValidator
declare var selfName: any
declare var isGameAdmin: any
declare var isTopAdmin: any
declare var taxRate: any
declare var entityMap: {
  '&': string
  '<': string
  '>': string
  '"': string
  "'": string
  '/': string
  '`': string
  '=': string
}
declare const SERVICES_WORDS_TO_NOT_CAPITALIZE: RegExp
declare const URL_REGEX: RegExp
declare const EMOJI_TEMPLATE: string
declare const EMOTE_TEMPLATE: string
declare const EMOTE_POPOVER_TEMPLATE: string
declare const ANIMATED_EMOJI_HANDLE_REGEX: RegExp
declare const CUSTOM_EMOJI_BASE_PATH: '/emoji?id='
declare const BADGE_POPOVER_TEMPLATE: string
declare const EQUALIZE_BASE_MAX_VOLUME: -34
declare const EQUALIZE_VOLUME_CHANGE_PER_DB: number
declare namespace LIST_STATUS {
  let WATCHING: number
  let COMPLETED: number
  let ON_HOLD: number
  let DROPPED: number
  let PLANNING: number
  let LOOTED: number
}
declare var webGlEnabledCache: any
declare function Socket(): void
declare class Socket {
  _socket: any
  listners: {}
  _disconnected: boolean
  _attempReconect: boolean
  setup(): void
  addListerner(command: any, listner: any): void
  removeListener(command: any, listner: any): void
  sendCommand(content: any, responseHandler: any): void
  closeConnection(): void
}
declare var socket: Socket
declare class StandardButton {
  constructor($body: any, clickHandler: any)
  $body: any
  hide(): void
  show(): void
  disable(): void
  enable(): void
}
declare class TextCounter {
  constructor(
    $textContainer: any,
    speedMs: any,
    tickCallback: any,
    defaultValue?: number,
    finishedCallback?: null
  )
  $textContainer: any
  set currentValue(arg: any)
  get currentValue(): any
  targetValue: number
  speedMs: any
  tickCallback: any
  finishedCallback: any
  _currentValue: any
  get finished(): boolean
  countToValue(value: any): void
  currentInterval: any
  TICK_SPEED: number
}
declare class TickController {
  constructor(
    tickHandler: any,
    stopCheck?: () => boolean,
    stopHandler?: () => void
  )
  tickHandler: any
  stopCheck: () => boolean
  stopHandler: () => void
  running: boolean
  start(): void
  lastTickTime: number | undefined
  stop(): void
  tick(): void
}
declare class Timer {
  start(): void
  startTime: any
  getTimePassedMs(): number
}
declare class VideoPlayer {
  constructor($player: any)
  $player: any
  player: any
  videoVolume: number
  playOnReady: boolean
  reloadTried: boolean
  forcedMute: boolean
  _TIME_TO_BUFFER_BEFORE_READY: number
  get videoLength(): any
  startBufferMonitor(): void
  readyReported: boolean | undefined
  bufferMonitorInterval: NodeJS.Timer | undefined
  stopBufferMonitor(): void
  handleCanPlay(): void
  handleLoadMetaData(): void
  handleError(): void
  handleVideoReady(): void
  handleVideoFinishedBuffering(): void
  setVolume(newVolume: any): void
  updateVolume(baseVolume: any): void
  hide(): void
  show(): void
  setVideo(videoUrl: any): void
  currentVideoUrl: any
  getVideoVolume(): null
  playVideo(): void
  mute(): void
  unmute(): void
  replayVideo(): void
  pauseVideo(): void
  stopVideo(): void
  getVideoUrl(): any
}
declare function ViewChanger(): void
declare class ViewChanger {
  currentView: string
  _$loadingScreen: JQuery<HTMLElement>
  setup(): void
  __controllers:
    | {
        main: {
          openView: (callback: any) => void
          closeView: () => void
        }
        expandLibrary: ExpandLibrary
        roomBrowser: RoomBrowser
        lobby: Lobby
        quiz: Quiz
        battleRoyal: BattleRoyal
        cheatTestGame: CheatTestGame
        nexus: Nexus
      }
    | undefined
  changeView(newView: any, arg: any): void
  getCurrentView(): string
  hideLoadingScreen(): void
}
declare var viewChanger: ViewChanger
declare class SongHistoryGameEntry {
  constructor(
    {
      quizId,
      startTime,
      roomName,
      settingString,
    }: {
      quizId: any
      startTime: any
      roomName: any
      settingString: any
    },
    songLoad?: boolean,
    displayOnSong?: boolean
  )
  quizId: any
  startTime: any
  roomName: any
  songLoad: boolean
  settingString: any
  displayOnSong: boolean
  $body: JQuery<HTMLElement>
  $loadButton: JQuery<HTMLElement>
  $loadButtonText: JQuery<HTMLElement>
  $loadButtonLoadIcon: JQuery<HTMLElement>
  $songContainer: JQuery<HTMLElement>
  $downloadButton: JQuery<HTMLElement>
  $settingButton: JQuery<HTMLElement>
  songTable: SongHistoryTable
  get downloadJsonString(): string
  addSong(row: any): void
  triggerSongLoad(): void
  loadSongs(songInfoList: any): void
  switchToSongTable(): void
  handleColumnChange(activeColumns: any): void
  handleTargetNameChange(useRomanjiNames: any): void
  handleTargetListIdChange(targetListId: any): void
  updateSearchQuery(query: any): void
  TEMPLATE: string
}
declare class SongHistoryInfoWindow extends DragWindowPercistence {
  constructor()
  $englishTitle: JQuery<HTMLElement>
  $romajiTitle: JQuery<HTMLElement>
  $type: JQuery<HTMLElement>
  $name: JQuery<HTMLElement>
  $artist: JQuery<HTMLElement>
  $allWorkingTitlesContainer: JQuery<HTMLElement>
  $samplePoint: JQuery<HTMLElement>
  $difficulty: JQuery<HTMLElement>
  $animeType: JQuery<HTMLElement>
  $vintage: JQuery<HTMLElement>
  $animeRating: JQuery<HTMLElement>
  $genre: JQuery<HTMLElement>
  $tags: JQuery<HTMLElement>
  $video: JQuery<HTMLElement>
  $annId: JQuery<HTMLElement>
  $mal: JQuery<HTMLElement>
  $aniList: JQuery<HTMLElement>
  $kitsu: JQuery<HTMLElement>
  $guessesStatLine: JQuery<HTMLElement>
  $guessesContainer: JQuery<HTMLElement>
  $playerListsStatLine: JQuery<HTMLElement>
  $playerLIstsContainer: JQuery<HTMLElement>
  displayInfo(songHistoryInfo: any): void
  createAnimeNameList(altAnimeNames: any, altAnimeNamesAnswers: any): any[]
  ROW_ENTRY: string
}
declare var songHistoryInfoWindow: SongHistoryInfoWindow
declare class SongHistoryTable {
  constructor(hideHeader: any)
  $table: JQuery<HTMLElement>
  $tableBody: JQuery<HTMLElement>
  $headerRow: JQuery<HTMLElement>
  $headerNumber: JQuery<HTMLElement>
  $headerAnime: JQuery<HTMLElement>
  $headerAnnId: JQuery<HTMLElement>
  $headerType: JQuery<HTMLElement>
  $headerName: JQuery<HTMLElement>
  $headerArtist: JQuery<HTMLElement>
  $headerAnswer: JQuery<HTMLElement>
  $headerGuesses: JQuery<HTMLElement>
  $headerDifficulty: JQuery<HTMLElement>
  $headerSample: JQuery<HTMLElement>
  searchQuery: string
  activeColumns: {}
  rows: any[]
  addRow(songHistoryRow: any): void
  clearRows(): void
  setActiveColumns(activeColumns: any): void
  toggleColumn($column: any, active: any): void
  updateTargetName(useRomanjiNames: any): void
  updateTargetListId(targetListId: any): void
  updateSearchQuery(query: any): void
  updateActiveRows(): void
  TEMPLATE: string
}
declare class SongHistoryTab {
  constructor(
    $tab: any,
    tabSwitchHandler: any,
    $tableContainer: any,
    $noSongMessage: any,
    $optionContainer: any
  )
  $tab: any
  $tableContainer: any
  $noSongMessage: any
  $optionContainer: any
  selected: boolean
  selectTab(): void
  deselectTab(): void
  displayTable(): void
}
declare class SongHistoryGameTab extends SongHistoryTab {
  table: SongHistoryTable
  addSongRow(row: any): void
  addSongRows(rows: any): void
  clearSongRows(): void
  getSongRows(): any[]
  display(): void
  displayNoSongsMessage(): void
  handleColumnChange(activeColumns: any): void
  handleTargetNameChange(useRomanjiNames: any): void
  handleTargetListIdChange(targetListId: any): void
  updateSearchQuery(query: any): void
}
declare class SongHistoryGamesTab extends SongHistoryTab {
  $outerContainer: JQuery<HTMLElement>
  $gameContainer: JQuery<HTMLElement>
  gameMap: {}
  loadHistorySongsListener: Listener
  display(): void
  setupGames(games: any): void
  quizJoined(quizDescription: any, activeColumns: any, searchQuery: any): void
  addSongRow(songRow: any, quizDescription: any): void
  handleColumnChange(activeColumns: any): void
  handleTargetNameChange(useRomanjiNames: any): void
  handleTargetListIdChange(targetListId: any): void
  updateSearchQuery(query: any): void
  GAME_CONTAINER_OUTER_HTML: string
  GAME_CONTAINER_INNER_HTML: string
}
declare class SongHistoryOptionTab extends SongHistoryTab {
  constructor(
    $tab: any,
    tabSwitchHandler: any,
    $tableContainer: any,
    $noSongMessage: any,
    $optionContainer: any,
    columnChangeHandler: any,
    nameTargetChangeHandler: any,
    listTargetChangeHandler: any
  )
  $showNamesSlider: any
  $animeListSlider: any
  $animeColumnOption: any
  $annIdColumnOption: any
  $typeColumnOption: any
  $nameColumnOption: any
  $artistColumnOption: any
  $answerColumnOption: any
  $guessesColumnOption: any
  $difficultyColumnOption: any
  $sampleColumnOption: any
  get activeColumns(): {
    anime: any
    annId: any
    type: any
    name: any
    artist: any
    answer: any
    guesses: any
    difficulty: any
    sample: any
  }
  get useRomanjiNames(): any
  get targetListId(): any
  updateSettings(settings: any): void
  display(): void
}
declare class SongHistoryWindow extends DragWindowPercistence {
  constructor()
  $tableContainer: JQuery<HTMLElement>
  $noSongMessage: JQuery<HTMLElement>
  $optionContainer: JQuery<HTMLElement>
  $tabs: JQuery<HTMLElement>
  currentGameTab: SongHistoryGameTab
  lastGameTab: SongHistoryGameTab
  gamesTab: SongHistoryGamesTab
  optionTab: SongHistoryOptionTab
  searchController: SongHistorySearchController
  tabs: (SongHistoryOptionTab | SongHistoryGameTab | SongHistoryGamesTab)[]
  trigger(): void
  setup(songHistorySettings: any, quizHistory: any): void
  clearTabs(): void
  handleColumnChange(activeColumns: any): void
  handleTargetNameChange(useRomanjiNames: any): void
  handleDefaultNameTargetChanged(): void
  handleTargetListIdChange(targetListId: any): void
  handleDefaultListTargetChanged(): void
  handleSearchChange(): void
  addNewSong(songHistoryInfo: any, quizDescription: any): void
  quizFinished(): void
  quizJoined(quizDescription: any): void
}
declare class SongHistoryRow {
  constructor(songHistoryInfo: any, useRomanjiNames: any, targetListId: any)
  songInfo: any
  useRomanjiNames: any
  targetListId: any
  $body: JQuery<HTMLElement>
  columnValues: {
    number: any
    anime: any
    annId: any
    type: string | undefined
    name: any
    artist: any
    answer: any
    guesses: string
    sample: string
  }
  correctGuess: any
  wrongGuess: any
  $headerNumber: JQuery<HTMLElement>
  $headerAnime: JQuery<HTMLElement>
  $headerAnnId: JQuery<HTMLElement>
  $headerType: JQuery<HTMLElement>
  $headerName: JQuery<HTMLElement>
  $headerArtist: JQuery<HTMLElement>
  $headerAnswer: JQuery<HTMLElement>
  $headerGuesses: JQuery<HTMLElement>
  $headerDifficulty: JQuery<HTMLElement>
  $headerSample: JQuery<HTMLElement>
  $animeName: JQuery<HTMLElement>
  exportJsonObject: any
  get animeUrl(): string
  get annUrl(): string
  get annId(): any
  get animeName(): any
  get typeDescription(): string | undefined
  get songName(): any
  get artist(): any
  setActiveColumns(activeColumns: any): void
  toggleColumn($column: any, active: any): void
  updateTargetName(useRomanjiNames: any): void
  updateTargetListId(targetListId: any): void
  updateActive(searchQuery: any, activeColumns: any): void
  TEMPLATE: string
}
declare class SongHistorySearchController {
  constructor($container: any, handleSearchChange: any)
  $container: any
  $inputContainer: any
  $input: any
  get searchQuery(): any
}
declare var songHistoryWindow: SongHistoryWindow
declare class StoreAvatarColumn {
  $bottomColumn: JQuery<HTMLElement>
  $name: JQuery<HTMLElement>
  $avatarImage: JQuery<HTMLElement>
  $avatarImageContainer: JQuery<HTMLElement>
  $actionButton: JQuery<HTMLElement>
  $actionButtonMainContainer: JQuery<HTMLElement>
  $actionButtonText: JQuery<HTMLElement>
  $actionButtonPriceContainer: JQuery<HTMLElement>
  $actionButtonPriceText: JQuery<HTMLElement>
  $actionButtonPriceIcon: JQuery<HTMLElement>
  $actionButtonRhythmContainer: JQuery<HTMLElement>
  $actionButtonFavoriteContainer: JQuery<HTMLElement>
  $actionButtonTargetTrigger: JQuery<HTMLElement>
  $actionButtonFavoriteStarSelected: JQuery<HTMLElement>
  $actionButtonFavoriteStarUnselected: JQuery<HTMLElement>
  $swRightColumnActionButtonRhythmPrice: JQuery<HTMLElement>
  $worldName: JQuery<HTMLElement>
  $artistName: JQuery<HTMLElement>
  $editerName: JQuery<HTMLElement>
  $loreText: JQuery<HTMLElement>
  $avatarContainer: JQuery<HTMLElement>
  $extraInfoContainer: JQuery<HTMLElement>
  $backgroundButton: JQuery<HTMLElement>
  $bonusBadgeIconImage: JQuery<HTMLElement>
  avatarDisplayHandler: AvatarDisplayHandler
  animationLoaded: boolean
  poseButtonsByName: {
    BASE: JQuery<HTMLElement>
    THINKING: JQuery<HTMLElement>
    WRONG: JQuery<HTMLElement>
    RIGHT: JQuery<HTMLElement>
    WAITING: JQuery<HTMLElement>
    CONFUSED: JQuery<HTMLElement>
  }
  actionState: number
  targetButtonActive: boolean | null
  characterProgressBar: StoreColumnProgressBar
  avatarProgressBar: StoreColumnProgressBar
  toggleButton: ToggleButton
  displayResonanceTargetStepTwo(): void
  displayResonanceTargetStepThree(): void
  get avatarName(): any
  get totalNotePrice(): any
  get currentDescriptionPackage(): {
    avatar: {
      avatarId: any
      colorId: any
      optionActive: any
    }
    background: {
      avatarId: any
      colorId: any
    }
  }
  displayAvatar(avatarDescription: any, initialSetup: any): void
  currentAvatar: any
  displayBackground(backgroundDescription: any): void
  currentBackground: any
  newUnlock(): void
  updateActionButton(): void
  updateLayout(): void
  updateScroll(): void
  updateTextSize(): void
  setImagePose(poseName: any, initialSetup: any): void
  currentPose: any
  updateBackgroundMode(active: any): void
  updateFavoriteButton(on: any): void
  activeFavoriteId: any
  updateTargetButtonState(): void
  handleWindowClosed(): void
  handleWindowOpened(): void
  MIN_TIER_FOR_TARGET: number
  ACTION_STATES: {
    NONE: number
    USE: number
    UNLOCK: number
  }
  NOTE_ICON_SRC: string
  AVATAR_MOD_SIZE_SIZES: {
    0: string
    20: string
    51: string
  }
}
declare class StoreColumnProgressBar {
  constructor($bar: any, $endpoint: any)
  $bar: any
  $endpoint: any
  _progressPercent: number
  set progressPercent(arg: number)
  get progressPercent(): number
  updateProgress(newCount: any): void
}
declare class StoreCharacter {
  constructor(description: any, unlockedAvatars: any, mainContainer: any)
  characterId: any
  avatars: any[]
  previewTilesInited: boolean
  defaultAvatar: StoreAvatar
  topIcon: StoreTopIcon
  set open(arg: any)
  get $topIcon(): JQuery<HTMLElement> | undefined
  get width(): number
  set inFilter(arg: any)
  updateStatus(): void
  getAvatar(avatarId: any): any
  newUnlock(avatarId: any, colorId: any): void
  newLock(avatarId: any, colorId: any): void
  sortAvatars(): void
  loadAvatarTopIcons(): void
  intPreviewTiles(): void
  clearAvatarSelection(): void
  filterUpdate(newFilter: any): void
  DEFAULT_STORE_AVATAR_ICON_NAME: string
}
declare class StoreAvatar {
  constructor(
    description: any,
    unlockedColors: any,
    mainContainer: any,
    parentCharacter: any
  )
  parentCharacter: any
  avatarId: any
  outfitId: any
  avatarName: any
  outfitName: any
  optionName: any
  backgroundVert: any
  artist: any
  world: any
  lore: any
  badgeFileName: any
  badgeName: any
  sizeModifier: any
  legacy: any
  _inFilter: boolean
  notePrice: any
  realMoneyPrice: any
  patreonTierToUnlock: any
  active: any
  defaultAvatar: any
  exclusive: any
  ticketTier: any
  limited: any
  defaultColorName: any
  defaultColorId: any
  unlockedColors: any
  _unlocked: boolean
  gotSkins: boolean
  colorsLoaded: boolean
  colors: any[]
  colorMap: {}
  mainContainer: any
  src: string
  srcSet: string
  backgroundSrc: string
  tileLoaded: boolean
  tile: StorePreviewTile
  get colorCount(): number
  get unlockedColorCount(): number
  get backgroundUnlocked(): boolean
  get $content(): JQuery<HTMLElement>
  get sizeModifierClass(): string
  updateTextSize(): void
  get typeName(): 'Standard' | 'Unavailable' | 'Limited' | 'Exclusive'
  get completeName(): string
  set iconSelected(arg: any)
  set inFilter(arg: boolean)
  get inFilter(): boolean
  get colorUnlocked(): boolean
  set unlocked(arg: any)
  get unlocked(): any
  get $topIcon(): JQuery<HTMLElement>
  get characterId(): any
  handleRemoved(): void
  handleDisplayed(): void
  newUnlock(colorId: any): void
  newLock(colorId: any): void
  buildTopIconDomObject(): void
  topIcon: StoreTopIconSkin | undefined
  topIconImagePreloader: PreloadImage | undefined
  initPreviewTile(): void
  loadTopIcon(): void
  displayColors(): void
  sortColors(): void
  getColorUnlocked(colorId: any): any
  filterUpdate(newFilter: any): void
  updateStatus(): void
  AVATAR_ICON_TEMPLATE: string
}
declare class StoreColor {
  constructor(avatar: any, colorDescription: any, unlocked: any)
  avatar: any
  colorId: any
  name: any
  colorPrice: any
  defaultColor: any
  sizeModifier: any
  unique: any
  eventColor: any
  animated: any
  animatedHeadColorName: any
  editor: any
  _inFilter: boolean
  unlocked: boolean
  active: any
  limited: any
  exclusive: any
  ticketTier: any
  backgroundId: any
  backgroundVert: any
  jsonSrc: string | undefined
  atlasSrc: string | undefined
  src: string | undefined
  srcSet: string | undefined
  backgroundSrc: string
  tile: StoreAvatarTile
  get sizeModifierClass(): string
  get $content(): JQuery<HTMLElement>
  updateTextSize(): void
  get notePrice(): number
  get realMoneyPrice(): number
  get patreonTierToUnlock(): any
  get typeName():
    | 'Standard'
    | 'Unavailable'
    | 'Limited'
    | 'Exclusive'
    | 'Unique'
  get avatarId(): any
  get characterId(): any
  get fullDescription(): {
    colorId: any
    avatarId: any
    characterId: any
    active: any
    avatarName: any
    outfitName: any
    colorName: any
    backgroundVert: any
    colorActive: any
    editor: any
    optionName: any
    optionActive: boolean
    avatarNotePrice: any
    avatarRealMoneyPrice: any
    colorNotePrice: any
    defaultColor: any
    ticketTier: any
    avatarTicketTier: any
    sizeModifier: any
    sizeModifierClass: string
    animated: any
    jsonSrc: string | undefined
    atlasSrc: string | undefined
    animatedHeadColorName: any
  }
  get backgroundDescription(): {
    avatarName: any
    outfitName: any
    avatarId: any
    characterId: any
    colorId: any
    backgroundVert: any
  }
  set inFilter(arg: boolean)
  get inFilter(): boolean
  handleRemoved(): void
  handleDisplayed(): void
  avatarUnlocked(): void
  setUnlocked(): void
  setLocked(): void
  filterUpdate(newFilter: any): void
  getAvatarBaseSrcInfo(optionActive: any): {
    src: string
    srcSet: string
  }
}
declare class StoreEmoteController {
  constructor(emoteGroups: any, mainContainer: any, unlockedEmoteIds: any)
  $collapseButton: JQuery<HTMLElement>
  open: boolean
  collapseButton: ToggleButton
  _topIcon: StoreTopIcon
  groups: any
  emoteMap: {}
  emoteRegex: RegExp
  messageContainEmote(msg: any): boolean
  buildEmoteRegex(): RegExp
  getAllEmotes(): any[]
  getEmote(emoteId: any): any
  triggerLazyLoad(): void
  newUnlock(groupName: any, emoteId: any): void
  newLocked(groupName: any, emoteId: any): void
  get $topIcon(): JQuery<HTMLElement> | undefined
  TOP_ICON_NAME: string
}
declare class StoreEmoteGroup {
  constructor(groupInfo: any, mainContainer: any, unlockedEmoteIds: any)
  $group: JQuery<HTMLElement>
  $emoteContainer: JQuery<HTMLElement>
  orderNumber: any
  name: any
  imagesLoaded: boolean
  textSizeUpdated: boolean
  _open: boolean
  emotesLoaded: boolean
  emotes: any
  set open(arg: boolean)
  get open(): boolean
  get $content(): JQuery<HTMLElement>
  get offsetTop(): number
  initEmotes(): void
  loadImages(): void
  updateTextSize(): void
  newUnlock(emoteId: any): void
  newLocked(emoteId: any): void
  GROUP_TEMPLATE: string
}
declare class StoreEmote {
  constructor(emoteInfo: any, unlockedEmoteIds: any)
  id: any
  tier: any
  name: any
  unlocked: any
  src: string
  smallSrc: string
  srcSet: string
  tile: StoreEmoteTile
  loadImage(): void
  setUnlocked(): void
  setLocked(): void
  get description(): {
    emoteId: any
    tier: any
    name: any
    unlocked: any
    src: string
    smallSrc: string
    srcSet: string
  }
}
declare class StoreFavorites {
  constructor(mainContainer: any, favoriteAvatars: any)
  $switchStateContainer: JQuery<HTMLElement>
  $switchStateContainerStateText: JQuery<HTMLElement>
  $noFavoritesContainer: JQuery<HTMLElement>
  mainContainer: any
  _topIcon: StoreTopIcon
  open: boolean
  favoriteAvatars: any
  get $topIcon(): JQuery<HTMLElement> | undefined
  generateFavoriteEntryMocks(): any[]
  getFavoriteId(avatar: any, background: any): any
  newFavorite(favorite: any): void
  removeFavorite(favoriteId: any): void
  getActiveAvatarFavoriteIndex(): any
  toggleRandomFavoriteAvatar(): void
  toggleCycleFavoriteAvatar(): void
  toggleFavoritedAvatar(favoritedAvatar: any): void
  updateSwitchStateText(newText: any): void
  TOP_ICON_NAME: string
}
declare class StoreColorMock {
  constructor(avatarInfo: any, backgroundInfo: any)
  avatar: any
  avatarColor: any
  backgroundAvatar: any
  backgroundAvatarColor: any
  optionActive: any
  src: string
  srcSet: string
  backgroundSrc: string
  tile: StoreAvatarTile
  get $content(): JQuery<HTMLElement>
  get animated(): any
  get jsonSrc(): any
  get atlasSrc(): any
  get name(): any
  get typeName(): any
  get notePrice(): any
  get realMoneyPrice(): any
  get ticketTier(): any
  get patreonTierToUnlock(): any
  get backgroundDescription(): any
  get fullDescription(): any
  get unlocked(): any
  get sizeModifierClass(): any
  updateTextSize(): void
}
declare class StoreFilter {
  constructor($window: any)
  filters: {
    locked: StoreFilterEntry
    unlocked: StoreFilterEntry
    avaliable: StoreFilterEntry
    unavaliable: StoreFilterEntry
    limited: StoreFilterEntry
    unlimited: StoreFilterEntry
    premium: StoreFilterEntry
    standard: StoreFilterEntry
  }
  get currentFilter(): {}
}
declare class StoreFilterEntry {
  constructor($checkbox: any)
  $name: void
  $checkbox: any
  checked: boolean
}
declare class StoreMainContainer {
  constructor($window: any)
  $noSelectionContainer: any
  $mainContainer: any
  $ticketContainer: any
  mainScrollListeners: any[]
  contentChangeListeners: any[]
  currentContent: any[]
  _$activeContainer: any
  set $activeContainer(arg: any)
  get $activeContainer(): any
  displayContent(contentList: any): void
  appendMainContent(content: any): void
  displayTickets(): void
  clearSelection(): void
  addMainScrollListener(callback: any): void
  addContentChangeListener(callback: any): void
  updateScroll(): void
  fireScrollEvent(event: any): void
  fireContentChangeEvent(): void
  handleContentRemoved(): void
}
declare class StorePriceModal {
  $modal: JQuery<HTMLElement>
  $itemList: JQuery<HTMLElement>
  $totalList: JQuery<HTMLElement>
  $buyButton: JQuery<HTMLElement>
  $buySpinner: JQuery<HTMLElement>
  $clickBlocker: JQuery<HTMLElement>
  $closeButton: JQuery<HTMLElement>
  $paypalButton: JQuery<HTMLElement>
  $patreonButton: JQuery<HTMLElement>
  $payOptions: JQuery<HTMLElement>
  showAvatar(priceItems: any, avatarId: any, colorId: any): void
  paypalType: string | undefined
  paypalPackage:
    | {
        avatarId: any
        colorId: any
        ticketAmount?: undefined
        price?: undefined
      }
    | {
        ticketAmount: any
        price: any
        avatarId?: undefined
        colorId?: undefined
      }
    | undefined
  showEmote(priceItems: any, emoteId: any): void
  showTicket(
    priceItems: any,
    ticketAmount: any,
    price: any,
    taxPrice: any
  ): void
  itemsHaveRealMoneyPrice(priceItems: any): any
  displayPriceItems(priceItems: any, buyCallback: any, taxPrice: any): void
  currentNotePrice: number | undefined
  currentRhythmPrice: number | undefined
  transactionComplete(message?: string): void
  transactionFailed(error: any): void
  hide(): void
  startTransaction(): void
  transactionTimeout: NodeJS.Timeout | undefined
  enableClose(): void
  disableClose(): void
  ITEM_TEMPLATE: string
  TRANSACTION_TIMEOUT_TIME: number
  PAYPAL_TYPES: {
    AVATAR: string
    TICKETS: string
  }
}
declare let storePriceModal: StorePriceModal
declare class StoreResonanceSystem {
  $infoContainer: JQuery<HTMLElement>
  $mainInfoContainer: JQuery<HTMLElement>
  $buttonTargetText: JQuery<HTMLElement>
  $buttonBadgeContainer: JQuery<HTMLElement>
  $targetContainer: JQuery<HTMLElement>
  $avatarContainer: JQuery<HTMLElement>
  $avatarName: JQuery<HTMLElement>
  $noTargetContainer: JQuery<HTMLElement>
  $currentPoints: JQuery<HTMLElement>
  $targetPoints: JQuery<HTMLElement>
  $progressBar: JQuery<HTMLElement>
  avatarDisplayHandler: AvatarDisplayHandler
  gotTarget: boolean
  currentPoints: number
  targetAvatarId: any
  targetColorId: any
  targetBadgeId: any[]
  rollResultListener: Listener
  setupState(resonanceState: any): void
  setupTarget({
    avatarId,
    colorId,
    badges,
    badgeIds,
  }: {
    avatarId: any
    colorId: any
    badges: any
    badgeIds: any
  }): void
  displayNoTarget(): void
  displayResonanceState({
    resonancePoints,
    resonanceTarget,
  }: {
    resonancePoints: any
    resonanceTarget: any
  }): void
  checkRollWillLosePoints(rollAmount: any): boolean
  checkTargetInactive(): boolean
  checkRollTargetIsTarget(badgeId: any): boolean
  BADGE_TEMPLATE: string
  MAX_POINTS_WITHOUT_TARGET: number
}
declare class StoreTicketHistory {
  constructor(recentTicketRewards: any)
  $mainContainer: JQuery<HTMLElement>
  $innerContainer: JQuery<HTMLElement>
  $noRollsMessageContainer: JQuery<HTMLElement>
  historyEntries: any
  hide(): void
  show(): void
  addEntries(newEntries: any): void
  MAX_ELEMENTS: number
}
declare class StoreTicketHistoryEntry {
  constructor(
    {
      type,
      description,
      tier,
      rhythm,
    }: {
      type: any
      description: any
      tier: any
      rhythm: any
    },
    $container: any
  )
  loadTriggered: boolean
  $html: JQuery<HTMLElement>
  avatarDisplayHandler: AvatarDisplayHandler
  display(): void
  updateTextSize(): void
  detatch(): void
  destroy(): void
  ENTRY_TEMPLATE: string
  TARGET_FONT_SIZE: number
  MIN_FONT_SIZE: number
}
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
declare class StoreTicketRollSelector {
  constructor(
    $ticketOptionContainer: any,
    historyHandler: any,
    rollTargets: any,
    ticketPromoAvatar: any
  )
  $mainContainer: JQuery<HTMLElement>
  $selectContainer: JQuery<HTMLElement>
  $oneRollButton: JQuery<HTMLElement>
  $tenRollButton: JQuery<HTMLElement>
  $executeContainer: JQuery<HTMLElement>
  $executeButtonContainer: JQuery<HTMLElement>
  $executeCloseButton: JQuery<HTMLElement>
  $executeRollButton: JQuery<HTMLElement>
  $executeRollPrice: JQuery<HTMLElement>
  $innerResultContainer: JQuery<HTMLElement>
  $executeTicketImage: JQuery<HTMLElement>
  $swTicketAvatarLockingImage: JQuery<HTMLElement>
  $executionHideable: JQuery<HTMLElement>
  $ticketOptionContainer: any
  ticketPromo: StoreTicketPromo
  historyHandler: any
  targetSelector: StoreTickRollTargetSelector
  outsideRewardContainers: (
    | StoreOuterRewardContainer
    | StoreOuterMajorRewardContainer
  )[]
  insideRewardContainer: StoreInsdeRewardContainer
  animationController: StoreRollAnimationController
  rewardTimerTriggered: boolean
  rollResultListener: Listener
  rollErrorListener: Listener
  hide(): void
  show(): void
  resize(): void
  handleDisplayed(): void
  handleHidden(): void
  displayRollSelection(): void
  displayRollExecute(price: any): void
  activePrice: any
  triggerRoll(): void
  executeSingleRoll(): void
  executeTenRoll(): void
  executeReward(): void
  currentRewards: any
  showSingleResult(result: any): void
  showMultipleResults(results: any): void
  handleDisplayMultiRollTierResults(
    tierDistribution: any,
    currentIndex?: number
  ): void
  handleDisplayMultiRollTierEndResult(tierDistribution: any): void
  loadCenterImage(tier: any, callback: any): void
  ONE_ROLL_PRICE: number
  TEN_ROLL_PRICE: number
  DEFAULT_TIER: number
  ONE_ROLL_TOKEN_PRICE: number
  TEN_ROLL_TOKEN_PRICE: number
}
declare class StoreRollAnimationController {
  constructor(defaultTier: any)
  defaultTier: any
  innerController: StoreRollInnerAnimationController
  outerController: StoreRollOuterAnimationController
  running: boolean
  clear: boolean
  show(): void
  startAnimation(): void
  lastFrameTimestamp: number | undefined
  stopAnimation(): void
  runAnimation(): void
  resetAnimation(): void
  changeToRollStart(): void
  changeToRolLResult(tier: any): void
  changeColorTier(tier: any): void
  displayMultiTierEndResult(tiers: any): void
}
declare class StoreRollInnerAnimationController extends AnimationController {
  constructor(startColorTier: any)
  updateColorTier(tier: any): void
  updateMultiColorTiers(tiers: any): void
  toggleRollSpeed(on: any): void
  TIER_STATIC_COLORS: {
    1: RGB
    2: RGB
    3: RGB
    4: RGB
  }
  TIER_DYNAMIC_COLORS: {
    1: RGB
    2: RGB
    3: RGB
    4: RGB
  }
  ROLL_SPEED_PERCENT: number
}
declare class StoreInnerAnimationCanvas extends AnimationCanvasCenter {}
declare class StoreRollOuterAnimationController extends AnimationController {
  constructor(startColorTier: any)
  centerCircleShape: AnimationShapeCircle
  spawnDonutShape: AnimationShapeDonut
  updateColorTier(tier: any): void
  updateMultiColorTiers(tiers: any): void
  toggleRollSpeed(on: any): void
  toggleReverseDirection(on: any): void
  TIER_COLORS: {
    1: RGB
    2: RGB
    3: RGB
    4: RGB
  }
  ROLL_SPEED_PERCENT: number
}
declare class StoreOuterStaticAnimationCanvas extends AnimationCanvasCenter {
  constructor($canvas: any, $rewardCenter: any)
  $rewardCenter: any
}
declare class StoreOuterDynamicAnimationCanvas extends AnimationCanvasCenter {
  constructor(
    $canvas: any,
    $rewardCenter: any,
    targetCircleShape: any,
    spawnDonutShape: any
  )
  $rewardCenter: any
  targetCircleShape: any
  spawnDonutShape: any
}
declare class StoreOuterRewardContainer {
  constructor($container: any)
  $container: any
  $nameContainer: any
  $name: any
  $avatarContainer: any
  $ticketIcon: any
  $typeText: any
  $rhythmIcon: any
  avatarDisplayHandler: AvatarDisplayHandler
  rhythmReward: number
  get maxWidth(): number
  get maxHeight(): any
  set avatar(arg: any)
  set emote(arg: any)
  set ticketImageTier(arg: any)
  animationDone(): void
  setupResult(result: any): void
  resize(): void
  updateTextSize(): void
  toggleActive(on: any): void
  displayResult(tier: any): void
  reset(): void
  RIGHT_MARGIN_PERCENT: number
  TIER_COLORS: {
    1: RGB
    2: RGB
    3: RGB
    4: RGB
  }
  SIZE_MOD_SIZES: {
    0: string
    20: string
    51: string
  }
}
declare class StoreOuterMajorRewardContainer extends StoreOuterRewardContainer {
  get maxWidth(): any
}
declare class StoreInsdeRewardContainer extends StoreOuterRewardContainer {}
declare class StoreTickRollTargetSelector {
  constructor(rollTargets: any)
  $container: JQuery<HTMLElement>
  $mainSelector: JQuery<HTMLElement>
  $closeButton: JQuery<HTMLElement>
  $contentContainer: JQuery<HTMLElement>
  $targetImg: JQuery<HTMLElement>
  $targetName: JQuery<HTMLElement>
  $noTargetDisplay: JQuery<HTMLElement>
  $targetDisplay: JQuery<HTMLElement>
  rollTargets: any
  open(): void
  close(): void
  selectTarget(target: any): void
  currentTarget: any
  clearTarget(): void
}
declare class StoreTickRollTargetSelectorEntry {
  constructor(
    {
      id,
      name,
      fileName,
    }: {
      id: any
      name: any
      fileName: any
    },
    controller: any
  )
  id: any
  name: any
  $html: JQuery<HTMLElement>
  src: string
  srcSet: string
  imagePreloader: PreloadImage
  triggerLoadImage(): void
  TEMPLATE: string
}
declare class StoreTicketStoreController {
  constructor(saleInfo: any)
  $mainContainer: JQuery<HTMLElement>
  $contentContainer: JQuery<HTMLElement>
  entries: any[]
  hide(): void
  show(): void
  resize(): void
  ENTRY_VALUES: {
    price: number
    amount: number
    tokens: number
  }[]
}
declare class StoreTicketStoreEntry {
  constructor(amount: any, price: any, token: any, sale: any, saleInfo: any)
  $entry: JQuery<HTMLElement>
  $buyContainer: JQuery<HTMLElement>
  $buyText: JQuery<HTMLElement>
  $saleUnlocksLeft: JQuery<HTMLElement>
  $saleDaysLeft: JQuery<HTMLElement>
  saleUnlockListener: Listener | undefined
  updateSaleUnlockLeft(amount: any): void
  resize(): void
  TEMPLATE: string
}
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
declare class StoreTile {
  constructor(
    imgSrc: any,
    imgSrcset: any,
    backgroundSrc: any,
    name: any,
    tag: any,
    notePrice: any,
    realMoneyPrice: any,
    colorTicketTier: any,
    avatarTicketTier: any,
    patreonTierToUnlock: any,
    defaultImageSize: any,
    extraClasses?: any[],
    uniqueUnlock?: boolean,
    eventColor?: boolean,
    animated?: boolean,
    jsonSrc?: null,
    atlasSrc?: null
  )
  colorTicketTier: any
  onloadCallbacks: any[]
  buildTriggered: boolean
  buildTileFunction: () => void
  _$tile: JQuery<HTMLElement>
  get $tile(): JQuery<HTMLElement>
  get imagePreload(): AvatarDisplayHandler | undefined
  set storeFade(arg: any)
  setupBaseContent(backgroundSrc: any): void
  avatarDisplayHandler: AvatarDisplayHandler | undefined
  setupContent(
    imgSrc: any,
    imgSrcset: any,
    backgroundSrc: any,
    defaultImageSize: any
  ): void
  setupAnimatedContent(jsonSrc: any, atlasSrc: any, backgroundSrc: any): void
  handleRemoved(): void
  handleDisplayed(): void
  addOnloadCallback(callback: any): void
  updateTextSize(): void
  updateFirstRowString(newPriceString: any): void
  addUnlockedClass(): void
  removeUnlockedClass(): void
  turnOffSecondRow(): void
  TILE_TEMPLATE: string
  TARGET_FONT_SIZE: number
  MIN_FONT_SIZE: number
}
declare namespace STORE_TILE_SIZE_MOD_FORMATS {
  let sizeMod0: string
  let sizeMod20: string
  let sizeMod51: string
}
declare class StorePreviewTile extends StoreTile {
  constructor(storeAvatar: any)
}
declare class StoreAvatarTile extends StoreTile {
  constructor(storeColor: any)
}
declare class StoreEmoteTile extends StoreTile {
  constructor(storeEmote: any)
  get imagePreload(): PreloadImage | undefined
  _imagePreload: PreloadImage | undefined
}
declare class StoreTopBar {
  constructor(
    $parentWindow: any,
    designs: any,
    unlockedDesigns: any,
    mainContainer: any,
    emoteGroups: any,
    unlockedEmoteIds: any,
    favoriteAvatars: any,
    recentTicketRewards: any,
    rollTargets: any,
    saleInfo: any,
    ticketPromoAvatar: any
  )
  $topBarContentContainer: any
  $topBarContentContainerInner: any
  iconsLoaded: boolean
  characters: any[]
  avatarCharacterIdMap: {}
  tickets: StoreTickets
  emotes: StoreEmoteController
  favorites: StoreFavorites
  selectedCategory: any
  loadCharacters(designs: any, unlockedDesigns: any, mainContainer: any): void
  updateLayout(): void
  updateScrollContainerWidth(): void
  handleCategorySelected(character: any, selected: any): void
  clearAvatarSelection(): void
  closeAll(): void
  getCharacter(characterId: any): any
  getAvatar(avatarId: any): any
  filterUpdate(newFilter: any): void
  disable(): void
  enable(): void
  SCROLL_CORRECTION: number
  SCROLL_BAR_OFFSET: number
}
declare class BaseTopIcon {
  updateStatus(current: any, total: any): void
}
declare class StoreTopIcon extends BaseTopIcon {
  constructor(
    src: any,
    srcSet: any,
    callback: any,
    extraClasses?: any[],
    badgeSrc?: string,
    badgeSrcSet?: string
  )
  childCount: number
  closed: boolean
  active: boolean
  _open: boolean
  _selected: boolean
  set open(arg: boolean)
  get open(): boolean
  set selected(arg: boolean)
  get selected(): boolean
  get childContainerWidth(): number
  get width(): number
  set inFilter(arg: any)
  buildTopIconDomObject(
    src: any,
    srcSet: any,
    badgeSrc: any,
    badgeSrcSet: any,
    extraClasses: any
  ): void
  $topIcon: JQuery<HTMLElement> | undefined
  $childContainer: JQuery<HTMLElement> | undefined
  $iconImage: JQuery<HTMLElement> | undefined
  $childInnerContainer: JQuery<HTMLElement> | undefined
  $statusTotal: JQuery<HTMLElement> | undefined
  $stautsCurrent: JQuery<HTMLElement> | undefined
  $stautsTextContainer: JQuery<HTMLElement> | undefined
  $allUnlockedGlow: JQuery<HTMLElement> | undefined
  appendChildren(childList: any): void
  ICON_TEMPLATE: string
  CHILD_WIDTH: number
  ICON_WIDTH: number
}
declare class StoreTopIconSkin extends BaseTopIcon {
  constructor(badgeSrc: any, badgeSrcSet: any)
  $topIcon: JQuery<HTMLElement>
  $statusTotal: JQuery<HTMLElement>
  $stautsCurrent: JQuery<HTMLElement>
  $stautsTextContainer: JQuery<HTMLElement>
  $allUnlockedGlow: JQuery<HTMLElement>
  ICON_TEMPLATE: string
}
declare class StoreWindow {
  $window: JQuery<HTMLElement>
  $rhythmText: JQuery<HTMLElement>
  $avatarTokenText: JQuery<HTMLElement>
  $storeIconAvatarContainer: JQuery<HTMLElement>
  _open: boolean
  _rhythm: number
  _avatarTokens: number
  avatarIconDisplayHandler: AvatarHeadDisplayHandler | null
  unlockedEmoteIds: {}
  _inBackgroundMode: boolean
  useAvatarListener: Listener
  unlockListner: Listener
  lockListner: Listener
  emoteUnlockListner: Listener
  emoteLockedListner: Listener
  newFavoriteListener: Listener
  removeFavoriteListener: Listener
  setResonanceTargetListener: Listener
  set open(arg: boolean)
  get open(): boolean
  get activeAvatar(): any
  get activeBackground(): any
  set inBackgroundMode(arg: boolean)
  get inBackgroundMode(): boolean
  set rhythm(arg: number)
  get rhythm(): number
  set avatarTokens(arg: number)
  get avatarTokens(): number
  setup(
    defaultDesigns: any,
    unlockedDesigns: any,
    currentAvatar: any,
    characterUnlockCount: any,
    avatarUnlockCount: any,
    emoteGroups: any,
    rhythm: any,
    unlockedEmoteIds: any,
    favoriteAvatars: any,
    recentTicketRewards: any,
    avatarTokens: any,
    rollTargets: any,
    saleInfo: any,
    resonanceState: any,
    ticketPromoAvatar: any
  ): void
  characterUnlockCount: any
  avatarUnlockCount: any
  _activeAvatarBackground: any
  mainContainer: StoreMainContainer | undefined
  storeFilter: StoreFilter | undefined
  avatarColumn: StoreAvatarColumn | undefined
  resonanceSystem: StoreResonanceSystem | undefined
  topBar: StoreTopBar | undefined
  rhythmBubbleTextController: BubbleTextController | undefined
  avatarTokenBubbleTextController: BubbleTextController | undefined
  get gotResonanceTarget(): boolean
  checkRollWillLoseResonancePoints(rollAmount: any): boolean
  checkRollTargetIsResonaceTarget(badgeId: any): boolean
  checkResonanceTargetInactive(): boolean
  reset(): void
  show(): void
  showSkin(characterId: any, avatarId: any): void
  resize(): void
  hide(): void
  toggle(): void
  getAvatar(characterId: any, avatarId: any): any
  getAvatarFromAvatarId(avatarId: any): any
  filterChangeEvent(): void
  toggleBackgroundSelect(): void
  getAvatarBonusUnlocked(avatarId: any): any
  disableTopBar(): void
  enableTopBar(): void
  getAllEmotes(): any[]
  getEmote(emoteId: any): any
  setStoreIconAvatar(currentAvatar: any): void
  getFavoriteId(avatar: any, background: any): any
  handleAvatarSelected(avatarDescription: any, backgroundDescription: any): void
  messageContainEmote(msg: any): boolean
  getAllAvatars(): any[]
  showTicketStore(): void
  REQUIRED_COUNT_FOR_BONUS: number
}
declare var storeWindow: StoreWindow
declare class ToggleButton {
  constructor(
    $button: any,
    $text: any,
    onText: any,
    offText: any,
    callback?: () => void
  )
  $button: any
  $text: any
  onText: any
  offText: any
  _active: boolean
  set active(arg: boolean)
  get active(): boolean
  set disabled(arg: any)
}
declare function scrollToTop(): void
declare function disableTopInputs(): void
declare function enableTopInputs(): void
declare function triggerGuestCreation(): void
declare function login(): void
declare function recoverUsername(): void
declare function forgotPassword(): void
declare function resetPassword(): void
declare function registerAccount(): void
declare function resendVerification(): void
declare function registerCountry(): void
declare function displayAlreadyOnline(): void
declare function displayLogin(resetUrl: any): void
declare function displayRecoverEmail(): void
declare function displayForgotPassword(): void
declare function displayResetPassword(): void
declare function displayCreateAccount(): void
declare function displayVerifyEmail(email: any, username: any): void
declare function displayTempBanned(): void
declare function displayPermaBanned(): void
declare function displayGameBanned(): void
declare function displayMissingCountry(): void
declare function showLoginError(message: any): void
declare function showUsernameRecoveryMessage(message: any, alert: any): void
declare function showForgotPasswordRecoveryMessage(
  message: any,
  alert: any
): void
declare function showResetPasswordMessage(message: any, alert: any): void
declare function showRegisterMessage(message: any, alert: any): void
declare function showVerifyEmailMessage(message: any, alert: any): void
declare function checkIE(): boolean
declare function checkEdge(): boolean
//# sourceMappingURL=index.d.ts.map
