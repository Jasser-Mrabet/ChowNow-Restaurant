import React, { useState } from "react";
import Logo from "../assets/chownow.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, isWhite: true },
    { text: "About", icon: <InfoIcon />, isWhite: true },
    { text: "Testimonials", icon: <CommentRoundedIcon />, },
    { text: "Contact", icon: <PhoneRoundedIcon />, isWhite: true },
    { text: "Cart", icon: <ShoppingCartRoundedIcon />, isWhite: true },
  ];

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo}  alt="Logo" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((option) => (
          <a key={option.text} href={`#${option.text.toLowerCase()}`}>
            {option.text}
          </a>
        ))}
        <a href="#cart">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Bookings Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={toggleMenu} />
      </div>
      <Drawer open={openMenu} onClose={toggleMenu} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItemText
                key={item.text}
                primary={item.text}
                className={item.isWhite ? "white-text" : ""}
                onClick={toggleMenu}
              />
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default NavBar;
