"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

// Quiz questions
const questions = [
  {
    id: 1,
    question: "How would you describe your ideal weekend outfit?",
    options: [
      { id: "a", text: "Comfortable basics - jeans and a well-fitted t-shirt" },
      {
        id: "b",
        text: "Something eye-catching and unique that expresses my personality",
      },
      { id: "c", text: "Elegant and put-together, even when casual" },
      { id: "d", text: "Whatever feels right that day - I don't overthink it" },
    ],
  },
  {
    id: 2,
    question: "When shopping for clothes, what's most important to you?",
    options: [
      { id: "a", text: "Quality and durability - I want pieces that last" },
      { id: "b", text: "Uniqueness - I don't want to look like everyone else" },
      { id: "c", text: "How well it fits into my existing wardrobe" },
      { id: "d", text: "How it makes me feel when I wear it" },
    ],
  },
  {
    id: 3,
    question: "Which of these fashion 'rules' do you most often break?",
    options: [
      {
        id: "a",
        text: "I don't break rules - I appreciate classic style guidelines",
      },
      { id: "b", text: "All of them - rules are meant to be broken" },
      { id: "c", text: "I mix patterns or colors that traditionally 'clash'" },
      {
        id: "d",
        text: "I dress for comfort over style when the situation allows",
      },
    ],
  },
  {
    id: 4,
    question: "How do you feel about current fashion trends?",
    options: [
      {
        id: "a",
        text: "I observe them but only adopt ones that suit my personal style",
      },
      { id: "b", text: "I'm often ahead of trends or creating my own" },
      {
        id: "c",
        text: "I appreciate them from afar but stick to what works for me",
      },
      { id: "d", text: "I don't pay much attention to trends" },
    ],
  },
  {
    id: 5,
    question: "Which word best describes your approach to getting dressed?",
    options: [
      { id: "a", text: "Intentional" },
      { id: "b", text: "Expressive" },
      { id: "c", text: "Practical" },
      { id: "d", text: "Intuitive" },
    ],
  },
];

// Style personality types
const styleTypes = [
  {
    id: "classic",
    title: "The Thoughtful Classic",
    description:
      "You value quality over quantity and appreciate timeless style. Your wardrobe consists of well-made basics that can be mixed and matched effortlessly.",
    recommendations:
      "Focus on investing in high-quality staples in neutral colors. Look for secondhand designer pieces that have stood the test of time.",
  },
  {
    id: "creative",
    title: "The Creative Individualist",
    description:
      "You use clothing as a form of self-expression and aren't afraid to stand out. You're drawn to unique pieces with interesting details or history.",
    recommendations:
      "Explore vintage and one-of-a-kind secondhand items. Look for pieces with unusual cuts, textures, or patterns that speak to your personality.",
  },
  {
    id: "minimal",
    title: "The Mindful Minimalist",
    description:
      "You prefer a streamlined, uncluttered approach to dressing. You're thoughtful about each addition to your wardrobe and value functionality.",
    recommendations:
      "Seek out high-quality secondhand basics in a cohesive color palette. Focus on versatile pieces that can be styled multiple ways.",
  },
  {
    id: "eclectic",
    title: "The Intuitive Eclectic",
    description:
      "You dress according to your mood and intuition rather than strict rules. Your style is fluid and adaptable, reflecting different facets of your personality.",
    recommendations:
      "Build a diverse secondhand collection that allows for versatility. Mix different styles, eras, and aesthetics based on how you feel each day.",
  },
];

