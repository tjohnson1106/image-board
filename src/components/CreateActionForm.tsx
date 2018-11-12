import * as React from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { produce } from "immer";

import { createAction } from "../graphql/mutations";
import {
  CreateActionMutationVariables,
  CreateActionMutation,
  ListActionsQuery
} from "../API";
import { listActions } from "../graphql/queries";

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
          onSubmit={async ({ name, price }, { resetForm }) => {
            const response = await createAction({
              variables: {
                input: {
                  name,
                  price
                }
              },

              optimisticResponse: {
                createAction: {
                  __typename: "Action",

                  id: "-1",
                  name,
                  price
                }
              },

              update: (store, { data }) => {
                if (!data || !data.createAction) {
                  return;
                }

                const actions = store.readQuery<ListActionsQuery>({
                  query: gql(listActions),
                  variables: { limit: 100 }
                });

                store.writeQuery({
                  query: gql(listActions),
                  variables: { limit: 100 },
                  data: produce(actions, ds => {
                    ds!.listActions!.items!.unshift(data.createAction);
                  })
                });
              }
            });
            resetForm();
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
