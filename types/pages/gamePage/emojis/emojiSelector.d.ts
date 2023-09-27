declare class EmojiSelector {
  gameMenu: EmojiSelectorGameMenu | null
  nexusCoopMenu: EmojiSelectorMenu | null
  setup(recentEmotes: any): void
  buildEntries(): void
  buildRecent(): void
  open(): void
  close(): void
  insertRecentEmote(emoteId: any, emojiId: any, shortCode: any): void
  removeRecentEmoji(emojiId: any): void
  setLockInMode(on: any): void
  lockInEmoteInMsg(msg: any): void
}
declare class EmojiSelectorMenu {
  constructor(
    $container: any,
    $button: any,
    $inputContainer: any,
    selectionCallback: any
  )
  $mainContainer: any
  $container: any
  $button: any
  $inputContainer: any
  selectionCallback: any
  $allEmoteContainer: any
  $recentEmoteContainer: any
  isOpen: boolean
  entries: any[]
  recentEmotes: any[]
  MAX_NUMBER_OF_RECENT: number
  setup(recentEmotes: any): void
  setupRecent(recentEmotes: any): void
  insertRecentEmote(emoteId: any, emojiId: any, shortCode: any): void
  buildRecent(): void
  buildEntries(): void
  createEmoteEntry(emoteInfo: any, emoteId: any): EmojiSelectorEntry
  insertEmote(emoteInfo: any): void
  createEmojiEntry(emojiInfo: any, emojiId: any): EmojiSelectorEntry
  insertEmoji(emojiInfo: any): void
  createShortCodeEntry(shortcode: any): EmojiSelectorEntry | null
  removeRecentEmoji(emojiId: any): void
  open(): void
  close(): void
}
declare class EmojiSelectorGameMenu extends EmojiSelectorMenu {
  constructor(
    $container: any,
    $button: any,
    $input: any,
    selectionCallback: any,
    $lockInContainer: any
  )
  $lockInContainer: any
  setLockInMode(on: any): void
  lockInEmoteInMsg(msg: any): void
  clearLockedInEmote(): void
  setLockedInEmote($emote: any): void
}
declare class EmojiSelectorEntry {
  constructor(
    name: any,
    src: any,
    srcSet: any,
    locked: any,
    $container: any,
    emoteId: any,
    emojiId: any,
    shortCode: any,
    callback: any
  )
  name: any
  emoteId: any
  emojiId: any
  shortCode: any
  $entry: JQuery<HTMLElement>
  preLoadImage: PreloadImage
  TEMPLATE: string
}
declare var emojiSelector: EmojiSelector
//# sourceMappingURL=emojiSelector.d.ts.map
