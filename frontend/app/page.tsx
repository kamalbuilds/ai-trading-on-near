import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart2, Cpu, Globe, MessageCircle, Zap } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  NearSense: AI-Powered Sentiment Analysis for Crypto Trading
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Leverage real-time Twitter sentiment to make informed trading decisions on the NEAR blockchain.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                  Get Started
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Globe className="h-8 w-8 mb-2" />
                  <CardTitle>Real-Time Twitter Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Track and analyze tweets from top crypto KOLs for up-to-the-minute sentiment insights.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Cpu className="h-8 w-8 mb-2" />
                  <CardTitle>AI-Powered Sentiment Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Utilize a trained AI model to deliver accurate sentiment ratings for market confidence.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart2 className="h-8 w-8 mb-2" />
                  <CardTitle>Sentiment-Driven Trading Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Display actionable sentiment indicators to enhance decision-making for cryptocurrency trading.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">1. Capture Tweets</h3>
                <p>NearSense continuously monitors tweets from influential Crypto Key Opinion Leaders.</p>
                <h3 className="text-xl font-bold">2. Analyze Sentiment</h3>
                <p>Our AI model processes the tweets in real-time, categorizing sentiment as positive, neutral, or negative.</p>
                <h3 className="text-xl font-bold">3. Display Insights</h3>
                <p>Sentiment data is instantly displayed to traders, providing a valuable indicator for trading strategies.</p>
                <h3 className="text-xl font-bold">4. Trade on NEAR</h3>
                <p>Use the sentiment insights to make informed trading decisions on the NEAR blockchain.</p>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-md aspect-video rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold">
                  NearSense Demo
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Traders Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Sarah K.</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>NearSense has revolutionized my trading strategy. The real-time sentiment analysis gives me an edge I never had before.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Michael R.</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>As a NEAR blockchain enthusiast, NearSense has become an indispensable tool in my trading arsenal.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Elena T.</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>The accuracy of NearSense sentiment analysis is impressive. It has helped me make more informed decisions in volatile markets.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Trade Smarter?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join NearSense today and start leveraging the power of AI-driven sentiment analysis in your crypto trading.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 NearSense. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}