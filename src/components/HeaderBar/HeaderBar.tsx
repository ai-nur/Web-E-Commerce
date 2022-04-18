import React from "react";
import "./HeaderBar.scss";
import { LogoUT } from "../../assets";
import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  Fade,
  IconButton,
  InputBase,
  Modal,
  Paper,
  Popover,
  Popper,
  Toolbar,
  Typography,
} from "@mui/material";
import PopupState, {
  bindHover,
  bindTrigger,
  bindPopover,
  bindPopper,
} from "material-ui-popup-state";

import { styled, alpha } from "@mui/material/styles";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

const HeaderBar = () => {
  const [open, setOpen] = React.useState(false);
  const mouseOver = () => setOpen(true);
  const mouseLeave = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link className="Home-Link" to="/banner">
            <img
              src={LogoUT}
              alt="Logo UT"
              style={{ width: "60px", height: "60px" }}
            />
            <Typography variant="h6" className="title">
              UT Market
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {["Makanan", "Minuman", "Kesehatan", "Rumah Tangga"].map((page) => (
              <PopupState
                key={page}
                variant="popover"
                popupId={
                  page === "Rumah Tangga"
                    ? "RumahTangga-popup"
                    : `${page}-popup`
                }
              >
                {(popupState) => (
                  <div className="Category-popover">
                    <Button
                      disableRipple
                      // onClick={handleCloseNavMenu}
                      {...bindHover(popupState)}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      <Typography>{page}</Typography>
                    </Button>
                    <Popover
                      {...bindPopover(popupState)}
                      onMouseLeave={popupState.close}
                    >
                      <Typography>The content of the Popover.</Typography>
                    </Popover>
                  </div>
                )}
              </PopupState>
            ))}
          </Box>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Masukkan Kata Kunci..."
              inputProps={{ "aria-label": "masukkan kata kunci" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Masukkan Kata Kunci…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
          <Box>
            {["Account", "Wishlist", "Cart"].map((text) => (
              <PopupState key={text} variant="popper" popupId={`${text}-popup`}>
                {(popupState) => (
                  <div className="Popup-State">
                    <IconButton
                      {...bindHover(popupState)}
                      onMouseLeave={popupState.close}
                    >
                      {text === "Account" ? (
                        <PersonOutlineOutlinedIcon />
                      ) : text === "Wishlist" ? (
                        <FavoriteBorderOutlinedIcon />
                      ) : text === "Cart" ? (
                        <ShoppingCartOutlinedIcon />
                      ) : null}
                    </IconButton>
                    <Popper {...bindPopper(popupState)}>
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <Paper>
                            <Typography>
                              {text}
                            </Typography>
                          </Paper>
                        </Fade>
                      )}
                    </Popper>
                  </div>
                )}
              </PopupState>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderBar;
