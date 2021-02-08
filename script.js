document.addEventListener('DOMContentLoaded', () => {

    const squaresGuess= document.querySelectorAll('.guess div')
    const squaresHint = document.querySelectorAll('.hints div')
    const checkButtons= document.querySelectorAll('button')

   const colors=["red","orange","yellow","green","blue","purple"]
   let corlorClasses= colors
    corlorClasses.push("white")

    var rightPattern = createRandomPattern()
    console.log(rightPattern)

    // show instructions on buttonclick
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

    // add eventlistener for playagain button
    const playAgain= document.getElementById('newGame')
    
    playAgain.addEventListener('click', ()=> {
        rightPattern= createRandomPattern()
        console.log(rightPattern)

        //renew guess squares
        for (let i = 0, len = squaresGuess.length; i < len; i++){
            squaresGuess[i].classList.add('white')
            for(let color in colors){
            if( squaresGuess[i].classList.contains(colors[color])){
                squaresGuess[i].classList.remove(colors[color])
                
                }
            }
        }
        //renew hint squares
        for(let j=0; j<squaresHint.length;j++){
            if(squaresHint[j].classList.contains('whiteHint')){
                squaresHint[j].classList.remove('whiteHint')
            }
            if(squaresHint[j].classList.contains('blackHint')){
                squaresHint[j].classList.remove('blackHint')
            }
        }
    


    })

    
//add an onclick to each guess square in your grid
for (let i = 0, len = squaresGuess.length; i < len; i++){
    
    squaresGuess[i].classList.add('white')
    squaresGuess[i].classList.add('guessSquare')
    
    
    // color change on click
    squaresGuess[i].addEventListener('click', () => {
        if(squaresGuess[i].classList.contains('white')){
            
            squaresGuess[i].classList.remove('white')
            squaresGuess[i].setAttribute('id','red')
            
            squaresGuess[i].classList.add('red') 
        }
        else{
        for (let color in colors){
        
            if(squaresGuess[i].classList.contains(colors[color])){
                squaresGuess[i].classList.remove(colors[color])
                let newColorIndex=parseInt(color)+1
                if(newColorIndex >= colors.length){
                    newColorIndex=0
                }
                squaresGuess[i].setAttribute('id',colors[newColorIndex])
                squaresGuess[i].classList.add(colors[newColorIndex])
                break
            }
        }
    }
    })
    }// end of for loop 

    function createRandomPattern(){
        randomPattern=[]
        
        for(let i=0; i<4;i++){
            randomPattern.push(colors[Math.floor(Math.random() * 6)])
        }
        return randomPattern
    }
    // create an Array with the colors chosen by the user
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
         let toBeTested=[]

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
                toBeTested.push(i)
            }
            }
            for(let x in toBeTested){
                for (let color in rightPattern ){
                    if (rightPattern[color]=== userPattern[toBeTested[x]] && status[rightPattern[color]]>=1){
                       
                        squaresHint[toBeTested[x]].classList.add('blackHint')
                        colorCounter+=1;
                        status[rightPattern[color]]-=1;

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