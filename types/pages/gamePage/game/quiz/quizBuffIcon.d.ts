declare class QuizBuffIcon {
  constructor(
    name: any,
    description: any,
    fileName: any,
    duration: any,
    debuff: any,
    currentCharge: any
  )
  $body: JQuery<HTMLElement>
  $img: JQuery<HTMLElement>
  $duration: JQuery<HTMLElement>
  $chargeNumber: JQuery<HTMLElement>
  abilityHover: GraceHoverHandler
  remove(): void
  updateDuration(duration: any): void
  updateCharge(charge: any): void
  TEMPLATE: string
}
//# sourceMappingURL=quizBuffIcon.d.ts.map
