import React from "react";
import './test.scss';

const Test = (props: any): JSX.Element => {
    const { text } = props;
    return (
        <div className="test-class">
            {text}
        </div>
    );
};

export default Test;
