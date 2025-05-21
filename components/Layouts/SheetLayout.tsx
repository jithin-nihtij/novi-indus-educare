import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode } from "react";

export const SheetLayout = ({
  trigger,
  title,
  children,
  className,
}: {
  trigger: ReactNode;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Sheet>
      <SheetTrigger>{trigger}</SheetTrigger>
      <SheetContent side="left" className={className}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{children}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
