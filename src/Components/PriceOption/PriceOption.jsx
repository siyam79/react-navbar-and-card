import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ card }) => {

    const { name, features, price } = card;
    return (


        <div className=' border m-2 h-full  flex flex-col hover:bg-[#444] bg-[#4D78C9]  text-[#dfdfdf] rounded-lg'>
            <h1 className='text-center font-bold p-4 '> <span className='text-xl'>Price : {price}</span> /Month </h1>
            <h1 className='ml-2 text-2xl font-bold mb-4 '>{name}</h1>
            <div className='flex-grow '>

                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }


            </div>
            <button className=" btn-outline  btn-success  bg-[#1f2327]   px-4 py-2 rounded-lg  mx-6 mb-2  mt-10 ">Bay Now</button>


        </div>



    );
};


PriceOption.propTypes = {
    card: PropTypes.object
}

export default PriceOption;