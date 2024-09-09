import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {TextField, InputLabel} from "@mui/material";

/**
 * HEY FUTURE NA WHOS PICKING UP THE SLACK OF DOING THE ADDING THE PERIOD PART
 * I already added the UI of it, and haven't done anythin to make it work.
 * The Modal is the popup thing and the child modal is just a nested modal
 *
 *
 *
 */

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </>
  );
}

export default function CreatePeriod(prop) {
  const [periodName, setPeriodName] = useState("");
  const [periodDay, setPeriodDay] = useState("");
  const [periodStartTime, setPeriodStartTime] = useState("");
  const [periodEndTime, setPeriodEndTime] = useState("");
  const [periodNote, setPeriodNote] = useState("");

  return (
    <Modal
      open={prop.open}
      onClose={prop.onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <h2 id="parent-modal-title">Add period</h2>
        <form>
          <InputLabel />
          {periodName}
          <TextField
            value={periodName}
            onChange={(e) => setPeriodName(e.target.value)}
          />
        </form>
        {/* <ChildModal /> */}
        <Button onClick={prop.onSubmit}>
          <AddIcon color="" />
        </Button>
      </Box>
    </Modal>
  );
}
