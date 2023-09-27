declare class QuizTargetIcon {
  constructor(entryInfo: any)
  $body: JQuery<HTMLElement>
  iconImageHandler: AvatarHeadDisplayHandler
  setupImage(entryInfo: any): void
  createSrc(): void
  createSrcSet(): void
  detach(): void
  handleAttached(): void
  destroy(): void
  showFade(): void
  hideFade(): void
  TEMPLATE: string
}
declare class QuizTargetAvatarIcon extends QuizTargetIcon {
  $swapIcon: JQuery<HTMLElement>
  createSrc(avatarInfo: any): string
  createSrcSet(avatarInfo: any): string
  showSwapIcon(): void
  hideSwapIcon(): void
}
declare class QuizEnemyTargetIcon extends QuizTargetIcon {
  constructor(enemyInfo: any, turnsToAttck: any, position: any)
  $counter: JQuery<HTMLElement>
  set attackCounter(arg: any)
  get attackCounter(): any
  createSrc(enemyName: any): string
  createSrcSet(enemyName: any): string
  _attackCounter: any
}
declare class QuizBossTargetIcon extends QuizEnemyTargetIcon {
  constructor(bossName: any, turnsToAttck: any, position: any, headForm: any)
  createSrc({ name, headForm }: { name: any; headForm: any }): string
  createSrcSet({ name, headForm }: { name: any; headForm: any }): string
}
//# sourceMappingURL=quizTargetIcon.d.ts.map
