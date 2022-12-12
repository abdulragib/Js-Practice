// console.log("hello world")
// let name=document.getElementById('title')

// console.log(name.innerText)
// title.innerText="GoodBye my friend"
// console.log(name.innerText)

// name.style.color='red'

// let red=document.getElementById('red')
// let green=document.getElementById('green')
// let blue=document.getElementById('blue')

// red.onclick= () => console.log("red")
// green.onclick= () => console.log("green")
// blue.onclick= () => console.log("blue")

let squares=document.querySelectorAll('#colorSquare')
console.log(squares)
let colors={'red':0, 'green':0, 'blue':0}

squares.forEach((box) =>{
  console.log(box.value)
  box.onclick = () => {
    colors[box.value] +=1
    box.innerText=colors[box.value]
  }
})

let clear = document.getElementById('clear-game')

function clearScore(){
  colors.red=0,
  colors.green=0,
  colors.blue=0,
  squares.forEach((box) => box.innerText='')
}

clear.onclick = () => clearScore()




