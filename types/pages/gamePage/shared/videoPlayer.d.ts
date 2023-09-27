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
//# sourceMappingURL=videoPlayer.d.ts.map
