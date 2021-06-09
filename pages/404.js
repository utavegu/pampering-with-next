import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <>
      <h1>Страница не найдена!</h1>
      <p>Вы можете вернуться на <Link href={'/'}><a>главную страницу</a></Link>.</p>
    </>
  )
}
