import { Button } from "@/components/ui/button"
import { BookOpen, ArrowLeft, Video } from "lucide-react"
import Link from "next/link"

export default function LikesDislikesPage() {
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
              <div className="p-3 bg-red-100 rounded-lg mr-4">
                <Video className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">What I Like and Dislike</h1>
                <p className="text-gray-600 mt-1">Personal Preferences and Opinions</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                In this personal video, I share my thoughts about various topics, from programming languages and
                technologies to hobbies and lifestyle preferences. Getting to know someone's likes and dislikes helps
                build connections and understanding.
              </p>
            </div>

            {/* Video Embed */}
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-8">
              <video
                src="/Likes_and_deslikes.mp4"
                width="100%"
                height="400"
                controls
                title="What I Like and Dislike"
                className="w-full aspect-video"
              ></video>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Video Topics Covered</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Programming & Technology</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Favorite programming languages and frameworks</li>
                <li>Development tools and environments I prefer</li>
                <li>Technologies I find challenging or frustrating</li>
                <li>Coding practices I believe in</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Learning & Education</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Preferred learning methods and resources</li>
                <li>Study habits that work for me</li>
                <li>Subjects I find most interesting</li>
                <li>Challenges in my educational journey</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Interests</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Hobbies and activities I enjoy</li>
                <li>Entertainment preferences</li>
                <li>Things that motivate and inspire me</li>
                <li>Pet peeves and things I avoid</li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed">
                Sharing personal preferences helps create authentic connections with others and provides insight into
                what drives my decisions and interests as a software development student.
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
