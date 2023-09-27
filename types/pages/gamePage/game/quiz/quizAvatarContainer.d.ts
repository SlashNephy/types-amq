declare class QuizAvatarContainer {
  $avatarRow: JQuery<HTMLElement>
  $avatarContainer: JQuery<HTMLElement>
  $enemyContainer: JQuery<HTMLElement>
  _$page: JQuery<HTMLElement>
  _$animeContainer: JQuery<HTMLElement>
  playerSlotMap: {}
  enemySlotMap: {}
  _groupSlotMap: {}
  _currentGroup: number
  delayUpdateRunning: boolean
  set currentGroup(arg: number)
  get currentGroup(): number
  set groupSlotMap(arg: any)
  setupAvatars(players: any, groupSlotMap: any): void
  setupEnemies(enemies: any): void
  replaceEnemies(enemies: any): void
  removeEnemy(enemyPosition: any): void
  spawnEnemies(enemies: any, fadeIn: any): void
  addLateJoinAvatars(players: any, groupSlotMap: any): void
  updateAvatarLayout(nexusLayout: any): void
  currentMaxWidth: number | undefined
  currentMaxHeight: number | undefined
  updateGroupSlotWithDelay(newMap: any, delayInMs: any): void
  updateCurrentGroup(): void
  reset(): void
  MAX_GROUP_SIZE: number
  MAX_ENEMY_COUNT: number
  NEXUS_MODE_CONTAINER_HEIGHT_REDUCTION: number
}
//# sourceMappingURL=quizAvatarContainer.d.ts.map
