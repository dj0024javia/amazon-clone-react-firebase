import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">

            <img src="https://logodix.com/logo/233733.gif" className="header__logo" />



            <div className="header__search">
                {/* Input */}
                <input className="header__searchInput" type="text" />

                {/* SearchLogoButton */}
                <SearchIcon className="header__seachIcon" />
            </div>

            <div className="header__nav">

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest!
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>

                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>

                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>

                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>



                <div className="headerOption__Basket">
                    <ShoppingBasketIcon />
                    <span className="headerOptionLine2 header__basketCount">0</span>
                </div>

            </div>
        </div>
    )
}

export default Header
