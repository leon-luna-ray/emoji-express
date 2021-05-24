const emojis = [
  {
    emotion: 'Afraid',
    secondary: null,
    base: 'Afraid',
    level: 1,
    emoji: '😓',
  },
  {
    emotion: 'Angry',
    secondary: null,
    base: 'Angry',
    level: 1,
    emoji: '😡',
  },
  {
    emotion: 'Annoyed',
    secondary: 'Frustrated',
    base: 'Angry',
    level: 3,
    emoji: '🙄',
  },
  {
    emotion: 'Anxious',
    secondary: null,
    base: 'Fearful',
    level: 2,
    emoji: '😣',
  },
  {
    emotion: 'Bored',
    secondary: null,
    base: 'Bad',
    level: 2,
    emoji: '😑',
  },
  {
    emotion: 'Calm',
    secondary: null,
    base: 'Happy',
    level: 2,
    emoji: '😌',
  },
  {
    emotion: 'Confused',
    secondary: null,
    base: 'Surprised',
    level: 2,
    emoji: '🤔',
  },
  {
    emotion: 'Crazy',
    secondary: 'Excited',
    base: 'Surprised',
    level: 3,
    emoji: '🤪',
  },
  {
    emotion: 'Disgusted',
    secondary: null,
    base: 'Disgusted',
    level: 1,
    emoji: '😒',
  },
  {
    emotion: 'Embarrassed',
    secondary: 'Disapproving',
    base: 'Disgusted',
    level: 3,
    emoji: '😅',
  },
  {
    emotion: 'Excited',
    secondary: null,
    base: 'Surprised',
    level: 2,
    emoji: '😆',
  },
  {
    emotion: 'Happy',
    secondary: null,
    base: 'Happy',
    level: 1,
    emoji: '🙂',
  },
  {
    emotion: 'Lonely',
    secondary: null,
    base: 'Sad',
    level: 2,
    emoji: '😔',
  },
  {
    emotion: 'Nostalgic',
    secondary: 'Peaceful',
    base: 'Happy',
    level: 3,
    emoji: '🥲',
  },
  {
    emotion: 'Numb',
    secondary: 'Distant',
    base: 'Angry',
    level: 3,
    emoji: '😐',
  },
  {
    emotion: 'Optimistic',
    secondary: null,
    base: 'Happy',
    level: 2,
    emoji: '😃',
  },
  {
    emotion: 'Proud',
    secondary: null,
    base: 'Happy',
    level: 2,
    emoji: '😎',
  },
  {
    emotion: 'Sad',
    secondary: null,
    base: 'Sad',
    level: 1,
    emoji: '🙁',
  },
  {
    emotion: 'Sick',
    secondary: 'Awful',
    base: 'Disgusted',
    level: 3,
    emoji: '🤢',
  },
  {
    emotion: 'Silly',
    secondary: 'Playful',
    base: 'Happy',
    level: 3,
    emoji: '🤡',
  },
  {
    emotion: 'Sleepy',
    secondary: 'Tired',
    base: 'Bad',
    level: 3,
    emoji: '😴',
  },
  {
    emotion: 'Stressed',
    secondary: null,
    base: 'Bad',
    level: 2,
    emoji: '😤',
  },
  {
    emotion: 'Surprised',
    secondary: null,
    base: 'Surprised',
    level: 3,
    emoji: '😮',
  },
  {
    emotion: 'Tired',
    secondary: null,
    base: 'Bad',
    level: 2,
    emoji: '🥱',
  },
]; // emojis

export default emojis;

// previous code

// const emojiDiv = document.getElementById('emoji-btns');

// function emojiBtn(emotion, emoji) {
//   return `
//     <div id="${emotion}" class="col s2 center-align emoji-btn" value="${emoji}" onclick="addMood(this.id, this.value)">
//         <h2 class="emoji">${emoji}</h2>
//         <p class="emotion-title">${emotion}</p>
//     </div>`;
// }

// function generateBtns() {
//   const buttons = [];

//   for (let i = 0; i < emotions.length; i++) {
//     const button = emojiBtn(emotions[i].emotion, emotions[i].emoji);
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

// function addMood(emotion, emoji) {
//   console.log(emotion, emoji);

//   // there may be an issue with getting the emoji back from the front end?

//   // see if you can still get the emoji to come back as it seemed to be working before.....  otherwise will need to get it from the emotions array`
// }

// // Render buttons on load
// emojiGrid();
