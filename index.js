const namo1 = ['nemo'];
const everyone = ['dolly', 'mitch' , 'sarah', 'susan'];
const large = new Array(1000000).fill('nemo');

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Nemo Found!")
    }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo took ' + (t1 - t0) + ' miliseconds');
}

findNemo(large); /*
this function has a big O notation of 0(n)
Linear time. Big O depends on the number of inputs 
As the inputs increase the number of operations icreases linearly  4 inputs is 4 operations that's it. */ 

