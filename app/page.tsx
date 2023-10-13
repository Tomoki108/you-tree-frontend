"use client";

import Image from "next/image";
import { AppBar, Tabs, Tab, CardContent, Box, Typography } from "@mui/material";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <p>
        You Tree is a service that allows you to create your own achievment
        management tree.
        <br />
        It can help you achieve your goals or acquire skills.
      </p> */}

      <AppBar color="default">
        <Image src="/logo.jpg" alt="You Tree" width={55} height={55} />
      </AppBar>

      <Tabs value={value} onChange={handleChange}>
        <Tab value={0} label="Tree 1" />
        <Tab value={1} label="Tree 2" />
        <Tab value={2} label="Tree 3" />
      </Tabs>

      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>

      {/* <CardContent>hoge</CardContent> */}
    </main>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
