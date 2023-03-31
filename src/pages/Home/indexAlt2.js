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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
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
//   const [isRed, setIsRed] = useState(Array(words.reduce((acc, word) => acc + (word.match(/[A-Z]/g) || []).length, 0)).fill(false));

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
//       setIsRed(isRed.map((val, index) => {
//         if (words[index].match(/[A-Z]/)) {
//           return true;
//         } else {
//           return val;
//         }
//       }));
//     }, 2000);

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
//               const isCharRed = char.match(/[A-Z]/) && isRed[index];
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


// import React, { useState, useEffect } from 'react';

// import './styleAlt.css';

// const words = [
//   '  web devElopment',
//   'hardworKing',
//   '   responsIve design',
//   '     cReative',
//   '      moBile minded',
//   ' profesSional',
// ];

// const capitalizedLetters = ['E', 'K', 'I', 'R', 'B', 'S'];

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
//     const timer = setTimeout(() => {
//       setIsVisible((prev) => {
//         const newState = [...prev];
//         newState[activeIndex] = true;
//         return newState;
//       });
//     }, 1000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [activeIndex]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsRed((prev) => {
//         const newState = [...prev];
//         for (let i = 0; i < words.length; i++) {
//           if (words[i][capitalizedLetters[i]] === capitalizedLetters[i]) {
//             newState[i] = true;
//           }
//         }
//         return newState;
//       });
//     }, 2000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [isVisible]);

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
//               color: isRed[index] ? 'red' : 'inherit',
//               transitionDelay: '1s',
//             }}
//           >
//             {word}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


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
//   const [isRed, setIsRed] = useState(Array(words.reduce((acc, word) => acc + (word.match(/[A-Z]/g) || []).length, 0)).fill(false));

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
//       setIsRed(Array(words.reduce((acc, word) => acc + (word.match(/[A-Z]/g) || []).length, 0)).fill(true));
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
//               const isCharRed = char.match(/[A-Z]/) && isRed.filter((val, i) => i < isRed.length - 1 && word.slice(0, charIndex).match(/[A-Z]/g)?.includes(word[i])).includes(true);
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

// const redLetters = ['E', 'K', 'I', 'R', 'B', 'S'];

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
//     setIsVisible((prev) => {
//       const newState = [...prev];
//       newState[activeIndex] = true;
//       return newState;
//     });
//   }, [activeIndex]);

//   useEffect(() => {
//     if (isVisible.every((val) => val)) {
//       setIsRed((prev) => {
//         const newState = [...prev];
//         words[activeIndex]
//           .split('')
//           .forEach((char, index) => {
//             if (redLetters.includes(char)) {
//               newState[activeIndex * 10 + index] = true;
//             }
//           });
//         return newState;
//       });
//     }
//   }, [isVisible]);

//   return (
//     <div className='home-card'>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         {words.map((word, wordIndex) => (
//           <div
//             key={word}
//             style={{
//               opacity: isVisible[wordIndex] ? 1 : 0,
//               transition: 'opacity 1s ease-in-out',
//             }}
//           >
//             {word.split('').map((char, charIndex) => (
//               <span
//                 key={wordIndex * 10 + charIndex}
//                 style={{
//                   color: isRed[wordIndex * 10 + charIndex] ? 'red' : 'inherit',
//                 }}
//               >
//                 {char}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


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

//   useEffect(() => {
//     const wordTimer = setInterval(() => {
//       setActiveIndex((activeIndex) => (activeIndex + 1) % words.length);
//     }, 1000);

//     return () => {
//       clearInterval(wordTimer);
//     };
//   }, [words]);

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
//             {word}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



















// import React, { useState, useEffect } from 'react';

// import './styleAlt.css';

// const words = [
//   'web development',
//   'hardworking',
//   'responsive design',
//   'creative',
//   'mobile minded',
//   'professional',
// ];

// export default function About() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const wordTimer = setInterval(() => {
//       setActiveIndex((activeIndex) => (activeIndex + 1) % words.length);
//     }, 1000);

//     return () => {
//       clearInterval(wordTimer);
//     };
//   }, [words]);

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
//               opacity: index === activeIndex ? 1 : 0,
//               transition: 'opacity 1s ease-in-out',
//             }}
//           >
//             {word}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


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
//   const [isWordsVisible, setIsWordsVisible] = useState(false);
//   const [isRedAnimating, setIsRedAnimating] = useState(false);

//   useEffect(() => {
//     const wordTimer = setInterval(() => {
//       setActiveIndex((activeIndex) => (activeIndex + 1) % words.length);
//     }, 1000);

//     setTimeout(() => {
//       setIsWordsVisible(true);
//     }, 1000);

//     return () => {
//       clearInterval(wordTimer);
//     };
//   }, [words]);

//   useEffect(() => {
//     if (isWordsVisible && !isRedAnimating) {
//       setIsRedAnimating(true);
//       setTimeout(() => {
//         setIsRedAnimating(false);
//       }, 1000);
//     }
//   }, [isWordsVisible]);

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
//               opacity: index <= activeIndex ? 1 : 0,
//               transition: 'opacity 1s ease-in-out',
//             }}
//           >
//             <span
//               style={{
//                 color:
//                   isRedAnimating && index === 0 && word[0] === 'E' ? 'red' : 'black',
//                 transition: isRedAnimating ? 'color 1s ease-in-out' : '',
//               }}
//             >
//               {word[0]}
//             </span>
//             {word.slice(1)}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }