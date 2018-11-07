import * as React from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import { createAction } from "../graphql/mutations";
import { CreateActionMutationVariables, CreateActionMutation } from "../API";

interface FormValues {
  name: string;
  price: number;
}

export const CreateActionForm = () => {
  return (
    <Mutation<CreateActionMutation, CreateActionMutationVariables>
      mutation={gql(createAction)}
    >
      {createAction => (
        <Formik<FormValues>
          initialValues={{
            name: "",
            price: 0
          }}
          onSubmit={async ({ name, price }) => {
            const response = await createAction({
              variables: {
                input: {
                  name,
                  price
                }
              }
            });
            console.log(response, "response");
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Name"
                value={values.name}
                onChange={handleChange}
                margin="normal"
              />
              <br />
              <TextField
                name="price"
                label="Price"
                value={values.price}
                onChange={handleChange}
                margin="normal"
              />
              <br />
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
          )}
        </Formik>
      )}
    </Mutation>
  );
};
