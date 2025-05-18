import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import type { Database } from '@/lib/database.types'


export async function GET(request: NextRequest){
    //URLを取得
    const requestUrl = new URL(request.url)

    //認証コードを取得
    const code = requestUrl.searchParams.get('code')

// createRouteHandlerClient を呼び出して、Supabase クライアントを初期化します。
// クッキー情報を渡すことで、認証やセッション管理が可能になります。
// 初期化された Supabase クライアントを使用して、データベース操作や認証関連の処理を行います。
    if(code){
        const supabase = createRouteHandlerClient<Database>({cookies})

        //認証コードをセッショントークンに交換
        await supabase.auth.exchangeCodeForSession(code)
    }

    return NextResponse.redirect(requestUrl.origin)
}