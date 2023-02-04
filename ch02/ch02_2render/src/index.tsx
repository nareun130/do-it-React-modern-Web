import React from 'react'
import ReactDOM from 'react-dom/client'
import * as D from './data'

const CE = React.createElement
//*JSX을 사용하지 않은 구문
// const rootVirtualDOM = CE('ul',null,[
//   CE('li',null,[
//     CE('a',{href: 'http://www.google.com',target: '_blank'},[
//       CE('p',null,'go to google')
//     ])
//   ])
// ])

//*JSX를 사용한 구문
// const rootVirtualDOM = <ul>
//   <li>
//     <a href="http://www.google.com" target="_blank">
//       <p>go to Google</p>
//     </a>
//   </li>
// </ul>

//*배열을 사용한 JSX구문
// const children = [
//   <li>
//     <a href="http://www.google.com" target="_blank">
//       <p>go to Google</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://www.facebook.com" target="_blank">
//       <p>go to Facebook</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://www.twitter.com" target="_blank">
//       <p>go to Twitter</p>
//     </a>
//   </li>

// ]
// const rootVirtualDOM = <ul>{children}</ul>
//*컴포넌트 배열
// const children = [0, 1, 2].map((n: number) => <h3>Hello world!{n}</h3>)
// const rootVirtualDOM = <div>{children}</div>

//*가짜 데이터 배열 렌더링
const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
))
const rootVirtualDOM = <div>{children}</div>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)
