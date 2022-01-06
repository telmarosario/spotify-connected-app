import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div>
      <h1>Login</h1>
      {Object.values(providers).map((provider) => {
        <div>
          <button>Login with {provider.name}</button>
        </div>;
      })}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
