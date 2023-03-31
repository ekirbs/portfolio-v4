import React, { useState, useEffect } from 'react';
import './styleAlt.css';

const words = [
  'web devElopment',
  'hardworKing',
  'responsIve design',
  'cReative',
  'moBile minded',
  'profesSional',
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(Array(words.length).fill(false));
  const [isRed, setIsRed] = useState(Array(words.length).fill(false));

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % words.length);
    }, 1000);

    return () => {
      clearInterval(wordTimer);
    };
  }, [words]);

  useEffect(() => {
    const visibleTimer = setTimeout(() => {
      setIsRed(words.map((word) => {
        const capitalLetterIndex = word.split('').findIndex((char) => char === char.toUpperCase() && char.match(/[A-Z]/));
        return capitalLetterIndex !== -1;
      }));
    }, 1000);

    return () => {
      clearTimeout(visibleTimer);
    };
  }, [isVisible]);

  useEffect(() => {
    setIsVisible((prev) => {
      const newState = [...prev];
      newState[activeIndex] = true;
      return newState;
    });
  }, [activeIndex]);

  return (
    <div className='home-card'>
      <div>
        {words.map((word, index) => (
          <div
            key={word}
            style={{
              opacity: isVisible[index] ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          >
            {word.split('').map((char, charIndex) => {
              const isCharRed = isRed[index] && char.match(/[A-Z]/) && charIndex === word.split('').findIndex((char) => char === char.toUpperCase() && char.match(/[A-Z]/));
              return (
                <span
                  key={`${charIndex}-${word}`}
                  className={isCharRed ? 'center-letter' : undefined}
                  style={{
                    color: isCharRed ? 'red' : undefined,
                    transition: isCharRed ? 'color 1s ease-in-out' : undefined,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}


// import React, { useState, useEffect } from 'react';
// import './styleAlt.css';

// const words = [
//   'web devElopment',
//   'hardworKing',
//   'responsIve design',
//   'cReative',
//   'moBile minded',
//   'profesSional',
// ];

// export default function About() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(Array(words.length).fill(false));
//   const [isRed, setIsRed] = useState(Array(words.length).fill(false));

//   useEffect(() => {
//     const wordTimer = setInterval(() => {
//       setActiveIndex((activeIndex) => (activeIndex + 1) % words.length);
//     }, 1000);

//     return () => {
//       clearInterval(wordTimer);
//     };
//   }, [words]);

//   useEffect(() => {
//     const visibleTimer = setTimeout(() => {
//       setIsRed(words.map((word) => {
//         const capitalLetterIndex = word.split('').findIndex((char) => char === char.toUpperCase() && char.match(/[A-Z]/));
//         return capitalLetterIndex !== -1;
//       }));
//     }, 1000);

//     return () => {
//       clearTimeout(visibleTimer);
//     };
//   }, [isVisible]);

//   useEffect(() => {
//     setIsVisible((prev) => {
//       const newState = [...prev];
//       newState[activeIndex] = true;
//       return newState;
//     });
//   }, [activeIndex]);

//   return (
//     <div className='home-card'>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         {words.map((word, index) => (
//           <div
//             key={word}
//             style={{
//               opacity: isVisible[index] ? 1 : 0,
//               transition: 'opacity 1s ease-in-out',
//             }}
//           >
//             {word.split('').map((char, charIndex) => {
//               const isCharRed = isRed[index] && char.match(/[A-Z]/) && charIndex === word.split('').findIndex((char) => char === char.toUpperCase() && char.match(/[A-Z]/));
//               return (
//                 <span
//                   key={`${charIndex}-${word}`}
//                   style={{
//                     color: isCharRed ? 'red' : undefined,
//                     transition: isCharRed ? 'color 1s ease-in-out' : undefined,
//                   }}
//                 >
//                   {char}
//                 </span>
//               );
//             })}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }