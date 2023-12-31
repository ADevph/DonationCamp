import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const DonationList = ({ category }) => {
   
    const style = {
        backgroundColor: `${category.card_bg_color}`
    }
    const textbg = {
        backgroundColor: `${category.text_button_bg_color}`
    }
    const textColour = {
        color: `${category.text_button_bg_color}`,
        border: '1px solid red',
        padding: '2px',
        width: '100px',
        backgroundColor: `${category.category_bg_color}`

    }
    const text = {
        color: `${category.text_button_bg_color}`
    }
    return (
        <div>
            
                <div style={style} className="card card-side bg-base-100 shadow-xl lg:h-[200px] lg:w-[600px]">
                    <figure><img className="lg:w-[210px] lg:h-[194px]" src={category.picture} alt="" /></figure>
                    <div className="card-body">
                    <h2 style={textColour} className="card-title font-medium text-base  rounded-lg">
                        {category.category}
                    </h2>
                    <p  className="font-semibold text-xl">{category.title}</p>
                    <p style={text} className='text-sm'>$290.00</p>
                        <div className="card-actions ">
                        <Link to={`/description/${category.id}`}> <button style={textbg} className="btn px-2 py-2 text-white">View Details</button></Link>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};
DonationList.propTypes = {
    category: PropTypes.object
}
export default DonationList;