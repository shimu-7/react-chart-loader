import PropTypes from 'prop-types';
import { AiFillDownCircle } from "react-icons/ai";

const PriceOption = ({ option }) => {
    return (
        <div className='bg-green-300 text-black flex flex-col m-5 p-5 rounded-lg'>
            <h4 className='text-xl font-medium'>Name: {option.name}</h4>
            <div className='flex-grow'>
            {
                option.features.map(feature => <li key={option.id} className='flex gap-1 items-center'><AiFillDownCircle className='text-green-900'></AiFillDownCircle>{feature}</li>)
            }
            </div>
            <p>Price: {option.price}</p>
            <div className='text-center my-5'>
                <button className='p-2 rounded-lg bg-green-900 hover:bg-green-700 font-bold w-full text-white'>Buy now</button>
            </div>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;