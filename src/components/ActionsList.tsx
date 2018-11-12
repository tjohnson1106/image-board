import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { buildSubscription } from "aws-appsync";

import { listActions } from "../graphql/queries";
import { ActionCard } from "../ActionCard";
import { ListActionsQueryVariables, ListActionsQuery } from "../API";
import { OnMount } from "../util/OnMount";
import { onCreateAction } from "../graphql/subscriptions";

export const ActionsList = () => {
  return (
    <Query<ListActionsQuery, ListActionsQueryVariables>
      query={gql(listActions)}
      variables={{ limit: 100 }}
    >
      {({ data, loading, subscribeToMore }) => {
        if (loading || !data || !data.listActions || !data.listActions.items) {
          return null;
        }

        return (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridGap: 10
            }}
          >
            <OnMount
              onEffect={() => {
                return subscribeToMore(
                  buildSubscription(gql(onCreateAction), gql(listActions))
                );
              }}
            />
            {data.listActions.items.map(x => (
              <ActionCard name={x!.name} price={x!.price} key={x!.id} />
            ))}
          </div>
        );
      }}
    </Query>
  );
};
