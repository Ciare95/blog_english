import { Button } from "@/components/ui/button"
import { BookOpen, ArrowLeft, Map } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PLEMindMapPage() {
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
              <div className="p-3 bg-blue-100 rounded-lg mr-4">
                <Map className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Personal Learning Environment (PLE)</h1>
                <p className="text-gray-600 mt-1">Mind Map Exploration</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                A Personal Learning Environment (PLE) represents the tools, communities, and services that constitute
                the individual educational platforms learners use to direct their own learning and achieve learning
                goals. This mind map visualizes the key components and connections within my personal learning
                ecosystem.
              </p>
            </div>

            {/* Mind Map Image */}
            <div className="bg-gray-50 rounded-lg p-8 text-center mb-8">
              <Image
                src="/images/mapa_mental.jpg"
                alt="Personal Learning Environment Mind Map"
                width={800}
                height={600}
                className="mx-auto rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-500 mt-4">
                Personal Learning Environment Mind Map - Key components and relationships
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Components of My PLE</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Learning Tools & Platforms</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Online courses and tutorials</li>
                <li>Documentation and reference materials</li>
                <li>Code repositories and version control</li>
                <li>Development environments and IDEs</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Social Learning Networks</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Study groups and peer collaboration</li>
                <li>Online communities and forums</li>
                <li>Mentorship relationships</li>
                <li>Professional networks</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Content Creation & Reflection</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Personal blog and documentation</li>
                <li>Project portfolios</li>
                <li>Learning journals and notes</li>
                <li>Knowledge sharing platforms</li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed">
                Understanding and mapping my PLE helps me identify learning opportunities, optimize my study methods,
                and create more effective connections between different learning resources and communities.
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
