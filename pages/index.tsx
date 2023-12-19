import { GetServerSideProps, GetServerSidePropsContext } from "next";

type User = {
  name: string;
  age: number;
};

type ProfileProps = {
  user: User;
};

export default function Profile({ user }: ProfileProps) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  console.log(context.req.cookies);
  context.req.headers.cookie = `set_token=abcdefghijk`;
  console.log(context.req.cookies);

  const user = { name: "test", age: "this is test page" };
  return { props: { user } };
};
