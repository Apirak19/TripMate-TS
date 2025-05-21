import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Home() {
  return (
    <>
      <Hero />
      <main className="w-full flex flex-col items-center pb-4">
      {/* <main className="flex-1 flex flex-col gap-6 px-4"> */}
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
      </main>

      {/* <div className="w-full flex flex-col items-center pb-4">
      <h1 className="text-8xl">{session.user.name}</h1>
      <Image src={session.user.image} width={200} height={200}></Image>
      <Hero />
      <TripCategory />
      <PopularPlace />
      <SuggestedTrip />
      <Testimonial />
    </div> */}
    </>
  );
}
