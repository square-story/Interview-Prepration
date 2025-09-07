"use client"

import React, { useState } from "react"
import { Search, Code } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { problems, categories, frameworks } from "@/lib/problems-data"

export default function PortfolioPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedFramework, setSelectedFramework] = useState("All")

  // Filter problems based on search term, category, and framework
  const filteredProblems = problems.filter((problem) => {
    const matchesSearch =
      problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      problem.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      problem.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === "All" || problem.category === selectedCategory
    const matchesFramework = selectedFramework === "All" || problem.framework === selectedFramework
    
    return matchesSearch && matchesCategory && matchesFramework
  })

  // Get color based on difficulty
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Medium":
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Hard":
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Code className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Coding Portfolio</h1>
                <p className="text-sm text-gray-600">Showcase of solved problems across different frameworks and libraries</p>
              </div>
            </div>
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedCategory === category ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>

              <h2 className="text-lg font-semibold mb-4 mt-8">Frameworks/Libraries</h2>
              <nav className="space-y-2">
                {frameworks.map((framework) => (
                  <button
                    key={framework}
                    onClick={() => setSelectedFramework(framework)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${selectedFramework === framework ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    {framework}
                  </button>
                ))}
              </nav>

              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Stats</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Total Problems:</span>
                    <span className="font-medium">{problems.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Categories:</span>
                    <span className="font-medium">{categories.length - 1}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frameworks:</span>
                    <span className="font-medium">{frameworks.length - 1}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search problems, descriptions, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Problems Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {filteredProblems.map((problem) => (
                <Card key={problem.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {React.createElement(problem.icon, { className: "w-5 h-5" })}
                        <CardTitle className="text-lg">{problem.title}</CardTitle>
                      </div>
                      <Badge className={getDifficultyColor(problem.difficulty)}>{problem.difficulty}</Badge>
                    </div>
                    <CardDescription>{problem.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Category: {problem.category}</span>
                        <span>Framework: {problem.framework}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {problem.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Link href={`/portfolio/problem/${problem.id}`}>View Solution</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProblems.length === 0 && (
              <div className="text-center py-12">
                <Code className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No problems found</h3>
                <p className="text-gray-600">Try adjusting your search or category filter.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}