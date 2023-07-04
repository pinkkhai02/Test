import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { category } from "../../api/modules/category.api";

const Sidebar = () => {
  const theme = useTheme();
  return (
    <section className="sidebar">
      <Box
        sx={{
          maxWidth: "280px",
          display: "flex",
          flexDirection: "column",
          minHeight: `calc{100vh - 110px}`,
        }}
      >
        {category.map((data) => {
          return (
            <Box
              key={data.id}
              sx={{
                textAlign: "left",
                padding: "6px",
                width: "100%",
                a: {
                  display: "block",
                  textTransform: "capitalize",
                  position: "relative",
                  width: "100%",
                  padding: "8px 0",
                  color: theme.palette.primary.contrastText,
                  fontWeight: "500",
                  borderRadius: "6px",
                },
                "a.active": {
                  color: theme.palette.primary.highlightText,
                  backgroundColor: theme.palette.primary.background,
                },
                "a:hover": {
                  color: theme.palette.primary.highlightText,
                  backgroundColor: theme.palette.primary.background,
                },
              }}
            >
              <NavLink
                to={data.path}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <i
                  className={data.icon}
                  style={{
                    marginRight: "6px",
                    paddingLeft: "18px",
                    fontSize: "0.7rem",
                    transform: `translateY(${-2}px)`,
                  }}
                ></i>
                {data.title}
              </NavLink>
            </Box>
          );
        })}
      </Box>
    </section>
  );
};

export default Sidebar;
