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
base_url = 'http://numbersapi.com/'
let ul = document.getElementById('info')
    let promise_list = []
const specialNumber = (url, i) => {
        let res = axios.get(`${url}${i}`)
        return res


}


for (let i = 0; i < 5; i++){
    let p = specialNumber(base_url, i)
    promise_list.push(p)

}
console.log(promise_list)
Promise.all(promise_list).then(function (values) {

    displayData(values)

})

function displayData(list) {
    for (i of list) {
        console.log(i.data)
        let li = document.createElement('li')
        li.innerHTML = i.data
        ul.append(li)
    }
}