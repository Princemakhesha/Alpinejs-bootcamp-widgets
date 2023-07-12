function greet(name) {
  if (!name) {
      return "Please enter a valid name";
  }

  return "Hello, " + name.toUpperCase() ;
}
  // console.log(greet('Joe'))