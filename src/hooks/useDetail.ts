import {useState} from 'react'

const useDetail = () => {
    const [state, setState] = useState(true);
    const handleState = () => {
      setState(!state);
    };
    return {state,handleState}
}

export default useDetail
