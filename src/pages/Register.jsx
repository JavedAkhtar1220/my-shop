import React, { useRef } from 'react'
import {
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    useToast,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

// Components 
import BreadCrumb from '../components/BreadCrumb';

// Icons 
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa'
import { BsFillEyeFill } from 'react-icons/bs';
import { BsFillEyeSlashFill } from 'react-icons/bs';


const Register = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);


    const toast = useToast();


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const password = useRef({});
    password.current = watch("password", "");

    // Show Password 
    const handlePassword = () => setShowPassword(!showPassword)

    // Show Confirm Password 
    const handleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const onSubmit = data => {
        toast({
            title: 'Error',
            description: "We've created your account for you.",
            status: 'warning',
            duration: 4000,
            isClosable: true,
            position: 'top-right'
        })
    }

    return (
        <div>
            <BreadCrumb page="Register" />
            <div className='container my-5'>
                <h1 className='h2 fw-bold text-center'>REGISTER</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row my-5">
                        <div className="col-lg-8 col-md-8 col-sm-10 col-12 mx-auto">
                            <div className='mb-3'>
                                <InputGroup size='lg'>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<FaUserAlt color='gray.300' />}
                                    />
                                    <Input
                                        type='text'
                                        placeholder='Full Name'
                                        {...register('username', {
                                            required: {
                                                value: true,
                                                message: "Full Name is required"
                                            }
                                        })}
                                    />
                                </InputGroup>
                                {errors.username ? <Alert status='error' className='small mt-2'>
                                    <AlertIcon />
                                    {errors.username.message}
                                </Alert> : null}
                            </div>
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
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Password'
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: "Password is required"
                                            }
                                        })}
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='lg' variant={'none'} onClick={handlePassword}>
                                            {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                {errors.password ? <Alert status='error' className='small mt-2'>
                                    <AlertIcon />
                                    {errors.password.message}
                                </Alert> : null}
                            </div>
                            <div className='mb-3'>
                                <InputGroup size='lg'>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        children={<RiLockPasswordFill color='gray.300' />}
                                    />
                                    <Input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        placeholder='Confirm Password'
                                        {...register("confirmPassword", {
                                            validate: value =>
                                                value === password.current || "The passwords do not match"

                                        })}
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='lg' variant={'none'} onClick={handleConfirmPassword}>
                                            {showConfirmPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                {errors.confirmPassword ? <Alert status='error' className='small mt-2'>
                                    <AlertIcon />
                                    {errors.confirmPassword.message}
                                </Alert> : null}
                            </div>
                            <Button colorScheme='blue' type='submit' className='mb-3' width={"full"} size='lg'>Register</Button>
                            <p className='text-primary text-end'><Link to={'/login'}>Login Now</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
