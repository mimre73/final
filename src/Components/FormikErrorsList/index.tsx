import React from 'react';
import {VStack, Text} from 'native-base';
import {FormikErrors, FormikValues} from 'formik';

interface Props {
  errors: FormikErrors<FormikValues>;
}

const FormikErrorsList = ({errors}: Props) => {
  return (
    <VStack space={1} mt={2}>
      {Object.entries(errors).map((value: Array<any>, index) => {
        return (
          <Text key={index} color="error.500" fontSize={16}>
            {value[1]}
          </Text>
        );
      })}
    </VStack>
  );
};

export default FormikErrorsList;
