import { useEffect, useState } from "react";
import Category from "../Category/Category";
import PropTypes from 'prop-types';
const CategoryList = ({allDonation }) => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {
        fetch('/donationData.json')
            .then(res => res.json())
            .then(data => setCategorys(data));
    }, [])
    const senddata =()=>{
        allDonation(categorys);
    }
    senddata();
   
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto mb-10 ">
            {categorys.map(category => <Category
             key={category.id} category={category}></Category> )}
        </div>
    );
};
CategoryList.propTypes = {
    allDonation: PropTypes.func,
    

}
export default CategoryList;