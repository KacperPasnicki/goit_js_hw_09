import Notiflix from 'notiflix'
const btn = document.querySelector('button')


const createPromise = (position, delay) => {
  return  new Promise((resolve, reject) => {
    setTimeout(() => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill 
    resolve ({position, delay})
  } else {
    // Reject 
    reject ({position, delay})
  }
  }, delay) 
})

} 



btn.addEventListener('click', e => {
  e.preventDefault();
 createPromise(2, 1500)
   .then(({ position, delay }) => {
     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
   })
   .catch(({ position, delay }) => {
     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
   });

  })
