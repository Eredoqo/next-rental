import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  DialogContent,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import { useState } from "react";
import LoginSignUpButton from "./LoginSignUpButton";
import { useRouter } from "next/navigation";
import { jwtDecode, JwtPayload } from "jwt-decode"; // Ensure correct import

interface Props {
  onClose: () => void;
  onLoginSuccess: (user: any) => void; // Pass user information to the parent component
}

type MyJwtPayload = JwtPayload & { data: { email: string; password: string } };

export default function LoginTextFields({ onClose, onLoginSuccess }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleTogglePasswordVisibility = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
      localStorage.setItem("authToken", data.token);

      // Decode the token to get user information
      const decodedToken = jwtDecode<MyJwtPayload>(data.token);
      await onClose();
      onLoginSuccess(decodedToken);
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DialogContent sx={{ height: "480px", width: "430px" }}>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "30px" }}
        onSubmit={handleLogin}
      >
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            mt: "5px",
            "& .MuiInputBase-root": {
              borderRadius: "10px",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
            "& .Mui-focused": {
              backgroundColor: "transparent",
            },
            "& .MuiFilledInput-underline:after": {
              backgroundColor: "transparent",
            },
            "& .MuiFormLabel-root.Mui-focused": {
              color: "black",
            },
          }}
          label="Email"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "10px",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
            "& .Mui-focused": {
              backgroundColor: "transparent",
            },
          }}
          label="Password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </DialogContent>
  );
}
