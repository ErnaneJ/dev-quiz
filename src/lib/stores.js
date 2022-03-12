import { writable } from 'svelte/store';
import q from './questionnaires/data.js';

export const questionnaires = writable(q);

export const statusApp = writable({
    currentQuiz: null,
    currentQuestionId: 0,
    currentQuestion: 0,
    questionnaires: []
  }
);