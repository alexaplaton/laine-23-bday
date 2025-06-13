import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type BasicModalProps = {
  savings: number | null;
};

const check_savings = async (savings: number | null) => {
    if (savings === null) {
      savings = 0;
    }

    const response = await fetch('https://laine-bday-production.up.railway.app/update?savings=' + savings, {
        method: 'GET',
    });
    if (!response.ok) {
        alert(`Error! Exited with status ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    // if (data) {
    //     alert(`${data.res}`)
    // }
    return data.res;
  }

function getModalContent(growth: string) {
  if (growth === "true") {
    return (
      <>
        <Box
            component="img"
            src="happy.png"
            alt="Happy smiski"
            sx={{
              width: {
                xs: "80vw",
                md: "50vw",
              },
              display: "block",
            }}
        />
        <Typography variant="h6">🎉 Yay!</Typography>
        <Typography sx={{ mt: 2 }}>
          Your savings increased! Your closer to your Korea trip!!!!!
        </Typography>
      </>
    );
  } else if (growth === "false") {
    return (
      <>
        <Box
            component="img"
            src="sad.png"
            alt="Sad smiski"
            sx={{
              width: {
                xs: "80vw",
                md: "50vw",
              },
              display: "block",
            }}
        />
        <Typography variant="h6">😕 NOOOOOOOOO WHYYYYYY</Typography>
        <Typography sx={{ mt: 2 }}>
          Your savings went down nooooooooooooo
        </Typography>
      </>
    );
  }
}

export default function BasicModal({ savings }: BasicModalProps) {
  const [open, setOpen] = React.useState(false);
  const [growth, setGrowth] = React.useState(false); // True if saved Money, false if didn't save money
  // const handleOpen = () => setOpen(true);
  const handleOpen = async () => {
    const status = await check_savings(savings)
    setGrowth(status)
    setOpen(true)
  }
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" color="success" size="large" onClick={handleOpen}>Enter</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          {getModalContent(growth.toString())}
        </Box>

      </Modal>
    </div>
  );
}
