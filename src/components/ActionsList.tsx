import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { listActions } from "../graphql/queries";
import { ActionCard } from "../ActionCard";
import { ListActionsQueryVariables, ListActionsQuery } from "../API";

export const ActionsList = () => {
  return (
    <Query<ListActionsQuery, ListActionsQueryVariables>
      query={gql(listActions)}
      variables={{ limit: 100 }}
    >
      {({ data, loading }) => {
        if (loading || !data || !data.listActions || !data.listActions.items) {
          return null;
        }

        console.log(data.listActions.items);

        return (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridGap: 10
            }}
          >
            {data.listActions.items.map(x => (
              <ActionCard name={x!.name} price={x!.price} key={x!.id} />
            ))}
          </div>
        );
      }}
    </Query>
  );
};
