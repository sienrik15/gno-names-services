import {Button, Divider, Input, Text, Modal,Image} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Hero = () => {
   const [visible, setVisible] = React.useState(false);
   const handler = () => setVisible(true);


   const closeHandler = () => {
      setVisible(false);
      console.log('closed');
   };
   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$20',
               },
               marginTop: '30px !important'
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',

                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
               style={{zIndex:'2'}}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <Text
                     h2
                     css={{
                        display: 'inline',
                        fontSize: '42px'
                     }}
                  >
                     GNO Chain Domain Name Service{' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                        fontSize: '42px'
                     }}
                  >
                     starts here with {' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                     color="#bda42c"
                  >
                     .gno {' '}
                  </Text>
               </Box>

               
               <Text
                  css={{
                     //color: '$accents8',
                     maxWidth: '700px',
                     //color: '#d1d1d1',
                     fontSize: '18px !important',
                  }}
                  size={'$lg'}
                  span
               >
                  Get your .gno & .gnot domain can be used to represent you in  {' '}
                  <strong>
                     gnoland space
                  </strong>
               </Text>

               <form
                  //action="#"
                  method="dialog"
                  onSubmit={handler}
               >  
               <Flex
                  css={{
                     gap: '$4',
                     pt: '$4',
                  }}
                  wrap={'wrap'}
                  //justify = {'center'}
                  align={'center'}
               >
                  <Input
                     id='names-input'
                     bordered 
                     animated={false}
                     labelRight=".gno" 
                     placeholder="search names" 
                     size="xl"
                     width="70%" 
                     css = {{
                        '& label':{
                           'box-shadow': '0 0 0 var(--nextui--inputBorderWeight) var(--nextui--inputHoverBorderColor)'
                        }
                     }}
                  />
                  <Button onClick={handler} css={{background:'#ffffff', color:'#000000'}} size="lg" auto>Search</Button>
               </Flex>
               </form>  
               
               {/* <Flex
                  wrap={'wrap'}
                  css={{
                     'gap': '$8',
                     'py': '$7',
                     '@sm': {
                        py: '$4',
                     },
                  }}
               >
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> No credit card required.
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> 14-day free trial.
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> Cancel anytime.
                  </Flex>
               </Flex> */}
            </Box>
            <Box
               css={{
                  '& img': {
                     width: '450px',
                     objectFit: 'contain',
                  },
               }}
            >
               <div style={{position: 'relative',width: '428px', height:'497px'}}>
                <div style={{backgroundImage:'url(metaverse-women-id-gno.webp)',backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',backgroundPositionX: 'right', position: 'absolute',width: '450px',
                height:'497px',zIndex:'2',bottom: '-30px',right:'-25px'}} />
               </div>
            </Box>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
         {/*opacity: 20%;filter: invert(100%); */}
         <img style={{position: 'absolute',top: '76px', transform: 'scaleX(-1)', zIndex:'0', opacity:'46%',}} src="gno-universe.png" />
         <img style={{position: 'absolute', zIndex:'0', top:'0px',width: '100%'}} src="stars-desktop-gno.webp" />  
         <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
         >
            <Modal.Header>
               {/* <Text id="modal-title" size={18}>
                  Welcome to
                  <Text b size={18}>
                     NextUI
                  </Text>
               </Text> */}
               <Flex 
                  //direction={'column'}
                  align={'center'}
                  css={{
                     //maxWidth: '600px',
                     padding: '15px'
                  }}
               >
                  <Image
                     src="gno-names-id-logo.png"
                     alt="Default Image"
                     width={32}
                     height={32}
                     css={{
                        filter: 'invert(100%)'
                     }}
                  />
                  <Text b color="inherit" hideIn="xs">
                     GNO DOMAINS
                  </Text>
               </Flex>
               
            </Modal.Header>
            <Modal.Body>
               <Box
                     css={{
                        //maxWidth: '600px',
                        textAlign: 'center',
                        padding: '10px',
                        'pb': '30px'
                     }}
                     
                  >
                     <Text
                        h3
                        css={{
                           display: 'inline',
                           padding:'5px',
                           letterSpacing: '10px'
                        }}
                     >
                        ON{' '}
                     </Text>
                     <Text
                        h3
                        css={{
                           display: 'inline',
                           padding:'5px',
                           letterSpacing: '10px'
                        }}
                     >
                        COMING {' '}
                     </Text>
               </Box>
               
               
               {/* <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Email"
                  //   contentLeft={<Mail fill="currentColor" />}
               />
               <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Password"
                  //   contentLeft={<Password fill="currentColor" />}
               />
               <Row justify="space-between">
                  <Checkbox>
                     <Text size={14}>Remember me</Text>
                  </Checkbox>
                  <Text size={14}>Forgot password?</Text>
               </Row> */}
            </Modal.Body>
            {/* <Modal.Footer>
               <Button auto flat color="error" onClick={closeHandler}>
                  Close
               </Button>
               <Button auto onClick={closeHandler}>
                  Sign in
               </Button>
            </Modal.Footer> */}
         </Modal> 
      </>
   );
};