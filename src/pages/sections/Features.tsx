import Card from '@/components/Card'
import React from 'react'
const features = [
  {
    icon: "mic",
    title: "Natural Voice Recognition",
    description: "Advanced AI understands accents, dialects, and casual speech patterns for seamless ordering.",
  },
  {
    icon: "fast",
    title: "Lightning Fast Processing",
    description: "Process orders in seconds with minimal latency, keeping your drive-thru line moving efficiently.",
  },
  {
    icon: "up",
    title: "Scalable for Cost",
    description: "Local models allow for inference and processing at a fraction of the cost of cloud-only models.",
  },
  {
    icon: "order",
    title: "Order Accuracy",
    description: "Reduce errors with intelligent order confirmation and real-time menu validation.",
  },
  {
    icon: "lang",
    title: "Multi-Language Support",
    description: "Handle multiple languages separately and simultaneously without compromising service quality.",
  },
  {
    icon: "chat",
    title: "Natural Conversations",
    description: "Engage customers with human-like dialogue that handles complex requests and modifications.",
  },
];
function Features() {
  return (
    <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
                <h2 className='text-3xl md:text-5xl mb-4'>Powerful Features</h2>
                <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                    Everything you need to revolutionize your drive-thru operations
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {features.map((e) => (
                    <Card icon={e.icon} title={e.title} description={e.description}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features