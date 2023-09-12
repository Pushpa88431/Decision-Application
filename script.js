
  function randomQ() {
    //read value from question input field
    let userInput = document.getElementById('questionInput').value;

    //if input is null, then display the error message.
    if (userInput == '') {
        //set the text of the error element.
        document.getElementById('error').innerHTML='You did not ask anything.'
        document.getElementById('error').style.color='red';
        document.getElementById('error').style.fontWeight='bold';
        document.getElementById('error').style.fontSize='25px';

        //show the error element
        document.getElementById('error').style.display='';
    } else {
      let answer;
      //hide the error element
      document.getElementById('error').style.display='none';
      
      switch (getRandom()) {
          case 0:
              answer = 'I am not sure!';
              break;
            case 1:
              answer = 'It really depends on the specific situation and context!';
              break;
            case 2:
              answer = 'It is certain!';
              break;
            case 3:
              answer = 'It is decidedly so!';
              break;
            case 4:
              answer = 'Without a doubt!';
              break;
            case 5:
              answer = 'Yes, definitely!';
              break;
            case 6:
              answer = 'You may rely on it!';
              break;
            case 7:
              answer = 'Cannot predict now!';
              break;
            case 8:
              answer = "Don't count on it!";
              break;
            case 9:
              answer = 'My sources say No!';
              break;
       
            default:
              answer = 'Ask a valid question!';
          }
          //select the result element and set the text to that element. And apply style attributes to that element
          document.getElementById('question').innerHTML='Your Question: '+userInput;
         
        
          
          //select the result element and set the text to that element. And apply style attributes to that element
          document.getElementById('result').innerHTML='Answer: '+answer;

        }
        //funcation return random numbers between 0 to 10;
        function getRandom() {
            return Math.floor(Math.random() * 10);
          }
      }
      
    