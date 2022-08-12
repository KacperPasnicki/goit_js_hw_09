import Notiflix from 'notiflix'
const btn = document.querySelector('button')
const form = document.querySelector('.form')
const value =  Number(form.elements.amount.value);
const delayMs =  Number(form.elements.delay.value);
const stepMs =  Number(form.elements.step.value);

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
  for  (let i = 1; i <= value ; i+=1 ) {
    let stepTime = delayMs + stepMs * (i-1);
      createPromise(i, stepTime)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      }
      })
