function play(userChoice) {
    const choices = [`rock`, `scissors`, `paper`];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = ``;
    if (userChoice === computerChoice) {
        result = `引き分け！`;
    } else if (
        (userChoice === `rock` && computerChoice === `scissors`) ||
        (userChoice === `scissors` && computerChoice === `paper`) ||
        (userChoice === `paper` && computerChoice === `rock`)
    ) {
        result = `あなたの勝ち！`;
    } else {
        result = `あなたの負け…`;
    }
    
  const choiceMapping = {
	  					'rock' : 'グー',
	  					'scissors' : 'チョキ',
	  					'paper' : 'パー' };
	  					
	const choiceImage = {
						'rock':`/img/rock.png`,
						'scissors':'/img/scissors.png',
						'paper':'/img/paper.png'
	};



    
   const computerChoicejapanese = choiceMapping[computerChoice];
 	const resultText = `コンピューターの選択： ${computerChoicejapanese}.　結果: ${result}`;


	const yourChoiceImg = document.getElementById(`yourChoiceImg`);
	yourChoiceImg.src = choiceImage[userChoice];
 
	const computerChoiceImg = document.getElementById(`computerChoiceImg`);
	computerChoiceImg.src = choiceImage[computerChoice];
    
    const historyElement = document.createElement('p');
    historyElement.innerText = resultText;
    
    const addHistory = document.getElementById('history');
    addHistory.appendChild(historyElement);
    
}
