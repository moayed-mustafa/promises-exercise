console.log('Hello')

/**
 * Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number.
 *  (Make sure you get back JSON by including the json query key, specific to this API. Details.

Figure out how to get data on multiple numbers in a single request.
 Make that request and when you get the data back, put all of the number facts on the page.

Use the API to get 4 facts on your favorite number.
Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

(Note: You’ll need to make multiple requests for this.)
 */
let fav_no = 7
base_url = 'http://numbersapi.com/'
date_url = `http://numbersapi.com/${fav_no}/date`
math_url = `http://numbersapi.com/${fav_no}/math`
year_url = `http://numbersapi.com/${fav_no}/year`
let ul = document.getElementById('info')
let fav_ul = document.getElementById('fav_no_info')
let loop_start = 12;
let loop_end = 17;
let promise_list = []
    // my favorite number requests
    const pushPromises = (pro, list)=>{ list.push(pro)}

const favoriteNumber = () => {
    let p1 = axios.get(`${base_url}${fav_no}`)
    pushPromises(p1, promise_list)
    let p2 = axios.get(`${date_url}`)
    pushPromises(p2, promise_list)

    let p3 = axios.get(`${math_url}`)
    pushPromises(p3, promise_list)

    let p4 = axios.get(`${year_url}`)
    pushPromises(p4 , promise_list)

    return promise_list
}
console.log(promise_list)
Promise.all(favoriteNumber()).then(values => {
    console.log(values)
    displayData(values, fav_ul)
    emptyList(promise_list)
}).catch(err => console.log(err))
const emptyList=(list)=>{
    list = []
}
console.log(promise_list)

const specialNumber = (url, i) => {
        let res = axios.get(`${url}${i}`)
        return res
}


for (let i = loop_start; i < loop_end; i++){
    let p = specialNumber(base_url, i)
    pushPromises(p,promise_list)

}
console.log(promise_list)

Promise.all(promise_list).then(function (values) {
    displayData(values, ul)
}).catch(err => console.log(err))

function displayData(list, ul) {
    for (i of list) {
        let li = document.createElement('li')
        li.innerHTML = i.data
        ul.append(li)
    }
}