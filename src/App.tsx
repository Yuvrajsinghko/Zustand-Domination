import { Box, Container, Typography } from "@mui/material";
import useHabbitStore from "./store/store";
import AddHabitForm from "./components/add-habbit-form";

const App = () => {
  // const store = useHabbitStore();
  // console.log(store)
  return (
    <Container>
      <Box>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habbit Tracker
        </Typography>
        {/* Form */}
        <AddHabitForm />
      </Box>
    </Container>
  );
};

export default App;
