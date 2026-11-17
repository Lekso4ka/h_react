import React from "react";
import { Link } from "react-router-dom";
import { siteLink } from "../utils/staticLinks";

const EXTERNAL = /^(https?:|mailto:|tel:)/i;

export function PolicyLink({ children }) {
  const href = siteLink("footerPolicy") || "/policy";
  if (EXTERNAL.test(href)) {
    const web = /^https?:/i.test(href);
    return (
      <a href={href} target={web ? "_blank" : undefined} rel={web ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }
  return <Link to={href}>{children}</Link>;
}
