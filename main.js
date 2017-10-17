// Write your JavaScript here
//cd ~/oca/startnow-web101-change-calculator


function handleClickEvent(){
    
   
      var totalSaleP = $('#amount-due').val();//grab values of total Sale
        var totalSale = parseFloat(totalSaleP); //converts to integers
        totalSale = totalSale * 100;
      var cashGivenP = $('#amount-received').val();//grab values of cash given
        var cashGiven = parseFloat(cashGivenP);
        cashGiven = cashGiven * 100;
        
       
      
      var totalChangeP = (cashGiven - totalSale);//gives you total change
        totalChangeP = totalChangeP.toFixed(2);//to.Fixed(2) limits 2 digits after decimal
    var totalChange = parseFloat(totalChangeP);

      var largeChange = totalChange % 2000;// grabs change after Twenties
      var twentiesChange = (totalChange - largeChange)/2000;// gives you dollars to return
      $('#20-output').text(twentiesChange);//changes text at #dollars to value of dollarChange
      
      var firstChange = largeChange % 1000;// grabs left over change after quarters
      var tensChange = (largeChange - firstChange) / 1000;// gives us total of quarters
      $('#10-output').text(tensChange);//changes text to total quarters
    

      var secondChange = firstChange % 500;
        secondChange = secondChange.toFixed(2);
      var fivesChange = (firstChange - secondChange) / 500;
      $('#5-output').text(fivesChange);

      var thirdChange = secondChange % 100;
      var dollarChange = (secondChange - thirdChange)/100;// gives you dollars to return
      $('#dollars-output').text(dollarChange);//changes text at #dollars to value of dollarChange
      
      
      var fourthChange = thirdChange % 25;// grabs left over change after quarters
      var quartersChange = (thirdChange - fourthChange) / 25;// gives us total of quarters
      $('#quarters-output').text(quartersChange);//changes text to total quarters
    

      var fifthChange = fourthChange % 10;
        fifthChange = fifthChange.toFixed(2);
      var dimesChange = (fourthChange - fifthChange) / 10;
      $('#dimes-output').text(dimesChange);

      var sixthChange = fifthChange % 5;
      var nicklesChange = (fifthChange - sixthChange) / 5;
      $('#nickels-output').text(nicklesChange);

      var seventhChange = sixthChange % 1;
     
      var penniesChange = (sixthChange - seventhChange) / 1;
      $('#pennies-output').text(penniesChange);
 
    }
    $('#calculate-change').click(handleClickEvent);
    


    // function handleClickEvent(){
        
       
    //       var totalSaleP = $('#amount-due').val();//grab values of total Sale
    //         var totalSale = parseFloat(totalSaleP); //converts to integers
    //         totalSale = totalSale * 100;
    //       var cashGivenP = $('#amount-received').val();//grab values of cash given
    //         var cashGiven = parseFloat(cashGivenP);
    //         cashGiven = cashGiven * 100;
           
          
    //       var totalChangeP = (cashGiven - totalSale);//gives you total change
    //         totalChangeP = totalChangeP.toFixed(2);//to.Fixed(2) limits 2 digits after decimal
    //     var totalChange = parseFloat(totalChangeP);
    //       var largeChange = totalChange % 100;// grabs change after dollars
    //       var dollarChange = (totalChange - largeChange)/100;// gives you dollars to return
    //       $('#dollars-output').text(dollarChange);//changes text at #dollars to value of dollarChange
          
          
    //       var firstChange = largeChange % 25;// grabs left over change after quarters
    //       var quartersChange = (largeChange - firstChange) / 25;// gives us total of quarters
    //       $('#quarters-output').text(quartersChange);//changes text to total quarters
        
    
    //       var secondChange = firstChange % 10;
    //         secondChange = secondChange.toFixed(2);
    //       var dimesChange = (firstChange - secondChange) / 10;
    //       $('#dimes-output').text(dimesChange);
    
    //       var thirdChange = secondChange % 5;
    //       var nicklesChange = (secondChange - thirdChange) / 5;
    //       $('#nickels-output').text(nicklesChange);
    
    //       var fourthChange = thirdChange % 1;
         
    //       var penniesChange = (thirdChange - fourthChange) / 1;
    //       $('#pennies-output').text(penniesChange);
     
    //     }
    //     $('#calculate-change').click(handleClickEvent);
    