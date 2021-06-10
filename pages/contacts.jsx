import Router from 'next/router'
import { MainLayout } from '../layouts/MainLayout'

export default function Contacts() {
  return (
    <MainLayout title="Контакты">
      <h1>Контакты</h1>
      <button onClick={() => Router.push('/')}>На главную</button>
      {/* Синтетический пример. А так может для "редиректа" по сетТаймауту пригодиться, например */}
    </MainLayout>
  )
}
