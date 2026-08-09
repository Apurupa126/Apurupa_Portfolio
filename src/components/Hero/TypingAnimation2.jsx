import React, { useEffect, useState } from 'react';

export default function TypingAnimation({ words = [], typingSpeed = 80, pause = 1500 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    if (index >= words.length) return setIndex(0);

    if (!isDeleting && subIndex === words[index].length) {
      const t = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words, typingSpeed, pause]);

  useEffect(() => {
    const t = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="text-xl md:text-2xl font-medium text-gray-300">
      {words.length ? words[index].substring(0, subIndex) : ''}
      <span className={`inline-block ml-1 w-1 h-6 align-middle ${blink ? 'bg-white' : 'bg-transparent'}`} />
    </span>
  );
}
