import React from "react";

export const ScrollUpContainer = ({ show }) => {
    return (
        <div
            style={{
                padding: "10px",
                position: "fixed",
                right: "30px",
                bottom: "30px",
                zIndex: 10,
                cursor: "pointer",
                background: "rgb(241, 242, 243)",
                textAlign: "center",
                alignItems: "center",
                borderRadius: "4px",
                transition: "all 0.3s ease-in-out",
                visibility: show ? "visible" : "hidden",
                opacity: show ? "1" : "0",
                display: "flex",
            }}
        >
            {show && (
                <div
                    style={{
                        background: "rgb(224, 224, 224)",
                    }}
                >
                    {/* Add content here */}
                </div>
            )}
        </div>
    );
};

// export default ScrollUpContainer;
