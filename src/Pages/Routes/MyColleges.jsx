import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyColleges = () => {
    const { user } = useContext(AuthContext);
    const [myColleges, setMyColleges] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myColleges/${user.email}`)
            .then(res => res.json())
            .then(data => setMyColleges(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            {
                myColleges?.map(colleges => <div key={colleges._id}>
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={colleges.collegeImage} className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">{colleges.collegeName}</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyColleges;