import { StateCreator } from 'zustand';

export interface InputSlice {
  currentIndex: number;
  setCurrentindex: (index: number) => void;
  gameOver: boolean;
  setGameOver: (gameOver: boolean) => void;
  wordOfTheDay: string;
  setWordOfTheDay: (wordOfTheDay: string) => void;
  words: Array<Array<string>>;
  setWordGues: (words: Array<Array<string>>) => void;
}

export const createInputSlice: StateCreator<InputSlice, [], [], InputSlice> = (set, get) => ({
  currentIndex: 0,
  setCurrentindex: (index) => {
    set({ currentIndex: index });
  },
  gameOver: false,
  setGameOver: (gameOver) => {
    set({ gameOver });
  },
  wordOfTheDay: '',
  setWordOfTheDay: (wordOfTheDay) => {
    set({ wordOfTheDay });
  },
  words: [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ],
  setWordGues: (words) => {
    set({ words });
  },
});
