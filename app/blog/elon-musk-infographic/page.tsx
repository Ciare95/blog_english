import { Button } from "@/components/ui/button"
import { BookOpen, ArrowLeft, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ElonMuskInfographicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Hernán's Dev Blog</h1>
            </div>
            <nav className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium">
                About Me
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-100 rounded-lg mr-4">
                <Lightbulb className="h-8 w-8 text-orange-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Elon Musk Infographic</h1>
                <p className="text-gray-600 mt-1">Innovation and Entrepreneurship</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Elon Musk is one of the most influential entrepreneurs and innovators of our time. This infographic
                showcases his major achievements, companies, and contributions to technology and space exploration. From
                revolutionizing electric vehicles to advancing space travel, Musk's vision continues to shape the future
                of multiple industries.
              </p>
            </div>

            {/* Infographic Image */}
            <div className="bg-gray-50 rounded-lg p-8 text-center mb-8">
              <Image
                src="/images/elon.jpg"
                alt="Elon Musk Infographic"
                width={600}
                height={800}
                className="mx-auto rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-500 mt-4">Elon Musk: Achievements, Companies, and Impact on Technology</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Highlights</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Major Companies</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>
                  <strong>Tesla:</strong> Revolutionary electric vehicle and clean energy company
                </li>
                <li>
                  <strong>SpaceX:</strong> Private space exploration and satellite internet provider
                </li>
                <li>
                  <strong>Neuralink:</strong> Brain-computer interface technology
                </li>
                <li>
                  <strong>The Boring Company:</strong> Tunnel construction and transportation
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technological Innovations</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Advancing electric vehicle adoption worldwide</li>
                <li>Developing reusable rocket technology</li>
                <li>Pioneering brain-computer interfaces</li>
                <li>Promoting sustainable energy solutions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Impact on Society</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Accelerating the transition to sustainable transport</li>
                <li>Making space travel more accessible and affordable</li>
                <li>Inspiring a new generation of entrepreneurs</li>
                <li>Pushing the boundaries of technological innovation</li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed">
                Elon Musk's approach to innovation and his willingness to tackle seemingly impossible challenges serve
                as an inspiration for aspiring entrepreneurs and technologists. His work demonstrates the power of
                ambitious thinking and persistent execution in creating meaningful change.
              </p>
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
