import Link from "next/link";

export default function Mypage() {
  return (
    <main className="Mypage">
      <Link href="/login">ログイン</Link>
      <h2 className="text-3xl text-center">マイページ</h2>
      <div>
        <div>
          <div className="bg-gray-400 w-20 h-20 mx-auto rounded-full"></div>
          <h3 className="text-xl text-center mt-2">名前</h3>
        </div>
        <ul className="mt-6">
          <li>
            <Link href="/create-post" className="block">
              募集を作成
            </Link>
          </li>
          <li>
            <Link href="/" className="block">
              作成した募集
            </Link>
          </li>
          <li>
            <Link href="/" className="block">
              届いた提案
            </Link>
          </li>
          <li>
            <Link href="/" className="block">
              予約履歴
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
