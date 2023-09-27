declare class AvatarAnswerStatus {
  constructor($answerContainer: any)
  $statusContainer: any
  $listBar: any
  $typeText: any
  $scoreText: any
  $lootedText: any
  set status(arg: any)
  set score(arg: any)
  set looted(arg: any)
  hide(): void
  show(): void
  convertStatusToLetter(status: any): '' | 'P' | 'W' | 'C' | 'H' | 'D' | 'L'
  convertStatusToClass(
    status: any
  ): '' | 'watching' | 'completed' | 'hold' | 'dropped' | 'planning' | 'looted'
}
//# sourceMappingURL=avatarAnswerStatus.d.ts.map
