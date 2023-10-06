import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftsiteNave = () => {
    const [categoris, setcategoris] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setcategoris(data))
    }, [])
    return (
        <div className="space-y-6">
            <h2 className="text3xl">left site {categoris.length} </h2>
            {
                categoris.map(category => <Link
                to={`/category/${category.id}`}
                  className="block ml-4 text-xl font-poppins px-4"
                    key={category.key}
                >{category.name}</Link>)
            }
        </div>
    );
};

export default LeftsiteNave;
