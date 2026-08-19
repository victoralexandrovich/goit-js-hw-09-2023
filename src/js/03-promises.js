import { Notify } from "notiflix";

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector(".form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { delay, step, amount } = event.target.elements;

  const firstDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const promisesAmount = Number(amount.value);

  for (let i = 1; i <= promisesAmount; i += 1) {
    const currentDelay = firstDelay + (i - 1) * delayStep;

    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }

  form.reset();
}
