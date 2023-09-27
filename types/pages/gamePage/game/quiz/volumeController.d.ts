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
//# sourceMappingURL=volumeController.d.ts.map
