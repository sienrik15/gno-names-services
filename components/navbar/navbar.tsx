import {Button, Dropdown, Link, Navbar, Switch, Text, Image} from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import {AcmeLogo} from './logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../icons/GithubIcon';
import {WalletIcon} from '../icons/WalletIcon';

export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   
   //setTheme('dark')
    useEffect(() => {
      //setTheme('dark')
   })

   const collapseItems = [
      'Features',
      'Customers',
      'Pricing',
      'Company',
      'Legal',
   ];
   return (
      <>
         <Navbar
         isBordered={isDark}
         variant="sticky"
         maxWidth="fluid"
         css={{
            //'overflow': 'hidden',
            '& .nextui-navbar-container': {
               //background: '$background',
               //borderBottom: 'solid 1px',
               paddingLeft:'8%',
               paddingRight:'8%'
            },
         }}
      >
         <Navbar.Brand>
            {/* <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />*/}
            {/* <AcmeLogo /> */}
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
         </Navbar.Brand>
         <Navbar.Content
            // hideIn="sm"
            // css={{
            //    pl: '6rem',
            // }}
            variant="underline-rounded"
            enableCursorHighlight 
            hideIn="xs"
         >
            {/* <Dropdown isBordered>
               <Navbar.Item>
                  <Dropdown.Button
                     auto
                     light
                     css={{
                        px: 0,
                        dflex: 'center',
                        svg: {pe: 'none'},
                     }}
                     iconRight={icons.chevron}
                     ripple={false}
                  >
                     Features
                  </Dropdown.Button>
               </Navbar.Item>
               <Dropdown.Menu
                  aria-label="ACME features"
                  css={{
                     '$$dropdownMenuWidth': '340px',
                     '$$dropdownItemHeight': '70px',
                     '& .nextui-dropdown-item': {
                        'py': '$4',
                        'svg': {
                           color: '$secondary',
                           mr: '$4',
                        },
                        '& .nextui-dropdown-item-content': {
                           w: '100%',
                           fontWeight: '$semibold',
                        },
                     },
                  }}
               >
                  <Dropdown.Item
                     key="autoscaling"
                     showFullDescription
                     description="ACME scales apps to meet user demand, automagically, based on load."
                     icon={icons.scale}
                  >
                     Autoscaling
                  </Dropdown.Item>
                  <Dropdown.Item
                     key="usage_metrics"
                     showFullDescription
                     description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                     icon={icons.activity}
                  >
                     Usage Metrics
                  </Dropdown.Item>
                  <Dropdown.Item
                     key="production_ready"
                     showFullDescription
                     description="ACME runs on ACME, join us and others serving requests at web scale."
                     icon={icons.flash}
                  >
                     Production Ready
                  </Dropdown.Item>
                  <Dropdown.Item
                     key="99_uptime"
                     showFullDescription
                     description="Applications stay on the grid with high availability and high uptime guarantees."
                     icon={icons.server}
                  >
                     +99% Uptime
                  </Dropdown.Item>
                  <Dropdown.Item
                     key="supreme_support"
                     showFullDescription
                     description="Overcome any challenge with a supporting team ready to respond."
                     icon={icons.user}
                  >
                     +Supreme Support
                  </Dropdown.Item>
               </Dropdown.Menu>
            </Dropdown> */}
            <Navbar.Link  isActive href="/">
               Domain
            </Navbar.Link>
            <Navbar.Link href="#">
               Learn GNS
               <span style={{
                      position: 'absolute',
                      bottom: '12px',
                      fontSize: '12px',
                      color: '#ebf11c',
                      width: '100%',
                      fontWeight:'500',
                      textAlign: 'center'}}>
                        on caming
               </span>
            </Navbar.Link>
            <Navbar.Link href="https://twitter.com/gnodomains">
               Community
               <Image
                  src="twitter-icon.svg"
                  alt="Default Image"
                  width={16}
                  height={16}
               />
            </Navbar.Link>
            {/* <Navbar.Link href="#">
               Twitter
            </Navbar.Link> */}
         </Navbar.Content>
         {/* <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href="#"
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}
            <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/Siumauricio/landing-template-nextui"
               >
                  <GithubIcon />
               </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem>
         </Navbar.Collapse> */}
         <Navbar.Content>
            <ModalLogin />

            {/* <Navbar.Item>
               <Button auto href="#" bordered color="gradient" borderWeight="extrabold" size="lg">
                  <strong>Connect wallet</strong> 
               </Button>
            </Navbar.Item> */}
            {/* <Navbar.Item hideIn={'xs'}>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/Siumauricio/landing-template-nextui"
               >
                  <GithubIcon />
               </Link>
            </Navbar.Item> */}
            {/* <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item> */}
         </Navbar.Content>
      </Navbar>
      </>
        
   );
};
