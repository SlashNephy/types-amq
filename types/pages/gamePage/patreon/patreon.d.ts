declare function Patreon(): void
declare class Patreon {
  $modal: JQuery<HTMLElement>
  $content: JQuery<HTMLElement>
  linkedTemplate: string
  unlinkedTemplate: string
  backerLevel: number
  delinked: boolean
  setup(
    patreonId: any,
    backerLevel: any,
    badgeLevel: any,
    usersCustomEmojis: any,
    patreonBadgeInfo: any,
    desynced: any
  ): void
  _patreonChangeListner: Listener | undefined
  _desyncListener: Listener | undefined
  _emojiTab: EmojiPreviewTab | undefined
  updateModalContent(
    patreonId: any,
    backerLevel: any,
    badgeLevel: any,
    currentBadge: any,
    nextBadge: any,
    usersCustomEmojis: any,
    desynced: any
  ): void
  unlinkPatreon(): void
  updatePatreonInfo(): void
  triggerOAuth(relink: any): void
  getCustomEmojis(): any[]
  getCustomEmoji(emojiId: any): any
  msgContainsCustomEmoji(msg: any): boolean | null | undefined
  getEmojiFromName(name: any): any
  showModal(): void
  setDelinked(): void
}
declare var patreon: Patreon
//# sourceMappingURL=patreon.d.ts.map