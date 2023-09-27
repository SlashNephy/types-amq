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
//# sourceMappingURL=spineAnimation.d.ts.map
