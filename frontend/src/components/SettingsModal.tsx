import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Switch,
  Typography,
} from "@mui/material";
import { getSettings, saveSettings } from "../utils/localStorage";
import { useState } from "react";
import { Settings } from "../interfaces/settings.interface";

const SettingsModal = ({
  open,
  handleClose,
  setSettings,
  settings,
}: {
  open: boolean;
  handleClose: Function;
  setSettings: Function;
  settings: Settings;
}) => {
  const [autoScroll, setAutoScroll] = useState(settings.autoScroll);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    textAlign: "center",
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        handleClose();
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Settings
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={autoScroll}
              onChange={(e) => {
                setAutoScroll(e.target.checked);
              }}
            />
          }
          label="Auto scroll"
          style={{ margin: "20px 0px" }}
        />
        <Button
          onClick={() => {
            saveSettings(autoScroll);
            setSettings({ autoScroll });
            handleClose();
          }}
          variant="contained"
          style={{ display: "block", width: "100%" }}
        >
          save
        </Button>
      </Box>
    </Modal>
  );
};

export default SettingsModal;
