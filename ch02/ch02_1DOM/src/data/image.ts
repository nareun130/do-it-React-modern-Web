import * as U from './util'
//prettier-ignore
export const picsumUrl = (width: number, height: number): string=>
`https://picsum.photos/${width}/${height}` //^공유 사이트에서 이미지 얻기

export const randomImage = (
  w: number = 1000,//초깃값 설정
  h: number = 800,
  delta: number = 200
): string => picsumUrl(U.random(w, w + delta), U.random(h, h + delta))

export const randomAvatar = () => {
  const size = U.random(200, 400)//^width:200~400, height:400~600
  return picsumUrl(size, size)
}
