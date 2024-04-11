import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://api.github.com/users/Saloni-Panwar')
            .then(response => response.json())
            .then(userData => {
                console.log(userData);
                setData(userData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='text-center m-4 bg-gray-500 p-4 text-2xl'>
            Github Followers: {data.followers}
            {data.avatar_url && (
                <img src={data.avatar_url} alt="git image" width={300} />
            )}
        </div>
    );
}

export default Github;
