// import React from 'react';
// import './Experiencecard.css';
// const Experiencecard = ({details}) => {
//   return (
//     <div className='par'>
//     <div className='work-card'>
//         <h4>{details.title}</h4>

//         <div className='work-time'>{details.date}</div>

//         <ul>
//             {details.responsibilities.map((item)=>(
//                 <li key={item}>{item}</li>
//             ))}
//         </ul>
//     </div>
//     </div>
//   )
// }

// export default Experiencecard;

import React from 'react';
import ScrambleText from '../../ScrambleText/ScrambleText';
import './Experiencecard.css';

const Experiencecard = ({ details }) => {
  const items = details?.responsibilities ?? [];
  const baseDelay = 0;
  const step = 120; // ms between each line starting

  return (
    <div className="par">
      <div className="work-card">
        <h4>
          <ScrambleText
            text={details?.title ?? ''}
            mode="inline"
            delay={baseDelay}
            duration={600}
            triggerOnScroll
            className="work-title"
          />
        </h4>

        <div className="work-time">
          <ScrambleText
            text={details?.date ?? ''}
            mode="inline"
            delay={baseDelay + step}
            duration={500}
            triggerOnScroll
          />
        </div>

        <ul>
          {items.map((item, i) => (
            <li key={`${i}-${item?.slice?.(0,16) || 'item'}`}>
              <ScrambleText
                text={item}
                mode="block"
                delay={baseDelay + (i + 2) * step}
                duration={500}
                triggerOnScroll
                className="work-li"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experiencecard;
