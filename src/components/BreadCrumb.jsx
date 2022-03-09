import React from 'react';
import { Link } from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'

const BreadCrumb = (props) => {
    return (
        <div className='breadcrumb-container'>
            <div className='text-center' style={{ marginTop: '150px' }}>
                <h1 className='h1 fw-bold text-white'>ACCOUNT</h1>
                <div className='mt-3'>
                    <Breadcrumb fontWeight='medium' fontSize='sm'>
                        <BreadcrumbItem className='text-white'>
                            <Link to={'/'}>Home</Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem className='text-white'>
                            <BreadcrumbLink>{props.page}</BreadcrumbLink>
                        </BreadcrumbItem>

                    </Breadcrumb>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb
