import React, { Component } from 'react';
import HomeSlider from './home_slider';
import HomePromotion from './home_promotion';
import CardBlock from '../utils/card_block';

import { connect } from 'react-redux';
import { getProductsBySell, getProductsByArrival } from '../../actions/products_actions';
import { Helmet } from "react-helmet";

class Home extends Component {

    componentDidMount() {
        this.props.dispatch(getProductsBySell());
        this.props.dispatch(getProductsByArrival());
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Waves Project - By Anthony Ledesma</title>
                </Helmet>
                <HomeSlider />
                <CardBlock
                    list={this.props.products.bySell}
                    title="Best Selling Guitars" />
                <HomePromotion />
                <CardBlock
                    list={this.props.products.byArrival}
                    title="The Latest Arrivals" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Home);         