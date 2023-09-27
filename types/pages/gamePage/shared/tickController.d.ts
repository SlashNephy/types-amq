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
//# sourceMappingURL=tickController.d.ts.map
