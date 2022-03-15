import { writable } from 'svelte/store';
import q from './questionnaires/data.js';

export const questionnaires = writable(q);

export const statusApp = writable({
    currentQuiz: null,
    currentQuestionId: 0,
    currentQuestion: 0,
  }
);

const storedProgressQuestionnaires = JSON.parse(window.localStorage.getItem('progressQuestionnaires')) ?? {};
export const progressQuestionnaires = writable(storedProgressQuestionnaires);

progressQuestionnaires.subscribe(value => {
  console.log(value)
  window.localStorage.setItem('progressQuestionnaires', JSON.stringify(value))
});

// statusApp.subscribe(value => {
//   console.log(value)
// });