'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import useSound from 'use-sound';
import { toast } from 'sonner';
import { Suspense } from 'react';
import Spinner from '@/components/animations/Spinner';
import { motion } from "framer-motion";
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible';
// import Aurora from '@/components/Aurora';

type Product = {
  id: string; 
  title: string;
  description: string;
  priceLabel: string;
  image: string;
};

const PRODUCTS: Product[] = [
  {
    id: 'pdt_UQGMdDZWiH1LzU8CFFPwZ',
    title: 'Guide to life.',
    description: 'A guide to living your life at its fullest.',
    priceLabel: '100 Rs.',
    image: '/logos/citadel.png',
  },
  {
    id: 'pdt_WJab3E8YXUxbJBgL2UCTU',
    title: 'Why Kerala? Supporter Pack',
    description: 'Support the travel planner project.',
    priceLabel: '10 Rs.',
    image: '/logos/whykerala.png',
  },
];

async function startStaticCheckout(productId: string) {
  const res = await fetch(`/checkout?productId=${encodeURIComponent(productId)}`, {
    method: 'GET',
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Checkout request failed');
  }
  const data = await res.json();
  const checkoutUrl = data.checkout_url;
  if (!checkoutUrl) throw new Error('Missing checkout_url');
  window.location.href = checkoutUrl;
}

function StoreContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const [click] = useSound('/notification.wav', { volume: 0.2 });
  const thingy = "{}"
  
  if (status === 'succeeded') {
    toast.success('Payment successful! Thanks for your support.');
  } else if (status === 'cancelled') {
    toast('Payment cancelled.');
  }

  const headingWords = ["Store"];

  return (
    <section className="w-full text-foreground flex items-center justify-center font-satoshi wrapperx md:pb-36">
      {/* <div className='w-full h-full absolute -top-3/12 left-0 dark:block hidden'>
      <Aurora
        colorStops={["#ff0000", "#8000ff", "#5227FF"]}
        blend={0.5}
        amplitude={1}
        speed={0.5}
      />
      </div> */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground/60 flex items-center justify-center">
          {headingWords.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <motion.h3
          className="text-foreground/30 text-center mb-12 font-bricolage font-bold"
          initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeIn" }}
        >
          {thingy[0]}Testing out payment integration{thingy[1]}
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl">
          {PRODUCTS.map((product) => (
            <FadeInWhenVisible>
            <div
              key={product.id}
              className="p-6 rounded-xl border-2 border-foreground/10 border-dotted transition"
            >
              <div className="w-full h-36 relative rounded-lg overflow-hidden bg-white mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-3 border-2 border-foreground/15 border-dotted rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground/90">{product.title}</h3>
              <p className="text-sm text-foreground/60 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-foreground/80 font-semibold">{product.priceLabel}</span>
                <button
                  onClick={async () => {
                    try {
                      click();
                      if (!product.id || product.id.startsWith('pdt_replace_me')) {
                        toast('Configure productId in Store first.');
                        return;
                      }
                      await startStaticCheckout(product.id);
                    } catch (err) {
                      toast.error('Unable to start checkout.');
                      console.error(err);
                    }
                  }}
                  className="px-5 py-2 rounded-xl bg-foreground text-background text-sm hover:bg-foreground/90 active:scale-95 transition cursor-pointer"
                >
                  Buy
                </button>
              </div>
            </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* <div className="mt-8 text-center text-sm text-foreground/60">
          Need to manage your subscription? Ask me for your customer portal link.
        </div> */}
      </div>
    </section>
  );
}

export default function StorePage() {
  return (
    <Suspense fallback={<Spinner />}>
      <StoreContent />
    </Suspense>
  );
}
