import { Flex } from '../styles/flex';
import { Box } from '../styles/box';
import React, { useState, useEffect } from 'react';
import {
   Modal,
   Input,
   Row,
   Checkbox,
   Button,
   Text,
   Navbar,
   Link,
   Image
} from '@nextui-org/react';

export const ModalLogin = () => {
   const [visible, setVisible] = React.useState(false);
   const handler = () => setVisible(true);


   const closeHandler = () => {
      setVisible(false);
      console.log('closed');
   };
   return (
      <div>
         {/* <Navbar.Link onClick={handler}>Login</Navbar.Link> */}
         
         <Button onClick={handler} auto href="#" bordered color="gradient" borderWeight="extrabold" size="lg">
            <strong>Connect wallet</strong> 
         </Button>
         
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
                     GNO NAMES
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
      </div>
   );
};
