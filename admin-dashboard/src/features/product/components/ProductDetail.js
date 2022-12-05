import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PrimaryThumb from '../../../assets/product_detail_primary.jpg'
import SecondaryThumb1 from '../../../assets/product_detail_secondary_1.jpg'
import SecondaryThumb2 from '../../../assets/product_detail_secondary_2.jpg'
import StarIcon from '@mui/icons-material/Star';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './ProductDetail.css'

const ProductDetail = () => {

  const [selectedColor, setSelectedColor] = useState("blue")
  const [selectedSize, setSelectedSize] = useState("XS")
  const [selectedAmount, setSelectedAmount] = useState(1)

  const handleClickColor = (e) => {
    setSelectedColor(e.target.className)
  }

  const handleClickSize = (e) => {
    setSelectedSize(e.target.innerText);
  }

  return (
    <Container fluid="md">
      <Row>
        <Col className="product_detail_thumbnail">
          <div className='product_detail_thumbnail_primary'>
            <img src={PrimaryThumb} alt="primary_thumb" />
          </div>
          <div className='product_detail_thumbnail_secondary'>
            <div className='product_detail_thumbnail_secondary_1'>
              <img src={SecondaryThumb1} alt="secondary_thumb" />
            </div>
            <div className='product_detail_thumbnail_secondary_2'>
              <img src={SecondaryThumb2} alt="secondary_thumb" />
            </div>
          </div>
        </Col>
        <Col className='product_detail_info'>
          <h3>Product Name</h3>
          <div className="product_detail_info_price_rating">
            <button className='price_button'>$112.00</button>
            <div className="horizontal"></div>
            <StarIcon htmlColor='#FACC15' />
            <span className='stars-rating'>4.9</span>
            <span className='review-amount'>142k reviews</span>
          </div>
          <div className="product_detail_info_colors">
            <h5>Color: <span>{selectedColor}</span></h5>
            <div className="color_container">
              <div className='blue' onClick={(e) => handleClickColor(e)}></div>
              <div className='white' onClick={(e) => handleClickColor(e)}></div>
              <div className='black' onClick={(e) => handleClickColor(e)}></div>
              <div className='orange' onClick={(e) => handleClickColor(e)}></div>
              <div className='pink' onClick={(e) => handleClickColor(e)}></div>
            </div>
          </div>
          <div className="product_detail_info_sizes">
            <h5>Size: <span>{selectedSize}</span></h5>
            <div className="size_container">
              <div className={`XS ${selectedSize === 'XS' ? 'active' : ''}`} onClick={(e) => handleClickSize(e)}>XS</div>
              <div className={`S ${selectedSize === 'S' ? 'active' : ''}`} onClick={(e) => handleClickSize(e)}>S</div>
              <div className={`M ${selectedSize === 'M' ? 'active' : ''}`} onClick={(e) => handleClickSize(e)}>M</div>
              <div className={`L ${selectedSize === 'L' ? 'active' : ''}`} onClick={(e) => handleClickSize(e)}>L</div>
              <div className={`XL ${selectedSize === 'XL' ? 'active' : ''}`} onClick={(e) => handleClickSize(e)}>XL</div>
            </div>
          </div>
          {/* <div className="product_detail_info_amount">
            <div className="amount">
              <button className={`${selectedAmount === 1 ? 'disabled' : ''}`} onClick={() => setSelectedAmount(selectedAmount - 1)}>-</button>
              <span>{selectedAmount}</span>
              <button onClick={() => setSelectedAmount(selectedAmount + 1)}>+</button>
            </div>
            <button className="add_to_cart_button">
              <ShoppingBagIcon />
              <span>Add to cart</span>
            </button>
          </div> */}
          <div className="product_detail_info_description">
            <h5 style={{ marginTop: 10 }}>Description</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas consequatur, recusandae architecto amet doloribus corporis, laudantium illo nesciunt reiciendis beatae rerum magnam animi maiores cupiditate facere reprehenderit nostrum possimus. Vel ratione, voluptas nesciunt dolorum porro nostrum exercitationem. Nobis soluta facilis alias sint doloremque nulla placeat laboriosam tempore unde iste. Nesciunt similique neque doloribus iusto ut nostrum quaerat voluptatibus quod, dolorum nihil magni. Consectetur, ut? Culpa, tempore esse veritatis iste explicabo voluptatum, officiis dolore praesentium ad nulla ipsum. Cum delectus, illum ratione nulla distinctio, aliquid inventore provident harum hic quibusdam tenetur velit commodi, aspernatur nihil quaerat autem? Voluptatibus commodi blanditiis saepe?</p>
          </div>
          <div className="product_detail_info_labels">
            <div className="label_item">
              <h6>Free Shipping</h6>
              <p>On orders over $50.00</p>
            </div>
            <div className="label_item">
              <h6>Very Easy To Return</h6>
              <p>Just phone number</p>
            </div>
            <div className="label_item">
              <h6>Nationwide Delivery</h6>
              <p>Fast delivery nationwide</p>
            </div>
            <div className="label_item">
              <h6>Refunds policy</h6>
              <p>60 days return for any reason</p>
            </div>
          </div>
        </Col>
      </Row>
      {/* <Row className='product_detail'>
        <h3>Product Detail</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum delectus possimus architecto, corporis vel deserunt ad voluptatem perferendis ea magni impedit assumenda? Temporibus cupiditate quidem error alias optio minus nobis sit qui asperiores fugiat harum, atque, at dignissimos totam repellendus unde molestiae. Deleniti dolores repudiandae, corporis labore, ipsum eum ullam sapiente obcaecati hic, nisi eos accusantium? Rem iure in, suscipit deleniti impedit nesciunt? At nam magni tenetur iste suscipit similique maxime. Similique, dicta tempora suscipit esse saepe asperiores a cumque harum ipsam ullam, aut quod odit distinctio corrupti consequatur quas obcaecati? Reprehenderit doloribus perspiciatis consequuntur alias at quidem totam corrupti.</p>
      </Row> */}
    </Container>
  )
}

export default ProductDetail