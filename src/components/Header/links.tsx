import React, { ReactElement } from "react";
import { ListItem } from "@material-ui/core";
import history from "../../history";

interface Link {
  label: string;
  link: string;
}
export interface Props {
  links: Link[];
  setMobileOpen(arg: boolean): void;
}

export default function Links({
  links,
  setMobileOpen,
}: Props): ReactElement | null {
  const handleGoToLink = (link: string): void => {
    setMobileOpen(false);
    history.push(link);
  };

  return (
    <ul>
      {links.map(({ link, label }) => (
        <ListItem button onClick={() => handleGoToLink(link)}>
          <li className="pointer">
            <p className="menu plain tight">{label}</p>
          </li>
        </ListItem>
      ))}
    </ul>
  );
}
