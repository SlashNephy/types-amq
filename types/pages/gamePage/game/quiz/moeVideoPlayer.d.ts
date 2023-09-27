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
//# sourceMappingURL=moeVideoPlayer.d.ts.map
