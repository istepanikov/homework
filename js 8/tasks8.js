function factorial(a) {
    return (a != 1) ? a * factorial(a - 1) : 1;
  }
  
  alert( factorial(10) );