document.addEventListener('DOMContentLoaded', () => {

    const squaresGuess= document.querySelectorAll('.guess div')
    const squaresHint = document.querySelectorAll('.hints div')
    const checkButtons= document.querySelectorAll('button')

    var rightPattern = createRandomPattern()
    console.log(rightPattern)
    const instructionsText= document.querySelector('div.instructions')
    const instructionsButton= document.querySelector('button.instructions')
    
    instructionsButton.addEventListener('click', () => {
        if(instructionsButton.innerHTML==='Instructions'){
       instructionsText.style.backgroundColor='white'
       instructionsText.style.color='black'
       instructionsButton.innerHTML='Hide'
        }
        else{
            instructionsText.style.backgroundColor='rgb(75, 12, 12)'
       instructionsText.style.color='rgb(75, 12, 12)'
        instructionsButton.innerHTML='Instructions'
         }
    })

    
    // add Eventlistener for each button in checkButtons
    checkButtons.forEach(button => button.addEventListener('click', createColorArray))

    const playAgain= document.getElementById('newGame')
    
    playAgain.addEventListener('click', ()=> {
        rightPattern= createRandomPattern()
        console.log(rightPattern)

        //renew guess squares
        for (let i = 0, len = squaresGuess.length; i < len; i++){
            squaresGuess[i].classList.add('white')
            if( squaresGuess[i].classList.contains('redDot')){
                squaresGuess[i].classList.remove('redDot')
                
                }
            if( squaresGuess[i].classList.contains('orangeDot')){
                squaresGuess[i].classList.remove('orangeDot')
                }

            if( squaresGuess[i].classList.contains('yellowDot')){
                squaresGuess[i].classList.remove('yellowDot')
                }
            if( squaresGuess[i].classList.contains('greenDot')){
                squaresGuess[i].classList.remove('greenDot')
                }
            if( squaresGuess[i].classList.contains('blueDot')){
                squaresGuess[i].classList.remove('blueDot')
                }
            if( squaresGuess[i].classList.contains('purpleDot')){
                squaresGuess[i].classList.remove('purpleDot')
                }
        }
        for(let j=0; j<squaresHint.length;j++){
            if(squaresHint[j].classList.contains('whiteHint')){
                squaresHint[j].classList.remove('whiteHint')
            }
            if(squaresHint[j].classList.contains('blackHint')){
                squaresHint[j].classList.remove('blackHint')
            }
        }
    


    })

    

for (let i = 0, len = squaresGuess.length; i < len; i++){
    //add an onclick to each square in your grid
    squaresGuess[i].classList.add('white')
    squaresGuess[i].classList.add('guessSquare')

    
    squaresGuess[i].addEventListener('click', () => {
     
        if(squaresGuess[i].classList.contains('white')){
            
            squaresGuess[i].classList.remove('white')
            squaresGuess[i].setAttribute('id','red')
            
            squaresGuess[i].classList.add('redDot')
         }
         else if (squaresGuess[i].classList.contains('redDot')){

            squaresGuess[i].classList.add('orangeDot')
            squaresGuess[i].classList.remove('redDot')
            squaresGuess[i].setAttribute('id','orange')
         }
         else if (squaresGuess[i].classList.contains('orangeDot')){


            squaresGuess[i].classList.remove('orangeDot')
            squaresGuess[i].classList.add('yellowDot')
            squaresGuess[i].setAttribute('id','yellow')
        }
         else if (squaresGuess[i].classList.contains('yellowDot')){

            squaresGuess[i].classList.remove('yellowDot')
            squaresGuess[i].classList.add('greenDot')
            squaresGuess[i].setAttribute('id','green')
         }
         else if (squaresGuess[i].classList.contains('greenDot')){

            squaresGuess[i].classList.remove('greenDot')
            squaresGuess[i].classList.add('blueDot')
            squaresGuess[i].setAttribute('id','blue')
        }
        else if (squaresGuess[i].classList.contains('blueDot')){

            squaresGuess[i].classList.remove('blueDot')
            squaresGuess[i].classList.add('purpleDot')
            squaresGuess[i].setAttribute('id','purple')
        }
        else if (squaresGuess[i].classList.contains('purpleDot')){

            squaresGuess[i].classList.remove('purpleDot')
            squaresGuess[i].classList.add('white')
            squaresGuess[i].setAttribute('id','white')
        }

      
        })
    }// end of for loop

    function createRandomPattern(){
        randomPattern=[]
        let colors=["red","orange","yellow","green","blue","purple"]
        for(let i=0; i<4;i++){
            randomPattern.push(colors[Math.floor(Math.random() * 6)])
        }
        return randomPattern
    }
    // create an Array wi the colors chosen by the user
    // is usind the 'id' tag
    function createColorArray(){

        
        let userPattern=[]
        const classGuess='.guess div.l'
        const classHint ='.hints div.l'
        const line= 'l'

      for (let i=1; i<=8;i++){
          let number= i.toString();
          let classGuessLine= classGuess+number;
          let linenumber=line+number;

          let classHintLine= classHint+number;
         
          if (this.classList.contains(linenumber)){
            let squaresCurrentLine= document.querySelectorAll(classGuessLine);
            
            

            for(let i=0; i<squaresCurrentLine.length;i++){
                let color= squaresCurrentLine[i].id
                userPattern.push(color)
        }
        var squaresHint= document.querySelectorAll(classHintLine)
      
        
        checkMatch(userPattern,squaresHint)
        }
        
    }
    }

    

    function checkMatch(userPattern, squaresHint){

        // check how often a color is used in the solution --> Dictionary
         let status = rightPattern.reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), {});

       // check if position and color is right
        positionCounter=0;
        colorCounter=0;
        for(let i=0; i<userPattern.length;i++){
            
            if(userPattern[i]===rightPattern[i]){
               
                squaresHint[i].classList.add('whiteHint')
                positionCounter+=1;
                status[rightPattern[i]]-=1
            }
            //check for right colors
            else{ 
           
                for (let color in rightPattern ){
                    if (rightPattern[color]=== userPattern[i] && status[rightPattern[color]]>0){
                       
                        squaresHint[i].classList.add('blackHint')
                        colorCounter+=1;
                        status[rightPattern[color]]-=1;

                    }

                }

            }
        }
        if(positionCounter===4){
            
            alert('You guessed right!')
        }
        if (positionCounter===0 && colorCounter===0)  {
            alert('Nothing is right')
        }
}
})