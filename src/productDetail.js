import { useParams } from 'react-router-dom';
import products from './products'; // chứa danh sách sản phẩm
import { useState } from 'react';
import './productDetail.css'; // nhớ tạo file CSS

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Không tìm thấy sản phẩm.</p>;

  return (
    <div className="product-detail-container">
      <div className="product-detail-left">
        <img src={product.image} alt={product.name} className="main-image" />
        <div className="thumbnails">
          <img src={product.image} alt="thumb" className="thumb" />
          {/* thêm ảnh phụ nếu có */}
        </div>
      </div>

      <div className="product-detail-right">
        <h2>{product.name}</h2>
        <p className="price">{product.price.toLocaleString()}₫</p>

        <div className="select-group">
          <label>Kích Thước *</label>
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Chọn</option>
            <option value="S">Nhỏ</option>
            <option value="M">Trung</option>
            <option value="L">Lớn</option>
          </select>
        </div>

        <div className="select-group">
          <label>Màu Sắc *</label>
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="">Chọn</option>
            <option value="gold">Vàng</option>
            <option value="silver">Bạc</option>
            <option value="pink">Hồng</option>
          </select>
        </div>

        <div className="quantity-group">
          <label>Số lượng *</label>
          <div className="quantity-controls">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>

        <button className="add-to-cart">Thêm vào giỏ hàng</button>

        <div className="share-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-whatsapp"></i>
          <i className="fas fa-times"></i>
        </div>
      </div>

      <div className="product-description">
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
