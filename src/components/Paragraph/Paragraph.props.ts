import { ComponentProps, ReactNode } from "react";

export type ParagraphProps = ComponentProps<'p'> & {
    children: ReactNode;
    fontSize: string;
}