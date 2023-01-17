import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";

const PricingPage = () => {
  return (
    <MainLayout>
        <h1>Pricing Page</h1>
        <h1 className="title">
        Ir a <Link href="/"> Contact </Link>
        </h1>
  </MainLayout>
  )
}

export default PricingPage;