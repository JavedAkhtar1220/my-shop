import React from 'react';
import {
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Alert,
    AlertIcon,
    useToast
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// Components 
import BreadCrumb from '../components/BreadCrumb';

// Icons 
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsFillEyeFill } from 'react-icons/bs';
import { BsFillEyeSlashFill } from 'react-icons/bs';


const Login = () => {

    const [show, setShow] = React.useState(false);
    const toast = useToast()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    // On Submit 
    const onSubmit = (data) => {
        toast({
            title: 'Error',
            description: "We've created your account for you.",
            status: 'warning',
            duration: 4000,
            isClosable: true,
            position: 'top-right'
        })
    }

    // Show Password 
    const handleClick = () => setShow(!show)


    return (
        <div>
            <BreadCrumb page="Login" />
            <div className='container my-5'>
                <h1 className='h2 fw-bold text-center'>LOGIN</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row my-5">
                        <div className="col-lg-8 col-md-8 col-sm-10 col-12 mx-auto">
                            <div className='mb-3'>
                                <InputGroup size='lg'>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<HiOutlineMail color='gray.300' />}
                                    />
                                    <Input
                                        type='text'
                                        placeholder='Email Address'
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email Address is required'
                                            },
                                            pattern: {
                                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                message: "Invalid Email Address"
                                            }
                                        })}
                                    />
                                </InputGroup>
                                {errors.email ? <Alert status='error' className='small mt-2'>
                                    <AlertIcon />
                                    {errors.email.message}
                                </Alert> : null}

                            </div>
                            <div className='mb-3'>
                                <InputGroup size='lg'>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<RiLockPasswordFill color='gray.300' />}
                                    />
                                    <Input
                                        type={show ? 'text' : 'password'}
                                        placeholder='Password'
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: "Password in required",
                                            }
                                        })}
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='lg' variant={'none'} onClick={handleClick}>
                                            {show ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                {errors.password ? <Alert status='error' className='small mt-2'>
                                    <AlertIcon />
                                    {errors.password.message}
                                </Alert> : null}

                            </div>
                            <Button colorScheme='blue' type='submit' className='mb-3' width={"full"} size='lg'>Login</Button>
                            <div className='d-flex justify-content-between'>
                                <p className='text-primary'><Link to={'/register'}>Register Now</Link></p>
                                <p className='text-primary'><Link to={'/reset-password'}>Forget Password?</Link></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
