declare class QuizPlayer extends QuizCharacter {
  constructor(
    name: any,
    level: any,
    gamePlayerId: any,
    host: any,
    avatarInfo: any,
    points: any,
    avatarDisabled: any,
    lifeCountEnabled: any,
    maxLives: any,
    startPositionSlot: any,
    teamPlayer: any,
    teamNumber: any,
    hidden: any,
    slot: any,
    maxHp: any,
    currentHp: any,
    shield: any,
    abilityInfo: any,
    buffs: any,
    genreInfo: any,
    playerName: any,
    multiChoiceActive: any,
    poseId: any
  )
  _name: any
  level: any
  gamePlayerId: any
  _host: any
  avatarInfo: any
  points: any
  lifeCountEnabled: any
  _inGame: boolean
  isSelf: boolean
  startPositionSlot: any
  teamNumber: any
  hidden: any
  _slot: any
  targetIcons: any[]
  maxHp: any
  startHp: any
  startShield: any
  genreInfo: any
  avatarSlot: QuizAvatarSlot
  abilityIcon: QuizAbilityIcon | undefined
  particleAnimation: ParticleAnimation | undefined
  particleTrack: ParticleTrack | undefined
  set host(arg: any)
  get host(): any
  get slotElement(): QuizAvatarSlot
  set slot(arg: any)
  get slot(): any
  set name(arg: any)
  get name(): any
  set groupNumber(arg: number | undefined)
  get groupNumber(): number | undefined
  _groupNumber: number | undefined
  set inGame(arg: boolean)
  get inGame(): boolean
  set avatarPose(arg: any)
  set score(arg: any)
  set finalPosition(arg: any)
  set avatarDisabled(arg: any)
  get avatarDisabled(): any
  set answer(arg: any)
  get answer(): any
  set teamAnswer(arg: any)
  set unknownAnswerNumber(arg: any)
  set resultAnswerNumber(arg: any)
  set state(arg: any)
  updatePose(): void
  updateAnswerResult(answerResult: any): void
  fireRewardEvent(xpInfo: any, level: any, credits: any, tickets: any): void
  toggleTeamAnswerSharing(on: any): void
  initNexusContent(): void
  attackOrderIcon: QuizTargetAvatarIcon | undefined
  targetIcon: QuizTargetAvatarIcon | undefined
  swapIcon: QuizTargetAvatarIcon | undefined
  clearNexusContent(): void
  addTargetIcon(icon: any): void
  removeTargetIcon(icon: any): void
  updateTargetIcons(): void
  setNexusTurn(on: any): void
  displayDamage(
    newHp: any,
    newShield: any,
    damage: any,
    damageClasses: any,
    attackEffectSet: any,
    finishedCallback: any,
    displayZero: any
  ): void
  setSwapIcon(icon: any): void
  updateNexusState({ alive }: { alive: any }): void
  displayOverlay(
    src: any,
    srcet: any,
    scale: any,
    fadeIn: any,
    noShadow: any
  ): void
  clearOverlay(fadeOut: any): void
  setInFocus(on: any): void
  hideAllGenres(): void
  showGenres(genreIds: any, seasonId: any): void
}
//# sourceMappingURL=quizPlayer.d.ts.map