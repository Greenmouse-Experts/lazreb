import React from 'react'
// import {
//     Tabs,
//     TabsHeader,
//     TabsBody,
//     Tab,
//     TabPanel,
//   } from "@material-tailwind/react";
import { Tabs } from 'flowbite-react';
import { BookSit } from './Bas';
import { HireBus } from './Hav';
import { MakeDeliver } from './Md';

// export const HeroForm = () => {

//   const theme = {
//     tabs: {
//       styles: {
//         base: {
//           display: "block",
//           overflow: "overflow-hidden",
//           zIndex: "20",
//         },
//       },
//     },
//   };

//    const data = [
//     {
//       label: <p className='text-primary fw-600'>Book a seat</p>,
//       value: "book seat",
//       desc: 
//       <div>
//         <BookSit/>
//       </div>,
//     },
//     {
//       label: <p className='text-primary fw-600'>Hire a vehicle</p>,
//       value: "hire vehicle",
//       desc: <div>
//       <HireBus/>
//     </div>,
//     },
 
//     {
//       label: <p className='text-primary fw-600'>Make delivery</p>,
//       value: "make delivery",
//       desc: <div>
//       <MakeDeliver/>
//     </div>,
//     },
//   ];
 
//   return (
//     <Tabs id="custom-animation" value="book seat" className={theme}>
//       <TabsHeader className='py-3 bg-white lg:px-2 rounded-t-lg  '>
//         {data.map(({ label, value }) => (
//           <Tab key={value} value={value} className="fs-400">
//             {label}
//           </Tab>
//         ))}
//       </TabsHeader>
//       <TabsBody
//         animate={{
//           mount: { y: 0 },
//           unmount: { y: 250 },
//         }}
//         className="pb-6 pt-3 px-3 text-white"
//       >
//         {data.map(({ value, desc }) => (
//           <TabPanel key={value} value={value} className="text-white">
//             {desc}
//           </TabPanel>
//         ))}
//       </TabsBody>
//     </Tabs>
//   );
// }

export const HerForm = () => {
    return (
      <Tabs.Group
        aria-label="default" // eslint-disable-next-line 
        style="pills"
        className='text-white fw-600 px-3 py-2'
        >
          <Tabs.Item 
            title="Book Seat"
            className='text-white bg-white'
            >
            <BookSit/>
          </Tabs.Item>
          <Tabs.Item
            
            title="Hire a Bus"
          >
            <HireBus/>
          </Tabs.Item>
          <Tabs.Item title="Make Delivery">
            <MakeDeliver/>
          </Tabs.Item>
        </Tabs.Group>
    )
}
