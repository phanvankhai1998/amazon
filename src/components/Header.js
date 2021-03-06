import React from 'react';
import "../css/Header.css"
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return (
        <div className="header">
            <img
                alt=""
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />

            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                />
                <SearchIcon
                    className="header__searchIcon"
                />
                {/* Logo */}
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header_optionLineOne">
                        Hello Guest
                        </span>
                    <span className="header_optionLineTwo">
                        Sign In
                    </span>
                </div>

                <div className="header__option">
                    <span className="header_optionLineOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>

            </div>
        </div>
    );
}

export default Header;