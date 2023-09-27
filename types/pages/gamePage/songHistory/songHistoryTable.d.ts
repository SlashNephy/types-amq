declare class SongHistoryTable {
  constructor(hideHeader: any)
  $table: JQuery<HTMLElement>
  $tableBody: JQuery<HTMLElement>
  $headerRow: JQuery<HTMLElement>
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
  searchQuery: string
  activeColumns: {}
  rows: any[]
  addRow(songHistoryRow: any): void
  clearRows(): void
  setActiveColumns(activeColumns: any): void
  toggleColumn($column: any, active: any): void
  updateTargetName(useRomanjiNames: any): void
  updateTargetListId(targetListId: any): void
  updateSearchQuery(query: any): void
  updateActiveRows(): void
  TEMPLATE: string
}
//# sourceMappingURL=songHistoryTable.d.ts.map
