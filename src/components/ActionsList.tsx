import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { listActions } from "../graphql/queries";
import ActionCard from "../ActionCard";
import { ListActionsQueryVariables, ListActionsQuery } from "../API";

export const ActionsList = () => {
  return (
    <Query<ListActionsQuery, ListActionsQueryVariables>
      query={gql(listActions)}
    >
      {({ data, loading }) =>
        loading ||
        !data ||
        !data.listActions ||
        !data.listActions.items ? null : (
          <div>
            {data.listActions.items.map(x => (
              <ActionCard key={x!.id} />
            ))}
          </div>
        )
      }
    </Query>
  );
};
