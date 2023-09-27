declare namespace NEXUS_EVENTS {
  let DAMAGE: string
  let ENEMY_STATE: string
  let ENEMY_TARGET: string
  let SWAP_TARGET: string
  let NEW_TURN_AVATAR: string
  let SWAP_AVATARS: string
  let PLAYER_TARGET: string
  let AVATAR_STATE: string
  let PRE_PLAY: string
  let ABILITY_ENABLED_CHANGE: string
  let ANIME_NAME_HINT: string
  let ABILITY_COOLDOWN_CHANGE: string
  let NEW_BUFF: string
  let BUFF_UPDATE: string
  let BUFF_END: string
  let HP_CHANGE: string
  let DISPLAY_AVATAR_OVERLAY: string
  let REMOVE_AVATAR_OVERLAY: string
  let DISABLED_ACTION: string
  let QUEUE_EVENT: string
  let DELAY_EVENT: string
  let HEAL_EVENT: string
  let FLASH_ICON: string
  let SHIELD_UPDATE: string
  let HIDE_GENRE: string
  let SHOW_GENRE: string
  let SONG_INFO_HINT: string
  let PLAY_SFX: string
  let COMABT_TUTORIAL: string
  let SET_CLONE_EFFECT: string
  let REMOVE_CLONE_EFFECT: string
  let IGNORE_EVENT: string
  let PLAY_ATTACK_EFFECT_SET: string
  let REPLACE_ENEMIES: string
  let SPAWN_ENEMIES: string
  let DESPAWN_ENEMY: string
  let SET_EFFECT_CLASS: string
  let RIKU_ABILITY_ACTIVATE: string
}
declare namespace NEXUS_RUNE_TYPES {
  let STANDARD: number
  let ADVANCED: number
}
declare namespace NEXUS_RUNE_CATEGORIES {
  let OFFENSIVE: number
  let DEFENSIVE: number
  let HYBRID: number
}
declare namespace NEXUS_RUNE_LEVELS {
  let MINOR: number
  let LESSER: number
  let GREATOR: number
  let MAJOR: number
  let SUPERIOR: number
}
declare namespace NEXUS_HIT_EFFECT_IDS {
  let SHAKE: number
  let PUSH: number
  let PUSH_ONE_WAY: number
}
declare namespace NEXUS_DUNGEON_TYPE_IDS {
  let STANDARD_1: number
  export { STANDARD_1 as STANDARD }
  export let ENDLESS: number
}
declare class Nexus {
  $view: JQuery<HTMLElement>
  $loadingScreen: JQuery<HTMLElement>
  _nexusMapInitListener: Listener
  get inNexusLobby(): boolean
  get inCoopLobby(): boolean
  get inNexusGame(): boolean
  setup(statBaseMax: any, nexusBuffs: any): void
  mapController: NexusMapController | undefined
  cityController: NexusCity | undefined
  statBaseMax: any
  changeToDungeon(): void
  changeToNexus(): void
  openView(callback: any, arg: any): void
  closeView(args: any): void
  displayLoading(): void
  hideLoading(): void
  getNexusFloorDescription(floor: any): any
  FLOOR_DESCRIPTIONS: {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
    7: string
    8: string
    9: string
    10: string
    11: string
    12: string
    13: string
    14: string
    15: string
    16: string
    17: string
    18: string
    19: string
    20: string
    21: string
    22: string
    23: string
    24: string
    25: string
  }
}
declare var nexus: Nexus
//# sourceMappingURL=nexus.d.ts.map
