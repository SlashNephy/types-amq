declare class AvatarDisplayHandler {
  constructor($container: any)
  $container: any
  $avatarImage: JQuery<HTMLElement>
  $avatarSpine: JQuery<HTMLElement>
  imagePreload: PreloadImage | null
  spineAnimater: SpineAnimation | null
  setSizeMod(sizeModifier: any): void
  clearSizeMod(): void
  setImageSizeMod(sizeModValue: any): void
  setCustomClass(className: any): void
  displayLoading(): void
  removeCustomClass(className: any): void
  displayBackground(src: any): void
  clearBackground(): void
  displayAvatarImage(src: any, srcSet: any, preloadOptions?: {}): void
  displayAvatarImageInstant(src: any, srcSet: any): void
  displayAvatarAnimated(
    jsonSrc: any,
    atlasSrc: any,
    buildOnCreate: any,
    lazyLoadInfo: any,
    onloadCallback: any,
    optionActive: boolean | undefined,
    startPoseId: any,
    delayPoseChange: any
  ): void
  updateAvatarAnimatedPose(poseId: any): void
  load(): void
  loadSpine(): void
  lazyLoadEvent(): void
  cancel(): void
  clear(): void
  handleDetatched(): void
  handleDisplayed(): void
  handleRemoved(): void
  destroySpineAnimator(): void
  updateSizes(): void
  showOptionElement(): void
  hideOptionElement(): void
  hide(): void
  show(): void
  IMG_TEMPLATE: string
  SPINE_TEMPLATE: string
}
declare class AvatarHeadDisplayHandler extends AvatarDisplayHandler {}
//# sourceMappingURL=avatarDisplayHandler.d.ts.map
