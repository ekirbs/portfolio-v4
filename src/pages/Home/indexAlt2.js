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
  const [isWordsVisible, setIsWordsVisible] = useState(false);
  const [isRedAnimating, setIsRedAnimating] = useState(false);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % words.length);
    }, 1000);

    setTimeout(() => {
      setIsWordsVisible(true);
    }, 1000);

    return () => {
      clearInterval(wordTimer);
    };
  }, []);

  useEffect(() => {
    if (isWordsVisible && !isRedAnimating && activeIndex === words.length - 1) {
      setIsRedAnimating(true);
      setTimeout(() => {
        setIsRedAnimating(false);
      }, 1000);
    }
  }, [isWordsVisible, activeIndex, isRedAnimating]);

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
              opacity: isWordsVisible ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          >
            {word.split('').map((letter, letterIndex) => (
              <span
                key={letterIndex}
                style={{
                  color:
                    isRedAnimating && letterIndex === word.indexOf('E')
                      ? 'red'
                      : 'black',
                  transition: isRedAnimating ? 'color 1s ease-in-out' : '',
                }}
              >
                {letter}
              </span>
            ))}
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
//               opacity: isWordsVisible ? 1 : 0,
//               transition: 'opacity 1s ease-in-out',
//             }}
//           >
//             <span
//               style={{
//                 color: isRedAnimating && index === activeIndex ? 'red' : 'black',
//                 transition: isRedAnimating ? 'color 1s ease-in-out' : '',
//               }}
//             >
//               {word.split('').map((char, i) => (
//                 <span
//                   key={i}
//                   style={{ color: i === 0 ? 'black' : 'inherit' }}
//                 >
//                   {char}
//                 </span>
//               ))}
//             </span>
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

// const capitalLetters = ['E', 'K', 'I', 'R', 'B', 'S'];

// export default function About() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isWordsVisible, setIsWordsVisible] = useState(false);
//   const [isRedAnimating, setIsRedAnimating] = useState(false);
//   const [isDoneAnimating, setIsDoneAnimating] = useState(false);

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
//     if (isWordsVisible && !isDoneAnimating) {
//       setIsDoneAnimating(true);
//       setTimeout(() => {
//         setIsRedAnimating(true);
//       }, 1000);
//     }
//   }, [isWordsVisible, isDoneAnimating]);

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
//               opacity: isWordsVisible ? 1 : 0,
//               transition: 'opacity 1s ease-in-out',
//             }}
//           >
//             <span
//               style={{
//                 color: isRedAnimating && capitalLetters.includes(word[0])
//                   ? 'red'
//                   : 'black',
//                 transition: isRedAnimating ? 'color 1s ease-in-out' : '',
//               }}
//             >
//               {word}
//             </span>
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
//               opacity: isWordsVisible ? 1 : 0,
//               transition: 'opacity 1s ease-in-out',
//               color: isRedAnimating && index === activeIndex ? 'red' : 'black',
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
//       if (activeIndex === 0) {
//         setTimeout(() => {
//           setIsWordsVisible(true);
//         }, 1000);
//       }
//     }, 1000);

//     return () => {
//       clearInterval(wordTimer);
//     };
//   }, [words]);

//   useEffect(() => {
//     if (isWordsVisible && !isRedAnimating && activeIndex === words.length - 1) {
//       setIsRedAnimating(true);
//       setTimeout(() => {
//         setIsRedAnimating(false);
//       }, 1000);
//     }
//   }, [isWordsVisible, isRedAnimating, activeIndex]);

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
//               opacity: isWordsVisible ? 1 : 0,
//               transition: 'opacity 1s ease-in-out',
//             }}
//           >
//             <span
//               style={{
//                 color:
//                   isRedAnimating && index === activeIndex
//                     ? 'red'
//                     : index === 3 || index === 6 || index === 8 || index === 10 || index === 14 || index === 19
//                     ? 'black'
//                     : 'red',
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
//               opacity: isWordsVisible ? 1 : 0,
//               transition: 'opacity 1s ease-in-out',
//             }}
//           >
//             <span
//               style={{
//                 color:
//                   isRedAnimating && index === activeIndex ? 'red' : 'black',
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
//   const [isCapitalAnimating, setIsCapitalAnimating] = useState(false);
//   const [isWordsVisible, setIsWordsVisible] = useState(false);

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
//     if (activeIndex === words.length - 1) {
//       setTimeout(() => {
//         setIsCapitalAnimating(true);
//       }, 1000);
//     }
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
//               opacity: isWordsVisible ? 1 : 0,
//               transition: 'opacity 1s ease-in-out',
//             }}
//           >
//             <span
//               style={{
//                 color:
//                   isCapitalAnimating && index === activeIndex ? 'red' : 'black',
//                 transition: isCapitalAnimating
//                   ? 'color 1s ease-in-out'
//                   : '',
//               }}
//             >
//               {word[0]}
//             </span>
//             {word.slice(1).toLowerCase()}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


//     const capitalTimer = setTimeout(() => {
//       setIsCapitalAnimating(true);
//     }, 6000);
//     return () => {
//       clearInterval(wordTimer);
//       clearTimeout(capitalTimer);
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
//             <span
//               style={{
//                 color:
//                   isCapitalAnimating && index === activeIndex ? 'red' : 'black',
//                 transition: 'color 1s ease-in-out',
//               }}
//             >
//               {word[0]}
//             </span>
//             {word.slice(1).toLowerCase()}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }