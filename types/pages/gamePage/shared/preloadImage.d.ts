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
//# sourceMappingURL=preloadImage.d.ts.map
