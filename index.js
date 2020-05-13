const counter = 0;

function takeANumber(katzDeliLine, customerName, counter){
    katzDeliLine.push(customerName);
    counter++;
    return 'You are number: ' + counter;
  }

function nowServing(katzDeliLine){
    if(katzDeliLine.length < 1){
      return "There is nobody waiting to be served!";
    }
    const current = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${current}.`;
  }


function currentLine(katzDeliLine){
    if(katzDeliLine.length < 1){
      return "The line is currently empty.";
    }
    const temp = katzDeliLine.reduce(function(a,b,i){
      return a.concat(i+1+ ". " + b);
    },[]);    //[ '1. Danny', '2. Jon', '3. Coco' ]
    return "The line is currently: " + temp.join(', '); //The line is currently: 1. Danny, 2. Jon, 3. Coco
}
