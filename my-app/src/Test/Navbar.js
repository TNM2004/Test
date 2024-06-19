import React from 'react';
import "./NavbarStyle.css";
const Navbar = () => {
    return (
        <div className='Wapper-Nav'>
            <div className='Image'>
                <img src="https://images.unsplash.com/photo-1659735898324-7314e6f00490?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="anh khung canh" />
            </div>
            <div className='Content'>
                <div><span><i class="fa-solid fa-house"></i></span>Trang Chủ</div>
                <div><span><i class="fa-brands fa-envira"></i></span>Danh sách sản phẩm</div>
            </div>
        </div>
    );
};

export default Navbar;