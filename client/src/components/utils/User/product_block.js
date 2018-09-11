import React from 'react'

function UserProductBlock({products, removeItem}) {

    const renderCartImage = (images) => {
        if(images.length > 0){
            return images[0].url;
        } else {
            return '/images/image_not_available.png';
        }
    }

    const renderItems = () => (
        products.cartDetail ? 
            products.cartDetail.map(product=>(
                <div className="user_product_block" key={product._id}>
                    <div className="item">
                        <div className="image"
                        style={{background:`url(${renderCartImage(product.images)}) no-repeat`}}>

                        </div>
                    </div>
                </div>
            ))
        :null
    )

    return (
        <div>
            {renderItems()}
        </div>
    )
}

export default UserProductBlock
