import React, { useEffect } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Document, Page, pdfjs } from "react-pdf";
import FadeIn from "react-fade-in";
import { jsPDF } from "jspdf";

import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Layout = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const [scale, setScale] = React.useState(2);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // Scales PDF based on window size
    if (typeof window !== "undefined") {
      window.addEventListener(
        "resize",
        function (event) {
          let scaleToSet = window.screen.width / 660;
          if (scaleToSet > 2) {
            scaleToSet = 2;
          }
          setScale(scaleToSet);
        },
        true
      );
    }
  });

  return (
    <Container>
      <title>Tam Nguyen</title>
      <Header
        handleOpenResume={handleClickOpen}
        handleCloseResume={handleClose}
      />
      <main>{children}</main>
      <Footer />
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent
          style={{
            backgroundColor: "#0F1624",
          }}
        >
          <FadeIn delay="500" transitionDuration="1000">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "9rem",
              }}
            >
              <Document file="resources/resume.pdf" renderMode="svg">
                <Page pageNumber={1} scale={scale} />
              </Document>
            </div>
          </FadeIn>
        </DialogContent>
        <DialogActions
          style={{
            backgroundColor: "#0F1624",
          }}
        >
          <Button
            autoFocus
            size="large"
            startIcon={<DownloadIcon />}
            style={{ color: "white", outline: "none" }}
          >
            <a
              href="resources/resume.pdf"
              download
              style={{ textDecoration: "none", color: "white" }}
            >
              Download
            </a>
          </Button>
          <Button
            size="large"
            onClick={handleClose}
            startIcon={<CloseIcon />}
            style={{ color: "white", outline: "none" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
