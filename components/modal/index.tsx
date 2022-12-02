import { Flex } from '../styles/flex';
import { Box } from '../styles/box';
import React, { useState, useEffect, useRef } from 'react';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';

import {
   Modal,
   Input,
   Row,
   Checkbox,
   Button,
   Text,
   Navbar,
   Link,
   Image,
   Grid,
   Card,
   User,
   Popover
} from '@nextui-org/react';
import { LogoCircularAdena } from '../icons/LogoCircularAdena';
import { LogoCircularKeplr } from '../icons/LogoCircularKeplr';

export const ModalLogin = () => {
   const [visible, setVisible] = useState(false);
   const [conectWallet, setConectWallet] = useState();
   const [accountData, setAccountData] = useState();
   const handler = () => setVisible(true);
   const firstRender = useRef(true);


   useEffect(() => {
      window.addEventListener("load", detectWallet, true);
   })

   function detectWallet(){
      var account:any = getCookie('accountdata')
      if (firstRender.current && account) {
         firstRender.current = false;
         //@ts-ignore
         if (window.adena) {
            initAdenaWallet()
         }
      }
   }

   function disconnectWallet(){
      console.log("delet")
      deleteCookie("conectwallet")
      deleteCookie("accountdata")
      setAccountData(undefined)
      setConectWallet(undefined)
   }

   async function initAdenaWallet() {
      //@ts-ignore
      adena.AddEstablish("GNO Domains").then((data) => {
            
         switch (data.type) {
            case "CONNECTION_SUCCESS":
               var objectString = JSON.stringify(data);
               setCookie('conectwallet', objectString);         
               setConectWallet(data)
               //@ts-ignore
               window.adena.GetAccount().then((account)=>{
                  var objectString = JSON.stringify(account);
                  setCookie('accountdata', objectString);         
                  setAccountData(account)
                  closeHandler()
               })                  
               break;
            case "ALREADY_CONNECTED":
               var conect:any = getCookie('conectwallet')
               if(conect!=undefined){
                  var object = JSON.parse(conect)
                  setConectWallet(object)
               }else{
                  var objectString = JSON.stringify(data);
                  setCookie('conectwallet', objectString);         
                  setConectWallet(data)
               }

               var account:any = getCookie('accountdata')
               if(account!=undefined){
                  var object = JSON.parse(account)
                  setAccountData(object)
               }else{
                  //@ts-ignore
                  window.adena.GetAccount().then((account)=>{
                     var objectString = JSON.stringify(account);
                     setCookie('accountdata', objectString);         
                     setAccountData(account)
                     closeHandler()
                  })
               }
               closeHandler()
               break;
            default:
               break;
         }
         
      });
   }

   async function loginAdenaWallet (){
      //@ts-ignore
      if (!window.adena) {
         //open adena.app in a new tab if the adena object is not found
         window.open("https://adena.app/", "_blank");
      } else {
         //@ts-ignore
         initAdenaWallet()
      }
   }

   const closeHandler = () => {
      setVisible(false);
   };

   function getCoinGNOT() : any {
      if (accountData) {
         //@ts-ignore
         return parseInt(accountData.data.coins)/1000000
      }else {
         return 0
      }

   }

   return (
      <div>
         {accountData ? (
            
            <Popover placement="bottom-right">
               <Popover.Trigger>
                  <User
                     //bordered
                     as="button"
                     onClick={()=>{}}
                     //pointer
                     src="logo-circular-adena.svg"
                     //@ts-ignore
                     name="_.gno"//{accountData.data.address}
                     size="ms"
                     color="success"
                     css={{
                        '& span': {
                           textTransform: 'lowercase',
                           fontSize:"16px", //"16PX"
                           fontWeight: 'bold',
                           maxWidth: "100px",
                        },
                        '& .nextui-user-info': {
                           //marginLeft: '4px',
                        },
                        '& .nextui-user-avatar':{
                           minWidth: '34px',
                           minHeight: '34px',
                        }
                     }}
                  />
               </Popover.Trigger>
               <Popover.Content css={{borderBottom: "solid 1px"}}>
                  <Grid.Container
                     className="user-twitter-card__metrics-container"
                     justify="flex-start"
                     alignContent="center"
                     css={{
                        mw: "340px",
                        borderRadius: "$lg",
                        padding: "$sm",
                     }}
                  >
                     <Row justify="center" align="center">
                        <Text b size={14} css={{textTransform: 'uppercase',}}>
                           {/*@ts-ignore*/}
                           GNO {accountData.data.chainId}
                        </Text>
                     </Row>  
                     <Row css={{paddingTop:"10px",paddingBottom:'10px'}} justify="center" align="center">
                        <Text size={14}>
                        {/*@ts-ignore*/}
                        <strong>{accountData.data.address}</strong>
                        </Text>
                     </Row> 
                     <Row>
                        <Text css={{color:'#8d8d8d'}}>
                           Balance
                        </Text>
                     </Row>
                     <Row justify="center" align="center" css={{borderBottom: "solid 1px #3f3f3f", marginBottom:"8px"}} >
                        <Text size={20} css={{marginBottom:"8px"}}>
                           <strong>{getCoinGNOT()} GNOT</strong>
                        </Text>
                     </Row> 
                     <Row css={{paddingTop:"10px",paddingBottom:'10px'}} justify="center" align="center">
                        <Button onPress={()=>{disconnectWallet()}} size="sm" bordered css={{borderColor:'#ffffff', color:'#ffffff'}}>
                           Disconnect
                        </Button>
                     </Row>  
                  </Grid.Container>
               </Popover.Content>
            </Popover>
         ) : (
            <Button onPress={handler} auto href="#" bordered color="gradient" borderWeight="extrabold" size="lg">
               <strong>Connect wallet</strong> 
            </Button>
         )}
      
         <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
         >
            <Modal.Header>
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
               {/* <Box
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
               </Box> */}
               <Box
                  css={{
                     marginBottom:'30px !important',
                  }}
                  >
               {/* <Image
                  src="logo-circular-adena.svg"
                  alt="Default Image"
                  width={30}
                  height={30}
                  css={{
                     display: 'inline-block',
                  }}
               />
               <Text
                  h4
                  css={{
                     display: 'inline-block',
                     padding:'5px',
                     letterSpacing: '3px'
                  }}
               >
                  Adena Wallet
               </Text> */}
                  <Button 
                     //@ts-ignore
                     icon={<LogoCircularAdena width={40} height={40} />}
                     size="xl"
                     bordered
                     onPress={()=>{loginAdenaWallet()}}
                     css={{
                        width: '100%',
                        margin:'6px',
                        borderColor: '#28415e',
                     }}
                     >
                     Adena Wallet
                  </Button>
                  <Button 
                     //@ts-ignore
                     icon={<LogoCircularKeplr width={40} height={40} />}
                     size="xl"
                     bordered
                     disabled
                     css={{
                        width: '100%',
                        margin:'6px',
                        borderColor: '#28415e',
                     }}
                     >
                     Keplr Wallet
                  </Button>
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
