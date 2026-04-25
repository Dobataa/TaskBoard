import { Box, Card, CardContent, Typography } from "@mui/material";
import { PriorityChip } from ".";
import { CardStatus } from "../../models";

type TodoCardProps = {
  title: string
  description: string
  status: number
  priority: number
};

export default function TaskCard({ title, description, status, priority }: TodoCardProps) {

  const determineColor = () => {
    if(CardStatus.Todo === status){
      return "#7bc0e8";
    } else if(CardStatus.InProgress === status){
      return "#F48FB1";
    } else if(CardStatus.Done === status){
      return "#26D0CE";
    }

  }
  return (
    <Card sx={{ bgcolor: determineColor(), borderRadius: 2 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom sx={{ fontSize: "1.25rem" }}>
            {title}
          </Typography>

          <PriorityChip type={priority}/>
        </Box>

        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
}
