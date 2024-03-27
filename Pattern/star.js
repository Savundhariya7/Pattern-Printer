

function rightTri() {
  document.getElementById('result').value='';

  var a = document.getElementById('in').value;
  var option = document.getElementById('rowSelect').value;

  if (option === 'left') {
      for (let i = 1; i <= a; i++) {
          let temp = "";
          for (let j = 1; j <= i; j++) {
              temp += "*";
          }
          document.getElementById('result').value += temp + '\n';
      }
  } else if (option === 'right') {
      for (let i = 1; i <= a; i++) {
          let temp = "";
          //printing spaces
          for (let j = 0; j < a - i; j++) {
              temp += "   ";
          }
          for (let k = 1; k <= i; k++) {
              temp += " * ";
          }
          document.getElementById('result').value += temp + '\n';
      }
  }
  else if (option === 'dia') {
    // Upside pyramid
    var tempUpside = "";
    for (let i = 1; i <= a; i++) {
        for (let j = a; j > i; j--) {
            tempUpside += "   ";
        }
        for (let k = 1; k <= i * 2 - 1; k++) {
            tempUpside += " * ";
        }
        tempUpside += "\n";
    }

    // Downside pyramid
    var tempDownside = "";
    for (let i = 1; i <= a - 1; i++) {
        for (let j = 0; j < i; j++) {
            tempDownside += "   ";
        }
        for (let k = (a - i) * 2 - 1; k > 0; k--) {
            tempDownside += " * ";
        }
        tempDownside += "\n";
    }

    // Combine both pyramids
    document.getElementById('result').value = tempUpside + tempDownside;
}
  
}



