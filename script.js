const data = JSON.parse(`[
  {
    "id": 1,
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "id": 2,
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "id": 3,
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "id": 4,
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
]`);

// Push the respective information into HTML as list elements 
function map() {
    return (document.getElementById('scores-list').innerHTML = data.map((x)=> {
        let {id, category, score, icon} = x;
        return `<li id="result${id}">
          <div>
            <img id="icon${id}" src="${icon}" alt="">
            <p id="category${id}">${category}</p>
          </div>
          <div>
            <p>${score} <p class="denominator">/ 100</p></p>
          </div>
        </li>`
    }).join(''))
}

map();