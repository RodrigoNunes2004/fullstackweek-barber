import Image from "next/image";
import { format } from "date-fns";
import Header from "../_components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Hello, Miguel</h2>
        <p className="capitalize text-sm">{format(new Date(), "EEEE, MMMM d, yyyy")}</p>
      </div>
    </div>
  );
}
