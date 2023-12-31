import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Category = ({ category }) => {
    const style ={
        backgroundColor:`${category.card_bg_color}`
    }
    const textColour ={
        color:`${category.text_button_bg_color}`,
        border:'1px solid red',
        padding:'2px',
        backgroundColor:`${category.category_bg_color}`

    }
    const text ={
        color:`${category.text_button_bg_color}`
    }
    return (
        <div>
       <Link to={`/description/${category.id}`}>
       <div className="card  bg-base-100 shadow-xl" style={style}>
                <figure><img className="w-[312px] h-[194px]" src={category.picture} alt="" /></figure>
                <div className="card-body">
                    <h2 style={textColour} className="card-title font-medium text-base w-24 rounded-lg">
                        {category.category}
                    </h2>
                    <p style={text} className="font-semibold text-lg">{category.title}</p>
                </div>
            </div>
       </Link>
        </div>
    );
};
Category.propTypes = {
category:PropTypes.object
}
export default Category;