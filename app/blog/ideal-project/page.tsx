import { Button } from "@/components/ui/button"
import { BookOpen, ArrowLeft, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function IdealProjectPage() {
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
              <div className="p-3 bg-purple-100 rounded-lg mr-4">
                <MessageSquare className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">My Ideal Project</h1>
                <p className="text-gray-600 mt-1">Dream Software Development Project</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Every developer has a dream project - something that combines their passions, skills, and vision for
                making a positive impact. In this video, I discuss what my ideal software development project would look
                like, the technologies I'd use, and the problems I'd want to solve.
              </p>
            </div>

            {/* Video Embed */}
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-8">
              <iframe
                src="https://soysena-my.sharepoint.com/personal/hernan_dcifuentes_soy_sena_edu_co/_layouts/15/embed.aspx?UniqueId=5d954a50-ba76-4145-a2da-63ebe8098680"
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                title="My Ideal Project"
                className="w-full aspect-video"
              ></iframe>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Vision</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Problem to Solve</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Identifying a real-world problem that affects people's daily lives</li>
                <li>Understanding the target audience and their specific needs</li>
                <li>Researching existing solutions and finding gaps to fill</li>
                <li>Defining the unique value proposition of my solution</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Approach</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Choosing the right technology stack for the project</li>
                <li>Planning the architecture and system design</li>
                <li>Considering scalability and performance requirements</li>
                <li>Implementing best practices for security and user experience</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Development Process</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Following agile development methodologies</li>
                <li>Incorporating user feedback throughout development</li>
                <li>Maintaining high code quality and documentation</li>
                <li>Planning for testing, deployment, and maintenance</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Impact and Goals</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Making a positive difference in users' lives</li>
                <li>Learning and growing as a developer through challenges</li>
                <li>Building something I'm genuinely passionate about</li>
                <li>Creating opportunities for collaboration and community</li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed">
                Having a clear vision of an ideal project helps guide my learning journey and motivates me to develop
                the skills necessary to bring ambitious ideas to life. It's not just about the technology, but about
                creating meaningful solutions that make a difference.
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
