declare class SongHistoryGameEntry {
  constructor(
    {
      quizId,
      startTime,
      roomName,
      settingString,
    }: {
      quizId: any
      startTime: any
      roomName: any
      settingString: any
    },
    songLoad?: boolean,
    displayOnSong?: boolean
  )
  quizId: any
  startTime: any
  roomName: any
  songLoad: boolean
  settingString: any
  displayOnSong: boolean
  $body: JQuery<HTMLElement>
  $loadButton: JQuery<HTMLElement>
  $loadButtonText: JQuery<HTMLElement>
  $loadButtonLoadIcon: JQuery<HTMLElement>
  $songContainer: JQuery<HTMLElement>
  $downloadButton: JQuery<HTMLElement>
  $settingButton: JQuery<HTMLElement>
  songTable: SongHistoryTable
  get downloadJsonString(): string
  addSong(row: any): void
  triggerSongLoad(): void
  loadSongs(songInfoList: any): void
  switchToSongTable(): void
  handleColumnChange(activeColumns: any): void
  handleTargetNameChange(useRomanjiNames: any): void
  handleTargetListIdChange(targetListId: any): void
  updateSearchQuery(query: any): void
  TEMPLATE: string
}
//# sourceMappingURL=songHistoryGameEntry.d.ts.map
