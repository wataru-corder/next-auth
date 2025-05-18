import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "./lib/database.types";

export async function middleware(req:NextRequest){
    const res = NextResponse.next()
    const supabase = createMiddlewareClient<Database>({req,res})
    await supabase.auth.getSession()//セッション情報の取得
    return res
}

// 3. 全体の流れ
// リクエストがサーバーに到達すると、このミドルウェアが実行されます。
// NextResponse.next() を使ってデフォルトのレスポンスを作成します。
// createMiddlewareClient を呼び出して Supabase クライアントを初期化します。
// supabase.auth.getSession() を呼び出して、現在のユーザーセッション情報を取得します。
// 最終的にレスポンスオブジェクトを返し、リクエストを次の処理ステップに進めます。

// 4. ポイント
// 認証の統合: このミドルウェアは、Supabase の認証機能を Next.js アプリケーションに統合するための基本的な仕組みを提供します。
// セッション情報の利用: 現在のコードではセッション情報を取得するだけですが、この情報を基にリクエストをブロックしたり、リダイレクトしたりするロジックを追加することが可能です。
// 型安全性: Database 型を使用することで、Supabase クライアントが型安全に操作できるようになっています。