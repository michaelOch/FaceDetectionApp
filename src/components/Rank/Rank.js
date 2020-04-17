import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div className="text-center">
            <div style={{fontSize: '20px'}} className="text-light">
                {`${name}, your current entry count is...`}
            </div>
            <h3 style={{fontWeight: '800'}} className="text-light">
                {`#${entries}`}
            </h3>
        </div>
    );
}

export default Rank;