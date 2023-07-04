import React, { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Title from "../../components/common/Title";
import axios from "axios";

const ActivityScheduleDetail = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const [query] = useSearchParams();
  const p = query.get("p") || 1;
  const q = query.get("q") || "";
  const sortBy = query.get("sortBy") || "id";
  const sortType = query.get("sortType") || "DESC";

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        limit: 15,
        p: p,
        sortBy: sortBy,
        sortType: sortType,
      };
      try {
        const response = await axios.get(
          "http://localhost:8000/activity-schedules"
        );
        setData(response.data.activity_schedule);
        // console.log(response.data);
      } catch (error) {}
    };
    fetchData();
  }, []);
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
            {data.map((item, index) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{item._id}</TableCell>

                <TableCell align="center">{item.code_id}</TableCell>
                <TableCell align="center">{item.date}</TableCell>
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
            ))}
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
