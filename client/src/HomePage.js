import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import products from "./products";
import Header from "./Header";
import Footer from "./Footer";

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);
    return (
        <div className="homepage">
        <h1 className='title-header'>Chào Mừng Đến Với SwanStores</h1>
        <Header />
    
          <section id="home" className="hero">
            <div className="hero-left">
            <h1>
            </h1>
              <p className="hero-text">
                Chào mừng bạn đến với cửa hàng phụ kiện Swans,
                nơi bạn có thể khám phá những sản phẩm độc đáo
                và thời thượng hình thiên nga.
              </p>
              <button className="explore-btn">Khám Phá</button>
            </div>
            <div className="hero-right">
              <img
                src="/swans.jpg"alt="Swan"
                className="hero-image"
              />
            </div>
          </section>
    
          <section className="banner">
            <h2>Khuyến Mãi Đặc Biệt</h2>
            <p>Nhận ngay ưu đãi hấp dẫn cho đơn hàng đầu tiên của bạn.</p>
            <button>Xem Ngay</button>
          </section>
    
          <section className='offer-section'>
            <div className='left-content'>
            <h2 className='offer-text'>Khám phá ngay</h2>
              <p>Nhận ngay ưu đãi hấp dẫn cho đơn hàng đầu tiên của bạn.</p>
              <button className='more'>Xem ngay</button>
            </div>
            <div className='right-content'><img className='ring-img' src="/swan-ring.jpg" alt="nhan" /></div>
          </section>

          
          <h2 className='title'>Sản Phẩm Nổi Bật</h2>
          <section className="featured-products">
              <div className="products">
                <button className="slider-btn left" onClick={handlePrev}>&lt;</button>
                {visibleProducts.map(product => (
                  <div className="product" key={product.id}>
                    <Link to={`/product/${product.id}`}>
                      <img src={product.image} alt={product.name} />
                      <h3>{product.name}</h3>
                      <p>Giá: {product.price.toLocaleString()}₫</p>
                    </Link>
                  </div>
                ))}
                <button className="slider-btn right" onClick={handleNext}>&gt;</button>
              </div>
          </section>
          <Footer />
        </div>
      );
}
export default HomePage;