const CurrentUser = require("./Users");

const Players = [
    { Name: 'Bernie', Score: 0, isDealer: false }
];

const MyCards = [];

const PictureDeck = [
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-147-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-146-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-131-750x280.jpg'
];

let CurrentPicture = "";

const CardsInPlay = [];
//adds captions
function SubmitCaption(caption, playerId) {
    CardsInPlay.push({
        Text: caption,
        playerId,
        isChosen: false
    })
}

function Init(){
    // this only made sense ath the client
    //TODO: rethink how this qorks at the server
    Players.push( { Name: CurrentUser.Name, Score: 0, isDealer: true } )
    
    MyCards.push(CaptionsDeck[0])
    MyCards.push(CaptionsDeck[1]);

    CurrentPicture = PictureDeck[0];
}

module.exports = {
    Players, PictureDeck, CurrentPicture, CardsInPlay: CardsInPlay, SubmitCaption, Init
}