export default function StyleQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [styleResult, setStyleResult] = useState<(typeof styleTypes)[0] | null>(
    null
  );

  const handleNext = () => {
    if (selectedOption) {
      // Save answer
      setAnswers({
        ...answers,
        [questions[currentQuestion].id]: selectedOption,
      });

      // Move to next question or complete quiz
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        // Calculate result
        const result = calculateResult(answers);
        setStyleResult(result);
        setQuizComplete(true);
      }
    }
  };

  // Simple algorithm to determine style type based on answers
  const calculateResult = (answers: Record<number, string>) => {
    const counts = { a: 0, b: 0, c: 0, d: 0 };

    Object.values(answers).forEach((answer) => {
      counts[answer as keyof typeof counts]++;
    });

    // Map answer patterns to style types
    if (counts.a > counts.b && counts.a > counts.c && counts.a > counts.d) {
      return styleTypes[0]; // Classic
    } else if (
      counts.b > counts.a &&
      counts.b > counts.c &&
      counts.b > counts.d
    ) {
      return styleTypes[1]; // Creative
    } else if (
      counts.c > counts.a &&
      counts.c > counts.b &&
      counts.c > counts.d
    ) {
      return styleTypes[2]; // Minimal
    } else {
      return styleTypes[3]; // Eclectic
    }
  };

  return (
    <div className="bg-cream min-h-screen mt-10 py-12">
      <div className="container mx-auto px-4">
        {!quizComplete ? (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-amber-800 mb-4 font-serif">
                Discover Your Style Personality
              </h1>
              <p className="text-amber-700">
                Answer these questions to uncover your authentic style
                preferences and receive personalized recommendations.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between text-sm text-amber-700 mb-2">
                <span>
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span>
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}
                  % complete
                </span>
              </div>
              <Progress
                value={((currentQuestion + 1) / questions.length) * 100}
                className="h-2"
              />
            </div>

            <Card className="border-amber-200">
              <CardContent className="pt-6">
                <h2 className="text-xl font-medium text-amber-800 mb-6">
                  {questions[currentQuestion].question}
                </h2>

                <RadioGroup
                  value={selectedOption || ""}
                  onValueChange={setSelectedOption}
                >
                  <div className="space-y-4">
                    {questions[currentQuestion].options.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-start space-x-2"
                      >
                        <RadioGroupItem
                          value={option.id}
                          id={option.id}
                          className="mt-1 border-amber-400 text-amber-700"
                        />
                        <Label
                          htmlFor={option.id}
                          className="text-amber-800 font-normal leading-relaxed"
                        >
                          {option.text}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>

                <div className="mt-8 flex justify-end">
                  <Button
                    onClick={handleNext}
                    disabled={!selectedOption}
                    className="bg-amber-700 hover:bg-amber-800 text-white"
                  >
                    {currentQuestion < questions.length - 1
                      ? "Next Question"
                      : "See Results"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-amber-800 mb-4 font-serif">
                Your Style Personality: {styleResult?.title}
              </h1>
              <p className="text-amber-700 max-w-xl mx-auto">
                Based on your answers, we've identified your unique style
                personality. Here's what it means and how to embrace it through
                sustainable fashion choices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Style personality illustration"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-amber-800 mb-4 font-serif">
                  {styleResult?.title}
                </h2>

                <p className="text-amber-800 mb-6">
                  {styleResult?.description}
                </p>

                <h3 className="text-xl font-medium text-amber-800 mb-3">
                  Recommendations for Your Style
                </h3>

                <p className="text-amber-800 mb-8">
                  {styleResult?.recommendations}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-amber-700 hover:bg-amber-800 text-white"
                  >
                    <Link href="/shop">Shop Curated Items</Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-amber-700 text-amber-700 hover:bg-amber-50"
                  >
                    <Link href="/guides">View Style Guides</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center font-serif">
                Explore Other Style Personalities
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {styleTypes
                  .filter((type) => type.id !== styleResult?.id)
                  .map((type) => (
                    <div
                      key={type.id}
                      className="bg-white rounded-lg p-4 shadow-sm"
                    >
                      <h3 className="text-lg font-medium text-amber-800 mb-2">
                        {type.title}
                      </h3>
                      <p className="text-amber-700 text-sm mb-4 line-clamp-3">
                        {type.description}
                      </p>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-amber-600 hover:text-amber-800"
                      >
                        Learn more
                      </Button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
