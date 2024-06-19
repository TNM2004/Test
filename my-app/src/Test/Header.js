import React from 'react';
import "./HeaderStyled.css";
const Header = () => {
    return (
        <div className='Wapper-Header'>
            <div className='Header-Left'>
                <span><i class="fa-solid fa-bars"></i></span>
            </div>
            <div className='Header-Right'>
                <div className='Bell'>
                    <span><i class="fa-regular fa-bell"></i></span>
                    <div className='Bell-Number'>16</div>
                </div>
                <div className='Header-R-Content'>
                    <div className='image'>
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="anh icon" />
                    </div>
                    <div className='title'>
                        <div>Admin Name</div>
                        <div>admin</div>
                    </div>
                </div>
                <div className='Header-R-Arrow'>
                    <span><i class="fa-solid fa-chevron-down"></i></span>
                </div>
            </div>
        </div>
    );
};

export default Header;