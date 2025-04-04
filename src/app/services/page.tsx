import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  const services = [
    {
      title: "Business Structure & Entity Selection",
      description: "CohnReznick Advisory, strategic and fiercely objective consultants, leverage a proprietary platform founded on innovation to skillfully oversee your transaction or transform the way you do business.",
      link: "/services/business-structure"
    },
    {
      title: "Business Accounting",
      description: "CohnReznick Advisory, strategic and fiercely objective consultants, leverage a proprietary platform founded on innovation to skillfully oversee your transaction or transform the way you do business.",
      link: "/services/business-accounting"
    },
    {
      title: "Business consulting",
      description: "CohnReznick Advisory, strategic and fiercely objective consultants, leverage a proprietary platform founded on innovation to skillfully oversee your transaction or transform the way you do business.",
      link: "/services/business-consulting"
    },
    {
      title: "Business tax planning",
      description: "CohnReznick Advisory, strategic and fiercely objective consultants, leverage a proprietary platform founded on innovation to skillfully oversee your transaction or transform the way you do business.",
      link: "/services/business-tax-planning"
    },
    {
      title: "Business trust and estate planning",
      description: "CohnReznick Advisory, strategic and fiercely objective consultants, leverage a proprietary platform founded on innovation to skillfully oversee your transaction or transform the way you do business.",
      link: "/services/Business-trust-and-estate-planning"
    },
    {
      title: "Trust taxes",
      description: "CohnReznick Advisory, strategic and fiercely objective consultants, leverage a proprietary platform founded on innovation to skillfully oversee your transaction or transform the way you do business.",
      link: "/services/trust-taxes"
    }
  ];

  const faqs = [
    {
      question: "Why is digital marketing important for my business?",
      answer: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights."
    },
    {
      question: "How can digital marketing help improve my website's visibility?",
      answer: ""
    },
    {
      question: "How long does it take to see results from digital marketing efforts?",
      answer: ""
    },
    {
      question: "How do you measure the success of digital marketing campaigns?",
      answer: ""
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[605px]">
        <Image
          src="/services-hero.jpg"
          alt="Services hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,0,0,0.20)] via-[rgba(36.67,42.37,40.33,0.31)] to-primary" />
        <div className="relative container mx-auto px-4 md:px-8 lg:px-12 pt-20 md:pt-32 lg:pt-40">
          <div className="text-white">
            <div className="text-sm md:text-base mb-2 md:mb-4">Home / Our Services</div>
            <h1 className="text-3xl md:text-4xl lg:text-[55px] font-bold font-inter capitalize mb-4 md:mb-6">Our Services</h1>
            <p className="max-w-[553px] text-sm md:text-base">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-[#FAFAFA] py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Link href={service.link} key={index} className="bg-white rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col gap-6 md:gap-10">
                  <div className="space-y-4 md:space-y-5">
                    <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold font-inter leading-tight">{service.title}</h3>
                    <p className="text-gray-dark text-sm md:text-base leading-relaxed">{service.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 md:w-[59px] md:h-[59px] border border-black rounded-full" />
                    <div className="w-6 h-6 relative">
                      <div className="w-[22px] h-4 bg-black transform rotate-180" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-primary py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-12">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold font-inter mb-6 md:mb-8 lg:mb-12">Digital Marketing FAQs</h2>
                <p className="text-gray-dark text-sm md:text-base mb-8 md:mb-12">
                  As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-12">
                  <button className="px-4 py-3 md:py-4 bg-primary text-white rounded-lg font-bold w-full sm:w-auto">
                    More Questions
                  </button>
                  <Link href="/contact" className="text-sm md:text-base font-semibold underline text-center">Contact Us</Link>
                </div>
              </div>
              <div className="md:w-1/2">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-t border-black py-4 md:py-6">
                    <div className="flex justify-between items-center mb-4 md:mb-6">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold font-inter">{faq.question}</h3>
                      <div className="w-6 h-6" />
                    </div>
                    {faq.answer && (
                      <p className="text-gray-dark text-sm md:text-base">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 