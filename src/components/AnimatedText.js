// src/components/AnimatedText.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedText = ({ words, delay = 0.15, pauseTime = 1.5, eraseDelay = 0.1, cursor = true }) => {
  const textRef = useRef(null);

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is mounted
    let wordIndex = 0;

    const typeWriter = (word, i = 0) => {
      if (!isMounted || !textRef.current) return; // Exit if component is unmounted or ref is not available
      if (i < word.length) {
        textRef.current.innerText = word.substring(0, i + 1);
        gsap.delayedCall(delay, () => typeWriter(word, i + 1));
      } else {
        gsap.delayedCall(pauseTime, () => eraseWriter(word));
      }
    };

    const eraseWriter = (word) => {
      if (!isMounted || !textRef.current) return;
      const currentText = textRef.current.innerText;
      if (currentText.length > 0) {
        textRef.current.innerText = currentText.substring(0, currentText.length - 1);
        gsap.delayedCall(eraseDelay, () => eraseWriter(word));
      } else {
        wordIndex = (wordIndex + 1) % words.length;
        gsap.delayedCall(0.5, () => typeWriter(words[wordIndex]));
      }
    };

    typeWriter(words[wordIndex]);

    // Cleanup function to prevent state updates after unmounting
    return () => {
      isMounted = false;
    };
  }, [words, delay, pauseTime, eraseDelay]);

  return (
    <span>
      <span ref={textRef}></span>
      {cursor && <span className="cursor inline-block ml-1 ">|</span>}
    </span>
  );
};

export default AnimatedText;
