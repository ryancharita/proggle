'use client';
import WordInput from '@/components/Game/WordInput';
import { getWOD } from '@/lib/data/word-of-the-day';
import { useStore } from '@/store/app.store';
import { useCallback, useEffect } from 'react';

export default function Home() {
  const { currentIndex, setCurrentindex, setGameOver, wordOfTheDay, words, setWordGues, setWordOfTheDay } = useStore();

  const gameCheck = useCallback(
    (input: string) => {
      if (input === wordOfTheDay.toLocaleUpperCase()) {
        setGameOver(true);
        // alert(`the Word Of th day is ${wordOfTheDay.toLocaleUpperCase()}`);
        return;
      }
      if (currentIndex === 5) {
        setGameOver(true);
        alert(`You suck the word was ${wordOfTheDay.toLocaleUpperCase()}`);
        return;
      }
      setCurrentindex(currentIndex + 1);
    },
    [wordOfTheDay, currentIndex, setGameOver, setCurrentindex],
  );

  // ('J8J3rEJx21EX0VRC');
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const keyPressed = event.key.toUpperCase();
      if (keyPressed === 'BACKSPACE') {
        // Handle backspace
        const wordsCopy = [...words];
        const lastFilledIndex = wordsCopy[currentIndex].findLastIndex((letter: string) => letter !== '');

        if (lastFilledIndex !== -1) {
          const newWord = [...wordsCopy[currentIndex]];
          newWord[lastFilledIndex] = '';
          wordsCopy[currentIndex] = newWord;
          setWordGues(wordsCopy);
        }
      } else if (/[a-zA-Z]/.test(keyPressed) && keyPressed.length === 1) {
        // Handle letter key
        const wordsCopy = [...words];
        const emptyIndex = wordsCopy[currentIndex].findIndex((letter: string) => letter === '');
        if (emptyIndex !== -1) {
          const newWord = [...wordsCopy[currentIndex]];
          newWord[emptyIndex] = keyPressed;
          wordsCopy[currentIndex] = newWord;
          setWordGues(wordsCopy);
        }
      } else if (keyPressed === 'ENTER') {
        const wordsCopy = [...words];
        const emptyIndex = wordsCopy[currentIndex].findIndex((letter: string) => letter === '');
        if (emptyIndex === -1) {
          setCurrentindex(currentIndex + 1);
          gameCheck(wordsCopy[currentIndex].join(''));
        }
      }
    };
    // Add event listener for key press
    window.addEventListener('keydown', handleKeyPress);
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [words, currentIndex, gameCheck, setCurrentindex, setWordGues]);

  useEffect(() => {
    const initialize = async () => {
      const wod = await getWOD();
      setWordOfTheDay(wod?.[0]?.words?.value || '');
    };
    initialize();
  }, [setWordOfTheDay]);

  return (
    <main>
      {words.map((word: Array<string>, index: number) => (
        <WordInput key={index} index={index} wordArray={word}></WordInput>
      ))}
    </main>
  );
}
