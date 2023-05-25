import {
  Alert,
  AlertIcon,
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
import registerPagePic from "../assets/images/register_page_pic.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      let obj = {
        name,
        email,
        password,
      };

      let res = await axios.post("/api/users/register", obj);
      if (res.data.success) {
        console.log(res.data.message);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      // Alert(error.message);
      console.log(error.message);
    }
  };

  return (
    <>
      <Stack
        w={"max-content"}
        direction={["column", "row", "row"]}
        p={5}
        marginLeft={"20%"}
        boxShadow={"rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"}
      >
        <Stack p={5}>
          <Image src={registerPagePic} w={"310px"} borderRadius={"10"} />
        </Stack>
        <Stack p={5} boxShadow={"rgba(0, 0, 0, 0.03) 0px 1px 2px 0px"}>
          <Heading color={"green.700"}>Create Account</Heading>
          <Text color="orange.500">Welcome to Orange Bus Travels</Text>
          <FormControl>
            <FormLabel mt={3}>Name</FormLabel>
            <Input
              type="text"
              isRequired
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <FormLabel mt={3}>Email</FormLabel>
            <Input
              type="email"
              isRequired
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <FormLabel mt={3}>Password</FormLabel>
            <Input
              type="password"
              isRequired
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button colorScheme="orange" mt={5} onClick={handleSubmit}>
              Register
            </Button>
            <Text mt={3} color={"gray.500"}>
              <Link to={"/login"}>
                If already registered, Please login here
              </Link>
            </Text>
          </FormControl>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
