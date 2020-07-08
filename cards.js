console.log('hello')

/**
 * Make a request to the Deck of Cards API to request a single card from a newly shuffled deck.
 *  Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”). ✔︎

Make a request to the deck of cards API to request a single card from a newly shuffled deck.
Once you have the card, make a request to the same API to get one more card from the same deck.

Once you have both cards, console.log the values and suits of both cards.

Build an HTML page that lets you draw cards from a deck.
When the page loads, go to the Deck of Cards API to create a new deck,
and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck
 */

const deck_url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
let cards = []
const shuffleDeck = (url) => {
     return axios.get(url)
}
// * Make a request to the Deck of Cards API to request a single card from a newly shuffled deck.
//  *  Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”). ✔︎
 let card = shuffleDeck(deck_url).then(data => {
    console.log(data.data.deck_id)
    return axios.get(`https://deckofcardsapi.com/api/deck/${data.data.deck_id}/draw/?count=1
    `)
 })
     .catch(err => console.log(err))

card.then(data => {
    let card_details = data.data.cards[0]
    console.log(data.config.url)
         console.log(card_details.suit, card_details.value)
     })

//  Make a request to the deck of cards API to request a single card from a newly shuffled deck.
//  Once you have the card, make a request to the same API to get one more card from the same deck. ✔︎
let twoCard = shuffleDeck(deck_url).then(data => {

    console.log(data.data.deck_id)
    axios.get(`https://deckofcardsapi.com/api/deck/${data.data.deck_id}/draw/?count=1
    `).then(data => {
        cards.push({'suit':data.data.cards[0].suit, 'value':data.data.cards[0].value})
        axios.get(data.config.url)
            .then(data => {
                axios.get(`https://deckofcardsapi.com/api/deck/${data.data.deck_id}/draw/?count=1`)
                    .then(data => {
                        cards.push({'suit':data.data.cards[0].suit, 'value':data.data.cards[0].value})
                    })

            })
    })
}).catch(err => console.log(err))

console.log(cards)


// Build an HTML page that lets you draw cards from a deck.
// When the page loads, go to the Deck of Cards API to create a new deck,
// and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck