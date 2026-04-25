import { Box, Typography } from "@mui/material";
type BoardHeaderProps = {
  name: string;
};

export default function BoardHeader({ name }: BoardHeaderProps) {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        bgcolor: "#ECEFF1",
      }}
    >
      <Typography variant="h6">{name}</Typography>
    </Box>
  );
}
