declare class QuizEnemy extends QuizCharacter {
  enemyPosition: any
  hp: any
  shield: any
  maxHp: any
  staticEnemy: any
  enemySlot: QuizEnemySlot
  targetIcon: QuizEnemyTargetIcon | null
  get slotElement(): QuizEnemySlot
  get slot(): any
  createSlot(enemyInfo: any): QuizEnemySlot
  createTargetIcon(enemyInfo: any): QuizEnemyTargetIcon | null
  initPose(enemyInfo: any): void
  updatePose(): void
  addTargetIcon(icon: any): void
  displayDamage(
    newHp: any,
    newShield: any,
    damage: any,
    damageClasses: any,
    attackEffectSet: any,
    finishedCallback: any,
    displayZero: any
  ): void
  updateState({
    attackTimer,
    poseId,
    defeated,
  }: {
    attackTimer: any
    poseId: any
    defeated: any
  }): void
  displayDefeated(): void
  setAvatarTarget(avatar: any): void
  updateAttackTimer(timeLeft: any): void
  displayOverlay(
    src: any,
    srcet: any,
    scale: any,
    fadeIn: any,
    noShadow: any
  ): void
  clearOverlay(fadeOut: any): void
}
//# sourceMappingURL=quizEnemy.d.ts.map
