
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { getStoredDonation } from '../Utility/Utility';
const Statistics = () => {
    const yourDonations = getStoredDonation()
    const totalDonations = 12;
    const percentage = ((yourDonations.length / totalDonations) * 100).toFixed(2);
    const Remaining = 100 - percentage;
    const RemainingValue = parseFloat(Remaining);
    const value = parseFloat(percentage); 
    const data = [
        { name: 'My Donations', value: value },
        { name: 'Remaining Donations', value: RemainingValue },
    ];

    const COLORS = ['#FF6B6B', '#6A0572' ];

    return (
        <div className=" text-center">
            <h2 className='mt-3 font-bold text-2xl'>Donation Statistics</h2>
           
            <PieChart className='md:ml-[200px] lg:ml-[550px] ' width={400} height={400}>
                <Pie
                    dataKey="value"
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={120}
                    fill="#8884d8"
                    label
                >
                     {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
            


           
        </div>
    );
};
export default Statistics;