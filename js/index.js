// Your code goes here
// Event #1: wheel
let header = document.querySelector('.intro p')
function colorValue(){
    return Math.floor(Math.random()*256)
}
function colorChange (event){
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    event.target.style.backgroundColor = randomColor
}
header.addEventListener('wheel', colorChange)

//Event #2: mouseover
let mainHeader = document.querySelector('.logo-heading')
const headerSize = (event) => {
    mainHeader.style.color = 'green'
    event.stopPropagation()
}
mainHeader.addEventListener('mouseover',headerSize)

//Event #3: click
let home = document.querySelector(".main-navigation")
const homeClick = () => {
    home.style.backgroundColor = "yellow"
}
home.addEventListener('click', homeClick)

// Event 4: mouseup
let goneContent = document.querySelector(".inverse-content .text-content h2")
const upMouse = () => {
    goneContent.textContent = 'You just got rid of this content!'
}
goneContent.addEventListener('mouseup',upMouse)

//Event 5: double click
let dblHead = document.querySelector('.intro h2')
const headDbl = () => {
    dblHead.style.backgroundColor = 'yellow'
}
dblHead.addEventListener('dblclick', headDbl)

// Event 6: Mouse Out
let copyright = document.querySelector('.footer')
const copyTextChange = () => {
    copyright.style.backgroundColor = 'green';
}
copyright.addEventListener('mouseout', copyTextChange)


//Event 7: Re-size
window.addEventListener('resize', function(){
    document.querySelector(".footer p").innerHTML = 'This is the new text in the footer if you chose to resize the browser window!'
});

//Event 8: KeyDown
let keyParagraph = document.createElement('p')
keyParagraph.textContent = "This is a new paragraph after your press any key down! Now release it to change the `Let's Go!` background to green!"
const spaceParagraph = () => {
    document.querySelector(".intro p").appendChild(keyParagraph)
}
document.addEventListener('keydown', spaceParagraph)

//Event 9: Key Up
let keyParagraph2 = document.querySelector('.text-content h2')   
//console.log(keyParagraph2)
const spaceParagraph2 = () => {
    keyParagraph2.style.backgroundColor = 'green'
}       
document.addEventListener('keyup', spaceParagraph2)

//Event 10: Focus
let changing = document.querySelectorAll(".content-pick .destination .btn")
//console.log(buttons)
const focusButtons = () => {
    changing.style.color = 'pink'
}
document.addEventListener('focusin', focusButtons)










