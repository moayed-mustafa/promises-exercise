

const deck_url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
let cards = []


const shuffleDeck = (url) => {
     return axios.get(url)
}
// * Make a request to the Deck of Cards API to request a single card from a newly shuffled deck.
//  *  Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”). ✔︎
let card = shuffleDeck(deck_url).then(data => {
    return axios.get(`https://deckofcardsapi.com/api/deck/${data.data.deck_id}/draw/?count=1
    `)
 })


card.then(data => {
    let btn = document.querySelector('.draw')
    console.log(btn)
    let card_details = data.data.cards[0]
    console.log(data.data.cards[0].value, data.data.cards[0].suit )


     }).catch(err => console.log(err))


//  Make a request to the deck of cards API to request a single card from a newly shuffled deck.
//  Once you have the card, make a request to the same API to get one more card from the same deck. ✔︎
//  I changed this to draw cards in one request
let twoCard = shuffleDeck(deck_url).then(data => {

    axios.get(`https://deckofcardsapi.com/api/deck/${data.data.deck_id}/draw/?count=2
    `).then(data => {
        console.log(data.data.cards)

    })
}).catch(err => console.log(err))



// Build an HTML page that lets you draw cards from a deck.
// When the page loads, go to the Deck of Cards API to create a new deck,
// and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck

let allDeck = shuffleDeck(deck_url).then(data => {
    return axios.get(`https://deckofcardsapi.com/api/deck/${data.data.deck_id}/draw/?count=52
    `)
 })
     .catch(err => console.log(err))

drawCard = allDeck.then(data => {
    let i = 0;
    let btn = document.querySelector('.draw')
    console.log(btn)
    let card_details = data.data.cards[0]
    btn.addEventListener('click', function () {
        console.log(data.data.cards)
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

const createImage = (href) => {
    // let cardImg= document.createElement('img')
    let cardImg= document.createElement('img')
    cardImg.setAttribute('src', href)
    div = document.querySelector('.imgs')
    div.append(cardImg)
}