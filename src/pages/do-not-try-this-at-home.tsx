import { Button } from "@/components/ui/button";
import Head from "next/head";

export default function DoNotTryThisAtHome() {
  return (
    <>
      <Head>
        <title>Do Not Try This At Home</title>
      </Head>
      <main className="p-32 flex flex-col gap-32 items-center">
        <p className="text-black">
          <span>This text has enough contrast with the background ✅</span>
          <span className="text-gray-400">
            This text has low contrast with the background ❌
          </span>
        </p>

        <div className="flex justify-center">
          <Button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 hover:scale-110 hover:bg-indigo-500 duration-300 motion-reduce:transition-none motion-reduce:transform-none motion-reduce:animate-none">
            Button with reduced motion
          </Button>
        </div>

        <div className="flex flex-col items-center">
          <p>This image is missing a couple of things:</p>
          <img src="https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>

        <div className="flex flex-col items-center">
          <p>This link is kind of redundant and missing a good description</p>
          <a href="https://youtu.be/c0-hvjV2A5Y?si=pOCIQ9Nu5Gt5GfSj">
            click here
          </a>
        </div>

        <div className="flex flex-col items-center">
          <p>Please do not make forms like this:</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>Email</label>
            <input
              className="border-2 border-gray-300"
              id="email"
              name="email"
              type="email"
            />
            <label>Passowrd</label>
            <input
              className="border-2 border-gray-300"
              id="password"
              name="password"
              type="password"
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </main>
    </>
  );
}
