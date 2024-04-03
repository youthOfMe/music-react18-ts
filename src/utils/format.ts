export function getImageSize(imageUrl: string, width: number, height: number) {
  return imageUrl + `param=${width}x${height}`
}

export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}
