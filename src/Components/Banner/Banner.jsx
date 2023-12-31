import { useState } from "react";
import PropTypes from 'prop-types';

const Banner = ({handleFilter}) => {
    const [input, setInput] = useState('');
const handlechange = (e)=>{
    setInput(e.target.value);
}
    return (
        <div>
            <div className="hero max-w-full mx-auto" style={{

                background: 'rgba(255, 255, 255, 0.7)',

                backgroundImage: 'url("https://i.ibb.co/Sfh2Tt2/ddddd.jpg")',

                backgroundSize: 'cover',

                backgroundPosition: 'center',

                backgroundRepeat: 'no-repeat',

                width: '100%',

                height: '480px',

            }}>
                <div className="hero-overlay  bg-[#FFFFFFF2]"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
                        <div className="mt-10">
                            <input onChange={handlechange} type="text" className="border-solid border-2 border-[#DEDEDE] bg-[#FFF] py-3 pl-3" name="text" placeholder="Search here...." />
                            <button onClick={()=>handleFilter(input)} className="bg-[#FF444A] text-[#FFF] py-3 px-7">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Banner.propTypes = {
    handleFilter: PropTypes.func
}
export default Banner;