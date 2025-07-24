import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import products from "./products";

function HomePage() {
    return (
        <div className="homepage">
        <h1 className='title-header'>Chào Mừng Đến Với SwanStores</h1>
          <header className="header">
            <nav className="navbar">
              <ul>
                <li><a href="#"><img className='logo' src="/logo.jpg" alt="logo" /></a></li>
                <li><a href="#">Trang chủ</a></li>
                <li><a href="#">Khám phá</a></li>
                <li><a href="#">Sản Phẩm Nổi Bật</a></li>
                <li><a href="#">Cửa Hàng</a></li>
              </ul>
            </nav>
          </header>
    
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
    
          <section className="featured-products">
          <h2 className='title'>Sản Phẩm Nổi Bật</h2>
          <div className="products">
            {products.map(product => (
              <div className="product" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>Giá: {product.price.toLocaleString()}₫</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
    
          <footer className="footer">
            <p>© 2035 by phụ kiện Swans. Powered and secured by Wix</p>
            <p>Liên hệ: lyankhang2004@gmail.com| 0978677271</p>
          </footer>
        </div>
      );
}
export default HomePage;