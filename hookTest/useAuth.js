import React, { useContext } from 'react';
import { TestContext } from '../context/ContextApi';


const useAuth = () => {
   
    return useContext(TestContext)
};

export default useAuth;