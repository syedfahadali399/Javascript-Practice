// attachEvent()
// jQuery - onEvent

// Learning 
// 1.type 2.timestamp 3. defaultprevented
// 4.target 5.toElement 6.srcElement 7.currentTarget
// 8.clientX 9.clientY 10.screenX 11.screenY
// 12.altKey 13.ctrlKey 14.shiftKey 15.keyCode

// document.getElementById("classes").addEventListener("click", (e) => {
//     console.log("whole class is clicked");
    
// }, false)

// document.getElementById("owl").addEventListener("click", (e) => {
//     e.stopPropagation()
//     // its is use for stop click event that occur from its parent
//     console.log("Owl is clicked");
// }, false)

// // false is set in eventlistner and its is use for bubbling and it show bottom to top
// // true is use for capturing and show top to bottom

// document.getElementById("google").addEventListener("click", (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     console.log("google Clicked");
//     // its is use for disabled the btn action
// })

document.querySelector('#classes').addEventListener("click", function(e) {
    e.stopPropagation()
    console.log(e.target.parentNode);
    // let removeImg = e.target.parentNode
    if(e.target.tagName === "IMG") {
        let removeImg = e.target.parentNode
        removeImg.remove()
    }
    // removeImg.parentNode.removeChild(removeImg)
})