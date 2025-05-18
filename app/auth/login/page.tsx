import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Login from "@/app/components/login";
//ログインページ
const LoginPage = async () => {
  const supabase = createServerComponentClient<Database>({
    cookies,
  });
  //セッションの取得

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/");
  }

  return <Login />;
};

export default LoginPage;
