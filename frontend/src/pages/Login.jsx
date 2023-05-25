import {
  Alert,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import loginPageImg from "../assets/images/login_page_pic.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLoginBtn = async () => {
    try {
      let obj = {
        email,
        password,
      };
      // console.log(obj);

      const response = await axios.post("/api/users/login", obj);
      if (response.data.success) {
        // Alert(response.data.message);
  
        console.log(response.data.message);
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        // Alert(response.data.message);
        console.log(response.data.message);
      }
    } catch (error) {
      Alert(error.message);
      console.log(error.message);
    }
  };

  return (
    <>
      <Stack
        direction={["column", "row", "row"]}
        m={"auto"}
        marginLeft={"20%"}
        marginTop={"10"}
        p={5}
        gap={10}
        // border={"1rem solid"}
        // borderColor={"green"}
        w={"max-content"}
        boxShadow={"rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"}
      >
        <Stack>
          <Image w={"300px"} borderRadius={10} src={loginPageImg} />
        </Stack>
        <Stack p={5} boxShadow={"rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"}>
          <FormControl>
            <Heading color={"green.700"}>Welcome Back</Heading>
            <Text color="orange.500">Sign in to continue</Text>
            <FormLabel mt={"5"}>Email</FormLabel>
            <Input
              type="email"
              isRequired
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <FormLabel mt={"5"}>Password</FormLabel>
            <Input
              type="password"
              isRequired
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button mt={"5"} colorScheme="orange" onClick={handleLoginBtn}>
              Login
            </Button>
            <Text mt={5} color={"gray.500"}>
              <Link to={"/register"}>
                If not registered, Please register here
              </Link>
            </Text>
          </FormControl>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
