import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import "./styleAlt.css";

const words = [
  "web devElopment",
  "hardworKing",
  "responsIve design",
  "cReative",
  "moBile minded",
  "profesSional",
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(Array(words.length).fill(false));
  const [isRed, setIsRed] = useState(Array(words.length).fill(false));
  const [isEnlarged, setIsEnlarged] = useState(Array(words.length).fill(false));
  const [isShadowed, setIsShadowed] = useState(Array(words.length).fill(false));

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Alegreya Sans SC', 'sans-serif']
      }
    });
   }, []);

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
      setIsRed(
        words.map((word) => {
          const capitalLetterIndex = word
            .split("")
            .findIndex(
              (char) => char === char.toUpperCase() && char.match(/[A-Z]/)
            );
          return capitalLetterIndex !== -1;
        })
      );
      setIsEnlarged(
        words.map((word) => {
          const capitalLetterIndex = word
            .split("")
            .findIndex(
              (char) => char === char.toUpperCase() && char.match(/[A-Z]/)
            );
          return capitalLetterIndex !== -1;
        })
      );
      setIsShadowed(
        words.map((word) => {
          const capitalLetterIndex = word
            .split("")
            .findIndex(
              (char) => char === char.toUpperCase() && char.match(/[A-Z]/)
            );
          return capitalLetterIndex !== -1;
        })
      );
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
    <div className="home-card">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70vh",
          width: "96vw",
        }}
      >
        {words.map((word, index) => (
          <div
            key={word}
            style={{
              opacity: isVisible[index] ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              justifyContent: "space-between",
            }}
            className="word-div"
          >
            {word.split("").map((char, charIndex) => {
              const isCharRed =
                isRed[index] &&
                char.match(/[A-Z]/) &&
                charIndex ===
                  word
                    .split("")
                    .findIndex(
                      (char) =>
                        char === char.toUpperCase() && char.match(/[A-Z]/)
                    );
              const isCharEnlarged = isEnlarged[index] && isCharRed;
              const isCharShadowed = isShadowed[index] && isCharRed;
              return (
                <span
                  key={`${charIndex}-${word}`}
                  style={{
                    fontFamily: 'Alegreya Sans SC',
                    color: isCharRed ? "red" : "white",
                    // fontSize: isCharEnlarged ? "12vh" : undefined,
                    fontSize: isCharEnlarged ? "350%" : undefined,
                    textShadow: isCharShadowed ? "2px 2px 4px var(--white)" : undefined,
                    transition: isCharRed
                      ? "color 2s ease-in-out, font-size 2s ease-in-out, text-shadow 2s ease-in-out"
                      : "none",
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

// import React, { useState, useEffect } from "react";
// import WebFont from "webfontloader";
// import "./styleAlt.css";

// const words = [
//   "web devElopment",
//   "hardworKing",
//   "responsIve design",
//   "cReative",
//   "moBile minded",
//   "profesSional",
// ];

// // const words = [
// //   "WEB DEVELOPMENT",
// //   "HARDWORKING",
// //   "RESPONSIVE DESIGN",
// //   "CREATIVE",
// //   "MOBILE MINDED",
// //   "PROFESSIONAL",
// // ];

// export default function About() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(Array(words.length).fill(false));
//   // const [isWhite, setIsWhite] = useState(Array(words.length).fill(true));
//   const [isRed, setIsRed] = useState(Array(words.length).fill(false));
//   const [isEnlarged, setIsEnlarged] = useState(Array(words.length).fill(false));
//   const [isShadowed, setIsShadowed] = useState(Array(words.length).fill(false));

//   useEffect(() => {
//     WebFont.load({
//       google: {
//         families: ['Alegreya Sans SC', 'sans-serif']
//       }
//     });
//    }, []);

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
//       setIsRed(
//         words.map((word) => {
//           const capitalLetterIndex = word
//             .split("")
//             .findIndex(
//               (char) => char === char.toUpperCase() && char.match(/[A-Z]/)
//             );
//           return capitalLetterIndex !== -1;
//         })
//       );
//       setIsEnlarged(
//         words.map((word) => {
//           const capitalLetterIndex = word
//             .split("")
//             .findIndex(
//               (char) => char === char.toUpperCase() && char.match(/[A-Z]/)
//             );
//           return capitalLetterIndex !== -1;
//         })
//       );
//       // setIsEnlarged(
//       //   words.map((word) => {
//       //     return word.split("").map((char) => char === char.toUpperCase());
//       //   })
//       // );
//       setIsShadowed(
//         words.map((word) => {
//           const capitalLetterIndex = word
//             .split("")
//             .findIndex(
//               (char) => char === char.toUpperCase() && char.match(/[A-Z]/)
//             );
//           return capitalLetterIndex !== -1;
//         })
//       );
//       // setIsWhite(
//       //   words.map((word) => {
//       //     const capitalLetterIndex = word
//       //       .split("")
//       //       .findIndex(
//       //         (char) => char === char.toUpperCase() && char.match(/[A-Z]/)
//       //       );
//       //     return capitalLetterIndex === -1;
//       //   })
//       // );
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
//     <div className="home-card">
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "space-between",
//           height: "70vh",
//           width: "96vw",
//         }}
//       >
//         {words.map((word, index) => (
//           <div
//             key={word}
//             style={{
//               opacity: isVisible[index] ? 1 : 0,
//               transition: "opacity 1s ease-in-out",
//               justifyContent: "space-between",
//             }}
//             className="word-div"
//           >
//             {word.split("").map((char, charIndex) => {
//               const isCharRed =
//                 isRed[index] &&
//                 char.match(/[A-Z]/) &&
//                 charIndex ===
//                   word
//                     .split("")
//                     .findIndex(
//                       (char) =>
//                         char === char.toUpperCase() && char.match(/[A-Z]/)
//                     );
//               const isCharEnlarged = isEnlarged[index] && isCharRed;
//               const isCharShadowed = isShadowed[index] && isCharRed;
//               {/* const isCharWhite = isWhite[index] && !isCharRed; */}
//               return (
//                 <span
//                   key={`${charIndex}-${word}`}
//                   style={{
//                     fontFamily: 'Alegreya Sans SC',
//                     color: isCharRed ? "red" : "white",
//                     // color: isCharRed ? "red" : isCharWhite ? "white" : "var(--dark)",
//                     fontSize: isCharEnlarged ? "250%" : "150%",
//                     textShadow: isCharShadowed ? "2px 2px 4px var(--white)" : undefined,
//                     transition: isCharRed
//                       ? "color 2s ease-in-out, font-size 2s ease-in-out, text-shadow 2s ease-in-out"
//                       // : isCharWhite
//                       // ? "color 2s ease-in-out, font-size 2s ease-in-out"
//                       : "none",
//                     // transition: isCharRed || isCharWhite
//                     //   ? "color 2s ease-in-out, font-size 2s ease-in-out, text-shadow 2s ease-in-out"
//                     //   : "none",
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

// export default function About() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(Array(words.length).fill(false));
//   const [isRed, setIsRed] = useState(Array(words.length).fill(false));
//   const [isEnlarged, setIsEnlarged] = useState(Array(words.length).fill(false));

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
//       setIsRed(words.map((word, index) => {
//         const capitalLetterIndex = word.split('').findIndex((char) => char === char.toUpperCase() && char.match(/[A-Z]/));
//         return capitalLetterIndex !== -1;
//       }));
//       setTimeout(() => {
//         setIsEnlarged((prev) => {
//           const newState = [...prev];
//           newState[activeIndex] = true;
//           return newState;
//         });
//       }, 500);
//     }, 1000);

//     return () => {
//       clearTimeout(visibleTimer);
//     };
//   }, [isVisible, activeIndex]);

//   return (
//     <div className='home-card'>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: "space-between",
//           height: "70vh",
//           width: "96vw",
//         }}
//       >
//         {words.map((word, index) => (
//           <div
//             key={word}
//             style={{
//               opacity: isVisible[index] ? 1 : 0,
//               transition: 'opacity 1s ease-in-out',
//               justifyContent: "space-between",
//             }}
//             className="word-div"
//           >
//             {word.split('').map((char, charIndex) => {
//               const isCharRed = isRed[index] && char.match(/[A-Z]/) && charIndex === word.split('').findIndex((char) => char === char.toUpperCase() && char.match(/[A-Z]/));
//               const isCharEnlarged = isEnlarged[index] && isCharRed;
//               return (
//                 <span
//                   key={`${charIndex}-${word}`}
//                   style={{
//                     color: isCharRed ? 'red' : undefined,
//                     transition: isCharRed ? 'color 1s ease-in-out, font-size 1s ease-in-out' : undefined,
//                     fontSize: isCharRed ? "150%" : "100%",
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
//                   className={isCharRed ? "center-capital" : ""}
//                   style={{
//                     color: isCharRed ? "red" : undefined,
//                     transition: isCharRed ? "color 1s ease-in-out" : undefined,
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

// export default function About() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const getCapitalLetterIndex = (word) => {
//     return word.split('').findIndex((char) => char === char.toUpperCase() && char.match(/[A-Z]/));
//   }

//   const wordContainers = words.map((word, index) => {
//     const capitalLetterIndex = getCapitalLetterIndex(word);
//     const centerOffset = capitalLetterIndex * 12; // adjust this value to fine-tune the centering

//     return (
//       <div
//         key={word}
//         style={{
//           position: 'relative',
//           left: `calc(50% - ${centerOffset}px)`,
//         }}
//       >
//         {word}
//       </div>
//     );
//   });

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
//         {wordContainers[activeIndex]}
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import './styleAlt.css';

// const words = [  'web devElopment',  'hardworKing',  'responsIve design',  'cReative',  'moBile minded',  'profesSional',];

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
//       {words.map((word, index) => {
//         const capitalLetterIndex = word.split('').findIndex((char) => char === char.toUpperCase() && char.match(/[A-Z]/));
//         const centerIndex = Math.floor(word.length/2);
//         const leftPadding = `${(centerIndex-capitalLetterIndex)*0.5}em`;
//         const rightPadding = `${(word.length-centerIndex)*0.5}em`;
//         return (
//           <div
//             key={word}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               opacity: isVisible[index] ? 1 : 0,
//               transition: "opacity 1s ease-in-out",
//             }}
//           >
//             <div style={{ textAlign: "center", paddingLeft: leftPadding, paddingRight: rightPadding }}>
//               {word}
//             </div>
//             {word.split('').map((char, charIndex) => {
//               const isCharRed =
//                 isRed[index] &&
//                 char.match(/[A-Z]/) &&
//                 charIndex ===
//                   word
//                     .split('')
//                     .findIndex(
//                       (char) =>
//                         char === char.toUpperCase() && char.match(/[A-Z]/)
//                     );
//               return (
//                 <span
//                   key={`${charIndex}-${word}`}
//                   style={{
//                     color: isCharRed ? "red" : undefined,
//                     transition: isCharRed ? "color 1s ease-in-out" : undefined,
//                   }}
//                 >
//                   {char}
//                 </span>
//               );
//             })}
//           </div>
//         );
//       })}
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
//   const [isRed, setIsRed] = useState(Array(words.length).fill(false));
//   const [isEnlarged, setIsEnlarged] =useState(Array(words.length).fill(false));

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
//           justifyContent: "space-between",
//           height: "70vh",
//           width: "96vw",
//         }}
//       >
//         {words.map((word, index) => (
//           <div
//             key={word}
//             style={{
//               opacity: isVisible[index] ? 1 : 0,
//               transition: 'opacity 1s ease-in-out',
//               justifyContent: "space-between",
//             }}
//             className="word-div"
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
