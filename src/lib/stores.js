import { writable } from 'svelte/store';
import q from './questionnaires/data.js';

export const questionnaires = writable(q);

export const statusApp = writable({
    currentQuiz: null,
    currentQuestionId: 0,
    currentQuestion: 0,
    titleApp: "Questionnaires available"
  }
);

const storedProgressQuestionnaires = JSON.parse(window.localStorage.getItem('progressQuestionnaires')) ?? {};
export const progressQuestionnaires = writable(storedProgressQuestionnaires);

progressQuestionnaires.subscribe(value => window.localStorage.setItem('progressQuestionnaires', JSON.stringify(value)) );