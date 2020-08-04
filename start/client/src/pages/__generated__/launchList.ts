/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: launchList
// ====================================================

export interface launchList_launches_launches_rocket {
  __typename: "Rocket";
  id: string;
  name: string | null;
}

export interface launchList_launches_launches_mission {
  __typename: "Mission";
  name: string | null;
  missionPatch: string | null;
}

export interface launchList_launches_launches {
  __typename: "Launch";
  id: string;
  isBooked: boolean;
  rocket: launchList_launches_launches_rocket | null;
  mission: launchList_launches_launches_mission | null;
}

export interface launchList_launches {
  __typename: "LaunchConnection";
  cursor: string;
  hasMore: boolean;
  launches: (launchList_launches_launches | null)[];
}

export interface launchList {
  launches: launchList_launches | null;
}

export interface launchListVariables {
  after?: string | null;
}
