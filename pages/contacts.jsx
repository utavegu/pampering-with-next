import Router from 'next/router'

export default function Contacts() {
  return (
    <>
      <h1>КОНТАКТЫ</h1>
      <button onClick={() => Router.push('/')}>На главную</button>
      {/* Синтетический пример. А так может для "редиректа" по сетТаймауту пригодиться, например */}
    </>
  )
}
