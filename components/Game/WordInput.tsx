'use client';
import { FC } from 'react';
import LetterBox from './LeterBox';
import { useStore } from '@/store/app.store';

interface WordInputProps {
  index: number;
  wordArray: Array<string>;
}

const WordInput: FC<WordInputProps> = ({ index, wordArray }) => {
  const { currentIndex, gameOver, wordOfTheDay } = useStore();

  const getIntent = (letter: string, letterIndex: number) => {
    const emptyIndex = wordArray.findIndex((letter) => letter === '');
    if (emptyIndex === 0) {
      return 'primary';
    }
    if (currentIndex === index && !gameOver) {
      return 'primary';
    }
    const split = wordOfTheDay?.toLocaleUpperCase()?.split('') || [];
    if (split[letterIndex] === letter) {
      return 'correct';
    }
    if (split?.includes(letter)) {
      return 'partial';
    }
    return 'filled';
  };

  return (
    <div className="flex">
      {wordArray.map((letter, letterIndex) => (
        <LetterBox key={letterIndex} intent={getIntent(letter, letterIndex)}>
          {letter}
        </LetterBox>
      ))}
    </div>
  );
};

export default WordInput;
