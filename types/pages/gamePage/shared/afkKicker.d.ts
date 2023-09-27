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
//# sourceMappingURL=afkKicker.d.ts.map
