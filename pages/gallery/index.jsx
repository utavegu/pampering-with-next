import Link from 'next/link'
import { MainLayout } from '../../layouts/MainLayout'

export default function Gallery() {
  return (
    <MainLayout title="Галерея">
      <h1>ГАЛЕРЕЯ</h1>
      <Link href={'/'}><a>На главную</a></Link>
      <p>Отрендерить 50 айтемов, чтобы по ним раболал скролл. Инфинити скролл. (как карусель с динамической подгрузкой).
      <br />
      Независимо от размера картинки они пропорционально втискиваются в свой контейнер
      <br />
      Lazy load картинок с точки зрения seo (data src)
      <br />
      Сорс на тэге
      </p>
    </MainLayout>
  )
}
