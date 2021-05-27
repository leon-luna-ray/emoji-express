// need to research passing props to render each emoji with props and then have that data passed to the server on click

const emojis = [
  {
    name: 'Afraid',
    secondary: null,
    type: 'Afraid',
    level: 1,
    emoji: '😓',
  },
  {
    name: 'Angry',
    secondary: null,
    type: 'Angry',
    level: 1,
    emoji: '😡',
  },
  {
    name: 'Annoyed',
    secondary: 'Frustrated',
    type: 'Angry',
    level: 3,
    emoji: '🙄',
  },
  {
    name: 'Anxious',
    secondary: null,
    type: 'Fearful',
    level: 2,
    emoji: '😣',
  },
  {
    name: 'Bored',
    secondary: null,
    type: 'Bad',
    level: 2,
    emoji: '😑',
  },
  {
    name: 'Calm',
    secondary: null,
    type: 'Happy',
    level: 2,
    emoji: '😌',
  },
  {
    name: 'Confused',
    secondary: null,
    type: 'Surprised',
    level: 2,
    emoji: '🤔',
  },
  {
    name: 'Crazy',
    secondary: 'Excited',
    type: 'Surprised',
    level: 3,
    emoji: '🤪',
  },
  {
    name: 'Disgusted',
    secondary: null,
    type: 'Disgusted',
    level: 1,
    emoji: '😒',
  },
  {
    name: 'Embarrassed',
    secondary: 'Disapproving',
    type: 'Disgusted',
    level: 3,
    emoji: '😅',
  },
  {
    name: 'Excited',
    secondary: null,
    type: 'Surprised',
    level: 2,
    emoji: '😆',
  },
  {
    name: 'Happy',
    secondary: null,
    type: 'Happy',
    level: 1,
    emoji: '🙂',
  },
  {
    name: 'Lonely',
    secondary: null,
    type: 'Sad',
    level: 2,
    emoji: '😔',
  },
  {
    name: 'Nostalgic',
    secondary: 'Peaceful',
    type: 'Happy',
    level: 3,
    emoji: '🥲',
  },
  {
    name: 'Numb',
    secondary: 'Distant',
    type: 'Angry',
    level: 3,
    emoji: '😐',
  },
  {
    name: 'Optimistic',
    secondary: null,
    type: 'Happy',
    level: 2,
    emoji: '😃',
  },
  {
    name: 'Proud',
    secondary: null,
    type: 'Happy',
    level: 2,
    emoji: '😎',
  },
  {
    name: 'Sad',
    secondary: null,
    type: 'Sad',
    level: 1,
    emoji: '🙁',
  },
  {
    name: 'Sick',
    secondary: 'Awful',
    type: 'Disgusted',
    level: 3,
    emoji: '🤢',
  },
  {
    name: 'Silly',
    secondary: 'Playful',
    type: 'Happy',
    level: 3,
    emoji: '🤡',
  },
  {
    name: 'Sleepy',
    secondary: 'Tired',
    type: 'Bad',
    level: 3,
    emoji: '😴',
  },
  {
    name: 'Stressed',
    secondary: null,
    type: 'Bad',
    level: 2,
    emoji: '😤',
  },
  {
    name: 'Surprised',
    secondary: null,
    type: 'Surprised',
    level: 3,
    emoji: '😮',
  },
  {
    name: 'Tired',
    secondary: null,
    type: 'Bad',
    level: 2,
    emoji: '🥱',
  },
]; // emojis

export default emojis;

// previous code

// const emojiDiv = document.getElementById('emoji-btns');

// function emojiBtn(name, emoji) {
//   return `
//     <div id="${name}" class="col s2 center-align emoji-btn" value="${emoji}" onclick="addMood(this.id, this.value)">
//         <h2 class="emoji">${emoji}</h2>
//         <p class="name-title">${name}</p>
//     </div>`;
// }

// function generateBtns() {
//   const buttons = [];

//   for (let i = 0; i < names.length; i++) {
//     const button = emojiBtn(names[i].name, names[i].emoji);
//     buttons.push(button);
//   }

//   return buttons;
// }

// function emojiGrid() {
//   const buttons = generateBtns();
//   const btnGrid = [];

//   const newRow = `
//     <div class="row">
//     `;
//   const endRow = `
//     </div> <!-- row -->
//     `;

//   // Loop to insert rows every 6 btns
//   for (let i = 0; i < buttons.length; i++) {
//     if (i === 0) {
//       btnGrid.push(newRow);
//       btnGrid.push(buttons[i]);
//     } else if (i % 6 === 0) {
//       btnGrid.push(endRow);
//       btnGrid.push(newRow);
//       btnGrid.push(buttons[i]);
//     } else {
//       btnGrid.push(buttons[i]);
//     }
//   }

//   btnGrid.push(endRow);

//   const markup = btnGrid.join(' ');
//   emojiDiv.innerHTML = markup;
// } // emojiGrid

// function addMood(name, emoji) {
//   console.log(name, emoji);

//   // there may be an issue with getting the emoji back from the front end?

//   // see if you can still get the emoji to come back as it seemed to be working before.....  otherwise will need to get it from the names array`
// }

// // Render buttons on load
// emojiGrid();
