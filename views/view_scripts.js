(function () {
  let renderDom = (responseObj) => {
    // .classList.add('show')
    let tempArr =  responseObj.sort((a, b)=>{return b.score - a.score})
    let ul = document.getElementById('ScoreList');
    tempArr.forEach((item) => {
      let score = document.createElement('span');
      score.innerHTML=item.score;
      let name = document.createElement('span');
      name.innerHTML=item.name +' : ';
      let li = document.createElement('LI');
      ul.appendChild(li);
      li.appendChild(name)
      li.appendChild(score);
    })
  }

  fetch('../scores')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      renderDom(myJson);
      // console.log(JSON.stringify(myJson));
    });
})();
