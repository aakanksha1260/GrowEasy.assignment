import React, { useState } from 'react';
import { Box, TextField, Button, Modal } from '@mui/material';

interface EditBannerProps {
  open: boolean;
  handleClose: () => void;
  banner: any;
  onSave: (banner: any) => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ open, handleClose, banner, onSave }) => {
  const [formState, setFormState] = useState(banner);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSave = () => {
    onSave(formState);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%', padding: '20px', backgroundColor: 'white' }}>
        <TextField
          name="title"
          label="Title"
          value={formState.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="description"
          label="Description"
          value={formState.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="cta"
          label="CTA"
          value={formState.cta}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="image"
          label="Image"
          value={formState.image}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="background"
          label="Background"
          value={formState.background}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default EditBannerTemplateBs;
