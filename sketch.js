document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'batman',
      img: 'images/batman.png'
    },
    {
      name: 'burst',
      img: 'images/burst.png'
    },
    {
      name: 'heart',
      img: 'images/heart.png'
    },
    {
      name: 'joker',
      img: 'images/joker.png'
    },
    {
      name: 'star',
      img: 'images/star.png'
    },
    {
      name: 'triangle',
      img: 'images/triangle.png'
    },
    {
      name: 'batman',
      img: 'images/batman.png'
    },
    {
      name: 'burst',
      img: 'images/burst.png'
    },
    {
      name: 'heart',
      img: 'images/heart.png'
    },
    {
      name: 'joker',
      img: 'images/joker.png'
    },
    {
      name: 'star',
      img: 'images/star.png'
    },
    {
      name: 'triangle',
      img: 'images/triangle.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
  let score = 0 

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/box.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/box.png')
      cards[optionTwoId].setAttribute('src', 'images/box.png')
      // alert('You have clicked the same image!')
      score = score - 300
      alert('You clicked on the same image you degenerate!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      score = score + 200
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/box.png')
      cards[optionTwoId].setAttribute('src', 'images/box.png')
      score = score - 100
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = score
    // resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2 && score < 0) {
      resultDisplay.textContent = ' Nah, you lost!'
    } else if (cardsWon.length == cardArray.length/2 && score > 0) {
      resultDisplay.textContent = ' Good game, you gonna get a sloppy toppy 3000!'
    } 
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})