import React, { ReactElement } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useQueryParam, StringParam } from "use-query-params";
import { GET_BOOKS } from "../../graphql/queries";

import TextBox from "../../components/TextBox";

interface DashboardProps {}

const Dashboard = (props: DashboardProps): ReactElement | null => {
  const [filter, setFilter] = useQueryParam("filter", StringParam);

  const { loading, error, data, fetchMore } = useQuery(GET_BOOKS);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>`Error! ${error.message}`</div>;

  const handleOnChange = (val: string): void => {
    setFilter(val);
  };

  return (
    <div>
      <TextBox
        placeholder="Search..."
        word={filter || ""}
        callBack={handleOnChange}
      />
      <p>{filter}</p>
    </div>
  );
};

export default Dashboard;
