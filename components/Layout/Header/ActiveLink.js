import { useRouter } from "next/router";
import React from "react";

const ActiveLink = React.forwardRef(function ActiveLink(
  { children, href, onClick },
  ref
) {
  const router = useRouter();
  const style = {
    borderTop: router.asPath  === href  ? "4px solid  #ffffff" : "none",
    textDecoration: "none",
    color: "#ffffff",
    lineHeight: "2.8",
  };
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <p href={href} onClick={handleClick} style={style} ref={ref}>
      {children}
    </p>
  );
});

export default ActiveLink;
