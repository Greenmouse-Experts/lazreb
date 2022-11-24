import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import { BookSit } from './Bas';
import { HireBus } from './Hav';
import { MakeDeliver } from './Md';

export const HeroForm = () => {
   const data = [
    {
      label: <p className='text-primary fw-600'>Book a seat</p>,
      value: "html",
      desc: 
      <div>
        <BookSit/>
      </div>,
    },
    {
      label: <p className='text-primary fw-600'>Hire a vehicle</p>,
      value: "react",
      desc: <div>
      <HireBus/>
    </div>,
    },
 
    {
      label: <p className='text-primary fw-600'>Make delivery</p>,
      value: "vue",
      desc: <div>
      <MakeDeliver/>
    </div>,
    },
  ];
 
  return (
    <Tabs id="custom-animation" value="html">
      <TabsHeader className='py-3 bg-white lg:px-2 rounded-t-lg '>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="fs-400">
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
        className="pb-6 pt-3 px-3 text-white"
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="text-white">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
