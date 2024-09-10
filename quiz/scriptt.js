
		var res = [];
		var data = [
			{q: '1.what is js', a: 'a language', b: 'a logic', c: 'a platform', d: 'none', ans: 'a'},
			{q: '2.what is java', a: 'a platform', b: 'a logic', c: 'a language', d: 'none', ans: 'c'},
			{q: '3.what is unix', a: 'a language', b: 'a logic', c: 'a platform', d: 'none', ans: 'c'},
			{q: '4.what is python', a: 'a language', b: 'a logic', c: 'a platform', d: 'none', ans: 'a'},
			{q: '5.what is sql', a: 'a language', b: 'a logic', c: 'a platform', d: 'a database language', ans: 'd'},
			{q: '6.what is c', a: 'a language', b: 'a logic', c: 'a platform', d: 'none', ans: 'a'},
			{q: '7.what is postman', a: 'a language', b: 'a logic', c: 'a platform', d: 'a tool', ans: 'd'},
			{q: '8.what is hooks', a: 'a language', b: 'a logic', c: 'a platform', d: 'none', ans: 'd'},
			{q: '9.what is css', a: 'cascading style', b: 'a logic', c: 'a platform', d: 'none', ans: 'a'},
			{q: '10.what is html', a: 'a tag language', b: 'a logic', c: 'a platform', d: 'none', ans: 'a'}
		];
		
		var score = 0;  
		var ch = '';    
		var currentQuestion = 0;  
		var timer;
	
		function setValue(n) {
			ch = n;  
		}
	
		function showQuestion() {
			let questionData = data[currentQuestion];
			document.getElementById('q').innerText = questionData.q;
	
			
			const choices = ['a', 'b', 'c', 'd'];
			choices.forEach((choice, index) => {
				document.getElementById('c' + (index + 1)).innerText = questionData[choice];
				document.getElementsByTagName('input')[index].value = questionData[choice];
			});
	
	
			let count = 30;
			timer = setInterval(function() {
				document.getElementById('t').innerText = count;
				count--;
				if (count < 0) {
					clearInterval(timer);
					checkAnswer(); 
				}
			}, 1000);
		}
	
		function checkAnswer() {
			clearInterval(timer);  
	
			
			if (ch == data[currentQuestion].ans) {
			
				score++;  
			} else {
			
			}
			document.getElementById('scoreDisplay').innerText = 'Score: ' + score;  
		}
	
		function nextQuestion() {
			checkAnswer();  
	
			
			currentQuestion++;
	
			if (currentQuestion < data.length) {
				showQuestion();
			} else {
				let finalscore=document.getElementById('final-score');
				finalscore.innerText = `Your final score is ${score} out of ${data.length}`;

			}
		}
	
		showQuestion();  
