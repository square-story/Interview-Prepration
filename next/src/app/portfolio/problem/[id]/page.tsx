"use client"

import React, { useEffect, useState } from "react"
import { ArrowLeft, FileCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { problems, Problem } from "@/lib/problems-data"

export default function ProblemPage({ params }: { params: { id: string } }) {
  const [problem, setProblem] = useState<Problem | null>(null);
  
  useEffect(() => {
    // Find the problem by ID
    const foundProblem = problems.find(p => p.id === parseInt(params.id));
    if (foundProblem) {
      setProblem(foundProblem);
    }
  }, [params.id]);

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

  if (!problem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Problem Not Found</h1>
          <Button asChild>
            <Link href="/portfolio">Back to Portfolio</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              {problem.icon && React.createElement(problem.icon, { className: "w-8 h-8 text-blue-600 mr-3" })}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{problem.title}</h1>
                <p className="text-sm text-gray-600">{problem.category} / {problem.framework}</p>
              </div>
            </div>
            <Button asChild variant="outline">
              <Link href="/portfolio">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8">
          {/* Problem Details */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl">Problem Details</CardTitle>
                <Badge className={getDifficultyColor(problem.difficulty)}>{problem.difficulty}</Badge>
              </div>
              <CardDescription className="text-base">{problem.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Category</h3>
                  <p>{problem.category}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Framework/Library</h3>
                  <p>{problem.framework}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">File Path</h3>
                  <p className="font-mono text-sm bg-gray-100 p-2 rounded">{problem.path}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-1">
                    {problem.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Solution Code */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Solution</CardTitle>
              <CardDescription>Implementation code for this problem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
                {problem.code && (
                  <pre className="font-mono text-sm">
                    <code>{problem.code}</code>
                  </pre>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}