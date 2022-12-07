import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getHomeFetch} from "./reducer";

const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHomeFetch());
    }, [dispatch]);

    const record = useSelector((state => state.home));
    console.log('record', record);
    return (
        <div>
            home containers
        </div>
    )
}

export default Index;
