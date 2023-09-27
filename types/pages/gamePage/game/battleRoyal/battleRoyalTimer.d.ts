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
//# sourceMappingURL=battleRoyalTimer.d.ts.map
