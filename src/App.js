import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
    <h1 className='title-header'>Chào Mừng Đến Với SwanStores</h1>
      <header className="header">
        <nav className="navbar">
          <ul>
            <li>Trang chủ</li>
            <li>Khám Phá</li>
            <li>Sản Phẩm Nổi Bật</li>
            <li>Cửa Hàng</li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-left">
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

      <section className="featured-products">
        <h2 className='title'>Sản Phẩm Nổi Bật</h2>
        <div className="products">
          <div className="product">
          <img src="/book.avif" alt="" />
            <h3>Sổ Tay Da</h3>
            <p>Giá: 200₫</p>
          </div>
          <div className="product">
            <img src="/classes.avif" alt="" />
            <h3>Gọng Kính Thời Trang</h3>
            <p>Giá: 130₫</p>
          </div>
          <div className="product">
          <img src="/boxes.avif" alt="" />
            <h3>Hộp Quà Sang Trọng</h3>
            <p>Giá: 300₫</p>
          </div>
          <div className="product">
          <img src="/hand-cup-1.avif" alt="" />
            <h3>Vòng Tay Thời Trang</h3>
            <p>Giá: 180₫</p>
          </div>
          <div className="product">
          <img src="/bag.avif" alt="" />
            <h3>Túi Xách Mini</h3>
            <p>Giá: 280₫</p>
          </div>
          <div className="product">
          <img src="/hand-cup-2.avif" alt="" />
            <h3>Dây Chuyền Ngọc Trai</h3>
            <p>Giá: 250₫</p>
          </div>
          <div className="product">
          <img src="/chain.avif" alt="" />
            <h3>Mặt Dây Chuyền Kim Loại</h3>
            <p>Giá: 220₫</p>
          </div>
          <div className="product">
          <img src="/handmade.avif" alt="" />
            <h3>Khung Ảnh Thủ Công</h3>
            <p>Giá: 120₫</p>
          </div>
        </div>
        <button>Xem Thêm</button>
      </section>

      <footer className="footer">
        <p>© 2035 by phụ kiện Swans. Powered and secured by Wix</p>
        <p>Liên hệ: info@mysite.com | 123-456-7890</p>
      </footer>
    </div>
  );
}

export default App;
