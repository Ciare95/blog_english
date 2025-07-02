import { Button } from "@/components/ui/button"
import { BookOpen, ArrowLeft, Users } from "lucide-react"
import Link from "next/link"

export default function TechnologyDebatePage() {
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
              <div className="p-3 bg-green-100 rounded-lg mr-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Technology Debate</h1>
                <p className="text-gray-600 mt-1">Which Technologies Are Better?</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                The world of technology is full of passionate debates about which tools, languages, and frameworks are
                superior. In this video, I engage in discussions about various technology choices, presenting different
                perspectives and sharing my own opinions based on experience and research.
              </p>
            </div>

            {/* Video Embed */}
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-8">
              <video
                src="/Quick_debate.mp4"
                width="100%"
                height="400"
                controls
                title="Technology Debate"
                className="w-full aspect-video"
              ></video>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Debate Topics</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Programming Languages</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>JavaScript vs Python for beginners</li>
                <li>Static typing vs Dynamic typing</li>
                <li>Compiled vs Interpreted languages</li>
                <li>Object-oriented vs Functional programming paradigms</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Web Development Frameworks</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>React vs Vue vs Angular for frontend development</li>
                <li>Node.js vs Django vs Spring Boot for backend</li>
                <li>Traditional SPAs vs Server-side rendering</li>
                <li>CSS frameworks vs Custom styling</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Development Tools & Practices</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>IDEs vs Text editors for coding</li>
                <li>Git workflows and version control strategies</li>
                <li>Testing approaches and methodologies</li>
                <li>Deployment strategies and platforms</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Database Technologies</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>SQL vs NoSQL databases</li>
                <li>Relational vs Document-based storage</li>
                <li>Cloud databases vs Self-hosted solutions</li>
                <li>ORM vs Raw SQL queries</li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed">
                Technology debates are valuable because they force us to think critically about our choices and consider
                different perspectives. While there's rarely a single "best" solution, understanding the trade-offs
                helps us make informed decisions based on specific project requirements and constraints.
              </p>

              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
                "The best technology is the one that solves your specific problem effectively, efficiently, and
                maintainably - not necessarily the most popular or newest one."
              </blockquote>
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
