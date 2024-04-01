import * as React from "react";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <footer>
      <p>
        Original project by{" "}
        <a href="https://karthikeyanselvam18-portfolio.netlify.app/">
          Karthikeyan Selvam
        </a>
      </p>
    </footer>
  );
}
