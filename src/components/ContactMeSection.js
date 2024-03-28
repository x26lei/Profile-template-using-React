import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: '',
    },
    onSubmit: (values) => {
      submit(values)
      setHasHandledResponse(false)
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email('Invalid email address').required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),
  });

  const [hasHandledResponse, setHasHandledResponse] = useState(false);

  
  useEffect(() => {
    if (response && !hasHandledResponse) {
      const alertType = response.type === 'success' ? 'success' : 'error';
      console.log("alertType=", alertType)
      onOpen(alertType, response.message);
      if (response.type === 'success') {
        formik.resetForm();
      }
      setHasHandledResponse(true);
    }
  }, [response, onOpen, hasHandledResponse]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#f5f5f7"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start" color='#1d1d1f'>
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && Boolean(formik.errors.firstName)}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={formik.touched.email && Boolean(formik.errors.email)}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && 
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                }
              </FormControl>
              <FormControl isInvalid={formik.touched.type && Boolean(formik.errors.type)}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps('type')}>
                  <option value=""></option>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
                {formik.touched.type && formik.errors.type && (
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
                )}
              </FormControl >
              <FormControl isInvalid={formik.touched.comment && Boolean(formik.errors.comment)}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                {formik.touched.comment && formik.errors.comment &&
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>}
              </FormControl>

              <Button type="submit"
                isLoading={isLoading}
                bg="#1b76d1"
                color="white"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;