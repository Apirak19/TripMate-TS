import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <div className="flex gap-12 mt-4">
        <button
          formAction={login}
          className="bg-slate-800 py-1 px-4 rounded-lg"
        >
          Log in
        </button>
        <button
          formAction={signup}
          className="bg-slate-800 py-1 px-4 rounded-lg"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}
