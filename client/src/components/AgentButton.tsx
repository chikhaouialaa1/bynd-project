import { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import { BLUE } from "../constants/colors";
import { AgentChatUrl } from "../constants/externalUrls";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css"; // Import resizable styles

export const AgentButton = () => {
    const [showIframe, setShowIframe] = useState(false);

    const toggleIframe = () => {
        setShowIframe((prev) => !prev);
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ChatIcon />}
                    sx={{
                        backgroundColor: BLUE,
                        '&:hover': {
                            backgroundColor: '#004080',
                        },
                        borderRadius: '12px',
                        textTransform: 'none',
                    }}
                    onClick={toggleIframe}
                >
                    Chat with agent
                </Button>
            </Box>

            {showIframe && (
                <Draggable handle=".draggable-handle">
                    <Box
                        sx={{
                            position: "fixed",
                            top: 100,
                            left: 100,
                            zIndex: 1000,
                        }}
                    >
                        <ResizableBox
                            width={400}
                            height={500}
                            minConstraints={[300, 300]}
                            maxConstraints={[800, 800]}
                            resizeHandles={['se']}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    width: '100%',
                                    boxShadow: 3,
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    backgroundColor: "#fff",
                                    border: "1px solid #ccc",
                                }}
                            >
                                {/* Header / Handle */}
                                <Box
                                    className="draggable-handle"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        backgroundColor: "#1976d2",
                                        color: "#fff",
                                        px: 2,
                                        py: 1,
                                        fontSize: 14,
                                        cursor: "move",
                                    }}
                                >
                                    Agent Chat
                                    <IconButton
                                        size="small"
                                        onClick={() => setShowIframe(false)}
                                        sx={{ color: "#fff" }}
                                    >
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                </Box>

                                {/* Iframe */}
                                <Box sx={{ flex: 1 }}>
                                    <iframe
                                        src={AgentChatUrl}
                                        title="Agent Chat"
                                        width="100%"
                                        height="100%"
                                        style={{ border: "none" }}
                                    />
                                </Box>
                            </Box>
                        </ResizableBox>
                    </Box>
                </Draggable>
            )}
        </>
    );
};
