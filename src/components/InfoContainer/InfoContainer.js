// MUI //
import { Box } from "@mui/material";

const InfoContainer = (props) => {
  return (
    <Box sx={{ display: "flex", border: "1px solid grey", borderTop: "0" }}>
      <Box sx={{ width: "50%", minHeight: "21px", margin: "1rem" }}>{props.Heading}</Box>
      <Box
        sx={{
          width: "50%",
          minHeight: "21px",
          margin: "1rem",
          borderLeft: "1px solid grey",
        }}
      >
        {props.Value}
      </Box>
    </Box>
  );
};

export default InfoContainer;
