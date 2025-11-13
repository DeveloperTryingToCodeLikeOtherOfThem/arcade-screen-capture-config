/**
 * To blit the screen image with the scales x and y stretched to maximum of the screen size 
 * @param sx is the scale x size 
 * @param sy is the scale y size
*/
//% blockNamespace=sprites
//% blockId=sprites_capture_screen_blitted_screen_image 
//% block="screen image controlled size scale x %sx scale y %sy"
//% group=Scale
function captureScreenImageBySize(sx: number, sy: number) {
  pause(0); // for it to pause before captuing stuff currently now on the screen

  const createScreenCapturedImage = image.create(sx, sy);
  createScreenCapturedImage.blit(
      0, 0, sx, sy, // gets the scale of the image controlled
      screen,
      0, 0, screen.width, screen.height, // the stretch of the size to the total area screen width and height image screen data
  true, false);

  const drawImage = sprites.create(createScreenCapturedImage, -1);
  return drawImage;
}

interface Sprite {
    /**
     * @deprecated you can still use it but only for sprites not screen capture even though it can adjust size scale by factor too
     */
    setScale(value: number, anchor?: ScaleAnchor): void
}
