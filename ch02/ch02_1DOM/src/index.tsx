import React from 'react'
import ReactDOM from 'react-dom/client'

//*물리 DOM객체 사용 -> div와 형제 관계
let pPhysicalDOM = document.createElement('p')
pPhysicalDOM.innerText = 'Hello physical DOM world!'
document.body.appendChild(pPhysicalDOM)

//*가상 DOM객체 사용 -> div의 자식 관계
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const pVirtualDOM = React.createElement('p', null, 'Hello virtual DOM world!')
root.render(pVirtualDOM)
