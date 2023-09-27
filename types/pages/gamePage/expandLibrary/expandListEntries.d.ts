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
//# sourceMappingURL=expandListEntries.d.ts.map
