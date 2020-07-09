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

async function  favoriteNumber() {
    let p1 =  axios.get(`${base_url}${fav_no}`)
    let p2 =  axios.get(`${date_url}`)

    let p3 =  axios.get(`${math_url}`)

    let p4 = axios.get(`${year_url}`)
    let promise1 = await p1
    displayData(promise1, ul)
    let promise2 = await p2
    displayData(promise2, ul)
    let promise3 = await p3
    displayData(promise3, ul)
    let promise4 = await p4
    displayData(promise4, ul)


    // return promise_list
}

favoriteNumber()


function emptyList(list){
    list = []
    console.log(list)
}



function displayData(data, ul) {
        let li = document.createElement('li')
        li.innerHTML = data.data
        ul.append(li)
}



async  function  specialNumber(url){
    for (let i = loop_start; i < loop_end; i++){
        let p = await axios.get(`${url}${i}`)
    displayData(p, ul)
    }
}
specialNumber(base_url)


