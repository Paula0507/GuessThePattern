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
    
        let line = this.classList

      
        // line1
        if (this.classList.contains('l1')){
            let squaresCurrentLine= document.querySelectorAll('.guess div.l1');
            

            for(let i=0; i<squaresCurrentLine.length;i++){
                let color= squaresCurrentLine[i].id
                userPattern.push(color)
        }
        var squaresHint= document.querySelectorAll('.hints div.l1')
        checkMatch(userPattern,squaresHint)
        }
        

        //line2 
        else if (this.classList.contains('l2')){
            let squaresCurrentLine= document.querySelectorAll('.guess div.l2');
            

            for(let i=0; i<squaresCurrentLine.length;i++){
                let color= squaresCurrentLine[i].id
                userPattern.push(color)
        }
        var squaresHint= document.querySelectorAll('.hints div.l2')
        checkMatch(userPattern,squaresHint)
        }

        //line3
        else if (this.classList.contains('l3')){
            let squaresCurrentLine= document.querySelectorAll('.guess div.l3');
            

            for(let i=0; i<squaresCurrentLine.length;i++){
                let color= squaresCurrentLine[i].id
                userPattern.push(color)
        }
        var squaresHint= document.querySelectorAll('.hints div.l3')
        checkMatch(userPattern,squaresHint)
    }
        //line4

        else if (this.classList.contains('l4')){
            let squaresCurrentLine= document.querySelectorAll('.guess div.l4');
            

            for(let i=0; i<squaresCurrentLine.length;i++){
                let color= squaresCurrentLine[i].id
                userPattern.push(color)
        }
        var squaresHint= document.querySelectorAll('.hints div.l4')
        checkMatch(userPattern,squaresHint)
    }

    //line5
    else if (this.classList.contains('l5')){
        let squaresCurrentLine= document.querySelectorAll('.guess div.l5');
      

        for(let i=0; i<squaresCurrentLine.length;i++){
            let color= squaresCurrentLine[i].id
            userPattern.push(color)
    }
    var squaresHint= document.querySelectorAll('.hints div.l5')
    checkMatch(userPattern,squaresHint)
}

    //line6
    else if (this.classList.contains('l6')){
        let squaresCurrentLine= document.querySelectorAll('.guess div.l6');
        

        for(let i=0; i<squaresCurrentLine.length;i++){
            let color= squaresCurrentLine[i].id
            userPattern.push(color)
    }
    var squaresHint= document.querySelectorAll('.hints div.l6')
    checkMatch(userPattern,squaresHint)
}
// line7
    else if (this.classList.contains('l7')){
        let squaresCurrentLine= document.querySelectorAll('.guess div.l7');
        

        for(let i=0; i<squaresCurrentLine.length;i++){
            let color= squaresCurrentLine[i].id
            userPattern.push(color)
    }
    var squaresHint= document.querySelectorAll('.hints div.l7')
    checkMatch(userPattern,squaresHint)
}
// line8
    else if (this.classList.contains('l8')){
        let squaresCurrentLine= document.querySelectorAll('.guess div.l8');
        

        for(let i=0; i<squaresCurrentLine.length;i++){
            let color= squaresCurrentLine[i].id
            userPattern.push(color)
    }
    var squaresHint= document.querySelectorAll('.hints div.l8')
    checkMatch(userPattern,squaresHint)
}
    }

    

    function checkMatch(userPattern, squaresHint){

        // check how often a color is used in the solution
         const status = rightPattern.reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), {});

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