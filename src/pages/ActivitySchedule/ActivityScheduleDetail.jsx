import React from "react";
import {
  IconButton,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Search from "../../components/common/Search";
import Title from "../../components/common/Title";

const ActivityScheduleDetail = () => {
  return (
    <Title title="Thời gian hoạt động">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Mã thẻ</TableCell>
              <TableCell align="center">Thời gian hoạt động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">1</TableCell>

              <TableCell align="center">123</TableCell>
              <TableCell align="center">12/05/2023 13:50:20</TableCell>
              {/* <TableCell align="center">
                <>
                  <IconButton
                    LinkComponent={Link}
                    to={`/activity-schedule/detail`}
                    onClick={() => {
                      dispatch();
                    }}
                  >
                    <RemoveRedEyeIcon />
                  </IconButton>
                </>
              </TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* {data?.count > 0 && (
      <Pagination
        count={Math.ceil(data.count / 5)}
        shape="rounded"
        onChange={(e, page) => {
          handlePageChange(page);
        }}
        sx={{
          marginTop: "24px",
          ul: { justifyContent: "center" },
        }}
      />
    )} */}
    </Title>
  );
};

export default ActivityScheduleDetail;
