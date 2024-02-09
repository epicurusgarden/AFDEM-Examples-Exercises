try {
  console.log('Start of try runs');
  unicycle;
  console.log('End of try runs -- never reached'); 
} 
catch(err) {
  console.log('Error has occured: ' + err); 
} finally {
  console.log('This is always run'); 
}

console.log('...Then the execution continues');

