import Image from 'next/image';
import { FC } from 'react';

function Resources() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-16 px-4 py-12 md:flex-row">
      <div className="flex w-full justify-center md:w-1/2">
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%20Illustration__Woman%20Watering%20Bar%20Chart.webp"
          alt="Woman watering bar chart illustration"
          width={500}
          height={500}
          className="h-auto w-full object-contain"
        />
      </div>
      <div className="flex w-full flex-col justify-center space-y-4 md:w-1/2">
        <b className="font-serif text-4xl leading-tight">Free up resources, accelerate growth, and solve for scale.</b>
        <p className="text-base md:text-lg">
          At SupportNinja, we combine cutting-edge technology with value-centricity to foster high-performing, reliable
          teams that turn growing pains into efficient pathways to profitability.
        </p>
        <p className="mt-10 text-base md:text-lg">
          Our customized, agile, AI-enabled solutions don’t just deliver cost savings — they also help you achieve key
          business outcomes.
        </p>
        <p className="mt-10 text-base md:text-lg">
          We work closely with you to continually adjust strategies, realize efficiencies, and drive scale according to
          your unique needs. Plus, flexibility is baked in from day one, so you’re never locked into rigid, long-term
          contracts.
        </p>
        <p className="mt-10 text-base md:text-lg">Now that’s outsourcing worth talking about.</p>
      </div>
    </div>
  )
}

export default Resources