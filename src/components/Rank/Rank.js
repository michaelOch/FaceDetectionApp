import React from 'react';

const Rank = () => {
    return (
        <div className="text-center">
            <div style={{fontSize: '20px'}} className="text-light">
                {'Odogwu, your current rank is...'}
            </div>
            <h3 style={{fontWeight: '800'}} className="text-success">
                {'#5'}
            </h3>
        </div>
    );
}

export default Rank;