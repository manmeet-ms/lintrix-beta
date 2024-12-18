import { FloatingHeader } from '@/components/floating-header'
import { GradientBg3 } from '@/components/gradient-bg'
import { PageTitle } from '@/components/page-title'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { ScrollArea } from '@/components/scroll-area'
import { Masonry } from '@mui/lab'
import { Suspense } from 'react'

const reviews = [
  {
    client: 'brettgoodman07',
    country: 'Australia',
    flag: 'AU',
    ratings: '5',
    summary: 'Responsive and Detail-Oriented',
    comment:
      'Very responsive and did an amazing job. Always happy to jump on a call and walk me through the work and make changes where necessary.'
  },

  {
    client: 'flashweirdo',
    country: 'Canada',
    flag: 'CA',
    ratings: '5',
    summary: 'Hassle-Free and Satisfying',
    comment: "Really good, I didn't have to do much and he did all the work for me. Very satisfied."
  },
  {
    client: 'abongir',
    country: 'India',
    flag: 'IN',
    ratings: '4.7',
    summary: 'Fantastic Problem-Solving Skills',
    comment:
      'It was a fantastic experience. I had a particularly challenging problem to solve and he was able to resolve it very well.'
  },
  
  {
    client: '  bv1s1ble',
    country: 'Pakistan',
    flag: 'PK',
    ratings: '5',
    summary: 'Highly Talented and Reliable',
    comment:
      'The Personality & Overall Communication skills of such a talented individual cannot be described in words. We are 100% satisfied for what Wavewalker (Manmeet) have done for us. Amazing Service , Highly Talented Individual i would recommend anyone to Consult or Hire Manmeet for your Startup work.'
  },

  {
    client: 'bv1s1ble',
    country: 'Pakistan',
    flag: 'PK',
    ratings: '5',
    summary: 'Pleasure to Work With',
    comment:
      'Thanku Wavewalker ( Dear Manmeet ) its been a Pleasure doing Business with you. I will give you a big round of Applause for your services , I got what I actually needed. I will be Considering to do further more business with you because of your... See more'
  },
  {
    client: 'privatkonto192',
    country: 'Germany',
    flag: 'DE',
    ratings: '5',
    comment: 'Gut Schnell'
  },
  {
    client: 'boazoo',
    country: 'Israel',
    flag: 'IR',
    ratings: '5',

    comment: '👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻👌🏻'
  },
]

export default function Testimonials() {
  return (
    <ScrollArea useScrollAreaId>
      <GradientBg3 />
      <FloatingHeader scrollTitle="Testimonials" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Testimonials" />
          <p> 
          Verify the authenticity of reviews <a className="text-primary after:content-['_↗']" href="https://www.fiverr.com/wavewalker777">here </a></p>
          <Suspense fallback={<ScreenLoadingSpinner />}>
            <section className=''>
              <div className="container mx-auto px-5 py-12">
                <div className="-mx-4 -my-8 flex flex-wrap">
                  
                  <Masonry columns={{ 
                    xs:2,
                    sm: 2, 
                    md: 3,
                     }} spacing={1}>
                    {reviews.map((items) => (
                      <>
                        <section className="overflow-hidden bg-gray-100/30 border rounded-xl  text-gray-600">
                          <div className="container mx-auto px-5 py-6">
                            <div className="-m-12 flex flex-wrap">
                              <div className="flex  flex-col items-start p-12">
                                <span className="inline-flex gap-1 items-center rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-3 ' viewBox="0 0 24 24" fill="currentColor" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  ><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                                  <span className="  font-medium">{items.ratings}</span>
                                </span>
                                <h2 className="my-4  text-xl md:text-2xl font-medium text-gray-900 ">
                                  {items.summary ? items.summary : null}
                                </h2>
                                <p className="mb-8 leading-relaxed">{items.comment}</p>
                                <div className="mb-4 mt-auto flex w-full flex-wrap items-center border-b-2 border-gray-100 pb-4">
                                 
                                </div>
                                <a className="inline-flex items-center">
                                  <span className="flex flex-grow flex-col  ">
                                    <span className=" font-medium text-card-foreground">@{items.client}</span>
                                    <div className="flex items-center gap-1">
                                      <img
                                        alt="flag"
                                        src={`https://flagsapi.com/${items.flag}/flat/64.png`}
                                        className="size-4 border-none rounded shrink-0 object-cover object-center"
                                      />
                                      <span className="text-xs text-card-foreground/40">{items.country}</span>
                                    </div>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </section>
                      </>
                    ))}
                  </Masonry>
                </div>
              </div>
            </section>
    
          </Suspense>
        </div>
      </div>
    </ScrollArea>
      
    
  )
}
