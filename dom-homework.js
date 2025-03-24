const myDiv = document.getElementById("myDiv")
const h1 = document.createElement('h1')
h1.textContent = "Welcome to DOM Homework"
myDiv.append(h1)
const para = document.createElement('p')
para.textContent = "This is your first DOM homework assignment"
myDiv.append(para)
const ulist = document.createElement('ul')
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
li1.textContent = "DOMScripting assignment"
li2.textContent = "DOMTimer assignment"
li3.textContent = "DOMObject assignment"
ulist.append(li1)
ulist.append(li2)
ulist.append(li3)
myDiv.append(ulist)
h1.setAttribute('class', 'highlight')
const body = document.body
const button = document.createElement('button')
button.textContent = "Add new list item"
body.append(button)
let linum = 0
button.addEventListener('click',  function (){
    linum += 1 
    const newli = document.createElement('li')
    newli.textContent = `New list item ${linum}`
    ulist.append(newli)
})

myDiv.addEventListener('click', function(){
    let randhex = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    let randcolor = `#${randhex}`
    myDiv.style.backgroundColor = randcolor
})