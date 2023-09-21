import axios from "axios";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from "react"
import { Audio } from 'react-loader-spinner'



const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading]=useState(true)
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=>res.json())
        // .then(data=>setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhones(phoneWithFakeData)
                console.log(phoneWithFakeData);
                setLoading(false);
            })
    }, []);
    return (
        <div>
           {loading && <Audio
                height="80"
                width="80"
                radius="9"
                color='green'
                ariaLabel='three-dots-loading'
                wrapperStyle
                wrapperClass
            />}
            <h4 className="text-3xl font-medium text-center">Phones : {phones.length}</h4>
            <BarChart width={1000} height={500} data={phones}>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="price"></YAxis>
                <Bar dataKey="price" fill="#8884d8" />
                <Tooltip></Tooltip>
            </BarChart>
            {/* {
                phones.map(phone => <li>{phone.price}</li>)
            } */}
        </div>
    );
};

export default Phones;