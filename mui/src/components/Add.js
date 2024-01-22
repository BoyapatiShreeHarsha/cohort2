import {
  Add as AddIcon,
  AddReaction,
  Favorite,
  ThumbDown,
  ThumbUp,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";

export default function Add() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  const CustBox = styled(Box)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "white",
    border: "2px solid black",
    display:"flex",
    justifyContent:"space-evenly",
    flexDirection:"column",
    padding:"2% 2%",
    borderRadius:"16px"
  });

  const IconPack = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    margin: "2% 4%",
  });

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "50%", sm: "50px" },
          transform: { xs: "translate(-50%,0)" },
        }}
        onClick={handleOpen}
      >
        <Tooltip title="Add a Post" placement="bottom">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <CustBox>
          <Box sx={{display:"flex",gap:{sx:"0rem",md:"2rem",marginBottom:"4%"}}}>
            <Avatar alt="John" src="" />
            <Typography variant="h6" color="primary">John</Typography>
          </Box>
          <TextField sx={{marginBottom:"4%"}}
            placeholder="What's in your mind?"
            multiline
            variant="filled"
            rows={4}
          />
          <IconPack>
            <Box>
              <AddReaction />
              <Favorite />
            </Box>
            <Box>
              <ThumbUp />
              <ThumbDown />
            </Box>
          </IconPack>

          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{display:"flex",justifyContent:"center"}}
          >
            <Button>Add</Button>
            <Button>Delete</Button>
          </ButtonGroup>
        </CustBox>
      </Modal>
    </>
  );
}
