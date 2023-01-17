import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';

const ContactPage = () => {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1 className="title">
        Ir a <Link href="/"> Home </Link>
      </h1>
    </MainLayout>
  )
}

export default ContactPage;