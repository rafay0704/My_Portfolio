import { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  loop?: number;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
}

export const useTypewriter = ({
  words = [],
  loop = Infinity,
  typeSpeed = 150,
  deleteSpeed = 150,
  delayBetween = 1500
}: TypewriterProps) => {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    if (words.length === 0) return;

    const handleTyping = () => {
      const currentWord = words[idx];
      const shouldDelete = isDeleting;

      setText(prev => 
        shouldDelete
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delayBetween);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIdx(prev => (prev + 1) % words.length);

        if (idx === words.length - 1) {
          setLoopCount(prev => prev + 1);
        }
      }
    };

    if (loop !== Infinity && loopCount >= loop && text === '' && !isDeleting) {
      // Stop the animation after reaching the loop limit
      return;
    }

    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(timeout);
  }, [words, text, isDeleting, idx, loop, loopCount, typeSpeed, deleteSpeed, delayBetween]);

  return [text];
};