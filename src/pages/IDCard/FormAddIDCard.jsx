import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Title from "../../components/common/Title";
import { useTheme } from "@emotion/react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormAddIDCard = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [idCard, setIdCard] = useState("");
  const { id } = useParams();
  const handleChange = (e) => {
    setIdCard(e.target.value);
    // console.log(idCard);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/codes", {
        code: idCard,
      });
      if (response.status === 200) {
        toast.success("Thêm thành công!");
        setIdCard("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(userForm.errors);

  return (
    <Title title="Mã thẻ">
      <ToastContainer />
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={3} alignItems="center" height="60vh">
          <TextField
            type="text"
            placeholder="Nhập mã thẻ"
            name="name"
            value={idCard}
            onChange={handleChange}
            color="success"
            sx={{ minWidth: "480px", marginTop: "48px" }}
          />
          <Box
            sx={{
              marginTop: 4,
              fontWeight: "700",
            }}
          >
            <Button
              type="submit"
              size="large"
              color="success"
              variant="contained"
              sx={{ marginRight: "12px", width: "120px" }}
            >
              Thêm
            </Button>
            <Button
              type="button"
              size="large"
              variant="contained"
              onClick={handleBack}
              sx={{
                width: "120px",
                backgroundColor: "#767C75",
                color: theme.palette.secondary.contrastText,
                "&:hover": {
                  backgroundColor: "#767C75",
                },
              }}
            >
              Quay Lại
            </Button>
          </Box>
        </Stack>
      </Box>
    </Title>
  );
};

export default FormAddIDCard;
