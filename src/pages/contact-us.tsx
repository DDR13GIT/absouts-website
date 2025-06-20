import styles from '@/styles/pages/contact-us.module.scss'
import DefaultLayout from '@/layouts/DefaultLayout'

export default function ContactUs() {
  return (
    <DefaultLayout>
      <div className={styles.contact}>
        <h1>Contact Us</h1>
      </div>
    </DefaultLayout>
  )
}
