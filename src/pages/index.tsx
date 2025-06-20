import styles from '@/styles/pages/landing.module.scss'
import DefaultLayout from '@/layouts/DefaultLayout'

export default function Home() {
  return (
    <DefaultLayout>
      <div className={styles.landing}>
        <h1>Welcome to Our Landing Page</h1>
      </div>
    </DefaultLayout>
  )
}