import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

const AddHabitForm = () => {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");
  return (
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        gap:"3vw"
    }}>
      <TextField
        label="Habit Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormControl fullWidth>
        <InputLabel >Frequency</InputLabel>
        <Select
          
          value={frequency}
          label="Frequency"
          onChange={(e)=>setFrequency(e.target.value as "daily"|"weekly")}
        >
          <MenuItem value="daily">Daily</MenuItem>
          <MenuItem value="weekly">Weekly</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" type="submit">Add Habit</Button>
    </Box>
  );
};

export default AddHabitForm;
