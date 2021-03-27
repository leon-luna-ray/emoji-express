import React from 'react';

// React components are capitalized
function MoodBtn (props) {
    return (
        <div id={props.emotion} class="col s2 center-align emoji-btn" value={props.emoji} onclick="addMood(this.id, this.value)">
        <h2 class="emoji">{props.emoji}</h2>
        <p class="emotion-title">{props.emotion}</p>
    </div>
    )
}

export default MoodBtn;