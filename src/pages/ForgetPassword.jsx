import React from 'react'
import {
    Button,
    Input,
    InputGroup,
    InputLeftElement,
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
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const toast = useToast()


    // On Submit 
    const onSubmit = (data) => {
        console.log(data);
        toast({
            title: 'Error',
            description: "We've created your account for you.",
            status: 'warning',
            duration: 4000,
            isClosable: true,
            position: 'top-right'
        })
    }



    const goBack = () => {
        navigate('/login');
    }

    return (
        <div>
            <BreadCrumb page="Reset Password" />
            <div className='container my-5'>
                <h1 className='h2 fw-bold text-center'>RESET PASSWORD</h1>
                <p className='small text-center mt-3'>We will send you an email to reset your password.</p>

                <div className="row mt-3">
                    <div className="col-lg-8 col-md-8 col-sm-10 col-12 mx-auto">
                        <Button leftIcon={<BsFillArrowLeftCircleFill />} onClick={goBack} colorScheme='teal' variant='solid'>
                            Go Back
                        </Button>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mt-4 mb-5">
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

                            <Button colorScheme='blue' type='submit' className='mb-3' width={"full"} size='lg'>Login</Button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword
