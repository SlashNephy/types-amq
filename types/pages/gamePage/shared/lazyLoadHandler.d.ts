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
//# sourceMappingURL=lazyLoadHandler.d.ts.map
