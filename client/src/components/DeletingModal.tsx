import { Modal, Box, Typography, Button } from '@mui/material';
import * as API from "../api/admin.articles";

// @ts-ignore
export const DeletingModal = ({ closeModalButton, refreshData, article, confirmation, confirmationButton, openModal, modalStyle, closeModal, modalTitle, modalBodyText }) => {
    const handleClose = () => closeModal(null);

    const handleComfirmation = () => {
        API._delete(article._id).then((res) => {
            closeModal(null)
            refreshData()
        })
    }

    return (
        <Modal
            sx={{
                borderRadius: '50px',
            }}
            style={{
                borderRadius: '50px',
            }}
            open={openModal}
            onClose={handleClose}
        >
            <Box
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: modalStyle && modalStyle.width ? modalStyle?.width : '600px',
                    height: modalStyle && modalStyle.height ? modalStyle?.height : '250px',
                    backgroundColor: '#ffffff',
                    boxShadow: '24',
                    padding: '20px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '6px',
                }}
            >
                <Box>
                    <Typography variant="h6" component="h2">
                        {modalTitle}
                    </Typography>
                    <Typography>
                        {modalBodyText}
                    </Typography>
                </Box>
                <Box
                    style={{

                        display: 'flex',
                        justifyContent: 'space-between',

                    }}
                >
                    {
                        confirmationButton &&
                        <Button
                            onClick={handleComfirmation}
                            variant="outlined"
                        >Confirme</Button>
                    }
                    {
                        closeModalButton &&
                        <Button
                            sx={{
                                borderRadius: '8px',
                                borderColor: 'grey.500',
                                width: '100px',
                                height: '40px'
                            }}
                            variant="outlined"
                            style={{
                                backgroundColor: '#f2f2f2',
                                color: '#808080',
                            }}
                            onClick={() => closeModal(null)}
                        >Close</Button>
                    }

                </Box>
            </Box>
        </Modal>
    )

}