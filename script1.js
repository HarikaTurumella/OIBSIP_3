
function temperatureConverter(valNum)
{
  var n1=document.getElementById("num1").value;
  num1=parseFloat(n1);
  
   switch(valNum)
  {
    case 'r1':
    document.getElementById("myInput").innerHTML=(num1*1.8)+32;
      break;
    
    case 'r2':
    document.getElementById("myInput").innerHTML=num1+273.15;
    break;
    case 'r3':
    document.getElementById("myInput").innerHTML=((num1-32)/1.8)+273.15;
    break;
    case 'r4':
    document.getElementById("myInput").innerHTML=(num1-32)/1.8;
      break;
    case 'r5':
      //document.getElementById("myInput").innerHTML='r5';  
      document.getElementById("myInput").innerHTML=num1-273.15;
      break;
    case 'r6':
      //document.getElementById("myInput").innerHTML='r6';  
      document.getElementById("myInput").innerHTML=((num1-273.15)*1.8)+32;
      break;
    default:
      document.getElementById("myInput").innerHTML='Not selected';
      break;

  }

}



