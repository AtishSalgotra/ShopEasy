import React from 'react'
import "./css/header.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

export default function Header({cart}) {
    return (
        <>
            <div className="header">
                <Link to="/">
                    <img src="/images/logo.png" className="header_logo" className="header__logo" />
                </Link>

                <div className="header__nav">
                    <div className="header__option">
                        <Link to="/login" className="header__optiontwo">Sign In</Link>
                    </div>

                    <div className="header__option">
                        <span className="header__optiontwo">Orders</span>
                    </div>

                    <div className="header__optionBasket">
                        <Link to="/cart">
                            <ShoppingCartIcon />
                            <span>
                                {cart?.total_items}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
