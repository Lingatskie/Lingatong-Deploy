const leftdiv=(title,title2, para,para2, button1,button2,button3,button4)=>{
    let div =document.createElement("div")
    div.className ="ClassL"
    div.innerHTML =`<h1>${title}</h1>
    <h1>${title2}</h1>
    <p>${para}</p>
    <p>${para2}</p>
    <button>${button1}</button>
    <button>${button2}</button>
    <button>${button3}</button>
    <button>${button4}</button>`
    return div
}
export{leftdiv}