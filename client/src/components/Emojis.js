// need to research passing props to render each emoji with props and then have that data passed to the server on click

const emojis = {
  afraid: {
    name: 'Afraid',
    secondary: null,
    type: 'Afraid',
    level: 1,
    emoji: '😓',
  },
  angry: {
    name: 'Angry',
    secondary: null,
    type: 'Angry',
    level: 1,
    emoji: '😡',
  },
  annoyed: {
    name: 'Annoyed',
    secondary: 'Frustrated',
    type: 'Angry',
    level: 3,
    emoji: '🙄',
  },
  anxious: {
    name: 'Anxious',
    secondary: null,
    type: 'Fearful',
    level: 2,
    emoji: '😣',
  },
  bored: {
    name: 'Bored',
    secondary: null,
    type: 'Bad',
    level: 2,
    emoji: '😑',
  },
  calm: {
    name: 'Calm',
    secondary: null,
    type: 'Happy',
    level: 2,
    emoji: '😌',
  },
  confused: {
    name: 'Confused',
    secondary: null,
    type: 'Surprised',
    level: 2,
    emoji: '🤔',
  },
  crazy: {
    name: 'Crazy',
    secondary: 'Excited',
    type: 'Surprised',
    level: 3,
    emoji: '🤪',
  },
  disgusted: {
    name: 'Disgusted',
    secondary: null,
    type: 'Disgusted',
    level: 1,
    emoji: '😒',
  },
  embarrassed: {
    name: 'Embarrassed',
    secondary: 'Disapproving',
    type: 'Disgusted',
    level: 3,
    emoji: '😅',
  },
  excited: {
    name: 'Excited',
    secondary: null,
    type: 'Surprised',
    level: 2,
    emoji: '😆',
  },
  happy: {
    name: 'Happy',
    secondary: null,
    type: 'Happy',
    level: 1,
    emoji: '🙂',
  },
  lonely: {
    name: 'Lonely',
    secondary: null,
    type: 'Sad',
    level: 2,
    emoji: '😔',
  },
  nostalgic: {
    name: 'Nostalgic',
    secondary: 'Peaceful',
    type: 'Happy',
    level: 3,
    emoji: '🥲',
  },
  numb: {
    name: 'Numb',
    secondary: 'Distant',
    type: 'Angry',
    level: 3,
    emoji: '😐',
  },
  optimistic: {
    name: 'Optimistic',
    secondary: null,
    type: 'Happy',
    level: 2,
    emoji: '😃',
  },
  proud: {
    name: 'Proud',
    secondary: null,
    type: 'Happy',
    level: 2,
    emoji: '😎',
  },
  sad: {
    name: 'Sad',
    secondary: null,
    type: 'Sad',
    level: 1,
    emoji: '🙁',
  },
  sick: {
    name: 'Sick',
    secondary: 'Awful',
    type: 'Disgusted',
    level: 3,
    emoji: '🤢',
  },
  silly: {
    name: 'Silly',
    secondary: 'Playful',
    type: 'Happy',
    level: 3,
    emoji: '🤡',
  },
  sleepy: {
    name: 'Sleepy',
    secondary: 'Tired',
    type: 'Bad',
    level: 3,
    emoji: '😴',
  },
  stressed: {
    name: 'Stressed',
    secondary: null,
    type: 'Bad',
    level: 2,
    emoji: '😤',
  },
  surprised: {
    name: 'Surprised',
    secondary: null,
    type: 'Surprised',
    level: 3,
    emoji: '😮',
  },
  tired: {
    name: 'Tired',
    secondary: null,
    type: 'Bad',
    level: 2,
    emoji: '🥱',
  },
}; // emojis

export default emojis;

// emojis object

// const emojis = {
//   afraid: {
//     name: 'Afraid',
//     secondary: null,
//     type: 'Afraid',
//     level: 1,
//     emoji: '😓',
//   },
//   angry: {
//     name: 'Angry',
//     secondary: null,
//     type: 'Angry',
//     level: 1,
//     emoji: '😡',
//   },
//   annoyed: {
//     name: 'Annoyed',
//     secondary: 'Frustrated',
//     type: 'Angry',
//     level: 3,
//     emoji: '🙄',
//   },
//   anxious: {
//     name: 'Anxious',
//     secondary: null,
//     type: 'Fearful',
//     level: 2,
//     emoji: '😣',
//   },
//   bored: {
//     name: 'Bored',
//     secondary: null,
//     type: 'Bad',
//     level: 2,
//     emoji: '😑',
//   },
//   calm: {
//     name: 'Calm',
//     secondary: null,
//     type: 'Happy',
//     level: 2,
//     emoji: '😌',
//   },
//   confused: {
//     name: 'Confused',
//     secondary: null,
//     type: 'Surprised',
//     level: 2,
//     emoji: '🤔',
//   },
//   crazy: {
//     name: 'Crazy',
//     secondary: 'Excited',
//     type: 'Surprised',
//     level: 3,
//     emoji: '🤪',
//   },
//   disgusted: {
//     name: 'Disgusted',
//     secondary: null,
//     type: 'Disgusted',
//     level: 1,
//     emoji: '😒',
//   },
//   embarrassed: {
//     name: 'Embarrassed',
//     secondary: 'Disapproving',
//     type: 'Disgusted',
//     level: 3,
//     emoji: '😅',
//   },
//   excited: {
//     name: 'Excited',
//     secondary: null,
//     type: 'Surprised',
//     level: 2,
//     emoji: '😆',
//   },
//   happy: {
//     name: 'Happy',
//     secondary: null,
//     type: 'Happy',
//     level: 1,
//     emoji: '🙂',
//   },
//   lonely: {
//     name: 'Lonely',
//     secondary: null,
//     type: 'Sad',
//     level: 2,
//     emoji: '😔',
//   },
//   nostalgic: {
//     name: 'Nostalgic',
//     secondary: 'Peaceful',
//     type: 'Happy',
//     level: 3,
//     emoji: '🥲',
//   },
//   numb: {
//     name: 'Numb',
//     secondary: 'Distant',
//     type: 'Angry',
//     level: 3,
//     emoji: '😐',
//   },
//   optimistic: {
//     name: 'Optimistic',
//     secondary: null,
//     type: 'Happy',
//     level: 2,
//     emoji: '😃',
//   },
//   proud: {
//     name: 'Proud',
//     secondary: null,
//     type: 'Happy',
//     level: 2,
//     emoji: '😎',
//   },
//   sad: {
//     name: 'Sad',
//     secondary: null,
//     type: 'Sad',
//     level: 1,
//     emoji: '🙁',
//   },
//   sick: {
//     name: 'Sick',
//     secondary: 'Awful',
//     type: 'Disgusted',
//     level: 3,
//     emoji: '🤢',
//   },
//   silly: {
//     name: 'Silly',
//     secondary: 'Playful',
//     type: 'Happy',
//     level: 3,
//     emoji: '🤡',
//   },
//   sleepy: {
//     name: 'Sleepy',
//     secondary: 'Tired',
//     type: 'Bad',
//     level: 3,
//     emoji: '😴',
//   },
//   stressed: {
//     name: 'Stressed',
//     secondary: null,
//     type: 'Bad',
//     level: 2,
//     emoji: '😤',
//   },
//   surprised: {
//     name: 'Surprised',
//     secondary: null,
//     type: 'Surprised',
//     level: 3,
//     emoji: '😮',
//   },
//   tired: {
//     name: 'Tired',
//     secondary: null,
//     type: 'Bad',
//     level: 2,
//     emoji: '🥱',
//   },
// }; // emojis object

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
