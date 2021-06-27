function getImg(pageNum){
    const promis = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNum}&count=1`)
    return promis.then((res) => {
        return res.data
    })
}
function getTask(){
    const promis = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=1`)
    return promis.then((response) => {
        return response.data
    })
}
function createTask(title){
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks?widgetId=1&title=${title}`)
    return promise.then((response) => {
        return response.data
    })
}