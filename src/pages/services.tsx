import styles from '@/styles/pages/services.module.scss'
import DefaultLayout from '@/layouts/DefaultLayout'

export default function Services() {
  return (
    <DefaultLayout>
      <div className={styles.services}>
        <h1>Our Services</h1>
      </div>
    </DefaultLayout>
  )
}
