import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigation } from "react-router-dom";

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

export default function PaymentPagemodal({ showPayment, setShowPayment }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setShowPayment(false);

 const navigate= useNavigation();

  const ordersfun=()=>{
    navigate('/orderdetails')
      
  }
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={showPayment}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Payment Successful!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Thank you, Visit again.
          </Typography>
          <button onClick={()=>ordersfun()}>Go to Your orders</button>
        </Box>
      </Modal>
    </div>
  );
}
