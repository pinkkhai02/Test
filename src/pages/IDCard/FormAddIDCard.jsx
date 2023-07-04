import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Title from "../../components/common/Title";
import { useTheme } from "@emotion/react";

const FormAddIDCard = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [idCard, setIdCard] = useState("");
  const { id } = useParams();
  const handleChange = (e) => {
    setIdCard(e.target.value);
    console.log(idCard);
  };

  // const userForm = useFormik({
  //   initialValues: {
  //     name: currentUser ? currentUser.name : "",
  //     gmail: currentUser ? currentUser.gmail : "",
  //     phone: currentUser ? currentUser.phone : "",
  //     password: "",
  //     role: currentUser ? currentUser.role : "",
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string()
  //       .min(4, "Họ và tên tối thiểu 4 ký tự ")
  //       .required("Bạn phải nhập tên"),
  //     gmail: Yup.string()
  //       .matches(
  //         /([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g,
  //         "Gmail không hợp lệ"
  //       )
  //       .required("Bạn phải nhập Gmail"),
  //     phone: Yup.string()
  //       .min(10, "Số điện thoại không hợp lệ")
  //       .matches(
  //         /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
  //         "Số điện thoại không hợp lệ"
  //       )
  //       .required("Bạn phải nhập số điện thoại"),
  //     password: Yup.string()
  //       .min(8, "Mật khẩu tối thiểu 8 ký tự ")
  //       .required("Bạn phải nhập mật khẩu"),
  //     role: Yup.string().required("Chọn kiểu thành viên"),
  //   }),
  //   enableReinitialize: true,
  //   onSubmit: async (values) => {
  //     try {
  //       const formData = {
  //         name: values.name,
  //         gmail: values.gmail,
  //         phone: values.phone,
  //         password: values.password,
  //         role: values.role,
  //       };
  //       const respone = await accountApi.register(formData);
  //       if (respone.status === 201) {
  //         navigate("/account");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // });

  // console.log(userForm.errors);

  // useEffect(() => {
  //   if (id) {
  //     const fetchData = async () => {
  //       try {
  //         const response = await accountApi.getById(id);
  //         if (response.status === 200) {
  //           dispatch(setCurrentUser(response.data));
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchData();
  //   }
  // }, [id]);

  // console.log(userForm.errors);

  return (
    <Title title="Mã thẻ">
      <Box>
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
              type="submit"
              size="large"
              variant="contained"
              sx={{
                width: "120px",
                backgroundColor: "#767C75",
                color: theme.palette.secondary.contrastText,
                "&:hover": {
                  backgroundColor: "#767C75",
                },
              }}
            >
              Huỷ
            </Button>
          </Box>
        </Stack>
      </Box>
    </Title>
  );
};

export default FormAddIDCard;
