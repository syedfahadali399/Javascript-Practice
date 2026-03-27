function add(langName) {
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(langName))
    document.querySelector(".parent").appendChild(li)
}

add("Sunday")

function change(langName) {
    let change = document.querySelector("li:nth-child(6)")
    let li = document.createElement("li")
    li.textContent = `${langName}`
    change.replaceWith(li)
}

change("Saturday")