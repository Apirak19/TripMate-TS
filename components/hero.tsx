export default function Header() {
  return (
    <div
      className="flex flex-col gap-8 items-center justify-center bg-no-repeat text-white p-10 rounded-lg shadow-lg h-[700px]"
      style={{
        backgroundImage: "url(/images/beach-2178998_1920.jpg)",
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
      }}
    >
      <h1 className="sr-only">Explore Thailand with Local Experts</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Explore Thailand with Local Experts
      </p>
      <a
        href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
        target="_blank"
        className="font-bold hover:underline text-3xl lg:text-3xl !leading-tight mx-auto max-w-xl text-center"
        rel="noreferrer"
      >
        see our guide
      </a>
      {/* <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" /> */}
    </div>
  );
}
