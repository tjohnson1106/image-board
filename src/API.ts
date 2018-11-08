/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateActionInput = {
  id?: string | null;
  name: string;
  price: number;
  description?: string | null;
};

export type UpdateActionInput = {
  id: string;
  name?: string | null;
  price?: number | null;
  description?: string | null;
};

export type DeleteActionInput = {
  id?: string | null;
};

export type ModelActionFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  price?: ModelFloatFilterInput | null;
  description?: ModelStringFilterInput | null;
  and?: Array<ModelActionFilterInput | null> | null;
  or?: Array<ModelActionFilterInput | null> | null;
  not?: ModelActionFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelFloatFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type CreateActionMutationVariables = {
  input: CreateActionInput;
};

export type CreateActionMutation = {
  createAction: {
    __typename: "Action";
    id: string;
    name: string;
    price: number;
    description: string | null;
  } | null;
};

export type UpdateActionMutationVariables = {
  input: UpdateActionInput;
};

export type UpdateActionMutation = {
  updateAction: {
    __typename: "Action";
    id: string;
    name: string;
    price: number;
    description: string | null;
  } | null;
};

export type DeleteActionMutationVariables = {
  input: DeleteActionInput;
};

export type DeleteActionMutation = {
  deleteAction: {
    __typename: "Action";
    id: string;
    name: string;
    price: number;
    description: string | null;
  } | null;
};

export type GetActionQueryVariables = {
  id: string;
};

export type GetActionQuery = {
  getAction: {
    __typename: "Action";
    id: string;
    name: string;
    price: number;
    description: string | null;
  } | null;
};

export type ListActionsQueryVariables = {
  filter?: ModelActionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListActionsQuery = {
  listActions: {
    __typename: "ModelActionConnection";
    items: Array<{
      __typename: "Action";
      id: string;
      name: string;
      price: number;
      description: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateActionSubscription = {
  onCreateAction: {
    __typename: "Action";
    id: string;
    name: string;
    price: number;
    description: string | null;
  } | null;
};

export type OnUpdateActionSubscription = {
  onUpdateAction: {
    __typename: "Action";
    id: string;
    name: string;
    price: number;
    description: string | null;
  } | null;
};

export type OnDeleteActionSubscription = {
  onDeleteAction: {
    __typename: "Action";
    id: string;
    name: string;
    price: number;
    description: string | null;
  } | null;
};
