import {Button, Divider, Grid, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from '../navbar/logo';
import {Flex} from '../styles/flex';

export const Trusted = () => {
   return (
      <>
         <Flex
            direction={'column'}
            align={'center'}
            css={{
               'pb': '$10',
               'pt': '$20',
               'margin': '5px 0px 5px 0px',
               'px': '$6',
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Text h2 css={{textAlign: 'center'}}>
               Character & Glyph Domains.
            </Text>
            <Text h4>
               A way to represent yourself uniquely, other than 
               <span style={{
                  borderStyle: 'dashed',
                  border: 'dashed 2px',
                  borderRadius: '4px',
                  padding: '4px',
                  marginLeft: '8px',
                  fontSize: '25px !important',
                  }}>
                  g1k8p7x8...xdlg6w50
               </span> 
            </Text>
            {/* <Text
               css={{
                  color: '$accents8',
                  maxWidth: '800px',
                  textAlign: 'center',
               }}
               weight="normal"
               size={'$lg'}
            >
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text> */}
            <Grid.Container
               gap={6}
               alignItems="center"
               justify="center"
               css={{
                  'margin':'10px',
                  'padding':'20px',
                  'width': '100%',
                  '@sm': {
                     width: '100%',
                  },
                  '&  span': {
                     whiteSpace: 'pre',
                     fontSize: '26px',
                  },
               }}
            >
               <Grid sm={3} justify="center">
                  <div style={{
                     borderBottom: '1px solid transparent',
                     borderImage: 'linear-gradient(to right, red , yellow)',
                     borderImageSlice: '1'
                  }}>
                     <Flex align={'center'} justify={'center'}>
                        {/* <AcmeLogo /> */}
                        <Text weight={'semibold'} span size={'$lg'}>
                           ⚛️.gno
                        </Text>
                     </Flex>
                  </div>   
               </Grid>
               <Grid sm={3} justify="center">
                  <div style={{
                     borderBottom: '1px solid transparent',
                     borderImage: 'linear-gradient(to right, red , yellow)',
                     borderImageSlice: '1'
                  }}>
                     <Flex align={'center'}>
                        {/* <AcmeLogo />{' '} */}
                        <Text weight={'semibold'} span size={'$lg'}>
                           meta.gno
                        </Text>
                     </Flex>
                  </div>   
               </Grid>
               <Grid sm={3} justify="center">
                  <div style={{
                     borderBottom: '1px solid transparent',
                     borderImage: 'linear-gradient(to right, red , yellow)',
                     borderImageSlice: '1'
                  }}>
                     <Flex align={'center'}>
                        <Text weight={'semibold'} span size={'$lg'}>
                           抹茶.gno
                        </Text>
                     </Flex>
                  </div>
               </Grid>
               <Grid sm={3} justify="center">
                  <div style={{
                        borderBottom: '1px solid transparent',
                        borderImage: 'linear-gradient(to right, red , yellow)',
                        borderImageSlice: '1'
                  }}>
                     <Flex align={'center'}>
                        <Text weight={'semibold'} span size={'$lg'}>
                           💎.gno
                        </Text>
                     </Flex>
                  </div>
               </Grid>
            </Grid.Container>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
