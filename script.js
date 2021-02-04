document.addEventListener('DOMContentLoaded', () => {

    //Testtttttttttttttttttttttttt

    const squaresGuess= document.querySelectorAll('.guess div')
    const squaresHint = document.querySelectorAll('.hints div')
    const checkButtons= document.querySelectorAll('button')

    const rightPattern = createRandomPattern()
    console.log(rightPattern)

    
    // add Eventlistener for each button in checkButtons
    checkButtons.forEach(button => button.addEventListener('click', createColorArray))

    

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

    function createColorArray(){
        
        let userPattern=[]
    
        let line = this.classList

        console.log(line)
        // line1
        if (this.classList.contains('l1')){
            let squaresCurrentLine= document.querySelectorAll('.guess div.l1');
            console.log(squaresCurrentLine)

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
            console.log(squaresCurrentLine)

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
            console.log(squaresCurrentLine)

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
            console.log(squaresCurrentLine)

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
        console.log(squaresCurrentLine)

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
        console.log(squaresCurrentLine)

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
        console.log(squaresCurrentLine)

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
        console.log(squaresCurrentLine)

        for(let i=0; i<squaresCurrentLine.length;i++){
            let color= squaresCurrentLine[i].id
            userPattern.push(color)
    }
    var squaresHint= document.querySelectorAll('.hints div.l8')
    checkMatch(userPattern,squaresHint)
}
    }

    function checkMatch(userPattern, squaresHint){
        // check if position and color is right
        counter=0;
        
        
        for(let i=0; i<userPattern.length;i++){
            
            if(userPattern[i]===rightPattern[i] ){
               
                squaresHint[i].classList.add('whiteHint')
                counter+=1;
            }
            //check for right colors
            else{ 
           
                for (let color in rightPattern ){
                 
                    if (rightPattern[color]=== userPattern[i]){
                       
                        squaresHint[i].classList.add('blackHint')

                    }

                }

            }
        }
        if(counter==4){
            
            alert('You guessed right!')
        }  
}
})