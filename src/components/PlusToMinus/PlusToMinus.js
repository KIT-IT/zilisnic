import React from 'react';

function PlusToMinus({click, cl}) {
    const cls = ["circle-plus"]
    cls.push(cl)

    return (
        <div className={cls.join(' ')} onClick={click}>
            <div className="circle">
                <div className="horizontal"></div>
                <div className="vertical"></div>
            </div>
        </div>
    );
}

export default PlusToMinus;