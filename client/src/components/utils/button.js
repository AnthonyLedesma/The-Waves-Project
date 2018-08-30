import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShoppingBag from '@fortawesome/fontawesome-free-solid/faShoppingBag';

const MyButton = (props) => {
    const properties = props;
    const buttons = () => {
        let template = '';
        switch(properties.type){
            case "default":
                template = <Link
                className={!props.altClass ? "link_default" : props.altClass}
                to={properties.linkTo}
                {...properties.addStyles}>
                    {properties.title}
                </Link>
            break;

            case "bag_link":
                template = <div className="bag_link"
                onClick={()=>props.runAction()}>
                    <FontAwesomeIcon icon={faShoppingBag}/>
                </div>
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