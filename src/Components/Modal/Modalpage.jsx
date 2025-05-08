import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from './Modalpage.module.css'

export default function Modalpage({ openModal, setOpenModal }) {

  const[blogTitle, setBlogTitle] =useState("")   
  const [description, setDescription]=useState("")
  const [uploadfile, setuploadfile]=useState("")

  const handleChange=(e)=>{
    setBlogTitle(e.target.value)

  }
  const handleChanger=(e)=>{
    setDescription(e.target.value)
  }
  const handleFilechanger=(e)=>{
    console.log("e",e);
    

  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setOpenModal(false);
  };

  useEffect(() => {
    if (openModal === true) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [openModal]);

  const style = {
    position: "absolute",
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
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create your Blog
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className={styles.inputParent}>
                <input type="text" name="BlogTitle" value={blogTitle} placeholder="Blog Title" onChange={(e)=>handleChange(e)}/>
                <input type="text" name="Description" value={description} placeholder="Description" onChange={(e)=>handleChanger(e)}/>
                <input type="file" name="uploadfile" value={uploadfile} placeholder="Upload File" onChange={()=>handleFilechanger(e)}/>


            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
