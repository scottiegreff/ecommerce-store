import getHero from "@/actions/get-hero";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Hero from "@/components/ui/hero";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  // *** FOR THE SITE's ADMIN ***
  // HARD CODE THE STORE's HOME PAGE HERO/BILLBOARD...
  // 1) GO TO THE ADMIN'S BILLBOARDS PAGE,
  // 2) CHOOSE THE BILLBOARD IMAGE YOU WOULD LIKE
  // 3) OPEN (...) TO COPY THE COPY THE ID {billboardId}
  // 4) COME BACK TO THE THIS FILE
  // 4) PASTE THE ID IN getBillboard() ARGUMENT.
  const hero = await getHero();
  // CONTACT SCOTT GREFF FOR HELP WITH THE ABOVE STEPS OR CUSTOM BILLBOARD IMAGES

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Hero data={hero} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
