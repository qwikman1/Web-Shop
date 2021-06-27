const resultBlock = document.querySelector("#result")
const pageNumberEl = document.querySelector("#page-number")
const clickMeButton = document.querySelector("#click-me")
const getTasksButton = document.querySelector("#get-tasks")

clickMeButton.addEventListener("click", () => {
    getImg(pageNumberEl.value).then((data) => onDataReceived(data));
})

getTasksButton.addEventListener("click", () => {
    getTask().then((data) => onDataReceived(data));
})
createTask("learn Js").then((data =>
{
    debugger;
    console.log(data)
}))

function onTasksReceived(tasks) {
    tasks.forEach(el => {
        const  li = document.createElement('li')
        li.innerHTML = el
        document.querySelector('#tasks-result').appendChild(li)
    })
}

function onDataReceived(data) {
    data.forEach(el => {
        const  img = document.createElement('img')
        img.src = el.original
        document.querySelector('body').appendChild(img)
    })
}


