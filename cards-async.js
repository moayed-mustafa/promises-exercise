const deck_url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
let cards = []

// get one card
async function shuffleDeckAndGetOneCard(url) {
    await axios.get(url).then(async function (data) {
        await axios.get(`https://deckofcardsapi.com/api/deck/${data.data.deck_id}/draw/?count=1`)
            .then(data => {
                console.log(data.data.cards)

            })
     }).catch(err => console.log(err))
}

// get two card
async function shuffleDeckAndGetTwoCards(url) {
    await axios.get(url).then(async function (data) {
        await axios.get(`https://deckofcardsapi.com/api/deck/${data.data.deck_id}/draw/?count=2`)
            .then(data => {
                console.log(data.data.cards)

            })
     }).catch(err => console.log(err))
}


// draw cards from one deck
async function shuffleAndGetTheWholeDeck(url) {
    await axios.get(url).then(async function (data) {
        await axios.get(`https://deckofcardsapi.com/api/deck/${data.data.deck_id}/draw/?count=52`)
            .then(data => {
                let i = 0;
                    let btn = document.querySelector('.draw')
                    console.log(btn)
                    btn.addEventListener('click', function () {
                        if(i < data.data.cards.length) {
                            createImage(data.data.cards[i].image)
                        }
                        else {
                            console.log(i, 'now we are done!')

                        }
                        i++
                        console.log(i)
                    })

            })
     }).catch(err => console.log(err))

}

const createImage = (href) => {
    // let cardImg= document.createElement('img')
    let cardImg= document.createElement('img')
    cardImg.setAttribute('src', href)
    div = document.querySelector('.imgs')
    div.append(cardImg)
}


