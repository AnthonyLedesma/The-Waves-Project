import React, { Component } from 'react';
import PageTop from '../utils/page_top';
import ProdInfo from './prodInfo';
import ProdImage from './prodImage';

import { getProductDetail, clearProductDetail } from '../../actions/products_actions';

import { connect } from 'react-redux';



class ProductPage extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.dispatch(getProductDetail(id));
    }

    componentWillUnmount() {
        this.props.dispatch(clearProductDetail());
    }

    render() {
        return (
            <div>
                <PageTop title="Product details" />
                <div className="container">
                    {
                        this.props.products.prodDetail ?
                            <div className="product_detail_wrapper">
                                <div className="left">
                                    <div style={{ width: '500px' }}>
                                        <ProdImage
                                            detail={this.props.products.prodDetail}
                                        />
                                    </div>
                                </div>
                                <div className="right">
                                    <ProdInfo
                                        addToCart={(id) => this.addToCartHandler(id)}
                                        detail={this.props.products.prodDetail}
                                    />
                                </div>
                            </div>
                            : 'Loading'
                    }
                </div>
            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductPage);