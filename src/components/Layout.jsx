import React from 'react';

import { Box } from '@chakra-ui/react';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Box paddingTop={"100px"}>
                {children}
            </Box>
        </>
    )
};

export default Layout;
