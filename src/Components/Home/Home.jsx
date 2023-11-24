import { useState } from "react";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";

const Home = () => {
    const [display, setDisplay] = useState([]);
    const [allCategory, setAllCategory] = useState([]);
    const allDonation =(categorys)=>{
        setAllCategory(categorys)}
    
    return (
        <div >
            <Banner ></Banner>
            <div className="mt-20">
            <CategoryList allDonation={allDonation}></CategoryList>
            </div>
            
        </div>
    );
};

export default Home;