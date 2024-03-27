function rightTri(a,b)
{
var b = document.getElementById('result').value=" ";
var a = document.getElementById('in').value;
var option = document.getElementById('rowSelect').value;
var temp="";

if(option === "left")
{
  for(let i=1; i<=a; i++)
   {
     temp += "*".repeat(i) + '\n';
   }
     document.getElementById('result').value = temp;
}
 
else if(option === "right")
 {
   temp = "";
   for(let i=1;i<=a;i++)
    {
       temp += " ".repeat(a-i) + "*".repeat(i) + "\n";
    }
       document.getElementById('result').value = temp;
    }
    else if (option === 'dia') {
      let temp = "";
  
      // Upside pyramid
      for (let i = 1; i <= a; i++) {
          temp += " ".repeat(a - i) + "*".repeat(i * 2 - 1) + "\n";
      }
  
      // Downside pyramid
      for (let i = a - 1; i >= 1; i--) {
          temp += " ".repeat(a - i) + "*".repeat(i * 2 - 1) + "\n";
      }
  
      document.getElementById('result').value = temp;
  }
  

    }

