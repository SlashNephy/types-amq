declare function AmqAwesomeplete(input: any, o: any, scrollable: any): void
declare class AmqAwesomeplete {
  constructor(input: any, o: any, scrollable: any)
  searchId: number
  currentSubList: any
  letterLists: {}
  currentQuery: string
  $ul: JQuery<HTMLElement>
  item: (text: any, input: any, item_id: any) => any
  evaluate(): void
  index: number | undefined
  hide(): void
  goto(i: any): void
}
declare function Suggestion(data: any): void
declare class Suggestion {
  constructor(data: any)
  label: any
  value: any
  toString: () => string
  valueOf(): string
}
//# sourceMappingURL=amqAwesomeplete.d.ts.map