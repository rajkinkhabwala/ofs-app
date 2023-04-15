import { Title } from "@mantine/core";
import React from "react";
import "../../styles/_table.scss"
export function Page({ children, title }: PageProps) {
  return (
    <>
    <Title order={1}>{title}</Title>
    
    {children}
    </>
  );
}
