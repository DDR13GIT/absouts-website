import styles from '@/styles/pages/about-us.module.scss'
import DefaultLayout from '@/layouts/DefaultLayout'

export default function AboutUs() {
  return (
    <DefaultLayout>
      <div className={styles.about}>
        <h1>About Us</h1>
      </div>
    </DefaultLayout>
  )
}