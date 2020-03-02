export const Players = [
    { Name: 'Bernie', Score: 0, isDealer: false}
];

export const MyCards = [];

export const PictureDeck = [
    'http://www.dumpaday.com/wp-content/uploads/2013/10/funny-tape-decks.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2013/10/funny-tape-decks.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2013/10/funny-tape-decks.jpg'

];

export const CaptionsDeck = [
    'Enjoy at least one sunset per day! – Modern Family',
    'They say don’t try this at home… so I went to my friend’s home!',
    'My bed is a magical place I suddenly remember everything I had to do.',
    'Friday, my second favorite F word.',
    'Wine + dinner = winner',
    'I don’t care what people think of me. Mosquitos find me attractive!',
    'Stomach: I will now demonstrate a blue whale’s mating call.',
    'If there would be an award for being lazy, I would send someone to pick it up for me.',
    'They say: Do what you love and the money will come to you. Just ordered pizza, now I am waiting…'
];

export let CurrentPicture = "";

export const CardsInPlay = [];

export function Init(){
    MyCards.push(CaptionsDeck[0])
    MyCards.push(CaptionsDeck[1])

    CurrentPicture = PictureDeck[0];
}

