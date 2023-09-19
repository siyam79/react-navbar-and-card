import PropTypes from 'prop-types';
import { AiOutlineCheck } from "react-icons/ai";
const Feature = ( {feature}) => {
    
    return (
        <div>
            <p><small className=' flex  items-center'> <AiOutlineCheck className='mx-3 my-1 text-white text-md  bg-green-600 rounded-full  '></AiOutlineCheck> {feature} </small></p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.object
}


export default Feature;