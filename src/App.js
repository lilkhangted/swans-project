import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
    <h1 className='title-header'>Chào Mừng Đến Với SwanStores</h1>
      <header className="header">
        <nav className="navbar">
          <ul>
            <li><a href="#"><img className='logo' src="/logo.jpg" alt="logo" /></a></li>
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
          <div className="product">
          <img src="/chain3.jpg" alt="" />
            <h3>Vòng Cổ Vàng</h3>
            <p>Giá: 2,800,000₫ </p>
          </div>
          <div className="product">
            <img src="/handcup.jpg" alt="" />
            <h3>Vòng Tay Đính Đá</h3>
            <p>Giá: 2,300,000₫</p>
          </div>

          <div className="product">
          <img src="/chain2.jpg" alt="" />
            <h3>Vòng Cổ Ngũ Sắc</h3>
            <p>Giá: 2,800,000₫</p>
          </div>

          <div className="product">
          <img src="/full-chain.jpg" alt="" />
            <h3>Dây Chuyền Ngọc Trai</h3>
            <p>Giá: 2,800,000₫</p>
          </div>
          <div className="product">
          <img src="/chain1.jpg" alt="" />
            <h3>Mặt Dây Chuyền Kim Loại</h3>
            <p>Giá: 2,800,000₫</p>
          </div>

        </div>
      </section>

      <footer className="footer">
        <p>© 2035 by phụ kiện Swans. Powered and secured by Wix</p>
        <p>Liên hệ: info@mysite.com | 123-456-7890</p>
      </footer>
    </div>
  );
}

export default App;
