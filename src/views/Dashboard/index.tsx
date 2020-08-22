import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_BOOKS } from "../../graphql/queries";

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const { loading, error, data, fetchMore } = useQuery(GET_BOOKS);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>`Error! ${error.message}`</div>;
  return <div>Nuttin</div>;
};

export default Dashboard;
