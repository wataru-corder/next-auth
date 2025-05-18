import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import type { Database } from "@/lib/database.types";
const Home = async () => {
  const supabase = createServerComponentClient<Database>({
    // サーバーコンポーネント内で Supabase クライアントを作成します。
    cookies,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  // Supabase の認証メソッドで、現在のユーザーセッション情報を取得します。
  // data: { session }: メソッドの戻り値から session プロパティを抽出しています。
  // この session には、ユーザーの認証状態やトークン情報が含まれます。

  return (
    <div className="text-center">
      {session ? <div>ログイン済</div> : <div>未ログイン</div>}
    </div>
  );
};

export default Home;

// 4. 全体の流れ
// サーバーコンポーネント内で Supabase クライアントを初期化します。
// Supabase の認証メソッドを使用して、現在のユーザーセッション情報を取得します。
// セッション情報を基に、ログイン状態に応じたメッセージを表示します。

// 5. ポイント
// サーバーコンポーネント: このコードはサーバーコンポーネントとして動作するため、クライアントサイドではなくサーバーサイドでセッション情報を取得します。これにより、セキュリティが向上し、クライアントサイドでの不要なデータ露出を防ぎます。
// 型安全性: Database 型を使用することで、Supabase クライアントが型安全に操作できるようになっています。
// 認証の統合: Supabase を使用して認証状態を簡単に管理し、UI に反映させる仕組みを提供しています。
