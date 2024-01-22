import {
  EmojiEmotions,
  Mail,
  Notifications,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
} from "@mui/material";
import React, { useState } from "react";

const Appname = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
  // display:{xs:"none",sm:"block"}
}));

const Logo = styled(Box)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  // display:{xs:"block",sm:"none"}
}));

const SearchBar = styled(InputBase)(({ theme }) => ({
  paddingLeft: "2%",
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
  color:"black"
}));

const RightSide = styled(Box)({
  width: "30%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
});

const IconsPack = styled(Box)({
  flexBasis: 0,
  flexGrow: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
});

const AvatarPack = styled(Box)(({ theme }) => ({
  flexBasis: 0,
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
  },
  padding:"2% 0%"
  // backgroundColor:"white"
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  function handleOnClick() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <AppBar position="sticky" sx={{color: "text.primary"}}>
        <Stack direction="row" sx={{ justifyContent: "space-between" ,alignItems:"center"}}>
          <Appname sx={{ display: { xs: "none", sm: "block" } }}>
            Harsha's app
          </Appname>
          <Logo sx={{ display: { xs: "block", sm: "none" } }}>
            <EmojiEmotions />
          </Logo>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "40%",
              color: "text.primary"
            }}
          >
            <Search />
            <SearchBar placeholder="search..." start  />
          </Box>
          <RightSide>
            <IconsPack>
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
              <Badge badgeContent={4} color="error">
                <Notifications />
              </Badge>
            </IconsPack>
            <AvatarPack>
              <Avatar
                src="/broken-image.jpg"
                
                onClick={handleOnClick}
              />
              <Menu
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </AvatarPack>
          </RightSide>
        </Stack>
      </AppBar>
    </>
  );
}
