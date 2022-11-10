import React from 'react';
import {Svg} from '../styles/svg';

export const WalletIcon = () => {
   return (
      <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
         <Svg.Path
            css={{
               fill: '$accents9',
            }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42,34c0,2.2061005,1.7939987,4,4,4c2.2061005,0,4-1.7938995,4-4c0-2.2059994-1.7938995-4-4-4
            C43.7939987,30,42,31.7940006,42,34z M46,32c1.1026039,0,2,0.8974991,2,2c0,1.1026001-0.8973961,2-2,2
            c-1.1025009,0-2-0.8973999-2-2C44,32.8974991,44.8974991,32,46,32z"
         ></Svg.Path>
      </Svg>
   );
};
