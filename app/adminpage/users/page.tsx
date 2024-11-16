"use client"

import { useState } from "react";
import {
  Autocomplete,
  Box,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { UserDto } from "@/app/Dto/UserDto";
import { LayoutWrapper } from "@/app/components/admin-component/admin-sidebar";
import Layout from "@/app/components/layout";


interface UserDetailsProps {
  user: UserDto;
}
function UserDetails({ user }: UserDetailsProps) {
  return (
    <>
      <Card
        key={user.id}
        sx={{ margin: "20px", width: "300px", borderRadius: "15px" }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {user.firstName} {user.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {user.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Role: {user.role} */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Username: {user.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Location: {user.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: {user.phone}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}


export default function Users() {
//   const { users: allUsers } = useGetUsersSearch();
//   const users = allUsers?.filter((user) => user.role !== "admin");
  const [inputValue, setInputValue] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserDto | null>(null);
  return (
    <LayoutWrapper>
        <Box></Box>
        <Layout />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          pr: "90px",
          pb: "30px",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={showAll}
              onChange={(event) => setShowAll(event.target.checked)}
            />
          }
          label="Show all users"
        />
        <Autocomplete
        //   options={showAll || inputValue.length >= 3 ? Users || [] : []}
        options={[]}
          getOptionLabel={(option: any) => `${option.firstName} ${option.lastName}`}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          onChange={(event, newValue: any) => {
            setSelectedUser(newValue);
          }}
          noOptionsText={false}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Users"
              sx={{ width: "300px" }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* {(showAll ? users : selectedUser ? [selectedUser] : []).map(
          (user) => user && <UserDetails user={user} />
        )} */}
      </Box>
    </LayoutWrapper>
  );
}