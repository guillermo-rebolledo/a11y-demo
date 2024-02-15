import { AlertDialogDemo } from "@/components/ui/alert-dialog";
import { DropdownMenuDemo } from "@/components/ui/dropdown-menu";
import { CollapsibleDemo } from "@/components/ui/collapsible";
import { CalendarDemo } from "@/components/ui/calendar";
import Head from "next/head";

export default function Features() {
  return (
    <>
      <Head>
        <title>Features</title>
      </Head>
      <main className="p-32 flex flex-col gap-32 items-center">
        <AlertDialogDemo />

        <DropdownMenuDemo />

        <CollapsibleDemo />

        <CalendarDemo />
      </main>
    </>
  );
}
