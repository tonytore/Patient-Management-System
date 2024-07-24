import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container mt-auto">
    <h1 className="text-2xl font-bold text-white">Home</h1>
    <Button>click me</Button>
    </section>
   
   </div>
  );
}
