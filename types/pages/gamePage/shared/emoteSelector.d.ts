declare class EmoteSelector {
  emojiCache: EmoteSelectorCache
  emoteCache: EmoteSelectorCache
  emoteList: any[]
  setup(): void
  buildEmoteRegex(): void
  emoteRegex: RegExp | undefined
  handleKeypress($input: any): {
    word: any
    entries: any[]
  }
  getCurrentWord($input: any): any
  getEmojiMatches(currentWord: any): any[]
  getEmoteMatches(currentWord: any): any[]
  EMOJI_REGEX: RegExp
}
declare class EmoteSelectorCache {
  constructor(nameRetriver: any)
  currentCacheList: any[]
  cacheRegex: RegExp | null
  nameRetriver: any
  getInCache(word: any): boolean | null
  clearCache(): void
  setCache(word: any, list: any): void
  lookup(word: any): any[]
}
declare class EmoteSelectorInputWrapper {
  constructor($input: any, inputIdentifer: any, customClassName?: string)
  $input: any
  items: any[]
  counter: number
  displayed: boolean
  currentWord: any
  handleKeypress(): void
  display(): void
  hide(): void
  CUSTOM_KEY_HANDLER(e: any): void
}
declare var emoteSelector: EmoteSelector
//# sourceMappingURL=emoteSelector.d.ts.map
