import React from 'react';
import { Link } from 'react-router-dom';

const MyButton = (props) => {
    const properties = props;
    const buttons = () => {
        let template = '';
        switch(properties.type){
            case "default":
                template = <Link
                className="link_default"
                to={properties.linkTo}
                {...properties.addStyles}>
                    {properties.title}
                </Link>
            break;
            default:
                template = '';
            break;
        }
        return template;
    }

    return (
        <div className="my_button">
            {buttons()}
        </div>
    );
};

export default MyButton;