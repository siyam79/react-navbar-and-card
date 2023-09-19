import PropTypes from 'prop-types';

const Link = ( {route }) => {

    return (
        <div>

            <li className=" hover:bg-[#ff0052]  md:mb-5 hover:rounded-md px-4 md:text-[#fff]"> <a href={route.path}> {route.name} </a>
            </li>

        </div>
    );
};

Link.propTypes ={
    route : PropTypes.object
}


export default Link;