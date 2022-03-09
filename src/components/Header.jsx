import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Chakra UI 
import {
    Box,
    Flex,
    Spacer,
    Image,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Stack,
    Center,
    Avatar,
    Text,
    MenuDivider,
    useColorMode,
    useDisclosure,
} from '@chakra-ui/react';

// Images 
import logo from '../images/logo.png';

// Icons 
import { AiOutlineShoppingCart, AiTwotoneHeart } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Header = () => {

    const [isLogin] = useState(true);
    const [scrollPoint, setScrollPoint] = useState();

    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()

    window.addEventListener('scroll', () => {
        setScrollPoint(window.scrollY);
    })

    return (
        <Box
            boxShadow={'lg'}
            py={6}
            transition="all"
            bgColor={(colorMode === "light" && scrollPoint > 100) ? "white" : (colorMode === "light" && scrollPoint < 100) ? "whiteAlpha.800" : colorMode !== "light" && scrollPoint > 100 ? "black" : "blackAlpha.700"}
            position="fixed"
            width={'full'}>
            <Flex maxW={'container.xl'} mx={'auto'} alignItems="center">
                <Box>
                    <Image src={logo} alt='APS' />

                </Box>
                <Spacer />
                <Flex alignItems={'center'}>
                    <Button
                        mx={4}
                        fontWeight={500}
                        variant='link'>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </Button>
                    <Menu isOpen={isOpen} onClose={onClose}>
                        <MenuButton
                            onMouseOver={onOpen}
                            as={Button}
                            isActive={isOpen}
                            fontWeight={500}
                            bgColor="transparent"
                            _hover={{ bgColor: 'transparent' }}
                            _active={{ bgColor: 'transparent' }}
                            rightIcon={isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}>
                            More
                        </MenuButton>
                        <MenuList onClick={onOpen} onMouseLeave={onClose}>
                            <MenuItem>About Us</MenuItem>
                            <MenuItem>Contact Us</MenuItem>
                        </MenuList>
                    </Menu>

                    <Button onClick={toggleColorMode} bgColor="transparent">
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>

                    <Box>
                        <Flex alignItems={'center'}>
                            <Stack direction={'row'} spacing={7}>

                                <Button
                                    // mx={4}
                                    fontWeight={500}
                                    variant='link'>
                                    <NavLink to='/cart'>
                                        <AiOutlineShoppingCart fontSize={20} />
                                    </NavLink>
                                </Button>

                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        rounded={'full'}
                                        variant={'link'}
                                        cursor={'pointer'}
                                        minW={0}>
                                        <Avatar
                                            size={'sm'}
                                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        />
                                    </MenuButton>
                                    <MenuList alignItems={'center'}>
                                        <br />
                                        <Center>
                                            <Avatar
                                                size={'2xl'}
                                                src={'https://avatars.dicebear.com/api/male/username.svg'}
                                            />
                                        </Center>
                                        <br />
                                        <Center>
                                            <Text fontSize={'md'} fontWeight={500}>Javed Akhtar</Text>
                                        </Center>
                                        <br />
                                        <MenuDivider />
                                        <MenuItem>Account Settings</MenuItem>
                                        <MenuItem>Logout</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Stack>
                        </Flex>
                    </Box>

                </Flex>
            </Flex>
        </Box >
    )
}

export default Header;
