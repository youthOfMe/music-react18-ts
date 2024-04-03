export function getImageSize(imageUrl: string, width: number, height: number) {
  return imageUrl + `param=${width}x${height}`
}
