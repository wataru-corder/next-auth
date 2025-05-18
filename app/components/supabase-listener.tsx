"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Navigation from "./navigation";
import type { Database } from "@/lib/database.types";

//認証状態の監視
const SupabaseListener = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <Navigation session={session} />;
};

export default SupabaseListener;
// . 全体の流れ
// サーバーコンポーネント内で Supabase クライアントを初期化します。
// Supabase の認証メソッドを使用して、現在のユーザーセッション情報を取得します。
// 取得したセッション情報を Navigation コンポーネントに渡し、適切な UI をレンダリングします。
