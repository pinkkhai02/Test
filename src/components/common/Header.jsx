import React from "react";
import { Box, Button, Container, Popper } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <header>
      <Container disableGutters={true} maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxHeight: "110px",
            img: {
              borderRadius: "50%",
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              padding: "12px 0",
              a: {
                img: {
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                },
              },
            }}
          >
            <Link to="/">
              <img src="https://doe.dee.hcmut.edu.vn/wp-content/uploads/2023/02/logo_bmdt.svg" />
            </Link>
          </Box>
          <Box>
            <Button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
              sx={{
                backgroundColor: theme.palette.primary.highlightText,
                fontWeight: "700",
                color: theme.palette.primary.backgroundMain,
                "&:hover": {
                  backgroundColor: "rgb(94, 53, 177, 0.9)",
                },
              }}
            >
              Admin
            </Button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <Box
                sx={{
                  marginTop: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                  padding: "8px 18px",
                  backgroundColor: "#fff",
                  a: {
                    color: "rgb(94, 53, 177)",
                    fontWeight: "500",
                  },
                }}
              >
                <Link to="/" onClick={() => {}}>
                  Đăng xuất
                </Link>
              </Box>
            </Popper>
          </Box>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
