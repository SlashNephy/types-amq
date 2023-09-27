declare class SongHistoryWindow extends DragWindowPercistence {
  constructor()
  $tableContainer: JQuery<HTMLElement>
  $noSongMessage: JQuery<HTMLElement>
  $optionContainer: JQuery<HTMLElement>
  $tabs: JQuery<HTMLElement>
  currentGameTab: SongHistoryGameTab
  lastGameTab: SongHistoryGameTab
  gamesTab: SongHistoryGamesTab
  optionTab: SongHistoryOptionTab
  searchController: SongHistorySearchController
  tabs: (SongHistoryOptionTab | SongHistoryGameTab | SongHistoryGamesTab)[]
  trigger(): void
  setup(songHistorySettings: any, quizHistory: any): void
  clearTabs(): void
  handleColumnChange(activeColumns: any): void
  handleTargetNameChange(useRomanjiNames: any): void
  handleDefaultNameTargetChanged(): void
  handleTargetListIdChange(targetListId: any): void
  handleDefaultListTargetChanged(): void
  handleSearchChange(): void
  addNewSong(songHistoryInfo: any, quizDescription: any): void
  quizFinished(): void
  quizJoined(quizDescription: any): void
}
declare class SongHistoryRow {
  constructor(songHistoryInfo: any, useRomanjiNames: any, targetListId: any)
  songInfo: any
  useRomanjiNames: any
  targetListId: any
  $body: JQuery<HTMLElement>
  columnValues: {
    number: any
    anime: any
    annId: any
    type: string | undefined
    name: any
    artist: any
    answer: any
    guesses: string
    sample: string
  }
  correctGuess: any
  wrongGuess: any
  $headerNumber: JQuery<HTMLElement>
  $headerAnime: JQuery<HTMLElement>
  $headerAnnId: JQuery<HTMLElement>
  $headerType: JQuery<HTMLElement>
  $headerName: JQuery<HTMLElement>
  $headerArtist: JQuery<HTMLElement>
  $headerAnswer: JQuery<HTMLElement>
  $headerGuesses: JQuery<HTMLElement>
  $headerDifficulty: JQuery<HTMLElement>
  $headerSample: JQuery<HTMLElement>
  $animeName: JQuery<HTMLElement>
  exportJsonObject: any
  get animeUrl(): string
  get annUrl(): string
  get annId(): any
  get animeName(): any
  get typeDescription(): string | undefined
  get songName(): any
  get artist(): any
  setActiveColumns(activeColumns: any): void
  toggleColumn($column: any, active: any): void
  updateTargetName(useRomanjiNames: any): void
  updateTargetListId(targetListId: any): void
  updateActive(searchQuery: any, activeColumns: any): void
  TEMPLATE: string
}
declare class SongHistorySearchController {
  constructor($container: any, handleSearchChange: any)
  $container: any
  $inputContainer: any
  $input: any
  get searchQuery(): any
}
declare var songHistoryWindow: SongHistoryWindow
//# sourceMappingURL=songHistoryWindow.d.ts.map
