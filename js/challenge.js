document.addEventListener("DOMContentLoaded", () => {
   const counter = document.getElementById("counter") 
function increaseCounter() {
    return counter.innerText = parseInt(counter.innerText) + 1
}
    let interval = setInterval(increaseCounter, 1000)
})

// function increaseCounter() {
//     return counter.innerText = parseInt(counter.innerText) + 1
// }

// function increaseEverySecond(counter) {
//      window.setInterval(() => {
//         return increaseCounter(counter)
//     }, 1000)
// }